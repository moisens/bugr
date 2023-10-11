import { IssuesStatusBadge } from "@/app/components"
import { Issue } from "@prisma/client"
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import ReactMarkdown from "react-markdown"






const IssueDetails = ({ issue }: { issue: Issue }) => {
  const { title, description, createdAt, status } = issue;
  return (
    <>
      <Box>
        <Heading>{title}</Heading>
        <Flex className="space-x-3" my="2">
          <IssuesStatusBadge status={status} />
          <Text>{createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{description}</ReactMarkdown>
        </Card>
      </Box>
    </>
  )
}

export default IssueDetails