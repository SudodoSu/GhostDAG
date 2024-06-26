import Image from "next/image";
import YoutubeSlider from "./YoutubeSlider";
import image1 from "@/public/images/youtube.png";

function YoutubeSection() {
  return (
    <section className="w-full">
      <div className="container flex flex-col gap-5">
        <div className="flex flex-col items-center gap-3">
          <Image
            src={image1}
            alt="Youtube"
            width={204}
            height={46}
            placeholder="blur"
          />
          <div className="flex gap-2 !items-center justify-center">
            <p className="!my-auto">Youtube Reviews</p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <Image
                  key={index}
                  src="/images/svgs/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <YoutubeSlider />
        </div>
      </div>
    </section>
  );
}

export default YoutubeSection;
