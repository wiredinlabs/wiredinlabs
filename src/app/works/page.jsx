"use client";
import ContactUsSection from "@/components/home_components/ContactUs/ContactUsSection";
import { useState } from "react";

const works = [
  {
    id: 1,
    image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/qissa_laptop.jpg",
    title: "Qissa",
    description: "Qissa is a modern e-commerce platform built by Wired In that brings South Asian storytelling to life through thoughtfully curated products. We crafted a seamless shopping experience with a focus on design, performance, and cultural authenticity.",
    category: "WEB DESIGN + SHOPIFY",
    url: "https://qissa.shop" 
    // date: "01.01.01",
  },
  {
    id: 2,
    image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bioforce_phone.jpg",
    title: "BioForce Guide",
    description: "Bioforce Guide is a farmer-focused mobile app designed and developed by Wired In for one of Pakistan's leading pesticide brands. We crafted the full UI/UX and built the app to deliver trusted information on crops, pests, and pesticides, real-time weather updates, and a direct line for farmers to connect with the company—simple, smart, and accessible.",
    category: "UI/UX + DEVELOPMENT",
    url: "https://play.google.com/store/apps/details?id=com.bioforce.app&hl=en"  
  },
  {
    id: 3,
    image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/dynr_laptop.jpg",
    title: "DYNR",
    description: "Dynr is a personalized food recommendation app that helps users discover what to eat based on their unique palate. Wired In led the branding and crafted the full UI/UX, creating a clean, intuitive experience that blends smart food suggestions with real restaurant reviews—making every dining decision easier and more personal.",
    category: "BRANDING + UI/UX",
    url: "https://dynr.app"  
  },
  {
    id: 4,
    image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/tutor_x_phone.jpg",
    title: "TutorX",
    description: "TutorX is an innovative platform that connects students with tutors, offering a unique bidding system for a personalized learning experience. Wired In brought the vision to life with sleek UI/UX design and seamless development, making learning more accessible and efficient, both online and in-person.",
    category: "DEVELOPMENT + DESIGN",
  },
  {
    id: 5,
    image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bioforce_web.jpg",
    title: "BioForce Chemicals",
    description: "Bioforce Chemicals is a leading agriculture company based in Multan, specializing in the manufacturing, distribution, and import of high-quality agricultural products. The website showcases a complete product catalog, offering a wide range of solutions to support farmers and businesses in the agricultural sector.",
    category: "DESIGN + WEBFLOW",
    url: "https://bioforcechemicals.com"  
  },
];

export default function WorksPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <div className="bg-black text-white min-h-screen font-bold mt-[8vh]">
      {/* Adjusting top padding to be responsive */}
      <main className="px-4 sm:px-6 md:px-12 py-24 md:py-32">
        <div className="mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight flex justify-center md:justify-start">FEATURED WORKS</h1>
        </div>

        <div className="space-y-12 md:space-y-24">
          {works.map((work) => (
            <div 
              key={work.id} 
              className="border-t border-gray-700 pt-6 md:pt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              onMouseEnter={() => setHoveredIndex(work.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Clickable image section with responsive aspect ratio */}
              <a 
                href={work.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative aspect-video overflow-hidden rounded-sm"
              >
                {work.image.endsWith('.webm') ? (
                  <video 
                    src={work.image} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover"
                  />
                )}
                <div 
                  className={`absolute inset-0 bg-white transition-opacity duration-300 ${
                    hoveredIndex === work.id ? "opacity-10" : "opacity-0"
                  }`}
                />
              </a>
              
              {/* Text content with responsive typography */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">{work.title}</h2>
                  <p className="text-sm md:text-base mb-6 font-extralight leading-relaxed">{work.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-sm font-light">{work.category}</span>
                  {work.date && <span className="text-xs md:text-sm">{work.date}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* <footer className="px-4 sm:px-6 md:px-12 py-12 md:py-16 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Wired In®</h3>
            <p className="text-sm max-w-md font-light">
              Wired In® is a digital design agency building products, 
              services, and experiences that people love.
            </p>
          </div>
        </div>
      </footer> */}

    </div>
  );
}