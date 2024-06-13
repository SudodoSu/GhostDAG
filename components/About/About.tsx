import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className="w-full py-20 pt-32">
      <div className="container flex- flex-col items-center">
        <div className="">
          <div className=" mx-auto relative w-[calc(var(--one)*300)] h-[calc(var(--one)*300)] flex items-center justify-center">
            <div className="absolute ">
              <Image
                src="/images/logo_img.png"
                alt="ZkSync.ai Logo"
                width={100}
                height={100}
                className="w-full h-full "
              />
            </div>
            <div className="absolute inset-0">
              <Image
                src="/images/gifs/3d.gif"
                alt="ZkSync.ai Logo"
                width={300}
                height={300}
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[calc(var(--one)*32)]">
          <h1 className="title">What Is GhostDAG</h1>
          <h3 className="text-[calc(var(--one)*56)] font-[800]">
            Speed Meets Security
          </h3>
          <p className="max-w-[60%]">
            GhostDAG, inspired by Bitcoin and Kaspa, is the world’s most
            advanced layer 1 blockchain. A cutting-edge Proof-of-Work (PoW)
            algorithm that delivers industry-leading speeds, unbeatable
            security, and high decentralization. Built for the future, GhostDAG
            can power everyday applications to enterprise-grade DeFi protocols.
            With the power to mine from anywhere, GhostDAG makes crypto mining
            simple, for everyone.
          </p>
          <div className="buttons_div">
            <button>
              <Link href="/" className="btn">
                Learn More
              </Link>
            </button>
            <button>
              <Link
                href="/images/GhostDAG Whitepaper.pdf"
                className="border-white border-2 hover:bg-gradient-blue-reverse btn"
                style={{ backgroundImage: "none" }}
              >
                DAGpaper v2
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
