import { Filter } from "lucide-react";
import { VehicleFilters as FilterType } from "../../hooks/useVehicleFilters";
import { useCategories, useStatuses } from "../../libs/vehicle/queries";
import { useEffect } from "react";

interface VehicleFiltersProps {
  filters: FilterType;
  updateFilters: (filters: Partial<FilterType>) => void;
}

export default function VehicleFilters({
  filters,
  updateFilters,
}: VehicleFiltersProps) {
  const { categories, refetch: refetchCategories } = useCategories();
  const { statuses, refetch: refetchStatuses } = useStatuses();

  useEffect(() => {
    if (!categories) refetchCategories();
    if (!statuses) refetchStatuses();
  }, [categories, statuses, refetchCategories, refetchStatuses]);

  return (
    <div className="w-full lg:w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filtres</h2>
      </div>

      {/* Catégorie */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Catégorie
        </label>
        <select
          value={filters.category || ""}
          onChange={(e) => updateFilters({ category: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50"
        >
          <option value="">Toutes</option>
          {categories?.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Statut */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Disponibilité
        </label>
        <select
          value={filters.status || ""}
          onChange={(e) => updateFilters({ status: e.target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#FFD700] focus:ring focus:ring-[#FFD700] focus:ring-opacity-50"
        >
          <option value="">Tous</option>
          {statuses?.map((status) => (
            <option key={status.id} value={status.name}>
              {status.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
