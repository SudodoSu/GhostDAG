import { StaticImageData } from "next/image";
import image1 from "@/public/images/PickMiners/x1-2.webp";
import image2 from "@/public/images/PickMiners/x10-1.webp";
import image3 from "@/public/images/PickMiners/x30-1.webp";
import image4 from "@/public/images/PickMiners/x100-2.webp";

import image5 from "@/public/images/PickMiners/cloud-mining.png";
import image6 from "@/public/images/PickMiners/hash-rate.png";
import image7 from "@/public/images/PickMiners/longevity.png";
import image8 from "@/public/images/PickMiners/mining-with-less.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  des?: string;
};

type DataObject = {
  data: LinksData[];
  info: LinksData[];
};

export const PickMinersData: DataObject = {
  data: [
    { image: image1, title: "GhostDAG X1" },
    { image: image2, title: "GhostDAG X10" },
    { image: image3, title: "GhostDAG X30" },
    { image: image4, title: "GhostDAG X100" },
  ],
  info: [
    {
      image: image5,
      title: "Made for Cloud Mining",
      des: "The BlockDAG X1 is the gateway to a rewarding crypto mining experience from your mobile phones. The X1 mobile app is the easiest way to get into mining without owning hardware. Though light on your phone, the X1 can mine 125 BDAG coins daily. With transparent policies and no hidden fees, the BlockDAG X1 is your best companion for cloud mining.",
    },
    {
      image: image6,
      title: "The Hash Rate That Fits You",
      des: "Our crypto mining rigs cover the hash rate spectrum, ensuring there is a machine that fits your needs. The BlockDAG X10, with a hash rate of 280 MH/s, allows you to mine 1250 BDAG, making it the perfect fit for beginners. The BlockDAG X30 and X100 present the next step in mining power. The X30 can mine 7500 BDAG coins at a hash rate of 100GH/s, and the X100 can mine 25000 BDAG at 2TH/s. With the wide range of mining power, BlockDAG’s crypto miners fit your needs, whether you’re looking for home mining solutions or are planning big.",
    },
    {
      image: image7,
      title: "Longevity",
      des: "With the future in mind, our miners come with undervolted ASIC chips and an excess power supply. With added processing power, our mining rigs can mine long into the future with minimal hardware deterioration. With hardware optimized to run smoother for extended periods of time, our miners require no costly hardware modifications in the long run. Our future proof mining machines ensure your mining operation is both pocket and eco friendly.",
    },
    {
      image: image8,
      title: "Mining with Less",
      des: "With minimal power drain and efficient use of processing power BlockDAG miners ensure your mining operations take up the least amount of room and emit the least amount of noise. These are bitcoin mining rigs where you can mine Bitcoin coins.",
    },
  ],
};
