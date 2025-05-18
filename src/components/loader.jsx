'use client';

import { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [fullyHidden, setFullyHidden] = useState(false);

  // Start progress animation only after image is loaded
  useEffect(() => {
    if (!imageLoaded) return;

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 500); // pause before fade-out
          return 100;
        }
        return p + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [imageLoaded]);

  // Handle fade-out and cleanup
  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => {
        setFullyHidden(true);
        onFinish();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [exiting, onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center dotted-bg transition-opacity duration-500
        ${exiting ? 'opacity-0' : 'opacity-100'}
        ${fullyHidden ? 'z-0 pointer-events-none' : 'z-50'}
      `}
    >
      <div className="text-center">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_PUBLIC_LINK}images/glowing_star.png`}
          className="w-24 h-24 mb-6 mx-auto animate-spin-slow opacity-100"
          alt="Loading..."
          onLoad={() => setImageLoaded(true)}
        />
        <div className="w-72 h-2 bg-gray-600 rounded mx-auto overflow-hidden">
          <div
            className="h-full bg-white rounded"
            style={{
              width: `${progress}%`,
              transition: 'width 0.3s ease-in-out',
            }}
          />
        </div>
      </div>
    </div>
  );
}
