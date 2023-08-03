import React, { useRef, useState, useEffect } from 'react';//
import emailjs from "@emailjs/browser";

const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_qr0wy67",
        // "template_xdxj4ym",
        "template_b3kio29",
        form.current,
        // process.env.REACT_APP_ID
        "0hOqlYHnd_BxknIwJ"
      )
      .then(
        (result) => {
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container-footer">
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="nom"
          required
          autoComplete="off"
          placeholder="Nom/entreprise"
        />
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Mail"
        />
        <input
          type="tel"
          name="tel"
          required
          autoComplete="off"
          placeholder="Numéro de téléphone"
        />
        <textarea name="message" required placeholder="Message" />
        <input type="submit" value="Envoyer" />
      </form>
    </div>

  );
};

export default Formulaire;
