import React from "react";
import Image from "next/image";

const PropertyInfo = () => {
  return (
    <div className="padding text-center">
      <h2 className="uppercase subtitle text-[var(--theme-red)] font-semibold tracking-widest">
        Kebena District
      </h2>
      <p className="capitalize title font-semibold text-[var(--theme-blue)] mt-5">
        Property Details
      </p>
      <div className="flex flex-col items-center justify-center w-full md:mt-16 mt-8 md:gap-14 gap-5">
        <div className="flex md:gap-14 gap-5 justify-center w-full flex-wrap">
          <div className="card w-[350px] h-[210px] select-none">
            <div className="card-inner">
              <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
                <Image
                  src="/vectors/location.svg"
                  alt="ROI"
                  width={60}
                  height={60}
                />
                <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                  Best Location
                </span>
              </div>
              <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
                <p className="text-center text-[var(--theme-blue)]">
                  Experience unparalleled luxury living around Sanford
                  International School in the prestigious Kebena district.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-[350px] h-[210px] select-none">
            <div className="card-inner">
              <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
                <Image
                  src="/vectors/design.svg"
                  alt="Sophisticated Design"
                  width={60}
                  height={60}
                />
                <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                  Sophisticated Design
                </span>
              </div>
              <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
                <p className="text-center text-[var(--theme-blue)]">
                  Each apartment is meticulously designed with high-quality
                  imported finishing materials from Europe, ensuring timeless
                  elegance and luxury.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-[350px] h-[210px] select-none">
            <div className="card-inner">
              <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
                <Image
                  src="/vectors/amenities.svg"
                  alt="ROI"
                  width={60}
                  height={60}
                />
                <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                  Modern Amenities
                </span>
              </div>
              <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
                <p className="text-center text-[var(--theme-blue)]">
                  Enjoy a commercial-size gymnasium, heated swimming pool, 24/7
                  automatic backup generator, ground water supply, steam sauna
                  room, and a rooftop terrace with garden and 360-degree city
                  and mountain views.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:gap-14 gap-5 justify-center w-full flex-wrap">
          <div className="card w-[350px] h-[210px] select-none">
            <div className="card-inner">
              <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
                <Image
                  src="/vectors/security.svg"
                  alt="ROI"
                  width={60}
                  height={60}
                />
                <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                  Safety and Security
                </span>
              </div>
              <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
                <p className="text-center text-[var(--theme-blue)]">
                  Advanced features include fire alarms, smoke detectors, CCTV
                  cameras, and 24/7 security guards.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-[350px] h-[210px] select-none">
            <div className="card-inner">
              <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
                <Image
                  src="/vectors/kitchen.svg"
                  alt="ROI"
                  width={60}
                  height={60}
                />
                <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                  Fully Equipped Kitchen
                </span>
              </div>
              <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
                <p className="text-center text-[var(--theme-blue)]">
                  The modern kitchen is perfect for culinary enthusiasts,
                  featuring high-end appliances and design.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-[350px] h-[210px] select-none">
            <div className="card-inner">
              <div className="card-front flex flex-col items-center justify-evenly gap-6 bg-[var(--card-color)] border-[var(--theme-red)] px-5 py-7 rounded-sm  border-[4px]">
                <Image
                  src="/vectors/roi.svg"
                  alt="ROI"
                  width={60}
                  height={60}
                />
                <span className="text-lg text-center text-[var(--theme-red)] font-semibold">
                  Guaranteed Return on Investment
                </span>
              </div>
              <div className="card-back bg-[var(--theme-red)] border-[var(--theme-blue)] px-5 py-7 rounded-sm  border-[4px] flex items-center justify-center">
                <p className="text-center text-[var(--theme-blue)]">
                  Ideal for investors, with connections to expat communities and
                  proximity to international organizations like the German,
                  Belgian, British, Russian, Italian, and Kenyan Embassies, and
                  UN and GIZ offices in Kasanchis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
