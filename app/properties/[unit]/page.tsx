import Br from "@/components/Br";
import GallerySlider from "@/components/GallerySlider";
import PageHero from "@/components/PageHero";
import UnitInfo from "@/components/UnitInfo";
import { createUnitSlug, createUnitTitle } from "@/utils/functions";
import { notFound } from "next/navigation";
import React from "react";
interface Params {
  params: {
    unit: string;
  };
}

const page = ({ params: { unit } }: Params) => {
  const units = [
    {
      unitSlug: createUnitSlug(2),
      description:
        "Experience luxury in our 2-bedroom apartments in Kebena, featuring high-quality European finishes, spacious living areas, modern kitchens, and a 15 SQM terrace with stunning views. Amenities include parking, a gym, a heated pool, and a roof-top terrace with 360-degree views. Advanced security features ensure your safety.",
      img: "/design/units/1.jpg",
      slider: {
        title: "Appartment Units",
        subtitle: "2 Bedroom Option",
        slides: [
          {
            image: "/design/units/1.jpg",
            tag: "Living Room",
          },
          {
            image: "/design/units/3.jpg",
            tag: "Bed Room",
          },
          {
            image: "/design/plans/2-bed.jpg",
            tag: "Floor Plan",
          },
          {
            image: "/design/plans/4.jpg",
            tag: "Floor Plan",
          },
        ],
      },
    },
    {
      unitSlug: createUnitSlug(3),
      description:
        "Discover luxury in our 3-bedroom apartments in Kebena. Enjoy high-quality European finishes, spacious living areas, modern kitchens, and a 15 SQM terrace with breathtaking views. Amenities include parking, a gym, a heated pool, and a roof-top terrace with 360-degree views. Advanced security features ensure your safety.",
      img: "/design/units/2.jpg",

      slider: {
        title: "Appartment Units",
        subtitle: "3 Bedroom Option",
        slides: [
          {
            image: "/design/units/2.jpg",
            tag: "Living Room",
          },
          {
            image: "/design/units/4.jpg",
            tag: "Bed Room",
          },
          {
            image: "/design/plans/3-bed.jpg",
            tag: "Floor Plan",
          },
          {
            image: "/design/plans/4.jpg",
            tag: "Floor Plan",
          },
        ],
      },
    },
  ];

  if (!units.find((u) => u.unitSlug === unit)) {
    return notFound();
  }
  const title = createUnitTitle(unit);
  return (
    <div>
      <PageHero title={title} />
      <UnitInfo
        details={units.find((u) => u.unitSlug === unit)?.description || ""}
        img={units.find((u) => u.unitSlug === unit)?.img || ""}
      />
      <Br />
      <GallerySlider
        title={units.find((u) => u.unitSlug === unit)?.slider.title || ""}
        subtitle={units.find((u) => u.unitSlug === unit)?.slider.subtitle || ""}
        slides={units.find((u) => u.unitSlug === unit)?.slider.slides || []}
        interval={5000}
      />
    </div>
  );
};

export default page;
