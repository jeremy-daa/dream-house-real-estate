"use client";
import React, { useCallback, useEffect, useState } from "react";
import BlogList from "./AdminBlogList";

import BlogListSkeleton from "./BlogListSkeleton";
import { PiPlusCircleThin } from "react-icons/pi";

interface BlogDashboardProps {
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  addModal: boolean;
  setAddModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSlug: React.Dispatch<React.SetStateAction<string>>;
  posts: any;
  setPosts: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
}

const AdminDashboardBlog = ({
  setEditModal,
  setDeleteModal,
  setAddModal,
  setSlug,
  posts,
  loading,
}: BlogDashboardProps) => {
  // const cld = new Cloudinary({ cloud: { cloudName, apiKey, apiSecret } });

  return (
    <div className="mt-16">
      <div>
        <div className="w-[75%] mx-auto">
          <h1 className="text-6xl text-[var(--theme-red)] font-semibold text-center mb-6">
            Write a new post
          </h1>
          <div
            className="max-w-[700px] mx-auto h-[150px] cursor-pointer hover:scale-[1.02] duration-300 boxShadow rounded-md shadowContactSm mb-5 flex justify-center items-center"
            onClick={() => setAddModal(true)}
          >
            <PiPlusCircleThin className="text-[var(--theme-red)] text-8xl" />
          </div>
          <h1 className="text-[50px] text-[var(--theme-yellow)] font-semibold text-center mb-8">
            Recent posts
          </h1>
          {loading && (
            <>
              {Array.from({ length: 4 }).map((_, i) => (
                <BlogListSkeleton key={i} />
              ))}
            </>
          )}
          {posts &&
            posts.map((post: any) => (
              <BlogList
                key={post._id}
                slug={post.slug}
                title={post.title}
                content={post.content}
                image={post.image}
                file={post.fileAttached}
                setSlug={setSlug}
                setEditModal={setEditModal}
                setDeleteModal={setDeleteModal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardBlog;
