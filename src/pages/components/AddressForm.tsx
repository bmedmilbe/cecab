import React, { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
// The baseUrl import seems unused in the logic, but I'll keep it for completeness
// import baseUrl from "../../utils/baseUrl";

// 1. Define the interface for the component's state
interface ContactState {
  name: string;
  email: string;
  number: string;
  subject: string;
  text: string;
}

const alertContent = () => {
  MySwal.fire({
    title: "Obrigado!",
    text: "A sua mensagem foi recebida, vamos te reponder brevemente",
    icon: "success",
    timer: 5000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// 2. Form initial state (now using the defined interface)
const INITIAL_STATE: ContactState = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const AddressForm: React.FC = () => {
  // Use the defined interface for useState
  const [contact, setContact] = useState<ContactState>(INITIAL_STATE);

  // 3. Type the change handler with ChangeEvent
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  // 4. Type the submit handler with FormEvent
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // It's safer to use an empty string fallback or assertion for environment variables
      const url = `${import.meta.env.VITE_BASE_URL || ""}/cecab/messages/`;
      const { name, email, subject, text } = contact;

      // We explicitly exclude 'number' from the payload as it wasn't used in the original JS payload
      const payload = { name, email, subject, text };

      // Axios automatically handles JSON serialization
      await axios.post(url, payload);

      // Optionally reset the form state after success
      // setContact(INITIAL_STATE);

      alertContent();
    } catch (error) {
      console.error("Submission error:", error);
      // Optional: Add a SweetAlert for error handling here
      // Swal.fire("Erro", "Houve um problema ao enviar a sua mensagem.", "error");
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Note: The 'number' field exists in INITIAL_STATE but is not used in the form or payload. */}
          {/* If you wanted to include it in the form: */}
          {/* <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder="Telefone"
                className="form-control"
                value={contact.number}
                onChange={handleChange}
              />
            </div>
          </div>
          */}

          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols={30} // Use number for cols/rows in TSX
                rows={6} // Use number for cols/rows in TSX
                placeholder="Escreva a tua mensagem..."
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <button type="submit" className="default-btn">
              Enviar Messagem <span></span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
