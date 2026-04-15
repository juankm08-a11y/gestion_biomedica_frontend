import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/ui/navbar/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Software de gestion de equipos biomedicos",
  description:
    "Es un software de equipos biomedicos hecho en Python + JavaScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn("font-sans", geist.variable)}>
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
