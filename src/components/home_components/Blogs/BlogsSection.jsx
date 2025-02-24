"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";

const blogs = [
  {
    id: 1,
    title: "Random Shit 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "/images/blog_image.png",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Random Shit 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "/images/blog_image.png",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Random Shit 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "/images/blog_image.png",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "Random Shit 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "/images/blog_image.png",
    link: "/blog/4",
  },
  {
    id: 5,
    title: "Random Shit 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "/images/blog_image.png",
    link: "/blog/5",
  },
  {
    id: 6,
    title: "Random Shit 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    image: "/images/blog_image.png",
    link: "/blog/6",
  },
];

const BlogsSection = () => {
  const router = useRouter();

  return (
    <div
      id="blogs"
      className="min-h-screen bg-black text-white flex flex-col items-center pt-10 relative w-full"
    >
      <h2 className="text-6xl font-bold mb-8 text-left w-full px-8">
        Blogs<span className="text-[#E4ED05]">.</span>
      </h2>

      <div className="w-full px-5 relative">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={20}
          grabCursor={true}
          cssMode={true} // Enables natural scrolling with trackpad or touch
          touchEventsTarget="container"
          scrollbar={{ draggable: true }} // Enables scrolling with two fingers
          className="relative"
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id} className="overflow-visible">
              <div
                onClick={() => router.push(blog.link)}
                className="cursor-pointer mt-2 bg-white text-black shadow-lg transition-transform transform hover:scale-105 h-[600px] flex-shrink-0 relative overflow-visible"
              >
                <div className="p-2 bg-white">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[40%] object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-[60%]">
                  <h3 className="text-4xl font-bold h-[10%] flex items-center tracking-tighter mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-md opacity-70 h-[90%] overflow-hidden tracking-tighter italic">
                    {blog.description}
                  </p>
                </div>
                <div className="absolute bottom-4 right-4 w-8 h-8">
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
      </div>
    </div>
  );
};

export default BlogsSection;
