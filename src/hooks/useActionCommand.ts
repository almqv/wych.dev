import { create } from "zustand";

interface ActionCommandStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useActionCommand = create<ActionCommandStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
