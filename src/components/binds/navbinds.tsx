"use client";

import { useRouter } from "next/navigation";
import Keybinds from "@/components/inputs/keybinds";
import { useActionCommand } from "@/hooks/useActionCommand";
import { useSidebar } from "@/hooks/useSidebar";
import { useTheme } from "next-themes";

const NavBinds = () => {
  const router = useRouter();
  const { open: actionOpen, setOpen: setActionOpen } = useActionCommand();
  const { open: sidebarOpen, setOpen: setSidebarOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <Keybinds
      keybinds={{
        f: () => {
          router.push("/");
        },
        s: () => {
          router.push("/settings");
        },
        h: () => {
          router.push("/history");
        },
        k: () => {
          setActionOpen(!actionOpen);
        },
        g: () => {
          setSidebarOpen(!sidebarOpen);
        },
        l: () => {
          setTheme(theme === "light" ? "dark" : "light");
        },
      }}
    />
  );
};

export default NavBinds;
