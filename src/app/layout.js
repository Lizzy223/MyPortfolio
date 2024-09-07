import { Raleway } from "next/font/google";
import "./globals.css";

export const inter = Raleway({ subsets: ["latin"] , variable: '--font-raleway'});

export const metadata = {
  title: "Lizzie portfolio",
  description: "Created with love ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
