import { patchIssuesSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import authOptions from "../../auth/authOptions";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const validation = patchIssuesSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const { assignedToUserId, title, description } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json(
        { error: "That user doesn't exist in the database!" },
        { status: 400 }
      );
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json(
      { error: "It appear that issue doesn't exist in the database!" },
      { status: 404 }
    );

  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      description,
      assignedToUserId,
    },
  });

  return NextResponse.json(updatedIssue);
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  //await delay(2000)

  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json(
      {
        error:
          "The issue you're trying to delete doesn't exist is our database!",
      },
      { status: 404 }
    );

  await prisma.issue.delete({
    where: { id: issue.id },
  });

  return NextResponse.json({});
};
