import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import IssueFormSkeleton from "./loading";
import { cache } from "react";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

export type EditIssueTpe = {
  params: { id: string };
};

const fetchIssue = cache((userId: number) =>
  prisma.issue.findUnique({ where: { id: userId } })
);

const EditIssuePage = async ({ params: { id } }: EditIssueTpe) => {
  const issue = await fetchIssue(parseInt(id));

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export const generateMetadata = async ({ params: { id } }: EditIssueTpe) => {
  const issue = await fetchIssue(parseInt(id));

  return {
    title: `bugr | Editing: ${issue?.title}`,
    description: `Editing issue with id: ${id}`,
  };
};

export default EditIssuePage;
