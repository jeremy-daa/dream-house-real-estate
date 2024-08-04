import Blogs from "@/components/Blogs";
import PageHero from "@/components/PageHero";
import RecentUpdates from "@/components/RecentUpdates";
import React from "react";

const page = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  }).then((res) => res.json());

  const blogs = await res;
  const lastThree = blogs.slice(0, 3);
  return (
    <div>
      <PageHero title="Updates" />
      <RecentUpdates lastThree={lastThree} />
      <Blogs blogs={blogs} />
    </div>
  );
};

export default page;
