import React from "react";
import BlogCard from "./BlogCard";

const RecentUpdates = ({ lastThree }: { lastThree: any }) => {
  return (
    <div>
      <h2 className="uppercase text-xl text-[var(--theme-red)] font-semibold tracking-widest text-center mt-16">
        Updates
      </h2>
      <p className="capitalize text-5xl font-semibold text-[var(--theme-blue)] mt-5 mb-10 text-center ">
        Recent News and Updates
      </p>
      <div className="w-full px-32 flex justify-center gap-8 items-center">
        {lastThree.map((blog: any, index: any) => {
          return (
            <BlogCard
              key={index}
              title={blog.title}
              img={blog.image}
              date={blog.createdAt}
              slug={blog.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentUpdates;
