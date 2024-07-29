import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import Bricks from "../components/Bricks/bricks";
import { NavBar } from "../components/NavBar/nav-bar";
import Footer from "../components/Footer/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Focacceria",
  description: "El sabor original",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full h-full flex flex-col",
          fontSans.variable
        )}
      >
        <Bricks>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </Bricks>
      </body>
    </html>
  );
}
