"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
}

export default function SectionTitle({
    title,
    subtitle,
    centered = false,
    className,
}: SectionTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div
            ref={ref}
            className={cn(
                "mb-12",
                centered ? "text-center" : "text-left",
                className
            )}
        >
            {subtitle && (
                <span
                    className={cn(
                        "block text-gold text-sm font-semibold uppercase tracking-widest mb-3 transition-all duration-700 transform",
                        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                >
                    {subtitle}
                </span>
            )}
            <h2
                className={cn(
                    "text-3xl md:text-5xl font-bold text-white transition-all duration-700 delay-100 transform",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
            >
                {title}
            </h2>
            <div
                className={cn(
                    "h-1 bg-gold mt-4 transition-all duration-1000 delay-300",
                    centered ? "mx-auto" : "",
                    isInView ? "w-24" : "w-0"
                )}
            />
        </div>
    );
}
