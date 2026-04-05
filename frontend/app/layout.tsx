import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/form/layout";

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
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
