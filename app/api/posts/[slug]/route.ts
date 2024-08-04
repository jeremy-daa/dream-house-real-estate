import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/authOptions";
import Post from "@/models/Post";
import dbConnect from "@/utils/dbConnect";
import { generateSlug } from "@/utils/functions";
import { defaultImage } from "@/components/Exports";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug || "";
  try {
    await dbConnect();

    const post = await Post.findOne({ slug: slug });
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: `Internal Server Err ${e.message}` },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug || "";
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated" },
      { status: 401 }
    );
  }
  try {
    await dbConnect();
    const post = await Post.findOneAndDelete({ slug: slug });
    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    // delete post image and file

    const postImage = post.image;

    const postFiles = post.fileAttached;
    console.log(postImage, postFiles);
    if (postImage && postImage !== defaultImage) {
      var fileName = postImage.split("/").pop();
      const res = await fetch(
        `${process.env.UPLOADER_URL}/delete/image/${fileName}`,
        {
          method: "DELETE",
          headers: {
            keys: process.env.ACCESS_KEY || "",
          },
        }
      );
      if (!res.ok) {
        return NextResponse.json(
          { message: "Error deleting post image" },
          { status: 500 }
        );
      }
    }
    if (postFiles && postFiles.length > 0) {
      const fileNames = postFiles.map((file: string) => {
        return file.split("/").pop();
      });
      const res = await fetch(`${process.env.UPLOADER_URL}/delete/docs`, {
        method: "DELETE",
        headers: {
          keys: process.env.ACCESS_KEY || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ files: fileNames }),
      }).then((res) => res.json());
      if (!res) {
        return NextResponse.json(
          { message: "Error deleting post files" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (e: any) {
    return NextResponse.json(
      { message: `Internal Server Err ${e.message}` },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug || "";
  const session = await getAuthSession();
  const body = await request.json();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated!" },
      { status: 401 }
    );
  } else {
    const { title, content, image, fileAttached } = body;
    try {
      await dbConnect();

      const existingPost = await Post.findOne({ slug: slug });

      if (!existingPost) {
        return NextResponse.json(
          { message: "Post not found" },
          { status: 404 }
        );
      }

      const updateObj: any = {};
      if (typeof title !== "undefined" && title !== null && title !== "") {
        updateObj["title"] = title;
        updateObj["slug"] = generateSlug(title);
      }
      if (
        typeof content !== "undefined" &&
        content !== null &&
        content !== ""
      ) {
        updateObj["content"] = content;
      }
      if (typeof image !== "undefined" && image !== null && image !== "") {
        updateObj["image"] = image;
      }
      if (
        typeof fileAttached !== "undefined" &&
        fileAttached !== null &&
        fileAttached !== "" &&
        fileAttached.length > 0
      ) {
        updateObj["fileAttached"] = fileAttached;
      }

      const res = await Post.findOneAndUpdate({ slug: slug }, updateObj);

      // delete post image and file if new image or file is uploaded
      if (res) {
        // delete post image and file if new image or file is uploaded
        if (updateObj.image || updateObj.fileAttached) {
          const { image: oldImage, fileAttached: oldFiles } = existingPost;

          // If new image is uploaded, delete the old image
          if (updateObj.image && oldImage) {
            // Replace this with your actual logic to delete the old image from the storage

            var fileName = oldImage.split("/").pop();
            const resImage = await fetch(
              `${process.env.UPLOADER_URL}/delete/image/${fileName}`,
              {
                method: "DELETE",
                headers: {
                  keys: process.env.ACCESS_KEY || "",
                },
              }
            );
          }

          // If new files are uploaded, delete the old files
          if (updateObj.fileAttached && oldFiles && oldFiles.length > 0) {
            const fileNames = oldFiles.map((file: string) => {
              return file.split("/").pop();
            });
            const res = await fetch(`${process.env.UPLOADER_URL}/delete/docs`, {
              method: "DELETE",
              headers: {
                keys: process.env.ACCESS_KEY || "",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ files: fileNames }),
            }).then((res) => res.json());
            if (!res) {
              return NextResponse.json(
                { message: "Error deleting post files" },
                { status: 500 }
              );
            }
          }
        }
      }

      return NextResponse.json(
        { message: "Post updated successfully" },
        { status: 200 }
      );
    } catch (e: any) {
      console.log(e);
      return NextResponse.json(
        { message: `Internal Server Err ${e.message}` },
        { status: 500 }
      );
    }
  }
}
