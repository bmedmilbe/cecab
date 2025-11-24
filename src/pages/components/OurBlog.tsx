import React from "react";
import usePostsInfinite from "../../hooks/posts/usePostsInfinite";
import BlogCard from "./BlogCard";

const OurBlog = () => {
  const query_param = {
    search: undefined,
  };
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    usePostsInfinite(query_param);

  return (
    <>
      <section className="blog-area">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Blog CECAB</span>
            <h2>Notícias e Realizações</h2>
            <p>
              Descubra as atividades diárias da CECAB STP, o impacto nas
              comunidades e todas as iniciativas que são do interesse público.
            </p>
          </div>

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
                  {!isFetchingNextPage
                    ? "Ver mais actividades"
                    : "Carregando..."}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OurBlog;
