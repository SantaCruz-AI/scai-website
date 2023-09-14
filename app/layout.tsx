import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>
        <div>
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
