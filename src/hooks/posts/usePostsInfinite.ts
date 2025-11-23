import { useInfiniteQuery } from "@tanstack/react-query";
import { apiStartEndpoint } from "../../services/api-client";
import ApiClient, { type ResponseA } from "../../services/api-client";
import type { PostHome } from "../common/usePostsHome";

interface QueryParams {
  boss?: number;
  is_charge?: boolean;
  deliver?: number;
  completed?: boolean;
  completed_by?: number;
  friend?: number;
  friend_paid?: boolean;
  search?: string;
}

const usePostsInfinite = (query_params: QueryParams) => {
  const apiClient = new ApiClient<PostHome>(`${apiStartEndpoint}/posts`);
  return useInfiniteQuery<ResponseA<PostHome>>({
    queryFn: ({ pageParam = 0 }) => {
      // console.log(pageParam);
      return apiClient.getAllSecond({
        params: {
          ...query_params,
          limit: 10,
          offset: pageParam * 10,
        },
      });
    },
    queryKey: ["posts"],
    getNextPageParam: (lastPage, allPage) => {
      // return 3;
      // console.log(allPage.length % 10);
      //check if no next page in last page
      // console.log(lastPage);
      // return 1;
      let count = 0;
      allPage.map((p) => (count = count + p.results.length));
      return count != lastPage.count ? allPage.length : undefined;
    },
  });
};

export default usePostsInfinite;
