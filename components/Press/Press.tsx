import Image from "next/image";
import Link from "next/link";
import PressIconsSlider from "./PressIconsSlider";

function Press() {
  return (
    <div className="w-full py-20">
      <div className="container2 flex gap-[calc(var(--one)*56)] justify-between">
        <div className="flex flex-col gap-[calc(var(--one)*56)] w-[40%] relative">
          <h4 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*2)] font-titleBold">
            Find us across the digital spectrum, check us out, feel the pulse of
            the BlockDAG project
          </h4>
          <ul className="flex gap-2">
            <li>
              <a
                href="/"
                className="w-[calc(var(--one)*42)] h-[calc(var(--one)*42)] rounded-full flex justify-center items-center text-[calc(var(--one)*25)]"
              >
                <Image
                  src="/images/svgs/telegram.svg"
                  alt="Telegram"
                  width={50}
                  height={50}
                  placeholder="blur"
                  className="w-ful h-full"
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                className=" w-[calc(var(--one)*42)] h-[calc(var(--one)*42)] rounded-full flex justify-center items-center text-[calc(var(--one)*25)]"
              >
                <Image
                  src="/images/svgs/x.svg"
                  alt="twitter"
                  width={50}
                  height={50}
                  placeholder="blur"
                  className="w-ful h-full"
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                className="w-[calc(var(--one)*42)] h-[calc(var(--one)*42)] rounded-full flex justify-center items-center text-[calc(var(--one)*25)]"
              >
                <Image
                  src="/images/svgs/youtube.svg"
                  alt="youtube"
                  width={50}
                  height={50}
                  placeholder="blur"
                  className="w-ful h-full"
                />
              </a>
            </li>
          </ul>
          <div>
            <button>
              <Link href="/" className="btn">
                Buy Now
              </Link>
            </button>
          </div>
        </div>
        <div className="w-[60%]">
          <PressIconsSlider />
        </div>
      </div>
    </div>
  );
}

export default Press;
