import { getAuthSession } from "@/lib/authOptions";
import Review from "@/models/Review";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id || "";
  const session = await getAuthSession();
  const body = await request.json();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated!" },
      { status: 401 }
    );
  } else {
    try {
      await dbConnect();

      const existingReview = await Review.findById(id);

      if (!existingReview) {
        return NextResponse.json(
          { message: "Review not found" },
          { status: 404 }
        );
      }

      const res = await Review.findByIdAndUpdate(
        id,
        { visible: !existingReview.visible },
        { new: true }
      );
      if (res) {
        return NextResponse.json({ res }, { status: 200 });
      }
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
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
