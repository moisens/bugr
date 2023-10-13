"use client";

import { links } from "@/utils/utils";
import { Box } from "@radix-ui/themes";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/" className="font-semibold text-2xl text-orange-800">
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
      <Box>
        {status === "authenticated" ? (
          <Link href="/api/auth/signout">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
