import { StaticImageData } from "next/image";
import image1 from "@/public/images/Product/x1/x1-1.png";
import image2 from "@/public/images/Product/x1/x1-2.png";
import image3 from "@/public/images/Product/x1/x1-3.png";
import image4 from "@/public/images/Product/x1/x1-8.png";
import image5 from "@/public/images/Product/x1/x1-9.png";
import image6 from "@/public/images/Product/x1/x1-10.png";

type LinksData = {
  image: StaticImageData;
  alt: string;
};

type DataObject = {
  data: LinksData[];
};

export const X1SliderData: DataObject = {
  data: [
    { image: image1, alt: "blockdag" },
    { image: image2, alt: "blockdag" },
    { image: image3, alt: "blockdag" },
    { image: image4, alt: "blockdag" },
    { image: image5, alt: "blockdag" },
    { image: image6, alt: "blockdag" },
  ],
};
