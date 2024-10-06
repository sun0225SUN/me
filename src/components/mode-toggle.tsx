"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { forwardRef } from "react";

export const ModeToggle = forwardRef(function ModeToggle(props, ref) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setTheme(newTheme);
    } else {
      document.startViewTransition(() => setTheme(newTheme));
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      variant="ghost"
      type="button"
      size="icon"
      className="px-2"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
});
