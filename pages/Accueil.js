import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Call from "../components/Call";
import Bandeau from "../components/Bandeau";
import banniereaccueil from "../assets/img/banniereaccueil.png";
import service1 from "../assets/img/service1.png";
import service2 from "../assets/img/service2.png";
import service3 from "../assets/img/service3.png";
import service4 from "../assets/img/service4.png";
import chiffre1 from "../assets/img/chiffres1.png";
import chiffre2 from "../assets/img/chiffres2.png";
import chiffre3 from "../assets/img/chiffres3.png";
import chiffre4 from "../assets/img/chiffres4.png";
import chiffre5 from "../assets/img/chiffres5.png";
import Footer from "../components/Footer";
import Experts from "../components/Experts";
import Carousel from "../components/Carousel";
import Mention from "../components/Mention";

const Accueil = () => {
  return (
    <div className="general">
      <div className="navbar">
        <Logo />
        <Navigation />
      </div>
      <div className="bandeauaccueil">
        <Call />
        <Bandeau />
      </div>
      <div className="banniere_accueil">
        <img
          id="banniereaccueil"
          src={banniereaccueil}
          alt="accueil site dsi"
        />
        <p>
          Confiez-nous la responsabilité de développer et mettre en oeuvre votre
          politique inclusive pour favoriser l'égalité des chances des personnes
          en situation de handicap.
        </p>
      </div>

      <div className="presentation">
        <div className="services">
          <div className="row">
            <div className="vignette">
              <img className="serv1" src={service1} alt="service 1" />
              <h4>Conseil et diagnostic</h4>
            </div>
            <div className="vignette">
              <img className="serv2" src={service3} alt="service 2" />
              <h4>Vos prestations externalisées</h4>
            </div>
          </div>
          <div className="row">
            <div className="vignette">
              <img className="serv3" src={service2} alt="service 3" />
              <h4>Sensibilisation</h4>
            </div>
            <div className="vignette">
              <img className="serv4" src={service4} alt="service 4" />
              <h4>Coaching à la diversité et à l'inclusion</h4>
            </div>
          </div>
        </div>
        <div className="presentationdroite">
          <h2>Vous êtes tous concernés!</h2>
          <p>
            DSI Méditerranée vous accompagne et vous soutient dans
            l'élaboration, la mise en oeuvre et l'expansion de votre politique
            handicap. Nous vous offrons une solution clé en main, y compris le
            montage et le suivi des financements AGEFIPH. Notre expertise est là
            pour contribuer à la démocratisation du handicap, un enjeu sociétal
            majeur.
          </p>
          <br />
          <h2>Nos prestations</h2>
          <p>
            Votre partenaire pour une prise en charge personnalisée. Que vous
            souhaitiez évaluer votre politique handicap, recruter des
            travailleurs handicapés, soutenir le maintien dans l'emploi,
            faciliter l'outplacement, offrir des formations ou améliorer votre
            communication, DSI Méditerranée est là pour vous accompagner...
            Notre équipe expérimentée met à votre disposition une gamme de
            prestations adaptées à vos besoins spécifiques. De plus, ces
            services peuventêtre éligibles à une déduction de votre contribution
            AGEFIPH, ce qui vous permet de maximiser votre investissement
          </p>
        </div>
      </div>

      <div className="entreprise">
        <h2>Notre Entreprise</h2>
        <p>
          Entreprise Fondée en 1994 par Jean-Louis RIBES, DSI est une SARL avec
          l’agrément d’État « Entreprise Adaptée » et « Entreprise Solidaire
          d’Utilité Sociale ». A ce titre, elle a un taux d’emploi de
          travailleurs handicapés de 84%.
        </p>
        <p>
          L' entreprise adaptée est une entreprise à part entière. Elle se
          développe sur un marché concurrentiel et est soumise aux mêmes
          contraintes de rentabilité et d'efficacité que les entreprises dites
          du "milieu ordinaire" de travail. Elle répond aux mêmes exigences de
          qualité, d'optimisation des coûts et de réactivité que les autres
          entreprises. Sa particularité est d'employer durablement au minimum
          80% de salariés handicapés dans son effectif de production, dans des
          conditions de travail adaptées à leur handicap.
        </p>
        <p>
          Etre acteur de l'économie sociale et solidaire, développer des
          partenariats durables avec un sous-traitant, travailler en
          collaboration avec des professionnels spécialistes de leur métier ou
          encore réduire sa contribution Agefiph (Association nationale pour la
          gestion du fonds d'insertion professionnelle des handicapés) sont
          autant de raisons pour une entreprise d'avoir recours à une entreprise
          adaptée. Le partenariat avec une entreprise adaptée, au-delà de cet
          avantage assimilable à un crédit d’impôt puisqu’il s’inscrit en
          résultat net, permet à l’entreprise ordinaire de s’inscrire dans la
          diversité et la solidarité et d’abonder sa charte éthique tout en
          remplissant ses obligations en matière de RSE.
        </p>
        <h3>Dans quel but travailler avec nous ?</h3>
        <p>
          <span>Responsabilité sociale : </span>Travailler avec une entreprise
          adaptée témoigne de l'engagement de votre organisation envers la
          responsabilité sociale et l'inclusion. Cela montre que vous soutenez
          activement l'emploi des personnes en situation de handicap et que vous
          valorisez la diversité dans votre chaîne d'approvisionnement et vos
          partenariats commerciaux.
        </p>
        <h3>Qui sommes-nous ?</h3>
        <p>
          DSI Méditerranée permet de créer un environnement inclusif et
          équitable où les personnes en situation de handicap peuvent s'épanouir
          et contribuer pleinement à la société
        </p>
        <p>
          <span>Inclusion et égalité des chances : </span>Nous croyons fermement
          que chaque individu a le droit d'être inclus et de bénéficier des
          mêmes opportunités professionnelles. Notre entreprise adaptée
          s'efforce de créer un environnement où les personnes en situation de
          handicap sont traitées de manière équitable et ont accès à des emplois
          valorisants, à des formations adaptées et à des possibilités de
          développement professionnel
        </p>
      </div>

      <div className="experts">
        <h2>Nos Experts</h2>
        <Experts />
      </div>

      <div className="chiffres">
        <div className="chiffre">
          <img src={chiffre1} alt="" />
        </div>
        <div className="chiffre">
          <img src={chiffre2} alt="" />
        </div>
        <div className="chiffre">
          <img src={chiffre3} alt="" />
        </div>
        <div className="chiffre">
          <img src={chiffre4} alt="" />
        </div>
        <div className="chiffre">
          <img src={chiffre5} alt="" />
        </div>
      </div>

      <div className="partenaires">
        <h2>Nos Partenaires</h2>
        <Carousel />
      </div>
      <Footer />
      <Mention />
    </div>
  );
};

export default Accueil;
