import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';
import ContactUsSection from '@/components/home_components/ContactUs/ContactUsSection';
import NavBar from '@/components/layout_components/NavBar/NavBar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Wired-In Labs',
  description: 'Unplug the Old, Wire in the New',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased dotted-bg`}>
        {/* <ClientLayout>{children}</ClientLayout> */}
        <NavBar />
      {children}
      <ContactUsSection />
      </body>
    </html>
  );
}
