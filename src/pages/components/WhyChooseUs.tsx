import { GiHealthPotion, GiChocolateBar } from "react-icons/gi";
import { BsTextareaResize } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import { RiCheckboxFill, RiTeamFill } from "react-icons/ri";

const WhyChooseUs = () => {
  return (
    <section
      className="why-choose-us-area"
      style={{
        backgroundImage: `url(${"/images/about/cacau14.jpg"})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="why-choose-us-image">
              <img src="images/about/cacau13.JPG" alt="why choose CECAB" />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="why-choose-us-content">
              <div className="content">
                <h2>Porquê uma Cooperativa de CACAU Biológico</h2>
                <p>
                  "Unir é um bom começo, manter a união é um progresso e
                  trabalhar em conjunto é uma victória."
                </p>

                <ul className="features-list">
                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-knowledge"></i> */}
                      <BsTextareaResize />
                    </div>
                    <span>Área Cacauzal</span>
                    STP tem uma grande extensão de área cacauzal implementadas
                    desde os séc. XIX.
                  </li>

                  <li>
                    <div className="icon">
                      <FaCertificate />
                    </div>
                    <span>Certificação Biológica</span>A Certificação Biológica
                    garante a qualidade e facilita a exportação
                  </li>
                  <li>
                    <div className="icon">
                      <GiHealthPotion />{" "}
                    </div>
                    <span>Melhor Saúde</span>
                    Por ser um produto biológico, a saúde do consumidor estará
                    garantida
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-location"></i> */}
                      <RiCheckboxFill />
                    </div>
                    <span>Riqueza do Sólo</span>
                    São Tomé e Príncipe por ter um solo fértil permite a
                    produção de muito boa qualidade
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-taxi"></i> */}
                      <GiChocolateBar />
                    </div>
                    <span>Chocolate de Cacau</span>
                    Aproveitar o cacau e produzir chocolate de qualidade em São
                    Tomé e Príncipe
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-calendar"></i> */}
                      <RiTeamFill />
                    </div>
                    <span>Trabalho em Equipa</span>
                    Diferentes associações trabalham em conjunto e garantem a
                    produção, ano após ano
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
