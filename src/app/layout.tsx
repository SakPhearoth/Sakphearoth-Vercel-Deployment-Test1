import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { Suspense } from "react";
import Loading from "./loading";
import NavbarWrapper from "@/components/navbar/NavbarWrapper";


const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const preahvihear = localFont({
  src: "../../public/fonts/Preahvihear-Regular.ttf",
  variable: "--font-preahvihear",
})

export const metadata: Metadata = {
  title: "Home",
  description: "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  keywords: ["Next.js", "Fullstack", "Vercel", "AI Cloud", "Web Development"],
  openGraph: {
    title: "Home",
    description: "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
    url: "https://nextjs-fullstack-evening.vercel.app/",
    siteName: "Home",
    images: [
      {
        url: "https://i.ytimg.com/vi/6jQdZcYY8OY/maxresdefault.jpg",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${preahvihear.variable} antialiased`}
      >
        <ErrorBoundary errorComponent={Error}>
          <NavbarWrapper />
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}


