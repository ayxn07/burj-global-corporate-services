"use client";

import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";
import MagneticButton from "@/components/MagneticButton";
import { CheckCircle, DollarSign, FileText, Clock, Shield } from "lucide-react";

const faqs = [
    { question: "Can I trade inside the UAE with a freezone license?", answer: "Freezone companies can trade within the UAE by appointing a local distributor or obtaining a UAE mainland trade license. However, you can freely export and import internationally." },
    { question: "Which freezone is best for my business?", answer: "It depends on your business activity, budget, and visa requirements. IFZA and RAKEZ are cost-effective, while DMCC is ideal for commodities trading. We'll help you choose the right fit." },
    { question: "How many visas can I get with a freezone license?", answer: "Visa quota depends on your office size and package. Flexi-desk packages typically allow 1-3 visas, while full office setups can sponsor more employees." },
    { question: "What are the costs involved?", answer: "Freezone packages range from AED 10,000 to AED 50,000+ annually depending on the zone, license type, and office option. We provide transparent quotes with no hidden fees." },
];

const testimonials = [
    { question: "Ahmed Rashid - E-Commerce Entrepreneur", answer: "I started my online business with IFZA freezone through Burj Global. The process was incredibly smooth, and the costs were very affordable. Highly recommend!" },
    { question: "Lisa Wang - Business Consultant", answer: "Burj Global helped me set up my consultancy in SHAMS freezone. Their team was professional, and I got my license in just 3 days. Excellent service!" },
];

