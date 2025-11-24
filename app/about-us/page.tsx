"use client";

import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";
import MagneticButton from "@/components/MagneticButton";
import { Target, Eye, Heart, Shield, Users, TrendingUp, Globe, Award, CheckCircle } from "lucide-react";

const testimonials = [
    { question: "Sarah Johnson - Tech Startup Founder", answer: "Burj Global made our Dubai setup incredibly smooth. Their team handled everything from licensing to visas. Highly professional!" },
    { question: "Ahmed Al-Rashid - E-commerce Entrepreneur", answer: "Best decision was choosing Burj Global. They not only set up our company but also helped with branding and marketing." },
    { question: "Maria Santos - Consulting Firm Owner", answer: "Transparent pricing, expert advice, and fast processing. Burj Global exceeded all our expectations." },
    { question: "David Chen - Real Estate Investor", answer: "Professional service from start to finish. They made the entire mainland setup process seamless and stress-free." },
    { question: "Fatima Al-Mansoori - Trading Company CEO", answer: "Outstanding support team! They guided us through every step and ensured complete compliance." },
    { question: "James Mitchell - Marketing Agency Owner", answer: "The integrated approach of business setup and creative services saved us tremendous time and effort." },
];

const faqs = [
    { question: "What makes Burj Global different from other service providers?", answer: "We offer a complete ecosystem under one roof - from business setup to marketing and branding. Our licensed consultants provide personalized attention, transparent pricing, and guaranteed compliance." },
    { question: "Are you licensed to provide corporate services?", answer: "Yes, Burj Global Corporate Services L.L.C is fully licensed and authorized to provide business setup and corporate services in the UAE." },
    { question: "Do you offer post-setup support?", answer: "Absolutely! We provide ongoing support including compliance management, visa renewals, license renewals, and business growth services including marketing and PR." },
    { question: "What is your pricing structure?", answer: "We offer transparent, fixed pricing with no hidden costs. Each package is customized based on your specific needs. Contact us for a detailed quote." },
];

export default function AboutPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="About Burj Global"
                subtitle="A Trusted Partner in the UAE Business Landscape"
                ctaText="Contact Us"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-1.png"
            />

            {/* Intro Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionTitle
                                title="Who We Are"
                                subtitle="Our Story"
                            />
                            <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                Burj Global Corporate Services L.L.C was formed with a mission: to simplify UAE business establishment and create a dependable corporate support system for global entrepreneurs, investors, and companies entering Dubai.
                            </p>
                            <p className="text-lg text-white/70 mb-6 leading-relaxed">
                                Dubai is one of the world’s most dynamic markets—and we help our clients navigate it with confidence.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 group">
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent z-10" />
                            <img
                                src="/Hero-Section-Images/Hero-section-image-4.png"
                                alt="Dubai Business District"
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-gold/30 via-gold/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-12 rounded-3xl bg-linear-to-br from-zinc-900/80 to-black border-2 border-gold/20 group-hover:border-gold transition-all duration-500 h-full">
                                <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-gold/5 blur-2xl" />
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <Eye className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-gold transition-colors">Our Vision</h3>
                                    <div className="h-1 w-16 bg-gold mb-6 group-hover:w-24 transition-all duration-500" />
                                    <p className="text-white/80 leading-relaxed text-lg">
                                        To become the UAE's most reliable, efficient, and comprehensive business setup and corporate consultancy firm, recognized globally for excellence in service delivery and client success.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-gold/30 via-gold/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative p-12 rounded-3xl bg-linear-to-br from-zinc-900/80 to-black border-2 border-gold/20 group-hover:border-gold transition-all duration-500 h-full">
                                <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-gold/5 blur-2xl" />
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <Target className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-gold transition-colors">Our Mission</h3>
                                    <div className="h-1 w-16 bg-gold mb-6 group-hover:w-24 transition-all duration-500" />
                                    <ul className="space-y-4 text-white/80">
                                        {[
                                            "Make business setup effortless and stress-free",
                                            "Provide accurate and compliant documentation",
                                            "Support long-term business growth",
                                            "Deliver integrated marketing, PR, and design solutions",
                                            "Offer unmatched customer service excellence"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="Our Core Values"
                            subtitle="What Drives Us"
                            centered
                        />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {[
                            { name: "Transparency", icon: <Shield className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Integrity", icon: <Heart className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Efficiency", icon: <TrendingUp className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Excellence", icon: <Award className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Confidentiality", icon: <Shield className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Client-Centric", icon: <Users className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Innovation", icon: <Globe className="w-6 h-6" />, color: "from-gold/20" },
                            { name: "Trust", icon: <Heart className="w-6 h-6" />, color: "from-gold/20" },
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${value.color} to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative text-center p-8 rounded-2xl bg-black border-2 border-white/10 group-hover:border-gold transition-all duration-500">
                                    <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-all duration-300 group-hover:scale-110">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{value.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="Client Success Stories"
                            subtitle="What Our Clients Say"
                            centered
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mt-16"
                    >
                        <Accordion items={testimonials} variant="testimonial" />
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="Frequently Asked Questions"
                            subtitle="Got Questions?"
                            centered
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mt-16"
                    >
                        <Accordion items={faqs} variant="faq" />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/10" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Let's Build Your Success Story
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
                    >
                        Partner with Burj Global and experience the difference that expertise, dedication, and personalized service can make.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <MagneticButton variant="primary" href="/contact" className="text-xl px-12 py-6">
                            Contact Us Today
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
