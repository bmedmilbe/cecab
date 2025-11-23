import { NavLink } from "react-router-dom";

const JoinNow = () => {
  return (
    <>
      <section className="join-area ptb-100">
        <div className="container">
          <div className="join-content">
            <h2>Uma cooperativa & 42 Associações.</h2>
            <p>
              Somos cerca de 3000 agricultores formados em associações que
              trabalhamos arduamente para melhorar a produção e produtividade.
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
