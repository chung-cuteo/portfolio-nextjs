import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dinh Quang Chung || Portfolio",
  description: "Frontend Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} bg-light text-black dark:text-white dark:bg-dark text-lg xl:text-xl`}
      >
        <a
          href="#content"
          className="absolute -left-[9999px] top-0 focus:left-4 focus:top-4 focus:w-auto focus:h-auto focus:px-3 focus:py-2 focus:bg-black focus:text-white focus:rounded focus:z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
        > 
          Skip to content
        </a>
        <Header />
        <main id="content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
