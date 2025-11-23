import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/api-client";
import { apiStartEndpoint } from "../../services/api-client";

const usePost = <PostHome>(slug: string) => {
  const apiClient = new ApiClient<PostHome>(
    `${apiStartEndpoint}/posts/${slug}`
  );
  return useQuery<PostHome>({
    queryFn: () => {
      return apiClient.getAllSimple({});
    },
    queryKey: ["posts", slug],
  });
};

export default usePost;
