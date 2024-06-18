"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  InitialCost: number;
};

function CalculateCost({ InitialCost }: Props) {
  const [currentCost, setCurrentCost] = useState<number>(InitialCost);
  const [currentQuantity, setCurrentQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (currentCost > 0) {
      setCurrentQuantity(currentQuantity - 1);
      setCurrentCost(currentCost - InitialCost);
    }
  };

  const handleIncrease = () => {
    setCurrentQuantity(currentQuantity + 1);
    setCurrentCost(currentCost + InitialCost);
  };

  return (
    <div className="flex gap-[calc(var(--one)*20)] flex-col">
      <div className="flex gap-[calc(var(--one)*12)] items-center">
        <span className="text-[#fe450a] text-[calc(var(--one)*32)] font-titleBold">
          ${currentCost}
        </span>
        <ul className="">
          <li>
            <div className="w-[calc(var(--one)*24)] h-[calc(var(--one)*24)]">
              <Image
                src="/images/Product/10-30-100/shipping.svg"
                alt="shipping"
                width={24}
                height={24}
                className="w-full h-full"
              />
            </div>
          </li>
        </ul>
        <span>Shipping is free</span>
      </div>
      <div>
        <div className="flex items-center gap-[calc(var(--one)*24)]">
          <button
            onClick={handleDecrease}
            className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]"
          >
            <Image
              src="/images/Product/10-30-100/-.svg"
              alt="return"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </button>
          <span className="text-[calc(var(--one)*24)] leading-[130%] font-titleBold tracing-[-.477px]">
            {currentQuantity}
          </span>
          <button
            onClick={handleIncrease}
            className="w-[calc(var(--one)*48)] h-[calc(var(--one)*48)]"
          >
            <Image
              src="/images/Product/10-30-100/+.svg"
              alt="return"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </button>
          <div>
            <button>
              <Link href="/buy" className="btn">
                Buy
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculateCost;
