import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DATA } from "@/data/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: DATA.title,
  description:
    DATA.description,
  authors: {
    name: "Tom Rives",
    url: "https://tomrives.me",
  },
  keywords: [
    "Game Server Tracker",
    "Minecraft",
    "Minecraft server",
    "Minecraft bedrock server",
    "Minecraft API",
    "Source",
    "GTA V",
    "FiveM",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
