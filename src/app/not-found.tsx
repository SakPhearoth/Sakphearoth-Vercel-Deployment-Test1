import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="text-center animate-fadeIn ">
        <Image 
        width={320}
        height={320}
        unoptimized
        src="https://yemca-services.net/404.png" 
        alt="404 Illustration" 
        className="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg"
        />
        <h1 className="text-7xl font-extrabold text-blue-700 mt-6">Looks Like You&apos;re Lost!</h1>
        <p className="text-xl text-gray-700 mt-2">We can&apos;t seem to find the page you&apos;re looking for.</p>
        
        <Link href="/" className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700">Return Home</Link>
    </div>
    </div>
  )
}
