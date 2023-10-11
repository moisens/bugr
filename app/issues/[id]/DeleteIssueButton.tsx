import { Box, Button } from "@radix-ui/themes";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button
      color="tomato"
      size="2"
      variant="soft"
      className="hover:bg-red-500 hover:text-white transition-colors"
    >
      Delete Issue
    </Button>
  );
};

export default DeleteIssueButton;
