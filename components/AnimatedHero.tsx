"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGsapFadeIn } from "@/hooks/useGsap";
import MagneticButton from "./MagneticButton";

interface AnimatedHeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundImage?: string;
}

export default function AnimatedHero({
    title,
    subtitle,
    ctaText = "Get Started",
    ctaLink = "/contact",
    backgroundImage = "Main-Image.png", // Fallback
}: AnimatedHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useGsapFadeIn(".hero-text", { delay: 0.2, stagger: 0.1 });

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black z-10" />
                <img
                    src={backgroundImage}
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
            </motion.div>



            {/* Floating Images: Only show on homepage */}
            {(title === "Burj Global" || title.toLowerCase().includes("home")) && (
                <>
                    {/* Floating Images - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.4, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute left-10 top-1/4 z-10 hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-100 h-[250px] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/20"
                            style={{ aspectRatio: "16/9" }}
                        >
                            <img src="/Hero-Section-Images/Hero-section-image-3.png" alt="Dubai Skyline" className="w-full h-full object-cover" />
                        </motion.div>
                    </motion.div>

                    {/* Floating Images - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 0.4, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        className="absolute right-10 top-1/3 z-10 hidden lg:block"
                    >
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-100 h-[250px] rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl shadow-gold/20"
                            style={{ aspectRatio: "16/9" }}
                        >
                            <img src="/Hero-Section-Images/Hero-section-image-2.png" alt="Global Network" className="w-full h-full object-cover" />
                        </motion.div>
                    </motion.div>

                    {/* Additional Floating Element - Bottom Left */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.35, scale: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="absolute left-32 bottom-32 z-10 hidden xl:block"
                    >
                        <motion.div
                            animate={{ rotate: [0, 3, 0], y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-64 h-36 rounded-xl overflow-hidden border-2 border-gold/30 shadow-xl shadow-gold/20"
                            style={{ aspectRatio: "16/9" }}
                        >
                            <img src="/Hero-Section-Images/Hero-section-image-3.png" alt="Dubai Business" className="w-full h-full object-cover" />
                        </motion.div>
                    </motion.div>
                </>
            )}

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
                <h1 className="hero-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                    {title.split(" ").map((word, i) => (
                        <span key={i} className={word.toLowerCase().includes("dubai") || word.toLowerCase().includes("business") ? "text-gold" : ""}>
                            {word}{" "}
                        </span>
                    ))}
                </h1>
                <p className="hero-text text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
                    {subtitle}
                </p>
                <div className="hero-text">
                    <MagneticButton variant="primary" href={ctaLink} className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5">
                        {ctaText}
                    </MagneticButton>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2 group"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-1"
                >
                    <span className="text-gold/80 text-xs font-semibold uppercase tracking-[0.3em] group-hover:text-gold transition-colors">Scroll</span>
                    <div className="relative w-5 h-7 rounded-full border-2 border-gold/50 group-hover:border-gold transition-colors flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1 h-1 rounded-full bg-gold"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
