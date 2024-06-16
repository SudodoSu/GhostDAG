import PageDirection from "@/components/PageDestination/PageDirection";
import { DevReleasesSliderData } from "@/lib/DevReleasesSliderData";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/images/PageDirection/dev-news.png";
import AllReleases from "@/components/DevReleases/AllReleases";

function page() {
  return (
    <div>
      <PageDirection
        image={image1}
        title="Dev Releases"
        PagePath="Daily Dev Releases"
      />
      <div className="">
        <AllReleases />
      </div>
    </div>
  );
}

export default page;
