import Image from "next/image";
import CardSlider from "./cardSlider";

function Card() {
  return (
    <section className="container3 mx-auto pt-[calc(var(--one)*27)]">
      <div className="flex flex-col md:flex-row justify-center gap-[calc(var(--one)*36)]">
        <div className="w-full md:w-1/2">
          <CardSlider />
        </div>
        <div className="flex flex-col gap-[calc(var(--one)*20)] py-[calc(var(--one)*42)] max-w-[calc(var(--one)*600)] items-start ">
          <h1 className="text-[calc(var(--one)*56)] leading-[calc(var(--one)*72.8)] font-titleBold">
            GhostDAG Payment Card
          </h1>
          <div className="flex gap-[calc(var(--one)*16)] items-center rounded-[calc(var(--one)*12)] p-[calc(var(--one)*16)] text-[calc(var(--one)*16)] leading-[120%] bg-gray-gradient relative">
            <div className="flex flex-col gap-[calc(var(--one)*14)]">
              <h2 className="text-[calc(var(--one)*24)] font-titleBold tracking-[-.48px]">
                GhostDAG
              </h2>
              <span>Payment Card</span>
            </div>
            <div className="">
              <Image
                src="/images/svgs/payment-card.svg"
                alt="payment card"
                width={44}
                height={45}
                className="h-full w-full"
              />
            </div>
          </div>

          <p className="text-left !mb-0">
            Level Up Your Financial Interaction With GhostDAG
          </p>
          <p className="text-left !mb-0">
            Embrace the crypto-to-fiat transactional convenience with the
            BlockDAG Crypto Payment Card. Stay stress-free with our rigorous
            security measures ensuring safe transactions every single time.
            Manage your digital assets and everyday expenses wherever and
            whenever you need them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
