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
        k: () => {
          setActionOpen(!actionOpen);
        },
      }}
    />
  );
};

export default NavBinds;
