"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function GallerySlider() {
  return (
    <div className="w-[80%] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[800px] h-[400px] mx-auto">
            <Image
              src={"/properties/1.jpg"}
              alt="1"
              width={1280}
              height={720}
              className="w-full h-auto object-cover  rounded-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[800px] h-[400px] mx-auto">
            <Image
              src={"/properties/2.jpg"}
              alt="1"
              width={1280}
              height={720}
              className="w-full h-auto object-cover  rounded-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[800px] h-[400px] mx-auto">
            <Image
              src={"/properties/3.jpg"}
              alt="1"
              width={1280}
              height={720}
              className="w-full h-auto object-cover  rounded-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[800px] h-[400px] mx-auto">
            <Image
              src={"/properties/4.jpg"}
              alt="1"
              width={1280}
              height={720}
              className="w-full h-auto object-cover  rounded-md"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
