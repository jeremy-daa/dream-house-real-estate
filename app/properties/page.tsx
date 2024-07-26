import PageHero from "@/components/PageHero";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyIntro from "@/components/PropertyIntro";
import PropertyUnits from "@/components/PropertyUnits";
import Map from "@/components/Map";
import React from "react";

const page = () => {
  return (
    <div className="mt-36">
      {/* <PageHero title="Properties" /> */}
      <h1 className="text-6xl text-center text-[var(--theme-red)] font-semibold">
        Properties
      </h1>
      <PropertyIntro />
      <PropertyInfo />
      <PropertyUnits />
      <Map />
    </div>
  );
};

export default page;
