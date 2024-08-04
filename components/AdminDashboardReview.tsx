import React, { useEffect, useState } from "react";
import BlogListSkeleton from "./BlogListSkeleton";
import AdminReviewList from "./AdminReviewList";

export interface Review {
  _id?: number;
  name: string;
  company: string;
  message: string;
  visible: boolean;
  stars: number;
}

interface ReviewDashboardProps {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  loading: boolean;
}

const AdminDashboardReview = ({
  reviews,
  setReviews,
  loading,
}: ReviewDashboardProps) => {
  return (
    <div className="relative mt-16">
      <div>
        <div className="w-[75%] mx-auto">
          <h1 className="text-[50px] text-[var(--theme-yellow)] font-semibold text-center mb-8">
            Recent Reviews
          </h1>
          {loading && (
            <>
              {Array.from({ length: 4 }).map((_, i) => (
                <BlogListSkeleton key={i} />
              ))}
            </>
          )}
          {reviews.map((review, i) => (
            <AdminReviewList
              key={i}
              _id={review._id}
              visible={review.visible}
              name={review.name}
              company={review.company}
              message={review.message}
              stars={review.stars}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardReview;
