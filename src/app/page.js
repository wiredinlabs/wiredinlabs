"use client";

import Image from "next/image";
import AboutSection from "@/components/home_components/About/AboutSection";
import ServicesSection from "@/components/home_components/Services/ServicesSection";
import WorksSection from "@/components/home_components/Works/WorksSection";
import ContactUsSection from "@/components/home_components/ContactUs/ContactUsSection";
import BlogsSection from "@/components/home_components/Blogs/BlogsSection";
import Loader from "@/components/loader";

export default function Home() {

  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-geist-sans)] mt-[10vh]">
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-inherit transition-opacity duration-500">
        <Loader />
      </div>

      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <BlogsSection />
      {/* <ContactUsSection /> */}
    </div>
  );
}
