"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Dubai Mainland Setup", href: "/services/dubai-mainland" },
            { name: "UAE Freezone Setup", href: "/services/uae-freezone" },
            { name: "Offshore Formation", href: "/services/offshore" },
            { name: "PRO Services", href: "/services/pro-services" },
            { name: "Visas", href: "/services/visas" },
            { name: "Compliance", href: "/services/compliance" },
            { name: "Branding", href: "/services/branding" },
            { name: "Marketing & PR", href: "/services/marketing-pr" },
        ],
    },
    { name: "Why Us?", href: "/why-us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6"
        >
            <div
                className={cn(
                    "rounded-full transition-all duration-500 px-7 py-1 bg-black border border-gold/50",
                    scrolled && "shadow-2xl shadow-gold/5"
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative z-50" data-magnetic>
                        <div className="relative h-20 w-50 overflow-hidden ">
                            <Image
                                src="/Logo.jpeg"
                                alt="Burj Global Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-medium text-white/90 hover:text-gold transition-colors flex items-center gap-1"
                                    data-magnetic
                                >
                                    {link.name}
                                    {link.dropdown && (
                                        <motion.div
                                            animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <ChevronDown className="w-4 h-4" />
                                        </motion.div>
                                    )}
                                </Link>

                                {link.dropdown && (
                                    <AnimatePresence>
                                        {dropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 400,
                                                    damping: 30,
                                                    mass: 0.8
                                                }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-black/98 backdrop-blur-2xl border border-gold/30 rounded-3xl shadow-2xl shadow-gold/30 overflow-hidden"
                                                onMouseEnter={() => setDropdownOpen(true)}
                                                onMouseLeave={() => setDropdownOpen(false)}
                                            >
                                                {/* Animated gradient background */}
                                                <motion.div
                                                    className="absolute inset-0 bg-linear-to-br from-gold/10 via-transparent to-gold/5"
                                                    animate={{
                                                        backgroundPosition: ["0% 0%", "100% 100%"],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                    }}
                                                />                                                {/* Glow effect */}
                                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
                                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />

                                                <div className="p-2 relative z-10">
                                                    {link.dropdown.map((item, i) => (
                                                        <motion.div
                                                            key={item.name}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{
                                                                delay: i * 0.04,
                                                                type: "spring",
                                                                stiffness: 400,
                                                                damping: 25
                                                            }}
                                                        >
                                                            <Link
                                                                href={item.href}
                                                                className="group/item relative block px-4 py-3 text-sm text-white/80 rounded-xl overflow-hidden hover:text-gold transition-colors duration-300"
                                                                data-magnetic
                                                            >
                                                                {/* Hover background */}
                                                                <div className="absolute inset-0 bg-linear-to-r from-gold/0 via-gold/15 to-gold/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                                                                {/* Border highlight */}
                                                                <div className="absolute inset-0 rounded-xl border border-transparent group-hover/item:border-gold/40 transition-colors duration-300" />

                                                                <span className="relative z-10 flex items-center justify-between gap-2">
                                                                    <span className="font-medium">
                                                                        {item.name}
                                                                    </span>
                                                                    <span className="text-gold/0 text-base group-hover/item:text-gold transition-colors duration-300">
                                                                        →
                                                                    </span>
                                                                </span>
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Bottom gradient accent */}
                                                <motion.div
                                                    className="h-1 bg-linear-to-r from-transparent via-gold to-transparent"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <MagneticButton variant="primary" href="/contact" className="text-sm">
                            Contact Us
                        </MagneticButton>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="lg:hidden relative z-50 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        data-magnetic
                    >
                        {isOpen ? <X /> : <Menu />}
                    </motion.button>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: "100%" }}
                                transition={{ type: "spring", damping: 20 }}
                                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
                            >
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-medium text-white hover:text-gold transition-colors"
                                            data-magnetic
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown && (
                                            <div className="flex flex-col items-center gap-3">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-lg text-white/50 hover:text-gold transition-colors"
                                                        data-magnetic
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
}
