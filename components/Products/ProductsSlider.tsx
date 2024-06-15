"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { ProductsData } from "@/lib/ProductsData";

export default function ProductsSlider() {
  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    adaptiveHeight: true,
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
        {ProductsData.data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-[calc(var(--one)*20)] items-center"
          >
            <div className="flex items-center justify-center">
              <div className="w-full PickMinerImage relative flex justify-center">
                <div className="flex items-center justify-center max-w-[calc(var(--one)*240)] h-[calc(var(--one)*240)] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={240}
                    placeholder="blur"
                    className=" aspect-square"
                  />
                </div>
              </div>
            </div>
            <div className="my-[calc(var(--one)*30)]">
              <h4 className="text-center text-[calc(var(--one)*32)] leading-[130%] -tracking-[.64px] font-titleBold">
                {item.title}
              </h4>
              <span className="block text-center text-[#fe450a] text-[calc(var(--one)*32)] font-titleBold">
                {item.span}
              </span>
            </div>
            <div className="flex justify-center">
              <button className="mx-auto relative">
                <Link href={item.href} className="btn">
                  Details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
