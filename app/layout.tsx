import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import NavBar from "@/components/NavBar";
import Image from "next/image";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UCSC Artificial Intelligence",
  description: "SCAI Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;900&display=swap"
        rel="stylesheet"
      />
      <body className={font.className}>
        <div className="">
          <NavBar />
          <img
            src="/scai-header.jpg"
            alt=""
            className="h-[50vh] w-full mt-[-6rem]"
          />

          {children}
        </div>
      </body>
    </html>
  );
}
