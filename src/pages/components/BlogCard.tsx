import { BiTimeFive } from "react-icons/bi";
import type { PostHome } from "../../hooks/common/usePostsHome";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  post: PostHome;
}
const BlogCard = ({ post }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="single-blog-post">
          <div
            className="post-image"
            onClick={() => navigate(`/blogs/${post.slug}`)}
          >
            <img src={`${post.picture}`} alt={post.title} />

            <div className="date">
              {/* <i className="flaticon-calendar"></i> */}
              <BiTimeFive /> {` `}
              {post.posted_at}
            </div>
          </div>

          <div className="post-content">
            <h3 onClick={() => navigate(`/blogs/${post.slug}`)}>
              {/* <NavLink to={`/blogs/${post.slug}`}> */}
              {post.title}
              {/* </NavLink> */}
            </h3>
            <p>{post.beginnig.substring(0, 90)}...</p>

            {/* <NavLink to={`/blogs/${post.slug}`}> */}
            <NavLink className="default-btn" to={`/blogs/${post.slug}`}>
              Vizualizar <span></span>
            </NavLink>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
