import { NavLink } from "react-router-dom";

const JoinNow = () => {
  return (
    <>
      <section className="join-area ptb-100">
        <div className="container">
          <div className="join-content">
            <h2>Poder da Cooperação</h2>
            <p>
              Somos uma união de 42 Associações e aproximadamente 3000
              agricultores em São Tomé e Príncipe. Juntos, estamos empenhados em
              elevar os padrões de produção e produtividade, reforçando o futuro
              do nosso cacau biológico.{" "}
            </p>

            <NavLink to="/associations">
              <span className="default-btn">
                Ver Associações <i className="flaticon-right-chevron"></i>
                <span></span>
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinNow;
