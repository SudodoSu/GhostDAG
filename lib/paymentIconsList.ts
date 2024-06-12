type LinksData = {
  path: string;
  alt: string;
};

type DataObject = {
  data: LinksData[];
};

export const paymentIconsList: DataObject = {
  data: [
    { path: "/images/payment-1.svg", alt: "eth" },
    { path: "/images/payment-2.svg", alt: "usdt" },
    { path: "/images/payment-3.svg", alt: "bnb" },
    { path: "/images/payment-4.svg", alt: "visa" },
    { path: "/images/payment-5.svg", alt: "mastercard" },
    { path: "/images/payment-6.svg", alt: "google play" },
    { path: "/images/payment-7.svg", alt: "apple pay" },
  ],
};
