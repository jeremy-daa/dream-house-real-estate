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
    "Dream House Real Estate, based in Addis Ababa, specializes in luxury property development. We deliver high-quality, innovative real estate solutions tailored to our clients' needs. Contact us for exceptional service and prime investment opportunities in Ethiopia's top locations.",
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
