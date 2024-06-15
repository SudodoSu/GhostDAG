import { StaticImageData } from "next/image";
import image1 from "@/public/images/SettingUpRig/power-up.png";
import image2 from "@/public/images/SettingUpRig/network-connectivity.png";
import image3 from "@/public/images/SettingUpRig/ip.png";
import image4 from "@/public/images/SettingUpRig/configuration.png";
import image5 from "@/public/images/SettingUpRig/pool-configuration.png";
import image6 from "@/public/images/SettingUpRig/ready-set-mine.png";
import image7 from "@/public/images/SettingUpRig/rewards-collection.png";
import image8 from "@/public/images/SettingUpRig/monitoring.png";

type LinksData = {
  image: StaticImageData;
  title: string;
  des: string;
};

type DataObject = {
  data: LinksData[];
  data2: LinksData[];
};

export const SettingUpRigData: DataObject = {
  data: [
    {
      image: image1,
      title: "Power Up",
      des: "Connect your ASIC miners to reliable power supplies. The stability of your setup is critical for efficient mining operations.",
    },
    {
      image: image2,
      title: "Network Connectivity",
      des: "Link the ASIC miners to your router or switch using Ethernet cables. ASIC miners typically lack Wi-Fi connectivity for enhanced reliability during mining.",
    },
  ],
  data2: [
    {
      image: image3,
      title: "IP Assignment",
      des: "Access your router's interface from a computer within the same network to identify the IPs allocated to each ASIC crypto miner. For streamlined monitoring, consider assigning static local IPs through your router’s settings.",
    },
    {
      image: image4,
      title: "Configuration Access",
      des: "Enter the identified IP addresses of your ASIC miners into your web browser's address bar. This action should prompt a login page, typically accessible using default credentials provided in the manufacturer's manual.",
    },
    {
      image: image5,
      title: "Pool Configuration",
      des: "When you mine BlockDAG coins, you secure proof of work blockchain’s future. With an industry-leading confirmation speed of 10 blocks per second, BDAG delivers class-leading and consistent mining rewards.",
    },
    {
      image: image6,
      title: "Ready, Set, Mine",
      des: "Once configurations are set, your ASIC miner should be primed for mining. Check the miner’s control panel, usually featuring a mining status page to verify readiness.",
    },
    {
      image: image7,
      title: "Rewards Collection",
      des: "Mining pools will direct your earned BDAG coins to the specified wallet address provided during configuration.",
    },
    {
      image: image8,
      title: "Monitoring Setup",
      des: "Consider configuring an external computer to act as a monitoring tool for your miners. Numerous solutions exist, so it`s beneficial to join a mining community to select a widely used monitoring tool for efficient oversight.",
    },
  ],
};
