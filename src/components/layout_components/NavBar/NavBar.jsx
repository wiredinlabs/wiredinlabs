"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedCircle from "./_navbar_components/AnimatedCircle";

const NavBar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
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
  }, []);

  return (
    <div className="text-black h-[17vh] w-full flex justify-between bg-black items-center px-20 py-1 fixed top-0 shadow-md z-50">
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
      <div className="flex justify-center items-center text-black bg-[#E4ED05] rounded-3xl px-4 py-2 text-xl font-medium">
        Contact
      </div>
    </div>
  );
};

export default NavBar;
