import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Calculadora de Pace",
  description: "Calculadora de Pace",
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
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
