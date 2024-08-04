"use client";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  IoLocationOutline,
  IoLogoTiktok,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !message) {
      setLoading(false);
      setError("Email and Message are required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setLoading(false);
      setError("Enter a valid email.");
      return;
    }
    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      }),
    });

    // save the response objects message
    if (res.status === 200) {
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      toast("Message sent successfully");
    } else {
      setLoading(false);
      toast("An error occured, try again or just call us.");
    }
  };
  return (
    <div className="w-[80%] mx-auto mt-10 rounded-lg flex shadowContact p-4">
      <div className="flex-[0.40] rounded-lg bg-[var(--card-blue)] p-8 text-slate-400 flex flex-col gap-16 relative overflow-hidden">
        <div className="circleBG bottom-0 h-52 w-52 right-0 translate-x-1/3 translate-y-1/3 z-0">
          <div className="circleBG top-0 h-32 w-32 left-0 -translate-x-1/3 -translate-y-1/3 z-0"></div>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold text-slate-50">
              Contact Information
            </h2>
            <p>
              Alternatively, you can reach us via the contact information below:
            </p>
          </div>
          <div className="flex flex-col gap-7 z-10">
            <Link
              href={"https://maps.app.goo.gl/DvxKongncwBCV6xR9"}
              className="flex items-center gap-5"
            >
              <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                <IoLocationOutline className="text-xl" />
              </span>
              <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                Addis Ababa, Ethiopia
              </span>
            </Link>
            <Link href="tel:+251962944444" className="flex items-center gap-5">
              <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                <MdOutlinePhone className="text-xl" />
              </span>
              <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                +251 962 944444
              </span>
            </Link>
            <Link href="tel:+251935575700" className="flex items-center gap-5">
              <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                <MdOutlinePhone className="text-xl" />
              </span>
              <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                +251 935 575700
              </span>
            </Link>
            <Link
              href="mailto:info@dreamhouse-et.com"
              className="flex items-center gap-5"
            >
              <span className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit">
                <MdOutlineMail className="text-xl" />
              </span>
              <span className="text-slate-400 tracking-widest hover:text-[var(--theme-red)] duration-300 cursor-pointer text-lg">
                info@dreamhouse-et.com
              </span>
            </Link>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            href={"/facebook.com"}
            className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
          >
            <FaFacebookF className="text-xl" />
          </Link>
          <Link
            href={"https://wa.me/+251963575700"}
            className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
          >
            <IoLogoWhatsapp className="text-xl" />
          </Link>
          <Link
            href={
              "https://www.instagram.com/dreamhouse_et?igsh=ZHpxYjZmcXR6Z2dw"
            }
            className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
          >
            <BsInstagram className="text-xl" />
          </Link>
          <Link
            href={"https://www.tiktok.com/@dreamhouse_et?_t=8nytJDsa1sE&_r=1"}
            className="p-2 rounded-full text-sm flex gap-2 items-center bg-[var(--theme-red)] text-slate-100 w-fit border-2 border-transparent hover:bg-[--theme-blue] hover:border-[var(--theme-red)] duration-300 scale-90 glow"
          >
            <IoLogoTiktok className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="flex-[0.6]">
        <form className="flex flex-col gap-5 p-8 rounded-lg text-slate-400">
          <h2 className="text-2xl font-semibold text-slate-900">
            Send Us a Message
          </h2>
          <p>
            If you have any questions or inquiries, please fill out the form
            below and we will get back to you as soon as possible.
          </p>
          {error && (
            <p className="text-center text-slate-50 mb-3 px-5 py-2 rounded-md bg-[var(--theme-red)]">
              {error}
            </p>
          )}
          <div className="flex flex-col gap-4">
            <div className="flex gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="p-3 formField"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="p-3 formField"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="p-3 formField"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className="p-3 formField"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="p-3 formField min-h-20"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              className="p-3 bg-[var(--theme-red)] text-slate-100 hover:bg-[var(--card-blue)] duration-300 glowBlue"
              onClick={(e) => handleFormSubmit(e)}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "not-allowed" : "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send a message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
