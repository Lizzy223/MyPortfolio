import { Raleway } from "next/font/google";
import "./globals.css";

export const raleway = Raleway({ subsets: ["latin"] , variable: '--font-raleway',weight: '400',});

export const metadata = {
  title: "Lizzie portfolio",
  description: "Created with love ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <main className={raleway.variable}>
          {children}
        </main>
      </body>
    </html>
  );
}
