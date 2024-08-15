import Link from "next/link";
import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const FloatingAction = () => {
  return (
    <div className="fixed md:bottom-[3rem] md:right-[2rem] bottom-9 right-5 z-50 flex flex-col justify-center items-center gap-6 duration-300">
      <Link
        className="floatingAction md:w-[3.5rem] md:h-[3.5rem] h-10 w-10 p-3 bg-[var(--card-blue)] border-[var(--theme-red)] hover:text-[var(--theme-red)] glowBlue text-slate-200"
        href="tel:+251935575700"
      >
        <BsTelephone className={"w-full h-full"} />
      </Link>
      <Link
        className="floatingAction md:w-[3.5rem] md:h-[3.5rem] h-10 w-10 p-3 bg-slate-50 border-[var(--theme-red)] glowBlue hover:text-[var(--theme-red)] text-[var(--theme-blue)] hover:border-[var(--theme-blue)]"
        href="mailto:info@dreamhouse-et.com"
      >
        <IoMailOutline className={"w-full h-full"} />
      </Link>
      <Link
        className="floatingAction md:w-[3.5rem] md:h-[3.5rem] h-10 w-10 p-2 bg-[var(--theme-red)] border-[var(--card-blue)] hover:text-[var(--card-blue)] glow text-slate-200"
        href="https://wa.me/+251935575700"
      >
        <BiLogoWhatsapp className={"w-full h-full"} />
      </Link>
    </div>
  );
};

export default FloatingAction;
