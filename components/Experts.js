import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import expert1 from "../assets/img/expert1.jpg";
import expert2 from "../assets/img/expert2.jpg";
import expert3 from "../assets/img/expert3.jpg";
import expert4 from "../assets/img/expert4.jpg";
import expert5 from "../assets/img/expert5.jpg";

const Experts = () => {
  return (
    <Carousel
      autoPlay={true}
      autoPlayInterval={3000}
      infiniteLoop={true}
      showThumbs={true}
      showStatus={false}
      showIndicators={true}
    >
      <div className="conteneur_slider">
        <img src={expert1} alt="Expert1" />
        <p className="legend">
          Prescilia DANJOU, Assistance ressources humaines
        </p>
      </div>
      <div className="conteneur_slider">
        <img src={expert2} alt="Expert2" />
        <p className="legend">Hélène METARI, Assistante sociale</p>
      </div>
      <div className="conteneur_slider">
        <img src={expert3} alt="Expert3" />
        <p className="legend">
          Géraldine MOREAU, Responsable Ressources Humaines
          <br />
          Au quotidien, je fais du sur-mesure, comme toutes les équipes de DSI,
          pour faire matcher les profils de candidats et de recruteurs.
        </p>
      </div>
      <div className="conteneur_slider">
        <img src={expert4} alt="Expert4" />
        <p className="legend">
          Nicolas GUERIN, Directeur régional
          <br />
          j’ai la chance de pouvoir faire aujourd’hui de “l’ingénierie sociale”.
          Si vous avez besoin d’accompagnement dans votre politique RSE, de
          prestations techniques de qualité, ou tout simplement si vous voulez
          en savoir plus sur cette formidable entreprise, contactez moi !
        </p>
      </div>
      <div className="conteneur_slider">
        <img src={expert5} alt="Expert5" />
        <p className="legend">
          Hafida DEVENDEVILLE, Chargée recrutement, Développement RH et
          Accompagnement Professionnel
          <br />
          Notre entreprise adaptée de services, offre par l’accompagnement une
          nouvelle chance professionnelle à une population éloignée de l’emploi,
          permettant à un travailleur RQTH d’exercer une activité
          professionnelle dans des conditions adaptées à ses capacités.
        </p>
      </div>
    </Carousel>
  );
};

export default Experts;
