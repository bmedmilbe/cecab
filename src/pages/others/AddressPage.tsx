import { FiPhoneCall } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import PageHeader from "../components/PageHeader";
import AddressForm from "../components/AddressForm";
const AddressPage = () => {
  // Post is guaranteed to exist from this point forward
  return (
    <>
      <PageHeader title={"Contactos"} image={"images/about/cacau11.jpg"} />
      <section className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <span className="sub-title">Contacte nos</span>
                {/* <h2>Say Hello</h2> */}
                {/* <p>Your email address will not be published. We promise not to spam!</p> */}
              </div>

              <div className="contact-info">
                <ul className="contact-list">
                  <li>
                    <div className="icon">
                      <ImLocation />
                    </div>
                    <span>Endereço</span>
                    Rua Barão de Agua Izé, São Tomé
                  </li>

                  <li>
                    <div className="icon">
                      <MdEmail />
                    </div>
                    <span>Email</span>
                    adias.cecab@gmail.com <br />
                  </li>

                  <li>
                    <div className="icon">
                      <FiPhoneCall />
                    </div>
                    <span>Telefone</span>
                    +239 222 30 49 <br />
                  </li>
                </ul>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100067339444416"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@CECABSTP" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <span className="sub-title">Tem alguma questão?</span>
                <h2>Envie Mensagem</h2>
                <p>É com muito gosto que receberemos a sua mensagem!</p>
              </div>

              <AddressForm />
            </div>
          </div>
        </div>

        <div className="bg-map">
          <img src="/images/bg-map.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default AddressPage;
