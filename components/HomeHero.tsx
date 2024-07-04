import Image from "next/image";
import Link from "next/link";
import React from "react";
import { poppinsLight } from "./Fonts";

const HomeHero = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <Image
        src="/stock/6.jpg"
        alt="Dream House Real Estate"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-opacity-30"
        style={{
          background: "var(--theme-blue)",
          opacity: 0.5,
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100px]">
        <div className="text-center text-slate-100 flex flex-col gap-4 items-center">
          <p className={`text-2xl font-extralight ${poppinsLight.className}`}>
            Dream House Real Estate
          </p>
          <h1 className="text-5xl mb-4 leading-snug">
            Your Trusted Partner in Finding Perfect Homes in Addis Ababa
          </h1>
          <Link
            href="/properties"
            className="px-8 py-3 text-lg bg-[var(--theme-red)] text-slate-100 rounded-sm border-2 border-[var(--theme-blue)] hover:text-[var(--theme-red)] hover:bg-[var(--theme-blue)] hover:border-[var(--theme-red)] duration-500 w-fit"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
