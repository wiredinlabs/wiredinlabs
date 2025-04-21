"use client";
import React, { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("UX Research");
  const [isFullyVisible, setIsFullyVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const services = [
    "UX Research",
    "Web Development",
    "Branding",
    "App Development",
    "UI Design",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current || !contentRef.current) return;
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollProgress =
        -wrapperRect.top / (wrapperRect.height - viewportHeight);
      const serviceIndex = Math.min(
        Math.floor(scrollProgress * services.length),
        services.length - 1
      );

      const newService = services[Math.max(0, serviceIndex)];
      const scrollDirection = window.scrollY > lastScrollY ? "down" : "up";

      if (newService !== activeService) {
        setActiveService(newService);
        setRotation((prev) => prev + (scrollDirection === "down" ? 70.7 : -70.7));
      }

      setLastScrollY(window.scrollY); // Update last scroll position

      const isFullyInView =
        wrapperRect.top <= 0 && wrapperRect.bottom >= viewportHeight;
      setIsFullyVisible(isFullyInView);

      if (isFullyInView) {
        contentRef.current.style.position = "fixed";
        contentRef.current.style.top = "0";
        contentRef.current.style.width =
          contentRef.current.parentElement.offsetWidth + "px";
      } else if (wrapperRect.top > 0) {
        contentRef.current.style.position = "absolute";
        contentRef.current.style.top = "0";
      } else {
        contentRef.current.style.position = "absolute";
        contentRef.current.style.top =
          wrapperRect.height - contentHeight + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeService, services.length, lastScrollY]);

  return (
    <div
      id="services"
      ref={wrapperRef}
      className="relative w-full bg-black"
      style={{ height: `${100 * 2}vh` }}
    >
      <div ref={contentRef} className="w-full">
        <div
          className={`
            ${isFullyVisible ? "min-h-screen" : "min-h-[90vh] mt-12"}
            bg-[#E4ED05] text-black relative
            transition-all duration-300 ease-in-out
            ${isFullyVisible ? "mx-0 rounded-none" : "mx-4 md:mx-8 lg:mx-14 rounded-3xl"}
            flex flex-col justify-center
          `}
        >
          {/* Rotating Star Icon */}
          {/* <div
            className="absolute top-4 md:top-6 lg:top-8 left-4 md:left-6 lg:left-8 transition-transform duration-300 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
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
          </div> */}

          {/* Services List */}
          <div className="flex flex-col justify-center min-h-[60vh] lg:min-h-[85vh] py-8 md:py-12 lg:py-16 px-6 md:px-8 lg:px-12">
            <div className="flex flex-col items-center lg:items-end gap-16 md:gap-20 lg:gap-[70px]">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`
                    leading-none font-bold transition-all duration-300 relative
                    ${
                      activeService === service
                        ? "text-black text-[38px] sm:text-[70px] md:text-[85px] lg:text-[100px] font-bold tracking-tighter opacity-100"
                        : "text-black/30 text-[30px] sm:text-[40px] md:text-[60px] lg:text-[70px] font-bold tracking-tighter opacity-70"
                    }
                  `}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
