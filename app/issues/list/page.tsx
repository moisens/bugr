import { IssuesStatusBadge, Link } from "@/app/components";
import NextLink from "next/link";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import { Issue, Status } from "@prisma/client";
import { columns } from "@/app/utils/utils";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Pagination from "@/app/components/Pagination";

export const dynamic = "force-dynamic"; //Force dynamic rendering and uncached data fetching of a layout or page by disabling all caching of fetch requests and always revalidating.
//export const revalidate = 0 OR 60 etc. //same thing as "force-dynamic"

export type SearchParamsType = {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    page: string;
  };
};

const IsssuesPage = async ({ searchParams }: SearchParamsType) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  //await delay(2000)

  const issueCount = await prisma.issue.count({
    where,
  });

  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => {
              const { id, label, value, className } = column;
              return (
                <Table.ColumnHeaderCell key={id} className={className}>
                  <NextLink
                    href={{
                      query: { ...searchParams, orderBy: value },
                    }}
                  >
                    {label}
                  </NextLink>
                  {value === searchParams.orderBy ? (
                    <IoMdArrowDropup className="inline text-green-600" />
                  ) : (
                    <IoMdArrowDropdown className="inline" />
                  )}
                </Table.ColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => {
            const { id, title, status, createdAt } = issue;
            return (
              <Table.Row key={id}>
                <Table.Cell className="flex justify-between">
                  <Link href={`/issues/${id}`}>{title}</Link>
                  <div className="md:hidden">
                    <IssuesStatusBadge status={status} />
                  </div>
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  <IssuesStatusBadge status={status} />
                </Table.Cell>
                <Table.Cell className="hidden md:table-cell">
                  {createdAt.toDateString()}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
      <Pagination
        pageSize={pageSize}
        itemCount={issueCount}
        currentPage={page}
      />
    </div>
  );
};
export default IsssuesPage;
