"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import BookConsultation from "./BookConsultation";

const NavBar = () => {
  const [style, setStyle] = useState({});
  const [menu, setMenu] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [consultationModal, setConsultationModal] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setStyle({
        backgroundColor: "var(--nav-scroll)",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        zIndex: 30,
      });
    } else {
      setStyle({
        zIndex: 30,
      });
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    if (window.innerWidth < 1280) {
      setMobile(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="py-3 w-full fixed top-0 left-0 duration-300 select-none z-30"
      style={style}
    >
      <div className="w-full flex justify-between items-center md:px-24 sm:px-14 px-8 relative">
        <BookConsultation
          consultationModal={consultationModal}
          setConsultationModal={setConsultationModal}
        />
        {/* <div className="absolute -bottom-[7px] left-0 w-full h-5 bottomFade"></div> */}
        <Link className="flex gap-4 items-center py-4" href={"/"}>
          <Image
            src="/logo.svg"
            alt="Dream House Real Estate"
            width={60}
            height={80}
            className="w-auto sm:h-[50px] h-[40px]"
          />
          <h1 className="text-[var(--card-blue)] sm:text-2xl text-xl tracking-widest font-semibold uppercase">
            Dream House
          </h1>
        </Link>
        <div className="hidden xl:block">
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
              <NavLink href="/gallery" className="">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink href="/portfolio" className="">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink href="/updates" className="">
                Updates
              </NavLink>
            </li>
            <li>
              <NavLink href="/contact" className="">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className="px-6 py-2  text-[var(--theme-red)] rounded-sm border-2 border-[var(--theme-red)] hover:text-[var(--theme-blue)] hover:bg-[var(--theme-red)] hover:border-[var(--theme-red)] duration-500 glow hidden xl:block"
          onClick={() => setConsultationModal(true)}
        >
          Book a Consultation
        </button>
        {/* Mobile Nav */}
        <div
          className={`off-screen-menu block xl:hidden ${
            menu ? "activeMobile" : ""
          }`}
        >
          <Image
            src="/logo.svg"
            alt="Dream House Real Estate"
            width={60}
            height={80}
            className="w-auto h-[60px] absolute left-7 top-7"
          />
          <ul className="flex gap-12 flex-col justify-center items-center text-[var(--theme-red)] text-3xl font-medium">
            <li
              onClick={() => {
                setMenu(false);
              }}
            >
              <NavLink
                href="/"
                className={`tracking-widest ${mobile ? "mobile" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li
              onClick={() => {
                setMenu(false);
              }}
            >
              <NavLink
                href="/properties"
                className={`tracking-widest ${mobile ? "mobile" : ""}`}
              >
                Properties
              </NavLink>
            </li>
            <li
              onClick={() => {
                setMenu(false);
              }}
            >
              <NavLink
                href="/gallery"
                className={`tracking-widest ${mobile ? "mobile" : ""}`}
              >
                Gallery
              </NavLink>
            </li>
            <li
              onClick={() => {
                setMenu(false);
              }}
            >
              <NavLink
                href="/portfolio"
                className={`tracking-widest ${mobile ? "mobile" : ""}`}
              >
                Portfolio
              </NavLink>
            </li>
            <li
              onClick={() => {
                setMenu(false);
              }}
            >
              <NavLink
                href="/updates"
                className={`tracking-widest ${mobile ? "mobile" : ""}`}
              >
                Updates
              </NavLink>
            </li>
            <li
              onClick={() => {
                setMenu(false);
              }}
            >
              <NavLink
                href="/contact"
                className={`tracking-widest ${mobile ? "mobile" : ""}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`ham-menu block xl:hidden ${menu ? "activeMobile" : ""}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
