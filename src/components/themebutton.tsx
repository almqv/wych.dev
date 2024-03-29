"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Eclipse, SunMoon } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeButtonProps = {
  className?: string;
};

const iconClassname = "w-5 h-5";

const ThemeButton: React.FC<ThemeButtonProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      className="w-fit h-fit p-3"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <SunMoon className={cn(iconClassname, className)} />
      ) : (
        <Eclipse className={cn(iconClassname, className)} />
      )}
    </Button>
  );
};

export default ThemeButton;
