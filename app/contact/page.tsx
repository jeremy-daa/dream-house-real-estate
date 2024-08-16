import Link from "next/link";
import React from "react";

import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <div className="pt-36">
      <div className="z-10 lg:px-20 md:px-16 px-2">
        <h1 className="md:text-6xl text-5xl text-center text-[var(--theme-red)] font-semibold">
          Contact Us
        </h1>
        <p className="subtitle text-center text-slate-500 mt-7 px-6">
          Any Questions or Ready to Purchase? Get in touch with us.
        </p>
        <ContactForm />
      </div>
      <Map />
    </div>
  );
};

export default page;
