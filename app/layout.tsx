import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import { poppinsNormal } from "@/components/Fonts";
export const metadata: Metadata = {
  title:
    "Dream House Real Estate | Your Trusted Partner in Finding Perfect Homes in Addis Ababa",
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
        <NavBar />

        <main className="">{children}</main>
        <FloatingAction />
        <Footer />
      </body>
    </html>
  );
}
