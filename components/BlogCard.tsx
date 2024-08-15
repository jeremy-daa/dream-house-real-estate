import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

interface BlogCardProps {
  title: string;
  img: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, img, date, slug }: BlogCardProps) => {
  const checkNovelty = (date: any) => {
    const newDate = new Date(date);
    const currentDate = new Date();
    const difference = currentDate.getTime() - newDate.getTime();
    const days = difference / (1000 * 3600 * 24);
    if (days <= 7) {
      return "New";
    } else if (days <= 30) {
      return "Recent";
    }
    return "Archive";
  };
  const formatDate = (date: any) => {
    const options = {
      weekday: "long" as const,
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", options);
  };
  return (
    <div className="xs:w-[380px] w-[300px] h-[450px] flex flex-col bg-slate-50 shadowContactSm p-3 rounded">
      <Image
        src={img}
        alt="blog"
        width={500}
        height={500}
        className="w-full h-[200px] object-cover"
      />
      <div className="flex flex-col h-full justify-between xs:px-10 px-3 pt-6">
        <div className="flex flex-col gap-5 ">
          <div className="flex xs:gap-3 gap-1 items-center text-slate-500 uppercase text-sm tracking-widest">
            <span>{checkNovelty(date)}</span>
            <span className="w-[5px] h-[5px] rounded-full bg-[var(--theme-red)]"></span>
            <span className="text-[10px] text-slate-50 px-3 py-[2px] rounded-lg bg-[var(--theme-red)] whitespace-nowrap">
              {formatDate(date)}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-[var(--theme-blue)]">
            {title}
          </h3>
        </div>
        <Link
          href={"/updates/" + slug}
          className="flex gap-5 mb-5 border-t-[3px] border-t-[var(--theme-red)] pt-4 readMore"
        >
          <span className="text-[var(--theme-red)] uppercase text-lg font-semibold tracking-wider">
            Read More
          </span>
          <MdOutlineArrowRightAlt className="text-[var(--theme-red)] text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
