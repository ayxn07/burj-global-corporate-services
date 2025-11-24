"use client";

import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import MagneticButton from "@/components/MagneticButton";
import Accordion from "@/components/Accordion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const faqs = [
    { question: "How can I schedule a consultation?", answer: "You can book a free consultation by filling out the contact form above, calling us directly, or sending us an email. We'll respond within 24 hours." },
    { question: "What information should I prepare for the consultation?", answer: "Please have details about your business activity, expected number of visas, and your budget. This helps us provide accurate recommendations." },
    { question: "Do you charge for consultations?", answer: "No, our initial consultation is completely free. We'll discuss your requirements and provide a detailed quote with no obligations." },
    { question: "What are your office hours?", answer: "We're open Monday to Friday from 9:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM. We're closed on Sundays and UAE public holidays." },
];

export default function ContactPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Contact Us"
                subtitle="Let's Build Your Business in the UAE Together. Burj Global Corporate Services L.L.C welcomes entrepreneurs, investors, startups, and companies looking to start or grow their business in Dubai."
                ctaText="Call Now"
                ctaLink="tel:+97141234567"
                backgroundImage="/Hero-Section-Images/Hero-section-image-6.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <SectionTitle
                                title="Get In Touch"
                                subtitle="We're Here to Help"
                            />
                            <p className="text-white/80 mb-12 leading-relaxed">
                                Whether you have a question about business setup, need visa assistance, or want to discuss a marketing strategy, our team is ready to answer all your questions.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Visit Us</h4>
                                        <p className="text-white/60">Burj Global Corporate Services LLC<br />Sheikh Zayed Road, Dubai, UAE</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Call Us</h4>
                                        <p className="text-white/60">+971 4 123 4567</p>
                                        <p className="text-white/60">+971 50 123 4567 (WhatsApp)</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                                        <p className="text-white/60">info@burjglobal.com</p>
                                        <p className="text-white/60">support@burjglobal.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Working Hours</h4>
                                        <p className="text-white/60">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p className="text-white/60">Saturday: 10:00 AM - 2:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-6">Book a Consultation</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                                        <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
                                    <input type="email" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="+971 50 000 0000" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Service Interested In</label>
                                    <select className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors">
                                        <option>Business Setup</option>
                                        <option>Visas</option>
                                        <option>PRO Services</option>
                                        <option>Marketing & Branding</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                                    <textarea rows={4} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="How can we help you?" />
                                </div>

                                <div className="flex justify-center">
                                    <MagneticButton variant="primary" type="submit" className="w-full text-lg py-4">
                                        Send Message
                                    </MagneticButton>
                                </div>
                            </form>
                        </div>
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

            {/* Map Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Find Us"
                        subtitle="Our Location"
                        centered
                    />
                    <div className="mt-16 max-w-6xl mx-auto">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative rounded-3xl overflow-hidden border-2 border-gold/20 group-hover:border-gold transition-all duration-500 h-[500px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28868.84364989667!2d55.25693594863281!3d25.19547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sSheikh%20Zayed%20Road%20-%20Dubai!5e0!3m2!1sen!2sae!4v1732473600000!5m2!1sen!2sae"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
