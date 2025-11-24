"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline";
    href?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    className,
    variant = "primary",
    href,
    type,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
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

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isMobile) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const variantStyles = {
        primary: "bg-gold text-black hover:bg-white",
        secondary: "bg-white text-black hover:bg-gold",
        outline: "border-2 border-gold text-gold hover:bg-gold hover:text-black",
    };

    const Component = href ? motion.a : type ? motion.button : motion.div;
    const props = href ? { href } : type ? { type, onClick } : { onClick };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className="inline-block"
            data-magnetic
        >
            <Component
                {...props}
                animate={isMobile ? {} : { x: position.x * 0.3, y: position.y * 0.3 }}
                transition={isMobile ? {} : { type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                className={cn(
                    "px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-colors duration-300 inline-block text-sm sm:text-base",
                    variantStyles[variant],
                    className
                )}
            >
                {children}
            </Component>
        </div>
    );
}
