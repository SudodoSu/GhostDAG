import PageDirection from "@/components/PageDestination/PageDirection";
import image1 from "@/public/images/PageDirection/dev-news.png";
import AllReleases from "@/components/DevReleases/AllReleases";

export async function generateMetadata() {
  return {
    title: " Deep Dive into the Inner Workings of GhostDAG",
    description: "GhostDAG Dev Releases",
    url: "https://ghostdag.com/dev-releases",
    image: image1,
    type: "website",
    site_name: "GhostDAG",
    canonical: "https://ghostdag.com/dev-releases",
    twitter: {
      handle: "@ghostdag",
      site: "@ghostdag",
      cardType: "summary_large_image",
    },
  };
}

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
