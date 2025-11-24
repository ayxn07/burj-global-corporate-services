"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    href: string;
    index: number;
}

export default function ServiceCard({ title, description, icon, href, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-colors duration-300 will-change-transform"
        >
            <motion.div
                className="absolute inset-0"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.div
                className="absolute inset-0 bg-linear-to-br from-gold/10 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                    {icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {title}
                </h3>

                <p className="text-white/60 mb-6 line-clamp-3">
                    {description}
                </p>

                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-semibold text-white group-hover:text-gold transition-colors"
                >
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
}
