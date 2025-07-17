"use client";
import Image from "next/image";

import React from "react";

export default function AboutPage() {
  return (
    <div className="sm:flex items-center max-w-screen-xl mt-5">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <Image
            width={400}
            height={400}
            priority
            unoptimized
            className="h-auto w-full object-cover object-center"
            src={"https://i.imgur.com/WbQnbas.png"}
            alt="about"
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In rem
            ducimus voluptatem similique architecto? Ut, nulla ipsam natus sed
            error reprehenderit nam, voluptatem, eum voluptates iusto maxime.
            Tenetur, voluptatibus animi! Sequi incidunt odit ab tempore quidem
            iure quas temporibus, qui libero consequuntur molestiae ipsum
            laboriosam perferendis pariatur cum accusamus saepe repudiandae iste
            ipsa nostrum odio expedita dolorum omnis. Reprehenderit, dolore?
          </p>
        </div>
      </div>
    </div>
  );
}
