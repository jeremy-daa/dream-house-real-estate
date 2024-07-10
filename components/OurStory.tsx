import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = () => {
  return (
    <div className="mt-24 px-32 flex gap-24 justify-start">
      <div className="min-w-[450px] h-[530px] border-[var(--theme-red)] border-[4px]">
        <Image
          src="/stock/1.jpg"
          alt="our story"
          width={1000}
          height={1000}
          className="w-[450px] h-[530px] object-center object-cover translate-x-6 translate-y-6"
        />
      </div>
      <div className="flex flex-col justify-center gap-8">
        <h2 className="uppercase text-xl text-[var(--theme-red)] font-semibold tracking-widest">
          who we are
        </h2>
        <p className="capitalize text-5xl font-semibold text-[var(--theme-blue)]">
          Building Dreams, Creating Communities
        </p>
        <p className="text-lg text-slate-500">
          <span className="font-semibold text-[var(--theme-red)]">
            Dream House
          </span>{" "}
          a real estate development company commited to transforming visions
          into reality by developing exceptional living and commercial spaces.
          We believe in fostering vibrant communities where residents and
          businesses thrive.
          <br />
          <br />
          With a focus on quality craftsmanship, innovative design, and
          strategic location, we ensure each project not only meets but exceeds
          expectations.
        </p>
        <Link
          href="/portfolio"
          className="px-8 py-3 text-lg bg-[var(--theme-red)] text-slate-100 rounded-sm border-2 border-[var(--theme-blue)] hover:text-[var(--theme-red)] hover:bg-[var(--card-blue)] hover:border-[var(--theme-red)] duration-500 w-fit"
        >
          Explore Our Portfolio
        </Link>
      </div>
    </div>
  );
};

export default OurStory;
