"use client";
import Image from "next/image";
import React from "react";

import { IoLocationOutline } from "react-icons/io5";

const LocationInfo = () => {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="padding flex justify-between lg:flex-row flex-col-reverse">
      {/* <Image */}

      <div className=" flex flex-col lg:items-start gap-10 overflow-hidden items-center lg:text-start text-center">
        <h2 className="title text-[var(--theme-blue)] font-semibold">
          Property Locations
        </h2>
        <p className="text-lg text-slate-500 max-w-xl">
          This is a great opportunity for someone who would like to invest and
          get guaranteed investment return as we have the connection with the
          expat communities and ideally located to most international
          organizations. Below is the proximity of our properties to important
          locations in the city.
        </p>
        <div
          className="flex flex-nowrap pr-4 gap-4"
          style={{
            transform: `translateX(-${slide * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          <div className="flex flex-col gap-3 min-w-full">
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                1.9 KM from UN Office
              </span>
            </h3>
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                2.1 KM from GIZ Office
              </span>
            </h3>
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                1.9 KM from German Embassy
              </span>
            </h3>
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                2.4 KM from Belgium Embassy
              </span>
            </h3>
          </div>
          <div className="flex flex-col gap-3 min-w-full">
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                2.8 KM from British Embassy
              </span>
            </h3>
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                3.1 KM from Russian Embassy
              </span>
            </h3>
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                2.9 KM from Italy Embassy
              </span>
            </h3>
            <h3 className="sm:px-3 sm:py-3 px-1 py-2 rounded-sm w-full flex items-center sm:gap-5 gap-3 bg-slate-200 border-2 border-[var(--theme-red)] hover:bg-slate-300 duration-300">
              <IoLocationOutline className="sm:text-3xl text-xl text-[var(--theme-red)]" />
              <span className="sm:text-lg text-base text-[var(--theme-red)]">
                2.3 KM from Kenya Embassy
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
      <div className="xl:pl-10 pl-0 xl:pt-10 pt-0 lg:mb-0 mb-14 flex justify-center items-center">
        <Image
          src="/vectors/best-location.svg"
          alt="location"
          width={600}
          height={400}
          className="w-[550px] h-auto"
        />
      </div>
    </div>
  );
};

export default LocationInfo;
