"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import Drawer from "@mui/joy/Drawer";
import { linksData } from "@/lib/Links";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  return (
    <section className={`w-full fixed z-40 bg-background/95`}>
      <nav
        className={` px-6 py-6  max-w-[1536px] md:mx-auto w-full left-0
           `}
      >
        <div className="flex justify-between">
          <Link href="/" className="">
            <div className=" header_image w-52">
              <Image
                src="/images/logo.png"
                alt="ZkSync.ai Logo"
                width={388}
                height={84}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="xl:flex hidden">
            <div className="flex gap-3 md:gap-5">
              <ul className="flex items-center">
                {linksData.data.map((item, index) => (
                  <li key={index} className={``}>
                    <a
                      href={item.path}
                      className={`uppercase font-titleBold rounded-full text-white text-sm xl:text-base 2xl:text-lg relative block leading-7 px-3 py-2`}
                    >
                      {item.titles}
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
        className=" drawer_custom translate-y-[64px] !z-10"
      >
        <div className={`bg-blue w-full px-3  py-3 pt-4 shadow-md`}>
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
