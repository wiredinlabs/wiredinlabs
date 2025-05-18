'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from '@studio-freight/react-lenis'; // only if you use their context hook

export default function ScrollToTopOnPageChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Timeout ensures DOM is updated before scrolling
    setTimeout(() => {
      window.scrollTo(0, 0); // fallback
      document.documentElement.scrollTop = 0;
    }, 0);
  }, [pathname]);

  return null;
}
