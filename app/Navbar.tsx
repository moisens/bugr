"use client";

import { Skeleton } from "@/app/components";
import { links } from "@/app/utils/utils";
import {
  Avatar,
  Box,
  Button,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
import classnames from "classnames";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <NavListAndLogo />
          <AuthComponent status={status} session={session} />
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;

export const NavListAndLogo = () => {
  const currentPath = usePathname();

  return (
    <Flex align="center" gap="3">
      <Link href="/" className="font-semibold text-orange-800">
        bugr
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          const { id, label, hrefLink } = link;
          return (
            <li
              className={classnames({
                "text-zinc-900": hrefLink === currentPath,
                "text-zinc-500": hrefLink !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              key={id}
            >
              <Link href={hrefLink}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </Flex>
  );
};

export type AuthComponentType = {
  status: "authenticated" | "loading" | "unauthenticated";
  session: Session | null;
};

export const AuthComponent = ({ status, session }: AuthComponentType) => {
  if (status === "loading") return <Skeleton width="3rem" />;

  return (
    <Box>
      {status === "authenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="cursor-pointer">
            <Avatar
              src={session!.user?.image!}
              fallback={session!.user?.name!?.slice(0, 1)}
              size="2"
              radius="full"
              className="curson-pointer"
              referrerPolicy="no-referrer"
            />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label>
              <Text size="2">{`Hello, ${session!.user?.name}`}</Text>
            </DropdownMenu.Label>
            <DropdownMenu.Item color="green">
              <Link href="/api/auth/signout">Logout</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
      {status === "unauthenticated" && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="cursor-pointer">
            <Text as="p">Login</Text>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <Box>
              <Box>{/*TODO: Add login with email here*/}</Box>
              <Box>
                <DropdownMenu.Item color="green">
                  <FcGoogle className="mr-2" />
                  {""}
                  <Link href="/api/auth/signin">Continue with Google</Link>
                </DropdownMenu.Item>
              </Box>
            </Box>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
      <Button>
        LOGIN
      </Button>
    </Box>
  );
};
