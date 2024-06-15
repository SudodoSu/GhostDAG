import { SettingUpRigData } from "@/lib/SettingUpRigData";
import Image from "next/image";

function SettingUpRig() {
  return (
    <section className="py-10 w-full">
      <div className="container2">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-[calc(var(--one)*56)] leading-[150%] tracking-[calc(var(--one)*-1.8)] font-[800] mb-[calc(var(--one)*56)]">
            Setting Up Your Rig for <br /> Mining BDAG Coins
          </h2>
          <p className="max-w-[calc(var(--one)*900)] mb-[calc(var(--one)*64)]">
            Setting up your mining rig for BDAG coins involves specific steps
            tailored to optimize your ASIC miners' performance:
          </p>
        </div>
        <div className="mb-[calc(var(--one)*64)]">
          <div className="flex flex-col md:flex-row gap-[calc(var(--one)*24)] mb-[calc(var(--one)*24)]">
            {SettingUpRigData.data.map((item, index) => (
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
                  <h2 className="text-center mb-[calc(var(--one)*24)] text-[calc(var(--one)*32)] font-titleBold">
                    {item.title}
                  </h2>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[calc(var(--one)*24)]">
            {SettingUpRigData.data2.map((item, index) => (
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
                  <h2 className="text-center mb-[calc(var(--one)*24)] text-[calc(var(--one)*32)] font-titleBold">
                    {item.title}
                  </h2>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="max-w-[calc(var(--one)*900)] mx-auto">
          By meticulously setting up your ASIC crypto miners and establishing a
          monitoring system, you can optimise mining efficiency and maximise
          your BlockDAG coin rewards.
        </p>
      </div>
    </section>
  );
}

export default SettingUpRig;
