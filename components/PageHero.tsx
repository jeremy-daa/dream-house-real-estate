"use client";
import React from "react";
import Image from "next/image";

const PageHero = ({ title, img }: { title: string; img?: string }) => {
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < 870) {
      setMobile(true);
    }
  }, []);
  return (
    <div className="w-full py-52 flex justify-center items-center relative bg-[var(--theme-blue)] ">
      {mobile ? (
        <Image
          src={img || "/page_hero_mobile.png"}
          alt="hero"
          width={1920}
          height={1280}
          className="absolute top-0 left-0 w-full h-full object-cover grayscale object-bottom"
          style={{
            zIndex: 0,
            filter: "brightness(0.8)",
          }}
        />
      ) : (
        <Image
          src={img || "/page_hero.png"}
          alt="hero"
          width={1920}
          height={1280}
          className="absolute top-0 left-0 w-full h-full object-cover grayscale object-bottom"
          style={{
            zIndex: 0,
            filter: "brightness(0.8)",
          }}
        />
      )}

      <div
        className="absolute top-0 left-0 w-full h-full bg-opacity-30"
        style={{
          background: "var(--card-color)",
          opacity: 0.1,
        }}
      ></div>
      <h1
        className="text-[var(--card-color)] title tracking-wider leading-snug max-w-6xl text-center px-6 py-1 rounded-sm bg-[var(--theme-red)] select-none"
        style={{ zIndex: 1 }}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHero;
