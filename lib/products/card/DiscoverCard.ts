import { articles } from "./../../Dev-Release-Article-Data";
import { StaticImageData } from "next/image";
import image1 from "@/public/images/svgs/Product/credit-card.svg";
import image2 from "@/public/images/svgs/Product/cashback.svg";
import image3 from "@/public/images/svgs/Product/receipt.svg";
import image4 from "@/public/images/svgs/Product/help.svg";
import image5 from "@/public/images/svgs/Product/protection.svg";

type LinksData = {
  image: StaticImageData;
  alt: string;
  title: string;
  true: boolean;
  des: string[];
};

type DataObject = {
  data: LinksData[];
};

export const DiscoverCardData: DataObject = {
  data: [
    {
      image: image1,
      alt: "credit card",
      title: "Fast and Effortless",
      true: true,
      des: [
        "Register for your card quickly with our hassle-free process",
        "Quick deposits for on-the-go transactions; allowing faster spending capabilities",
      ],
    },
    {
      image: image2,
      alt: "cashback",
      title: "Live Conversion Rate",
      true: false,
      des: [
        "Stay updated with the latest exchange rates allowing transparency to each transaction",
      ],
    },
    {
      image: image3,
      alt: "recipient",
      title: "High Value With Economical Fees",
      true: true,
      des: [
        "Free of charge annual subscription",
        "Take advantage of transaction costs and deposit fees starting from 1%",
        "No cross-border transaction fees for smooth international operations",
      ],
    },
    {
      image: image4,
      alt: "credit card",
      title: "info icon",
      true: true,
      des: [
        "Our customer service team is here to help 24/7",
        "Multilingual customer support team to bridge the communication gap",
        "Tailored assistance catering to the needs of each customer",
      ],
    },
    {
      image: image5,
      alt: "security",
      title: "Safety and Scalability",
      true: true,
      des: [
        "AML compliant to give our customers peace of mind",
        "Tough security measures to ensure the data privacy protection of our users",
      ],
    },
  ],
};
