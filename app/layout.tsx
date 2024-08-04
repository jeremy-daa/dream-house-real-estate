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
import AuthProvider from "@/context/AuthProvider";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title:
    "Dream House Real Estate | Your Trusted Partner in Developing Perfect Homes in Addis Ababa",
  description:
    "Discover your dream home with Dream House Real Estate. We specialize in buying, selling, and renting properties all around Addis Ababa, Ethiopia, offering expert advice and personalized service to help you find the perfect home. Contact us today to start your journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppinsNormal.className}>
        <AuthProvider>
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
          </main>
          <FloatingAction />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
