import { StaticImageData } from "next/image";
import image1 from "@/public/images/PickMiners/x1-2.webp";
import image2 from "@/public/images/PickMiners/x10-1.webp";
import image3 from "@/public/images/PickMiners/x30-1.webp";
import image4 from "@/public/images/PickMiners/x100-2.webp";
import image5 from "@/public/images/logo_img.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  span: string;
  href: string;
};

type DataObject = {
  data: LinksData[];
};

export const ProductsData: DataObject = {
  data: [
    {
      image: image1,
      title: "GhotsDAG X1",
      span: "Android, iOS",
      href: "/product/blockdagx1",
    },
    {
      image: image2,
      title: "GhotsDAG X10",
      span: "$130",
      href: "/product/blockdagx10",
    },
    {
      image: image3,
      title: "GhotsDAG X30",
      span: "$600",
      href: "/product/blockdagx30",
    },
    {
      image: image4,
      title: "GhotsDAG X100",
      span: "$1500",
      href: "/product/blockdagx100",
    },
    {
      image: image5,
      title: "GhotsDAG",
      span: "Coins",
      href: "/buy",
    },
  ],
};
