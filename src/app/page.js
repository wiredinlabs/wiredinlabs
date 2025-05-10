"use client";

import { useState } from "react";
import AboutSection from "@/components/home_components/About/AboutSection";
import ServicesSection from "@/components/home_components/Services/ServicesSection";
import WorksSection from "@/components/home_components/Works/WorksSection";
import ContactUsSection from "@/components/home_components/ContactUs/ContactUsSection";
import BlogsSection from "@/components/home_components/Blogs/BlogsSection";
import Loader from "@/components/loader";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-geist-sans)] mt-[10vh]">
      {showLoader && (
        <Loader onFinish={() => setShowLoader(false)} />
      )}

      {/* Page content shows even if loader is fading out */}
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <BlogsSection />
      {/* <ContactUsSection /> */}
    </div>
  );
}
