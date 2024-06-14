import image1 from "@/public/images/dev-release-empty-bg.png";
import image2 from "@/public/images/dev-release-empty-bg.png";
import { StaticImageData } from "next/image";

type LinksData = {
  src: StaticImageData;
  alt: string;
  href: string;
  title: string;
  des: string;
  date: string;
};

type DataObject = {
  data: LinksData[];
};

export const DevReleasesSliderData: DataObject = {
  data: [
    {
      src: image1,
      alt: "dev-release-empty-bg",
      href: "/dev-releases/dev-release-1",
      title: `Dev Release 1`,
      des: "We are thrilled to announce the official release of GhostDAG v1.0, marking a significant milestone in the evolution of blockchain technology...",
      date: "February 2024",
    },
    {
      src: image2,
      alt: "dev-release-empty-bg",
      href: "/dev-releases/dev-release-1.1",
      title: `Dev Release 1.1`,
      des: "We are excited to announce the release of GhostDAG v1.1, a significant upgrade that further enhances the scalability, efficiency, and security of the GhostDAG blockchain...",
      date: "March 2024",
    },
    {
      src: image1,
      alt: "dev-release-empty-bg",
      href: "/dev-releases/dev-release-1",
      title: `Dev Release 1`,
      des: "We are thrilled to announce the official release of GhostDAG v1.0, marking a significant milestone in the evolution of blockchain technology...",
      date: "February 2024",
    },
  ],
};
