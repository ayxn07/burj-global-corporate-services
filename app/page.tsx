"use client";

import AnimatedHero from "@/components/AnimatedHero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCards";
import MagneticButton from "@/components/MagneticButton";
import AnimatedCard from "@/components/AnimatedCard";
import Accordion from "@/components/Accordion";
import PerspectiveGrid from "@/components/perspective-grid";
import { Building2, Palette, Megaphone, Mic2, PenTool, CheckCircle, Users, Globe, Award, TrendingUp, Shield, Zap, Target, Briefcase, FileCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  { question: "How long does it take to set up a company in Dubai?", answer: "Typically 3-5 business days for freezone companies and 5-7 days for mainland companies, depending on the license type and document readiness." },
  { question: "Do I need to visit Dubai to start a business?", answer: "Not necessarily. We can handle most processes remotely. You only need to visit once for Emirates ID and final signatures if required." },
  { question: "What is the difference between mainland and freezone?", answer: "Mainland companies can trade anywhere in UAE and internationally, while freezone companies offer 100% foreign ownership and tax benefits but have some trading restrictions." },
  { question: "How much does it cost to set up a business in Dubai?", answer: "Costs vary depending on license type and business activity. Freezone packages start from AED 15,000, while mainland setups start from AED 20,000. Contact us for a detailed quote." },
  { question: "Do you provide visa services?", answer: "Yes, we handle all types of visas including investor visas, partner visas, employee visas, and family sponsorship visas." },
];

const services = [
  {
    title: "Business Setup & Corporate Services",
    description: "Dubai Mainland, UAE Freezones, Offshore, Visas, PRO Services, and Compliance.",
    icon: <Building2 className="w-6 h-6" />,
    href: "/services",
  },
  {
    title: "Branding & Identity Design",
    description: "Logo design, brand strategy, and full corporate identity kits.",
    icon: <Palette className="w-6 h-6" />,
    href: "/services/branding",
  },
  {
    title: "Marketing Management",
    description: "Digital marketing, lead generation, and social media strategies.",
    icon: <Megaphone className="w-6 h-6" />,
    href: "/services/marketing-pr",
  },
  {
    title: "Public Relations (PR)",
    description: "Media relations, corporate communications, and event PR.",
    icon: <Mic2 className="w-6 h-6" />,
    href: "/services/marketing-pr",
  },
  {
    title: "Creative Design Services",
    description: "Company profiles, brochures, websites, and digital assets.",
    icon: <PenTool className="w-6 h-6" />,
    href: "/services/marketing-pr",
  },
];

