"use client";
import Image, { StaticImageData } from "next/image";
import image1 from "@/public/images/modern-bg.webp";
import image2 from "@/public/images/resources.png";

function PageDirectionPillar() {
  return (
    <section className="w-full mt-[calc(var(--one)*250)] relative">
      <div className="max-w-[min(var(--one)*1356,95%)] relative mx-auto">
        <div className="relative h-[calc(var(--one)*360)] rounded-3xl bg-[#1d44ff] overflow-hidden">
          <div className="aspect-[1226/786] w-full absolute left-0 -bottom-1/2 ">
            <Image
              src={image1}
              alt="modern-bg"
              width={1354}
              height={360}
              placeholder="blur"
              className=" w-full h-full rounded-3xl absolute"
            />
          </div>
          <div className="absolute top-[5%] left-[10%]">
            <span>Home {">"} Pillars</span>
          </div>
          <div className="flex absolute top-[25%] left-[10%]">
            <h1 className="text-[calc(var(--one)*56)] leading-[calc(var(--one)*72.8)] tracking-[calc(var(--one)*-1.8)] font-titleBold">
              Pillars
            </h1>
          </div>
          <div className="h-[calc(var(--one)*360)] w-[calc(var(--one)*650)] absolute right-0">
            <Image
              src={image2}
              alt="Ghost dag"
              width={568}
              height={361}
              className="w-full h-full inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageDirectionPillar;
