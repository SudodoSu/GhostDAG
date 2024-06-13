import Image from "next/image";
import Link from "next/link";
import { paymentIconsList } from "@/lib/paymentIconsList";

function Keynote2() {
  return (
    <div className="w-full h-[calc(var(--one)*900)] relateve calc_top ">
      <div className="relative">
        <div className="relative w-full">
          <div className="h-full relative overflow-hidden ">
            <Image
              src="/images/keynote-hero-2.webp"
              alt="keynote-hero-2"
              width={485}
              height={415}
              className="Hero_img"
            />
            <Image
              src="/images/keynote-bg.webp"
              alt="keynote-bg"
              width={1337}
              height={751}
              className="Hero_img_bg"
            />
            <div className="Hero_ellipse"></div>
          </div>

          <div className=" flex flex-col bottom-0 justify-end absolute items-center Hero_inner_container Hero_container">
            <div className="">
              <div className="relative ">
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
                      <Image
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
            <div className="flex Hero_text_gap items-center">
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
                      className="paymentIcons"
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
