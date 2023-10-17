"use client";

import { statuses } from "@/app/utils/utils";
import { Select } from "@radix-ui/themes";

const IssuesStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by stastus" />
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
