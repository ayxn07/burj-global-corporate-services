"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 30, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const innerSpringConfig = { damping: 20, stiffness: 200 };
    const innerX = useSpring(cursorX, innerSpringConfig);
    const innerY = useSpring(cursorY, innerSpringConfig);

    useEffect(() => {
        // Check if device is mobile/touch device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        if (!isMobile) {
            window.addEventListener("mousemove", moveCursor);
        }

        // Add listeners to all interactive elements
        const interactiveElements = document.querySelectorAll(
            "a, button, [data-magnetic], input, textarea, select"
        );

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Outer circle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="rounded-full border border-gold"
                    animate={{
                        width: isHovering ? 32 : 24,
                        height: isHovering ? 32 : 24,
                        borderColor: isHovering ? "#ab9423" : "#ab9423",
                        borderWidth: isHovering ? 2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-9999"
                style={{
                    x: innerX,
                    y: innerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    className="rounded-full bg-gold"
                    animate={{
                        width: isHovering ? 6 : 4,
                        height: isHovering ? 6 : 4,
                        opacity: isHovering ? 1 : 0.9,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </motion.div>
        </>
    );
}
