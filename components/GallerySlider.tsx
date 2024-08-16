"use client";
import React, { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageViewer from "react-simple-image-viewer";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
export interface Slide {
  image: string;
  tag?: string;
}

interface GallerySliderProps {
  title: string;
  subtitle: string;
  slides: Slide[];
  interval?: number;
}

export default function GallerySlider({
  title,
  subtitle,
  slides,
  interval,
}: GallerySliderProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="padding">
      <h2 className="uppercase subtitle text-[var(--theme-red)] font-semibold tracking-widest text-center mt-16">
        {title}
      </h2>
      <p className="capitalize title font-semibold text-[var(--theme-blue)] mt-5 mb-10 text-center ">
        {subtitle}
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: interval || 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide: Slide, i: any) => {
          return (
            <SwiperSlide key={i} onClick={() => openImageViewer(i)}>
              <div className="w-[800px] md:h-[400px] h-[500px] mx-auto relative">
                <span className="absolute px-5 py-2 w-fit rounded-sm top-7 left-7 bg-[var(--theme-red)] text-lg text-slate-50">
                  {slide.tag}
                </span>
                <Image
                  src={slide.image}
                  alt={slide.tag || slide.image}
                  width={1280}
                  height={720}
                  className="w-full h-auto object-cover  rounded-md"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isViewerOpen && (
        <ImageViewer
          src={slides.map((slide) => slide.image)}
          currentIndex={currentImage}
          disableScroll={true}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
}
