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
            image: "/stock/1.jpg",
            tag: "Business License",
          },
          {
            image: "/stock/2.jpg",
            tag: "Insurance",
          },
          {
            image: "/stock/3.jpg",
            tag: "Certifications",
          },
          {
            image: "/stock/4.jpg",
            tag: "Permits",
          },
        ]}
      />
    </div>
  );
};

export default Legality;
