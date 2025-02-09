import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout_components/NavBar/NavBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Wired-In Labs",
  description: "Unplug the Old, Wire in the New",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
