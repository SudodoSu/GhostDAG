"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cardData } from "@/lib/products/card/cardData";
import "../products.css";
import rightNavi from "@/public/images/rightNavi.png";
import leftNavi from "@/public/images/leftNavi.png";
import { useEffect, useRef, useState } from "react";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-[calc(var(--one)*32)] h-[calc(var(--one)*32)]  right-0 top-1/2 absolute cursor-pointer"
      onClick={onClick}
    >
      <Image src={rightNavi} alt="pre nav" width={32} height={32} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-[calc(var(--one)*32)] h-[calc(var(--one)*32)] top-1/2 z-10 absolute cursor-pointer"
      onClick={onClick}
    >
      <Image src={leftNavi} alt="pre nav" width={32} height={32} />
    </div>
  );
}

export default function CardSlider() {
  var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    fade: true,
    arrows: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  let sliderRef1 = useRef<any>(null);
  let sliderRef2 = useRef<any>(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="flex flex-col gap-[calc(var(--one)*16)] overflow-hidden">
      <div className="rounded-[calc(var(--one)*16)] w-[calc(var(--one)*530)] h-[calc(var(--one)*450)] backgroundImage overflow-hidden relative">
        <Slider
          {...settings}
          asNavFor={nav2}
          ref={(slider: any) => (sliderRef1 = slider)}
        >
          {cardData.data.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <div className="rounded-[calc(var(--one)*16)] w-[calc(var(--one)*530)] h-[calc(var(--one)*450)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={420}
                  height={420}
                  placeholder="blur"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[calc(var(--one)*530)] overflow-hidden">
        <Slider
          asNavFor={nav1}
          ref={(slider: any) => (sliderRef2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {cardData.data.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden  rounded-[calc(var(--one)*16)] px-[calc(var(--one)*10)]"
            >
              <div className="backgroundImage rounded-[calc(var(--one)*16)] w-[calc(var(--one)*150)] h-[calc(var(--one)*150)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={420}
                  height={420}
                  placeholder="blur"
                  className="w-full h-full aspect-square"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
