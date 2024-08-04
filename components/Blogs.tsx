"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import BlogCard from "./BlogCard";
import { set } from "mongoose";

const Blogs = ({ blogs }: { blogs: any }) => {
  const [search, setSearch] = React.useState("");
  const [filteredBlogs, setFilteredBlogs] = React.useState(blogs);

  return (
    <div className="mx-32">
      <div className="center-ball mt-24  w-[350px] h-[2px] bg-[var(--theme-red)] relative mx-auto" />
      <div className="flex flex-col gap-10 justify-between items-center mt-10">
        <h2 className="text-5xl font-semibold text-[var(--theme-red)]">
          Updates
        </h2>
        <div className="relative w-[450px]">
          <input
            type="text"
            placeholder="Search Updates"
            className="border-2 border-[var(--theme-blue)] px-5 py-3 focus:outline-none focus:border-[var(--theme-red)] duration-300 w-full outline-none focus:ring-1 ring-[var(--theme-red)]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilteredBlogs(
                blogs.filter((blog: any) =>
                  blog.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                )
              );
            }}
          />
          <IoSearch
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-[var(--theme-red)] text-2xl"
            onClick={() => {
              setFilteredBlogs(
                blogs.filter((blog: any) =>
                  blog.title.toLowerCase().includes(search.toLowerCase())
                )
              );
            }}
          />
        </div>
      </div>
      <div className="mt-16 w-full flex justify-center items-center gap-8 flex-wrap">
        {filteredBlogs &&
          filteredBlogs.map((blog: any, index: any) => {
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

export default Blogs;
