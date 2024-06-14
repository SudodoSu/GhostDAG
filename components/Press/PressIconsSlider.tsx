"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PressIconsData } from "@/lib/PressIconsData";

export default function PressIconsSlider() {
  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    adaptiveHeight: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {PressIconsData.data.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="w-[calc(var(--one)*327)] h-[calc(var(--one)*237)] rounded-[calc(var(--one)*32)] flex justify-center items-center bg-[#26262a] relative"
              >
                <div>
                  <Image
                    src={item.path}
                    alt={item.alt}
                    width={200}
                    height={200}
                    className="w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Slider>
    </div>
  );
}
