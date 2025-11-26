"use client";

import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";

import { motion, Variants } from "framer-motion";
import { 
    Building2, 
    Globe, 
    RefreshCw, 
    FileCheck, 
    Users, 
    Landmark, 
    Receipt, 
    ArrowRight,
    CheckCircle,
    Clock,
    Shield,
    Headphones
} from "lucide-react";
import Link from "next/link";

const onlineServices = [
    {
        icon: <Building2 className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Business Setup Mainland",
        description: "Complete mainland company formation with DET. Get 100% foreign ownership, unlimited visas, and full UAE market access.",
        features: ["Trade Name Registration", "Initial Approval", "MOA Drafting", "License Issuance"],
        link: "/services/dubai-mainland"
    },
    {
        icon: <Globe className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Freezone Business Setup",
        description: "Establish your business in UAE's premium free zones with tax benefits, 100% ownership, and streamlined procedures.",
        features: ["Zone Selection", "Activity Approval", "Visa Processing", "Office Solutions"],
        link: "/services/uae-freezone"
    },
    {
        icon: <Building2 className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Business Setup Offshore",
        description: "Set up an offshore entity in UAE for asset protection, international trading, and tax-efficient structures.",
        features: ["RAK ICC", "JAFZA Offshore", "AJMAN Offshore", "Bank Account Opening"],
        link: "/services/offshore"
    },
    {
        icon: <RefreshCw className="w-7 h-7 md:w-8 md:h-8" />,
        title: "License Renewal",
        description: "Hassle-free license renewal services for mainland, freezone, and offshore companies across all UAE jurisdictions.",
        features: ["Trade License", "Commercial License", "Professional License", "Industrial License"],
        link: "/contact"
    },
    {
        icon: <FileCheck className="w-7 h-7 md:w-8 md:h-8" />,
        title: "PRO Services",
        description: "Professional PRO services for all government transactions including visa processing, document clearing, and attestations.",
        features: ["Visa Stamping", "Emirates ID", "Labour Cards", "Document Attestation"],
        link: "/services/pro-services"
    },
    {
        icon: <Users className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Visa Services",
        description: "Complete visa solutions including investor visas, employment visas, family sponsorship, and golden visa assistance.",
        features: ["Investor Visa", "Employment Visa", "Family Visa", "Golden Visa"],
        link: "/services/visas"
    },
    {
        icon: <Landmark className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Bank Account Services",
        description: "Corporate bank account opening assistance with leading UAE banks. We handle documentation and liaison for quick approvals.",
        features: ["Corporate Accounts", "Multi-Currency", "Online Banking", "Trade Finance"],
        link: "/contact"
    },
    {
        icon: <Receipt className="w-7 h-7 md:w-8 md:h-8" />,
        title: "VAT Services",
        description: "Complete VAT compliance services including registration, filing, refunds, and audit support for UAE businesses.",
        features: ["VAT Registration", "Return Filing", "Refund Claims", "Audit Support"],
        link: "/services/compliance"
    },
];

const benefits = [
    {
        icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
        title: "Quick Processing",
        description: "Fast-track your applications with our streamlined digital processes"
    },
    {
        icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
        title: "100% Compliance",
        description: "All services fully compliant with UAE government regulations"
    },
    {
        icon: <Headphones className="w-5 h-5 md:w-6 md:h-6" />,
        title: "24/7 Support",
        description: "Round-the-clock assistance for all your business needs"
    },
    {
        icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
        title: "Guaranteed Results",
        description: "Successful outcomes backed by our expert team"
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        }
    }
};

export default function OnlineServicesPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Online Services"
                subtitle="Comprehensive Business Solutions at Your Fingertips. Access all UAE business services digitally with expert support."
                ctaText="Get Started"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-3.png"
            />

            {/* Benefits Section */}
            <section className="py-12 md:py-16 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div 
                        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-gold/30 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 text-gold mb-3 md:mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-white font-semibold text-sm md:text-base mb-1 md:mb-2">{benefit.title}</h3>
                                <p className="text-white/60 text-xs md:text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <SectionTitle
                        title="Our Online Services"
                        subtitle="Complete Business Solutions"
                        centered
                    />

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {onlineServices.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-gold/20 to-transparent rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-all duration-500 flex flex-col">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 md:mb-5 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-gold transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/60 text-xs md:text-sm mb-4 md:mb-5 grow leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-white/70">
                                                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-gold shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link 
                                        href={service.link}
                                        className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all duration-300"
                                    >
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-zinc-900/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <SectionTitle
                        title="How It Works"
                        subtitle="Simple 4-Step Process"
                        centered
                    />

                    <motion.div 
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { step: "01", title: "Choose Service", desc: "Select the service you need from our comprehensive offerings" },
                            { step: "02", title: "Submit Documents", desc: "Upload required documents through our secure portal" },
                            { step: "03", title: "Processing", desc: "Our experts handle all government procedures" },
                            { step: "04", title: "Receive Results", desc: "Get your approved documents delivered digitally" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative text-center p-4 md:p-0"
                            >
                                <div className="text-4xl md:text-6xl font-bold text-gold/20 mb-2 md:mb-4">{item.step}</div>
                                <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                                <p className="text-white/60 text-xs md:text-base leading-relaxed">{item.desc}</p>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-gold/30">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div 
                        className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-linear-to-br from-gold/20 via-gold/5 to-transparent p-8 md:p-12 lg:p-16 text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(171,148,35,0.1),transparent_50%)]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                                Ready to Start Your Business Journey?
                            </h2>
                            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
                                Get expert assistance for all your business setup and government service needs. 
                                Our team is ready to help you navigate the UAE business landscape.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-gold text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-gold/90 transition-colors"
                            >
                                Contact Us Today <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
