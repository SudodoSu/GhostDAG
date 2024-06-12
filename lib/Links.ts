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
    { path: "/team", titles: "dev releases" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "win $2m usd" },
    { path: "/presale", titles: "wiki" },
    { path: "/presale", titles: "calculator" },
    { path: "/presale", titles: "mechanics" },
  ],
  products: [
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
  ],
  mechanics: [
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
    { path: "/presale", titles: "products" },
  ],
};
