import Image from "next/image";
import ProductHeroSlider from "./ProductHeroSlider";

function ProductHero() {
  return (
    <section className="container3 mx-auto pt-[calc(var(--one)*27)]">
      <div className="flex flex-col md:flex-row justify-center gap-[calc(var(--one)*36)]">
        <div className="w-full md:w-1/2">
          <ProductHeroSlider />
        </div>
        <div className="flex flex-col gap-[calc(var(--one)*20)] py-[calc(var(--one)*42)] max-w-[calc(var(--one)*600)] items-start ">
          <h1 className="text-[calc(var(--one)*56)] leading-[calc(var(--one)*72.8)] font-titleBold">
            GhostDAG X1
          </h1>
          <div className="flex gap-[calc(var(--one)*16)] items-center rounded-[calc(var(--one)*12)] p-[calc(var(--one)*16)] text-[calc(var(--one)*16)] leading-[120%] bg-gray-gradient relative">
            <div className="flex flex-col gap-[calc(var(--one)*14)]">
              <h2 className="text-[calc(var(--one)*24)] font-titleBold tracking-[-.48px]">
                GhostDAG X1
              </h2>
              <span>Miner</span>
            </div>
            <div className="">
              <Image
                src="/images/Product/x1/x1.svg"
                alt="payment card"
                width={44}
                height={45}
                className="h-full w-full"
              />
            </div>
          </div>
          <p className="text-left !mb-0">
            Welcome to BlockDAG Mining, the gateway to effortless mobile
            cryptocurrency mining. Our platform prioritises a user-centric
            experience, empowering direct engagement in the network right from
            the convenience of your smartphone.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductHero;
