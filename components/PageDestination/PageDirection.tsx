"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

type directionProps = {
  image: string;
  title: string;
  PagePath: string;
  updated?: string;
  from_to?: string;
};

function PageDirection(props: directionProps) {
  const { image, title, updated, from_to, PagePath } = props;
  const pathname = usePathname();

  return (
    <section className="w-full mt-[calc(var(--one)*250)]">
      <div className="container2 relative">
        <div className="relative h-[calc(var(--one)*360)]">
          <Image
            src={image}
            alt={title}
            width={1354}
            height={360}
            className=" aspect-w-1354 aspect-h-360"
          />
          <div className="absolute top-[5%] left-[10%]">
            <span>
              Home {">"} {PagePath}
            </span>
          </div>
          <div className="flex absolute top-[25%] left-[10%]">
            <h1 className="text-[calc(var(--one)*56)] leading-[calc(var(--one)*72.8)] tracking-[calc(var(--one)*-1.8)] font-titleBold">
              {title}
            </h1>
          </div>
          <span className="flex flex-col absolute left-2 bottom-2 text-white">
            <span className="">{updated}</span>
            <span className="">{from_to}</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default PageDirection;
