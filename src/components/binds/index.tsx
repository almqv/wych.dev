"use client";
import React, { useEffect } from "react";

export type KeybindActionProps = () => void;

export type Keybinds = { [key: string]: KeybindActionProps };

type KeybindsProps = {
  keybinds: Keybinds;
};

const Keybinds: React.FC<KeybindsProps> = ({ keybinds }) => {
  const keyDownHandler = async (event: KeyboardEvent) => {
    try {
      if (event.metaKey || event.ctrlKey) {
        // Iterate over other keybinds and do them
        for (const [key, bind] of Object.entries(keybinds ?? {})) {
          if (event.key === key) {
            event.preventDefault();
            bind();
            return;
          }
        }
      }
    } catch (error) {
      console.error("Error in key down handler:", error);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  });

  return <div className="" id="keybinds_handler" />;
};

export default Keybinds;
