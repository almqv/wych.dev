"use client";

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
import NavLinks from "../navlinks";
import { useEffect, useState } from "react";

type Essay = {
  title: string;
  slug: string;
  createdAt: string;
};

type NavCommandProps = {
  className?: string;
};

const NavCommand: React.FC<NavCommandProps> = ({ className, ...props }) => {
  const router = useRouter();
  const { open: actionOpen, setOpen: setActionOpen } = useActionCommand();
  const { theme, setTheme } = useTheme();
  const [essays, setEssays] = useState<Essay[]>([]);

  useEffect(() => {
    const fetchEssays = async () => {
      const response = await fetch('/essays');
      const data = await response.json();
      setEssays(data);
    };
    fetchEssays();
  }, []);

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
        <CommandInput placeholder="Type a command or search..." />
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
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Essays">
            {essays.map((essay) => (
              <CommandItem
                key={essay.slug}
                onSelect={action(() => {
                  router.push(`/essays/${essay.slug}`);
                })}
              >
                <GalleryHorizontalEnd className="mr-2 w-4 h-4" />
                <span>{essay.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="External links">
            {NavLinks.map((link) => (
              <CommandItem
                key={link.href}
                onSelect={action(() => {
                  router.push(link.href);
                })}
              >
                <link.icon className="mr-2 w-4 h-4" />
                <span>{link.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default NavCommand;
