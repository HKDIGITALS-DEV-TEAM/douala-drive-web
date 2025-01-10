import { create } from "zustand";
import { Category, Status, Vehicle } from "./types";
import { persist } from "zustand/middleware";

type VehicleState = {
  vehicles: Vehicle[] | null;
  categories: Category[] | null;
  statuses: Status[] | null;
  selectedVehicle: Vehicle | null;
  selectedCategory: Category | null;
  setVehicles: (vehicles: Vehicle[]) => void;
  setCategories: (categories: Category[]) => void;
  setStatuses: (statuses: Status[]) => void;
  setSelectedVehicle: (vehicle: Vehicle) => void;
  setSelectedCategory: (category: Category) => void;
  clearSelectedVehicle: () => void;
  clearSelectedCategory: () => void;
};

const useVehicleStore = create<VehicleState>()(
  persist(
    (set) => ({
      selectedVehicle: null,
      selectedCategory: null,
      vehicles: null,
      categories: null,
      statuses: null,
      setSelectedVehicle: (vehicle) =>
        set(() => ({ selectedVehicle: vehicle })),
      setSelectedCategory: (category) =>
        set(() => ({ selectedCategory: category })),
      clearSelectedVehicle: () => set(() => ({ selectedVehicle: null })),
      clearSelectedCategory: () => set(() => ({ selectedCategory: null })),
      setVehicles: (vehicles) => set(() => ({ vehicles })),
      setCategories: (categories) => set(() => ({ categories })),
      setStatuses: (statuses) => set(() => ({ statuses })),
    }),
    {
      name: "vehicle-store",
    }
  )
);

export default useVehicleStore;
