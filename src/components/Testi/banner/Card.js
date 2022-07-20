import React from "react";
import Slider from "react-slick";

import '../assets/card.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card() {

  const dataTop = [
    {url:"images/testimoni/1.png"},
    {url:"images/testimoni/2.png"},
    {url:"images/testimoni/3.png"},
    {url:"images/testimoni/4.png"},
    {url:"images/testimoni/5.png"},
    {url:"images/testimoni/6.png"},
    {url:"images/testimoni/7.png"},
    {url:"images/testimoni/8.png"},
    {url:"images/testimoni/9.png"},
    {url:"images/testimoni/10.png"},
    {url:"images/testimoni/11.png"},
    {url:"images/testimoni/12.png"},
    {url:"images/testimoni/13.png"},
    {url:"images/testimoni/14.png"},
  ];

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            centerMode: false,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            centerMode: false,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
     <div className="container-carousel" id="testimoni">
      <h1>Apa Kata Mereka?</h1>
    <Slider {...settings} className="card__container--inner">
          {dataTop.map((item, index) => {
            return (
              <div
              className="card__container--inner--card"
              key={index}>
                <img src={item.url} alt="hero_img" />
              </div>
            );
          })}
        </Slider>
     </div>
       
    );
  }
