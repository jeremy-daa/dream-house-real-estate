"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaRegStar, FaStar } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Review } from "./AdminDashboardReview";

interface TestimonialProps {
  reviews: Review[];
}

const Testimonials = ({ reviews }: TestimonialProps) => {
  const [reviewModal, setReviewModal] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !message) {
      setError("Name and review are required.");
      setLoading(false);
      return;
    }
    const res = await fetch("/api/reviews", {
      method: "POST",
      body: JSON.stringify({ name, company, message, stars: rating }),
    }).then((res) => res.json());
    if (res.message) {
      setName("");
      setCompany("");
      setMessage("");
      setRating(0);
      setLoading(false);
      setReviewModal(false);
      toast("Review submitted successfully.");
    } else {
      setError("Internal Server Error");
      setLoading(false);
    }
  };

  return (
    <div className="padding relative">
      {/* Review Modal Start */}
      <div
        style={{
          display: reviewModal ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          className="shadowContact xl:w-[800px] lg:w-[60%] md:w-[70%] w-[90%] mx-auto"
        >
          <div className="w-full rounded-lg flex justify-center shadowContact p-4 relative">
            <IoCloseCircleOutline
              className="absolute top-4 right-5 text-4xl text-[var(--theme-red)] cursor-pointer hover:text-[var(--theme-blue)] duration-300 hover:scale-110"
              onClick={() => setReviewModal(false)}
            />
            <form className="flex flex-col sm:p-8 xs:p-4 p-2 rounded-lg text-slate-400 w-full">
              <div className="mb-3">
                <h2 className="text-2xl font-semibold text-slate-900 text-center">
                  Write a Review
                </h2>
                <p className="text-center mx-auto">
                  Share your experience with us.
                </p>
              </div>
              {error && (
                <p className="text-center text-slate-50 mb-3 px-5 py-2 rounded-md bg-[var(--theme-red)]">
                  {error}
                </p>
              )}
              {/* <div className="h-[3px] rounded-lg w-[40%] mx-auto bg-[var(--theme-red)] mt-2 mb-5"></div> */}
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 w-full flex-col md:flex-row">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="p-3 formField"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="company">Company Name</label>

                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Enter your company"
                      className="p-3 formField"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="review">Your Review</label>
                  <textarea
                    id="review"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your review here"
                    className="p-3 formField min-h-20"
                    maxLength={300}
                  ></textarea>
                </div>
                {/* Star Rating */}
                <div className="flex gap-4 flex-col justify-center items-center my-5 mt-2">
                  <label
                    htmlFor="rating"
                    className="text-2xl text-[var(--theme-red)] tracking-widest uppercase"
                  >
                    Rating
                  </label>
                  <span className="flex gap-3">
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return ratingValue <= (hover || rating) ? (
                        <FaStar
                          key={i}
                          className="text-[var(--theme-red)] text-2xl cursor-pointer"
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(ratingValue)}
                        />
                      ) : (
                        <FaRegStar
                          key={i}
                          className="text-[var(--theme-red)] text-2xl cursor-pointer"
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(ratingValue)}
                        />
                      );
                    })}
                  </span>
                </div>

                <button
                  className="p-3 bg-[var(--theme-red)] text-slate-100 hover:bg-[var(--card-blue)] duration-300 glowBlue"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  style={{
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Review Modal End */}
      <div className="flex items-center flex-col gap-5 overflow-hidden">
        <h2 className="title text-[var(--theme-blue)] font-semibold text-center">
          Testimonials
        </h2>
        <p className="text-center subtitle text-slate-500 max-w-xl">
          Hear what our clients have to say about us.
        </p>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper pb-24"
          >
            {reviews &&
              reviews.map((review, i) => {
                return (
                  <SwiperSlide className="pb-24 pt-5" key={i}>
                    <div className="lg:w-[800px] sm:w-[500px] w-full h-full mx-auto flex flex-col items-center p-6 space-y-8 rounded-lg lg:p-8 bg-slate-200 shadowContact text-slate-900 relative">
                      <Image
                        src={"/vectors/quote.svg"}
                        alt="quote"
                        width={50}
                        height={50}
                        className="absolute lg:visible invisible top-24 left-20 max-w-20 max-h-20"
                      />
                      <span className="p-3 rounded-full border-[3px] border-[var(--theme-red)]">
                        <Image
                          src="/vectors/user.svg"
                          alt=""
                          width={100}
                          height={100}
                          className="max-w-14 max-h-14"
                        />
                      </span>
                      <blockquote className="max-w-lg text-lg italic font-medium text-center">
                        &quot;{review.message}&quot;
                      </blockquote>
                      <span className="flex w-full gap-3 justify-center items-center">
                        {Array.from({ length: review.stars }).map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-[var(--theme-red)] text-2xl"
                          />
                        ))}
                        {Array.from({ length: 5 - review.stars }).map(
                          (_, i) => (
                            <FaRegStar
                              key={i}
                              className="text-[var(--theme-red)] text-2xl"
                            />
                          )
                        )}
                      </span>
                      <div className="text-center text-slate-500">
                        <p>{review.name}</p>
                        <p>{review.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="flex w-full justify-center items-center mb-6">
            <button
              className="bg-[var(--theme-red)] text-white px-10 text-xl py-3 text-center rounded- mt-8 glowBlue hover:bg-[var(--card-blue)] transition-all border-2 border-[var(--card-blue)] "
              onClick={() => {
                setReviewModal(true);
              }}
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
