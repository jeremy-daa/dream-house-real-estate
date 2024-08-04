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
        interval={5000}
      />
      <Br />
      <GallerySlider
        title={"Appartment Units"}
        subtitle={"3 Bedroom Option"}
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
        interval={2000}
      />
    </div>
  );
};

export default page;
