"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { items } from "./menu";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="txt-lg font-bold">App Sidebar</h1>
        <p className="txt-sm text-gray-500">Navigation Menu</p>
      </SidebarHeader>
      <SidebarContent className="px-5" >
        <SidebarGroup />
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="block p-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <item.icon className="inline-block mr-2" />
            <span>{item.title}</span>
          </Link>
        ))}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
