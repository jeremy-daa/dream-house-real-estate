import Link from "next/link";
import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";

const FloatingAction = () => {
  return (
    <div className="fixed bottom-[3rem] right-[2rem] z-50 flex flex-col justify-center items-center gap-6 duration-300 ">
      <Link
        className="floatingAction p-3 bg-[var(--theme-blue)] border-[var(--theme-red)] hover:text-[var(--theme-red)]"
        href="/"
      >
        <BsTelephone className={"w-full h-full"} />
      </Link>
      <Link
        className="floatingAction p-2 bg-[var(--theme-red)] border-[var(--theme-blue)] hover:text-[var(--theme-blue)]"
        href="/"
      >
        <BiLogoWhatsapp className={"w-full h-full"} />
      </Link>
    </div>
  );
};

export default FloatingAction;
