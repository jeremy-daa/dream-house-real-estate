import CommentSection from "@/components/CommentSection";
import PageHero from "@/components/PageHero";
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
  const res: any = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  ).then((res) => res.json());
  const blog = res;
  if (!blog) {
    return notFound();
  }
  const { title, content, image, fileAttached, comments } = blog;

  return (
    <div>
      <PageHero title={title} img={image} />
      <div className="flex px-32 justify-between mt-12">
        <div className="flex-[0.6] flex flex-col gap-6">
          <h2 className="text-5xl font-semibold text-[var(--theme-red)] mt-5 mb-2 capitalize leading-snug tracking-wide">
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
