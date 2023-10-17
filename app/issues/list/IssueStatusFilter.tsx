"use client";

import { statuses } from "@/app/utils/utils";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const IssuesStatusFilter = () => {
  const router = useRouter();

  const handleFilterStatus = (status: string) => {
    const query = status ? `?status=${status}` : "";
    router.push(`/issues/list${query}`);
  };

  return (
    <Select.Root onValueChange={handleFilterStatus}>
      <Select.Trigger placeholder="Filter by status" />
      <Select.Content>
        {statuses.map((status) => {
          const { id, label, value } = status;
          return (
            <Select.Item key={id} value={value ?? "All"}>
              {label}
            </Select.Item>
          );
        })}
      </Select.Content>
    </Select.Root>
  );
};

export default IssuesStatusFilter;
