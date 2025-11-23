import useGenerall from "./useGenerall";

interface Role {
  id: number;
  title: string;
}
export interface Team {
  id: number;
  name: string;
  picture: string;
  role: Role;
}

export const useTeam = () => useGenerall<Team>("teams", "teams");
