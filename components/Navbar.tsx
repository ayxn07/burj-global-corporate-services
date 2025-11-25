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
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-6xl"
        >
            <div
                className={cn(
                    "rounded-full transition-all duration-500 px-4 sm:px-7 py-1 bg-black border border-gold/50",
                    scrolled && "shadow-2xl shadow-gold/5"
                )}
            >
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative z-50" data-magnetic>
                        <div className="relative h-14 w-36 sm:h-20 sm:w-50 overflow-hidden">
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
                        className="lg:hidden relative z-60 w-10 h-10 flex items-center justify-center rounded-full bg-gold/10 border border-gold/30 text-white hover:bg-gold/20 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu - Outside the nav container to avoid overflow clipping */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Mobile Menu Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-55 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Menu Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 300
                            }}
                            className="fixed top-0 -right-5 h-screen w-[85vw] max-w-sm bg-black border-l-2 border-gold/30 z-60 lg:hidden"
                            style={{ height: '100dvh' }}
                        >
                            {/* Decorative background elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                            {/* Gold accent line */}
                            <motion.div
                                className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-transparent via-gold to-transparent"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            />

                            {/* Scrollable Menu Content */}
                            <div className="relative z-10 h-full overflow-y-auto p-6 pt-24 pb-8">
                                {/* Navigation Links */}
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: i * 0.08,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 24
                                            }}
                                            className="border-b border-white/5"
                                        >
                                            {link.dropdown ? (
                                                <div>
                                                    {/* Dropdown Trigger */}
                                                    <button
                                                        onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                                        className="w-full flex items-center justify-between py-4 px-2 text-lg font-medium text-white hover:text-gold transition-colors group"
                                                    >
                                                        <span>{link.name}</span>
                                                        <motion.div
                                                            animate={{ rotate: mobileDropdownOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <ChevronDown className="w-5 h-5 group-hover:text-gold transition-colors" />
                                                        </motion.div>
                                                    </button>

                                                    {/* Dropdown Items */}
                                                    <AnimatePresence>
                                                        {mobileDropdownOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="overflow-hidden bg-zinc-900/50 rounded-xl mb-2"
                                                            >
                                                                <div className="py-2">
                                                                    {link.dropdown.map((item, idx) => (
                                                                        <motion.div
                                                                            key={item.name}
                                                                            initial={{ opacity: 0, x: -20 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{
                                                                                delay: idx * 0.05,
                                                                                type: "spring",
                                                                                stiffness: 400
                                                                            }}
                                                                        >
                                                                            <Link
                                                                                href={item.href}
                                                                                onClick={() => {
                                                                                    setIsOpen(false);
                                                                                    setMobileDropdownOpen(false);
                                                                                }}
                                                                                className="block py-3 px-4 text-sm text-white/70 hover:text-gold hover:bg-gold/5 transition-all"
                                                                            >
                                                                                {item.name}
                                                                            </Link>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-4 px-2 text-lg font-medium text-white hover:text-gold transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            )}
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-8"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full py-4 text-center bg-gold text-black font-bold rounded-xl hover:bg-gold/90 transition-all"
                                    >
                                        Contact Us
                                    </Link>
                                </motion.div>

                                {/* Contact Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-10 pt-6 border-t border-white/10"
                                >
                                    <p className="text-white/40 text-sm mb-3">Get in touch</p>
                                    <a href="tel:+97141234567" className="block text-white/70 hover:text-gold transition-colors mb-2 text-sm">
                                        +971 4 123 4567
                                    </a>
                                    <a href="mailto:info@burjglobal.com" className="block text-white/70 hover:text-gold transition-colors text-sm">
                                        info@burjglobal.com
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
