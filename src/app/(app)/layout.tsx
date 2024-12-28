import "@/app/globals.css";
import { sans } from "@/fonts"
import Navbar from "@/components/navbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className={`antialiased ${sans.className} min-h-screen w-screen flex flex-col font-light bg-white scrollbar-hidden`}>
      <Navbar/>
      {children}
    </div>
  );
}
