"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import "../products.css";
import How from "./how";

type AboutProps = {
  data: {
    description: string;
    utility: { span: string; text: string }[];
    cards: {
      image: StaticImageData;
      title: string;
      description: string;
    }[];
  };
};

function AboutProduct({ data }: AboutProps) {
  const { description, utility, cards } = data;
  const [active, setActive] = useState<string>("about");
  return (
    <section className="container3 mx-auto">
      <div>
        <div className="mt-[calc(var(--one)*100)] flex items-center justify-center">
          <span
            onClick={() => setActive("about")}
            className={`p-[calc(var(--one)*24)] border-b-[3px]  cursor-pointer text-center ${
              active === "about" ? "border-[#1d44ff]" : "border-[#47474b]"
            }`}
          >
            About Product
          </span>
          <span
            onClick={() => setActive("how")}
            className={`p-[calc(var(--one)*24)] border-b-[3px] cursor-pointer text-center ${
              active === "how" ? "border-[#1d44ff]" : "border-[#47474b]"
            }`}
          >
            How to Buy?
          </span>
        </div>
        {active === "about" && (
          <div className="">
            <h3 className="mt-[calc(var(--one)*80)] text-center font-titleBold leading-[calc(var(--one)*32)] text-[calc(var(--one)*20)]">
              {description}
            </h3>
            <div className="my-[calc(var(--one)*80)] flex flex-col md:flex-row md:divide-x divide-gray-200">
              {utility.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center px-[calc(var(--one)*32)] w-[max-content]"
                >
                  <p className="inline !mb-0">{item.span}</p>
                  <h4 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*-2)] font-titleBold">
                    {item.text}
                  </h4>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[calc(var(--one)*24)]">
              {cards.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#26262a] rounded-[calc(var(--one)*12)] min-w-[calc(var(--one)*271.44)] p-[calc(var(--one)*32)] gap-[calc(var(--one)*32)] relative flex flex-col"
                >
                  <div className="w-[calc(var(--one)*46)] h-[calc(var(--one)*45)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={46}
                      height={45}
                      placeholder="blur"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-[calc(var(--one)*24)]">
                    <h3 className="text-[calc(var(--one)*20)] leading-[calc(var(--one)*32)] font-titleBold">
                      {item.title}
                    </h3>
                    <p className="text-left !mb-0 leading-[calc(var(--one)*20.8)] text-[calc(var(--one)*16)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  */}
        {active === "how" && <How />}
      </div>
    </section>
  );
}

export default AboutProduct;
