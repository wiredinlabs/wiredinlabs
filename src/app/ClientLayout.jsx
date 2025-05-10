'use client';

import { useEffect, useState } from 'react';
import NavBar from '@/components/layout_components/NavBar/NavBar';
import ContactUsSection from '@/components/home_components/ContactUs/ContactUsSection';
import Loader from '../components/loader.jsx';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader onFinish={() => setLoading(false)} />
  ) : (
    <>
      {/* <NavBar />
      {children}
      <ContactUsSection /> */}
    </>
  );
}
