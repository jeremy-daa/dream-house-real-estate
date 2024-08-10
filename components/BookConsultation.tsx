"use client";
import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const BookConsultation = ({
  consultationModal,
  setConsultationModal,
}: {
  consultationModal: boolean;
  setConsultationModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    if (!message) {
      setLoading(false);
      setError("Message is required.");
      return;
    }

    const res = await fetch(`/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: message,
        booking: true,
      }),
    });

    if (res.status === 200) {
      setConsultationModal(false);

      setLoading(false);
      setName("");
      setPhone("");
      setMessage("");
      toast("Appointment set successfully");
    } else {
      setLoading(false);
      toast("An error occured, try again or just call us.");
    }
  };
  return (
    <div
      style={{
        display: consultationModal ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
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
            onClick={() => setConsultationModal(false)}
          />
          <form className="flex flex-col p-8 rounded-lg text-slate-400">
            <h2 className="text-2xl font-semibold text-slate-900 text-center">
              Send Us a Message
            </h2>
            <p className="text-center mx-auto pb-4 my-5">
              If you have any questions or inquiries, please fill out the form
              below and we will get back to you as soon as possible.
            </p>
            {error && (
              <p className="text-center text-slate-50 mb-3 px-5 py-2 rounded-md bg-[var(--theme-red)]">
                {error}
              </p>
            )}
            {/* <div className="h-[3px] rounded-lg w-[40%] mx-auto bg-[var(--theme-red)] mt-2 mb-5"></div> */}
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
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
                onClick={(e) => {
                  handleFormSubmit(e);
                }}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
