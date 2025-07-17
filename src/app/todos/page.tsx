import TodoComponent from '@/components/todos/ToDoComponent';
import { TodoType } from '@/types/todoType';
import React, { Suspense } from 'react'
import type { Metadata } from "next";

async function getTodo(): Promise<TodoType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}todos`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  // console.log(data.todos as TodoType[]);
  return data.todos as TodoType[];
}

// Todos Page
export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "Todos Page",
    description:
      "Todos Page description lorem* ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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

export default function page() {
  const todos = getTodo();
  return (
    <div className='flex justify-center items-center h-screen'>
      <Suspense fallback={<div>Loading...</div>}>
      <TodoComponent
        todos={todos}
      /></Suspense>

    </div>
  )
}
