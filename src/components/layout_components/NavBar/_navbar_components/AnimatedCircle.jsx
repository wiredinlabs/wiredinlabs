"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCircle = ({ isActive, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <span className="relative z-10 px-2 py-1 text-xl font-medium text-white transition-colors cursor-pointer">
        {children}
      </span>

      <AnimatePresence>
        {(isActive || isHovered) && (
          <motion.svg
            className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] pointer-events-none overflow-visible"
            width="112"
            height="62"
            viewBox="0 0 112 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isActive ? 0.5 : 0.2 }}
              exit={{ pathLength: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              strokeWidth="2"
              stroke="#E4ED05"
              strokeLinecap="round"
              d="M81.2676 6.92588C86.7008 7.10868 91.0194 8.9127 95.3381 10.9384C109.502 17.5906 114.239 27.9118 104.533 38.0542C89.4409 53.7826 54.2875 64.0765 27.0287 59.3258C20.9918 58.2788 12.8188 57.356 6.82841 52.2431C1.25591 47.4891 1.4881 41.8374 4.04216 36.6051C6.64266 31.2405 11.6579 26.303 15.6515 23.1292C33.112 9.28194 68.0795 -3.30335 99.7034 3.33152C100.354 3.45935 101.004 3.23951 101.189 2.8405C101.375 2.4415 101.05 2.01365 100.446 1.88581C67.8935 -4.94248 31.8116 7.91306 13.8403 22.1639C8.87148 26.1214 2.37059 32.7278 0.513089 39.563C-0.740723 44.2348 0.141408 49.0104 4.97091 53.1647C11.3328 58.611 20.0167 59.6778 26.4251 60.7928C54.5662 65.6996 90.9265 55.1047 106.483 38.8604C116.932 27.9592 111.916 16.8551 96.685 9.70493C92.0412 7.50708 87.3044 5.60771 81.4068 5.40973C80.7567 5.38817 80.1996 5.71035 80.1996 6.12879C80.1532 6.54722 80.6639 6.90432 81.2676 6.92588Z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedCircle;
