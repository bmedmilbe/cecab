import useGenerall from "./useGenerall";

export interface YearGol {
  id: number;
  year: number;
  associations: number;
  agricultors: number;
  products: number;
}

export const useYearGols = () => useGenerall<YearGol>("yeargols", "yeargols");
