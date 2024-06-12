import { ReactNode } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

type LinksData = {
  path: string;
  icon: ReactNode;
  title?: string;
};

type DataObject = {
  data: LinksData[];
};

export const socialsData: DataObject = {
  data: [
    {
      path: "/",
      icon: <FaXTwitter className="text-2xl text-gray-400" />,
      title: "Twitter",
    },
    {
      path: "/",
      icon: <FaTelegram className="text-2xl text-gray-400" />,
      title: "Telegram",
    },
    {
      path: "/",
      icon: <FaDiscord className="text-2xl text-gray-400" />,
      title: "Discord",
    },
  ],
};
