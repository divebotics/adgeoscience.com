"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Cable, Wind, Anchor } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const industries = [
  {
    slug: "oil-and-gas",
    icon: Flame,
    title: "Oil and Gas",
    tagline: "Integrated surveys for complex offshore environments",
    description:
      "Integrated surveys for pipeline routing, site screening, and platform structural integrity.",
    color: "#F36C21",
    bgClass: "from-accent-orange/20 to-accent-orange/5",
  },
  {
    slug: "submarine-cables",
    icon: Cable,
    title: "Submarine Cables",
    tagline: "Precise route corridors for telecom and power",
    description:
      "Precise route corridor surveys and burial verification for interconnectors and telecom cables.",
    color: "#3DAFC4",
    bgClass: "from-secondary-teal/20 to-secondary-teal/5",
  },
  {
    slug: "renewables",
    icon: Wind,
    title: "Renewables",
    tagline: "Site intelligence for offshore wind developers",
    description:
      "Wind monitoring, site investigations and foundation installation surveys for offshore wind farm developers.",
    color: "#F2D64B",
    bgClass: "from-accent-gold/20 to-accent-gold/5",
  },
  {
    slug: "positioning-construction-support",
    icon: Anchor,
    title: "Positioning and Construction Support",
    tagline: "Reliable positioning for offshore infrastructure",
    description:
      "Reliable positioning, subsea metrology and 3D seabed modelling for dredging and offshore infrastructure placement.",
    color: "#DBCBB8",
    bgClass: "from-secondary-sand/30 to-secondary-sand/10",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(61,175,196,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(61,175,196,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-secondary-teal/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Industries We Serve
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              Decision-ready intelligence for complex offshore environments with competitive pricing
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 border-b border-template-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="font-body text-primary-gray text-xl leading-relaxed max-w-3xl"
          >
            From offshore Oil &amp; Gas to renewable energy, to vital subsea telecommunications and subsea interconnectors, the foundation of every great offshore project is a deep understanding of the environment. AD Geoscience provides the end-to-end expertise required for the most complex infrastructures.
          </motion.p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-template-neutral py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group block bg-white rounded-sm overflow-hidden border border-transparent hover:border-secondary-teal/20 transition-all duration-300 hover:shadow-lg h-full"
                  >
                    {/* Icon area */}
                    <div
                      className={`relative h-48 bg-gradient-to-br ${industry.bgClass} flex items-center justify-center border-b border-template-neutral`}
                    >
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${industry.color}20` }}
                      >
                        <Icon size={40} style={{ color: industry.color }} />
                      </div>
                      <div className="absolute bottom-4 left-6">
                        <p className="coord-decoration">{industry.tagline}</p>
                      </div>
                    </div>

                    <div className="p-8">
                      <h2 className="font-heading font-bold text-primary-dark text-2xl mb-3 group-hover:text-secondary-teal transition-colors">
                        {industry.title}
                      </h2>
                      <p className="font-body text-primary-gray text-base leading-relaxed mb-6">
                        {industry.description}
                      </p>
                      <div className="flex items-center gap-2 font-heading text-sm uppercase tracking-widest text-secondary-teal">
                        Explore
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <h2 className="font-heading font-bold text-white text-4xl mb-4">
              Your industry, our expertise
            </h2>
            <p className="font-body text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Contact our team to discuss how ADG can support your specific sector requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-teal text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal/80 transition-colors rounded-sm group"
            >
              Contact Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
