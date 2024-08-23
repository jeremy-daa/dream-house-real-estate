import React from "react";
import Image from "next/image";

const HomeInfo = () => {
  return (
    <div className="flex flex-col gap-16 padding">
      <div className="w-full flex flex-col items-center gap-8">
        <h2 className="xs:text-4xl text-3xl text-[var(--theme-red)] font-semibold text-center">
          Why Choose Us
        </h2>
        <p className="text-center text-lg text-slate-500 max-w-xl">
          We are your trusted partner in developing perfect homes in Addis
          Ababa. Here are some reasons why our clients choose us.
        </p>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        <div className="card w-[350px] h-[210px] select-none">
          <div className="card-inner">
            <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
              <Image src="/vectors/roi.svg" alt="ROI" width={60} height={60} />
              <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                Guaranteed Return on Investment
              </span>
            </div>
            <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
              <p className="text-center text-[var(--theme-blue)]">
                We offer a guaranteed return on investment with our properties.
                You can rest asured that your investment will yield a return.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[350px] h-[210px] select-none">
          <div className="card-inner">
            <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
              <Image
                src="/vectors/location.svg"
                alt="Location"
                width={60}
                height={60}
              />
              <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                Proximity to Key Landmarks and Embassies
              </span>
            </div>
            <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
              <p className="text-center text-[var(--theme-blue)]">
                Our properties are located in prime areas with proximity to key
                landmarks and embassies. Your property is in a prime location
                with easy access to key areas.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[350px] h-[210px] select-none">
          <div className="card-inner">
            <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
              <Image
                src="/vectors/management.svg"
                alt="Location"
                width={60}
                height={60}
              />
              <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                Effortless Property Management
              </span>
            </div>
            <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
              <p className="text-center text-[var(--theme-blue)]">
                We offer effortless property management services to our clients.
                We take care of all the property management tasks so you can
                relax and enjoy your investment.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[350px] h-[210px] select-none">
          <div className="card-inner">
            <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
              <Image
                src="/vectors/payment.svg"
                alt="Location"
                width={60}
                height={60}
              />
              <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                Multiple and Flexible Payment Plans
              </span>
            </div>
            <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
              <p className="text-center text-[var(--theme-blue)]">
                We offer flexible payment plans to our clients. You can pay for
                your property in installments. We make it easy for you to own
                your property.
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[350px] h-[210px] select-none">
          <div className="card-inner">
            <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
              <Image
                src="/vectors/construction.svg"
                alt="Construction"
                width={60}
                height={60}
              />
              <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                High-Quality Construction
              </span>
            </div>
            <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
              <p className="text-center text-[var(--theme-blue)]">
                Our properties are built with high-quality materials and
                craftsmanship, ensuring durability and value retention for years
                to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
