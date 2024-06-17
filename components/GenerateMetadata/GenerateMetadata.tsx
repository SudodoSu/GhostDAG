import { Article } from "@/lib/Dev-Release-Article-Data";
import image2 from "@/public/images/PageDirection/dev-release-blog-img.png";
export async function generateMetadata(article: Article | null) {
  if (!article) {
    return {
      title: "Dev Release",
      description: "GhostDAG Dev Releases",
      url: "https://ghostdag.finance/dev-releases",
      image: image2,
      type: "website",
      site_name: "GhostDAG",
      canonical: "https://ghostdag.finance/dev-releases",
      twitter: {
        handle: "@ghostdag",
        site: "@ghostdag",
        cardType: "summary_large_image",
      },
    };
  }

  return {
    title: `Dev Release ${article.id}`,
    description: `GhostDAG Dev Release: ${article.title}`,
    url: `https://ghostdag.finance/dev-releases/dev-release-${article.id}`,
    image: image2,
    type: "website",
    site_name: "GhostDAG",
    canonical: `https://ghostdag.finance/dev-releases/dev-release-${article.id}`,
    twitter: {
      handle: "@ghostdag",
      site: "@ghostdag",
      cardType: "summary_large_image",
    },
  };
}
