import HomeInfo from "@/components/HomeInfo";
import HomeHero from "@/components/HomeHero";
import OurStory from "@/components/OurStory";
import HomeProperties from "@/components/HomeProperties";
import LocationInfo from "@/components/LocationInfo";

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <HomeInfo />
      <OurStory />
      <HomeProperties />
      <LocationInfo />
    </div>
  );
}
