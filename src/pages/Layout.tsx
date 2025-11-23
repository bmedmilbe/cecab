import { useState, useEffect, useCallback, type MouseEvent } from "react";

import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  // const nav = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("access");
  //   // nav("login");
  //   location.href = "/";
  // };
  // 1. Use useState for the 'collapsed' state
  const [collapsed, setCollapsed] = useState(true);

  // Function to toggle the collapse state
  const toggleNavbar = useCallback((): void => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  }, []); // Empty dependency array means this function is stable

  // 2. Use useEffect for the scroll-based 'is-sticky' logic (replaces componentDidMount)
  useEffect(() => {
    const handleScroll = (): void => {
      const elementId = document.getElementById("navbar");
      if (elementId) {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean-up function (replaces componentWillUnmount logic for listeners)
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only on mount and cleanup on unmount

  // 3. Derived values based on state
  const classOne: string = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo: string = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  const preventDefault = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
  };
  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="tuam-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <NavLink to="/">
                <a className="navbar-brand">
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </NavLink>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={!collapsed}
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/">
                      <a className="nav-Navlink">Início</a>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="#">
                      <a className="nav-Navlink" onClick={preventDefault}>
                        Sobre nós <i className="flaticon-down-arrow"></i>
                      </a>
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/associations" className="active">
                          <a className="nav-Navlink">Associações</a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/team" className="active">
                          <a className="nav-Navlink">Corpo Directivo</a>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/productions" className="active">
                          <a className="nav-Navlink">Produções</a>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blogs" className="active">
                      <a className="nav-Navlink">Actividades</a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/programs" className="active">
                      <a className="nav-Navlink">Programas</a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/bands" className="active">
                      <a className="nav-Navlink">Banda CECAB</a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/address" className="active">
                      <a className="nav-Navlink">Contactos</a>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="p-1">
        <Outlet />
      </div>
      <footer className="footer-area">
        <div className="container">
          {/* <div className="subscribe-area">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="subscribe-content">
                                        <h2>Join Our Newsletter</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="subscribe-form">
                                        <form className="newsletter-form">
                                            <input type="email" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" />
                                            <button type="submit">
                                                Subscribe Now <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div> */}

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <NavLink to="/">
                    <a>
                      <img src="/images/white-logo.png" alt="image" />
                    </a>
                  </NavLink>

                  <p>
                    CECAB-STP - Cooperativa de Produção e Exportação de Cacau
                    Biológico de São Tomé e Príncipe
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="flaticon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Menu</h3>

                <ul className="footer-quick-links">
                  <li>
                    <NavLink to="/">
                      <a>Início</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/associations">
                      <a>Associações</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/productions">
                      <a>Produção</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team">
                      <a>Corpo Directivo</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs">
                      <a>Actividades</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/programs">
                      <a>Programas</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bands">
                      <a>Banda CECAB</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/address">
                      <a>Contacte-nos</a>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contactos</h3>

                <ul className="footer-contact-info">
                  <li>
                    <span>Localização:</span> Rua Barão de Água Izé, São Tomé
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:tuam@gmail.com">adias.cecab@gmail.com</a>
                  </li>
                  <li>
                    <span>Telefone:</span>{" "}
                    <a href="tel:+(321)948754"> +239 222 3049</a>
                  </li>

                  <li>
                    <a
                      href="https://goo.gl/maps/NHJF2NwZFWDATAAq6"
                      target="_blank"
                    >
                      Ver Localização no Google Mapa
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <p>
                  <i className="far fa-copyright"></i> Site oficial da CECAB,
                  desenvolvido por by{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100089163908291"
                    target="_blank"
                  >
                    SitesTop
                  </a>
                </p>
              </div>

              {/* <div className="col-lg-6 col-sm-6 col-md-6">
                  <ul>
                    <li>
                      <NavLink to="#">
                        <a>Privacy Policy</a>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <a>Terms & Conditions</a>
                      </NavLink>
                    </li>
                  </ul>
                </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
