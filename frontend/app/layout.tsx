import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

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
        <div className="flex justify-center p-10">
          <div className="w-[1400px] min-h-[700px] bg-white border-4 border-red-600 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
