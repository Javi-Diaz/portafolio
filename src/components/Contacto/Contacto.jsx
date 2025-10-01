import "./Contacto.css";
import ModalEnviarPropuesta from "../modales/ModalEnviarPropuesta/ModalEnviarPropuesta";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

function Contacto() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
        e.preventDefault();

        const nombre = e.target.nombre.value.trim();
        const email = e.target.email.value.trim();
        const mensaje = e.target.mensaje.value.trim();

        if (nombre && email && mensaje) {
        setMostrarModal(true);

        setTimeout(() => {
            setMostrarModal(false);
            e.target.reset();
        }, 3000);
        }

        emailjs
        .sendForm(
            "service_2y6wgxe", // Service ID
            "template_fyihsdu", // Template ID
            form.current, // 👈 ahora sí tiene referencia
            "PHFQ2TglQ5cHevhFR" // Public key
        )
        .then(
            (result) => {
            console.log("✅ Mensaje enviado:", result.text);
            },
            (error) => {
            console.log("❌ Error:", error.text);
            }
        );
    };

  return (
    <div className="contacto-container" id="contacto">
      <h3 className="contacto-titulo">Contacto</h3>
      {/* 👇 le agregué ref={form} */}
      <form ref={form} onSubmit={handleSubmit} className="contacto-formulario">
        <label htmlFor="nombre" className="contacto-label">Nombre</label>
        <input
          type="text"
          name="nombre" // 👈 importante para EmailJS
          className="contacto-input"
          id="nombre"
          placeholder="Escribe tu nombre"
          required
        />

        <label htmlFor="email" className="contacto-label">Email</label>
        <input
          type="email"
          name="email" // 👈 importante para EmailJS
          className="contacto-input"
          id="email"
          placeholder="Escribe tu email"
          required
        />

        <label htmlFor="mensaje" className="contacto-label">Mensaje</label>
        <textarea
          name="mensaje" // 👈 importante para EmailJS
          id="mensaje"
          className="contacto-textarea"
          placeholder="Escribe tu mensaje"
          required
        ></textarea>

        <button type="submit" className="contacto-btnEnviar">
          Enviar mensaje
        </button>
      </form>

      <ModalEnviarPropuesta mostrarModal={mostrarModal} />
    </div>
  );
}

export default Contacto;
