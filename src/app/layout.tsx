import type { Metadata } from "next";
import "./globals.css";
import { sans } from "@/fonts"
import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Anh Do",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body
        className={`antialiased ${sans.className} w-screen min-h-screen flex flex-col font-light scrollbar-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
