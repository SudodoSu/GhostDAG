import PageDirection from "@/components/PageDestination/PageDirection";
import TokenomicsList from "@/components/Tokenomics/TokenomicsList";
import { TokenomicsData } from "@/lib/TokenomicsData";
import image1 from "@/public/images/PageDirection/dev-news.png";
import Image from "next/image";

function page() {
  return (
    <main>
      <PageDirection
        image={image1}
        title="Shaping the Future through a Strategic Blueprint"
        PagePath="Tokenomics"
      />
      <div className="container2">
        <div className=" max-w-[min(var(--one)*1127.92,95%)] mx-auto">
          <div className="flex flex-col gap-[calc(var(--one)*20)] items-center py-[calc(var(--one)*72)]">
            <h2 className="text-center text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] font-titleBold">
              Welcome to the heart of the GhostDAG Network – our Tokenomics.
            </h2>
            <p className="w-[calc(var(--one)*670)]">
              Through a meticulous blend of strategy and foresight, we have
              designed a system that ensures transparency, rewards commitment,
              and lays the foundation for sustained growth.
            </p>
          </div>
          <div className="flex flex-col">
            {TokenomicsData.data.map((item, index) => (
              <div
                key={index}
                className="border-y-[1px] border-[rgba(166, 177, 197, .3)] flex gap-[calc(var(--one)*24)] py-[calc(var(--one)*61)]"
              >
                <div className="w-[40%] flex justify-between items-center gap-[calc(var(--one)*20)]">
                  <div className="w-[calc(var(--one)*301.71)]">
                    <span className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-[400]">
                      {item.span}
                    </span>
                    <h2 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] font-titleBold">
                      {item.title}
                    </h2>
                  </div>
                  <div className="relative w-[calc(var(--one)*101)]">
                    <Image
                      src={item.image}
                      alt="icon"
                      width={101}
                      height={101}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <div className="w-[60%]">
                  <p className="text-left">{item.des}</p>
                </div>
              </div>
            ))}
          </div>
          <TokenomicsList />
        </div>
      </div>
    </main>
  );
}

export default page;
