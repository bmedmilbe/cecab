import React from "react";
import type { Spot } from "../../hooks/posts/useProgramsInfinite";

interface Props {
  setLink: React.Dispatch<React.SetStateAction<string>>;
  currentStatus: boolean;
  setCurrentStatus: React.Dispatch<React.SetStateAction<boolean>>;
  data: Spot;
  defaultPicture: string;
}
const ProgramArea = ({
  setLink,
  currentStatus,
  setCurrentStatus,
  data,
  defaultPicture,
}: Props) => {
  function renderVideo(link: string) {
    setCurrentStatus(!currentStatus);
    setLink(link);
  }

  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-6"
        onClick={() => {
          renderVideo(data.link);
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="single-services-box">
          <div className="icon">
            <div className="video-box">
              <img
                // src={data.picture || "/images/about/cacau7.jpg"}
                src={data?.picture || defaultPicture}
                alt={data.title}
              />
              <div className="play-video">
                <div
                  onClick={() => {
                    renderVideo(data.link);
                  }}
                  className="video-btn"
                >
                  <i className="flaticon-play-button-1"></i>
                </div>

                {/* <span>Watch Now</span> */}
              </div>
            </div>
          </div>

          <h3

          // style={{ color: "#ffbb0f" }}
          >
            {data.title}
          </h3>

          <div className="box-shape">
            <img src="/images/box-shape1.png" alt="image" />
            <img src="/images/box-shape2.png" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramArea;
