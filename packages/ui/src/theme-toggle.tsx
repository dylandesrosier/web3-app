"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  console.log(theme);

  return (
    <Button
      variant="ghost"
      onClick={() => {
        console.log("clicked", theme);
        if (theme === "system") {
          setTheme("dark");
        } else if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("system");
        }
      }}
    >
      <Sun className="rotate-0 scale-100  dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
