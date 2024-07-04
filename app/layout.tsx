import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title:
    "Dream House Real Estate | Your Trusted Partner in Finding Perfect Homes",
  description:
    "Discover your dream home with Dream House Real Estate. We specialize in buying, selling, and renting properties, offering expert advice and personalized service to help you find the perfect home. Contact us today to start your journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
