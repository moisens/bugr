import prisma from "@/prisma/client";
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
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
      <p>{createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
