import IssuesSummary from "./IssuesSummary";
import LatestIssues from "./LatestIssues";
import prisma from "@/prisma/client";

const Home = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <>
      <LatestIssues />
      <IssuesSummary open={open} inProgress={inProgress} closed={closed} />
    </>
  );
};

export default Home;
