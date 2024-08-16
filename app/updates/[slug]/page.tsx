import CommentSection from "@/components/CommentSection";
import PageHero from "@/components/PageHero";
import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
interface Params {
  params: {
    slug: string;
  };
}

const page = async ({ params: { slug } }: Params) => {
  dbConnect();
  const blog = await Post.findOne({
    slug,
  });
  if (blog === null) {
    return notFound();
  }
  const { title, content, image, fileAttached, comments } = blog;

  return (
    <div>
      <PageHero title={title} img={image} />
      <div className="flex lg:px-20 md:px-16 px-6 justify-between mt-12 flex-col lg:flex-row">
        <div className="flex-[0.6] flex flex-col md:gap-6 gap-3">
          <h2 className="title font-semibold text-[var(--theme-red)] mt-5 mb-2 capitalize leading-snug tracking-wide">
            {title}
          </h2>
          <Image
            src={image}
            alt="blog"
            width={500}
            height={500}
            className="w-full h-[300px] object-cover mb-5 rounded-md"
          />
          <ReactMarkdown className="prose max-w-full">{content}</ReactMarkdown>
          {fileAttached.length > 0 && (
            <>
              <h2 className="text-[var(--theme-red)] font-semibold text-xl mt-5 text-center">
                Attached Files
              </h2>
              <div className="flex flex-col gap-5 items-center">
                {fileAttached.map((f: any, index: any) => {
                  return (
                    <Link key={index} className="button" href={f} download={f}>
                      Download Attached File
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <CommentSection id={blog._id} comments={comments} slug={slug} />
      </div>
    </div>
  );
};

export default page;
