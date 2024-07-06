import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TemplateName",
  description: "TemplateName",
};

export default function TemplateNameRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className={inter.className}>{children}</section>;
}
