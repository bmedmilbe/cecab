import { useQuery } from "@tanstack/react-query";
import ApiClient, { apiStartEndpoint } from "../../services/api-client";

const useGenerall = <T>(endpoint: string, queryKey: string) => {
  const apiClient = new ApiClient<T>(`${apiStartEndpoint}/${endpoint}`);
  return useQuery({
    queryFn: apiClient.getAll,
    queryKey: [queryKey],
  });
};

export default useGenerall;
