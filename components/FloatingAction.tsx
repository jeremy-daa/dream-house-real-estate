import Link from "next/link";
import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const FloatingAction = () => {
  return (
    <div className="fixed bottom-[3rem] right-[2rem] z-50 flex flex-col justify-center items-center gap-6 duration-300 ">
      <Link
        className="floatingAction p-3 bg-[var(--card-blue)] border-[var(--theme-red)] hover:text-[var(--theme-red)] glowBlue text-slate-200"
        href="tel:+251962944444"
      >
        <BsTelephone className={"w-full h-full"} />
      </Link>
      <Link
        className="floatingAction p-3 bg-slate-50 border-[var(--theme-red)] glowBlue hover:text-[var(--theme-red)] text-[var(--theme-blue)] hover:border-[var(--theme-blue)]"
        href="mailto:info@dreamhouse-et.com"
      >
        <IoMailOutline className={"w-full h-full"} />
      </Link>
      <Link
        className="floatingAction p-2 bg-[var(--theme-red)] border-[var(--card-blue)] hover:text-[var(--card-blue)] glow text-slate-200"
        href="https://wa.me/+251963575700"
      >
        <BiLogoWhatsapp className={"w-full h-full"} />
      </Link>
    </div>
  );
};

export default FloatingAction;
