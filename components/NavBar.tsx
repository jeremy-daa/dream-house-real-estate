"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const [style, setStyle] = useState({});
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setStyle({
        backgroundColor: "var(--card-blue)",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      });
    } else {
      setStyle({});
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }
  return (
    <nav
      className="h-24 w-full  fixed top-0 left-0 duration-300 select-none z-50"
      style={style}
    >
      <div className="w-full flex justify-between items-center px-24 relative">
        {/* <div className="absolute -bottom-[7px] left-0 w-full h-5 bottomFade"></div> */}
        <Link className="flex gap-2 items-center" href={"/"}>
          <Image
            src="/logo.svg"
            alt="Dream House Real Estate"
            width={60}
            height={80}
            className="w-auto h-[90px]"
          />
          <h1 className="text-[var(--theme-red)] text-2xl uppercase tracking-widest">
            Dream House
          </h1>
        </Link>
        <div className="">
          <ul className="flex gap-8 items-center text-[var(--theme-red)] text-lg">
            <li>
              <NavLink href="/" className="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/properties" className="">
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="">
                Updates
              </NavLink>
            </li>
            <li>
              <NavLink href="#" className="">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <Link href={"#"}>
          <button className="px-6 py-2  text-[var(--theme-red)] rounded-sm border-2 border-[var(--theme-red)] hover:text-[var(--theme-blue)] hover:bg-[var(--theme-red)] hover:border-[var(--theme-red)] duration-500 ">
            Book a Consultation
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
