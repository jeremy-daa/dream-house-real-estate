"use client";
import Image from "next/image";
import React from "react";
import {
  FaCouch,
  FaDumbbell,
  FaParking,
  FaTree,
  FaUtensils,
} from "react-icons/fa";
import { GiEuropeanFlag } from "react-icons/gi";

import { IoLocationOutline } from "react-icons/io5";
import { MdBalcony, MdSecurity } from "react-icons/md";

const UnitInfo = ({ details, img }: { details: string; img: string }) => {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="padding flex items-center lg:items-start justify-between flex-col-reverse lg:flex-row gap-12">
      <div className=" flex flex-col items-center lg:items-start gap-10 overflow-hidden">
        <h2 className="title text-[var(--theme-blue)] font-semibold text-start">
          Unit Detail
        </h2>
        <p className="text-lg text-slate-500 max-w-full lg:max-w-xl lg:text-start text-center">
          {details}
        </p>
        <div
          className="flex flex-nowrap pr-4 gap-4"
          style={{
            transform: `translateX(-${slide * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          <div className="flex flex-col gap-3 min-w-full">
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <GiEuropeanFlag className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                High-quality European finishes
              </span>
            </h3>
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <MdBalcony className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                15 SQM terrace
              </span>
            </h3>
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <FaUtensils className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                Modern, fully equipped kitchen
              </span>
            </h3>
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <FaCouch className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                Spacious living areas
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-3 min-w-full">
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <FaParking className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                Parking space
              </span>
            </h3>
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <FaDumbbell className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                Gym and heated pool
              </span>
            </h3>
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <MdSecurity className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                Advanced security features
              </span>
            </h3>
            <h3 className="px-3 py-3 rounded-sm w-full flex items-center sm:gap-5 gap-2 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <FaTree className="sm:text-3xl text-2xl text-[var(--theme-red)]" />
              <span className="text-lg text-[var(--theme-red)]">
                Roof-top terrace
              </span>
            </h3>
          </div>
        </div>
        <div className="w-full flex justify-center gap-3 items-center">
          {/* round buttons filled if active otherwise hollow 15px x 15px rouded */}
          <button
            className={`${
              slide === 0 ? "bg-[var(--theme-red)]" : ""
            } border-2 rounded-full w-5 h-5 duration-300 border-[var(--theme-red)]`}
            onClick={() => setSlide(0)}
          ></button>
          <button
            className={`${
              slide === 1 ? "bg-[var(--theme-red)]" : ""
            } border-2 rounded-full w-5 h-5 duration-300 border-[var(--theme-red)]`}
            onClick={() => setSlide(1)}
          ></button>
        </div>
      </div>
      <div className="lg:pl-10 pl-0 flex justify-center items-start">
        <Image
          src={img}
          alt="Unit Design"
          width={600}
          height={400}
          className="w-[550px] h-[450px] object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default UnitInfo;
