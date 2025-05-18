"use client";

import { useState, useEffect } from "react";
import AboutSection from "@/components/home_components/About/AboutSection";
import ServicesSection from "@/components/home_components/Services/ServicesSection";
import WorksSection from "@/components/home_components/Works/WorksSection";
import ContactUsSection from "@/components/home_components/ContactUs/ContactUsSection";
import BlogsSection from "@/components/home_components/Blogs/BlogsSection";
import Loader from "@/components/loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedHome");
    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem("hasVisitedHome", "true");
    }
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-geist-sans)] mt-[10vh]">
      {showLoader && (
        <Loader onFinish={() => setShowLoader(false)} />
      )}

      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <BlogsSection />
      {/* <ContactUsSection /> */}
    </div>
  );
}
