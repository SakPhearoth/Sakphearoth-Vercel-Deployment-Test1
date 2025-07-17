import BlogCard from "@/components/blog/BlogCard";
import React from "react";
import type { Metadata } from "next";

export default function blog() {
  return (<div><BlogCard/></div>);
}

// Blog
export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "Blog Page",
    description:
      "Blog Page description lorem* ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://vercel.com",
    siteName: "Vercel",
    images: [
     {
       url: "https://vercel.com/og.png",
      width: 1200, 
      height: 630,
      alt: "Vercel Open Graph Image",
     }
    ]
  },
};