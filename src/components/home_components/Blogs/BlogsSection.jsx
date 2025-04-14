"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "Why Wired In Labs?",
    description:
      "Wired-In Labs blends creativity with technology, crafting immersive digital experiences beyond templates. From sleek web design to interactive coding, we help brands stand out with innovation-driven solutions. Let’s build something extraordinary!",
    image: "/images/blog1.png",
    link: "/blog/Why-Wired-In-Labs",
  },
  {
    id: 2,
    title: "Design Trends Defining 2025",
    description:
      "Embrace 2025’s bold design trends! From AI creativity to mixed reality, Neo-Brutalism, and hyper-personalized UX—explore sustainability, kinetic typography, and dark mode-first design. Stay ahead!",
    image: "/images/blog2.png",
    link: "/blog/Design-Trends-Defining-2025",
  },
  {
    id: 3,
    title: "What Makes a Good Website?",
    description:
      "A great website combines design, speed, security, and content. Key factors include easy navigation, mobile-friendliness, SEO, fast loading, and strong CTAs. Optimize for success and stand out online!",
    image: "/images/blog3.png",
    link: "/blog/What-Makes-A-Good-Website",
  },
  {
    id: 4,
    title: "Web Design for Business",
    description:
      "Creative web design and compelling content enhance credibility, user experience, and conversions. Optimize your site with intuitive navigation, storytelling, and SEO for a stronger online presence!",
    image: "/images/blog4.png",
    link: "/blog/Web-Design-For-Business",
  }
];

const BlogsSection = () => {
  const router = useRouter();

  return (
    <div
      id="blog"
      className="min-h-screen pt-[15vh] bg-black text-white flex flex-col items-center relative w-full"
    >
      {/* Title */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 w-full px-5 sm:px-8">
        Blogs<span className="text-[#E4ED05]">.</span>
      </h2>

      <div className="relative w-full flex justify-center">
        <div className="w-[92%] mx-auto relative">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          grabCursor={true}
          touchEventsTarget="wrapper"
          mousewheel={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          speed={250}
          autoplay={{ delay:5000, disableOnInteraction: false, waitForTransition: false }}
          freeMode={{ enabled: false }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 15, allowTouchMove: true },
            768: { slidesPerView: 1.5, spaceBetween: 20, allowTouchMove: true },
            1024: { slidesPerView: 2.5, spaceBetween: 20, allowTouchMove: true },
            1280: { slidesPerView: 3.5, spaceBetween: 25, allowTouchMove: false },
          }}
          className="relative"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="overflow-visible">
              <div
                onClick={() => router.push(blog.link)}
                onMouseEnter={(e) => e.target.closest('.swiper').swiper.autoplay.stop()}
                onMouseLeave={(e) => e.target.closest('.swiper').swiper.autoplay.start()}
                className="cursor-pointer mt-2 bg-white text-black shadow-lg transition-transform transform hover:scale-105 h-[450px] sm:h-[500px] flex-shrink-0 relative overflow-hidden"
              >
                <div className="p-2 bg-white">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-[60%]">
                  <h3 className="text-md sm:text-xl md:text-md lg:text-md font-bold h-[10%] flex items-center tracking-tighter mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs md:text-sm opacity-70 h-[75%] overflow-hidden tracking-tighter italic">
                    {blog.description}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 w-6 md:w-8 h-6 md:h-8">
                  <img
                    src="/images/small_image.png"
                    alt="small icon"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 left-[-40px] z-10 transform -translate-y-1/2 cursor-pointer swiper-button-prev hidden sm:flex">
          <img src="/images/chevron-left.png" alt="Previous" className="w-4 h-4 sm:w-8 sm:h-8" />
        </div>
        <div className="absolute top-1/2 right-[-40px] z-10 transform -translate-y-1/2 cursor-pointer swiper-button-next hidden sm:flex">
          <img src="/images/chevron-right.png" alt="Next" className="w-4 h-4 sm:w-8 sm:h-8" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
