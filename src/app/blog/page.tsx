import BlogCard from "@/components/blog/BlogCard";
import React from "react";
import type { Metadata } from "next";

export default function blog() {
  return (<div><BlogCard/></div>);
}


export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "Blog Page",
    description:
      "Blog Page description lorem* ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://sakphearoth-vercel-deployment-test1.vercel.app/blog",
    siteName: "Vercel",
    images: [
     {
       url: "https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png",
      width: 1200, 
      height: 630,
      alt: "Blog Page Image",
     }
    ]
  },
};