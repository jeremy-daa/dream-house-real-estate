import HomeInfo from "@/components/HomeInfo";
import HomeHero from "@/components/HomeHero";
import OurStory from "@/components/OurStory";
import HomeProperties from "@/components/HomeProperties";

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <HomeInfo />
      <OurStory />
      <HomeProperties />
    </div>
  );
}
