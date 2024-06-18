"use client";

import Image from "next/image";
import { useState } from "react";
import image1 from "@/public/images/Product/x1/mobileMining.png";
import image2 from "@/public/images/Product/x1/efficient.png";
import image3 from "@/public/images/Product/x1/daily.png";
import image4 from "@/public/images/Product/x1/raks.png";
import image5 from "@/public/images/step1.png";
import image6 from "@/public/images/step1_3.png";
import image7 from "@/public/images/step2.png";
import image8 from "@/public/images/step3_4.png";
import image9 from "@/public/images/step3.png";
import { paymentIconsList } from "@/lib/paymentIconsList";
import Link from "next/link";
import "../products.css";

function AboutProduct() {
  const [active, setActive] = useState<string>("about");
  return (
    <section className="container3 mx-auto">
      <div>
        <div className="mt-[calc(var(--one)*100)] flex items-center justify-center">
          <span
            onClick={() => setActive("about")}
            className={`p-[calc(var(--one)*24)] border-b-[3px]  cursor-pointer text-center ${
              active === "about" ? "border-[#1d44ff]" : "border-[#47474b]"
            }`}
          >
            About Product
          </span>
          <span
            onClick={() => setActive("how")}
            className={`p-[calc(var(--one)*24)] border-b-[3px] cursor-pointer text-center ${
              active === "how" ? "border-[#1d44ff]" : "border-[#47474b]"
            }`}
          >
            How to Buy?
          </span>
        </div>
        {active === "about" && (
          <div className="">
            <h3 className="mt-[calc(var(--one)*80)] text-center font-titleBold leading-[calc(var(--one)*32)]">
              The BlockDag X1 miner offers convenient and efficient mining,
              allowing you to mine up to 20 BDAG daily directly from your phone.
              With a 50 MB app size, it ensures smooth and hassle-free download,
              allowing users to engage in mining activities. To increase daily
              engagement, users can boost their mining rate by clicking the
              lightning button every 24 hours and enjoy mining without draining
              their mobile’s battery! The app is available for both Android and
              IOS. Connect to your WiFi, install the app and start mining!
            </h3>
            <div className="my-[calc(var(--one)*80)] flex flex-col md:flex-row md:divide-x divide-gray-200">
              <div className="flex flex-col justify-center items-center px-[calc(var(--one)*32)] w-[max-content]">
                <p className="inline !mb-0">Connectivity</p>
                <h4 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*-2)] font-titleBold">
                  Wi-Fi
                </h4>
              </div>

              <div className="flex flex-col justify-center items-center px-[calc(var(--one)*32)] w-[max-content]">
                <p className="inline !mb-0">Compatibility</p>
                <h4 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*-2)] font-titleBold">
                  App Store & Google Play
                </h4>
              </div>

              <div className="flex flex-col justify-center items-center px-[calc(var(--one)*32)] w-[max-content]">
                <p className="inline !mb-0">Connectivity</p>
                <h4 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*-2)] font-titleBold">
                  iOS, Android
                </h4>
              </div>

              <div className="flex flex-col justify-center items-center px-[calc(var(--one)*32)] w-[max-content]">
                <p className="inline !mb-0">Coins Per Day</p>
                <h4 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] tracking-[calc(var(--one)*-2)] font-titleBold">
                  Up to 20 BDAG
                </h4>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[calc(var(--one)*24)]">
              <div className="bg-[#26262a] rounded-[calc(var(--one)*12)] min-w-[calc(var(--one)*271.44)] p-[calc(var(--one)*32)] gap-[calc(var(--one)*32)] relative flex flex-col">
                <div className="w-[calc(var(--one)*46)] h-[calc(var(--one)*45)]">
                  <Image
                    src={image1}
                    alt="mobile icon"
                    width={46}
                    height={45}
                    placeholder="blur"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[calc(var(--one)*24)]">
                  <h3 className="text-[calc(var(--one)*20)] leading-[calc(var(--one)*32)] font-titleBold">
                    Mobile Mining
                  </h3>
                  <p className="text-left !mb-0 leading-[calc(var(--one)*20.8)]">
                    Seamlessly mine BDAG coins on your smartphone, eliminating
                    the need for specialised hardware or extensive energy
                    consumption.
                  </p>
                </div>
              </div>

              <div className="bg-[#26262a] rounded-[calc(var(--one)*12)] min-w-[calc(var(--one)*271.44)] p-[calc(var(--one)*32)] gap-[calc(var(--one)*32)] relative flex flex-col">
                <div className="w-[calc(var(--one)*46)] h-[calc(var(--one)*45)]">
                  <Image
                    src={image2}
                    alt="cutting adge"
                    width={46}
                    height={45}
                    placeholder="blur"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[calc(var(--one)*24)]">
                  <h3 className="text-[calc(var(--one)*20)] leading-[calc(var(--one)*32)] font-titleBold">
                    Cutting-Edge Consensus Algorithm
                  </h3>
                  <p className="text-left !mb-0 leading-[calc(var(--one)*20.8)]">
                    Uses an advanced Proof-of-Work (PoW) algorithm that can mine
                    with no battery drain or excessive data usage on your
                    device.
                  </p>
                </div>
              </div>

              <div className="bg-[#26262a] rounded-[calc(var(--one)*12)] min-w-[calc(var(--one)*271.44)] p-[calc(var(--one)*32)] gap-[calc(var(--one)*32)] relative flex flex-col">
                <div className="w-[calc(var(--one)*46)] h-[calc(var(--one)*45)]">
                  <Image
                    src={image3}
                    alt="light"
                    width={46}
                    height={45}
                    placeholder="blur"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[calc(var(--one)*24)]">
                  <h3 className="text-[calc(var(--one)*20)] leading-[calc(var(--one)*32)] font-titleBold">
                    Daily Engagement
                  </h3>
                  <p className="text-left !mb-0 leading-[calc(var(--one)*20.8)]">
                    Boost your mining rate by simply clicking the lightning
                    button in the app every 24 hours.
                  </p>
                </div>
              </div>

              <div className="bg-[#26262a] rounded-[calc(var(--one)*12)] min-w-[calc(var(--one)*271.44)] p-[calc(var(--one)*32)] gap-[calc(var(--one)*32)] relative flex flex-col">
                <div className="w-[calc(var(--one)*46)] h-[calc(var(--one)*45)]">
                  <Image
                    src={image4}
                    alt="stats"
                    width={46}
                    height={45}
                    placeholder="blur"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-[calc(var(--one)*24)]">
                  <h3 className="text-[calc(var(--one)*20)] leading-[calc(var(--one)*32)] font-titleBold">
                    Transparent Ranks
                  </h3>
                  <p className="text-left !mb-0 leading-[calc(var(--one)*20.8)]">
                    Progress through different ranks based on your mining
                    activity to unlock additional benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {active === "how" && (
          <div className="flex flex-col gap-[calc(var(--one)*52)]">
            <div className="mt-[calc(var(--one)*52)] gap-[calc(var(--one)*56)] flex items-center flex-col">
              <h1 className="text-center text-[calc(var(--one)*90)] leading-[calc(var(--one)*99)] font-[800]">
                How to buy <br /> GhostDAG Coins
              </h1>
              <div className="flex gap-[calc(var(--one)*8)] ">
                {paymentIconsList.data.map((item, index) => (
                  <div
                    key={index}
                    className="w-[calc(var(--one)*60)] h-[calc(var(--one)*48)]"
                  >
                    <Image
                      src={item.path}
                      alt={item.alt}
                      width={60}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col md:flex-row gap-[calc(var(--one)*36)]">
              <div className="flex flex-col gap-[calc(var(--one)*32)] max-w-[calc(var(--one)*529)]">
                <div className="flex items-center gap-[calc(var(--one)*16)]">
                  <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
                    <Image
                      src={image5}
                      alt="step 1"
                      width={48}
                      height={48}
                      placeholder="blur"
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="leading-[calc(var(--one)*41.6)] text-[calc(var(--one)*32)] font-titleBold">
                    Step 1
                  </h2>
                </div>
                <p className="text-left !mb-0">
                  To begin, make sure you have a MetaMask wallet installed on
                  your browser, or use one of the wallets supported by Wallet
                  Connect (we recommend Trust Wallet or Plus Wallet).
                </p>
                <p className="text-left !mb-0">
                  Purchasing on a desktop browser will give you a smoother
                  purchasing experience. For this we recommend Metamask.
                </p>
                <p className="text-left !mb-0">
                  If you are purchasing on mobile, we recommend using Trust
                  Wallet or Plus Wallet and connecting through built in Wallet
                  Connect.
                </p>
              </div>
              <div className="relative w-[calc(var(--one)*420)] h-[calc(var(--one)*420)]">
                <Image
                  src={image6}
                  alt="step 1"
                  width={420}
                  height={420}
                  placeholder="blur"
                  className="w-full h-full"
                />
                <div className="custom_div" />
              </div>
            </div>
            {/*  */}
            <div>
              <div className="flex justify-center items-center gap-[calc(var(--one)*16)] mb-[calc(var(--one)*32)]">
                <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
                  <Image
                    src={image7}
                    alt="step 1"
                    width={48}
                    height={48}
                    placeholder="blur"
                    className="w-full h-full"
                  />
                </div>
                <h2 className="leading-[calc(var(--one)*41.6)] text-[calc(var(--one)*32)] font-titleBold">
                  Step 2
                </h2>
              </div>
              <p className="!mb-[calc(var(--one)*32)]">
                Once you have your preferred wallet provider ready, click
                “Connect Wallet” and select the appropriate option. <br /> For
                mobile wallet apps you will need to select “Wallet Connect”
              </p>
              <p>You will then have 3 options:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[calc(var(--one)*32)]">
                <div className="bg-[#26262a] rounded-[calc(var(--one)*32)] p-[calc(var(--one)*32)] flex flex-col gap-[calc(var(--one)*36)]">
                  <div className="flex gap-[calc(var(--one)*5)] flex-wrap min-h-[calc(var(--one)*79)]">
                    {paymentIconsList.data.map((item, index) => (
                      <div
                        key={index}
                        className="w-[calc(var(--one)*60)] h-[calc(var(--one)*48)]"
                      >
                        <Image
                          src={item.path}
                          alt={item.alt}
                          width={60}
                          height={48}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[calc(var(--one)*24)]">
                    <h2>
                      Buy ETH, BNB & USDT with Apple Pay, Google Pay or Card
                    </h2>
                    <p className="text-left !mb-0">
                      Visit{" "}
                      <a
                        className="text-white inline"
                        href="https://www.moonpay.com/buy"
                      >
                        https://www.moonpay.com/buy
                      </a>{" "}
                      this will allow you to purchase ETH, BNB or USDT that will
                      be sent to your wallet. You will then be able to use this
                      ETH, BNB or USDT to purchase BDAG Coins.
                    </p>
                  </div>
                </div>

                {/*  */}

                <div className="bg-[#26262a] rounded-[calc(var(--one)*32)] p-[calc(var(--one)*32)] flex flex-col gap-[calc(var(--one)*36)]">
                  <div className="flex gap-[calc(var(--one)*5)] flex-wrap min-h-[calc(var(--one)*79)]">
                    {paymentIconsList.data.slice(0, 1).map((item, index) => (
                      <div
                        key={index}
                        className="w-[calc(var(--one)*60)] h-[calc(var(--one)*48)]"
                      >
                        <Image
                          src={item.path}
                          alt={item.alt}
                          width={60}
                          height={48}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                    {paymentIconsList.data.slice(2, 3).map((item, index) => (
                      <div
                        key={index}
                        className="w-[calc(var(--one)*60)] h-[calc(var(--one)*48)]"
                      >
                        <Image
                          src={item.path}
                          alt={item.alt}
                          width={60}
                          height={48}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[calc(var(--one)*24)]">
                    <h2>Buy BlockDAG with ETH or BNB</h2>
                    <p className="text-left !mb-0">
                      Once you have sufficient ETH or BNB in your wallet (if you
                      do not have ETH, USDT or BNB, please read option 1 first),
                      you can now swap your ETH or BNB for BlockDAG Network.
                      Type in the amount of BlockDAG Network you wish to
                      purchase ($15 minimum ) and then click “Buy with ETH” or
                      “Buy with BNB”. Your wallet provider will ask you to
                      confirm the transaction and will also show you the cost of
                      gas.
                    </p>
                  </div>
                </div>

                {/*  */}
                <div className="bg-[#26262a] rounded-[calc(var(--one)*32)] p-[calc(var(--one)*32)] flex flex-col gap-[calc(var(--one)*36)]">
                  <div className="flex gap-[calc(var(--one)*5)] flex-wrap min-h-[calc(var(--one)*79)]">
                    {paymentIconsList.data.slice(1, 2).map((item, index) => (
                      <div
                        key={index}
                        className="w-[calc(var(--one)*60)] h-[calc(var(--one)*48)]"
                      >
                        <Image
                          src={item.path}
                          alt={item.alt}
                          width={60}
                          height={48}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                    {paymentIconsList.data.slice(1, 1).map((item, index) => (
                      <div
                        key={index}
                        className="w-[calc(var(--one)*60)] h-[calc(var(--one)*48)]"
                      >
                        <Image
                          src={item.path}
                          alt={item.alt}
                          width={60}
                          height={48}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-[calc(var(--one)*24)]">
                    <h2>Buy BlockDAG with USDT</h2>
                    <p className="text-left !mb-0">
                      Please ensure you have at least $20 of USDT in your wallet
                      before commencing the transaction. Type in the amount of
                      BlockDAG Network you wish to purchase ($15 minimum). Click
                      “Convert USDT”. You will then be asked to approve the
                      purchase TWICE. The first approval is for the USDT
                      contract and the second is for the transaction amount.
                      Please ensure you go through both approval steps in order
                      to complete the transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            {/*  */}
            <div className="flex gap-[calc(var(--one)*36)] items-center">
              <div className="w-[calc(var(--one)*421)] h-[calc(var(--one)*420)]">
                <Image
                  src={image8}
                  alt="ghostdag dron package"
                  width={421}
                  height={420}
                  placeholder="blur"
                  className="w-full h-full"
                />
              </div>
              <div>
                <div className="flex flex-col items-start gap-[calc(var(--one)*32)] max-w-[calc(var(--one)*529)]">
                  <div className="flex justify-center items-center gap-[calc(var(--one)*16)]">
                    <div className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]">
                      <Image
                        src={image9}
                        alt="step 1"
                        width={48}
                        height={48}
                        placeholder="blur"
                        className="w-full h-full"
                      />
                    </div>
                    <h2 className="text-left leading-[calc(var(--one)*41.6)] text-[calc(var(--one)*32)] font-titleBold">
                      Step 3
                    </h2>
                  </div>
                  <p className="text-left">
                    Once the presale has concluded, you will be airdropped your
                    BlockDAG coins. The exact date and time of the airdrop will
                    be revealed closer to the time of the BDAG launch.
                  </p>
                  <div>
                    <button>
                      <Link href="/" className="btn">
                        Buy Now
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutProduct;
