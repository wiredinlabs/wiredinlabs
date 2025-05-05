"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedCircle from "./_navbar_components/AnimatedCircle";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true); // Ensure navbar resets when route changes
    
    // Update active section based on current path
    if (pathname === "/") {
      setActiveSection("/");
    } else if (pathname.includes("/blog")) {
      setActiveSection("#blog");
    } else {
      setActiveSection(""); // No section active for other pages
    }
  }, [pathname]);
  
  const [activeSection, setActiveSection] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Only handle scroll-based section detection on the homepage
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const servicesSection = document.getElementById("services");
      const worksSection = document.getElementById("works");

      if (servicesSection && worksSection) {
        const servicesRect = servicesSection.getBoundingClientRect();
        const worksRect = worksSection.getBoundingClientRect();
        const sectionHeight = servicesRect.height;
        const visibleHeight = Math.min(
          window.innerHeight - servicesRect.top,
          sectionHeight
        );
        const visiblePercentage = (visibleHeight / sectionHeight) * 100;

        if (
          worksRect.top > 0 &&
          visiblePercentage >= 50 &&
          servicesRect.top <= window.innerHeight
        ) {
          setIsVisible(false);
        } else {
          if (currentScrollY <= lastScrollY || currentScrollY <= 50) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      }

      setLastScrollY(currentScrollY);

      // Update active section based on viewport - only on homepage
      const sections = [
        { id: "/", ref: document.getElementById("about") },
        { id: "#services", ref: document.getElementById("services") },
        { id: "#works", ref: document.getElementById("works") },
        { id: "#contact", ref: document.getElementById("contact") },
        { id: "#blog", ref: document.getElementById("blog") },
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
  }, [lastScrollY, pathname]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Function to determine if a link should be active
  const isLinkActive = (linkPath) => {
    // For homepage sections
    if (pathname === "/" && activeSection === linkPath) {
      return true;
    }
    
    // For blog pages
    if (linkPath === "#blog" && pathname.includes("/blog")) {
      return true;
    }
    
    return false;
  };

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link href="/" onClick={mobile ? closeSidebar : undefined}>
        <AnimatedCircle isActive={isLinkActive("/")}>About</AnimatedCircle>
      </Link>
      <Link href="/#services" onClick={mobile ? closeSidebar : undefined}>
        <AnimatedCircle isActive={isLinkActive("#services")}>
          Services
        </AnimatedCircle>
      </Link>
      <Link href="/#works" onClick={mobile ? closeSidebar : undefined}>
        <AnimatedCircle isActive={isLinkActive("#works")}>
          Works
        </AnimatedCircle>
      </Link>
      <Link href="/#blog" onClick={mobile ? closeSidebar : undefined}>
        <AnimatedCircle isActive={isLinkActive("#blog")}>
          Blog
        </AnimatedCircle>
      </Link>
    </>
  );

  return (
    <>
      <div
        className={`text-black w-full flex justify-between bg-black items-center px-4 md:px-8 lg:px-20 py-1 fixed top-0 shadow-md z-50 transition-transform duration-1000 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between w-full h-[17vh]">
          {/* Logo Container - Left on desktop, center on mobile */}
          <div className="md:w-auto w-full flex md:justify-start justify-center">
            <Link href="/">
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK}images/wired_in_labs_logo.png`}
                alt="wired_in_labs_logo"
                width={89}
                height={89}
              />
            </Link>
          </div>

          {/* Navigation Links - hidden on mobile, visible and centered on desktop */}
          <div className="hidden md:flex justify-center items-center gap-8 lg:gap-16">
            <NavLinks />
          </div>

          {/* Contact Button - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex justify-end">
            <Link href="/#contact">
              <div className="flex justify-center items-center text-black bg-[#E4ED05] border-[3px] px-[12px] py-1 text-xl font-medium cursor-pointer hover:bg-black border-[#E4ED05] hover:text-white transition-all duration-500">
                Contact Us
              </div>
            </Link>
          </div>

          {/* Hamburger Menu - visible on mobile, hidden on desktop */}
          <div className="md:hidden absolute right-4">
            <button
              onClick={toggleSidebar}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-black z-[60] transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={closeSidebar}
              aria-label="Close menu"
              className="text-white focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 mt-12">
            <NavLinks mobile={true} />
            <Link href="/#contact" onClick={closeSidebar}>
              <div className="flex justify-center items-center text-black bg-[#E4ED05] border-[3px] px-[12px] py-1 text-xl font-medium cursor-pointer hover:bg-black border-[#E4ED05] hover:text-white transition-all duration-500">
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default NavBar;