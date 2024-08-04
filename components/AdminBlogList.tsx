"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlineModeEdit, MdOutlineDeleteOutline } from "react-icons/md";
import LineBreak from "./LineBreak";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { trimString } from "./AddModal";

interface BlogListProps {
  slug: string;
  title: string;
  content: string;
  image: string;
  file?: string[];
  setSlug: React.Dispatch<React.SetStateAction<string>>;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BlogList = ({
  slug,
  title,
  content,
  image,
  file,
  setSlug,
  setEditModal,
  setDeleteModal,
}: BlogListProps) => {
  return (
    <div className="w-full shadowContactSm rounded-md px-5 py-5 flex justify-start items-start mb-8 max-h-[340px] ">
      <Image
        src={image}
        className="h-[200px] min-w-[250px] object-cover rounded-sm border-[2px] border-[var(--theme-yellow)]"
        width={350}
        height={350}
        alt={""}
      />
      <div className="ml-10 w-full  flex flex-col justify-between items-start">
        <div>
          <Link
            href={`/updates/${slug}`}
            className="text-3xl font-medium mt-2 text-[var(--theme-red)] mb-3 border-b-[2px] hover:border-b-[var(--theme-red)] duration-300 border-b-transparent capitalize"
          >
            {title}
          </Link>
          <div className="text-lg text-[#333] mt-2">
            <ReactMarkdown className="prose max-w-full">
              {trimString(content, 100)}
            </ReactMarkdown>
          </div>
        </div>
        {file && (
          <div className="flex w-full flex-wrap gap-5 mt-9">
            {
              // eslint-disable-next-line array-callback-return
              file.map((f, index) => {
                return (
                  <Link href={f} key={index} className="button">
                    Attached File
                  </Link>
                );
              })
            }
          </div>
        )}
      </div>
      {/* buttons to delete and edit*/}
      <div className="ml-10 min-w-[160px] flex justify-center items-end flex-col">
        <button
          className="bg-[var(--card-blue)] text-white rounded-sm expandButton glowSmBlue"
          onClick={() => {
            setSlug(slug);
            setEditModal(true);
          }}
        >
          <MdOutlineModeEdit />
          Edit
        </button>
        <button
          className="bg-[var(--theme-red)] text-white rounded-sm expandButton glowSm"
          onClick={() => {
            setDeleteModal(true);
            setSlug(slug);
          }}
        >
          <MdOutlineDeleteOutline />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogList;
