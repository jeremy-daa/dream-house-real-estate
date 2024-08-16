import AdminDashboard from "@/components/AdminDashboard";
import Post from "@/models/Post";
import Review from "@/models/Review";
import dbConnect from "@/utils/dbConnect";
import React from "react";

const page = async () => {
  await dbConnect();
  let reviews = await Review.find();
  reviews = reviews = JSON.parse(JSON.stringify(reviews));
  reviews.reverse();

  let posts = await Post.find();
  posts = JSON.parse(JSON.stringify(posts));
  posts.reverse();
  return (
    <div>
      <AdminDashboard postsServer={posts} reviewsServer={reviews} />
    </div>
  );
};

export default page;
