import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  IoLocationOutline,
  IoLogoTiktok,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import Map from "@/components/Map";

const page = () => {
  return (
    <div className="pt-36">
      <div className="z-10">
        <h1 className="text-6xl text-center text-[var(--theme-red)] font-semibold">
          Contact Us
        </h1>
        <p className="text-xl text-center text-slate-500 mt-7">
          Any Questions or Ready to Purchase? Get in touch with us.
        </p>
        <div className="w-[80%] mx-auto mt-10 rounded-lg flex shadowContact p-4">
          <div className="flex-[0.40] rounded-lg bg-[var(--card-blue)] p-8 text-slate-400 flex flex-col gap-16 relative overflow-hidden">
            <div className="circleBG bottom-0 h-52 w-52 right-0 translate-x-1/3 translate-y-1/3">
              <div className="circleBG top-0 h-32 w-32 left-0 -translate-x-1/3 -translate-y-1/3"></div>
            </div>
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-semibold text-slate-50">
                  Contact Information
                </h2>
                <p>
                  Alternatively, you can reach us via the contact information
                  below:
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-5">
                  <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                    <IoLocationOutline className="text-xl" />
                  </span>
                  <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                    Addis Ababa, Ethiopia
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                    <MdOutlinePhone className="text-xl" />
                  </span>
                  <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                    +251 911 111 111
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                    <MdOutlinePhone className="text-xl" />
                  </span>
                  <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                    +251 911 111 111
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                    <MdOutlineMail className="text-xl" />
                  </span>
                  <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                    abc@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <Link
                href={"/facebook.com"}
                className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
              >
                <FaFacebookF className="text-xl" />
              </Link>
              <Link
                href={"/whatsapp.com"}
                className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
              >
                <IoLogoWhatsapp className="text-xl" />
              </Link>
              <Link
                href={"/instagram.com"}
                className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
              >
                <BsInstagram className="text-xl" />
              </Link>
              <Link
                href={"/facebook.com"}
                className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
              >
                <IoLogoTiktok className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="flex-[0.6]">
            <form className="flex flex-col gap-5 p-8 rounded-lg text-slate-400">
              <h2 className="text-2xl font-semibold text-slate-900">
                Send Us a Message
              </h2>
              <p>
                If you have any questions or inquiries, please fill out the form
                below and we will get back to you as soon as possible.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-5 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="p-3 formField"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="p-3 formField"
                    />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter your phone number"
                      className="p-3 formField"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Enter your subject"
                      className="p-3 formField"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    placeholder="Enter your message"
                    className="p-3 formField min-h-20"
                  ></textarea>
                </div>
                <button className="p-3 bg-[var(--theme-red)] text-slate-100 hover:bg-[var(--card-blue)] duration-300 glowBlue">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default page;
