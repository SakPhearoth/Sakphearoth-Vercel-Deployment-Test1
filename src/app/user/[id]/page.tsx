"use client";
import Loading from "@/app/loading";
import { UserDetailType } from "@/types/userType";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUsers] = useState<UserDetailType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || data); // Fallback if it's a plain array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="w-[90%] mx-auto">
      {loading ? (
        <Loading />
      ) : (
        <section className="w-full overflow-hidden dark:bg-gray-900 mt-10">
          <div className="flex flex-col">
            <Image
              width={1920}
              height={300}
              unoptimized
              src="https://www.0xkishan.com/_next/image?url=%2Fblogs%2Fnextjs%2Fhero.png&w=3840&q=75"
              alt="User Cover"
              className="w-full h-[500px] rounded-2xl"
            />

            <div className="sm:w-[80%] w-[90%] mx-auto flex">
              <Image
                src={user?.image || "/default-avatar.png"}
                width={128}
                height={128}
                unoptimized
                alt="User Profile"
                className="rounded-full lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] w-[7rem] h-[7rem] outline-2 outline-offset-2 outline-blue-500 relative lg:bottom-[5rem] sm:bottom-[4rem] bottom-[3rem]"
              />
              <h1 className="w-full text-left my-4 sm:mx-4 pl-4 text-gray-800 dark:text-white lg:text-4xl md:text-3xl sm:text-3xl text-xl">
                {user?.username.toUpperCase() || "User Name"}
              </h1>
            </div>

            <div className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 -top-4">
              <p className="w-fit text-gray-700 dark:text-gray-400 text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam debitis labore consectetur voluptatibus mollitia
                dolorem veniam omnis ut quibusdam minima sapiente repellendus
                asperiores explicabo, eligendi odit, dolore similique fugiat
                dolor, doloremque eveniet. Odit, consequatur. Ratione voluptate
                exercitationem hic eligendi vitae animi nam in, est earum culpa
                illum aliquam.
              </p>

              <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
                <div className="w-full flex sm:flex-row flex-col gap-2 justify-center">
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          First Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.firstName}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Last Name
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.lastName}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Date Of Birth
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.birthDate}
                        </dd>
                      </div>
                      <div className="flex flex-col py-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Gender
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.gender}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="w-full">
                    <dl className="text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                      <div className="flex flex-col pb-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Location
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.address
                            ? `${user.address.address}, ${user.address.city}, ${user.address.state}`
                            : "N/A"}
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Phone Number
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.phone || "N/A"}
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Email
                        </dt>
                        <dd className="text-lg font-semibold">
                          {user?.email || "N/A"}
                        </dd>
                      </div>
                      <div className="flex flex-col pt-3">
                        <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                          Website
                        </dt>
                        <dd className="text-lg font-semibold">
                          <a
                            href="https://techakim.com"
                            className="text-teal-500 hover:text-teal-600 transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://www.teclick.com
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="my-10 lg:w-[70%] md:h-[14rem] w-full h-[10rem]">
                  <h1 className="w-fit font-serif my-4 pb-1 pr-2 rounded-b-md border-b-4 border-blue-600 dark:border-b-4 dark:border-yellow-600 dark:text-white lg:text-4xl md:text-3xl text-xl">
                    My Location
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
