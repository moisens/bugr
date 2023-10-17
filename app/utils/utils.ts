import { Status } from "@prisma/client";

export type LinksType = {
  id: string;
  label: string;
  hrefLink: string;
};

export type IssuesStatusFilterType = {
  id: string;
  label: string;
  value?: Status;
};

export const links: LinksType[] = [
  {
    id: "e3b75c1e-651c",
    label: "Dashboard",
    hrefLink: "/",
  },
  {
    id: "e3b75f66-651c",
    label: "Issues",
    hrefLink: "/issues/list",
  },
];

export const statuses: IssuesStatusFilterType[] = [
  { id: "65e7c272-6cee", label: "All" },
  { id: "65e7c560-6cee", label: "Open", value: "OPEN" },
  { id: "65e7c9ca-6cee", label: "In Progress", value: "IN_PROGRESS" },
  { id: "65e7cbe6-6cee", label: "Closed", value: "CLOSED" },
];
