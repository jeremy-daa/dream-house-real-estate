import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdBalcony, MdOutlineRealEstateAgent } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { LuBedDouble } from "react-icons/lu";
import { FaCar } from "react-icons/fa";

const PropertIntro = () => {
  return (
    <div className="padding flex xl:gap-24 gap-16 lg:items-start items-center justify-start flex-col lg:flex-row">
      <div className="md:min-w-[450px] min-w-[90%] md:w-[450px] w-[90%] h-[600px] border-[var(--theme-red)] border-[4px]">
        <Image
          src={"/design/building/1.jpg"}
          alt="our story"
          width={1000}
          height={1000}
          className="w-full h-full object-center object-cover translate-x-6 translate-y-6"
        />
      </div>
      <div className="flex flex-col justify-center lg:items-start items-center lg:text-start text-center gap-8">
        <h2 className="uppercase subtitle text-[var(--theme-red)] font-semibold tracking-widest">
          Kebena District
        </h2>
        <p className="capitalize title font-semibold text-[var(--theme-blue)]">
          Luxury Apartments in Kebena
        </p>
        <p className="text-lg text-slate-500">
          <span className="font-semibold text-[var(--theme-red)]">
            Dream House Real Estate
          </span>{" "}
          is Building 2B+G+15 story Building in a quiet and residential
          Investment neighborhood which will be completed in Septmeber 2026.
          <br />
          <br />
          Be one of among the first buyers and get an advantage of the Big
          discount, we have flexible payment plans starting from 20% and will be
          working with banks to finance our buyers
        </p>
        <div className="flex justify-evenly flex-wrap gap-4 border-t-[3px] border-t-[var(--theme-red)] pt-8 mt-2">
          <div className="flex flex-col gap-3 items-center justify-start border-[3px] border-[var(--theme-red)] rounded p-4">
            <span className="p-4 rounded-full bg-[var(--theme-red)]">
              <MdOutlineRealEstateAgent className="text-2xl text-slate-50" />
            </span>
            <span className="text-[var(--theme-red)] text-3xl">2</span>
            <span className="text-xl text-slate-500 font-semibold text-center">
              Floor
              <br />
              Basement
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start border-[3px] border-[var(--theme-red)] rounded p-4">
            <span className="p-4 rounded-full bg-[var(--theme-red)]">
              <BsBuilding className="text-2xl text-slate-50" />
            </span>
            <span className="text-[var(--theme-red)] text-3xl">15</span>
            <span className="text-xl text-slate-500 font-semibold">
              Stories
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start border-[3px] border-[var(--theme-red)] rounded p-4">
            <span className="p-4 rounded-full bg-[var(--theme-red)]">
              <LuBedDouble className="text-2xl text-slate-50" />
            </span>
            <span className="text-[var(--theme-red)] text-3xl">2 & 3</span>
            <span className="text-xl text-slate-500 font-semibold text-center">
              Bedroom
              <br />
              Options
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start border-[3px] border-[var(--theme-red)] rounded p-4">
            <span className="p-4 rounded-full bg-[var(--theme-red)]">
              <MdBalcony className="text-2xl text-slate-50" />
            </span>
            <span className="text-[var(--theme-red)] text-3xl">15 SQM</span>
            <span className="text-xl text-slate-500 font-semibold text-center">
              Terrace
              <br />
              Space
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center justify-start border-[3px] border-[var(--theme-red)] rounded p-4">
            <span className="p-4 rounded-full bg-[var(--theme-red)]">
              <FaCar className="text-2xl text-slate-50" />
            </span>
            <span className="text-[var(--theme-red)] text-3xl">1</span>
            <span className="text-xl text-slate-500 font-semibold text-center">
              Parking
              <br />
              Space
            </span>
          </div>
        </div>
        <Link
          href="/contact"
          className="px-8 py-3 text-lg bg-[var(--theme-red)] text-slate-100 rounded-sm border-2 border-[var(--theme-blue)] hover:text-[var(--theme-red)] hover:bg-[var(--card-blue)] hover:border-[var(--theme-red)] duration-500 w-fit glow"
        >
          Send Inquiry
        </Link>
      </div>
    </div>
  );
};

export default PropertIntro;
