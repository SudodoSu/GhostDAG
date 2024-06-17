"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import "./tokenomics.css";
function TokenomicsList() {
  const [first, setFirst] = useState<boolean>(true);
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    }),
  };

  const handleOnClick = (title: string) => {
    if (title === "first") {
      setFirst(true);
      setSecond(false);
      setThird(false);
    } else if (title === "second") {
      setFirst(false);
      setSecond(true);
      setThird(false);
    } else if (title === "third") {
      setFirst(false);
      setSecond(false);
      setThird(true);
    }
  };
  return (
    <section className="pt-[calc(var(--one)*150)]">
      <div className="max-w-[min(var(--one)*1127.92,95%)] flex justify-between">
        <div className="w-[40%]">
          <ul className="flex flex-col gap-[calc(var(--one)*20)]">
            <li
              className={`cursor-pointer ul_li !text-[calc(var(--one)*16)] leading-[calc(var(--one)*20.8)] font-titleBold ${
                first ? "text-white active ul_tokenomics" : "text-[#a6b1c5]"
              }`}
              onClick={() => handleOnClick("first")}
            >
              Our Commitment Showcased
            </li>
            <li
              className={`cursor-pointer ul_li !text-[calc(var(--one)*16)] leading-[calc(var(--one)*20.8)] font-titleBold ${
                second ? "text-white active ul_tokenomics" : "text-[#a6b1c5]"
              }`}
              onClick={() => handleOnClick("second")}
            >
              Conclusion
            </li>
            <li
              onClick={() => handleOnClick("third")}
              className={`cursor-pointer ul_li !text-[calc(var(--one)*16)] leading-[calc(var(--one)*20.8)] font-titleBold ${
                third ? "text-white active ul_tokenomics" : "text-[#a6b1c5]"
              }`}
            >
              Be Part of Our Story. Join the GhostDAG Revolution.
            </li>
          </ul>
        </div>

        {first && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col gap-[calc(var(--one)*20)] w-[60%]"
          >
            <h2 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] font-titleBold">
              Our Commitment Showcased
            </h2>
            <p className="text-left">
              The team—our core driving force—is allocated this portion.
              Demonstrating our long-term vision, these coins are locked for 2
              years. It's our way of saying we're in this for the long haul,
              fully invested in the success of BlockDAG. Conclusion Tokenomics
              isn't just a distribution strategy; it's a reflection of our
              ethos, our vision, and our promise to stakeholders. At BlockDAG
              Network, our tokenomics is a transparent commitment to every
              supporter, miner, developer, and believer in our mission. This is
              our blueprint, and with it, we're building the future of crypto.
              Be Part of Our Story. Join the GhostDAG Revolution.
            </p>
          </motion.div>
        )}
        {second && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col gap-[calc(var(--one)*20)] w-[60%]"
          >
            <h2 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] font-titleBold">
              Conclusion
            </h2>
            <p className="text-left">
              Tokenomics isn't just a distribution strategy; it's a reflection
              of our ethos, our vision, and our promise to stakeholders. At
              BlockDAG Network, our tokenomics is a transparent commitment to
              every supporter, miner, developer, and believer in our mission.
              This is our blueprint, and with it, we're building the future of
              crypto.
            </p>
          </motion.div>
        )}
        {third && (
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="flex flex-col gap-[calc(var(--one)*20)] w-[60%]"
          >
            <h2 className="text-[calc(var(--one)*32)] leading-[calc(var(--one)*41.6)] font-titleBold">
              Be Part of Our Story. Join the GhostDAG Revolution.
            </h2>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default TokenomicsList;
