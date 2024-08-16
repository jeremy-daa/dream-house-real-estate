"use client";
import React, { useState } from "react";

const CommentSection = ({
  slug,
  id,
  comments,
}: {
  slug: string;
  id: string;
  comments: {
    commenter: string;
    email: string;
    content: string;
  }[];
}) => {
  const [commenter, setCommenter] = useState("");
  const [email, setEmail] = useState("");
  const [content, setComment] = useState("");
  const [commentList, setCommentList] = useState(comments);
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");
  const fetchComments = async () => {
    const res: any = await fetch(`/api/posts/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    const blog = res;
    setCommentList(blog.comments);
  };

  const handleComment = async () => {
    setLoading(true);
    const res = await fetch(`/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: id,
        commenter: commenter,
        content: content,
        email: email,
      }),
    });
    if (res.status === 200) {
      fetchComments();
      setCommenter("");
      setEmail("");
      setComment("");
      setLoading(false);
      setInfo("Comment was successful");
    } else if (res.status === 404) {
      setLoading(false);
      setInfo("Post not found");
    } else {
      setLoading(false);
      setInfo("Error occurred while updating creating comment");
    }
  };
  return (
    <div className="mb-[50px] flex-[0.33]">
      {/* comments */}
      <div className="min-w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-[var(--theme-color)] text-center pt-10 mb-8 px-4">
          Comments
        </h1>
        {/* <div className="w-[80%] min-w-[300px] mx-auto">
          <div className="w-full h-[200px] bg-[var(--theme-yellow)] object-cover object-top rounded-[6px] mb-10"></div>
          <p className="w-full py-3 bg-[var(--theme-yellow)] mb-2"></p>
          <p className="w-full py-3 bg-[var(--theme-yellow)] mb-2"></p>
          <p className="w-full py-3 bg-[var(--theme-yellow)] mb-2"></p>
        </div> */}
        <div className="w-full border-2 border-[var(--theme-red)] bg-[var(--red-transparent)] px-5 ">
          {commentList.length > 0 ? (
            commentList.map((comment, i) => (
              <div
                key={i}
                className="w-full my-2 flex flex-col justify-center items-start gap-3 text-[var(--theme-blue)] pb-4 "
                style={{
                  borderBottom:
                    i === commentList.length - 1
                      ? "none"
                      : "1px solid var(--theme-blue)",
                }}
              >
                <h3 className="font-bold text-[var(--theme-color)]">
                  {comment.commenter}
                </h3>
                <p>{comment.content}</p>
                <p className="text-sm font-bold">{comment.email}</p>
                {/* a separator except the last element */}
              </div>
            ))
          ) : (
            <p className="w-full text-center px-4 py-3">No comments yet</p>
          )}
        </div>
      </div>
      {/* Leave a comment */}
      <div className="w-full flex flex-col items-center justify-center shadowContactSm mt-10 px-4 sm:px-8 rounded-lg pb-5">
        <h1 className="text-2xl font-bold text-[var(--theme-red)] text-center my-5 px-4">
          Leave a Comment
        </h1>
        {info && (
          <p className="text-center text-[var(--theme-color)] bg-[var(--theme-yellow)] py-3 px-4 mb-2">
            {info}
          </p>
        )}
        <div className="text-sm">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 bg-[var(--theme-yellow)] text-slate-900 mb-2 px-4 input outline-none focus:border-[var(--theme-red)] border-[2px] duration-300 focus:text-slate-800"
            value={commenter}
            onChange={(e) => setCommenter(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 bg-[var(--theme-yellow)] text-slate-900 mb-2 px-4 input outline-none focus:border-[var(--theme-red)] border-[2px] duration-300 focus:text-slate-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Comment"
            className="w-full py-3 bg-[var(--theme-yellow)] text-slate-900 mb-2 px-4 input outline-none focus:border-[var(--theme-red)] border-[2px] duration-300 focus:text-slate-800"
            value={content}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button
            className="px-6 py-2  text-[var(--theme-red)] rounded-sm border-2 border-[var(--theme-red)] hover:text-[var(--theme-blue)] hover:bg-[var(--theme-red)] hover:border-[var(--theme-red)] duration-500 my-5"
            onClick={handleComment}
            style={{
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
              width: "100%",
              textAlign: "center",
            }}
            disabled={loading}
          >
            {loading ? "Commenting..." : "Leave a Comment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
