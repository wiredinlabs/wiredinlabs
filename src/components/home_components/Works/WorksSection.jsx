"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import "./works-section.css"; // Import custom CSS for animation

export default function WorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const columnOneItems = [
    { id: 4, image: process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK + `images/2-ticket.png` },
    {
      id: 1,
      image: process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK + `images/painting-dynr.png`,
    },
  ];

  const columnTwoItems = [
    {
      id: 2,
      image: process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK + `images/1-tag-qissa.png`,
    },
    {
      id: 4,
      image: process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK + `images/poster-bfc.png`,
    },
  ];

  const columnThreeItems = [
    {
      id: 6,
      image: process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK + `images/phone-bfc.png`,
    },
    { id: 3, image: process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK + `images/1-watch.png` },
  ];

  const renderWorkItem = (work, key) => (
    console.log(key),
    (
      <div
        key={key}
        className={`work-item block group mb-12`}
        onMouseEnter={() => setHoveredIndex(work.id)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {/* <Link href={`/works/${work.id}`} className="block"> */}
        <div className="relative overflow-hidden">
          <div className="relative aspect-[4/5]  overflow-hidden">
            {work.video ? (
              <video
                src={work.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={work.image}
                alt="Work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
            <div
              className={`absolute inset-0 bg-[#CCFF00] bg-opacity-0 transition-all duration-300 `}
            ></div>
          </div>
        </div>
        {/* </Link> */}
      </div>
    )
  );

  const renderTickerColumn = (items) => (
    <div className="ticker-column">
      <div className="ticker-track">
        {[...items, ...items].map((work, index) =>
          renderWorkItem({ ...work }, `${work.id}_${index}`)
        )}
      </div>
    </div>
  );

  return (
    <div id="works" className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-[120rem] mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mr-3 md:mr-6 tracking-tighter">
            Our Works
          </h2>
          <svg
            className="star-icon"
            viewBox="0 0 79 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.95"
              d="M35.882 60.486L25.202 73.302L9.538 61.554L20.574 45.89C22.354 43.398 26.092 43.398 29.118 42.508L27.694 37.88C24.668 38.77 21.642 41.084 18.794 40.016L0.104001 33.252L6.69 14.74L23.956 20.258C26.804 21.326 27.872 25.064 29.652 27.556L33.746 24.708C31.966 22.216 28.762 19.902 28.94 16.876L29.296 0.499989H48.876L49.41 16.876C49.41 19.902 46.384 22.216 44.604 24.708L48.52 27.556C50.3 25.064 51.368 21.326 54.394 20.258L71.482 14.74L78.602 33.252L59.556 40.016C56.53 41.084 53.504 38.77 50.478 37.88L49.054 42.508C52.08 43.398 55.818 43.398 57.776 45.712L69.524 61.554L53.86 73.302L42.468 60.308C40.51 57.994 41.578 54.434 41.578 51.408H36.594C36.594 54.434 37.84 57.994 35.882 60.486Z"
              fill="#E4ED05"
            />
          </svg>
          <div className="flex-grow h-px bg-gray-800 ml-8 hidden md:block"></div>
        </div>

        {/* Desktop ticker */}
        <div
          className="hidden md:flex gap-8 overflow-hidden"
          style={{ height: "900px" }}
        >
          {renderTickerColumn(columnOneItems)}
          {renderTickerColumn(columnTwoItems)}
          {renderTickerColumn(columnThreeItems)}
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden">
          {[...columnOneItems, ...columnTwoItems, ...columnThreeItems].map(
            (work, i) => renderWorkItem(work, `m-${work.id}-${i}`)
          )}
        </div>

        {/* View All Works */}
        <div className="mt-24 text-center">
          <Link
            href="\works"
            className="inline-flex items-center border border-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black group"
          >
            <span className="mr-3">View All Works</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M17 8L21 12M21 12L17 16M21 12H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
