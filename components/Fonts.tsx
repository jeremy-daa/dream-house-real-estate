import { Poppins } from "next/font/google";

const poppinsNormal = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: "700",
});

const poppinsLight = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export { poppinsNormal, poppinsBold, poppinsLight };
