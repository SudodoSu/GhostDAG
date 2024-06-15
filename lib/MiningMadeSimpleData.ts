import { StaticImageData } from "next/image";
import image1 from "@/public/images/MiningMadeSimple/eco-friendly.png";
import image2 from "@/public/images/MiningMadeSimple/robust-security.png";
import image3 from "@/public/images/MiningMadeSimple/ease-of-use.png";
import image4 from "@/public/images/MiningMadeSimple/in-the-loop.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  des: string;
};

type DataObject = {
  data: LinksData[];
};

export const MiningMadeSimpleData: DataObject = {
  data: [
    {
      image: image1,
      title: "Eco-Friendly Mining",
      des: "Mining BlockDAG coins is energy efficient with minimal power drain. With our DAG-based hybrid protocol, BDAG mining consumes less power than its peers. While eco-friendly, the consensus mechanism ensures no compromises are made on security or speed.",
    },
    {
      image: image2,
      title: "Robust Security, High-speed",
      des: "When you mine BlockDAG coins, you secure proof of work blockchain’s future. With an industry-leading confirmation speed of 10 blocks per second, BDAG delivers class-leading and consistent mining rewards.",
    },
    {
      image: image3,
      title: "Ease of Use, All-Around",
      des: "We believe mining should be simple and accessible. From easy-to-use interfaces to robust software support, mining on the BlockDAG network is as easy as it gets. Our crypto mining rigs also lead their class with minimal noise levels, cost efficiency, and intelligent cooling systems.",
    },
    {
      image: image4,
      title: "In the Loop, Always",
      des: "BlockDAG crypto miners champion upgradeability with constant updates and support to ensure the rigs can mine efficiently long into the future.",
    },
  ],
};
