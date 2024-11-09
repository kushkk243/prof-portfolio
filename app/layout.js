import localFont from "next/font/local";
import { Afacad } from "next/font/google";
import "./globals.css";
import { injectSpeedInsights } from "@vercel/speed-insights/*";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const afacad = localFont({
  src: "./fonts/AfacadFlux.ttf"
});

export const metadata = {
  title: "Kush Kumar Kushwaha",
  description: "Kush Kumar Kushwaha's Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${afacad.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
