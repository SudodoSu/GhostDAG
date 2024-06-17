import Image from "next/image";
import Link from "next/link";

function PagePath({ pagePath }: { pagePath: string }) {
  return (
    <section className="">
      <div className="mx-auto mt-[calc(var(--one)*200)] max-w-[min(var(--one)*1480,95%)] pt-[calc(var(--one)*27)]">
        <div className="flex gap-[calc(var(--one)*16)] items-center">
          <Link
            href="/"
            className="text-[#75757d] text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)]"
          >
            Home
          </Link>
          <div className="relative w-[calc(var(--one)*16)] h-[calc(var(--one)*16)]">
            <Image
              src="/images/svgs/arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="w-full h-full"
            />
          </div>
          <a
            href={`/${pagePath}`}
            className="text-white text-[calc(var(--one)*18)] leading-[calc(var(--one)*28.8)]"
          >
            {pagePath}
          </a>
        </div>
      </div>
    </section>
  );
}

export default PagePath;
