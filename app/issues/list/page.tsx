import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQueryType, columnNames } from "./IssueTable";

export const dynamic = "force-dynamic"; //Force dynamic rendering and uncached data fetching of a layout or page by disabling all caching of fetch requests and always revalidating.
//export const revalidate = 0 OR 60 etc. //same thing as "force-dynamic"

export type SearchParamsType = {
  searchParams: IssueQueryType;
};

const IsssuesPage = async ({ searchParams }: SearchParamsType) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const orderBy = columnNames.includes(searchParams.orderBy)
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
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        itemCount={issueCount}
        currentPage={page}
      />
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "bugr | Issues list",
  description: "List of all the issues!",
};

export default IsssuesPage;
