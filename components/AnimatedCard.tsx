"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedCard({ children, className }: AnimatedCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkMobile = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
            }
        };
        checkMobile();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current || isMobile) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={isMobile ? undefined : handleMouseMove}
            onMouseEnter={isMobile ? undefined : handleMouseEnter}
            onMouseLeave={isMobile ? undefined : handleMouseLeave}
            className={`relative group ${className || ""}`}
            style={{
                transformStyle: isMobile ? "flat" : "preserve-3d",
            }}
            animate={isMobile ? {} : {
                rotateX: isHovered ? mouseYSpring.get() * 0.05 : 0,
                rotateY: isHovered ? mouseXSpring.get() * 0.05 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mouseXSpring.get() / 2 + 50}% ${mouseYSpring.get() / 2 + 50}%, rgba(171, 148, 35, 0.3) 0%, transparent 70%)`,
                }}
            />

            {/* Shimmer effect */}
            <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                initial={false}
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            >
                <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-gold/20 to-transparent"
                    animate={isHovered ? { x: ["-100%", "100%"] } : {}}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
