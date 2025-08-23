import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: false, // default closed on mobile
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
