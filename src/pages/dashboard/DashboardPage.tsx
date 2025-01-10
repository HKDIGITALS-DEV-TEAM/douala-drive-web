import { useEffect } from "react";
import useVehicleStore from "../../libs/vehicle/store";
import useArticleStore from "../../libs/article/store";
import { useVehicles } from "../../libs/vehicle/queries";
import { useArticles } from "../../libs/article/queries";

export default function DashboardPage() {
  // Vehicle store and data fetching
  const { vehicles, setVehicles } = useVehicleStore();
  const { vehicles: fetchedVehicles, isLoading: isLoadingVehicles } =
    useVehicles();

  useEffect(() => {
    if (!vehicles && fetchedVehicles) {
      setVehicles(fetchedVehicles); // Update store if not already set
    }
  }, [vehicles, fetchedVehicles, setVehicles]);

  const vehicleCount = vehicles ? vehicles.length : 0;

  // Article store and data fetching
  const { articles, setArticles } = useArticleStore();
  const { articles: fetchedArticles, isLoading: isLoadingArticles } =
    useArticles();

  useEffect(() => {
    if (!articles && fetchedArticles) {
      setArticles(fetchedArticles); // Update store if not already set
    }
  }, [articles, fetchedArticles, setArticles]);

  const articleCount = articles ? articles.length : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
      {/* Vehicle Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900">Véhicules</h2>
        {isLoadingVehicles ? (
          <p className="text-gray-500 mt-2">Chargement...</p>
        ) : (
          <p className="text-3xl font-semibold mt-4 text-gray-800">
            {vehicleCount}
          </p>
        )}
      </div>

      {/* Article Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900">Articles</h2>
        {isLoadingArticles ? (
          <p className="text-gray-500 mt-2">Chargement...</p>
        ) : (
          <p className="text-3xl font-semibold mt-4 text-gray-800">
            {articleCount}
          </p>
        )}
      </div>
    </div>
  );
}
