import image1 from "@/public/images/svgs/Product/convenience.svg";
import image2 from "@/public/images/svgs/Product/security.svg";
import image3 from "@/public/images/svgs/Product/global-reach.svg";
import image4 from "@/public/images/svgs/Product/cost-effective.svg";
import image5 from "@/public/images/svgs/Product/payment-card-app-group.svg";
import Image from "next/image";

function WhyLimit() {
  return (
    <section className="mx-auto container3 flex flex-col gap-[calc(var(--one)*48)] items-center justify-center mt-[calc(var(--one)*160)]">
      <div>
        <h1 className="text-center text-[calc(var(--one)*32)] tracking-[-.64px] leading-[130%] max-w-[calc(var(--one)*720)] font-titleBold">
          Why Limit Your Financial Experience When You Can Do More With BlockDAG
          Crypto Payment Card
        </h1>
      </div>
      <div className="flex felx-col lg:flex-row ">
        <div className="flex flex-col gap-[calc(var(--one)*20)] ">
          <div className="flex flex-col gap-[calc(var(--one)*32)] p-[calc(var(--one)*32)] bg-[#26262a] w-[calc(var(--one)*240)] min-h-[calc(var(--one)*240)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)]">
            <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
              <Image
                src={image1}
                alt="convinience icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-[calc(var(--one)*20)] tracking-[-.4px] leading-[140%] font-titleBold">
                Hassle-free manoeuvring
              </h3>
              <p className="text-left !mb-0">
                Manage your day-to-day expenses conveniently
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[calc(var(--one)*32)] p-[calc(var(--one)*32)] bg-[#26262a] w-[calc(var(--one)*240)] min-h-[calc(var(--one)*240)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)]">
            <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
              <Image
                src={image2}
                alt="convinience icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-[calc(var(--one)*20)] tracking-[-.4px] leading-[140%] font-titleBold">
                Safety and Security
              </h3>
              <p className="text-left !mb-0">
                AML compliance commits to protecting your data
              </p>
            </div>
          </div>
        </div>
        <div className="aspect-square relative w-full">
          <Image src={image5} alt="phone" className="w-full h-full" />
        </div>

        {/*  */}
        <div className="flex flex-col gap-[calc(var(--one)*20)] ">
          <div className="flex flex-col gap-[calc(var(--one)*32)] p-[calc(var(--one)*32)] bg-[#26262a] w-[calc(var(--one)*240)] min-h-[calc(var(--one)*240)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)]">
            <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
              <Image
                src={image3}
                alt="convinience icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-[calc(var(--one)*20)] tracking-[-.4px] leading-[140%] font-titleBold">
                Global Approach
              </h3>
              <p className="text-left !mb-0">
                No cross-border transaction costs on international transfers
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[calc(var(--one)*32)] p-[calc(var(--one)*32)] bg-[#26262a] w-[calc(var(--one)*240)] min-h-[calc(var(--one)*240)] border-[#3d3d40] border-[calc(var(--one)*1)] rounded-[calc(var(--one)*12)]">
            <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
              <Image
                src={image4}
                alt="convinience icon"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-[calc(var(--one)*20)] tracking-[-.4px] leading-[140%] font-titleBold">
                Economical rates
              </h3>
              <p className="text-left !mb-0">
                Low transaction costs ensure high value for each transaction
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          Lead your financial destiny with the GhostDAG crypto card. Your quest
          for financial greatness starts here
        </p>
      </div>
    </section>
  );
}

export default WhyLimit;
