import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

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

  const { id: issueId } = issue;

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <IssueDetails issue={issue} />
      <Box>
        <Flex direction="column" gap="4">
          <EditIssueButton issueId={issueId} />
          <DeleteIssueButton issueId={issueId} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
