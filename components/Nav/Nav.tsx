"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import "./nav.css";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import Drawer from "@mui/joy/Drawer";
import { linksData } from "@/lib/Links";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [ProductsVisible, setProductsVisible] = useState<boolean>(false);
  const [MechanicsVisible, setMechanicsVisible] = useState<boolean>(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  const handleMouseEnter = () => {
    setProductsVisible(true);
  };

  const handleMouseLeave = () => {
    setProductsVisible(false);
  };

  const handleSubNavOpenings = (title: string | undefined) => {
    if (title === "products") {
      setProductsVisible(true);
    } else if (title === "mechanics") {
      setMechanicsVisible(true);
    }
  };

  const handleSubNavClosings = (title: string | undefined) => {
    if (title === "products") {
      setProductsVisible(false);
    } else if (title === "mechanics") {
      setMechanicsVisible(false);
    }
  };

  const fadeIn = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05,
      },
    }),
  };

  return (
    <section className={`w-full fixed z-40 bg-background/95`}>
      <nav
        className={` px-6 py-6  max-w-[1536px] md:mx-auto w-full left-0
           `}
      >
        <div className="flex justify-between relative">
          <Link href="/" className="">
            <div className=" flex items-center header_logo_container">
              <div className="relative header_image flex items-center justify-center">
                <div className="absolute">
                  <Image
                    src="/images/logo_img.png"
                    alt="ZkSync.ai Logo"
                    width={25}
                    height={25}
                    priority={true}
                    className="w-full h-full "
                  />
                </div>
                <div className="absolute inset-0">
                  <Image
                    src="/images/gifs/3d.gif"
                    alt="ZkSync.ai Logo"
                    width={50}
                    height={50}
                    priority={true}
                    className="w-full h-full "
                  />
                </div>
              </div>
              <h2 className="header_text">GhostDAG</h2>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="xl:flex hidden">
            <div className="flex gap-3 md:gap-5">
              <ul className="flex items-center">
                {linksData.data.map((item, index) => (
                  <li
                    key={index}
                    className={`relative cursor-pointer`}
                    onMouseEnter={() => handleSubNavOpenings(item.titles)}
                    onMouseLeave={() => handleSubNavClosings(item.titles)}
                  >
                    <a
                      href={item.path}
                      className={`uppercase font-titleBold rounded-full text-white text-sm lg:text-[calc(var(--one)*18)] relative block leading-7 px-3 py-2`}
                    >
                      {item.titles}
                      {item.titles === "products" && ProductsVisible && (
                        <motion.ul
                          variants={fadeIn}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: false }}
                          custom={index}
                          className="animation_nav_ul -left-[25%]"
                        >
                          {linksData.products.map((x, i) => (
                            <li
                              key={i}
                              className={`hover:bg-[#1d44ff] ${
                                i === 5 ? "" : "border-b-[calc(var(--one)*1)]"
                              } border-white cursor-pointer`}
                            >
                              <a
                                href={x.path}
                                className="block p-[calc(var(--one)*16)]"
                              >
                                {x.titles}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                      {item.titles === "mechanics" && MechanicsVisible && (
                        <motion.ul
                          variants={fadeIn}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: false }}
                          custom={index}
                          className="animation_nav_ul"
                        >
                          {linksData.mechanics.map((x, i) => (
                            <li
                              key={i}
                              className={`hover:bg-[#1d44ff] ${
                                i === 3 ? "" : "border-b-[calc(var(--one)*1)]"
                              } border-white cursor-pointer`}
                            >
                              <a
                                href={x.path}
                                className="block p-[calc(var(--one)*16)]"
                              >
                                {x.titles}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="/buy" className="btn ml-4 !py-4 !px-12">
                    Buy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="xl:hidden flex relative" ref={navRef}>
            <button className=" z-50">
              <Hamburger
                toggled={open}
                toggle={setOpen}
                label="Show menu"
                size={24}
                color="#ffffff"
                rounded
              />
            </button>
          </div>
        </div>
      </nav>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        className=" drawer_custom translate-y-[96px] !z-10"
      >
        <div className={`bg-background w-full px-3  py-3 pt-4 shadow-md`}>
          <ul className="flex flex-col gap-4">
            {linksData.data.map((item, index) => (
              <li key={index} className={`flex `}>
                <a
                  href={item.path}
                  className={`text-gray-400  hover:text-white text-sm relative block leading-7 px-6 py-2`}
                  onClick={() => setOpen(false)}
                >
                  <div className={` `}>{item.titles}</div>
                </a>
              </li>
            ))}
            <li className="flex" onClick={() => setOpen(false)}>
              <Link
                href="/build"
                className="btn !bg-black !text-white !py-2 pb-2"
              >
                Build
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </section>
  );
};

export default Navbar;
