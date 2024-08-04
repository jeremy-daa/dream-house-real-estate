"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import GallerySlider from "./GallerySlider";

const Legality = () => {
  return (
    <div>
      <GallerySlider
        title={"Legality"}
        subtitle={"Documents and Certifications"}
        interval={3500}
        slides={[
          {
            image: "/legality/5.jpg",
            tag: "Landholding Certificate",
          },

          {
            image: "/legality/2.jpg",
            tag: "Parcel Coordinates",
          },
          {
            image: "/legality/3.jpg",
            tag: "Construction Permit",
          },
          {
            image: "/legality/4.jpg",
            tag: "Construction Permit",
          },
        ]}
      />
    </div>
  );
};

export default Legality;
