import { usePostsHome, type PostHome } from "../../hooks/common/usePostsHome";
import BlogSideCard from "./BlogSideCard";
import Spinner from "./Spinner";
interface Props {
  post: PostHome;
}
const BlogSideBar = ({ post }: Props) => {
  const { data, isLoading } = usePostsHome();
  if (isLoading) return <Spinner />;
  return (
    <>
      <aside className="widget-area pt-3" id="secondary">
        <div className="widget widget_zash_posts_thumb">
          <h3 className="widget-title">Outras Actividades</h3>

          {data
            ?.filter((c) => c.id != post.id)
            ?.map((currentPost) => (
              <BlogSideCard post={currentPost} />
            ))}
        </div>
      </aside>
    </>
  );
};

export default BlogSideBar;
