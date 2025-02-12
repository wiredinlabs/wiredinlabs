import Image from "next/image";
import About from "./(protected-routes)/About/page";
import AboutSection from "@/components/home_components/About/AboutSection";
import ServicesSection from "@/components/home_components/Services/ServicesSection";
import WorksSection from "@/components/home_components/Works/WorksSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen font-[family-name:var(--font-geist-sans)] mt-[10vh]">
    <AboutSection />
    <ServicesSection />
    <WorksSection />

    </div>
  );
}
