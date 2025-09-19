"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

const ModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = useMemo(() => {
    if (!mounted) return false;
    if (theme === "system") {
      return (systemTheme ?? (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) === "dark" ||
        (typeof systemTheme === "string" && systemTheme === "dark");
    }
    return theme === "dark";
  }, [theme, systemTheme, mounted]);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black/10 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ModeToggle;


