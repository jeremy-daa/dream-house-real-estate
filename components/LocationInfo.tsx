import Image from "next/image";
import React from "react";

const LocationInfo = () => {
  return (
    <div className="mt-24 flex justify-between px-32">
      {/* <Image */}

      <div className=" flex flex-col items-start gap-10">
        <h2 className="text-6xl text-[var(--theme-blue)] font-semibold text-center">
          Property Location
        </h2>
        <p className="text-center text-lg text-slate-500 max-w-xl"></p>
      </div>
    </div>
  );
};

export default LocationInfo;
