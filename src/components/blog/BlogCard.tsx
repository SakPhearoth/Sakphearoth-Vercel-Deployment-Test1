'use client';
import { PostType } from '@/types/postType';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function BlogCard() {
    const [, setBlogs] = useState<PostType[]>([]);
    const [query, setQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState<PostType[]>([]);

    const searchParams = useSearchParams()
    const router = useRouter()

    // useEffect(() => {
    //     const search = searchParams.get('search') || ''
    //     setQuery(search)
    //     console.log(search)

    //     const fetchData = async () => {
    //         const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`);
    //         const data = await res.json();
    //         setBlogs(data.posts)

    //         const result = search
    //       ? filteredBlogs.filter((u: PostType) =>
    //           u.title.toLowerCase().includes(search.toLowerCase())

    //         )
    //       : blogs
    //         setFilteredBlogs(result)
    //     }
    //     fetchData();
    // }, [blogs, filteredBlogs, query, searchParams]); 

    useEffect(() => {
        const search = searchParams.get('search') || ''
        setQuery(search)

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}posts`)
            .then(res => res.json())
            .then(data => {
                const blogList = data.posts || data // fallback if it's a plain array
                setBlogs(blogList)

                const result = search
                    ? blogList.filter((u: PostType) =>
                        u.title.toLowerCase().includes(search.toLowerCase())
                    )
                    : blogList
                setFilteredBlogs(result)
            })
    }, [searchParams])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setQuery(val)
        router.push(`/blog?search=${encodeURIComponent(val)}`)
    }

    return (
        <>
            <div className='w-[90%] mx-auto mt-5'>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search by name..."
                    className="border p-2 w-full"
                />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[90%] mx-auto'>
                {
                    filteredBlogs.map((blog) => (
                        <div className="p-4 max-w-md" key={blog.id}>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <Image
                                    width={720}
                                    height={400}
                                    priority
                                    unoptimized
                                    className="h-48 w-full object-cover object-center"
                                    src={'https://cdn1.byjus.com/wp-content/uploads/2020/09/Science.png'}
                                    alt="blog"
                                />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg text-gray-900 mb-3 font-bold line-clamp-1">{blog.title}</h1>
                                    <p className="leading-relaxed mb-3 line-clamp-2">
                                        {blog.body}
                                    </p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    )
}
