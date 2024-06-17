import { DiscoverCardData } from "@/lib/products/card/DiscoverCard";
import Image from "next/image";

function DicoverCard() {
  return (
    <section className="mx-auto container3">
      <div>
        <h1 className="text-center text-[calc(var(--one)*56)] tracking-[-1.12px] mt-[calc(var(--one)*80)] leading-[130%] font-titleBold">
          Discover Unmatched Convenience with the BlockDAG Crypto Card
        </h1>
      </div>
      <div className="flex flex-col gap-[calc(var(--one)*24)] mt-[calc(var(--one)*80)]">
        <div className="flex flex-col lg:flex-row gap-[calc(var(--one)*24)]">
          {DiscoverCardData.data.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 bg-[#26262a] rounded-[calc(var(--one)*12)] p-[calc(var(--one)*32)] flex flex-col gap-[calc(var(--one)*32)] relative"
            >
              <div className="w-[calc(var(--one)*42)] h-[calc(var(--one)*42)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={42}
                  height={42}
                  className="h-full w-full"
                />
              </div>
              <h2>{item.title}</h2>
              {!item.true && <p className="text-left !mb-0">{item.des}</p>}
              {item.true && (
                <ul className="list-disc">
                  {item.des.map((item, index) => (
                    <li key={index}>
                      <p className="text-left !mb-0">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-[calc(var(--one)*24)]">
          {DiscoverCardData.data.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/2 bg-[#26262a] rounded-[calc(var(--one)*12)] p-[calc(var(--one)*32)] flex flex-col gap-[calc(var(--one)*32)] relative"
            >
              <div>
                <Image src={item.image} alt={item.alt} width={32} height={32} />
              </div>
              <h2>{item.title}</h2>
              {item.true && (
                <ul className="list-disc">
                  {item.des.map((item, index) => (
                    <li key={index}>
                      <p className="text-left !mb-0">{item}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DicoverCard;
