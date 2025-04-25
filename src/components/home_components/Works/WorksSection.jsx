// "use client"

// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function WorksSection() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const tickerRef = useRef(null);
//   const animationRef = useRef();
  
//   // Create arrays with many duplicated items to ensure seamless scrolling
//   const generateItems = (baseItems, columnId) => {
//     // Create many copies to ensure we have enough content
//     const duplicatedItems = [];
//     // Create 10 copies of each item with unique IDs
//     for (let i = 0; i < 1; i++) {
//       baseItems.forEach(item => {
//         duplicatedItems.push({
//           ...item,
//           id: `${item.id}_${columnId}_${i}` // Ensure each ID is unique
//         });
//       });
//     }
//     return duplicatedItems;
//   };

//   // Base items for each column
//   const baseColumnOneItems = [
//     { id: 1, video: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/qissa_vid.mp4" },
//     { id: 4, image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/tutor_x.jpg" },
//   ];

//   const baseColumnTwoItems = [
//     { id: 2, image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bfc_phone.jpg" },
//     { id: 5, video: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bfc_vid.mp4" },
//   ];

//   const baseColumnThreeItems = [
//     { id: 3, video: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/dynr_vid.mp4" },
//     { id: 6, image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/dynr_photo.jpg" },
//   ];
  
//   // Generate many copies of each item with unique IDs
//   const columnOneItems = generateItems(baseColumnOneItems, "col1");
//   const columnTwoItems = generateItems(baseColumnTwoItems, "col2");
//   const columnThreeItems = generateItems(baseColumnThreeItems, "col3");

//   // Animation logic with pure CSS variables for better performance
//   useEffect(() => {
//     if (!tickerRef.current) return;
    
//     const columns = tickerRef.current.querySelectorAll(".ticker-column");
    
//     // Set initial positions with CSS variables for smoother animation
//     columns[0].style.setProperty('--scroll-pos', '0px');
//     columns[1].style.setProperty('--scroll-pos', '-180px');
//     columns[2].style.setProperty('--scroll-pos', '-90px');
    
//     // Store column data
//     const columnData = [
//       { element: columns[0], position: 0, baseHeight: 0 },
//       { element: columns[1], position: -180, baseHeight: 0 },
//       { element: columns[2], position: -90, baseHeight: 0 }
//     ];
    
//     // Measure heights after initial render
//     setTimeout(() => {
//       columnData.forEach((data, i) => {
//         // Get height of two items (the pattern that repeats)
//         const itemHeight = columns[i].querySelector('.work-item').offsetHeight * 2;
//         data.baseHeight = itemHeight;
//       });
      
//       // Animation speed
//       const speed = 1.5;
      
//       const animate = () => {
//         columnData.forEach(data => {
//           // Update position
//           data.position -= speed;
          
//           // If the position moves beyond a threshold, reset it outside the viewable area
//           if (Math.abs(data.position) >= data.baseHeight * 100) {
//             data.position += data.baseHeight * 100; // Move it back above the viewport
//           }
          
//           // Apply position using CSS variable for smooth animation
//           data.element.style.setProperty('--scroll-pos', `${data.position}px`);
//         });
      
//         animationRef.current = requestAnimationFrame(animate);
//       };
      
      
//       // Start animation
//       animationRef.current = requestAnimationFrame(animate);
//     }, 100);
    
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   // Function to render a work item
//   const renderWorkItem = (work) => (
//     <div 
//       key={work.id}
//       className="work-item block group mb-12"
//       onMouseEnter={() => setHoveredIndex(work.id)}
//       onMouseLeave={() => setHoveredIndex(null)}
//     >
//       <Link
//         href={`/works/${work.id}`}
//         className="block"
//       >
//         <div className="relative overflow-hidden">
//           {/* Image container with aspect ratio */}
//           <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
//   {work.video ? (
//     <video
//       src={work.video}
//       autoPlay
//       loop
//       muted
//       playsInline
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//   ) : (
//     <img
//       src={work.image}
//       alt="Work"
//       className="absolute inset-0 w-full h-full object-cover"
//     />
//   )}

//   {/* Hover overlay */}
//   <div
//     className={`absolute inset-0 bg-[#CCFF00] bg-opacity-0 transition-all duration-300 ${
//       hoveredIndex === work.id ? "bg-opacity-10" : ""
//     }`}
//   ></div>
// </div>
//         </div>
//       </Link>
//     </div>
//   );

