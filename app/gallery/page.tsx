import Br from "@/components/Br";
import GallerySlider from "@/components/GallerySlider";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHero title="Gallery" img="/stock/12.jpg" />
      <GallerySlider
        title={"Building Design"}
        interval={4000}
        subtitle={"Kebena Luxury Apartment"}
        slides={[
          {
            image: "/design/building/7.jpg",
            tag: "Building Design",
          },
          {
            image: "/design/building/1.jpg",
            tag: "Front, Day View",
          },
          {
            image: "/design/building/2.jpg",
            tag: "Side, Night View",
          },
          {
            image: "/design/building/3.jpg",
            tag: "Side, Day View",
          },
          {
            image: "/design/building/6.jpg",
            tag: "Front, Night View",
          },
        ]}
      />
      <Br />
      <div className="flex flex-col items-center w-full">
        <h2 className="uppercase text-xl text-[var(--theme-red)] font-semibold tracking-widest text-center">
          Architectural Walkthrough
        </h2>
        <p className="capitalize text-5xl font-semibold text-[var(--theme-blue)] mt-5 mb-10 text-center ">
          A 3D Walkthrough of the Building
        </p>
        <video
          src="/video/1.mp4"
          width="850"
          height="480"
          className="rounded-lg"
          controls
          loop
          autoPlay
        />
      </div>
      <Br />
      <GallerySlider
        title={"Floor Plans"}
        interval={4000}
        subtitle={"Plans and Blue Prints"}
        slides={[
          {
            image: "/design/plans/1.jpg",
            tag: "Basement -1 and -2 Floor Plan",
          },
          {
            image: "/design/plans/2.jpg",
            tag: "Ground Floor Plan",
          },
          {
            image: "/design/plans/3.jpg",
            tag: "Roof Terrace Floor Plan",
          },
          {
            image: "/design/plans/4.jpg",
            tag: "3rd and Odd Floor Plan",
          },
          {
            image: "/design/plans/5.jpg",
            tag: "First Floor Plan",
          },
          {
            image: "/design/plans/6.jpg",
            tag: "Building Plan",
          },
        ]}
      />
      <Br />
      <GallerySlider
        title={"Appartment Units"}
        subtitle={"2 Bedroom Option"}
        slides={[
          {
            image: "/design/units/1.jpg",
            tag: "Appartment Unit",
          },
          {
            image: "/design/plans/4.jpg",
            tag: "Floor Plan",
          },
        ]}
        interval={5000}
      />
      <Br />
      <GallerySlider
        title={"Appartment Units"}
        subtitle={"3 Bedroom Option"}
        slides={[
          {
            image: "/design/units/2.jpg",
            tag: "Appartment Unit",
          },
          {
            image: "/design/plans/4.jpg",
            tag: "Floor Plan",
          },
        ]}
        interval={2000}
      />
    </div>
  );
};

export default page;
