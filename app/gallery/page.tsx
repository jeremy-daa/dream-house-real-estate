import GallerySlider from "@/components/GallerySlider";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHero title="Gallery" img="/stock/12.jpg" />

      <h2 className="uppercase text-xl text-[var(--theme-red)] font-semibold tracking-widest text-center mt-16">
        Gallery
      </h2>
      <p className="capitalize text-5xl font-semibold text-[var(--theme-blue)] mt-5 mb-10 text-center ">
        Our Gallery
      </p>
      <GallerySlider />
    </div>
  );
};

export default page;
