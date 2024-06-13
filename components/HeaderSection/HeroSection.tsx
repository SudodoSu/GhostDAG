"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Keynote2 from "./sections/Keynote2";
import AddSection from "./sections/AddSection";

export default function HeroSection() {
  var settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    adaptiveHeight: true,
    pauseOnHover: false,
    dotsClass: "custom_dots slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {},
      },
      {
        breakpoint: 600,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {},
      },
    ],
  };
  return (
    <section className="w-screen h-screen">
      <Slider {...settings}>
        <Keynote2 />
        <AddSection />
      </Slider>
    </section>
  );
}
