import type { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { FileCheck, UserCheck, RefreshCw, FileText, Stamp, CreditCard, FileSignature } from "lucide-react";

export const metadata: Metadata = {
    title: "PRO & Government Services | Burj Global",
    description: "Professional PRO services in Dubai. Visa stamping, Emirates ID, medical typing, license renewals, and government document clearing.",
};

export default function ProServicesPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="PRO & Government Services"
                subtitle="Fast, Reliable & Professional PRO Support. We ensure full compliance with UAE regulations."
                ctaText="Contact Us"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-7.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Our PRO Services"
                        subtitle="Hassle-Free Processing"
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {[
                            { title: "Visa Stamping", icon: <Stamp className="w-6 h-6" /> },
                            { title: "Medical & Biometrics", icon: <UserCheck className="w-6 h-6" /> },
                            { title: "Emirates ID", icon: <CreditCard className="w-6 h-6" /> },
                            { title: "Labour File Creation", icon: <FileText className="w-6 h-6" /> },
                            { title: "Immigration File", icon: <FileCheck className="w-6 h-6" /> },
                            { title: "NOCs", icon: <FileSignature className="w-6 h-6" /> },
                            { title: "Attestations", icon: <Stamp className="w-6 h-6" /> },
                            { title: "License Renewals", icon: <RefreshCw className="w-6 h-6" /> },
                            { title: "Amendments", icon: <FileText className="w-6 h-6" /> },
                            { title: "Typing Center Documentation", icon: <FileText className="w-6 h-6" /> },
                            { title: "VAT Registration", icon: <FileCheck className="w-6 h-6" /> },
                            { title: "Establishment Card", icon: <CreditCard className="w-6 h-6" /> },
                        ].map((service, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-colors">
                                <div className="text-gold shrink-0">
                                    {service.icon}
                                </div>
                                <span className="text-white font-medium">{service.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
