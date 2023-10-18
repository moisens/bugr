"use client";

import { statuses } from "@/app/utils/utils";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const IssuesStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterStatus = (status: string) => {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = params.size ? `?${params.toString()}` : "";
    //const query = status ? `?status=${status}` : "";
    router.push(`/issues/list${query}`);
  };

  return (
    <Select.Root
      defaultValue={searchParams.get("status") ?? "All"}
      onValueChange={handleFilterStatus}
    >
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
