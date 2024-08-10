import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/lib/nodeMailer";
import Contact from "@/models/Contact";

import dbConnect from "@/utils/dbConnect";
import { getAuthSession } from "@/lib/authOptions";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message, subject, booking } = body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if ((!email || !message) && !booking) {
    return NextResponse.json(
      { message: "Email and message are required" },
      { status: 400 }
    );
  }
  if (email && !emailRegex.test(email)) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }
  await dbConnect();
  try {
    await transporter.sendMail(
      mailOptions(name, email, phone, message, subject)
    );
    const newContact = new Contact({
      name,
      email: email || "booking",
      phone,
      message,
      subject: subject || "booking",
    });
    await newContact.save();
    return NextResponse.json(
      {
        message: "Email sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { message: `Internal Server Error: ${e.message}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const session = await getAuthSession();
  if (!session?.user) {
    return NextResponse.json(
      { message: "User not authenticated" },
      { status: 401 }
    );
  } else {
    try {
      await dbConnect();
      const contacts = await Contact.find({});
      return NextResponse.json(
        {
          message: "Contacts fetched successfully!",
          data: contacts,
        },
        {
          status: 200,
        }
      );
    } catch (e: any) {
      return NextResponse.json(
        { message: `Internal Server Error: ${e.message}` },
        { status: 500 }
      );
    }
  }
}
