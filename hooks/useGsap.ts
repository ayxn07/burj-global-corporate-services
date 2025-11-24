"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapFadeIn(
    selector: string,
    options: {
        delay?: number;
        duration?: number;
        y?: number;
        stagger?: number;
        threshold?: number;
    } = {}
) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const elements = document.querySelectorAll(selector);

            if (elements.length === 0) return;

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: options.y || 30,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: options.duration || 1,
                    stagger: options.stagger || 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elements[0],
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    delay: options.delay || 0,
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [selector, options.delay, options.duration, options.y, options.stagger]);

    return containerRef;
}

export function useGsapShimmer(selector: string) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const elements = document.querySelectorAll(selector);

            elements.forEach((el) => {
                gsap.to(el, {
                    backgroundPosition: "200% center",
                    duration: 2,
                    repeat: -1,
                    ease: "linear",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [selector]);

    return containerRef;
}
