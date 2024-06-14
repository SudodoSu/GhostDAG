import Image from "next/image";
import Link from "next/link";
import { paymentIconsList } from "@/lib/paymentIconsList";

function Keynote2() {
  return (
    <div className="w-full lg:h-[calc(var(--one)*900)] h-[calc(100vh-10rem)] relative calc_top ">
      <div className="relative">
        <div className="h-[calc(100vh-10rem)] lg:h-auto relative overflow-hidden w-full flex flex-col lg:block items-center justify-center">
          <div className="hidden lg:block mx-auto lg:h-auto h-full relative lg:overflow-hidden ">
            <Image
              src="/images/keynote-hero-2.webp"
              alt="keynote-hero-2"
              width={485}
              height={415}
              placeholder="blur"
              priority={true}
              className=" Hero_img w-full lg:h-[calc(var(--one)*415)] lg:w-[calc(var(--one)*485)] lg:left-1/2 bottom-0"
            />
            <Image
              src="/images/keynote-bg.webp"
              alt="keynote-bg"
              width={1337}
              height={751}
              placeholder="blur"
              priority={true}
              className="h-[calc(var(--one)*751)] w-[calc(var(--one)*1337)] relative -z-5 Hero_img_bg lg:left-1/2 bottom-0"
            />
          </div>
          <div className="Hero_ellipse top-full lg:left-1/2 lg:top-1/2"></div>
          <div className="lg:hidden w-full h-full">
            <Image
              src="/images/keynote-bg-2.webp"
              alt="keynote-bg-2"
              width={1440}
              height={696}
              placeholder="blur"
              priority={true}
              className="mx-auto object-cover h-full md:w-full w-full"
            />
          </div>
          {/*  */}
          <div className=" flex flex-col bottom-0 lg:justify-end sm:justify-start justify-center absolute items-center top-0 lg:right-[calc(var(--one)*250)]">
            <div className="">
              <div className="relative">
                <span className=" num_two">2</span>
                <span className="keynote_custome uppercase">keynote</span>
              </div>
              <div className=" flex items-center flex-col gap-2">
                <h2 className="Hero_text font-[800]">
                  From The Moon is <span className="text-green">Live</span>
                </h2>
                <button>
                  <Link href="/keynote" className="Hero_butoon">
                    Watch keynote 2
                  </Link>
                </button>
                <div>
                  <Link href="keynote">
                    <div className="Hero_div_button">
                      <img
                        src="/images/moon-play.png"
                        alt="moon-play"
                        width={98}
                        height={98}
                        className="w-full h-full relative "
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row Hero_text_gap items-center">
              <h1 className="Hero_text2 font-[800]">
                Presale is <span className="text-green">Live</span>
              </h1>
              <ul className="flex gap-2">
                {paymentIconsList.data.map((icon, index) => (
                  <li key={index}>
                    <Image
                      src={icon.path}
                      alt={icon.alt}
                      width={60}
                      height={48}
                      placeholder="blur"
                      className="paymentIcons md:w-[calc(var(--one)*120)] md:h-[calc(var(--one)*120)]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keynote2;
