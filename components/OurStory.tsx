"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = () => {
  return (
    <div className="mt-24 px-32 flex gap-24 justify-start">
      <div className="min-w-[450px] max-w-[450px] h-[530px] border-[var(--theme-red)] border-[4px]">
        <Image
          src={"/stock/1.jpg"}
          alt="our story"
          width={1000}
          height={1000}
          className="min-w-[450px] h-[530px] object-center object-cover translate-x-6 translate-y-6"
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
          Founded by young entrepreneur Daniel Getahun,{" "}
          <span className="font-semibold text-[var(--theme-red)]">
            Dream House Real Estate
          </span>{" "}
          is a regional, full-service development and management company. Our
          goal is to be the top real estate company in Ethiopia and across
          Africa, consistently producing and managing developments of lasting
          value to the community.
          <br />
          <br />
          We prioritize flexibility, entrepreneurship, and aggressiveness, both
          as individuals and as a company. With a focus on quality
          craftsmanship, innovative design, and strategic location, we ensure
          each project not only meets but exceeds expectations.
          <br />
          <br />
          Our core values include teamwork, innovation, professionalism, and
          long-term decision-making. We strive to preserve and enhance our
          reputation for integrity through all our actions.
        </p>
        <Link
          href="/portfolio"
          className="px-8 py-3 text-lg bg-[var(--theme-red)] text-slate-100 rounded-sm border-2 border-[var(--theme-blue)] hover:text-[var(--theme-red)] hover:bg-[var(--card-blue)] hover:border-[var(--theme-red)] duration-500 w-fit glow"
        >
          Explore Our Portfolio
        </Link>
      </div>
    </div>
  );
};

export default OurStory;
