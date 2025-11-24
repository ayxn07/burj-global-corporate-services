import type { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { Palette, Layout, PenTool, Layers, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Branding & Identity Design | Burj Global",
    description: "Create a brand you are proud to present. Logo design, brand strategy, corporate identity, and rebranding solutions.",
};

export default function BrandingPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Branding & Identity Design"
                subtitle="Create a Brand You Are Proud to Present. We build brands that are modern, premium, and globally appealing."
                ctaText="View Portfolio"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-2.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionTitle
                                title="Branding Services"
                                subtitle="Building Brands"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                {[
                                    "Logo design (2D/3D)",
                                    "Brand strategy",
                                    "Messaging & tone",
                                    "Colour palette",
                                    "Typography system",
                                    "Full brand identity kit",
                                    "Brand guidelines manual",
                                    "Corporate stationery",
                                    "Company profile design",
                                    "Rebranding solutions",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-white/5">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-white/80">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
