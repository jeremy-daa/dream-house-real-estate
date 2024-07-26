import HomeInfo from "@/components/HomeInfo";
import HomeHero from "@/components/HomeHero";
import OurStory from "@/components/OurStory";
import HomeProperties from "@/components/HomeProperties";
import LocationInfo from "@/components/LocationInfo";
import Testimonials from "@/components/Testimonials";
import Updates from "@/components/Updates";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <HomeInfo />
      <OurStory />
      <HomeProperties />
      <LocationInfo />
      {/* <Testimonials /> */}
      {/* <Updates /> */}
      <Map />
    </div>
  );
}
