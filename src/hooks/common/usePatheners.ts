import useGenerall from "./useGenerall";

export interface Pathener {
  id: number;
  title: string;
  picture: string;
}

export const usePatheners = () => useGenerall<Pathener>("pathners", "pathners");
