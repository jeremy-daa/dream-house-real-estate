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
        title={"Amenities"}
        interval={4000}
        subtitle={"Modern Amenities for Residents"}
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
