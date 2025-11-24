"use client";

import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCards";
import Accordion from "@/components/Accordion";
import MagneticButton from "@/components/MagneticButton";
import { Building2, Globe, Briefcase, FileText, Users, ShieldCheck, Palette, Megaphone, Mic2, PenTool, MessageSquare, Monitor } from "lucide-react";

const testimonials = [
    { question: "James Mitchell - Real Estate Investor", answer: "Burj Global's comprehensive service portfolio is impressive. From company setup to ongoing compliance, they handle everything professionally. Their team's knowledge of UAE regulations is exceptional." },
    { question: "Linda Park - Marketing Agency Owner", answer: "We needed both business setup and marketing services. Burj Global delivered on both fronts perfectly. Their integrated approach made everything seamless and efficient." },
    { question: "Omar Hassan - Trading Company CEO", answer: "Fast, reliable, and professional. Burj Global set up our mainland company in record time and continues to support us with PRO services. Highly recommended!" },
];

const faqs = [
    { question: "Which service is right for my business?", answer: "It depends on your business activities and goals. Mainland is ideal for trading within UAE, freezones offer tax benefits and 100% ownership, while offshore is perfect for asset protection. Contact us for a free consultation." },
    { question: "Do you provide packages or individual services?", answer: "We offer both comprehensive packages and individual services. You can choose a complete business setup package or select specific services like visa processing or PRO services." },
    { question: "Can you help with rebranding an existing company?", answer: "Absolutely! Our branding and marketing team specializes in both new brand creation and rebranding existing businesses. We offer logo design, brand strategy, and full creative services." },
    { question: "What ongoing services do you provide after setup?", answer: "We provide license renewals, visa renewals, compliance management, accounting support, PRO services, marketing, and business development support throughout your business journey." },
];

const allServices = [
    {
        title: "Dubai Mainland Business Setup",
        description: "Complete mainland company formation with 100% ownership options.",
        icon: <Building2 className="w-6 h-6" />,
        href: "/services/dubai-mainland",
    },
    {
        title: "UAE Freezone Business Setup",
        description: "Setup in top freezones like IFZA, DMCC, RAKEZ with tax benefits.",
        icon: <Globe className="w-6 h-6" />,
        href: "/services/uae-freezone",
    },
    {
        title: "Offshore Company Formation",
        description: "International business structures for asset protection and privacy.",
        icon: <Briefcase className="w-6 h-6" />,
        href: "/services/offshore",
    },
    {
        title: "PRO & Government Services",
        description: "Visa processing, document clearing, and government approvals.",
        icon: <FileText className="w-6 h-6" />,
        href: "/services/pro-services",
    },
    {
        title: "Investor, Partner & Family Visas",
        description: "Comprehensive visa solutions for investors, partners, and families.",
        icon: <Users className="w-6 h-6" />,
        href: "/services/visas",
    },
    {
        title: "Corporate Compliance & Tax Support",
        description: "VAT registration, corporate tax, and regulatory compliance.",
        icon: <ShieldCheck className="w-6 h-6" />,
        href: "/services/compliance",
    },
    {
        title: "Branding & Identity Design",
        description: "Strategic brand development and visual identity design.",
        icon: <Palette className="w-6 h-6" />,
        href: "/services/branding",
    },
    {
        title: "Marketing Management",
        description: "Digital marketing, SEO, and social media management.",
        icon: <Megaphone className="w-6 h-6" />,
        href: "/services/marketing-pr",
    },
    {
        title: "Public Relations (PR) Management",
        description: "Media relations, press releases, and corporate communications.",
        icon: <Mic2 className="w-6 h-6" />,
        href: "/services/marketing-pr",
    },
    {
        title: "Creative & Digital Design Services",
        description: "Graphic design for brochures, profiles, and marketing materials.",
        icon: <PenTool className="w-6 h-6" />,
        href: "/services/marketing-pr",
    },
    {
        title: "Corporate Communication Services",
        description: "Internal and external corporate communication strategies.",
        icon: <MessageSquare className="w-6 h-6" />,
        href: "/services/marketing-pr",
    },
    {
        title: "Website Development & Digital Presence",
        description: "Professional website development and digital solutions.",
        icon: <Monitor className="w-6 h-6" />,
        href: "/services/marketing-pr",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Our Services"
                subtitle="Comprehensive Solutions for Your Business Growth"
                ctaText="Get a Quote"
                ctaLink="/contact"
            />

            {/* Service Categories */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="What We Offer"
                            subtitle="End-to-End Solutions"
                            centered
                        />
                    </motion.div>

                    {/* Business Formation Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-16 mb-12"
                    >
                        <h3 className="text-2xl font-bold text-gold mb-2 text-center">Business Formation</h3>
                        <p className="text-white/60 text-center max-w-2xl mx-auto">Complete company setup solutions across mainland, freezone, and offshore jurisdictions</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {allServices.slice(0, 3).map((service, index) => (
                            <ServiceCard
                                key={index}
                                index={index}
                                {...service}
                            />
                        ))}
                    </div>

                    {/* Support Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold text-gold mb-2 text-center">Support & Compliance</h3>
                        <p className="text-white/60 text-center max-w-2xl mx-auto">Ongoing assistance with visas, PRO services, and regulatory compliance</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {allServices.slice(3, 6).map((service, index) => (
                            <ServiceCard
                                key={index}
                                index={index + 3}
                                {...service}
                            />
                        ))}
                    </div>

                    {/* Creative Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h3 className="text-2xl font-bold text-gold mb-2 text-center">Branding & Marketing</h3>
                        <p className="text-white/60 text-center max-w-2xl mx-auto">Full-service creative solutions to build and grow your brand</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.slice(6).map((service, index) => (
                            <ServiceCard
                                key={index}
                                index={index + 6}
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-24 bg-zinc-900/30">
                <div className="container mx-auto px-4 sm:px-6">
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
            <section className="py-24">
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
            <section className="py-20 sm:py-32 relative overflow-hidden bg-zinc-900/30">
                <div className="absolute inset-0 bg-linear-to-r from-gold/20 via-gold/10 to-gold/20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Ready to Get Started?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
                    >
                        Choose from our comprehensive range of services and let us help you build your business in the UAE.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <MagneticButton variant="primary" href="/contact" className="text-xl px-12 py-6">
                            Book Free Consultation
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
