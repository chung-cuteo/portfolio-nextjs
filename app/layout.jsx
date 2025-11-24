import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Dinh Quang Chung || Portfolio",
  description: "Frontend Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} bg-light text-black dark:text-white dark:bg-dark text-lg xl:text-xl`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
