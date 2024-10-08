import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const OurTeam = () => {
  return (
    <div className="padding">
      <h2 className="uppercase subtitle text-[var(--theme-red)] font-semibold tracking-widest text-center">
        Team
      </h2>
      <p className="capitalize title font-semibold text-[var(--theme-blue)] mt-5 mb-10 text-center ">
        Our Project Specialists
      </p>
      <div className="center-ball mb-16 mt-10 w-[300px] h-[2px] bg-[var(--theme-red)] relative mx-auto" />
      <div className="flex w-full items-center lg:items-start justify-center gap-20 mt-5 flex-col lg:flex-row">
        <div className="border-2 border-[var(--theme-red)]">
          <Image
            src="/team/1.png"
            alt="Tesfaye Derese"
            width={500}
            height={500}
            className="max-w-[300px] h-[450px] translate-x-6 translate-y-6 object-cover"
          />
        </div>
        <div className="xl:max-w-[60%] lg:max-w-[80%] w-[95%] flex flex-col gap-4 lg:items-start items-center">
          <h2 className="title font-bold capitalize">
            Daniel{" "}
            <span className="text-[var(--theme-red)] italic">Getahun</span>
          </h2>
          <h3
            className={`subtitle font-semibold text-[var(--theme-red)] mt-1 tracking-widest`}
          >
            <span className="text-[var(--theme-blue)]">Founder & CEO</span>
          </h3>
          <p
            className={`text-lg mt-5 tracking-wider leading-8 lg:text-start text-center`}
          >
            Daniel Getahun, the founder and CEO of Dream House Real Estate,
            brings over 10 years of experience in the industry. With a strong
            background in business and finance, he has a proven track record of
            success.
            <br />
            <br />
            Dedicated to delivering exceptional service, Daniel is committed to
            helping clients achieve their real estate goals. As a visionary
            leader, he continually seeks innovative ways to enhance the
            company&apos;s offerings and client satisfaction.
          </p>
          <div className="w-fit flex justify-center items-center gap-5 border-b-[2px] border-b-[var(--theme-red)] pb-4">
            <Link href="mailto:abc@gmail.com">
              <MdEmail className="text-3xl text-[var(--theme-red)] hoverScale" />
            </Link>
            <Link href="facebook.com">
              <FaFacebook className="text-3xl text-[var(--theme-red)] hoverScale" />
            </Link>
            <Link href={"linkedin.com"}>
              <FaLinkedin className="text-3xl text-[var(--theme-red)] hoverScale" />
            </Link>
            <Link href="x.com">
              <FaSquareXTwitter className="text-3xl text-[var(--theme-red)] hoverScale" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
