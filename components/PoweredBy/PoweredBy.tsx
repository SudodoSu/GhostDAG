import { PoweredByIconsData } from "@/lib/PoweredByIconsData";
import Image from "next/image";

function PoweredBy() {
  return (
    <section className="w-full py-32">
      <div className="container flex flex-col items-center gap-5">
        <div>
          <h1 className="title">Powered By</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-[calc(var(--one)*30)]">
          {PoweredByIconsData.data.map((data, index) => (
            <div key={index}>
              <Image src={data.path} alt={data.alt} width={177} height={74} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PoweredBy;
