import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { Suspense } from "react";
import Loading from "./loading";
import localFont from "next/font/local";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const preahvihear = localFont({
  src: "../../public/fonts/Preahvihear-Regular.ttf",
  variable: "--font-preahvihear",
});

export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "Home Page",
    description:
      "Home Page description lorem* ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://vercel.com",
    siteName: "Vercel",
    images: [
     {
       url: "http://localhost:3000/images/NextjsLogo.jpg",
      width: 1200, 
      height: 630,
      alt: "Vercel Open Graph Image",
     }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable}  ${preahvihear.variable} antialiased`} >
        <ErrorBoundary errorComponent={Error}>
          <NavbarComponent />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
