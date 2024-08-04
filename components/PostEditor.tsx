"use client";
import MDEditor from "@uiw/react-md-editor";
import React from "react";

const PostEditor = ({
  markdown,
  setMarkdown,
}: {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-full">
      <MDEditor
        value={markdown}
        height="200px"
        className="max-w-[750px] min-w-[750px]"
        onChange={(value) => {
          setMarkdown(value || "");
        }}
      />
    </div>
  );
};

export default PostEditor;
