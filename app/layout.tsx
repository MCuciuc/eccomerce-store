import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Sidebar from "@/components/sidebar";
import getCategories from "@/actions/get-categories";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen bg-gradient-to-br from-gray-50 to-white`}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        <Sidebar data={categories} />
        <main className="min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Footer />
        </main>
        </body>
    </html>
  );
}
