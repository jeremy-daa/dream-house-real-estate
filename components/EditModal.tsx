import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import PostEditor from "./PostEditor";
import { toast } from "react-toastify";

interface ModalProps {
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  postSlug: string;
  setPostSlug: React.Dispatch<React.SetStateAction<string>>;
  setPosts: React.Dispatch<React.SetStateAction<any>>;
  posts: any;
  uploadCredentials: any;
}

const EditModal = ({
  editModal,
  setEditModal,
  postSlug,
  setPostSlug,
  setPosts,
  uploadCredentials,
  posts,
}: ModalProps) => {
  const imageRef = React.useRef<HTMLInputElement>(null);
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = React.useState<File | null>(null);
  const [files, setFiles] = React.useState<FileList | null>(null);

  const modalCloser = () => {
    setEditModal(false);
    setTitle("");
    setContent("");
    setImage(null);
    setFiles(null);
    setError("");
    setPostSlug("");
  };
  const awaitPosts = async () => {
    const res = await fetch("/api/posts").then((res) => {
      setLoading(false);
      return res.json();
    });
    setPosts(res);
  };

  const updateHandler = async (event: any) => {
    event.preventDefault();
    var imageUrl = "";
    var fileUrl = [];
    setError("");
    setLoading(true);
    const imageData = new FormData();
    const filesData = new FormData();
    if (image) {
      imageData.append(image.name, image);
      const res = await fetch(`${uploadCredentials.url}/upload/image`, {
        method: "POST",
        body: imageData,
        headers: {
          keys: uploadCredentials.secret,
        },
      })
        .then((res) => res.json())
        .catch(() => {
          setError("An error occurred while uploading image");
          setLoading(false);
        });
      if (res) {
        imageUrl = res.urlPath;
      }
    }
    if (files) {
      Object.keys(files).forEach((key: any) => {
        filesData.append(files[key].name, files[key]);
      });
      const res = await fetch(`${uploadCredentials.url}/upload/doc`, {
        method: "POST",
        body: filesData,
        headers: {
          keys: uploadCredentials.secret,
        },
      })
        .then((res) => res.json())
        .catch(() => {
          setError("An error occurred while uploading files");
          setLoading(false);
        });
      if (res) {
        fileUrl = res.urlPaths;
      }
    }
    const res = await fetch(`/api/posts/${postSlug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title || null,
        content: content || null,
        image: imageUrl || null,
        fileAttached: fileUrl || null,
      }),
    });
    if (res.status === 200) {
      setError("");
      setLoading(false);
      awaitPosts();
      modalCloser();
      toast("Post updated successfully");
    } else {
      setError("An error occurred while updating post");
      setLoading(false);
      toast("An error occurred while updating post");
    }
  };
  const trimString = (str: string, count: number) => {
    if (str.length > count) {
      return str.substring(0, count) + "...";
    } else {
      return str;
    }
  };
  const searchSlug = (slug: string) => {
    return posts.find((post: any) => post.slug === slug);
  };
  return (
    <div
      style={{
        display: editModal ? "block" : "none",
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
              setEditModal(false);
              setPostSlug("");
            }}
          />
          <form className="flex flex-col px-8 py-4 rounded-lg text-slate-400">
            <h2 className="text-3xl font-semibold text-[var(--theme-red)] text-center">
              Edit Post
            </h2>
            {/* Err */}
            {error && (
              <div className="text-[var(--theme-red)] p-3 text-center">
                {error}
              </div>
            )}
            {/* <div className="h-[3px] rounded-lg w-[40%] mx-auto bg-[var(--theme-red)] mt-2 mb-5"></div> */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Enter new title"
                  className="p-3 formField text-slate-900"
                />
              </div>
              <label htmlFor="content">Content</label>
              <PostEditor
                markdown={
                  content === "" ? searchSlug(postSlug)?.content : content
                }
                setMarkdown={setContent}
              />
              <div className="flex w-full gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="image">Image</label>
                  <div className="flex w-full justify-center">
                    <div
                      className="inline-flex items-center px-4 py-2 bg-[var(--card-blue)] border border-[var(--theme-red)] rounded-sm font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-[var(--theme-red)] active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition min-w-fit whitespace-nowrap max-h-12 max-w-[50%]"
                      onClick={() => {
                        imageRef.current?.click();
                      }}
                    >
                      Upload Image
                    </div>
                    <div className="border border-gray-300 rounded-r-md flex items-center justify-between w-full max-h-12">
                      <span className="p-2">
                        {image
                          ? trimString(image.name, 15)
                          : "No file selected"}
                      </span>
                      <input
                        type="file"
                        accept=".png, .jpeg, .jpg, .gif"
                        ref={imageRef}
                        onChange={(e) => {
                          if (!e.target.files) return;
                          const currentImage = e.target.files[0];
                          setImage(currentImage);
                        }}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="files">Files</label>
                  <div className="flex w-full justify-center">
                    <div
                      className="inline-flex items-center px-4 py-2 bg-[var(--card-blue)] border border-[var(--theme-red)] rounded-sm font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-[var(--theme-red)] active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition min-w-fit whitespace-nowrap max-h-12 max-w-[50%]"
                      onClick={() => {
                        fileRef.current?.click();
                      }}
                    >
                      Upload Files
                    </div>
                    <div className="border border-gray-300 rounded-r-md flex items-center justify-between w-full max-h-12">
                      <span className="p-2">
                        {files
                          ? files?.length === 1
                            ? trimString(files[0].name, 15)
                            : files?.length + " files selected"
                          : "No file selected"}
                      </span>
                      <input
                        type="file"
                        ref={fileRef}
                        className="hidden"
                        accept=".pdf, .docx, .doc, .txt"
                        onChange={(e) => {
                          if (!e.target.files) return;
                          const currentFiles = e.target.files;
                          setFiles(currentFiles);
                          console.log(currentFiles);
                        }}
                        multiple
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="p-3 bg-[var(--theme-red)] text-slate-100 hover:bg-[var(--card-blue)] duration-300 glowBlue w-fit px-20 mx-auto"
                onClick={(event: any) => {
                  updateHandler(event);
                }}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
