import HomeInfo from "@/components/HomeInfo";
import HomeHero from "@/components/HomeHero";
import OurStory from "@/components/OurStory";
import HomeProperties from "@/components/HomeProperties";
import LocationInfo from "@/components/LocationInfo";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import RecentUpdates from "@/components/RecentUpdates";
import dbConnect from "@/utils/dbConnect";
import Review from "@/models/Review";
import Post from "@/models/Post";

export default async function Home() {
  await dbConnect();
  let reviews = await Review.find();
  reviews = reviews = JSON.parse(JSON.stringify(reviews));
  reviews = reviews.filter((review) => review.visible);
  reviews.reverse();

  let posts = await Post.find();
  posts = JSON.parse(JSON.stringify(posts));
  posts.reverse();
  let lastThree = posts.slice(0, 3);

  return (
    <div className="">
      <HomeHero />
      <HomeInfo />
      <OurStory />
      <HomeProperties />
      <LocationInfo />
      <Testimonials reviews={reviews} />
      <RecentUpdates lastThree={lastThree} />
      <Map />
    </div>
  );
}
