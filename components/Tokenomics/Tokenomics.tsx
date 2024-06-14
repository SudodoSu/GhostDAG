import Image from "next/image";
import Link from "next/link";

function Tokenomics() {
  return (
    <section className="w-full py-20">
      <div className="container2">
        <div className="flex flex-col gap-[calc(var(--one)*42)]">
          <h1 className="title">TOKENOMICS</h1>
          <h3 className="text-center text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*-1)] font-titleBold">
            GhostDAG coin (BDAG) has a supply of 150 billion coins, a testament
            to its exclusivity and value preservation.
          </h3>
          <div className="w-full">
            <div className="mx-auto w-[calc(var(--one)*460)] h-[calc(var(--one)*460)] relative mb-2">
              <Image
                src="/images/svgs/graff.svg"
                alt="Graff"
                width={460}
                height={460}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[calc(var(--one)*16)] ">
          {/*  */}
          <div>
            <div className="mb-[calc(var(--one)*26)] flex gap-2">
              <div className="bg-gradient-66 rounded-[calc(var(--one)*5.77)] h-[calc(var(--one)*25.2)] w-[calc(var(--one)*46.2)]" />
              <span className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-titleBold">
                66%
              </span>
              <h3 className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-normal">
                Community Allocation
              </h3>
            </div>
            <p className="text-left text-[calc(var(--one)*18)] font-normal">
              With 98.5 billion coins set aside, BlockDAG prioritizes its
              community, rewarding miners and funding initiatives for a robust
              ecosystem and seamless trading experience. This allocation
              represents our commitment to everyone who uses, promotes, and sees
              BlockDAG’s potential.
            </p>
          </div>
          <div>
            <div className="mb-[calc(var(--one)*26)] flex gap-2">
              <div className="bg-gradient-33 rounded-[calc(var(--one)*5.77)] h-[calc(var(--one)*25.2)] w-[calc(var(--one)*46.2)]" />
              <span className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-titleBold">
                33%
              </span>
              <h3 className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-normal">
                Presale Allocation
              </h3>
            </div>
            <p className="text-left text-[calc(var(--one)*18)] font-normal">
              Before our coins are available to the wider public, our crypto
              presale offers early supporters an exclusive opportunity to back
              our vision, often at a preferential rate. It's more than an
              initial fundraiser; it's about building a dedicated community.
            </p>
          </div>
          <div>
            <div className="mb-[calc(var(--one)*26)] flex gap-2">
              <div className="bg-gradient-1 rounded-[calc(var(--one)*5.77)] h-[calc(var(--one)*25.2)] w-[calc(var(--one)*46.2)]" />
              <span className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-titleBold">
                1%
              </span>
              <h3 className="text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)] font-normal">
                Team Allocation (Locked)
              </h3>
            </div>
            <p className="text-left text-[calc(var(--one)*18)] font-normal">
              We dedicate 1.5 billion coins to our team, locked to align with
              BlockDAG's long-term goals, showcasing our commitment to project
              success and team motivation.
            </p>
          </div>
        </div>
        <div className="buttons_div">
          <button>
            <Link href="/" className="btn">
              Learn More
            </Link>
          </button>
          <button>
            <Link
              href="/"
              className="border-white border-2 hover:bg-gradient-blue-reverse btn"
              style={{ backgroundImage: "none" }}
            >
              DAGpaper v2
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
