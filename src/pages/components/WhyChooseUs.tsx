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
                    <span>Herança e Extensão</span>
                    São Tomé e Príncipe possui uma vasta área de cacauzal,
                    cultivada e aperfeiçoada desde o século XIX, testemunhando
                    uma rica história agrícola.
                  </li>

                  <li>
                    <div className="icon">
                      <FaCertificate />
                    </div>
                    <span>Qualidade e Mercado</span>A Certificação Biológica é a
                    nossa garantia de qualidade superior, essencial para cumprir
                    padrões internacionais e facilitar a exportação do nosso
                    cacau.
                  </li>
                  <li>
                    <div className="icon">
                      <GiHealthPotion />{" "}
                    </div>
                    <span>Benefício ao Consumidor</span>
                    Por ser um produto biológico puro, o nosso cacau assegura a
                    saúde e o bem-estar do consumidor, livre de aditivos
                    químicos.
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-location"></i> */}
                      <RiCheckboxFill />
                    </div>
                    <span>Terroir Único</span>
                    Graças ao solo fértil e rico de São Tomé e Príncipe,
                    produzimos um cacau de qualidade excecional, refletindo a
                    generosidade da nossa terra.
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-taxi"></i> */}
                      <GiChocolateBar />
                    </div>
                    <span>Transformação Local</span>O nosso objetivo é valorizar
                    a matéria-prima, transformando o nosso cacau de excelência
                    em chocolate de qualidade superior, feito em São Tomé e
                    Príncipe.
                  </li>

                  <li>
                    <div className="icon">
                      {/* <i className="flaticon-calendar"></i> */}
                      <RiTeamFill />
                    </div>
                    <span>Sinergia da Cooperativa</span>O trabalho colaborativo
                    entre as diferentes associações garante uma produção estável
                    e contínua de cacau, ano após ano.
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
