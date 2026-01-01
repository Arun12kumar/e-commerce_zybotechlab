"use client"; 

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);

const MainLayout = ({children}) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

    useGSAP(()=>{       
        
      ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth:1.2,
        effects:true

      });

    },[])

  return (
    <div ref={wrapperRef}  className="min-h-screen">
      <div ref={contentRef}>
        <Header />
        <div className="w-screen bg-primaryDarklight px-8 lg:px-16">
            {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
