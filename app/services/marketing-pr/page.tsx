import type { Metadata } from "next";
import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import { Megaphone, TrendingUp, Video, Globe, Mic2, FileImage, Camera, PenTool } from "lucide-react";

export const metadata: Metadata = {
    title: "Marketing, PR & Creative Design | Burj Global",
    description: "A complete marketing and communication department for your business. Digital marketing, PR, and creative design solutions.",
};

export default function MarketingPage() {
    return (
        <div className="bg-black">
            <AnimatedHero
                title="Marketing, PR & Creative Design"
                subtitle="A Complete Marketing & Communication Department for Your Business. We help businesses build credibility, attract customers, and grow in the UAE."
                ctaText="Start Campaign"
                ctaLink="/contact"
                backgroundImage="/Hero-Section-Images/Hero-section-image-3.png"
            />

            {/* Marketing Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Marketing Management"
                        subtitle="Section A"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Digital Marketing & Lead Gen</h3>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li>• Google Ads</li>
                                <li>• Meta Ads</li>
                                <li>• TikTok Ads</li>
                                <li>• LinkedIn B2B Marketing</li>
                                <li>• Lead generation funnels</li>
                                <li>• A/B testing</li>
                                <li>• Landing pages</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Social Media Management</h3>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li>• Monthly content calendars</li>
                                <li>• Daily posts</li>
                                <li>• Reels / TikTok</li>
                                <li>• Copywriting</li>
                                <li>• Design & branding</li>
                                <li>• Analytics & reporting</li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold mb-6">
                                <Megaphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Marketing Strategy</h3>
                            <ul className="space-y-2 text-white/60 text-sm">
                                <li>• 3/6/12 month plans</li>
                                <li>• Audience segmentation</li>
                                <li>• Competitor analysis</li>
                                <li>• Positioning strategy</li>
                                <li>• KPI planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PR Section */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Public Relations (PR)"
                        subtitle="Section B"
                        centered
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                                <Mic2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Corporate PR</h3>
                            <p className="text-white/60 text-sm">Corporate announcements, Leadership profiling, Crisis management, Internal communications.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                                <FileImage className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Media Relations</h3>
                            <p className="text-white/60 text-sm">Press release drafting, Media distribution, Interview coordination, Event coverage.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
                                <Video className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Event PR</h3>
                            <p className="text-white/60 text-sm">Launch PR, Red carpet, Influencer coordination, Media invites.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative Services */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <SectionTitle
                        title="Creative Design Services"
                        subtitle="Section C"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <PenTool className="w-8 h-8 text-gold mb-4" />
                            <h4 className="text-lg font-bold text-white mb-3">Corporate Design</h4>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>• Company profiles</li>
                                <li>• Pitch decks</li>
                                <li>• Brochures</li>
                                <li>• Annual reports</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <Globe className="w-8 h-8 text-gold mb-4" />
                            <h4 className="text-lg font-bold text-white mb-3">Digital Design</h4>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>• Social media creatives</li>
                                <li>• Website banners</li>
                                <li>• Digital ads</li>
                                <li>• UI/UX design</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <FileImage className="w-8 h-8 text-gold mb-4" />
                            <h4 className="text-lg font-bold text-white mb-3">Print Design</h4>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>• Flyers</li>
                                <li>• Posters</li>
                                <li>• Roll-up banners</li>
                                <li>• Packaging</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                            <Camera className="w-8 h-8 text-gold mb-4" />
                            <h4 className="text-lg font-bold text-white mb-3">Photo & Video</h4>
                            <ul className="space-y-1 text-white/60 text-sm">
                                <li>• Corporate shoots</li>
                                <li>• Product photography</li>
                                <li>• Video ads</li>
                                <li>• Cinematic reels</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
