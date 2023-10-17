import { Status, Issue } from "@prisma/client";

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

export type SortedByColmnsType = {
  id: string;
  label: string;
  value: keyof Issue;
  className?: string;
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

export const columns: SortedByColmnsType[] = [
  {
    id: "a5b6dca8-6d1b",
    label: "Issue",
    value: "title",
  },
  {
    id: "a5b6dfdc-6d1b",
    label: "Staus",
    value: "status",
    className: "hidden md:table-cell",
  },
  {
    id: "a5b6e2de-6d1b",
    label: "CreatedAt",
    value: "createdAt",
    className: "hidden md:table-cell",
  },
];
