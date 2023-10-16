"use client";

import { Skeleton } from "@/app/components";
import { Issue } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import useFetchUsers from "../../hooks/usFetchUsers";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, isLoading, error } = useFetchUsers();

  if (isLoading) return <Skeleton />;
  if (error) return null;

  const handleAssignIssueToUser = async (userId: string) => {
    try {
      await axios.patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId === "unassigned" ? null : userId,
      });
    } catch (error) {
      toast.error("Unable to save the changes! 😞");
    }
  };

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || ""}
        onValueChange={handleAssignIssueToUser}
      >
        <Select.Trigger placeholder="Assing issue to..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Users Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
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
      <Toaster />
    </>
  );
};

export default AssigneeSelect;
