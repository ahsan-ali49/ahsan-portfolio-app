import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import TabNavigation from "./_components/TabNavigation";

const inter = Inter({ subsets: ["latin"] });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ahsan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Navbar />
        <div className="md:px-[100px]">
          <HeroSection />
          <TabNavigation />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
