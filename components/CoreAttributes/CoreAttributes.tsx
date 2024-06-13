import Image from "next/image";

function CoreAttributes() {
  return (
    <section className="w-full">
      <div className=" container2 flex flex-col items-center gap-5">
        <div>
          <h1 className="title">CORE ATTRIBUTES</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-[calc(var(--one)*16)] justify-between">
            {/*  */}
            <div className="flex w-1/2 bg-gray2 p-[calc(var(--one)*32)] rounded-3xl gap-2g">
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
              <div className="flex flex-col  gap-[calc(var(--one)*16)]">
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

            {/*  */}
            <div className="flex  w-1/2 bg-gray2 p-[calc(var(--one)*32)] rounded-3xl">
              <div className="flex flex-col gap-[calc(var(--one)*16)]">
                <h2 className="text-[calc(var(--one)*32)] leading-[130%] tracking-[-0.64px]">
                  Mining Rigs
                </h2>
                <p className="tracking-[-0.36px] !text-[calc(var(--one)*18)] !leading-[160%] text-left">
                  Experience the simplest crypto mining with BlockDAG. Pick what
                  suits you best from our three mining options. The BlockDAG
                  X10, perfect for beginners, can mine 200 BDAG coins daily. The
                  X30 mines 600 coins a day while the X100, can mine up to 2,000
                  BDAG coins daily, best for high returns and enterprise-scale
                  operations.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-[calc(var(--one)*92)] h-[calc(var(--one)*92)]">
                  <Image
                    src="/images/svgs/proof-of-work 1.svg"
                    alt="Coin"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex w-full bg-gray2 p-[calc(var(--one)*32)] rounded-3xl">
            <div className="flex  w-full gap-[calc(var(--one)*32)]">
              <div className="flex items-start">
                <div className="w-[calc(var(--one)*92)] h-[calc(var(--one)*92)]">
                  <Image
                    src="/images/svgs/digitalisation 1.svg"
                    alt="Coin"
                    width={100}
                    height={100}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full gap-[calc(var(--one)*16)]">
                <h2 className="text-[calc(var(--one)*32)] leading-[130%] tracking-[-0.64px]">
                  Mobile Mining
                </h2>
                <p className="tracking-[-0.36px] !text-[calc(var(--one)*18)] !leading-[160%] text-left">
                  The BlockDAG X1 is the simplest way you can mine crypto. You
                  can start mining BDAG on your smartphone with no drain on data
                  or battery life. Enjoy easy sign-ups, referral codes, and
                  progress reports while you’re on the app.
                </p>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="flex gap-[calc(var(--one)*16)] relative">
            {/*  */}
            <div className="flex  w-[calc(var(--one)*700)] bg-gray2 p-[calc(var(--one)*32)] rounded-3xl relative">
              <div className="flex flex-col gap-[calc(var(--one)*16)] relative">
                <div className="flex items-start absolute right-0 top-0">
                  <div className="w-[calc(var(--one)*92)] h-[calc(var(--one)*92)]">
                    <Image
                      src="/images/svgs/speedometer 1.svg"
                      alt="Coin"
                      width={100}
                      height={100}
                      className="w-full h-full"
                    />
                  </div>
                </div>
                <h2 className="text-[calc(var(--one)*32)] leading-[130%] tracking-[-0.64px] z-10">
                  Speed, Redefined
                </h2>
                <p className="tracking-[-0.36px] !text-[calc(var(--one)*18)] !leading-[160%] text-left z-10">
                  BlockDAG is the fastest PoW blockchain with confirmation
                  speeds of 10 blocks per second. With high speed we can power
                  up everything that comes our way, from high power DeFi
                  protocols to flashy web3 browser and wallet you love.
                </p>
              </div>
            </div>

            {/*  */}
            <div className="flex w-auto justify-between bg-gray2 p-[calc(var(--one)*32)] rounded-3xl">
              <div className="flex flex-col gap-[calc(var(--one)*16)]">
                <h2 className="text-[calc(var(--one)*32)] leading-[130%] tracking-[-0.64px]">
                  Security, Reimagined
                </h2>
                <p className="tracking-[-0.36px] !text-[calc(var(--one)*18)] !leading-[160%] text-left">
                  Our innovative look at network security enables us to maintain
                  high security without compromises on speed or
                  decentralization. With our hybrid consensus mechanism,
                  security is first priority and will always be the best in
                  class with zero block wastage and strong cryptographic
                  algorithms.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-[calc(var(--one)*92)] h-[calc(var(--one)*92)]">
                  <Image
                    src="/images/svgs/cyber-security 1.svg"
                    alt="Coin"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoreAttributes;
