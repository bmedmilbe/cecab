import InfiniteScroll from "react-infinite-scroll-component";
import useAssossiationsInfinite from "../../hooks/assosiations/useAssossiationsInfinite";
import PageHeader from "../components/PageHeader";
import YearGols from "../components/YearGols";
import Loader from "../components/Loader";
import React from "react";
import { NavLink } from "react-router-dom";
import { getDay, getMonth, getYear } from "../../utils/dates";
const AssossiationsPage = () => {
  const query_param = {
    search: undefined,
  };
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useAssossiationsInfinite(query_param);

  return (
    <>
      <PageHeader title="Associações" image="images/about/cacau13.JPG" />
      <InfiniteScroll
        dataLength={length || 0} //This is important field to render the next data
        next={() => fetchNextPage()}
        hasMore={hasNextPage || false}
        loader={<Loader />}
        endMessage={
          <>
            <hr />
            <p className="fw-bold text-center">Já foram todas carregadas</p>
          </>
        }
      >
        {!isLoading && (
          <div className="row">
            {data?.pages?.map((page, index) => (
              <React.Fragment key={index}>
                {page.results?.map((ass, index2) => (
                  <div
                    className="col-xl-6 col-md-6 col-sm-12 single-event-box"
                    style={{ padding: "2rem" }}
                    key={index2}
                  >
                    <div className="border rounded row">
                      <div className="event-image text-center ">
                        <img
                          src={ass.picture}
                          alt={ass.name}
                          className="img-fluid"
                        />
                      </div>

                      <div className="event-content">
                        <div className="content text-center">
                          <h3>
                            <NavLink to="/event-details">{ass.name}</NavLink>
                          </h3>
                          <p>
                            {ass.address} - {ass.district_name}
                          </p>

                          <div
                            className="d-flex align-items-center mx-auto"
                            style={{ maxWidth: "15rem" }}
                          >
                            <div className="date_new d-flex align-items-center m-1">
                              <span className="m-1">
                                {getDay(ass.registered)}
                              </span>
                              <div className="d-flex flex-column">
                                <span className="text-center  sup">
                                  {getMonth(ass.registered)}
                                </span>
                                <span className="text-center sub">
                                  {getYear(ass.registered)}
                                </span>
                              </div>
                            </div>

                            <span className="fw-bold m-1 text-center">
                              <span
                                className="fs-3 primary-color"
                                style={{ lineHeight: 0 }}
                              >
                                {ass.number_of_associated}
                              </span>{" "}
                              <br />
                              membros
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        )}

        {isLoading && <Loader />}
      </InfiniteScroll>
      <div className="section-bg-white">
        <YearGols />
      </div>
    </>
  );
};

export default AssossiationsPage;
