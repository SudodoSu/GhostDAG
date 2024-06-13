import Image from "next/image";

function CoreAttributes() {
  return (
    <section className="w-full">
      <div className="container flex flex-col items-center gap-5">
        <div>
          <h1 className="title">CORE ATTRIBUTES</h1>
        </div>
        <div className="flex flex-col gap-4 !max-w-[min(var(--one)*1128, 95%)]">
          <div className="flex">
            <div className="flex  w-[calc(var(--one)*610)]">
              <div className="flex items-start">
                <div className="w-[calc(var(--one)*92)] h-[calc(var(--one)*92)]">
                  <Image
                    src="/images/svgs/coin 1.svg"
                    alt="Coin"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col max-w-[calc(var(--one)*310)]">
                <h2 className="text-[calc(var(--one)*32)] leading-[130%] tracking-[-0.64px]">
                  Coin Acquisition
                </h2>
                <p className="tracking-[-0.36px] !text-[calc(var(--one)*18)] !leading-[160%] text-left">
                  Be a part of our project early on and witness your
                  contribution increase in value as the project progresses. Upon
                  listing on major exchanges, your early contributions will
                  begin their journey as long-term assets.
                </p>
              </div>
            </div>
            <div>
              <h2>Mining Rigs</h2>
              <p>
                Experience the simplest crypto mining with BlockDAG. Pick what
                suits you best from our three mining options. The BlockDAG X10,
                perfect for beginners, can mine 200 BDAG coins daily. The X30
                mines 600 coins a day while the X100, can mine up to 2,000 BDAG
                coins daily, best for high returns and enterprise-scale
                operations.
              </p>
              <Image
                src="/images/svgs/proof-of-work 1.svg"
                alt="Coin"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex  w-[calc(var(--one)*610)]">
              <div className="flex items-start">
                <div className="w-[calc(var(--one)*92)] h-[calc(var(--one)*92)]">
                  <Image
                    src="/images/svgs/coin 1.svg"
                    alt="Coin"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <h2 className="text-[calc(var(--one)*32)] leading-[130%] tracking-[-0.64px]">
                  Coin Acquisition
                </h2>
                <p className="tracking-[-0.36px] !text-[calc(var(--one)*18)] !leading-[160%] text-left">
                  Be a part of our project early on and witness your
                  contribution increase in value as the project progresses. Upon
                  listing on major exchanges, your early contributions will
                  begin their journey as long-term assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreAttributes;
