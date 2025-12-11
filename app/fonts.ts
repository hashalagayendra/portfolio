import { Geist, Geist_Mono, Anton, Adamina, Anybody } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const adamina = Anybody({
  weight: "400",
  variable: "--font-anybody",
  subsets: ["latin"],
});
