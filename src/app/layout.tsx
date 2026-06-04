import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorPage from "./error";

// ✅ these were missing
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iShop — Your Store",
  description: "Browse and manage your products",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white flex flex-col antialiased">
        
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />
        </div>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
          <Navbar />
        </header>

        <main className="flex-1 w-full">
          <ErrorBoundary errorComponent={ErrorPage}>
            {children}
          </ErrorBoundary>
        </main>

        <footer className="border-t border-white/10">
          <Footer />
        </footer>

      </body>
    </html>
  );
}