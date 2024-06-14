"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { YoutubeSliderData } from "@/lib/YoutubeSliderData";

export default function YoutubeSlider() {
  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {YoutubeSliderData.data.map((item, index) => (
          <div
            key={index}
            className="px-[calc(var(--one)*35)] h-[calc(var(--one)*240)]"
          >
            <iframe
              width={845}
              height={480}
              className="w-full h-full aspect-video self-stretch"
              src={item.path}
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Product Overview Video"
              aria-hidden="true"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
