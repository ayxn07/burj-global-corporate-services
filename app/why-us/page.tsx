"use client";

import { motion } from "framer-motion";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import MagneticButton from "@/components/MagneticButton";
import { Shield, Zap, Award, Users, Target, Globe, CheckCircle, TrendingUp, Clock, Phone, FileCheck, Sparkles, Building2 } from "lucide-react";

export default function WhyUsPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Why Choose Burj Global?"
                subtitle="Your Trusted Partner for Business Success in the UAE. Discover what makes us the preferred choice for entrepreneurs, investors, and global companies."
                ctaText="Start Your Journey"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-5.png"
            />

            {/* Hero Stats Section */}
            <section className="py-16 bg-zinc-900/50 border-y border-white/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Companies Formed", icon: <Building2 className="w-6 h-6" /> },
                            { number: "1000+", label: "Visas Processed", icon: <Users className="w-6 h-6" /> },
                            { number: "98%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
                            { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="flex justify-center mb-4 text-gold">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Advantages */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="The Burj Global Advantage"
                            subtitle="What Sets Us Apart"
                            centered
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                icon: <Shield className="w-10 h-10" />,
                                title: "Fully Licensed & Regulated",
                                desc: "We are a government-approved corporate services provider authorized to operate in the UAE. Your business is in safe, compliant hands.",
                                color: "from-blue-500/20 to-blue-600/5"
                            },
                            {
                                icon: <Zap className="w-10 h-10" />,
                                title: "Fast-Track Processing",
                                desc: "Our strong relationships with government authorities ensure priority processing and quick turnaround times for all services.",
                                color: "from-yellow-500/20 to-yellow-600/5"
                            },
                            {
                                icon: <Award className="w-10 h-10" />,
                                title: "Expert Consultants",
                                desc: "Our team comprises experienced professionals with deep knowledge of UAE business regulations and market dynamics.",
                                color: "from-purple-500/20 to-purple-600/5"
                            },
                            {
                                icon: <Users className="w-10 h-10" />,
                                title: "Dedicated Account Manager",
                                desc: "Every client gets a personal consultant who guides them through the entire process and remains available post-setup.",
                                color: "from-green-500/20 to-green-600/5"
                            },
                            {
                                icon: <Target className="w-10 h-10" />,
                                title: "Zero-Error Documentation",
                                desc: "Meticulous attention to detail ensures all paperwork is accurate the first time, avoiding costly delays and rejections.",
                                color: "from-red-500/20 to-red-600/5"
                            },
                            {
                                icon: <Globe className="w-10 h-10" />,
                                title: "Complete Ecosystem",
                                desc: "From business setup to marketing and branding, we provide everything you need to succeed under one roof.",
                                color: "from-cyan-500/20 to-cyan-600/5"
                            },
                        ].map((advantage, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${advantage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl`} />
                                <div className="relative p-8 rounded-3xl border border-white/10 bg-zinc-900/50 group-hover:border-gold/50 transition-all duration-500 h-full">
                                    <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-black transition-all duration-300 group-hover:scale-110">
                                        {advantage.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">{advantage.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparency & Trust */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <SectionTitle
                                title="Transparency You Can Trust"
                                subtitle="Our Commitment"
                            />
                            <div className="space-y-6 mt-8">
                                {[
                                    {
                                        title: "Fixed, Transparent Pricing",
                                        desc: "No hidden fees, no surprises. What we quote is what you pay."
                                    },
                                    {
                                        title: "Clear Communication",
                                        desc: "Regular updates at every stage keep you informed and in control."
                                    },
                                    {
                                        title: "Honest Advice",
                                        desc: "We recommend what's best for your business, not what's most profitable for us."
                                    },
                                    {
                                        title: "Confidentiality Guaranteed",
                                        desc: "Your business information is protected with the highest level of security."
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex gap-4 p-4 rounded-xl bg-black/30 border border-white/5 hover:border-gold/30 transition-colors"
                                    >
                                        <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-1" />
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                            <p className="text-white/60 text-sm">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-3xl overflow-hidden border border-gold/30"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-transparent to-gold/5" />
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073')] bg-cover bg-center opacity-40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-24 h-24 mx-auto rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-6 border-2 border-gold">
                                        <Sparkles className="w-12 h-12 text-gold" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">Trusted by 500+ Businesses</h3>
                                    <p className="text-white/80 text-lg">Building success stories since day one</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Excellence */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="Our Process Excellence"
                            subtitle="How We Deliver"
                            centered
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { step: "01", title: "Free Consultation", desc: "Understand your needs and recommend the best solution", icon: <Phone className="w-8 h-8" /> },
                            { step: "02", title: "Documentation", desc: "Prepare all documents with precision and accuracy", icon: <FileCheck className="w-8 h-8" /> },
                            { step: "03", title: "Swift Processing", desc: "Fast-track your application through government channels", icon: <Zap className="w-8 h-8" /> },
                            { step: "04", title: "Ongoing Support", desc: "Continue supporting you long after setup", icon: <Users className="w-8 h-8" /> },
                        ].map((process, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold text-black font-bold text-xl flex items-center justify-center shadow-xl shadow-gold/50 z-10">
                                    {process.step}
                                </div>
                                <div className="pt-10 pb-8 px-6 rounded-2xl border-2 border-gold/20 bg-zinc-900/50 group-hover:border-gold transition-all duration-500 text-center h-full">
                                    <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                        {process.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{process.title}</h3>
                                    <p className="text-white/60 text-sm">{process.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Highlight */}
            <section className="py-24 bg-linear-to-b from-zinc-900/30 to-black">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle
                            title="What Our Clients Say"
                            subtitle="Real Success Stories"
                            centered
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                quote: "Burj Global made our mainland setup seamless. Their expertise and dedication are unmatched.",
                                author: "David Chen",
                                role: "Real Estate Investor",
                                rating: 5
                            },
                            {
                                quote: "From company formation to branding, they handled everything perfectly. True professionals!",
                                author: "Emma Wilson",
                                role: "Digital Agency Founder",
                                rating: 5
                            },
                            {
                                quote: "Fast, transparent, and reliable. Burj Global exceeded all our expectations.",
                                author: "Maria Santos",
                                role: "Consulting Firm Owner",
                                rating: 5
                            },
                        ].map((testimonial, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-zinc-900/50 border border-gold/20 hover:border-gold transition-all duration-500"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <span key={j} className="text-gold text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-white/80 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.author}</h4>
                                        <p className="text-white/50 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-gold/20 via-gold/10 to-gold/20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Ready to Experience the Difference?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
                    >
                        Join 500+ successful businesses who chose Burj Global. Let's build your success story together.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <MagneticButton variant="primary" href="/contact" className="text-xl px-12 py-6">
                            Get Started Today
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
