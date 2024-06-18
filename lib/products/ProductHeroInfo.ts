type ProductHeroInfoProps = {
  name: string;
  description: string;
  image: string;
  cost: number;
};

type DataObject = {
  x10: ProductHeroInfoProps;
  x30: ProductHeroInfoProps;
  x100: ProductHeroInfoProps;
};

export const ProductHeroInfoData: DataObject = {
  x10: {
    name: "GhostDAG X10",
    description:
      "Compact and efficient, the BlockDAG X10 is designed for entry-level miners. Generating 100 MH/s with minimal energy consumption (40W), it offers daily earnings of up to 200 BDAG. Enjoy plug-and-play simplicity with Wi-Fi or Ethernet connectivity.",
    image: "/images/Product/10-30-100/activeX10.svg",
    cost: 130,
  },
  x30: {
    name: "GhostDAG X30",
    description:
      "Elevate your mining game one step further with the BlockDAG X30, with triple the power at 280 GH/s and consuming 220W of power—the X30 mines up to 600 BDAG. Using the SHA-256 algorithm the X30 can also mine Bitcoin and Kaspa. Despite the increased power usage, the X30’s manageable size and noise level make it suitable for various settings.",
    image: "/images/Product/10-30-100/activeX30.svg",
    cost: 600,
  },

  x100: {
    name: "GhostDAG X100",
    description:
      "The formidable BlockDAG X100 boasts an impressive hash rate of 2 TH/s and consumes a modest 1800W. The X100 is designed for high-performance mining. Daily earnings can reach up to 2,000 BDAG! Using the SHA-256 algorithm the X100 can also mine Bitcoin and Kaspa. The X100 is engineered to adapt seamlessly to diverse settings while effectively managing noise output.",
    image: "/images/Product/10-30-100/activeX100.svg",
    cost: 1500,
  },
};
