import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DigiDine",
  description: "QR code-based digital menu solution for restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-blue-300`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
