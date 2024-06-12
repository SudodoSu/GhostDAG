type LinksData = {
  path: string;
  alt: string;
};

type DataObject = {
  data: LinksData[];
};

export const paymentIconsList: DataObject = {
  data: [
    { path: "/images/svgs/payment-1.svg", alt: "eth" },
    { path: "/images/svgs/payment-2.svg", alt: "usdt" },
    { path: "/images/svgs/payment-3.svg", alt: "bnb" },
    { path: "/images/svgs/payment-4.svg", alt: "visa" },
    { path: "/images/svgs/payment-5.svg", alt: "mastercard" },
    { path: "/images/svgs/payment-6.svg", alt: "google play" },
    { path: "/images/svgs/payment-7.svg", alt: "apple pay" },
  ],
};
