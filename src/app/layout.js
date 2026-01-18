import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "CarMarket - Premium Desktop Edition",
  description: "Experience the ultimate luxury of choice with our curated selection of high-performance vehicles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} font-display antialiased bg-base-100 text-base-content min-h-screen flex flex-col`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-grow max-w-7xl mx-auto px-6 w-full py-12 space-y-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
