import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Rugly | Custom-Painted Rugs",
  description: "Transform your space with hand-painted, customized rugs. Upload your design and we'll bring it to life on a high-quality base.",
  openGraph: {
    title: "Rugly | Custom-Painted Rugs",
    description: "Hand-painted, customized rugs for unique spaces.",
    url: "https://ruglyfloor.com",
    siteName: "Rugly",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Rugly Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>{children}</body>
    </html>
  );
}
