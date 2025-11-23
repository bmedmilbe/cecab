import { NavLink } from "react-router-dom";
import { useYearGols } from "../../hooks/common/useYearGols";
import Loader from "../components/Loader";
import PageHeader from "../components/PageHeader";
import Partners from "../components/Partners";
const ProductionPage = () => {
  const { data, isLoading } = useYearGols();

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeader title="Produções" image="images/about/cacau11.jpg" />
      <div className="container">
        <div className="row mt-4">
          {data?.map((slid, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              // onClick={() => {
              //   renderVideo(data.link);
              // }}
              style={{ cursor: "pointer" }}
              key={index}
            >
              <div className="single-services-box">
                <div className="services-content">
                  <h3>
                    <NavLink to="/service-details">
                      <a>{slid.year}</a>
                    </NavLink>
                  </h3>
                  <ul>
                    <li>
                      Associações:{" "}
                      <span className="fw-bold">{slid.associations}</span>
                    </li>
                    <li>
                      Agricultores:{" "}
                      <span className="fw-bold">{slid.agricultors}</span>
                    </li>
                    <li>
                      Produção:{" "}
                      <span className="fw-bold">{slid.products} Toneladas</span>
                    </li>
                  </ul>
                </div>
                <div className="box-shape">
                  <img src="/images/box-shape1.png" alt="image" />
                  <img src="/images/box-shape2.png" alt="image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-bg-white">
        <Partners />
      </div>
    </>
  );
};

export default ProductionPage;
