import { StaticImageData } from "next/image";
import image1 from "@/public/images/Product/x1/x1-1.png";
import image2 from "@/public/images/Product/x1/x1-2.png";
import image3 from "@/public/images/Product/x1/x1-3.png";
import image4 from "@/public/images/Product/x1/x1-8.png";
import image5 from "@/public/images/Product/x1/x1-9.png";
import image6 from "@/public/images/Product/x1/x1-10.png";

import image7 from "@/public/images/Product/x10/x10-1.jpg";
import image8 from "@/public/images/Product/x10/x10-3.jpg";
import image9 from "@/public/images/Product/x10/x10-4.jpg";
import image10 from "@/public/images/Product/x10/x10-5.jpg";
import image11 from "@/public/images/Product/x10/x10-9.jpg";

import image12 from "@/public/images/Product/x30/x30-1.jpg";
import image13 from "@/public/images/Product/x30/x30-2.jpg";
import image14 from "@/public/images/Product/x30/x30-3.jpg";
import image15 from "@/public/images/Product/x30/x30-9.jpg";
import image16 from "@/public/images/Product/x30/x30-10.jpg";

import image17 from "@/public/images/Product/x100/x100-1.jpg";
import image18 from "@/public/images/Product/x100/x100-2.jpg";
import image19 from "@/public/images/Product/x100/x100-3.jpg";
import image20 from "@/public/images/Product/x100/x100-4.jpg";
import image21 from "@/public/images/Product/x100/x100-5.jpg";

type LinksData = {
  image: StaticImageData;
  alt: string;
};

type DataObject = {
  x1: LinksData[];
  x10: LinksData[];
  x30: LinksData[];
  x100: LinksData[];
};

export const ProductSliderData: DataObject = {
  x1: [
    { image: image1, alt: "blockdag" },
    { image: image2, alt: "blockdag" },
    { image: image3, alt: "blockdag" },
    { image: image4, alt: "blockdag" },
    { image: image5, alt: "blockdag" },
    { image: image6, alt: "blockdag" },
  ],
  x10: [
    { image: image7, alt: "blockdag" },
    { image: image8, alt: "blockdag" },
    { image: image9, alt: "blockdag" },
    { image: image10, alt: "blockdag" },
    { image: image11, alt: "blockdag" },
  ],
  x30: [
    { image: image12, alt: "blockdag" },
    { image: image13, alt: "blockdag" },
    { image: image14, alt: "blockdag" },
    { image: image15, alt: "blockdag" },
    { image: image16, alt: "blockdag" },
  ],
  x100: [
    { image: image17, alt: "blockdag" },
    { image: image18, alt: "blockdag" },
    { image: image19, alt: "blockdag" },
    { image: image20, alt: "blockdag" },
    { image: image21, alt: "blockdag" },
  ],
};
