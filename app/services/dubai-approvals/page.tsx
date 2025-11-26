"use client";

import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { motion, Variants } from "framer-motion";
import { 
    Building, 
    Utensils, 
    Heart, 
    GraduationCap, 
    Factory, 
    Palette, 
    ShoppingBag, 
    Dumbbell,
    Car,
    Home,
    Sparkles,
    Music,
    ArrowRight,
    CheckCircle,
    FileCheck,
    Clock,
    Shield
} from "lucide-react";
import Link from "next/link";

const approvalCategories = [
    {
        icon: <Utensils className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Food & Beverage Approvals",
        description: "Complete licensing and approvals for restaurants, cafes, food trading, catering services, and food manufacturing in Dubai.",
        approvals: [
            "Dubai Municipality Food License",
            "Food Safety Certification",
            "HACCP Certification",
            "Food Import Permits",
            "Restaurant Trade License",
            "Catering Service Approval"
        ],
        color: "from-orange-500/20"
    },
    {
        icon: <Heart className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Healthcare Approvals",
        description: "Medical facility licensing, healthcare professional permits, and DHA approvals for clinics, pharmacies, and medical centers.",
        approvals: [
            "DHA Facility License",
            "Medical Professional License",
            "Pharmacy License",
            "Medical Equipment Import",
            "Clinical Laboratory Approval",
            "Healthcare Advertisement Permit"
        ],
        color: "from-red-500/20"
    },
    {
        icon: <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Education Approvals",
        description: "KHDA approvals for schools, training institutes, tutoring centers, and educational service providers in Dubai.",
        approvals: [
            "KHDA School License",
            "Training Institute Permit",
            "Tutoring Center License",
            "E-Learning Platform Approval",
            "Nursery & Daycare License",
            "Educational Consultant Permit"
        ],
        color: "from-blue-500/20"
    },
    {
        icon: <Factory className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Industrial Approvals",
        description: "Manufacturing licenses, industrial permits, and environmental clearances for factories and production facilities.",
        approvals: [
            "Industrial License",
            "Environmental Clearance",
            "Factory Construction Permit",
            "Hazardous Material Handling",
            "Industrial Waste Management",
            "Quality Certification Support"
        ],
        color: "from-gray-500/20"
    },
    {
        icon: <Palette className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Media & Entertainment",
        description: "NMC approvals for media production, advertising, events, filming permits, and entertainment businesses.",
        approvals: [
            "Media License (NMC)",
            "Filming Permit",
            "Event Management License",
            "Advertising Agency Approval",
            "Content Production Permit",
            "Artist/Performer Permit"
        ],
        color: "from-purple-500/20"
    },
    {
        icon: <ShoppingBag className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Retail & Trading",
        description: "Commercial trading licenses, e-commerce permits, and retail store approvals for Dubai's thriving market.",
        approvals: [
            "Commercial Trade License",
            "E-Commerce License",
            "Import/Export Code",
            "Retail Store Approval",
            "Warehouse License",
            "Distribution Agreement"
        ],
        color: "from-green-500/20"
    },
    {
        icon: <Dumbbell className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Sports & Fitness",
        description: "Gym licenses, sports facility permits, and fitness instructor certifications from Dubai Sports Council.",
        approvals: [
            "Gym & Fitness Center License",
            "Sports Academy Permit",
            "Personal Trainer License",
            "Swimming Pool Approval",
            "Sports Event Permit",
            "Yoga/Wellness Center License"
        ],
        color: "from-yellow-500/20"
    },
    {
        icon: <Sparkles className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Beauty & Wellness",
        description: "Salon licenses, spa permits, and beauty professional certifications from Dubai Municipality and DHA.",
        approvals: [
            "Beauty Salon License",
            "Spa & Massage Center Permit",
            "Cosmetics Trading License",
            "Beauty Therapist Approval",
            "Nail Salon License",
            "Men's Grooming Salon Permit"
        ],
        color: "from-pink-500/20"
    },
    {
        icon: <Car className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Automotive Approvals",
        description: "RTA approvals for car dealerships, rental services, garages, and automotive trading businesses.",
        approvals: [
            "Car Dealership License",
            "Car Rental Permit (RTA)",
            "Garage & Workshop License",
            "Auto Parts Trading",
            "Vehicle Import Permit",
            "Driving School License"
        ],
        color: "from-slate-500/20"
    },
    {
        icon: <Home className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Real Estate Approvals",
        description: "RERA registration, broker licenses, and property management approvals for Dubai's real estate sector.",
        approvals: [
            "RERA Broker License",
            "Property Management Permit",
            "Real Estate Developer License",
            "Holiday Home Permit",
            "Property Valuation License",
            "Facility Management Approval"
        ],
        color: "from-teal-500/20"
    },
    {
        icon: <Building className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Construction Approvals",
        description: "Building permits, contractor licenses, and construction-related approvals from Dubai Municipality.",
        approvals: [
            "Building Permit",
            "Contractor Classification",
            "Engineering Consultant License",
            "Interior Fit-out Approval",
            "Structural Safety Certificate",
            "Completion Certificate"
        ],
        color: "from-amber-500/20"
    },
    {
        icon: <Music className="w-7 h-7 md:w-8 md:h-8" />,
        title: "Tourism & Hospitality",
        description: "DTCM licenses for hotels, tour operators, travel agencies, and tourism-related businesses.",
        approvals: [
            "Hotel License (DTCM)",
            "Tour Operator Permit",
            "Travel Agency License",
            "Tourist Guide Permit",
            "Holiday Home License",
            "Tourism Transport Permit"
        ],
        color: "from-cyan-500/20"
    },
];

