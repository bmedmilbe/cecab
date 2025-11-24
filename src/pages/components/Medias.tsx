import { BiCameraMovie, BiMusic } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Medias = () => {
  return (
    <>
      <section className="our-mission-area">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-3 col-md-6 p-0">
              <div className="mission-image bg-1">
                <img src="/images/about/cacau7.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 p-0">
              <div className="mission-text">
                <div className="icon">
                  {/* <i className="flaticon-target"></i> */}
                  <BiCameraMovie />
                </div>

                <h3>Projetos e Ações da Cooperativa</h3>
                <p>
                  Explore a nossa galeria de vídeos e conheça de perto as
                  iniciativas da CECAB STP.
                </p>

                <NavLink to="/programs">
                  <a className="default-btn">
                    Vizualizar <i className="flaticon-right-chevron"></i>
                  </a>
                </NavLink>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 p-0">
              <div className="mission-image bg-2">
                <img src="/images/medias/band2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 p-0">
              <div className="mission-text">
                <div className="icon">
                  {/* <i className="flaticon-award"></i> */}
                  <BiMusic />
                </div>

                <h3>Enfatizando a Cultura</h3>
                <p>
                  Através da música, a nossa banda atua frequentemente nas
                  comunidades, abordando temas relevantes de forma culturalmente
                  próxima e impactante.{" "}
                </p>

                <NavLink to="/bands">
                  <a className="default-btn">
                    Vizualizar <i className="flaticon-right-chevron"></i>
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Medias;
