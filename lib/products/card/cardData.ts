import { StaticImageData } from "next/image";
import image1 from "@/public/images/Product/payment-card-2.webp";
import image2 from "@/public/images/Product/payment-card-4.webp";

type LinksData = {
  image: StaticImageData;
  alt: string;
};

type DataObject = {
  data: LinksData[];
};

export const cardData: DataObject = {
  data: [
    { image: image1, alt: "blockdag" },
    { image: image2, alt: "blockdag" },
    { image: image1, alt: "blockdag" },
    { image: image2, alt: "blockdag" },
  ],
};
