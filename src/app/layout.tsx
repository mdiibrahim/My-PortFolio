import type { Metadata } from "next";

import "./globals.css";
import { PT_Serif } from "next/font/google";
import Navbar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammad Ibrahim - MERN Developer & Meta Ads Specialist",
  description:
    "Explore the portfolio of Mohammad Ibrahim, a MERN stack developer, Meta ads expert, and founder of PoshKits. Specializing in full-stack development, building innovative solutions, and driving successful digital ad campaigns.",
  keywords: [
    "MERN developer",
    "Meta ads expert",
    "Full stack developer",
    "Portfolio",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Ibrahim portfolio",
    "PoshKits founder",
  ],
  authors: [{ name: "Mohammad Ibrahim", url: "https://github.com/mdiibrahim" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
          className="rounded-xl"
        />
      </head>
      <body className={`${ptSerif.className} antialiased`}>
        <div className="flex bg-primary text-secondary flex-col min-h-screen mx-auto">
          {/* Sticky Navbar */}
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>
          <main className="flex-grow">{children}</main>
          {/* Footer at the bottom */}
          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
