import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/shared/Footer";

export const metadata: Metadata = {
  title: "PLERS Corporation",
  description: "플링크",
  icons: {
    icon: "/symbol.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
