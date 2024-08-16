"use client";
import React, { useCallback, useEffect, useState } from "react";
import AdminHero from "@/components/AdminHero";
import AdminDashboardBlog from "@/components/AdminDashboardBlog";
import AdminDashboardReview, {
  Review,
} from "@/components/AdminDashboardReview";
import EditModal from "./EditModal";
import AddModal from "./AddModal";
import DeleteModal from "./DeleteModal";

const AdminDashboard = ({
  postsServer,
  reviewsServer,
}: {
  postsServer: any;
  reviewsServer: any;
}) => {
  console.log(reviewsServer);
  const options = ["Updates", "Reviews"];
  const [editModal, setEditModal] = useState(false);
  const [postSlug, setPostSlug] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selected, setSelected] = useState("Updates");
  const [posts, setPosts] = useState(postsServer);
  const [reviews, setReviews] = useState<Review[]>(reviewsServer);
  const [loading, setLoading] = useState(false);
  const [uploadCredentials, setUploadCredentials] = React.useState<any>();
  const fetchUploadCredentials = async () => {
    const response = await fetch("/api/upload", {
      method: "GET",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setUploadCredentials(response);
  };
  const awaitPosts = useCallback(async () => {
    const res = await fetch("/api/posts").then((res) => {
      setLoading(false);
      return res.json();
    });
    setPosts(res);
  }, [setLoading, setPosts]);

  const awaitReviews = useCallback(async () => {
    const res = await fetch("/api/reviews").then((res) => {
      setLoading(false);
      return res.json();
    });
    setReviews(res);
  }, [setLoading, setReviews]);

  useEffect(() => {
    fetchUploadCredentials();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const renderComponent = () => {
    switch (selected) {
      case "Updates":
        return (
          <AdminDashboardBlog
            editModal={editModal}
            setEditModal={setEditModal}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            addModal={addModal}
            setAddModal={setAddModal}
            setSlug={setPostSlug}
            posts={posts}
            setPosts={setPosts}
            loading={loading}
          />
        );
      case "Reviews":
        return (
          <AdminDashboardReview
            reviews={reviews}
            setReviews={setReviews}
            loading={loading}
          />
        );
      default:
        return (
          <AdminDashboardBlog
            editModal={editModal}
            setEditModal={setEditModal}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            addModal={addModal}
            setAddModal={setAddModal}
            setSlug={setPostSlug}
            posts={posts}
            setPosts={setPosts}
            loading={loading}
          />
        );
    }
  };
  return (
    <div>
      <EditModal
        editModal={editModal}
        setEditModal={setEditModal}
        postSlug={postSlug}
        setPostSlug={setPostSlug}
        setPosts={setPosts}
        uploadCredentials={uploadCredentials}
        posts={posts}
      />
      <AddModal
        addModal={addModal}
        setAddModal={setAddModal}
        setPosts={setPosts}
        uploadCredentials={uploadCredentials}
      />
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        setPosts={setPosts}
        postSlug={postSlug}
        setPostSlug={setPostSlug}
        posts={posts}
      />
      <AdminHero
        title="Admin Dashboard"
        options={options}
        selected={selected}
        handleChange={handleChange}
      />

      {renderComponent()}
    </div>
  );
};

export default AdminDashboard;
