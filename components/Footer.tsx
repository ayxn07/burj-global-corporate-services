import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="relative z-50" data-magnetic>
                            <div className="relative h-20 w-50 overflow-hidden ">
                                <Image
                                    src="/Logo.jpeg"
                                    alt="Burj Global Logo"
                                    fill
                                    className="object-contain bg-black rounded-2xl"
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Your trusted partner for business setup, corporate services, and brand growth in Dubai and the UAE.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-gold hover:text-black transition-all"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "About Us", href: "/about-us" },
                                { name: "Services", href: "/services" },
                                { name: "Contact Us", href: "/contact" },
                                { name: "Privacy Policy", href: "#" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-gold text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Dubai Mainland Setup", href: "/services/dubai-mainland" },
                                { name: "Freezone Setup", href: "/services/uae-freezone" },
                                { name: "Golden Visa", href: "/services/visas" },
                                { name: "PRO Services", href: "/services/pro-services" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-gold text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin className="w-5 h-5 text-gold shrink-0" />
                                <span>Burj Global Corporate Services LLC, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <span>+971 4 123 4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Mail className="w-5 h-5 text-gold shrink-0" />
                                <span>info@burjglobal.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Burj Global Corporate Services. All rights reserved.
                    </p>
                    <p className="text-white/40 text-sm">
                        Designed & Developed by Burj Global Tech Team
                    </p>
                </div>
            </div>
        </footer>
    );
}
