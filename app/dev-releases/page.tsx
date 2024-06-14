import PageDirection from "@/components/PageDestination/PageDirection";
import { DevReleasesSliderData } from "@/lib/DevReleasesSliderData";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/images/PageDirection/dev-news.png";

function page() {
  return (
    <div>
      <PageDirection
        image={image1}
        title="Dev Releases"
        PagePath="Daily Dev Releases"
      />
      <div className="container2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[calc(var(--one)*50)]">
        {DevReleasesSliderData.data.slice(1).map((item, index) => (
          <div key={index} className="">
            <div className="dev_releases_card ">
              <Link
                href={item.href}
                key={index}
                className="dev_releases_image_container "
              >
                <Image
                  src={item.src}
                  alt={item.alt}
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
              <Link href={item.href} className="dev_releases_read_more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
