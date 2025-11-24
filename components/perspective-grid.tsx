"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


//optional hook for smooth scrolling
import useLenis from "@/hooks/useLenis";

const images = [
    "/Hero-Section-Images/Hero-section-image-1.png",
    "/Hero-Section-Images/Hero-section-image-2.png",
    "/Hero-Section-Images/Hero-section-image-3.png",
    "/Hero-Section-Images/Hero-section-image-4.png",
    "/Hero-Section-Images/Hero-section-image-5.png",
    "/Hero-Section-Images/Hero-section-image-6.png",
    "/Hero-Section-Images/Hero-section-image-7.png",
    "/Hero-Section-Images/Hero-section-image-8.png",
    "/Hero-Section-Images/Hero-section-image-9.png",
];

const PerspectiveGrid = () => {
    const grid = useRef<HTMLDivElement | null>(null);
    const gridWrap = useRef<HTMLDivElement | null>(null);

    const applyAnimation = () => {
        if (!grid.current || !gridWrap.current) return;

        const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
                trigger: ".grid_wrap",
                start: "top bottom+=5%",
                end: "bottom top-=5%",
                scrub: true,
                // markers: true, // Optional: for debugging
            },
        });

        Object.assign(grid.current.style, {
            perspective: "1300px",
            height: "200%",
            width: "115%",
        });

        Object.assign(gridWrap.current.style, {
            width: "105%",
            gridTemplateColumns: "repeat(6, minmax(4, 1fr))",
        });

        timeline
            .set(".grid_item", {
                transformOrigin: "50% 0%",
                z: () => gsap.utils.random(-4000, -2000),
                rotationX: () => gsap.utils.random(-65, -25),
                filter: "brightness(0%)",
            })
            .to(
                ".grid_item",
                {
                    xPercent: () => gsap.utils.random(-150, 150),
                    yPercent: () => gsap.utils.random(-300, 300),
                    rotationX: 0,
                    filter: "brightness(200%)",
                },
                0,
            )
            .to(
                ".grid_wrap",
                {
                    z: 6500,
                },
                0,
            )
            .fromTo(".grid_item-inner", { scale: 1.5 }, { scale: 0.5 }, 0);
    };

    useLenis();

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        applyAnimation();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="z-10 w-full overflow-hidden ">

            <div className="relative w-full py-[20vh]">
                <div
                    ref={grid}
                    className="grid w-full place-items-center"
                    style={{ perspective: "1200px" }}
                >
                    <div
                        ref={gridWrap}
                        style={{ transformStyle: "preserve-3d" }}
                        className="grid_wrap grid h-auto w-full grid-cols-4 gap-[2vw]"
                    >
                        {Array(7)
                            .fill(images)
                            .flat()
                            .map((src, index) => (
                                <div
                                    key={index}
                                    className="grid_item relative grid aspect-[1.5] h-auto w-full place-items-center overflow-hidden rounded-md"
                                >
                                    <Image
                                        objectFit="cover"
                                        quality={60}
                                        src={src}
                                        fill={true}
                                        className="grid_item-inner relative h-auto min-w-[300px]"
                                        alt="image"
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerspectiveGrid;
