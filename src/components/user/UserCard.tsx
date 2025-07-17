'use client';
import Loading from '@/app/loading';
import { UserType } from '@/types/userType';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function UserCard() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data.users || data); // Fallback if it's a plain array
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch users:", err);
                setLoading(false);
            });
    }, [users]);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {loading ? (
                <Loading />
            ) : (
                users.map(user => (
                    <div key={user.id} className="w-full p-3 bg-gray-100">
                        <Link href={`/user/${user.id}`} className="block">
                            <div className="relative mx-auto mt-24">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <Image
                                                unoptimized
                                                alt={user.username}
                                                width={128}
                                                height={128}
                                                src={user.image || '/default-avatar.png'}
                                                className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1 text-gray-800">{user.username}</h1>
                                        <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal line-clamp-2">
                                            Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a
                                            wealth of experience in the corporate world, she has a proven track record of driving innovation and
                                            achieving remarkable business growth.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            )}
        </div>
    )
}
