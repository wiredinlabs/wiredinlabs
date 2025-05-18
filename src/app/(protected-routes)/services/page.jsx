"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "../../../components/home_components/Services/services-section.css";

gsap.registerPlugin(ScrollTrigger);

const ServicesSectionV2 = () => {
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    "UX Research",
    "Web Dev",
    "Branding",
    "App Dev",
    "UI Design",
  ];

  const ITEM_HEIGHT = 100; // px

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // On scroll, find the closest item to container center
    const onScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      serviceRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - containerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", onScroll);
    onScroll();

    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // Animate scale + opacity of active item on activeIndex change
  useEffect(() => {
    serviceRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        opacity: i === activeIndex ? 1 : 0.3,

        duration: 0.3,
        ease: "power1.out",
      });
    });
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] overflow-y-scroll bg-[#E4ED05] text-black relative"
      //   style={{ scrollSnapType: "y mandatory" }}
    >
       <div
        className="fixed top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 transition-transform duration-300 ease-in-out"
        // style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg
          viewBox="0 0 177 164"
          className="w-20 h-20 md:w-24 md:h-24 lg:w-44 lg:h-44 fill-current"
        >
          <path
            opacity="0.95"
            d="M80.6 134.8L56.6 163.6L21.4 137.2L46.2 102C50.2 96.4 58.6 96.4 65.4 94.4L62.2 84C55.4 86 48.6 91.2 42.2 88.8L0.200001 73.6L15 32L53.8 44.4C60.2 46.8 62.6 55.2 66.6 60.8L75.8 54.4C71.8 48.8 64.6 43.6 65 36.8L65.8 -2.38419e-05H109.8L111 36.8C111 43.6 104.2 48.8 100.2 54.4L109 60.8C113 55.2 115.4 46.8 122.2 44.4L160.6 32L176.6 73.6L133.8 88.8C127 91.2 120.2 86 113.4 84L110.2 94.4C117 96.4 125.4 96.4 129.8 101.6L156.2 137.2L121 163.6L95.4 134.4C91 129.2 93.4 121.2 93.4 114.4H82.2C82.2 121.2 85 129.2 80.6 134.8Z"
            fill="black"
          />
        </svg>
      </div> 
      <div
        className="flex flex-col items-end text-[180px] "
        style={{
          paddingTop: `calc(50vh - ${ITEM_HEIGHT / 2}px)`,
          paddingBottom: `calc(50vh - ${ITEM_HEIGHT / 2}px)`,
        }}
      >
        {services.map((service, i) => (
          <div
            key={service}
            ref={(el) => (serviceRefs.current[i] = el)}
            className="font-[800] text-black select-none relative"
          >
            {service} <span className="ml-2 text-[50px]">0{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSectionV2;
