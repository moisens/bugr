import { IssuesStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
      <Card className="prose" mt="4">
        <ReactMarkdown>{description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
