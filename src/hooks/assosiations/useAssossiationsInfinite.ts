import { useInfiniteQuery } from "@tanstack/react-query";
import { apiStartEndpoint } from "../../services/api-client";
import ApiClient, { type ResponseA } from "../../services/api-client";

interface QueryParams {}
interface Association {
  id: number;
  name: string;
  registered: string;
  address: string;
  number_of_associated: number;
  picture: string;
  images: [];
  district_name: string;
}

const useAssossiationsInfinite = (query_params: QueryParams) => {
  const apiClient = new ApiClient<Association>(
    `${apiStartEndpoint}/associations`
  );
  return useInfiniteQuery<ResponseA<Association>>({
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
    queryKey: ["associations"],
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

export default useAssossiationsInfinite;
