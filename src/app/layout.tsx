import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Game Server Tracker",
  description:
    "A simplest way to track your game server (Minecraft, Source, GTA V).",
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
