"use client";

import { links } from "@/utils/utils";
import {
  Box,
  Flex,
  Container,
  DropdownMenu,
  Avatar,
  Text,
  Button,
} from "@radix-ui/themes";
import { FcGoogle } from "react-icons/fc";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
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
          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    src={session.user?.image!}
                    fallback={session.user?.name!?.slice(0, 1)}
                    size="2"
                    radius="full"
                    className="curson-pointer"
                    referrerPolicy="no-referrer"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2">{session.user?.email}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item color="green">
                    <Link href="/api/auth/signout">Logout</Link>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button>Login</Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <Box>
                    <Box>{/*TODO: Add login with email here*/}</Box>
                    <Box>
                      <DropdownMenu.Item color="green">
                        <FcGoogle className="mr-2" />
                        {""}
                        <Link href="/api/auth/signin">
                          Continue with Google
                        </Link>
                      </DropdownMenu.Item>
                    </Box>
                  </Box>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
