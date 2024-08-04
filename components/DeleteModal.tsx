"use client";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdDeleteOutline, MdOutlineCancel } from "react-icons/md";
import { toast } from "react-toastify";
interface ModalProps {
  deleteModal: boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  postSlug: string;
  setPostSlug: React.Dispatch<React.SetStateAction<string>>;
  setPosts: React.Dispatch<React.SetStateAction<any>>;
  posts: any;
}

const DeleteModal = ({
  deleteModal,
  setDeleteModal,
  postSlug,
  setPostSlug,
  setPosts,
  posts,
}: ModalProps) => {
  const [loading, setLoading] = React.useState(false);
  const modalCloser = () => {
    setDeleteModal(false);
    setPostSlug("");
  };
  const awaitPosts = async () => {
    const res = await fetch("/api/posts").then((res) => {
      setLoading(false);
      return res.json();
    });
    setPosts(res);
  };
  const deleteHandler = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const res = await fetch(`/api/posts/${postSlug}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      awaitPosts();
      modalCloser();
      setLoading(false);
      toast("Post deleted successfully");
    } else if (res.status === 404) {
      setLoading(false);
      toast("Post not found");
    } else {
      setLoading(false);
      toast("An error occurred while deleting post");
    }
  };
  const searchSlug = (slug: string) => {
    return posts.find((post: any) => post.slug === slug);
  };
  return (
    <div
      style={{
        display: deleteModal ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 999999,
      }}
      className="glass"
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
        className="shadowContact"
      >
        <div className="w-full mx-auto rounded-lg flex shadowContact p-4 relative">
          <IoCloseCircleOutline
            className="absolute top-4 right-5 text-4xl text-[var(--theme-red)] cursor-pointer hover:text-[var(--theme-blue)] duration-300 hover:scale-110"
            onClick={() => {
              setDeleteModal(false);
              setPostSlug("");
            }}
          />
          <form className="flex flex-col px-8 py-4 rounded-lg text-slate-400">
            <h2 className="text-3xl font-semibold text-[var(--theme-red)] text-center">
              Delete Post
            </h2>
            <p className="text-center text-lg my-6">
              Are you sure you want to delete this post?
              <br />
              <br />
              <span className="text-[var(--theme-red)] font-bold">
                {searchSlug(postSlug)?.title}
              </span>
            </p>
            <div className="flex gap-5 justify-evenly">
              <button
                className="p-3 bg-[var(--card-blue)] text-slate-100 hover:bg-[var(--theme-red)] duration-300 glow mx-auto flex justify-center items-center gap-2 w-[45%]"
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                onClick={(event: any) => {
                  deleteHandler(event);
                }}
                disabled={loading}
              >
                <MdDeleteOutline />
                {loading ? "Deleting..." : "Delete Post"}
              </button>
              <button
                className="p-3 bg-[var(--theme-red)] text-slate-100 hover:bg-[var(--card-blue)] duration-300 glowBlue  mx-auto flex justify-center items-center gap-2 w-[45%]"
                onClick={(e) => {
                  e.preventDefault();
                  modalCloser();
                }}
              >
                <MdOutlineCancel />
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
