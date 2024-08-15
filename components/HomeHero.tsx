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
          background: "var(--card-color)",
          opacity: 0.6,
        }}
      ></div>
      <div className="w-full h-full flex justify-center items-center z-10 px-8">
        <div className="text-center text-slate-100 flex flex-col gap-4 items-center max-w-[700px] z-10 translate-y-[50px]">
          <p
            className={`md:text-2xl text-xl font-extralight ${poppinsLight.className}`}
          >
            Dream House Real Estate
          </p>
          <h1 className="md:text-5xl text-[32px] mb-4 leading-snug">
            Your Trusted Partner in Developing Perfect Homes in Addis Ababa
          </h1>
          <Link
            href="/properties"
            className="px-8 py-3 text-lg bg-[var(--theme-red)] text-slate-100 rounded-sm border-2 border-[var(--theme-blue)] hover:text-[var(--theme-red)] hover:bg-[var(--theme-blue)] hover:border-[var(--theme-red)] duration-500 w-fit glow"
          >
            Explore Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
