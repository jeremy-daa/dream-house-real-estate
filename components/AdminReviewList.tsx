"use client";
import React from "react";
import Image from "next/image";
import { Review } from "./AdminDashboardReview";
import { FaRegStar, FaStar } from "react-icons/fa";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import { toast } from "react-toastify";

const AdminReviewList = ({
  _id,
  name,
  company,
  message,
  stars,
  visible,
}: Review) => {
  const [clientVisible, setClientVisible] = React.useState(visible);
  const [loading, setLoading] = React.useState(false);

  const changeVisibility = async () => {
    setLoading(true);
    const response = await fetch(`/api/reviews/${_id}`, {
      method: "PUT",
      body: JSON.stringify({}),
    });
    const data = await response.json();
    if (data.res) {
      setLoading(false);
      setClientVisible(data.res.visible);
      toast("Visibility changed successfully");
    } else {
      setLoading(false);
      toast("An error occurred while changing visibility");
    }
  };
  return (
    <div className="w-full shadowContactSm rounded-md px-10 py-5 flex justify-start items-start mb-8 max-h-[340px] ">
      <div className="flex flex-col items-center gap-5">
        <span className="p-3 my-2 rounded-full border-[3px] border-[var(--theme-red)]">
          <Image
            src="/vectors/user.svg"
            alt=""
            width={100}
            height={100}
            className="max-w-14 max-h-14"
          />
        </span>

        <button
          className="w-fit px-6 py-[3px] border-[3px] border-[var(--theme-red)] flex items-center gap-4 text-[var(--theme-red)] cursor-pointer duration-300"
          style={{
            backgroundColor: clientVisible ? "var(--theme-red)" : "transparent",
            color: clientVisible ? "white" : "var(--theme-red)",
            opacity: loading ? 0.5 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            changeVisibility();
          }}
          disabled={loading}
        >
          <span className="min-w-[70px]">
            {clientVisible ? "Visible" : "Hidden"}{" "}
          </span>
          <div className="overflow-hidden max-w-[16px] max-h-[16px] flex justify-center items-center">
            <div
              className={`max-w-[16px] max-h-[16px] flex justify-start items-center flex-nowrap duration-300`}
              style={{
                transform: clientVisible
                  ? "translateX(0)"
                  : "translateX(-100%)",
              }}
            >
              <span>
                <TbEye className="text-base" />
              </span>
              <span>
                <TbEyeClosed className="text-base" />
              </span>
            </div>
          </div>
        </button>
      </div>
      <div className="ml-10 w-full  flex flex-col justify-between items-start">
        <div>
          <h2 className="text-3xl font-medium mt-2 text-[var(--theme-red)] mb-3 border-b-[2px] hover:border-b-[var(--theme-red)] duration-300 border-b-transparent capitalize w-fit pr-2">
            {name}
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-[var(--theme-red)] text-lg font-semibold">
              Company:
            </span>
            <p className="text-lg">{company}</p>
          </div>
          <div className="flex items-center mt-2 gap-5">
            <span className="text-[var(--theme-red)] text-lg font-semibold">
              Stars:
            </span>
            <span className="flex w-full gap-3 justify-start items-center">
              {Array.from({ length: stars }).map((_, i) => (
                <FaStar key={i} className="text-[var(--theme-red)] text-xl" />
              ))}
              {Array.from({ length: 5 - stars }).map((_, i) => (
                <FaRegStar
                  key={i}
                  className="text-[var(--theme-red)] text-xl"
                />
              ))}
            </span>
          </div>
          <div className="text-lg text-[#333] mt-2">
            <p className="mb-2">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReviewList;
