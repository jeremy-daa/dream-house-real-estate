import Image from "next/image";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const LocationInfo = () => {
  return (
    <div className="mt-24 flex justify-between px-32">
      {/* <Image */}

      <div className=" flex flex-col items-start gap-10">
        <h2 className="text-6xl text-[var(--theme-blue)] font-semibold text-center">
          Property Locations
        </h2>
        <p className="text-lg text-slate-500 max-w-xl">
          Our properties are located in the most prime locations in the city.
          Easy access to main roads, shopping malls, schools, and more. Below is
          the proximity of our properties to important locations in the city.
        </p>
        <div className="flex flex-col gap-3 w-full">
          <h3 className="px-3 py-3 rounded-sm w-full flex items-center gap-5 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
            <IoLocationOutline className="text-3xl text-[var(--theme-red)]" />
            <span className="text-lg text-[var(--theme-red)]">
              2km from Japannese Embassy
            </span>
          </h3>
          <h3 className="px-3 py-3 rounded-sm w-full flex items-center gap-5 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
            <IoLocationOutline className="text-3xl text-[var(--theme-red)]" />
            <span className="text-lg text-[var(--theme-red)]">
              3km from UN Office
            </span>
          </h3>
          <h3 className="px-3 py-3 rounded-sm w-full flex items-center gap-5 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
            <IoLocationOutline className="text-3xl text-[var(--theme-red)]" />
            <span className="text-lg text-[var(--theme-red)]">
              5km from City Center
            </span>
          </h3>
          <h3 className="px-3 py-3 rounded-sm w-full flex items-center gap-5 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
            <IoLocationOutline className="text-3xl text-[var(--theme-red)]" />
            <span className="text-lg text-[var(--theme-red)]">
              1km from Airport
            </span>
          </h3>
        </div>
      </div>
      <div className="pl-10 pt-10 flex justify-center items-center">
        <Image
          src="/vectors/best-location.svg"
          alt="location"
          width={600}
          height={400}
          objectFit="contain"
          className="w-[550px] h-auto"
        />
      </div>
    </div>
  );
};

export default LocationInfo;