export default function FreezonePage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="UAE Freezone Business Setup"
                subtitle="Setup Your Company in Any UAE Freezone. We assist in all major freezones including IFZA, Meydan, SHAMS, DMCC, RAKEZ, and more."
                ctaText="Compare Freezones"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-3.png"
            />

            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div>
                            <SectionTitle
                                title="Why UAE Freezones?"
                                subtitle="Business Freedom"
                            />
                            <p className="text-white/80 mb-6 leading-relaxed">
                                UAE Freezones are special economic zones designed to boost international business. They offer tax exemptions, 100% ownership, and simplified setup processes, making them ideal for startups, freelancers, and international trading companies.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    "100% foreign ownership",
                                    "Affordable packages",
                                    "Ideal for consulting, e-commerce, trading",
                                    "Fast business formation",
                                    "No customs duty inside freezones",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/90">
                                        <CheckCircle className="w-5 h-5 text-gold" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-gold/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-linear-to-br from-zinc-900/80 to-black p-10 rounded-3xl border-2 border-gold/20 group-hover:border-gold transition-all duration-500">
                                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-gold transition-colors">Freezone Services Include</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { icon: "🎯", title: "Freezone selection strategy", desc: "Expert guidance to choose the perfect freezone" },
                                        { icon: "📋", title: "License & activity planning", desc: "Comprehensive business activity consultation" },
                                        { icon: "🏢", title: "Workspace solutions", desc: "Flexi desk, office, or warehouse options" },
                                        { icon: "🎫", title: "Establishment card processing", desc: "Official company registration documentation" },
                                        { icon: "👥", title: "Visa quota allocation", desc: "Employee and dependent visa planning" },
                                        { icon: "✈️", title: "Investor visa services", desc: "Residence visa for business owners" },
                                        { icon: "👔", title: "Employee visa processing", desc: "Staff sponsorship and work permits" },
                                        { icon: "📄", title: "Document attestation", desc: "Complete document clearing services" },
                                        { icon: "🏦", title: "Banking assistance", desc: "Corporate account opening support" },
                                        { icon: "🔄", title: "Annual renewals", desc: "Hassle-free license renewal management" },
                                    ].map((service, i) => (
                                        <div key={i} className="relative group/card">
                                            <div className="absolute inset-0 bg-gold/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                            <div className="relative p-5 bg-black/40 rounded-xl border border-white/10 hover:border-gold/50 transition-all duration-300">
                                                <div className="flex items-start gap-4">
                                                    <span className="text-3xl shrink-0">{service.icon}</span>
                                                    <div>
                                                        <h4 className="text-white font-semibold mb-1 group-hover/card:text-gold transition-colors">{service.title}</h4>
                                                        <p className="text-white/60 text-sm">{service.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-24 bg-zinc-900/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <SectionTitle
                        title="Freezone Advantages"
                        subtitle="Why Businesses Choose Freezones"
                        centered
                    />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
                        {[
                            { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, title: "100% Ownership", desc: "Full foreign ownership with complete control" },
                            { icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Tax Benefits", desc: "0% corporate and personal income tax" },
                            { icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Quick Setup", desc: "Get licensed in 3-5 business days" },
                            { icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Easy Compliance", desc: "Simplified reporting and regulations" },
                        ].map((benefit, i) => (
                            <div key={i} className="p-4 sm:p-8 bg-black rounded-xl sm:rounded-2xl border-2 border-gold/20 text-center hover:border-gold transition-colors group">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3 sm:mb-4 group-hover:bg-gold group-hover:text-black transition-colors">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-sm sm:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-gold transition-colors">{benefit.title}</h3>
                                <p className="text-white/70 text-xs sm:text-sm hidden sm:block">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Freezone Comparison */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <SectionTitle
                        title="Top Freezone Packages"
                        subtitle="Comprehensive Comparison"
                        centered
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
                        {[
                            {
                                name: "IFZA Dubai",
                                icon: "🏢",
                                setup: "2-3 days",
                                visas: "1-3 Visas",
                                activities: "500+ Activities",
                                features: ["Flexi-desk", "Virtual office", "Fast approval", "E-commerce friendly"],
                                best: "Startups & Freelancers",
                                popular: true
                            },
                            {
                                name: "DMCC Dubai",
                                icon: "💎",
                                setup: "3-5 days",
                                visas: "Flexible quota",
                                activities: "Trading focus",
                                features: ["Prime location", "JLT offices", "Global reputation", "Commodity trading"],
                                best: "Trading Companies",
                                popular: false
                            },
                            {
                                name: "RAKEZ",
                                icon: "🌟",
                                setup: "2-4 days",
                                visas: "2-6 Visas",
                                activities: "Unlimited",
                                features: ["Cost-effective", "Industrial options", "Manufacturing", "Warehouse facilities"],
                                best: "Manufacturing & SMEs",
                                popular: false
                            },
                            {
                                name: "SHAMS Sharjah",
                                icon: "📱",
                                setup: "1-2 days",
                                visas: "1-2 Visas",
                                activities: "Media & tech",
                                features: ["Ultra-fast setup", "Budget-friendly", "Media licenses", "Tech startups"],
                                best: "Media & Tech",
                                popular: false
                            },
                        ].map((zone, i) => (
                            <div key={i} className={`relative group ${zone.popular ? 'lg:scale-105' : ''}`}>
                                {zone.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black px-4 py-1 rounded-full text-xs font-bold z-20">
                                        POPULAR
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className={`relative p-6 rounded-3xl h-full transition-all duration-500 ${zone.popular
                                    ? 'bg-linear-to-br from-gold/10 to-black border-2 border-gold'
                                    : 'bg-black border-2 border-gold/20 group-hover:border-gold'
                                    }`}>
                                    <div className="text-5xl mb-4 text-center">{zone.icon}</div>
                                    <h3 className="text-xl font-bold text-gold mb-4 text-center">{zone.name}</h3>
                                    <div className="space-y-2 mb-4 text-sm">
                                        <p className="text-white/80"><span className="text-gold">⏱</span> Setup: {zone.setup}</p>
                                        <p className="text-white/80"><span className="text-gold">👥</span> {zone.visas}</p>
                                        <p className="text-white/80"><span className="text-gold">📋</span> {zone.activities}</p>
                                    </div>
                                    <div className="border-t border-white/10 pt-4 mb-4">
                                        <ul className="space-y-2">
                                            {zone.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-white/70 text-xs">
                                                    <CheckCircle className="w-3 h-3 text-gold shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-center pt-3 border-t border-white/10">
                                        <p className="text-gold/80 text-xs font-semibold mb-3">{zone.best}</p>
                                        <MagneticButton variant={zone.popular ? "primary" : "secondary"} href="/contact" className="w-full text-sm">
                                            Get Quote
                                        </MagneticButton>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Activity Categories Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Business Activities"
                        subtitle="Approved Freezone Activities"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                        {[
                            {
                                category: "Trading & E-Commerce",
                                icon: "🛒",
                                activities: ["General Trading", "E-commerce", "Import/Export", "Retail Trading", "Wholesale Distribution", "B2B Sales"]
                            },
                            {
                                category: "Consulting & Services",
                                icon: "💼",
                                activities: ["Business Consulting", "Management Consulting", "IT Consulting", "HR Consulting", "Financial Advisory", "Strategy Consulting"]
                            },
                            {
                                category: "Technology & IT",
                                icon: "💻",
                                activities: ["Software Development", "App Development", "Web Design", "IT Services", "Cloud Solutions", "Cybersecurity"]
                            },
                            {
                                category: "Marketing & Media",
                                icon: "📢",
                                activities: ["Digital Marketing", "Social Media Management", "Content Creation", "Advertising", "PR Services", "Media Production"]
                            },
                            {
                                category: "Creative & Design",
                                icon: "🎨",
                                activities: ["Graphic Design", "Interior Design", "Fashion Design", "Photography", "Video Production", "Animation"]
                            },
                            {
                                category: "Education & Training",
                                icon: "📚",
                                activities: ["Training Services", "Educational Consultancy", "Online Courses", "Corporate Training", "Coaching", "E-learning"]
                            },
                        ].map((cat, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 bg-black rounded-2xl border-2 border-white/10 group-hover:border-gold transition-all h-full">
                                    <div className="text-4xl mb-4">{cat.icon}</div>
                                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{cat.category}</h4>
                                    <ul className="space-y-2">
                                        {cat.activities.map((activity, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                                                <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                                <span>{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-white/60 text-sm mt-8">...and 500+ more activities across all freezones</p>
                </div>
            </section>

            {/* Major Freezones */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="All Major Freezones"
                        subtitle="We Work With"
                        centered
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {[
                            "IFZA (Dubai)",
                            "Meydan (Dubai)",
                            "SHAMS (Sharjah)",
                            "DMCC (Dubai)",
                            "RAKEZ (Ras Al Khaimah)",
                            "SPC (Sharjah)",
                            "DSO (Dubai)",
                            "Ajman FZ",
                            "UAQ FZ",
                            "Fujairah Creative City",
                        ].map((zone, i) => (
                            <div key={i} className="p-6 bg-black rounded-xl border border-white/10 text-center hover:border-gold/50 transition-colors">
                                <span className="text-white font-medium">{zone}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Client Success Stories"
                        subtitle="What Our Clients Say"
                        centered
                    />
                    <div className="max-w-4xl mx-auto mt-16">
                        <Accordion items={testimonials} variant="testimonial" />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Frequently Asked Questions"
                        subtitle="Got Questions?"
                        centered
                    />
                    <div className="max-w-4xl mx-auto mt-16">
                        <Accordion items={faqs} variant="faq" />
                    </div>
                </div>
            </section>
        </div>
    );
}
