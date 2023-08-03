import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Call from "../components/Call";
import Bandeau from "../components/Bandeau";
import FormTemplate from "../components/FormTemplate";
import Footer from "../components/Footer";
import Mention from "../components/Mention";

const Contact = () => {
  return (
    <div className="general">
      <div className="navbar">
        <Logo />
        <Navigation />
      </div>
      <div className="bandeauaccueil">
        <Call />
        <h1>Formulaire de contact</h1>
        <Bandeau />
        <h2>
          Pour toute demande d'information, n'hésitez pas à nous contacter en
          remplissant le formulaire suivant :
        </h2>
      </div>
      <div className="form">
        <FormTemplate />
      </div>

      <div className="footercontact">
        <Footer />
        <Mention />
      </div>
    </div>
  );
};

export default Contact;
