'use client';

import { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 500); // delay to show 100%
          return 100;
        }
        return p + 2; // slower progress
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // Unmount loader after fade-out animation
  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(onFinish, 500); // wait for fade-out
      return () => clearTimeout(timer);
    }
  }, [exiting, onFinish]);

  return (
    <div
    className={`fixed inset-0 bg-black flex items-center justify-center dotted-bg z-50 transition-opacity duration-500 ${
        exiting ? 'opacity-0' : 'opacity-100'
    }`}
    >

        <div className="text-center">
        <img
            src="https://pub-2c663c3432e84955b66e1291428594d0.r2.dev/images/glowing_star.png"
            className="w-24 h-24 mb-6 mx-auto animate-spin-slow"
            priority="true"
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
