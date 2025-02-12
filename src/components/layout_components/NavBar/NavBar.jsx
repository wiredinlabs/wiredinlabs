"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedCircle from "./_navbar_components/AnimatedCircle";

const NavBar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Update active section based on viewport
      const sections = [
        { id: "/", ref: document.getElementById("about") },
        { id: "#services", ref: document.getElementById("services") },
        { id: "#works", ref: document.getElementById("works") },
        { id: "/blog", ref: document.getElementById("blog") },
      ];

      for (const section of sections) {
        if (section.ref) {
          const rect = section.ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`text-black h-[17vh] w-full flex justify-between bg-black items-center px-20 py-1 fixed top-0 shadow-md z-50 transition-transform duration-1000 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div>
        <Image
          src="/images/wired_in_labs_logo.png"
          alt="wired_in_labs_logo"
          width={89}
          height={89}
        />
      </div>

      {/* Navigation Routes */}
      <div className="flex justify-between items-center gap-16">
        <Link href="/">
          <AnimatedCircle isActive={activeSection === "/"}>
            About
          </AnimatedCircle>
        </Link>
        <Link href="/#services">
          <AnimatedCircle isActive={activeSection === "#services"}>
            Services
          </AnimatedCircle>
        </Link>
        <Link href="/#works">
          <AnimatedCircle isActive={activeSection === "#works"}>
            Works
          </AnimatedCircle>
        </Link>
        <Link href="/blog">
          <AnimatedCircle isActive={activeSection === "/blog"}>
            Blog
          </AnimatedCircle>
        </Link>
      </div>

      {/* Contact Button */}
      <div
        className="flex justify-center items-center text-black bg-[#E4ED05] border-2  rounded-3xl px-4 py-1 text-xl font-medium cursor-pointer 
    hover:bg-black border-[#E4ED05] hover:text-white transition-all duration-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] shadow-[#E4ED05]"
      >
        Contact Us
      </div>
    </div>
  );
};

export default NavBar;
