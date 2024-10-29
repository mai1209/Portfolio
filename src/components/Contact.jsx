import React, { useRef } from "react";
import style from "../style/Contact.module.css";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit ,reset } = useForm();
  const form = useRef();

  const sendEmail = (data) => {
    emailjs
      .send('service_7feqy36', 'template_o68wtd9', {
        from_name: data.name, // Pasar el nombre
        from_subject: data.subject, // Pasar el sujeto
        from_email: data.email, // Pasar el correo
        message: data.message // Pasar el mensaje
      }, 'Kdr4L70mUSGLHwE87') // Clave pública
      .then(
        (response) => {
          console.log('Correo enviado con éxito', response.text);
          alert("Correo enviado correctamente");
          reset(); // Resetea el formulario después de enviar
        },
        (error) => {
          console.log('Error al enviar el correo', error.text);
          alert("Correo No se  envió correctamente");
        },
      );
  };

  return (
    <div id="contact" className={style.Body}>
      <div className={style.Contact}>
        <div className={style.Info}>
          <p className={style.Title}>Contact & Info</p>
          <div className={style.ContactInfo}>
            <p>Name: <span>Maira Coria</span></p>
            <p>Age: <span>28</span></p>
            <p>Email: <span>maidev1209@gmail.com</span></p>
            <p>Location: <span>Santa Fe - Argentina</span></p>
          </div>
          <a className={style.Button} href="../../MaiCV.pdf" download="maiCV.pdf">Download CV</a>
        </div>
        <img className={style.Image} src="../../form.png" alt="forming" />
    
        {/* Formulario */}
        <form className={style.Form} ref={form} onSubmit={handleSubmit(sendEmail)}>
          <p className={style.FormTitle}>Send an email</p>
          <div className={style.FormContent}>
            <div className={style.Input}>
              <input id="name" {...register("name", { required: true })} placeholder="Your Name" />
              <input id="subject" {...register("subject", { required: true })} placeholder="Subject" />
            </div>
            <input id="email" {...register("email", { required: true })} placeholder="Your Email" />
            <textarea rows={5} id="message" {...register("message", { required: true })} placeholder="Your Message"></textarea>
            <button type="submit" className={style.Button2}  >Send Request</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;