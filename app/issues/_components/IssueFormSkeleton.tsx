import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <>
      <Box className="max-w-xl mb-10">
        <Skeleton height="2.4rem" className="mb-2" />
        <Skeleton height="20rem" />
      </Box>
      <Skeleton width="8.925rem" height="2rem" />
    </>
  );
};

export default IssueFormSkeleton;