const processSteps = [
    {
        icon: <FileCheck className="w-5 h-5 md:w-6 md:h-6" />,
        title: "Document Assessment",
        description: "We review your requirements and prepare the complete documentation package"
    },
    {
        icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
        title: "Application Filing",
        description: "Submit applications to relevant government authorities with expert follow-up"
    },
    {
        icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
        title: "Approval Processing",
        description: "Handle all inspections, queries, and compliance requirements"
    },
    {
        icon: <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
        title: "License Delivery",
        description: "Receive your approved licenses and permits ready for operations"
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
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

export default function DubaiApprovalsPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Dubai Approvals"
                subtitle="Expert Assistance for All Government Approvals & Permits. Navigate Dubai's regulatory landscape with confidence."
                ctaText="Get Approval Help"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-4.png"
            />

            {/* Process Section */}
            <section className="py-12 md:py-16 border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div 
                        className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative text-center p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-gold/30 transition-all duration-300"
                            >
                                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 text-gold mb-3 md:mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-white font-semibold text-sm md:text-base mb-1 md:mb-2">{step.title}</h3>
                                <p className="text-white/60 text-xs md:text-sm leading-relaxed">{step.description}</p>
                                {index < 3 && (
                                    <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-gold/30 z-10">
                                        <ArrowRight className="w-6 h-6" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Approvals Categories Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6">
                    <SectionTitle
                        title="Dubai Government Approvals"
                        subtitle="Industry-Specific Licensing Solutions"
                        centered
                    />

                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {approvalCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${category.color} to-transparent rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative h-full p-5 md:p-6 rounded-2xl md:rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-all duration-500 flex flex-col">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-4 md:mb-5 group-hover:bg-gold group-hover:text-black transition-all duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-gold transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-white/60 text-xs md:text-sm mb-4 md:mb-5 leading-relaxed">
                                        {category.description}
                                    </p>
                                    <div className="grow">
                                        <h4 className="text-xs font-semibold text-gold/80 uppercase tracking-wider mb-2 md:mb-3">Approvals We Handle:</h4>
                                        <ul className="space-y-1.5 md:space-y-2">
                                            {category.approvals.map((approval, i) => (
                                                <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-white/70">
                                                    <CheckCircle className="w-3 h-3 text-gold shrink-0" />
                                                    {approval}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link 
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-gold text-sm font-medium mt-4 md:mt-6 hover:gap-3 transition-all duration-300"
                                    >
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-zinc-900/30">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                        <div>
                            <SectionTitle
                                title="Why Choose Us for Dubai Approvals?"
                                subtitle="Expert Government Liaison"
                            />
                            <p className="text-white/70 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                                Navigating Dubai&apos;s regulatory requirements can be complex and time-consuming. 
                                Our team of experts has deep relationships with government departments and 
                                in-depth knowledge of approval processes across all industries.
                            </p>
                            <ul className="space-y-3 md:space-y-4">
                                {[
                                    "Direct liaison with Dubai Municipality, DHA, KHDA, RTA, DTCM & more",
                                    "Fast-track processing with priority handling",
                                    "Complete documentation preparation and review",
                                    "Inspection coordination and compliance support",
                                    "Post-approval renewals and amendments",
                                    "Transparent pricing with no hidden charges"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 md:gap-3 text-white/80 text-sm md:text-base">
                                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-gold shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-gold/5 to-transparent rounded-2xl md:rounded-3xl blur-2xl" />
                            <div className="relative bg-zinc-900/80 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-gold/20">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Key Government Departments</h3>
                                <div className="grid grid-cols-2 gap-3 md:gap-4">
                                    {[
                                        { name: "Dubai Municipality", abbr: "DM" },
                                        { name: "Dubai Health Authority", abbr: "DHA" },
                                        { name: "KHDA Education", abbr: "KHDA" },
                                        { name: "Roads & Transport", abbr: "RTA" },
                                        { name: "Tourism Authority", abbr: "DTCM" },
                                        { name: "National Media Council", abbr: "NMC" },
                                        { name: "Economy & Tourism", abbr: "DET" },
                                        { name: "Civil Defence", abbr: "DCD" },
                                    ].map((dept, i) => (
                                        <div key={i} className="p-3 md:p-4 bg-black/40 rounded-lg md:rounded-xl border border-white/10 hover:border-gold/30 transition-colors">
                                            <div className="text-gold font-bold text-base md:text-lg">{dept.abbr}</div>
                                            <div className="text-white/60 text-xs md:text-sm">{dept.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(171,148,35,0.15),transparent_50%)]" />
                        <div className="relative z-10">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                                Need Help with Government Approvals?
                            </h2>
                            <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
                                Don&apos;t let complex approval processes slow down your business. 
                                Our expert team handles all the paperwork and government liaison so you can focus on growing your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-gold/90 transition-colors"
                                >
                                    Get Free Consultation <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base border border-white/30 hover:border-gold hover:text-gold transition-colors"
                                >
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
