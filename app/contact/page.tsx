import Link from "next/link";
import React from "react";

import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <div className="pt-36">
      <div className="z-10">
        <h1 className="text-6xl text-center text-[var(--theme-red)] font-semibold">
          Contact Us
        </h1>
        <p className="text-xl text-center text-slate-500 mt-7">
          Any Questions or Ready to Purchase? Get in touch with us.
        </p>
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default page;
