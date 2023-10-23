import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

export type EditIssueTpe = {
  params: { id: string };
};

const EditIssuePage = async ({ params: { id } }: EditIssueTpe) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export const generateMetadata = async ({ params: { id } }: EditIssueTpe) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  return {
    title: `bugr | Editing: ${issue?.title}`,
    description: `Editing issue with id: ${id}`,
  };
};

export default EditIssuePage;
