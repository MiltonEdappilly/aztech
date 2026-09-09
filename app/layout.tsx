import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
  variable: "--font-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aztech — Everyday Tech, Reimagined",
  description:
    "Aztech designs interactive displays, GaN charging, mounts, and gaming gear for the way people actually use technology.",
  metadataBase: new URL("https://aztechmea.com"),
  openGraph: {
    title: "Aztech — Everyday Tech, Reimagined",
    description:
      "Interactive displays, GaN charging, mounts and gaming gear — engineered with restraint.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable}`}>
      <body className="grain antialiased">{children}</body>
    </html>
  );
}
