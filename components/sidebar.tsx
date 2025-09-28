"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  data: Category[];
}

const Sidebar: FC<SidebarProps> = ({ data }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu button - always visible */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-3 bg-white rounded-xl shadow-lg border border-gray-200 menu-button"
      >
        <Menu size={20} className="text-gray-700" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-enhanced"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Popup */}
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-80 bg-white border-r border-gray-200 sidebar-scroll sidebar-popup",
          isOpen && "open"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Categories</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2 overflow-y-auto flex-1">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
              "hover:bg-gray-100 hover:text-gray-900",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              pathname === "/"
                ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                : "text-gray-600"
            )}
          >
            <span className="ml-2">All Products</span>
          </Link>

          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                "hover:bg-gray-100 hover:text-gray-900",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                route.active
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                  : "text-gray-600"
              )}
            >
              <span className="ml-2">{route.label}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            Browse our categories to find exactly what you're looking for
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
