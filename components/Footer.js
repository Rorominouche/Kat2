import React from "react";
import cartedsi from "../assets/img/cartedsi.PNG";
import Formulaire from "../components/Formulaire";

const Footer = () => {
  return (
    <div className="footer">
      <div className="cartedsi">
        <img src={cartedsi} alt="carte DSI Méditerrannée" />
      </div>
      <div className="contact">
        <div className="adresse">
          80 Route des Lucioles <br />
          06560 <span class="blue-text">VALBONNE</span>
          <br />
          Téléphone: 07 86 47 57 68
        </div>
        <div className="adresses">
          Agence Provence Actiburo <br />
          3, bat A100 <br />
          Chemin de l'Aumône Vieille <br />
          13400 <span class="blue-text">AUBAGNE</span>
        </div>
        <div className="reseaux">
          <a href="https://www.facebook.com/DistributionServiceInternational/">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/group_dsi_fr">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/dsi-france?originalSubdomain=fr">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <Formulaire />
    </div>
  );
};

export default Footer;
