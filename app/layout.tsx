import "./globals.css";
import { Metadata } from "next";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "Daniel Melchor",
  description: "A personal collection of ideas and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  "use client";
  return (
    <html lang="en">
      <body>
        <Page>{children}</Page>
      </body>
    </html>
  );
}
