import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Subhan Abidi | Skilled Full Stack Engineer in USA",
  description:
    "Subhan Abidi, a skilled Full Stack Engineer in USA. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
  publisher: "Subhan Abidi",
  authors: [{ name: "Subhan Abidi", url: "https://github.com/subhanabdi" }],
  metadataBase: new URL("https://subhanabidi.tech"),
  openGraph: {
    title: "Subhan Abidi | Skilled Frontend Engineer in USA",
    description:
      "Subhan Abidi, a skilled Full Stack Engineer in USA. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
    url: "https://SubhanAbidi.tech",
    siteName: "Subhan Abidi",
    images: [
      {
        url: "/thumbnail.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhan Abidi | Skilled Full Stack Engineer in USA",
    description:
      "Subhan Abidi, a Skilled Full Stack Engineer in USA. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
    creator: "@subhan",
    images: ["/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
