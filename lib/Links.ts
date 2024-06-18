type LinksData = {
  path: string;
  titles?: string;
};

type DataObject = {
  data: LinksData[];
  products: LinksData[];
  mechanics: LinksData[];
};

export const linksData: DataObject = {
  data: [
    { path: "/", titles: "keynote" },
    { path: "/dev-releases", titles: "dev releases" },
    { path: "/crypto-mining-rigs", titles: "products" },
    { path: "/presale", titles: "win $2m usd" },
    { path: "/presale", titles: "wiki" },
    { path: "/presale", titles: "calculator" },
    { path: "/presale", titles: "mechanics" },
  ],
  products: [
    { path: "/tokenomics", titles: "gdag coins" },
    { path: "/product/ghostdag-card", titles: "ghostdag card" },
    { path: "/product/ghostdagx1", titles: "ghostdag x1" },
    { path: "/product/ghostdagx10", titles: "ghostdag x10" },
    { path: "/product/ghostdagx30", titles: "ghostdag x30" },
    { path: "/product/ghostdagx100", titles: "ghostdag x100" },
  ],
  mechanics: [
    { path: "/pillars", titles: "pillars" },
    { path: "/news", titles: "news" },
    { path: "/blog", titles: "blog" },
    { path: "/press-kit", titles: "press kit" },
  ],
};
