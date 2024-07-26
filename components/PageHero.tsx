import React from "react";
import Image from "next/image";

const PageHero = ({ title, img }: { title: string; img?: string }) => {
  return (
    <div className="w-full py-48 flex justify-center items-center relative bg-[var(--theme-blue)] ">
      <Image
        src={img || "/stock/12.jpg"}
        alt="hero"
        width={1920}
        height={1280}
        className="absolute top-0 left-0 w-full h-full object-cover grayscale object-"
        style={{
          zIndex: 0,
          filter: "brightness(0.8)",
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-opacity-30"
        style={{
          background: "var(--theme-blue)",
          opacity: 0.6,
        }}
      ></div>
      <h1 className="text-white text-6xl tracking-wider" style={{ zIndex: 1 }}>
        {title}
      </h1>
    </div>
  );
};

export default PageHero;
