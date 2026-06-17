import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TalentLens AI",
  description:
    "AI-powered resume intelligence platform for recruiters and hiring teams.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Toaster richColors />
      <body
        className="
        min-h-screen
        bg-[#050505]
        text-white
        antialiased
    "
      >
        {children}
      </body>
    </html>
  );
}
