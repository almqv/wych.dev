"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { GalleryHorizontalEnd, Home, SunMoon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionCommand } from "@/hooks/useActionCommand";
import { useTheme } from "next-themes";

type ActionCommandProps = {
  className?: string;
};

const ActionCommand: React.FC<ActionCommandProps> = ({
  className,
  ...props
}) => {
  const [value, setValue] = useState("");

  const router = useRouter();
  const { open: actionOpen, setOpen: setActionOpen } = useActionCommand();
  const { theme, setTheme } = useTheme();

  const action = (
    callback: ((value: string) => Promise<void>) | ((value: string) => void),
  ) => {
    return async (value: string) => {
      setActionOpen(false);
      await callback(value);
    };
  };

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none pr-12 md:w-40 lg:w-64",
          className,
        )}
        onClick={() => setActionOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search navigation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={actionOpen} onOpenChange={setActionOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          onValueChange={(search) => {
            setValue(search);
          }}
        />
        <CommandList>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={action(() => {
                router.push("/");
              })}
            >
              <Home className="mr-2 w-4 h-4" />
              <span>Home</span>
              <CommandShortcut>⌘H</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={action(() => {
                router.push("/posts");
              })}
            >
              <GalleryHorizontalEnd className="mr-2 w-4 h-4" />
              <span>Posts</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Appearance">
            <CommandItem
              onSelect={action(() => {
                setTheme(theme === "light" ? "dark" : "light");
              })}
            >
              <SunMoon className="mr-2 w-4 h-4" />
              <span>
                Switch to {theme === "light" ? "Dark" : "Light"} Theme
              </span>
              <CommandShortcut>⌘L</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default ActionCommand;
