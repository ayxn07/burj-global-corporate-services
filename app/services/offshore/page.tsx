import type { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { Shield, Globe, Lock, Briefcase, Building } from "lucide-react";

export const metadata: Metadata = {
    title: "Offshore Company Formation | Burj Global",
    description: "Secure your assets with UAE Offshore company formation. RAK ICC and JAFZA Offshore solutions for international business and asset protection.",
};

export default function OffshorePage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Offshore Company Formation"
                subtitle="Confidential, Flexible & Globally Recognized Structures. We establish offshore companies in RAK ICC and JAFZA Offshore."
                ctaText="Get Started"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-4.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionTitle
                                title="Why Go Offshore?"
                                subtitle="Advantages"
                            />
                            <div className="space-y-6 mt-8">
                                <div className="flex gap-4">
                                    <Building className="w-8 h-8 text-gold shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white">No Physical Office</h4>
                                        <p className="text-white/60">Operate without the need for a physical office space in the UAE.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Shield className="w-8 h-8 text-gold shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white">No Corporate Tax</h4>
                                        <p className="text-white/60">Benefit from the UAE's tax-efficient environment for offshore entities.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Lock className="w-8 h-8 text-gold shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white">High Confidentiality</h4>
                                        <p className="text-white/60">Privacy for shareholders and directors is a key feature.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Globe className="w-8 h-8 text-gold shrink-0" />
                                    <div>
                                        <h4 className="text-lg font-bold text-white">International Credibility</h4>
                                        <p className="text-white/60">A UAE registered entity is recognized globally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-gold/5 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative bg-linear-to-br from-zinc-900/80 to-black p-10 rounded-3xl border-2 border-gold/20 group-hover:border-gold transition-all duration-500">
                                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-gold transition-colors">Ideal For</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: "🏢", title: "Holding companies", desc: "Manage international assets and subsidiaries" },
                                        { icon: "🌍", title: "International business", desc: "Conduct global trade operations" },
                                        { icon: "🛡️", title: "Asset protection", desc: "Safeguard wealth and investments" },
                                        { icon: "📊", title: "Estate planning", desc: "Structure inheritance and succession" },
                                        { icon: "💼", title: "Investment vehicles", desc: "Portfolio and fund management" },
                                        { icon: "🔒", title: "IP holdings", desc: "Protect intellectual property rights" },
                                    ].map((item, i) => (
                                        <div key={i} className="relative group/card">
                                            <div className="absolute inset-0 bg-gold/5 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                            <div className="relative p-4 bg-black/40 rounded-xl border border-white/10 hover:border-gold/50 transition-all">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-2xl shrink-0">{item.icon}</span>
                                                    <div>
                                                        <h4 className="text-white font-semibold group-hover/card:text-gold transition-colors">{item.title}</h4>
                                                        <p className="text-white/60 text-sm">{item.desc}</p>
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

            {/* Jurisdictions Comparison */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Offshore Jurisdictions"
                        subtitle="Compare RAK ICC & JAFZA"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                        {[
                            {
                                name: "RAK ICC Offshore",
                                icon: "🏝️",
                                cost: "AED 7,500/year",
                                features: [
                                    "No physical office required",
                                    "Zero corporate tax",
                                    "100% foreign ownership",
                                    "Full confidentiality",
                                    "International recognition",
                                    "Asset protection",
                                    "1 director minimum",
                                    "1 shareholder minimum"
                                ]
                            },
                            {
                                name: "JAFZA Offshore",
                                icon: "⚓",
                                cost: "AED 11,500/year",
                                features: [
                                    "Dubai-based jurisdiction",
                                    "Zero corporate tax",
                                    "100% foreign ownership",
                                    "Enhanced credibility",
                                    "Global trading hub",
                                    "Strategic location",
                                    "Flexible structure",
                                    "International banking"
                                ]
                            }
                        ].map((jurisdiction, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-8 bg-black rounded-3xl border-2 border-gold/20 group-hover:border-gold transition-all h-full">
                                    <div className="text-6xl mb-4 text-center">{jurisdiction.icon}</div>
                                    <h3 className="text-2xl font-bold text-gold mb-2 text-center">{jurisdiction.name}</h3>
                                    <div className="text-center mb-6">
                                        <span className="text-3xl font-bold text-white">{jurisdiction.cost}</span>
                                    </div>
                                    <ul className="space-y-3">
                                        {jurisdiction.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-white/80">
                                                <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="w-full mt-6 py-3 rounded-xl font-semibold bg-gold/10 text-gold border-2 border-gold hover:bg-gold hover:text-black transition-all">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Offshore Advantages"
                        subtitle="Why Choose UAE Offshore"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { icon: "💰", title: "Tax Efficiency", desc: "Zero corporate and income tax on offshore entities" },
                            { icon: "🔐", title: "Privacy Protection", desc: "Confidential shareholder and director information" },
                            { icon: "🌐", title: "Global Recognition", desc: "UAE-registered companies are respected worldwide" },
                            { icon: "⚡", title: "Quick Setup", desc: "Company formation in 3-5 business days" },
                            { icon: "🏦", title: "Banking Access", desc: "Open international bank accounts easily" },
                            { icon: "📜", title: "Legal Protection", desc: "Strong legal framework under UAE law" },
                            { icon: "💼", title: "Flexible Structure", desc: "Customize company structure to your needs" },
                            { icon: "🎯", title: "No Auditing", desc: "Minimal compliance and reporting requirements" },
                        ].map((benefit, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 bg-zinc-900/50 rounded-2xl border-2 border-white/10 group-hover:border-gold transition-all h-full">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">{benefit.title}</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Formation Process"
                        subtitle="Simple Steps"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { step: "1", title: "Consultation", desc: "Discuss your offshore structure needs and objectives" },
                            { step: "2", title: "Documentation", desc: "Prepare required documents and shareholder information" },
                            { step: "3", title: "Registration", desc: "Submit application to RAK ICC or JAFZA authorities" },
                            { step: "4", title: "Completion", desc: "Receive certificate and open corporate bank account" },
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 bg-black border-2 border-gold/20 rounded-2xl hover:border-gold transition-all group">
                                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black font-bold text-xl">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Establish Your Offshore Company?</h2>
                    <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        Protect your assets and expand globally with a UAE offshore structure. Contact us for a confidential consultation.
                    </p>
                    <button className="bg-gold text-black px-12 py-4 rounded-xl font-bold text-lg hover:bg-gold/90 transition-all">
                        Schedule Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}
