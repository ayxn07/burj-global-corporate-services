import type { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { Scale, FileText, Calculator, ShieldAlert, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Corporate Compliance & Support | Burj Global",
    description: "Your long-term corporate partner. VAT registration, Corporate Tax, UBO, ESR, and document drafting services.",
};

export default function CompliancePage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Corporate Compliance & Support Services"
                subtitle="Your Long-Term Corporate Partner. We ensure your business always stays compliant and protected."
                ctaText="Consult an Expert"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-1.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="We Provide"
                        subtitle="Stay Compliant"
                        centered
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {[
                            "Trade license renewal",
                            "UBO declaration",
                            "ESR (Economic Substance Regulations)",
                            "VAT registration",
                            "Corporate tax support",
                            "Annual filings",
                            "MOA amendments",
                            "Activity changes",
                            "Name changes",
                            "Company restructuring",
                            "Document drafting & policy creation",
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-colors">
                                <CheckCircle className="w-6 h-6 text-gold shrink-0" />
                                <span className="text-white font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
