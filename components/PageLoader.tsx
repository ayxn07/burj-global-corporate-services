"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        const handleLoad = () => {
            setProgress(100);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };

        if (document.readyState === "complete") {
            setTimeout(handleLoad, 1500);
        } else {
            window.addEventListener("load", handleLoad);
            return () => {
                window.removeEventListener("load", handleLoad);
                clearInterval(interval);
            };
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-100 bg-black flex items-center justify-center overflow-hidden"
                    >
                        {/* Background gradient orbs */}
                        <motion.div
                            className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/20 rounded-full blur-[120px]"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Grid pattern overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(171,148,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(171,148,35,0.03)_1px,transparent_1px)] bg-size-[60px_60px]" />

                        {/* Main content */}
                        <div className="relative z-10 flex flex-col items-center">
                            {/* Logo animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="mb-8"
                            >
                                {/* Animated logo letters */}
                                <div className="flex items-center gap-1">
                                    {"BURJ".split("").map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: i * 0.1,
                                                ease: [0.215, 0.61, 0.355, 1]
                                            }}
                                            className="text-4xl md:text-5xl font-bold text-gold tracking-wider"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className="mx-3 w-2 h-2 bg-gold rounded-full"
                                    />
                                    {"GLOBAL".split("").map((letter, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.6 + i * 0.1,
                                                ease: [0.215, 0.61, 0.355, 1]
                                            }}
                                            className="text-4xl md:text-5xl font-bold text-white tracking-wider"
                                        >
                                            {letter}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Tagline */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                className="text-white/50 text-sm tracking-[0.3em] uppercase mb-10"
                            >
                                Corporate Services
                            </motion.p>

                            {/* Progress bar container */}
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: 200 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                                className="relative"
                            >
                                {/* Background bar */}
                                <div className="w-[200px] h-0.5 bg-white/10 rounded-full overflow-hidden">
                                    {/* Progress fill */}
                                    <motion.div
                                        className="h-full bg-linear-to-r from-gold via-gold-light to-gold rounded-full"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${Math.min(progress, 100)}%` }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </div>

                                {/* Progress percentage */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                                >
                                    <span className="text-gold/80 text-xs font-mono">
                                        {Math.min(Math.round(progress), 100)}%
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Decorative elements */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6 }}
                                className="absolute -z-10"
                            >
                                {/* Rotating ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-[400px] h-[400px] border border-gold/10 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 border border-gold/5 rounded-full"
                                />
                            </motion.div>
                        </div>

                        {/* Corner accents */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: -20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute top-8 left-8"
                        >
                            <div className="w-12 h-0.5 bg-linear-to-r from-gold to-transparent" />
                            <div className="w-0.5 h-12 bg-linear-to-b from-gold to-transparent" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="absolute bottom-8 right-8"
                        >
                            <div className="w-12 h-0.5 bg-linear-to-l from-gold to-transparent ml-auto" />
                            <div className="w-0.5 h-12 bg-linear-to-t from-gold to-transparent ml-auto" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </>
    );
}
