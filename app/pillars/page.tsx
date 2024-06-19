import Faq from "@/components/Faq/Faq";
import PageDirectionPillar from "@/components/PageDestination/PageDirectionPillar";
import Products from "@/components/Products/Products";
import Image from "next/image";
import Link from "next/link";

import image1 from "@/public/images/Pillars/pluswallet.png";

import image2 from "@/public/images/Pillars/1.png";
import image3 from "@/public/images/Pillars/2.png";
import image4 from "@/public/images/Pillars/3.png";
import image5 from "@/public/images/Pillars/4.png";

function page() {
  return (
    <main>
      <PageDirectionPillar />
      <section className="py-[calc(var(--one)*100)] mx-auto w-full">
        <div className="flex flex-col gap-[calc(var(--one)*32)] items-center justify-center">
          <h1 className="text-[calc(var(--one)*90)] leading-[100%] font-titleBold">
            Future GhostDAG Pillars
          </h1>
          <p>
            Useful websites, tools, and pillars which will utilize BlockDAG
            after its successful launch!
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[calc(var(--one)*32)] container3 mx-auto">
        <div className="flex items-center flex-col py-[calc(var(--one)*48)] px-[calc(var(--one)*36)] gap-[calc(var(--one)*36)] rounded-[calc(var(--one)*24)] border-[calc(var(--one)*1)] border-[#3d3d40] bg-[#26262a]">
          <span className="text-[#1d44ff] text-[calc(var(--one)*32)] tracking-[-.64px] font-titleBold leading-[130%]">
            GhostDAG WALLET
          </span>
          <h2 className="text-[calc(var(--one)*56)]">PlusWallet</h2>
          <p className="w-[calc(var(--one)*380)]">
            Plus Wallet will be the exclusive wallet to hold your BDAG coins
            after presale has ended, currently available on appstore and google
            play store for download! <br />
            <a href="https://www.pluswallet.app/">www.pluswallet.app</a>
          </p>
          <button>
            <Link href="" className="btn">
              visit websites
            </Link>
          </button>
        </div>
        <div className="w-full aspect-[579/648] relative">
          <Image
            src={image1}
            alt="mobile"
            width={579}
            height={649}
            placeholder="blur"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </section>
      <section className="container3 mx-auto mt-[calc(var(--one)*36)]">
        <div className="flex gap-[calc(var(--one)*48)] py-[calc(var(--one)*48)] px-[calc(var(--one)*36)] rounded-[calc(var(--one)*24)] border-[calc(var(--one)*1)] border-[#3d3d40] bg-[#26262a]">
          <div className="flex flex-col gap-[calc(var(--one)*12)] max-w-[calc(var(--one)*640)]">
            <h1 className="text-[calc(var(--one)*56)] tracking-[-1.8px] leading-[100%] font-titleBold">
              Future BlockDAG SWAPS
            </h1>
            <p className="text-left !mb-0 text-[#ea1313]">
              Disclaimer: Please note that at present, we are not listed on any
              SWAPS. However, the following is a list of SWAPS we aspire to be
              listed on post-launch. This serves as an indication of the
              platforms where trading will be facilitated once our presale
              concludes.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(2,auto)] gap-[calc(var(--one)*24)] relative ">
            <div className="w-[calc(var(--one)*180)] h-[calc(var(--one)*50) relative aspect-[180/50]">
              <Image
                src={image2}
                alt="stealthex"
                width={180}
                height={50}
                placeholder="blur"
                className="w-full h-full top-1/2 absolute  aspect-[180/50]"
              />
            </div>
            <div className="w-[calc(var(--one)*180)] h-[calc(var(--one)*50) relative aspect-[180/50]">
              <Image
                src={image3}
                alt="stealthex"
                width={180}
                height={50}
                placeholder="blur"
                className="w-full h-full top-1/2 absolute "
              />
            </div>
            <div className="w-[calc(var(--one)*180)] h-[calc(var(--one)*50) relative aspect-[180/50]">
              <Image
                src={image4}
                alt="stealthex"
                width={180}
                height={50}
                placeholder="blur"
                className="w-full h-full top-1/2 absolute "
              />
            </div>
            <div className="w-[calc(var(--one)*180)] h-[calc(var(--one)*50) relative aspect-[180/50]">
              <Image
                src={image5}
                alt="stealthex"
                width={180}
                height={50}
                placeholder="blur"
                className="w-full h-full top-1/2 absolute "
              />
            </div>
          </div>
        </div>
      </section>
      <Products />
      <Faq />
    </main>
  );
}

export default page;
