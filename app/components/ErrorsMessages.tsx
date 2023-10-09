import { Text } from "@radix-ui/themes";
import { PropsWithChildren } from "react";

const ErrorsMessages = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="tomato" as="p">
      {children}
    </Text>
  );
};

export default ErrorsMessages;
