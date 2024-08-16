import PageHero from "@/components/PageHero";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyIntro from "@/components/PropertyIntro";
import PropertyUnits from "@/components/PropertyUnits";
import Map from "@/components/Map";
import React from "react";

const page = () => {
  return (
    <div>
      <PageHero title="Our Properties" />
      <PropertyIntro />
      <PropertyInfo />
      <PropertyUnits />
      <Map />
    </div>
  );
};

export default page;
