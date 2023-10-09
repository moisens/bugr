import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

export type StatusPropsType = {
  status: Status;
};

const statusMap: Record<
  Status,
  { label: string; color: "tomato" | "orange" | "green" }
> = {
  OPEN: { label: "Open", color: "tomato" },
  IN_PROGRESS: { label: "In Progress", color: "orange" },
  CLOSED: { label: "Closed", color: "green" },
};

const IssuesStatusBadge = ({ status }: StatusPropsType) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssuesStatusBadge;
