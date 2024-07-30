import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { Footer } from "@/components/Footer";

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Signerpro",
  description: "Gráfica digital",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
