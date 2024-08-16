"use client";
import React from "react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const AdminHero = ({
  title,
  options,
  selected,
  handleChange,
}: {
  title: string;

  options: string[];
  selected: string;
  handleChange: (e: any) => void;
}) => {
  const session = useSession();
  const firstName =
    (session.data && session.data.user.name?.split(" ")[0]) || "Admin";
  return (
    <div className="w-full pb-32 pt-44 relative bg-[var(--theme-blue)]">
      <Image
        src="/stock/12.jpg"
        alt="hero"
        width={600}
        height={600}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      {/* Logout */}
      <div className="flex flex-col gap-14 justify-between items-center px-6">
        <h1 className="text-slate-100 title font-semibold tracking-wider text-center">
          Welcome Back,{" "}
          <span className="text-[var(--theme-red)] italic">{firstName}</span>
        </h1>
        <div className="flex flex-col gap-10">
          <button className="button cursor-pointer" onClick={() => signOut()}>
            Logout
          </button>
          <div className="flex gap-4 justify-center">
            {options.map((option, index) => {
              return (
                <button
                  key={index}
                  className={`button cursor-pointer `}
                  style={{
                    background: selected === option ? "var(--theme-red)" : "",
                    color: selected === option ? "var(--theme-blue)" : "",
                  }}
                  onClick={handleChange}
                  value={option}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHero;
