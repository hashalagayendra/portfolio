import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Hashala Gayendra",
  description: "Portfolio of Hashala Gayendra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ position: "relative" }}>
        <Navbar />
        <SmoothScroll>
          <main className="pt-24">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
