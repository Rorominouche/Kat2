import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partenaire1 from "../assets/img/partenaire1.jpg";
import partenaire2 from "../assets/img/partenaire2.jpg";
import partenaire3 from "../assets/img/partenaire3.jpg";
import partenaire4 from "../assets/img/partenaire4.jpg";
import partenaire5 from "../assets/img/partenaire5.jpg";
import partenaire6 from "../assets/img/partenaire6.jpg";
import partenaire7 from "../assets/img/partenaire7.jpg";
import partenaire8 from "../assets/img/partenaire8.jpg";
import partenaire9 from "../assets/img/partenaire9.jpg";
import partenaire10 from "../assets/img/partenaire10.jpg";

const CarouselWithArrows = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500, //en millisecondes
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true, // Activer les flèches de navigation
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="logopartenaire">
        <img src={partenaire1} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire2} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire3} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire4} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire5} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire6} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire7} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire8} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire9} alt="" />
      </div>
      <div className="logopartenaire">
        <img src={partenaire10} alt="" />
      </div>
    </Slider>
  );
};

export default CarouselWithArrows;
