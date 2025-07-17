import AboutPage from "@/components/about/AboutPage";
import React from "react";
import type { Metadata } from "next";

export default function page() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "About Page",
    description:
      "About Page description lorem* ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://sakphearoth-vercel-deployment-test1.vercel.app/about",
    siteName: "Vercel",
    images: [
      {
        url: "https://static.vecteezy.com/system/resources/thumbnails/036/290/329/small_2x/about-us-metaphor-company-information-flat-illustration-template-business-profile-office-information-customer-support-our-team-about-company-vector.jpg",
        width: 1200,
        height: 630,
        alt: "About Page Image",
      },
    ],
  },
};
