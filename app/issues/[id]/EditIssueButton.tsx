import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Box>
      <Button
        size="3"
        variant="soft"
        className="hover:bg-green-600 hover:text-white transition-colors"
      >
        <Pencil2Icon />
        <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
      </Button>
    </Box>
  );
};

export default EditIssueButton;
