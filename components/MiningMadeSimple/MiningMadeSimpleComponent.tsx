import { MiningMadeSimpleData } from "@/lib/MiningMadeSimpleData";
import Image from "next/image";

function MiningMadeSimpleComponent() {
  return (
    <section className="w-full py-10">
      <div className="container2">
        <div className="flex flex-col items-center">
          <h2 className="text-[calc(var(--one)*56)] leading-[150%] tracking-[calc(var(--one)*-1.8)] font-[800] mb-[calc(var(--one)*56)]">
            Mining Made Simple
          </h2>
          <p className="max-w-[calc(var(--one)*900)] mb-[calc(var(--one)*64)]">
            Crypto mining secures blockchains, opens an income stream for
            miners, and pushes crypto adoption forward. The BlockDAG project
            makes mining crypto easy and rewarding. With our cutting-edge hybrid
            protocol and dedicated bitcoin mining rigs, mining BDAG coins is
            easy and efficient.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[calc(var(--one)*24)]">
          {MiningMadeSimpleData.data.map((item, index) => (
            <div
              key={index}
              className="py-[calc(var(--one)*24)] px-[calc(var(--one)*36)] border-[calc(var(--one)*1)] border-[#3d3d40] bg-gray2 rounded-[calc(var(--one)*12)]"
            >
              <div className="flex flex-col items-center ">
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
    </section>
  );
}

export default MiningMadeSimpleComponent;
