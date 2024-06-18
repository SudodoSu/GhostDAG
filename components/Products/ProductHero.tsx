import Image, { StaticImageData } from "next/image";
import ProductHeroSlider from "./ProductHeroSlider";
import Link from "next/link";
import CalculateCost from "./AboutProduct/CalculateCost";
import { ProductHeroInfoData } from "@/lib/products/ProductHeroInfo";

type ProductHeroProps = {
  ProductInfoData: {
    name: string;
    description: string;
    image: string;
    cost: number;
  };
  ProductSlider: { image: StaticImageData; alt: string }[];
};

function ProductHero({ ProductInfoData, ProductSlider }: ProductHeroProps) {
  const { name, description, image, cost } = ProductInfoData;
  return (
    <section className="container3 mx-auto py-[calc(var(--one)*27)]">
      <div className="flex flex-col md:flex-row justify-center gap-[calc(var(--one)*36)]">
        <div className="w-full md:w-1/2">
          <ProductHeroSlider ProductSlider={ProductSlider} />
        </div>
        <div className="flex flex-col gap-[calc(var(--one)*20)] py-[calc(var(--one)*42)] max-w-[calc(var(--one)*600)] items-start ">
          <h1 className="text-[calc(var(--one)*56)] leading-[calc(var(--one)*72.8)] font-titleBold">
            {name}
          </h1>
          <div className="flex gap-[calc(var(--one)*16)] items-center rounded-[calc(var(--one)*12)] p-[calc(var(--one)*16)] text-[calc(var(--one)*16)] leading-[120%] bg-gray-gradient relative">
            <div className="flex flex-col gap-[calc(var(--one)*14)]">
              <h2 className="text-[calc(var(--one)*24)] font-titleBold tracking-[-.48px]">
                {name}
              </h2>
              <span>Miner</span>
            </div>
            <div className="">
              <Image
                src={image}
                alt={name}
                width={44}
                height={45}
                className="h-full w-full"
              />
            </div>
          </div>
          <p className="text-left !mb-0">{description}</p>
          <CalculateCost InitialCost={cost} />
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
