import type { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { Users, Briefcase, Heart, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Investor, Partner & Family Visas | Burj Global",
    description: "Complete visa management solutions in Dubai. Investor visas, partner visas, employee visas, and family sponsorship.",
};

export default function VisasPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Investor, Partner & Family Visas"
                subtitle="Complete Visa Management Solutions. We provide a hassle-free, end-to-end visa support system."
                ctaText="Get Visa Assistance"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-8.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <SectionTitle
                                title="We Assist With"
                                subtitle="Comprehensive Support"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {[
                                    "Investor visas",
                                    "Partner visas",
                                    "Employee visas",
                                    "Dependent visas (wife, children, parents)",
                                    "Entry permit",
                                    "Status change",
                                    "Emirates ID",
                                    "Visa stamping",
                                    "Renewals",
                                    "Medical & biometrics",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-white/5">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Star className="w-8 h-8 text-gold" />
                                    <h3 className="text-xl font-bold text-white">Investor & Partner Visas</h3>
                                </div>
                                <p className="text-white/60">
                                    Secure your residency through business ownership or investment. We handle the entire process for 2-year, 5-year, and 10-year Golden Visas.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Briefcase className="w-8 h-8 text-gold" />
                                    <h3 className="text-xl font-bold text-white">Employee Visas</h3>
                                </div>
                                <p className="text-white/60">
                                    Efficient processing for your team. From labour quota approval to visa stamping, we ensure your employees are legally sponsored.
                                </p>
                            </div>

                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Heart className="w-8 h-8 text-gold" />
                                    <h3 className="text-xl font-bold text-white">Family & Dependent Visas</h3>
                                </div>
                                <p className="text-white/60">
                                    Bring your loved ones to the UAE. We assist with sponsoring spouses, children, and parents, ensuring all requirements are met.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
