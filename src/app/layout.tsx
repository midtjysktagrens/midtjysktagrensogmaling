import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skave tag og facader",
  description:
    "Skave tag og facader er en dansk virksomhed, der specialiserer sig i tag- og facadearbejde. Vi tilbyder professionelle løsninger til både private og erhvervskunder, herunder tagrenovering, facaderenovering og vedligeholdelse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
