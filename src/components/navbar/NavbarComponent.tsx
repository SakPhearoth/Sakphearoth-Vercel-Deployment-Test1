// import Image from 'next/image'
'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MenuItems } from './menu';
import { Button } from '../ui/button';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/redux/hooks';

export default function NavbarComponent() {
    const pathname = usePathname();
    const { itemsCount } = useAppSelector((state) => state.cart) // Total items in cart 
    return (
        <nav className="w-[90%] mx-auto relative flex items-center justify-between sm:h-10 md:justify-center py-6 px-4 mt-2">
            <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="font-bold text-xl text-gray-900">
                        <Link href="/">MyLogo</Link>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
                {
                    MenuItems.map((item, index) => (
                        <Link key={index} href={item.path}
                            className={`${pathname === item.path ? 'text-blue-500' : ''} `}>
                            {item.name}
                        </Link>
                    ))

                }
                <Link href="/register" className={`${pathname === '/auth/register' ? 'text-blue-500' : ''}`}>
                    Register
                </Link>
                
                <Button variant="ghost" size="icon" className="relative">
                    <ShoppingCart className="h-5 w-5" />
                    {/* Show badge only if there are items in cart */}
                    {itemsCount > 0 && (
                        <span
                            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-600 text-white rounded-full">
                            {itemsCount}
                        </span>
                    )}
                </Button>
            </div>
        </nav>
    )
}
