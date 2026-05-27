
"use client"
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { BiLogoBitcoin } from "react-icons/bi";
import { HiChartPie, HiShoppingBag, HiUser, } from "react-icons/hi";

export function AsideComponentDashboard() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/dashboard" icon={HiChartPie}>
            Dashboard
          </SidebarItem>
          <SidebarItem href="/dashboard/blog" icon={BiLogoBitcoin}>
            Blogs
          </SidebarItem>
          <SidebarItem href="/dashboard/product" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="/dashboard/setting" icon={HiUser}>
            Settings
          </SidebarItem>
         
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
