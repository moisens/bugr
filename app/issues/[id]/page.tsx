import { IssuesStatusBadge } from "@/app/components";
import prisma from "@/prisma/client";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";

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
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box>
        <Heading>{title}</Heading>
        <Flex className="space-x-3" my="2">
          <IssuesStatusBadge status={status} />
          <Text>{createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{description}</ReactMarkdown>
        </Card>
      </Box>
      <Box>
        <Button
          size="3"
          variant="soft"
          className="hover:bg-green-600 hover:text-white transition-colors"
        >
          <Pencil2Icon />
          <Link href={`/issues/${id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
