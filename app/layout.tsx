import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RUGLY - Art to the Floor",
  description: "Ugly Rugs. Beautiful Mistakes. Custom floor art and designer rugs.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
