import { PickMinersData } from "@/lib/PickMiners";
import "./pickminers.css";
import Image from "next/image";

function PickMinersComponent() {
  return (
    <section className="w-full py-10">
      <div className="container2">
        <div className="flex flex-col items-center">
          <h2 className="text-[calc(var(--one)*56)] leading-[150%] tracking-[calc(var(--one)*-1.8)] font-[800] mb-[calc(var(--one)*56)]">
            Pick the Right Miner for You
          </h2>
          <p className="max-w-[calc(var(--one)*900)] mb-[calc(var(--one)*64)]">
            Whether you’re starting your crypto mining journey or you’re a
            seasoned miner looking to scale up, we’ve got you covered. From our
            cloud-based BlockDAG X1 mobile mining app to our miner range, the
            X1, X10, X30 and X100, we offer the best in class mining solutions
            with our crypto mining rigs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[calc(var(--one)*30)]">
          {PickMinersData.data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-[calc(var(--one)*20)] items-center justify-center]"
            >
              <div className="PickMinerImage relative">
                <div className="flex items-center justify-center max-w-[calc(var(--one)*240)] h-[calc(var(--one)*240)] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={240}
                    placeholder="blur"
                    className=" aspect-square"
                  />
                </div>
              </div>
              <div>
                <h4 className="text-[calc(var(--one)*32)] leading-[130%] -tracking-[.64px] font-titleBold">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[calc(var(--one)*24)] mt-4">
          <div className="flex flex-col md:flex-row gap-[calc(var(--one)*24)]">
            {PickMinersData.info.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`py-[calc(var(--one)*24)] px-[calc(var(--one)*36)] border-[calc(var(--one)*1)] border-[#3d3d40] bg-gray2 rounded-[calc(var(--one)*12)] ${
                  index === 0 ? "md:w-[40%]" : "md:w-[60%]"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-[calc(var(--one)*90)] relative mb-[calc(var(--one)*30)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={90}
                      height={90}
                      placeholder="blur"
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="mb-[calc(var(--one)*24)] text-[calc(var(--one)*32)] font-titleBold">
                    {item.title}
                  </h2>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-[calc(var(--one)*24)]">
            {PickMinersData.info.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className={`py-[calc(var(--one)*24)] px-[calc(var(--one)*36)] border-[calc(var(--one)*1)] border-[#3d3d40] bg-gray2 rounded-[calc(var(--one)*12)] ${
                  index === 0 ? "w-[60%]" : "w-[40%]"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-[calc(var(--one)*90)] relative mb-[calc(var(--one)*30)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={90}
                      height={90}
                      placeholder="blur"
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="mb-[calc(var(--one)*24)] text-[calc(var(--one)*32)] font-titleBold">
                    {item.title}
                  </h2>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickMinersComponent;
