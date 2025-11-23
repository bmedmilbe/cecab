import useGenerall from "./useGenerall";

export interface PostHome {
  id: number; // Added for keying, assuming data has an ID (if not provided in original code, it's good practice)
  image: string;
  picture: string;
  info: string;
  title: string;
  beginnig: string;
  slug: string;
  text: string;
  posted_at: string;
  date: string;
  prev: string;
  next: string;
}

export const usePostsHome = () => useGenerall<PostHome>("posts", "postshome");
