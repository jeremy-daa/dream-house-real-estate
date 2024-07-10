import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import { MdSquareFoot } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const HomeProperties = () => {
  return (
    <div className="mt-24 px-32">
      <div className="flex flex-col gap-10 items-center">
        <h2 className="text-6xl text-[var(--theme-blue)] font-semibold text-center">
          Our Properties
        </h2>
        <p className="text-center text-lg text-slate-500 max-w-xl">
          We offer a wide range of properties options to suit your needs. Here
          are some of our featured properties.
        </p>
        <div className="flex justify-between gap-10">
          <div className="w-[350px] flex flex-col p-3 pb-5 rounded-sm border-[var(--theme-red)] border-[3px] gap-8 hover:-translate-y-2 hover:shadow-xl duration-300">
            <div className="w-full h-[200px] rounded-sm overflow-hidden relative border-[var(--theme-red)] border-[3px]">
              <span className="absolute top-3 left-4 px-5 py-1 rounded-2xl text-slate-100 bg-[var(--theme-red)] uppercase border-slate-50 border-[1px] text-sm tracking-wider font-semibold select-none">
                For Sale
              </span>
              <Image
                src="/properties/1.jpg"
                alt="property"
                width={1000}
                height={1000}
                className="w-full h-[250px] object-center object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-[var(--theme-blue)] font-semibold">
                  Budget Apartments
                </h3>
                <Link
                  href={"/properties"}
                  className="text-sm text-[var(--theme-red)] font-semibold px-3 py-1 border-[var(--theme-red)] border-[2px]
                    hover:bg-[var(--theme-red)] hover:text-slate-100 rounded-sm duration-300"
                >
                  View Details
                </Link>
              </div>
              <div className="mt-5 flex justify-between items-center gap-2">
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <LiaBedSolid className="text-xl" />
                  <span className="font-semibold">2</span>
                </span>
                <div className="w-[2px] rounded-md bg-[var(--theme-red)] h-8"></div>
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <PiBathtub className="text-xl" />
                  <span className="font-semibold">1</span>
                </span>
                <div className="w-[2px] rounded-md bg-[var(--theme-red)] h-8"></div>
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <MdSquareFoot className="text-xl" />
                  <span className="font-semibold">100 sqm</span>
                </span>
              </div>
              <div className="mt-5 flex gap-2 text-slate-500 items-center">
                <span className="font-semibold text-[var(--theme-red)] flex items-center gap-3 border-[var(--theme-red)] border-[2px] px-3 py-1 rounded-3xl">
                  <FiMapPin /> Location :
                </span>{" "}
                Lebu, Addis Ababa
              </div>
            </div>
          </div>
          <div className="w-[350px] flex flex-col p-3 pb-5 rounded-sm border-[var(--theme-red)] border-[3px] gap-8 hover:-translate-y-2 hover:shadow-xl duration-300">
            <div className="w-full h-[200px] rounded-sm overflow-hidden relative border-[var(--theme-red)] border-[3px]">
              <span className="absolute top-3 left-4 px-5 py-1 rounded-2xl text-slate-100 bg-[var(--theme-red)] uppercase border-slate-50 border-[1px] text-sm tracking-wider font-semibold select-none">
                For Sale
              </span>
              <Image
                src="/properties/2.jpg"
                alt="property"
                width={1000}
                height={1000}
                className="w-full h-[250px] object-center object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-[var(--theme-blue)] font-semibold">
                  Mid-Range Apartments
                </h3>
                <Link
                  href={"/properties"}
                  className="text-sm text-[var(--theme-red)] font-semibold px-3 py-1 border-[var(--theme-red)] border-[2px]
                    hover:bg-[var(--theme-red)] hover:text-slate-100 rounded-sm duration-300"
                >
                  View Details
                </Link>
              </div>
              <div className="mt-5 flex justify-between items-center gap-2">
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <LiaBedSolid className="text-xl" />
                  <span className="font-semibold">3</span>
                </span>
                <div className="w-[2px] rounded-md bg-[var(--theme-red)] h-8"></div>
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <PiBathtub className="text-xl" />
                  <span className="font-semibold">2</span>
                </span>
                <div className="w-[2px] rounded-md bg-[var(--theme-red)] h-8"></div>
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <MdSquareFoot className="text-xl" />
                  <span className="font-semibold">170 sqm</span>
                </span>
              </div>
              <div className="mt-5 flex gap-2 text-slate-500 items-center">
                <span className="font-semibold text-[var(--theme-red)] flex items-center gap-3 border-[var(--theme-red)] border-[2px] px-3 py-1 rounded-3xl">
                  <FiMapPin /> Location :
                </span>{" "}
                Lebu, Addis Ababa
              </div>
            </div>
          </div>
          <div className="w-[350px] flex flex-col p-3 pb-5 rounded-sm border-[var(--theme-red)] border-[3px] gap-8 hover:-translate-y-2 hover:shadow-xl duration-300">
            <div className="w-full h-[200px] rounded-sm overflow-hidden relative border-[var(--theme-red)] border-[3px]">
              <span className="absolute top-3 left-4 px-5 py-1 rounded-2xl text-slate-100 bg-[var(--theme-red)] uppercase border-slate-50 border-[1px] text-sm tracking-wider font-semibold select-none">
                For Sale
              </span>
              <Image
                src="/properties/3.jpg"
                alt="property"
                width={1000}
                height={1000}
                className="w-full h-[250px] object-center object-cover"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-[var(--theme-blue)] font-semibold">
                  Luxury Apartments
                </h3>
                <Link
                  href={"/properties"}
                  className="text-sm text-[var(--theme-red)] font-semibold px-3 py-1 border-[var(--theme-red)] border-[2px]
                    hover:bg-[var(--theme-red)] hover:text-slate-100 rounded-sm duration-300"
                >
                  View Details
                </Link>
              </div>
              <div className="mt-5 flex justify-between items-center gap-2">
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <LiaBedSolid className="text-xl" />
                  <span className="font-semibold">4</span>
                </span>
                <div className="w-[2px] rounded-md bg-[var(--theme-red)] h-8"></div>
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <PiBathtub className="text-xl" />
                  <span className="font-semibold">3</span>
                </span>
                <div className="w-[2px] rounded-md bg-[var(--theme-red)] h-8"></div>
                <span className="px-4 py-2 rounded-3xl text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100">
                  <MdSquareFoot className="text-xl" />
                  <span className="font-semibold">250 sqm</span>
                </span>
              </div>
              <div className="mt-5 flex gap-2 text-slate-500 items-center">
                <span className="font-semibold text-[var(--theme-red)] flex items-center gap-3 border-[var(--theme-red)] border-[2px] px-3 py-1 rounded-3xl">
                  <FiMapPin /> Location :
                </span>{" "}
                Lebu, Addis Ababa
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Link
            href={"/properties"}
            className="text-lg text-[var(--theme-red)] font-semibold px-8 py-3 border-[var(--theme-red)] border-[2px]
              hover:bg-[var(--theme-red)] hover:text-slate-100 rounded-sm duration-300 glow"
          >
            View More Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProperties;
