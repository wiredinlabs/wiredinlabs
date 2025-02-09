"use client"
import React, { useState } from 'react';
import Image from "next/image";
import AnimatedCircle from './_navbar_components/AnimatedCircle';

const NavBar = () => {
  return (
    <div className="text-black h-[17vh] w-full flex justify-between items-center px-20 py-1">
      {/* Logo */}
      <div>
        <Image
          src="/images/wired_in_labs_logo.png"
          alt="wired_in_labs_logo"
          width={89}
          height={89}
        />
      </div>
      
      {/* Navigation Routes */}
      <div className="flex justify-between items-center gap-16 ">
        <AnimatedCircle>About</AnimatedCircle>
        <AnimatedCircle>Services</AnimatedCircle>
        <AnimatedCircle>Works</AnimatedCircle>
        <AnimatedCircle>Blog</AnimatedCircle>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center items-center text-black bg-[#E4ED05] rounded-3xl px-4 py-2 text-xl font-medium">
        Contact
      </div>
    </div>
  );
};

export default NavBar;