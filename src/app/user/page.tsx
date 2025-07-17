import UserCard from '@/components/user/UserCard'
import React from 'react'
import type { Metadata } from "next";

export default function page() {
  return (
    <main className='w-[90%] mx-auto' >
      <UserCard />
    </main>
  )
}

//User
export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "User Page",
    description:
      "Blog Page description lorem* ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "https://sakphearoth-vercel-deployment-test1.vercel.app/user",
    siteName: "Vercel",
    images: [
     {
       url: "https://miro.medium.com/v2/resize:fit:1400/1*lgvCXzD-iI1S5ygZ6rPMOA.jpeg",
      width: 1200, 
      height: 630,
      alt: "User Page Image",
     }
    ]
  },
};