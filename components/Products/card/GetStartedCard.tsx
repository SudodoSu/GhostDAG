import Image from "next/image";
import React from "react";
import image1 from "@/public/images/Product/breeze2.png";
import image2 from "@/public/images/Product/breeze3.png";
import image3 from "@/public/images/Product/breeze4.png";

function GetStartedCard() {
  return (
    <section className="container3 mx-auto">
      <div>
        <h2 className="text-[calc(var(--one)*56)] tracking-[-1.12px] mt-[calc(var(--one)*80)] text-center">
          Get Started Quickly
        </h2>
        <p className="mt-[calc(var(--one)*12)]">
          The BlockDAG Card - Your Path To Financial Freedom
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[calc(var(--one)*16)] mt-[calc(var(--one)*64)] ">
        <div className="flex flex-col gap-[calc(var(--one)*24)] w-full lg:w-1/3 p-[calc(var(--one)*24)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)] bg-[#26262a]">
          <div className="aspect-[215/160]">
            <Image
              src={image1}
              alt="card"
              width={216}
              height={161}
              className="w-full h-full"
            />
          </div>
          <h3 className="text-[calc(var(--one)*20)] font-titleBold tracking-[-.4px] leading-[140%]">
            Register For Your BlockDAG Card
          </h3>
          <p className="text-left">
            Fill in your application details within 10 minutes
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col gap-[calc(var(--one)*24)] w-full lg:w-1/3 p-[calc(var(--one)*24)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)] bg-[#26262a]">
          <div className="aspect-[215/160]">
            <Image
              src={image2}
              alt="card"
              width={216}
              height={161}
              className="w-full h-full"
            />
          </div>
          <h3 className="text-[calc(var(--one)*20)] font-titleBold tracking-[-.4px] leading-[140%]">
            Store Funds To Your Card
          </h3>
          <p className="text-left">
            Easily deposit your funds in cryptocurrencies like Ethereum, Bitcoin
            and USDT
          </p>
        </div>

        {/*  */}
        <div className="flex flex-col gap-[calc(var(--one)*24)] w-full lg:w-1/3 p-[calc(var(--one)*24)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)] bg-[#26262a]">
          <div className="aspect-[215/160]">
            <Image
              src={image3}
              alt="card"
              width={216}
              height={161}
              className="w-full h-full"
            />
          </div>
          <h3 className="text-[calc(var(--one)*20)] font-titleBold tracking-[-.4px] leading-[140%]">
            Ready to Roll
          </h3>
          <p className="text-left">
            Begin transaction instantly with our virtual card or select the
            physical card delivery option (No KYC required)
          </p>
        </div>
      </div>
    </section>
  );
}

export default GetStartedCard;
