// src/features/config/store.ts
import { create } from "zustand";
import { Configuration } from "./types";
import { persist } from "zustand/middleware";

type ConfigState = {
  configuration: Configuration | null;
  configurations: Configuration[] | null;
  setConfiguration: (configuration: Configuration) => void;
  clearConfiguration: () => void;
  setConfigurations: (configurations: Configuration[]) => void;
  clearConfigurations: () => void;
};

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      configuration: null,
      configurations: null,
      setConfiguration: (configuration) => set(() => ({ configuration })),
      clearConfiguration: () => set(() => ({ configuration: null })),
      setConfigurations: (configurations) => set(() => ({ configurations })),
      clearConfigurations: () => set(() => ({ configurations: null })),
    }),
    {
      name: "config-store", // Nom dans le localStorage
    }
  )
);
