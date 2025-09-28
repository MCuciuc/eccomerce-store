"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface CategoryItem {
  id: string;
  name: string;
}

interface MainNavProps {
  data: Category[]
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="hidden md:flex items-center space-x-1">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            route.active 
              ? "text-primary bg-accent shadow-sm" 
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {route.label}
          {route.active && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;