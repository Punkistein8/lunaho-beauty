'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import PageTitle from "./components/pagetitle/PageTitle";
import Socials from "./components/socials/Socials";
import { Suspense } from "react";
import MadeBy from "./components/footer/MadeBy.jsx";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageTitle />
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
          {children}
        </Suspense>

        <Socials />
        <MadeBy />
      </body>
    </html>
  );
}
