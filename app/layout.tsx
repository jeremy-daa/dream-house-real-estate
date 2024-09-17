import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import { poppinsNormal } from "@/components/Fonts";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title:
    "Dream House Real Estate | Your Trusted Partner in Developing Perfect Homes in Addis Ababa",
  description:
    "Dream House Real Estate is a real estate company in Addis Ababa, Ethiopia. We provide services in property development, property management, and real estate consultancy. Our services are tailored to meet the needs of our clients. We are committed to delivering quality services and building long-term relationships with our clients. Contact us today for all your real estate needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsNormal.className}>
        <NavBar />
        <main className="">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {children}
          <FloatingAction />
        </main>
        <Footer />
      </body>
    </html>
  );
}
