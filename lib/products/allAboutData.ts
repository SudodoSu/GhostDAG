import { StaticImageData } from "next/image";
import image1 from "@/public/images/Product/x1/mobileMining.png";
import image2 from "@/public/images/Product/x1/efficient.png";
import image3 from "@/public/images/Product/x1/daily.png";
import image4 from "@/public/images/Product/x1/raks.png";
import image5 from "@/public/images/Product/10-30-100/MiningHardware.png";
import image6 from "@/public/images/Product/10-30-100/HashRate.png";
import image7 from "@/public/images/Product/10-30-100/EnergyEfficiency.png";
import image8 from "@/public/images/Product/10-30-100/ScalabilityandUpgradability.png";

type AboutProps = {
  description: string;
  utility: { span: string; text: string }[];
  cards: { image: StaticImageData; title: string; description: string }[];
};

type DataObject = {
  x1: AboutProps;
  x10: AboutProps;
  x30: AboutProps;
  x100: AboutProps;
};

export const AllProductsAboutData: DataObject = {
  x1: {
    description:
      "The BlockDag X1 miner offers convenient and efficient mining, allowing you to mine up to 20 BDAG daily directly from your phone. With a 50 MB app size, it ensures smooth and hassle-free download, allowing users to engage in mining activities. To increase daily engagement, users can boost their mining rate by clicking the lightning button every 24 hours and enjoy mining without draining their mobile’s battery! The app is available for both Android and IOS. Connect to your WiFi, install the app and start mining!",
    utility: [
      { span: "Connectivity", text: "Wi-Fi" },
      { span: "Availability", text: "App Store & Google Play" },
      { span: "Compatibility", text: "iOS, Android" },
      { span: "Coins Per Day", text: "Up to 20 BDAG" },
    ],
    cards: [
      {
        image: image1,
        title: "Mobile Mining",
        description:
          "Seamlessly mine BDAG coins on your smartphone, eliminating the need for specialised hardware or extensive energy consumption.",
      },
      {
        image: image2,
        title: "Cutting-Edge Consensus Algorithm",
        description:
          "Uses an advanced Proof-of-Work (PoW) algorithm that can mine with no battery drain or excessive data usage on your device.",
      },
      {
        image: image3,
        title: "Daily Engagement",
        description:
          "Boost your mining rate by simply clicking the lightning button in the app every 24 hours.",
      },
      {
        image: image4,
        title: "Transparent Ranks",
        description:
          "Progress through different ranks based on your mining activity to unlock additional benefits.",
      },
    ],
  },

  x10: {
    description:
      "The smallest BlockDAG mining device allows you to mine up to 200 BDAG daily. This compact and sleek design is the same size as a Wi-Fi extender and fits anywhere in your home. This device can be connected with both Wi-Fi or Ethernet cable. Included in the box is a power brick with Type-C cable and 1 x 1m Ethernet cable. Plug and play making it super easy to set up and get going. Its small size makes it suitable for diverse placements, and its minimal noise output ensures unobtrusive operation.",
    utility: [
      { span: "Size", text: "18cm x 18cm x 15 cm" },
      { span: "Hash Rate", text: "100 MH/s" },
      { span: "Power Consumption", text: "40 watts" },
      { span: "Coins Per Day", text: "Up to 200 BDAG" },
    ],
    cards: [
      {
        image: image5,
        title: "Mining Hardware",
        description:
          "Different cryptocurrencies require specific mining hardware. The BlockDAG X10 utilises ASIC (Application-Specific Integrated Circuit) technology for optimal mining of BlockDAG.",
      },
      {
        image: image6,
        title: "Hash Rate",
        description:
          "Different cryptocurrencies require specific mining hardware. The BlockDAG X10 utilises ASIC (Application-Specific Integrated Circuit) technology for optimal mining of BlockDAG.",
      },
      {
        image: image7,
        title: "Energy Efficiency",
        description:
          "Operating at 40W, the X10 ensures energy efficiency while maximising profitability.",
      },
      {
        image: image8,
        title: "Scalability and Upgradability",
        description:
          "Compact and efficient, the BlockDAG X10 offers an introduction to mining and can be complemented by additional units for scalability.",
      },
    ],
  },

  x30: {
    description:
      "BlockDAG X30 boasts a formidable hash rate of 280 GH/s, consuming just 220 watts and tripling your mining power efficiently. Users can earn up to 600 BDAG daily with a stable internet connection over Ethernet or WiFi. X30’s compact design and four fans perfectly balance noise and power, making it environment-friendly. Employed with ASIC technology, X30 is designed for scalability and enhanced mining performance. With the SHA-256 algorithm, BlockDag X30 is all set to mine Bitcoin and Kaspa as well. Minimise the power consumption and maximise your returns with X30!",
    utility: [
      { span: "Size", text: "18cm x 15cm x 8cm" },
      { span: "Hash Rate", text: "280 GH/s" },
      { span: "Power Consumption", text: "220 watts" },
      { span: "Coins Per Day", text: "Up to 600 BDAG" },
    ],
    cards: [
      {
        image: image5,
        title: "Mining Hardware",
        description:
          "The BlockDAG X30 employs ASIC technology tailored to enhance mining performance in the BlockDAG ecosystem.",
      },
      {
        image: image6,
        title: "Hash Rate",
        description:
          "At 280 GH/s, this miner significantly boosts computational power, increasing the probability of mining blocks and earning rewards.",
      },
      {
        image: image7,
        title: "Energy Efficiency",
        description:
          "Balancing power and efficiency at 220W, this miner optimises performance while managing operational costs.",
      },
      {
        image: image8,
        title: "Scalability and Upgradability",
        description:
          "Designed for scaling, the BlockDAG X30 allows expansion and meets your growing mining needs.",
      },
    ],
  },

  x100: {
    description:
      "BlockDag X100 is efficient and profitable for optimising the mining experience. With cutting-edge ASIC technology, it boasts a substantial 2 TH/s hash rate with an impressive energy consumption of 1800 W. Users can earn up to 2,000 BDAG daily, as X100 optimises your earning potential and optimises the mining process. You can also mine Bitcoin and Kaspa with BlockDag X100, as it is equipped with the SHA-256 algorithm. With advanced ethernet connectivity and enhanced heat dissipation, it is an ideal choice for pro miners.",
    utility: [
      { span: "Size", text: "54cm x 26cm x 20cm" },
      { span: "Hash Rate", text: "2 TH/s" },
      { span: "Power Consumption", text: "1800W" },
      { span: "Coins Per Day", text: "Up to 2,000 BDAG" },
    ],
    cards: [
      {
        image: image5,
        title: "Mining Hardware",
        description:
          "Employing cutting-edge ASIC technology, the BlockDAG X100 maximises mining efficiency within the BlockDAG.",
      },
      {
        image: image6,
        title: "Hash Rate",
        description:
          "At 2 TH/s, the X100 significantly amplifies computational capabilities, enhancing block mining potential.",
      },
      {
        image: image7,
        title: "Energy Efficiency",
        description:
          "The X100 balances efficiency and profitability with its power consumption of 1800W.",
      },
      {
        image: image8,
        title: "Scalability and Upgradability",
        description:
          "Designed for scalability, the X100 is perfect for enterprise-scale mining",
      },
    ],
  },
};
