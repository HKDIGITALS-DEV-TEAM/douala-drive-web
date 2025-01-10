import { useQuery } from "@tanstack/react-query";
import { getConfigurations, getConfigurationByName } from "./api";
import { Configuration } from "./types";

/**
 * Hook pour récupérer toutes les configurations.
 */
export const useConfigurations = () => {
  const { data, refetch, isLoading, isError } = useQuery<
    Configuration[],
    Error
  >({
    queryKey: ["configurations"],
    queryFn: getConfigurations,
  });

  return { configurations: data, refetch, isLoading, isError };
};

/**
 * Hook pour récupérer une configuration par nom.
 */
export const useConfigurationByName = (name: string) => {
  const { data, refetch, isLoading, isError } = useQuery<Configuration, Error>({
    queryKey: ["configuration", name],
    queryFn: () => getConfigurationByName(name),
    enabled: !!name,
  });

  return { configuration: data, refetch, isLoading, isError };
};
