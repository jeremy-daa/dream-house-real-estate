import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Map = () => {
  return (
    <div className="mt-16">
      <h2 className="text-5xl text-[var(--theme-red)] font-semibold text-center mb-8 flex justify-center items-center gap-4">
        <FaLocationDot />
        Our Property Location
      </h2>
      <div className="relative w-full mt-14 border-[var(--theme-red)] border-4 map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7880.5757027979125!2d38.77186515875244!3d9.037485252143004!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDInMTMuNyJOIDM4wrA0NicxNy4zIkU!5e0!3m2!1sen!2set!4v1721152775781!5m2!1sen!2set"
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
