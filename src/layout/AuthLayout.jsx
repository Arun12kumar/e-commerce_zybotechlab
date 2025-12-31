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

const AuthLayout = ({children}) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const tl = useRef(null);
  const onEnter = () => tl.current.play();
  const onLeave = () => tl.current.reverse();

    useGSAP(()=>{       
        
        ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth:1.2,
            effects:true

        });

        tl.current = gsap.timeline({ paused: true });
        tl.current.to(imageRef.current, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });

    },[])

  return (
    <div ref={wrapperRef}  className="min-h-screen">
      <div ref={contentRef}>
        <Header />
        <div className="h-[100vh] bg-black flex flex-row ">
            <div className="w-[50vw] h-full relative overflow-hidden">
                <Image ref={imageRef} src="/images/login.png" fill priority className="object-cover" alt="login" onMouseEnter={onEnter} onMouseLeave={onLeave}/>
            </div>
            <div className="w-[50vw] h-full">{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
