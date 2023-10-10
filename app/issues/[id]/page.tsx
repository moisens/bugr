import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

export type ParamsType = {
  params: {
    id: string;
  };
};

const IssueDetailPage = async ({ params: { id } }: ParamsType) => {
  //if (typeof id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  const { title, description, status, createdAt } = issue;

  return (
    <div>
      <Heading>{title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssuesStatusBadge status={status} />
        <Text>{createdAt.toDateString()}</Text>
      </Flex>
      <Card>
        <p>{description}</p>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
