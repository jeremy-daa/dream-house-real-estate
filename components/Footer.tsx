import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  IoLocationOutline,
  IoLogoTiktok,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-[100px] bg-[var(--theme-red)] py-10 text-slate-100 flex flex-col gap-8 items-center rounded-lg translate-y-1/2 border-4 border-[var(--theme-blue)]">
        <h2 className="text-5xl">Ready to get started?</h2>
        <p className="text-lg max-w-2xl text-center">
          Contact us today and get a free consultation on how we can help you
          choose the right property for your needs.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 text-lg bg-[var(--theme-red)] text-slate-100 rounded-sm border-2 border-[var(--theme-blue)] hover:bg-[var(--theme-blue)] hover:border-[var(--theme-red)] duration-500 w-fit glowBlue"
        >
          Contact Us
        </Link>
      </div>

      <div className="text-slate-100 bg-[var(--card-blue)] pt-64 px-[100px] pb-24 flex justify-between gap-10 items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-center">
            <Image
              src={"/logo.svg"}
              alt="Dream House Real Estate Logo"
              width={100}
              height={100}
              className="w-[120px] h-[120px]"
            ></Image>
            <h2 className="text-2xl font-bold">Dream House</h2>
            <h3 className="text-xl tracking-widest">Real Estate</h3>
            {/* <p className="text-sm text-slate-500 max-w-[300px]">
              Dream House is a real estate company based in Addis Ababa,
              Ethiopia. We specialize in developing appartments complexes that
              are modern and affordable.
            </p> */}
          </div>
          {/* Social links */}
          <div className="flex gap-4 items-center">
            <Link
              href={"/facebook.com"}
              className="p-3 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
            >
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link
              href={"https://wa.me/+251963575700"}
              className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
            >
              <IoLogoWhatsapp className="text-3xl" />
            </Link>
            <Link
              href={
                "https://www.instagram.com/dreamhouse_et?igsh=ZHpxYjZmcXR6Z2dw"
              }
              className="p-3 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
            >
              <BsInstagram className="text-2xl" />
            </Link>
            <Link
              href={"https://www.tiktok.com/@dreamhouse_et?_t=8nytJDsa1sE&_r=1"}
              className="p-3 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
            >
              <IoLogoTiktok className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-slate-400">
          <h3 className="font-semibold text-lg mb-4 text-slate-100">
            Quick Links
          </h3>
          <Link
            href="/about"
            className="duration-300 hover:text-[var(--theme-red)]"
          >
            About Us
          </Link>
          <Link
            href="/properties"
            className="duration-300 hover:text-[var(--theme-red)]"
          >
            Properties
          </Link>
          <Link
            href="/contact"
            className="duration-300 hover:text-[var(--theme-red)]"
          >
            Contact Us
          </Link>
          <Link
            href="/portfolio"
            className="duration-300 hover:text-[var(--theme-red)]"
          >
            Portfolio
          </Link>
        </div>
        <div className="flex flex-col gap-5 text-slate-400">
          <h3 className="font-semibold text-lg mb-4 text-slate-100">
            Contact Info
          </h3>
          <Link
            href={"https://maps.app.goo.gl/DvxKongncwBCV6xR9"}
            className="flex items-center gap-2"
          >
            <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
              <IoLocationOutline className="text-xl" />
            </span>
            <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer">
              Addis Ababa, Ethiopia
            </span>
          </Link>
          <Link href="tel:+251962944444" className="flex items-center gap-2">
            <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
              <MdOutlinePhone className="text-xl" />
            </span>
            <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer">
              +251 962 944444
            </span>
          </Link>
          <Link href="tel:+251935575700" className="flex items-center gap-2">
            <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
              <MdOutlinePhone className="text-xl" />
            </span>
            <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer">
              +251 935 575700
            </span>
          </Link>
          <Link
            href="mailto:info@dreamhouse-et.com"
            className="flex items-center gap-2"
          >
            <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
              <MdOutlineMail className="text-xl" />
            </span>
            <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer">
              info@dreamhouse-et.com
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-5 text-slate-400 max-w-72">
          <h3 className="font-semibold text-lg mb-4 text-slate-100">
            Newsletter
          </h3>
          <p className="text-slate-400">
            Subscribe to our newsletter to get the latest updates on our
            properties and services.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 border-2 border-slate-300 rounded-sm focus:outline-none focus:border-[var(--theme-red)] duration-300"
            />
            <button className="bg-[var(--theme-red)] text-slate-100 p-2 rounded-sm hover:bg-[var(--theme-blue)] duration-300 border-2 border-transparent hover:border-[var(--theme-red)]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
