import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jimin's CSS House",
  description: "CSS STUDY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
