import { paymentIconsList } from "@/lib/paymentIconsList";
import Image from "next/image";

function AddSection() {
  return (
    <div className=" h-full lg:h-[calc(var(--one)*900)] calc_top flex justify-center">
      <div className="w-full h-full flex  justify-center">
        <div className="h-[calc(100vh-10rem)] lg:h-full w-full items-center flex flex-col">
          <div className="flex items-center justify-center">
            <video
              className="w-full h-full rounded-b-2xl"
              width="700"
              height="700"
              autoPlay
              loop
              muted
            >
              <source src="/images/videos/add.mp4" type="video/mp4" />
              <track
                src="/images/videos/add.mp4"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex Hero_text_gap items-center">
            <h1 className="AddSection_presale_text font-[800]">
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
  );
}

export default AddSection;
