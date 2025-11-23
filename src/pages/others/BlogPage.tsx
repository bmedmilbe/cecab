import { NavLink, useParams } from "react-router-dom";
import type { PostHome } from "../../hooks/common/usePostsHome";
import usePost from "../../hooks/posts/usePost";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import BlogSideBar from "../components/BlogSideBar";

const BlogPage = () => {
  // 1. Correctly type the parameters retrieved from the URL
  const { slug } = useParams<{ slug: string }>();

  // 2. Fetch data using the custom hook, specifying the expected return type (PostHome)
  const { data: post, isLoading } = usePost<PostHome>(slug || "");

  // Handle loading state
  if (isLoading) return <Loader />;

  // Handle case where post data is not found after loading
  if (!post) {
    return (
      <div className="container py-5">
        <h2 className="text-center">Post not found.</h2>
      </div>
    );
  }

  // Post is guaranteed to exist from this point forward
  return (
    <>
      <PageHeader
        title={post.title || ""}
        image={post.picture ? `${post.picture}` : ""}
        other={[{ title: "Actividades e Realizações", link: "/blogs" }]}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-content">
                <div
                  className="text"
                  dangerouslySetInnerHTML={{ __html: post.text || "" }}
                ></div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <span>Publicado</span> {post.posted_at}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="article-footer">
                <div className="article-share">
                  <ul className="social">
                    <li>
                      <span>Partilha:</span>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="post-navigation">
                <div className="navigation-links">
                  <div className="nav-previous">
                    <NavLink
                      to={post.prev ? `/blogs/${post.prev}` : "#"}
                      className={post.prev ? "" : "disabled-link"}
                    >
                      <i className="flaticon-left-chevron"></i> Actividade
                      Anterior
                    </NavLink>
                  </div>

                  <div className="nav-next">
                    <NavLink
                      to={post.next ? `/blogs/${post.next}` : "#"}
                      className={post.next ? "" : "disabled-link"}
                    >
                      Actividade Seguinte{" "}
                      <i className="flaticon-right-chevron"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <BlogSideBar post={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
