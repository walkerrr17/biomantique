import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biomantique",
  description: "Um Projeto Fortec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}