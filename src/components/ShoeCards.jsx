"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

const ShoeCards = () => {
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const circleRef = useRef(null);
    const sizeRef = useRef(null);
    const colorRef = useRef(null);
    const buyButtonRef = useRef(null);
    const titleRef = useRef(null);
    const tl = useRef(null);
    const onEnter = () => tl.current.play();
    const onLeave = () => tl.current.reverse();
    const router = useRouter()

    useGSAP(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current.fromTo(
            cardRef2.current,
            { x: 0, y: 0 }, // FROM
            {
                x: 0,
                y: -40, // TO
                duration: 0.3,
                ease: "power2.out",
            },
            0
        );
        tl.current.fromTo(
            cardRef1.current,
            { x: 0, y: 0 }, // FROM
            {
                x: 0,
                y: -47, // TO
                duration: 0.3,
                ease: "power2.out",
            },
            0
        );

        tl.current.to(
            circleRef.current,
            {
                x: 10,
                y: -60,
                duration: 0.3,
                ease: "power2.out",
            },
            0
        );

        tl.current.fromTo(
            sizeRef.current,
            { y: 120, x: 0 },
            {
                y: 0,
                x: 0,
                duration: 0.3,
                ease: "power2.out",
            },
            0
        );

        tl.current.fromTo(
            titleRef.current,
            { y: 50, x: 0 },
            {
                y: 0,
                x: 0,
                duration: 0.3,
                ease: "power2.out",
            },
            0
        );

        tl.current.fromTo(
            colorRef.current,
            { opacity:0, y:50,x:0},
            {   
                y:0,
                x:0,
                opacity:1,
                duration: 0.8,
                ease: "power2.out",
            },
            0.3
        );
        tl.current.fromTo(
            buyButtonRef.current,
            { opacity:0},
            {
                opacity:1,
                duration: 0.8,
                ease: "power2.out",
            },
            0.6
        );
    }, []);

    return (
        <div
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="bg-card w-full h-80 max-w-[300px] mx-auto md:mx-0 md:w-full h-80 sm:h-96 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 gap-3"
        >
            <div ref={cardRef1} className="w-full h-[70%] overflow-hidden relative">
                <p className="text-[7rem] sm:text-[8rem] md:text-[9rem] text-white/10 font-extrabold italic absolute -bottom-8 sm:-bottom-10 md:-bottom-13 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    NIKE
                </p>
                <svg
                    ref={circleRef}
                    width="312"
                    height="229"
                    viewBox="0 0 312 229"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 left-0 z-10 w-full h-full"
                >
                    <circle cx="182" cy="37" r="192" fill="#9ADA2A" />
                </svg>
                <Image
                    src="/images/image1.png"
                    alt="Nike shoe"
                    width={240}
                    height={240}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60"
                />
            </div>
            <div ref={cardRef2} className="w-full h-[30%] flex flex-col items-center justify-center gap-2">
                <p ref={titleRef} className="text-base sm:text-lg font-bold text-white ">NIKE SHOES</p>
                <div ref={sizeRef} className="flex flex-row items-center gap-4">
                    <p className="text-white">SIZE :</p>
                    <div className="flex gap-1">
                        <label className="cursor-pointer">
                            <input type="radio" name="size" className="peer hidden" />
                            <span className="block w-7 h-7 rounded-lg bg-white flex items-center justify-center peer-checked:bg-[#372224] peer-checked:text-white">1</span>
                        </label>
                        <label className="cursor-pointer">
                            <input type="radio" name="size" className="peer hidden" />
                            <span className="block w-7 h-7 rounded-lg bg-white flex items-center justify-center peer-checked:bg-[#372224] peer-checked:text-white">2</span>
                        </label>
                        <label className="cursor-pointer">
                            <input type="radio" name="size" className="peer hidden" />
                            <span className="block w-7 h-7 rounded-lg bg-white flex items-center justify-center peer-checked:bg-[#372224] peer-checked:text-white">3</span>
                        </label>
                        <label className="cursor-pointer">
                            <input type="radio" name="size" className="peer hidden" />
                            <span className="block w-7 h-7 rounded-lg bg-white flex items-center justify-center peer-checked:bg-[#372224] peer-checked:text-white">4</span>
                        </label>

                    </div>
                </div>
                <div ref={colorRef} className="flex flex-row items-center gap-4 opacity-0">
                    <p className="text-white">COLOR :</p>
                    <div className="flex gap-1">
                        <label className="cursor-pointer">
                            <input type="radio" name="color" className="peer hidden" />
                            <span className="block w-4 h-4 rounded-full bg-[#9ADA2A] peer-checked:ring-2 peer-checked:ring-white"></span>
                        </label>
                        <label className="cursor-pointer">
                            <input type="radio" name="color" className="peer hidden" />
                            <span className="block w-4 h-4 rounded-full bg-[#840D91] peer-checked:ring-2 peer-checked:ring-white"></span>
                        </label>
                        <label className="cursor-pointer">
                            <input type="radio" name="color" className="peer hidden" />
                            <span className="block w-4 h-4 rounded-full bg-[#9D333B] peer-checked:ring-2 peer-checked:ring-white"></span>
                        </label>
                    </div>
                </div>
                <button ref={buyButtonRef} className="px-5 py-3 bg-white rounded-lg text-sm font-medium opacity-0" onClick={()=> router.replace('/order-success')}>Buy Now</button>
            </div>
        </div>
    );
};

export default ShoeCards;
