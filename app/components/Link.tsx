import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

export type LinkPropsType = {
  href: string;
  children: string;
};

const Link = ({ href, children }: LinkPropsType) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink weight="medium" className="hover:bg-green-100 hover:text-green-900 px-2 rounded-3xl" >{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
