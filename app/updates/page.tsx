import Blogs from "@/components/Blogs";
import PageHero from "@/components/PageHero";
import RecentUpdates from "@/components/RecentUpdates";
import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import React from "react";

const page = async () => {
  await dbConnect();

  let posts = await Post.find();
  posts = JSON.parse(JSON.stringify(posts));
  posts.reverse();
  let lastThree = posts.slice(0, 3);
  return (
    <div>
      <PageHero title="Updates" />
      <RecentUpdates lastThree={lastThree} />
      <Blogs blogs={posts} />
    </div>
  );
};

export default page;
