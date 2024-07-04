"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="h-24 w-full flex justify-between px-24 bg-[var(--theme-blule)] items-center">
      <Link className="flex gap-2 items-center " href={"/"}>
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
    </nav>
  );
};

export default NavBar;
