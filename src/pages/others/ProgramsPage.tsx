import FsLightbox from "fslightbox-react";
import React, { useState } from "react";
import useProgramsInfinite from "../../hooks/posts/useProgramsInfinite";
import Medias from "../components/Medias";
import PageHeader from "../components/PageHeader";
import ProgramArea from "../components/ProgramArea";
const ProgramsPage = () => {
  const query_param = {
    search: undefined,
  };
  const [currentStatus, setCurrentStatus] = useState(false);
  const [link, setLink] = useState("");
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useProgramsInfinite(query_param);

  return (
    <>
      <PageHeader title="Nossos Trabalhos" image="images/about/cacau15.jpg" />
      <FsLightbox sources={[link]} toggler={currentStatus} />

      <section className="video-are ptb-100 pb-0">
        <div className="container">
          <div className="row">
            {data?.pages?.map((page, index2) => (
              <React.Fragment key={index2}>
                {page.results.map((video, index) => (
                  <ProgramArea
                    setLink={setLink}
                    currentStatus={currentStatus}
                    setCurrentStatus={setCurrentStatus}
                    data={video}
                    defaultPicture={"/images/about/cacau7.jpg"}
                    key={index}
                  />
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

      <div className="section-bg-white">
        <Medias />
      </div>
    </>
  );
};

export default ProgramsPage;
