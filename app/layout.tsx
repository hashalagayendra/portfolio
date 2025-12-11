import type { Metadata } from "next";
import "./globals.css";

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
      <body style={{ position: "relative" }}>{children}</body>
    </html>
  );
}
