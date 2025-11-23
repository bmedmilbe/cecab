import React from "react";
import usePostsInfinite from "../../hooks/posts/usePostsInfinite";
import BlogCard from "../components/BlogCard";
import JoinNow from "../components/JoinNow";
import PageHeader from "../components/PageHeader";
const BlogsPage = () => {
  const query_param = {
    search: undefined,
  };
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    usePostsInfinite(query_param);

  return (
    <>
      <PageHeader
        title="Actividades e Realizações"
        image="images/about/cacau6.jpg"
      />
      <div className="container mt-4">
        <div className="row justify-content-center">
          {data?.pages?.map((page, index) => (
            <React.Fragment key={index}>
              {page?.results?.map((post) => (
                <BlogCard post={post} />
              ))}
            </React.Fragment>
          ))}
        </div>

        {(hasNextPage || isFetchingNextPage) && (
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <span className="other-link" onClick={() => fetchNextPage()}>
                {!isFetchingNextPage ? "Ver mais actividades" : "Carregando..."}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="section-bg-white">
        <JoinNow />
      </div>
    </>
  );
};

export default BlogsPage;
