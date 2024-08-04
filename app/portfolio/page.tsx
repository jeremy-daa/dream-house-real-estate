import OurStory from "@/components/OurStory2";
import PageHero from "@/components/PageHero";
import React from "react";
import OurTeam from "../../components/OurTeam";
import Legality from "@/components/Legality";
import Testimonials from "@/components/Testimonials";
import dbConnect from "@/utils/dbConnect";
import Review from "@/models/Review";

const page = async () => {
  await dbConnect();
  let reviews = await Review.find();
  reviews = JSON.parse(JSON.stringify(reviews));
  reviews = reviews.filter((review) => review.visible);
  reviews.reverse();
  return (
    <div>
      <PageHero title="Our Portfolio" />
      <OurStory />
      <OurTeam />
      <Legality />
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default page;
