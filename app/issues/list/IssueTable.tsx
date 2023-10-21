import { IssuesStatusBadge } from "@/app/components";
import { columns } from "@/app/utils/utils";
import { Issue, Status } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import { default as Link, default as NextLink } from "next/link";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export type IssueQueryType = {
  status: Status;
  orderBy: keyof Issue;
  page: string;
};

export type IssueTablePropsType = {
  searchParams: IssueQueryType;
  issues: Issue[];
};

const IssueTable = ({ searchParams, issues }: IssueTablePropsType) => {
  return (
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
  );
};

export const columnNames = columns.map((column) => column.value);

export default IssueTable;
