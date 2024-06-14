import { StaticImageData } from "next/image";
import openAi from "@/public/images/PoweredByIcons/OpenAi.png";
import gemini from "@/public/images/PoweredByIcons/Gemini.png";
import asus from "@/public/images/PoweredByIcons/Asus.png";
import github from "@/public/images/PoweredByIcons/Github.png";
import google from "@/public/images/PoweredByIcons/Google.png";
import bing from "@/public/images/PoweredByIcons/Bing.png";
import mySQL from "@/public/images/PoweredByIcons/MySQL.png";
import adobe from "@/public/images/PoweredByIcons/Adobe.png";
import tether from "@/public/images/PoweredByIcons/Tether.png";
import ethereum from "@/public/images/PoweredByIcons/Ethereum.png";
import binance from "@/public/images/PoweredByIcons/Binance.png";
import trust from "@/public/images/PoweredByIcons/Trust.png";
import fireblocks from "@/public/images/PoweredByIcons/Fireblocks.png";
import aviva from "@/public/images/PoweredByIcons/Aviva.png";
import googleAnalytics from "@/public/images/PoweredByIcons/Google-Analytics.png";
import microsoft from "@/public/images/PoweredByIcons/Microsoft.png";
import cf from "@/public/images/PoweredByIcons/CF.png";
import coinStats from "@/public/images/PoweredByIcons/CoinStats.png";
import telegram from "@/public/images/PoweredByIcons/Telegram.png";
import gmail from "@/public/images/PoweredByIcons/Gmail.png";
import visa from "@/public/images/PoweredByIcons/visa.png";
import mastercard from "@/public/images/PoweredByIcons/mastercard.png";
import gpay from "@/public/images/PoweredByIcons/gpay.png";
import applepay from "@/public/images/PoweredByIcons/applepay.png";
import moonpay from "@/public/images/PoweredByIcons/moonpay.png";

type LinksData = {
  path: StaticImageData;
  alt: string;
};

type DataObject = {
  data: LinksData[];
};

export const PoweredByIconsData: DataObject = {
  data: [
    { path: openAi, alt: "OpenAi" },
    { path: gemini, alt: "Gemini" },
    { path: asus, alt: "Asus" },
    { path: github, alt: "Github" },
    { path: google, alt: "Google" },
    { path: bing, alt: "Bing" },
    { path: mySQL, alt: "MySQL" },
    { path: adobe, alt: "Adobe" },
    { path: tether, alt: "Tether" },
    { path: ethereum, alt: "Ethereum" },
    { path: binance, alt: "Binance" },
    { path: trust, alt: "Trust" },
    { path: fireblocks, alt: "Fireblocks" },
    { path: aviva, alt: "Aviva" },
    { path: googleAnalytics, alt: "Google-Analytics" },
    { path: microsoft, alt: "Microsoft" },
    { path: cf, alt: "CF" },
    { path: coinStats, alt: "CoinStats" },
    { path: telegram, alt: "Telegram" },
    { path: gmail, alt: "Gmail" },
    { path: visa, alt: "visa" },
    { path: mastercard, alt: "mastercard" },
    { path: gpay, alt: "gpay" },
    { path: applepay, alt: "applepay" },
    { path: moonpay, alt: "moonpay" },
  ],
};
