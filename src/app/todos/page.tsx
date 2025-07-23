import TodoComponent from "@/components/todos/ToDoComponent";
import { TodoType } from "@/types/todoType";
import React, { Suspense } from "react";
import type { Metadata } from "next";

async function getTodo(): Promise<TodoType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}todos`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.todos as TodoType[];
}

export const metadata: Metadata = {
  title: "Vercel Deployment",
  description:
    "Build and deploy on the AI Cloud. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.",
  openGraph: {
    title: "Todos Page",
    description:
      "Todos Page description lorem ipsum dolor sit amet...",
    url: "https://sakphearoth-vercel-deployment-test1.vercel.app/todos",
    siteName: "Vercel",
    images: [
      {
        url: "https://startinfinity.s3.us-east-2.amazonaws.com/production/blog/post/15/main/xXMabYYezGITsPPA8PduAZXEmXvz0Xr71FEQGqy4.png",
        width: 1200,
        height: 630,
        alt: "Todo Page Image",
      }
    ],
  },
};

export default function page() {
  const todos = getTodo();
  return (
    <div className="flex justify-center pt-12 px-4 pb-20">
      <Suspense fallback={<div>Loading...</div>}>
        <TodoComponent todos={todos} />
      </Suspense>
    </div>
  );
}
