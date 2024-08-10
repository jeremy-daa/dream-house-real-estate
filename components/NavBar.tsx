"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import BookConsultation from "./BookConsultation";

const NavBar = () => {
  const [style, setStyle] = useState({});
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="h-24 w-full fixed top-0 left-0 duration-300 select-none z-30"
      style={style}
    >
      <div className="w-full flex justify-between items-center px-24 relative">
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
            className="w-auto h-[50px]"
          />
          <h1 className="text-[var(--card-blue)] text-2xl capitalize tracking-widest font-semibold">
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
          className="px-6 py-2  text-[var(--theme-red)] rounded-sm border-2 border-[var(--theme-red)] hover:text-[var(--theme-blue)] hover:bg-[var(--theme-red)] hover:border-[var(--theme-red)] duration-500 glow"
          onClick={() => setConsultationModal(true)}
        >
          Book a Consultation
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
