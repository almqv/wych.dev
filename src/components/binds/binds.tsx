"use client";

import { useRouter } from "next/navigation";
import Keybinds from "@/components/binds";
import { useActionCommand } from "@/hooks/useActionCommand";
import { useTheme } from "next-themes";

const NavBinds = () => {
  const router = useRouter();
  const { open: actionOpen, setOpen: setActionOpen } = useActionCommand();
  const { theme, setTheme } = useTheme();

  return (
    <Keybinds
      keybinds={{
        h: () => {
          router.push("/");
        },
        p: () => {
          router.push("/posts");
        },
        k: () => {
          setActionOpen(!actionOpen);
        },
        l: () => {
          setTheme(theme === "light" ? "dark" : "light");
        },
      }}
    />
  );
};

export default NavBinds;
