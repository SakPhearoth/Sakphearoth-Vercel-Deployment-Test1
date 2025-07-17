// import Image from 'next/image'
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MenuItems } from "./menu";

export default function NavbarComponent() {
  const pathname = usePathname();
  return (
    <nav className="w-[90%] mx-auto relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
      <div className="flex items-center flex-1">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="font-bold text-xl text-blue-700">
            <Link href="/">MyLogo</Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-10">
        {MenuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`${pathname === item.path ? "text-blue-500" : ""} `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