export default function Home() {
  return (
    <div className="bg-black">
      <AnimatedHero
        title="Make Dubai Your Business. We Make Everything Else Easy."
        subtitle="End-to-end UAE business setup, licensing, visas, PRO support, compliance, branding, and marketing—all managed seamlessly by Burj Global."
        ctaText="Start Your Business Today"
        ctaLink="/contact"
      />

      {/* Perspective Grid Section */}
      <PerspectiveGrid />


      {/* Who We Are Section */}
      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Who We Are"
                subtitle="About Burj Global"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 mb-6 leading-relaxed"
              >
                Burj Global Corporate Services L.L.C is a UAE-licensed corporate consultancy helping entrepreneurs, investors, and global companies establish, operate, and grow their businesses in Dubai and across the UAE.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-white/70 mb-8 leading-relaxed"
              >
                We combine regulatory expertise, market knowledge, and creative capabilities to deliver a 360-degree business ecosystem under one roof.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <MagneticButton variant="outline" href="/about-us" className="text-sm">
                  Read More About Us
                </MagneticButton>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10"
            >
              <img src="Homepage-Main.png" className="object-cover h-full w-full" alt="" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Our Expertise"
              subtitle="What We Do"
              centered
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                {...service}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <MagneticButton variant="outline" href="/services" className="text-base px-10 py-4">
              View All Services
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* How We Work - Process Section */}
      <section className="py-16 sm:py-24 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="How We Work"
              subtitle="Our Process"
              centered
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Free consultation to understand your business needs and recommend the best structure.", icon: <Target className="w-10 h-10" /> },
              { step: "02", title: "Documentation", desc: "We prepare all required documents with precision and handle government approvals.", icon: <FileCheck className="w-10 h-10" /> },
              { step: "03", title: "Formation", desc: "Complete company formation, license issuance, and visa processing.", icon: <Building2 className="w-10 h-10" /> },
              { step: "04", title: "Growth Support", desc: "Ongoing compliance, marketing, and business development services.", icon: <TrendingUp className="w-10 h-10" /> },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-gold/30 via-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-2xl" />

                {/* Card */}
                <div className="relative p-8 rounded-3xl border-2 border-gold/20 bg-linear-to-br from-black via-zinc-900/80 to-black group-hover:border-gold transition-all duration-500 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-linear-to-br from-gold to-gold/60 flex items-center justify-center text-black font-bold text-xl shadow-xl shadow-gold/50 border-4 border-black">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gold/10 border border-gold/30 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <div className="text-gold group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed text-base group-hover:text-white/80 transition-colors">
                    {item.desc}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/30 group-hover:border-gold transition-colors rounded-br-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Industries We Serve"
              subtitle="Diverse Sectors"
              centered
            />
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            {[
              { name: "Technology & IT", icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "E-commerce", icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Consulting", icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Real Estate", icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Trading", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Healthcare", icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Marketing", icon: <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { name: "Creative Industries", icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" /> },
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="group p-4 sm:p-6 rounded-2xl bg-zinc-900/50 border border-white/10 hover:border-gold/50 transition-colors duration-300 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3 sm:mb-4 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-white/90 font-semibold text-sm sm:text-base group-hover:text-gold transition-colors">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-24 bg-linear-to-b from-zinc-900/30 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Why Businesses Choose Us"
              subtitle="Key Features"
              centered
            />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[
              { title: "Licensed & Regulated", desc: "Fully authorized corporate services provider in the UAE", icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" /> },
              { title: "Fast Track Processing", desc: "Quick turnaround times with priority government channels", icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" /> },
              { title: "Expert Team", desc: "Experienced consultants with deep market knowledge", icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" /> },
              { title: "Fixed Pricing", desc: "Transparent costs with no hidden fees or surprises", icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" /> },
              { title: "24/7 Support", desc: "Round-the-clock assistance for all your queries", icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" /> },
              { title: "Complete Solutions", desc: "One-stop-shop for all business and creative needs", icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" /> },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gold/20 via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
                <div className="relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-2 border-gold/30 bg-zinc-900/50 group-hover:border-gold transition-colors duration-300 h-full">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gold/20 flex items-center justify-center text-gold mb-4 sm:mb-8 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="What Our Clients Say"
              subtitle="Success Stories"
              centered
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { name: "Sarah Johnson", role: "Tech Startup Founder", text: "Burj Global made our Dubai setup incredibly smooth. Their team handled everything from licensing to visas. Highly professional!" },
              { name: "Ahmed Al-Rashid", role: "E-commerce Entrepreneur", text: "Best decision was choosing Burj Global. They not only set up our company but also helped with branding and marketing." },
              { name: "Maria Santos", role: "Consulting Firm Owner", text: "Transparent pricing, expert advice, and fast processing. Burj Global exceeded all our expectations." },
              { name: "David Chen", role: "Real Estate Investor", text: "Professional service from start to finish. They made the entire mainland setup process seamless and stress-free." },
              { name: "Fatima Al-Mansoori", role: "Trading Company CEO", text: "Outstanding support team! They guided us through every step and ensured complete compliance." },
              { name: "James Mitchell", role: "Marketing Agency Owner", text: "The integrated approach of business setup and creative services saved us tremendous time and effort." },
              { name: "Linda Park", role: "Healthcare Consultant", text: "Highly knowledgeable team with deep understanding of UAE regulations. Made our freezone setup effortless." },
              { name: "Omar Hassan", role: "Import/Export Business", text: "Fast, reliable, and professional. Burj Global continues to support us with ongoing compliance and PRO services." },
              { name: "Emma Wilson", role: "Digital Agency Founder", text: "Exceptional service! From company formation to branding, they delivered excellence at every step." },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative p-8 rounded-2xl bg-zinc-900/50 border border-gold/30 group-hover:border-gold transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold border-2 border-gold/30 group-hover:border-gold transition-colors shrink-0">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-gold transition-colors">{testimonial.name}</h4>
                      <p className="text-white/50 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed italic grow">{testimonial.text}</p>
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative h-[600px] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-black"
            >
              <img
                src="Why-Choose-Us.png"
                alt="Why Choose Us"
                className="object-cover w-full h-full  mx-auto"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <SectionTitle
                title="Why Choose Burj Global?"
                subtitle="The Burj Advantage"
              />
              <div className="space-y-6">
                {[
                  {
                    title: "Government-licensed",
                    desc: "Fully licensed Corporate Services Provider.",
                  },
                  {
                    title: "Fast Processing",
                    desc: "Efficient handling of all government procedures.",
                  },
                  {
                    title: "Zero-error Documentation",
                    desc: "Meticulous attention to detail to avoid delays.",
                  },
                  {
                    title: "Dedicated Consultant",
                    desc: "Personalized support throughout your journey.",
                  },
                  {
                    title: "Transparent Prices",
                    desc: "No hidden fees or surprise charges.",
                  }

                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Got Questions?"
              centered
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <Accordion items={faqs} variant="faq" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Let us handle the complexities of business setup while you focus on growth. Book your free consultation today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MagneticButton variant="primary" href="/contact" className="text-xl px-12 py-6">
              Start Your Business Today
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
