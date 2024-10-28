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
  title: "Signerpro - Gráfica Digital",
  description: "Bem-vindo à Signerpro, sua gráfica digital de confiança. Especializada em comunicação visual, personalização de veículos, camisetas e quadros decorativos, oferecemos soluções completas e personalizadas para destacar a sua marca e o seu estilo.",
  authors: {
    name: "CODEBORGES",
    url: "https://www.codeborges.com/",
  },
  robots: "index, follow",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-gray-200`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
