import authOptions from "@/app/api/auth/authOptions";
import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

export type ParamsType = {
  params: {
    id: string;
  };
};

const IssueDetailPage = async ({ params: { id } }: ParamsType) => {
  //if (typeof id !== "number") notFound();

  const session = await getServerSession(authOptions);

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  const { id: issueId } = issue;

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <IssueDetails issue={issue} />
      {session ? (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issueId} />
            <DeleteIssueButton issueId={issueId} />
          </Flex>
        </Box>
      ) : null}
    </Grid>
  );
};

export const generateMetadata = async ({ params: { id } }: ParamsType) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  return {
    title: `bugr | ${issue?.title}`,
    description: `details of the issue with id: ${id}`,
  };
};

export default IssueDetailPage;
