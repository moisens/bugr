import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { Flex, Button, Text } from "@radix-ui/themes";

export type PaginationPropsType = {
  itemCount: number;//Total number of items
  pageSize: number;//Number of item to show on each page
  currentPage: number;
};

const Pagination = ({
  itemCount,
  pageSize,
  currentPage,
}: PaginationPropsType) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button color="green" variant="soft" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon  />
      </Button>

      <Button color="green" variant="soft" disabled={currentPage === 1}>
        <ChevronLeftIcon />
      </Button>
      <Button color="green" variant="soft" disabled={currentPage === pageCount}>
        <ChevronRightIcon />
      </Button>

      <Button color="green" variant="soft" disabled={currentPage === 1}>
        <DoubleArrowRightIcon  />
      </Button>
    </Flex>
  );
};

export default Pagination;
