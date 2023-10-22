import { Status } from "@prisma/client";
import { Flex, Card, Text } from "@radix-ui/themes";
import Link from "next/link";

export type SummaryValueType = {
  open: number;
  inProgress: number;
  closed: number;
};

export type SummaryStatusType = {
  label: string;
  value: number;
  status: Status;
};

const IssuesSummary = ({ open, inProgress, closed }: SummaryValueType) => {
  const containers: SummaryStatusType[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];

  return (
    <Flex gap="4">
      {containers.map((container) => {
        const { label, value, status } = container;
        return (
          <Card key={value}>
            <Flex direction="column" gap="1">
              <Link
                href={`/issues/list?status=${status}`}
                className="text-sm font-medium"
              >
                {label}
              </Link>
              <Text size="5" className="font-bold">
                {value}
              </Text>
            </Flex>
          </Card>
        );
      })}
    </Flex>
  );
};

export default IssuesSummary;
