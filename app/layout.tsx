import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
    <html lang="en" className=" bg-gray-900">
      <body className={montserrat.className}>
        <div>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
