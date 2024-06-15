import Image from "next/image";
import image1 from "@/public/images/rigs.png";
import MiningMadeSimpleComponent from "@/components/MiningMadeSimple/MiningMadeSimpleComponent";
import PickMinersComponent from "@/components/PickMiners/PickMinersComponent";
import SettingUpRig from "@/components/SettingUpRig/SettingUpRig";
import Products from "@/components/Products/Products";

function page() {
  return (
    <main>
      <section className="container2 py-10">
        <div className="w-full mt-20 md:mt-[calc(var(--one)*200)] flex flex-col items-center">
          <h1 className="text-center text-[calc(var(--one)*90)] tracking-[calc(var(--one)*-1.8)] mb-[calc(var(--one)*56)] leading-[110%] font-[800]">
            GhostDAG <br />
            Crypto Mining Rigs
          </h1>
          <p className="max-w-[calc(var(--one)*900)] mb-[calc(var(--one)*64)]">
            Each miner comes with comprehensive user documentation, a power
            supply unit, and dedicated customer support for a seamless mining
            experience. We’ve got you covered on your crypto mining journey,
            whether you're starting out or scaling your operations. Purchase
            directly from the BlockDAG website, ensuring secure transactions and
            reliable shipping to kickstart your mining journey.
          </p>
        </div>
        <div>
          <Image
            src={image1}
            alt="rigs"
            width={1128}
            height={478}
            placeholder="blur"
          />
        </div>
      </section>
      <MiningMadeSimpleComponent />
      <PickMinersComponent />
      <SettingUpRig />
      <Products />
    </main>
  );
}

export default page;
