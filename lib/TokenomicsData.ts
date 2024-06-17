type LinksData = {
  span: string;
  title: string;
  image: string;
  des: string;
};

type DataObject = {
  data: LinksData[];
};

export const TokenomicsData: DataObject = {
  data: [
    {
      span: "Coin Supply",
      title: "50,000,000,000 (50 Billion) - in presale",
      image: "/images/svgs/Tokenomics/1.svg",
      des: "BlockDAG Coin (BDAG) stands out with a total supply of 150 billion coins, underscoring its rarity and commitment to maintaining value. At BlockDAG Network, we've implemented a halving event every 12 months, further solidifying our commitment to maintaining scarcity and value. Setting a limit on our coin supply helps us manage growth responsibly, avoid excessive inflation and create a stable environment for our community.",
    },
    {
      span: "Community Allocation",
      title: "98,500,000,000 (98.5 Billion) - 66% of Max Supply",
      image: "/images/svgs/Tokenomics/2.svg",
      des: `The Pillar of BlockDAG: We've reserved a major portion for our community because we believe in its power. This allocation represents our commitment to everyone who uses, promotes, and envisions the network's potential.

Miners (78.8 billion coins or 80% of Community Coins): Rewards for those crucial to our network's operation.

Community Building & Ecosystem (14.8 billion coins or 15% of Community Coins): Investments in strengthening and enriching the BlockDAG community.

Liquidity Pool (4.9 billion coins or 5% of Community Coins): To ensure smooth and stable trading experiences.`,
    },
    {
      span: "Presale Allocation",
      title: "50,000,000,000 (50 Billion) - 33% of Max Supply",
      image: "/images/svgs/Tokenomics/3.svg",
      des: "Early Believers, Core Community: Before our coins are available to the wider public, our presale offers early supporters an exclusive opportunity to back our vision, often at a preferential rate. It's more than just an initial fundraiser; it's about building the cornerstone of our community.",
    },
    {
      span: "Team Allocation",
      title: "1,500,000,000 (1.5 Billion) - 1% of Max Supply",
      image: "/images/svgs/Tokenomics/4.svg",
      des: "A 10% allocation of the total coin supply is dedicated to our devoted team members. This allocation aligns their interests with the long-term success of BlockDAG and motivates active participation in its ongoing development and prosperity. This transparent and fair allocation underscores our unwavering commitment to the project's success.",
    },
  ],
};
