"use client";

import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import Accordion from "@/components/Accordion";
import { CheckCircle } from "lucide-react";

const testimonials = [
    { question: "David Chen - Import/Export Business", answer: "Burj Global's mainland setup service was outstanding. They guided us through every step and helped us get 100% ownership. Now we can trade freely across UAE and internationally." },
    { question: "Fatima Al-Mansoori - Consulting Firm", answer: "Professional, efficient, and knowledgeable. The team at Burj Global made our mainland company formation seamless. Their understanding of DET requirements is excellent." },
];

const faqs = [
    { question: "Can I get 100% foreign ownership for a mainland company?", answer: "Yes! Recent UAE regulations allow 100% foreign ownership for most commercial and industrial activities in mainland Dubai." },
    { question: "How many visas can I get with a mainland license?", answer: "The number of visas depends on your office space size and license type. Typically, you can sponsor unlimited visas based on your office capacity." },
    { question: "What's the difference between mainland and freezone?", answer: "Mainland companies can trade anywhere in UAE and with government entities, while freezone companies have some restrictions but offer other benefits like full repatriation of profits." },
    { question: "How long does mainland company formation take?", answer: "Typically 5-7 business days once all documents are ready and initial approval is obtained from the Department of Economy and Tourism." },
];

export default function DubaiMainlandPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Dubai Mainland Business Setup"
                subtitle="Your Complete Mainland Formation Partner. We manage every step of setting up a Dubai Mainland license under the Department of Economy & Tourism (DET)."
                ctaText="Start Setup"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-2.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <SectionTitle
                                title="Why Choose Mainland?"
                                subtitle="Unlimited Opportunities"
                            />
                            <p className="text-white/80 mb-6 leading-relaxed">
                                A Dubai Mainland license allows you to trade freely within the UAE and internationally. Recent regulatory changes now allow 100% foreign ownership for most commercial and industrial activities, making it more attractive than ever.
                            </p>
                            <ul className="space-y-4 mt-8">
                                {[
                                    "Operate anywhere in UAE",
                                    "Work with government entities",
                                    "Unlimited visas (based on office size)",
                                    "Powerful brand presence",
                                    "Flexible business activities",
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
                                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-gold transition-colors">Our Mainland Services</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { icon: "📋", title: "Activity selection & consultation", desc: "Expert guidance on choosing the right business activities" },
                                        { icon: "✍️", title: "Trade name reservation", desc: "Secure your preferred business name" },
                                        { icon: "✅", title: "Initial approval from DET", desc: "Fast-track government approvals" },
                                        { icon: "📄", title: "Memorandum of Association (MOA)", desc: "Complete legal documentation" },
                                        { icon: "🏢", title: "Virtual office / Ejari contract", desc: "Professional business address setup" },
                                        { icon: "🎫", title: "License issuance", desc: "Full mainland trade license processing" },

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

            {/* License Types Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Mainland License Types"
                        subtitle="Choose Your Business Structure"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            {
                                type: "Commercial License",
                                icon: "🏪",
                                activities: ["Trading", "Import/Export", "General trading", "Retail", "Wholesale"],
                                best: "Best for trading and retail businesses"
                            },
                            {
                                type: "Professional License",
                                icon: "💼",
                                activities: ["Consultancy", "Legal services", "Accounting", "Marketing", "IT services"],
                                best: "Best for service-based professionals"
                            },
                            {
                                type: "Industrial License",
                                icon: "🏭",
                                activities: ["Manufacturing", "Production", "Processing", "Assembly", "Packaging"],
                                best: "Best for production and manufacturing"
                            },
                        ].map((license, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-8 bg-black rounded-3xl border-2 border-gold/20 group-hover:border-gold transition-all duration-500 h-full">
                                    <div className="text-6xl mb-6 text-center">{license.icon}</div>
                                    <h3 className="text-2xl font-bold text-gold mb-4 text-center">{license.type}</h3>
                                    <ul className="space-y-3 mb-6">
                                        {license.activities.map((activity, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-white/80">
                                                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                                                <span className="text-sm">{activity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-gold/80 text-sm italic text-center">{license.best}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Advantages Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Mainland Advantages"
                        subtitle="Why Businesses Choose Mainland"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { icon: "🌍", title: "Unrestricted Trading", desc: "Trade freely within UAE and internationally without limitations" },
                            { icon: "🏛️", title: "Government Contracts", desc: "Eligible to work with government entities and win tenders" },
                            { icon: "🏢", title: "Prime Locations", desc: "Establish your office in Dubai's most prestigious business districts" },
                            { icon: "📈", title: "Business Credibility", desc: "Enhanced reputation and trust with mainland presence" },
                            { icon: "👨‍👩‍👧‍👦", title: "Unlimited Visas", desc: "Sponsor as many employees as your office space permits" },
                            { icon: "🤝", title: "Local Partnerships", desc: "Easy collaboration with UAE-based companies" },
                            { icon: "💰", title: "100% Ownership", desc: "Full foreign ownership for most business activities" },
                            { icon: "🔓", title: "No Restrictions", desc: "No limitations on business activities or transactions" },
                        ].map((advantage, i) => (
                            <div key={i} className="relative group">
                                <div className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-6 bg-black rounded-2xl border-2 border-white/10 group-hover:border-gold transition-all h-full">
                                    <div className="text-4xl mb-4">{advantage.icon}</div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">{advantage.title}</h4>
                                    <p className="text-white/70 text-sm leading-relaxed">{advantage.desc}</p>
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
                        title="Our Setup Process"
                        subtitle="Simple & Transparent"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { step: "1", title: "Consultation", desc: "Free consultation to understand your business needs and recommend the best structure" },
                            { step: "2", title: "Documentation", desc: "We prepare and submit all required documents to relevant authorities" },
                            { step: "3", title: "Approval", desc: "Obtain initial approval and finalize trade name, MOA, and lease agreement" },
                            { step: "4", title: "License Issuance", desc: "Receive your mainland license and establishment card within 5-7 business days" },
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

            {/* Required Documents Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <SectionTitle
                            title="Required Documents"
                            subtitle="What You'll Need"
                            centered
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-gold mb-6">For Individual Investors</h3>
                                <ul className="space-y-3 text-white/80">
                                    {[
                                        "Valid passport copy",
                                        "Passport-sized photographs",
                                        "Entry stamp / UAE visa",
                                        "Emirates ID (if applicable)",
                                        "No Objection Certificate (if employed in UAE)"
                                    ].map((doc, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 bg-zinc-900/50 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-gold mb-6">For Corporate Investors</h3>
                                <ul className="space-y-3 text-white/80">
                                    {[
                                        "Parent company trade license",
                                        "Memorandum & Articles of Association",
                                        "Certificate of Incorporation",
                                        "Board resolution",
                                        "Authorized signatory documents",
                                        "Passport copies of authorized signatories"
                                    ].map((doc, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                            <span>{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-zinc-900/30">
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
            <section className="py-24">
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
