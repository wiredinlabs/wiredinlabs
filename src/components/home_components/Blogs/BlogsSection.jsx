"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./Blogs.css";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "Why Should You Choose Wired In Labs?",
    description:
      "About Us",
    image: "/images/blog1.svg",
    link: "/blog/Why-Wired-In-Labs",
    color: "#EFF371",
  },
  {
    id: 2,
    title: "Why Every Business Needs a Website in 2025",
    description:
      "Business",
    image: "images/blog2.svg",
    link: "/blog/Why-Every-Business-Needs-A-Website",
    color: "#E6BCCA",
  },
  {
    id: 3,
    title: "What Makes a Good Website? Key Elements for Success",
    description:
      "Development",
    image: "/images/blog3.svg",
    link: "/blog/What-Makes-A-Good-Website",
    color: "#BCE7FD",
  },
  {
    id: 4,
    title: "Design Trends That Will Be Defining 2025",
    description:
      "Design",
    image: "images/blog4.svg",
    link: "/blog/Design-Trends-Defining-2025",
    color: "#CEEC97",
  },
  {
    id: 5,
    title: "Boosting Engagement with Creative Web Design",
    description:
      "Design, Business",
    image: "images/blog5.svg",
    link: "/blog/Web-Design-For-Business",
    color: "#E27F55",
  }
];

const BlogsSection = () => {
  const router = useRouter();

  return (
    <div
      id="blog"
      className="min-h-screen pt-[5vh] bg-black text-white flex flex-col items-center relative w-full"
    >
      {/* Title */}
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 w-[90%] mx-auto">
        Blogs<span className="text-[#E4ED05]">.</span>
      </h2>

      <div className="relative w-full flex justify-center">
        <div className="w-[92%] mx-auto relative">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={15}
            grabCursor={true}
            touchEventsTarget="wrapper"
            mousewheel={false}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={250}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              waitForTransition: false,
            }}
            freeMode={{ enabled: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
                allowTouchMove: true,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                allowTouchMove: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                allowTouchMove: true,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 25,
                allowTouchMove: false,
              },
            }}
            className="relative"
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id} className="overflow-visible">
                <Link href={blog.link}>
                <div
                  onMouseEnter={(e) => {
                    e.target.closest(".swiper").swiper.autoplay.stop();
                    e.currentTarget.style.boxShadow = `0 0 15px 5px ${blog.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.closest(".swiper").swiper.autoplay.start();
                    e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                  }}
                  className="cursor-pointer text-black rounded-xl p-6 shadow-md transition-transform transform hover:scale-105 h-[420px] flex flex-col justify-between"
                  style={{
                    backgroundColor: blog.color,
                    boxShadow: "0 0 0 rgba(0,0,0,0)",
                    transition: "box-shadow 0.4s ease-in-out, transform 0.3s ease-in-out",
                  }}
                >
                  {/* Top Container with both images aligned */}
                  <div className="flex justify-between items-start mb-4">
                    {/* Blog image */}
                    <img
                        src={blog.image}
                        alt="Blog Icon"
                        className="w-36 h-36 object-cover rounded-md"
                        loading="lazy"
                      />

                    {/* Small image */}
                    <img
                        src={`${process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK}images/small_image.png`}
                        alt="Blog Icon"
                        className="w-8 h-8 object-contain"
                        loading="lazy"
                      />
                  </div>

                  {/* Title */}
                  <div className="mt-10">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tighter leading-tight line-clamp-4 min-h-[8rem]">
                      {blog.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-snug line-clamp-4">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-1/2 left-[-40px] z-10 transform -translate-y-1/2 cursor-pointer swiper-button-prev hidden sm:flex">
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK}images/chevron-left.png`}
              alt="Previous"
              className="w-4 h-4 sm:w-8 sm:h-8"
              loading="lazy"
            />
          </div>
          <div className="absolute top-1/2 right-[-40px] z-10 transform -translate-y-1/2 cursor-pointer swiper-button-next hidden sm:flex">
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK}images/chevron-right.png`}
              alt="Next"
              className="w-4 h-4 sm:w-8 sm:h-8"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
