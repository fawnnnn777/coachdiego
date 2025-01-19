import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/home/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Coach Diego"};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-main`}>
        <div className="flex h-screen box-border">
        <div className="fixed bottom-0 w-screen">
          <Navbar></Navbar>
        </div>
        <div className="h-full w-screen pb-20" >
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
