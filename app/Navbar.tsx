"use client";

import Link from "next/link";

import { links } from "@/utils/utils";

const Navbar = () => {
  return (
    <nav className="flex space-x-6 border-b  mb-5 px-5 h-14 items-center">
      <Link href="/">bugr</Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          const { id, label, href } = link;
          return (
            <li
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              key={id}
            >
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
