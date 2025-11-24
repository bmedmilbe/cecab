import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-title">
                {/* <span>About Us</span> */}
                <h2>Sempre a produzir com alta qualidade</h2>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-text">
                <p>
                  Desde 2004, a CECAB STP tem-se dedicado à produção e
                  exportação sustentável de Cacau Biológico em São Tomé e
                  Príncipe, trabalhando em estreita colaboração com associações
                  de agricultores locais nos diversos Distritos.
                </p>

                <NavLink to={`/productions`}>
                  <a className="read-more-btn">
                    Nossas produções <i className="flaticon-next"></i>
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

export default About;
