"use client";
import { DevReleasesSliderData, LinksData } from "@/lib/DevReleasesSliderData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image2 from "@/public/images/dev-release-empty-bg.png";

const INITIAL_LOAD = 6;
const LOAD_MORE_COUNT = 6;

function AllReleases() {
  const [visibleReleases, setVisibleReleases] = useState<LinksData[]>([]);
  const [loadedCount, setLoadedCount] = useState(INITIAL_LOAD);

  useEffect(() => {
    loadMoreReleases();
  }, []);

  const loadMoreReleases = () => {
    if (visibleReleases.length === 0) {
      // Initial load
      const initialReleases = DevReleasesSliderData.data.slice(0, INITIAL_LOAD);
      setVisibleReleases(initialReleases);
      setLoadedCount(INITIAL_LOAD);
    } else {
      // Load more
      const newReleases = DevReleasesSliderData.data.slice(
        loadedCount,
        loadedCount + LOAD_MORE_COUNT
      );
      setVisibleReleases((prevReleases) => [...prevReleases, ...newReleases]);
      setLoadedCount((prevCount) => prevCount + LOAD_MORE_COUNT);
    }
  };

  return (
    <>
      <div className="container3 mx-auto mt-[calc(var(--one)*30)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[calc(var(--one)*50)]">
        {visibleReleases.map((item, index) => (
          <div key={index} className="">
            <div className="dev_releases_card ">
              <Link
                href={item.href}
                key={index}
                className="dev_releases_image_container "
              >
                <Image
                  src={image2}
                  alt="dev_releases_image"
                  width={500}
                  height={282}
                  placeholder="blur"
                  className="w-full h-full"
                />
                <h3 className="dev_releases_image_title">{item.title}</h3>
              </Link>
              <h6 className="">{item.title}</h6>
              <p className="slider_description">{item.des}</p>
              <span>{item.date}</span>
              <span>
                <Link href={item.href} className="dev_releases_read_more">
                  Read More{" "}
                  <span className="w-[calc(var(-one)*16)]">
                    <Image
                      src="/images/svgs/arrowGradient.svg"
                      alt="arrow"
                      width={16}
                      height={16}
                      className="w-[calc(var(-one)*10)] h-[calc(var(-one)*10)]"
                    />
                  </span>
                </Link>
              </span>
            </div>
          </div>
        ))}
      </div>
      {visibleReleases.length < DevReleasesSliderData.data.length && (
        <div className="flex justify-center mt-8">
          <button onClick={loadMoreReleases} className="btn">
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default AllReleases;
