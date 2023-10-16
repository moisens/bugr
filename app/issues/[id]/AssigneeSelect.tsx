"use client";

import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/app/components";

const AssigneeSelect = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 300000,
    retry: 3,
  });

  if (isLoading) return <Skeleton />;
  if (error) return;

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assing issue to..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Users</Select.Label>
          {users?.map((user) => {
            const { id, name } = user;
            return (
              <Select.Item value={id} key={id}>
                {name}
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
