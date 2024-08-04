import { getAuthSession } from "@/lib/authOptions";
import Review from "@/models/Review";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, company, message, stars } = body;

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message are required." },
      { status: 400 }
    );
  }

  try {
    await dbConnect();
    const newReview = new Review({
      name,
      company: company || "No Company",
      message,
      visible: false,
      stars,
    });
    const res = await newReview.save();
    if (res) {
      return NextResponse.json(
        { message: "Review added successfully" },
        { status: 200 }
      );
    }
  } catch (e: any) {
    console.log(e);
    NextResponse.json(
      { message: `Internal Server Err ${e.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Internal Server Error" },
    { status: 500 }
  );
}

export async function GET(request: Request) {
  const session = await getAuthSession();

  try {
    await dbConnect();
    let reviews = await Review.find();
    if (!session) {
      reviews = reviews.filter((review) => review.visible);
    }
    reviews.reverse();

    return NextResponse.json(reviews, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { message: `Internal Server Err ${e.message}` },
      { status: 500 }
    );
  }
}