//   return (
// <div id="works" className="bg-black text-white py-24 px-6 md:px-12">
//   <div className="max-w-[120rem] mx-auto">
//       {/* Header with line */}
//       {/* <div className="max-w-7xl mx-auto"> */}
//         <div className="flex items-center mb-16">
//           <h2 className="text-5xl md:text-7xl font-bold mr-6 tracking-tighter">Our Works</h2>
//           <span className="text-6xl md:text-8xl font-bold text-[#E4ED05]">*</span>
//           <div className="flex-grow h-px bg-gray-800 ml-8 hidden md:block"></div>
//         </div>

//         {/* Staggered three-column layout with ticker animation */}
//         <div 
//   ref={tickerRef} 
//   className="hidden md:flex w-full gap-8 relative overflow-hidden" 
//   style={{ height: "900px" }}
// > 
//   <div 
//     className="w-[50%] ticker-column"
//     style={{ transform: 'translateY(var(--scroll-pos))' }}
//   >
//     {columnOneItems.map(work => renderWorkItem(work))}
//   </div>

//   <div 
//     className="w-[50%] ticker-column"
//     style={{ transform: 'translateY(var(--scroll-pos))' }}
//   >
//     {columnTwoItems.map(work => renderWorkItem(work))}
//   </div>

//   <div 
//     className="w-[50%] ticker-column"
//     style={{ transform: 'translateY(var(--scroll-pos))' }}
//   >
//     {columnThreeItems.map(work => renderWorkItem(work))}
//   </div>
// </div>


//         {/* Mobile layout - single column */}
//         <div className="md:hidden">
//           {[...baseColumnOneItems, ...baseColumnTwoItems, ...baseColumnThreeItems].map(work =>
//             renderWorkItem(work)
//           )}
//         </div>

//         {/* View all works button */}
//         <div className="mt-24 text-center">
//           <Link
//             href="/works"
//             className="inline-flex items-center border border-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black group"
//           >
//             <span className="mr-3">View All Works</span>
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="transform group-hover:translate-x-1 transition-transform duration-300"
//             >
//               <path
//                 d="M17 8L21 12M21 12L17 16M21 12H3"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import "./works-section.css"; // Import custom CSS for animation

export default function WorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const columnOneItems = [
    { id: 1, video: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/qissa_vid.webm" },
    { id: 4, image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/tutor_x.jpg" },
  ];

  const columnTwoItems = [
    { id: 2, image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bfc_phone.jpg" },
    { id: 5, video: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/bfc_vid.webm" },
  ];

  const columnThreeItems = [
    { id: 3, video: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/dynr_vid.webm" },
    { id: 6, image: "https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/dynr_photo.jpg" },
  ];

  const renderWorkItem = (work, key) => (
    <div
      key={key}
      className="work-item block group mb-12"
      onMouseEnter={() => setHoveredIndex(work.id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >

      {/* <Link href={`/works/${work.id}`} className="block"> */}
        <div className="relative overflow-hidden">
          <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
            {work.video ? (
              <video
                src={work.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={work.image}
                alt="Work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
            <div
              className={`absolute inset-0 bg-[#CCFF00] bg-opacity-0 transition-all duration-300 ${
                hoveredIndex === work.id ? "bg-opacity-10" : ""
              }`}
            ></div>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );

  const renderTickerColumn = (items, delayClass = "") => (
    <div className={`ticker-column ${delayClass}`}>
      <div className="ticker-track">
        {[...items, ...items].map((work, index) =>
          renderWorkItem({ ...work }, `${work.id}_${index}`)
        )}
      </div>
    </div>
  );

  return (
    <div id="works" className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-[120rem] mx-auto">
        <div className="flex items-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mr-6 tracking-tighter">
            Our Works
          </h2>
          <span className="text-6xl md:text-8xl font-bold text-[#E4ED05]">*</span>
          <div className="flex-grow h-px bg-gray-800 ml-8 hidden md:block"></div>
        </div>

        {/* Desktop ticker */}
        <div className="hidden md:flex gap-8 overflow-hidden" style={{ height: "900px" }}>
          {renderTickerColumn(columnOneItems, "delay-0")}
          {renderTickerColumn(columnTwoItems, "delay-5")}
          {renderTickerColumn(columnThreeItems, "delay-2")}
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden">
          {[...columnOneItems, ...columnTwoItems, ...columnThreeItems].map((work, i) =>
            renderWorkItem(work, `m-${work.id}-${i}`)
          )}
        </div>

        {/* View All Works */}
        <div className="mt-24 text-center">
          <Link
            href="\works"
            className="inline-flex items-center border border-white px-8 py-3 transition-all duration-300 hover:bg-white hover:text-black group"
          >
            <span className="mr-3">View All Works</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M17 8L21 12M21 12L17 16M21 12H3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
