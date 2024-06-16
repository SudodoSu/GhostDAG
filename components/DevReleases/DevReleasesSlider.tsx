"use client";
import { DevReleasesSliderData } from "@/lib/DevReleasesSliderData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./devreleases.css";
import Link from "next/link";
import image2 from "@/public/images/dev-release-empty-bg.png";

export default function DevReleasesSlider() {
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
        {DevReleasesSliderData.data.map((item, index) => (
          <div key={index} className="dev_releases_card_outer">
            <div className="dev_releases_card">
              <Link
                href={item.href}
                key={index}
                className="dev_releases_image_container "
              >
                <Image
                  src={image2}
                  alt="dev_releases_image"
                  width={500}
                  height={282}
                  placeholder="blur"
                  className="w-full h-full"
                />
                <h3 className="dev_releases_image_title">{item.title}</h3>
              </Link>
              <h6 className="">{item.title}</h6>
              <p className="slider_description">{item.des}</p>
              <span>{item.date}</span>
              <Link href={item.href} className="dev_releases_read_more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
