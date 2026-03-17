"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Flame, Cable, Wind, Anchor } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const iconMap = { Flame, Cable, Wind, Anchor } as const;
type IconName = keyof typeof iconMap;

export type IndustryData = {
  slug: string;
  iconName: IconName;
  title: string;
  tagline: string;
  color: string;
  intro: string;
  body: string;
  services: string[];
  whyAdg: string[];
};

export default function IndustryDetailClient({ industry }: { industry: IndustryData }) {
  const Icon = iconMap[industry.iconName];

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
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-white/40 hover:text-secondary-teal transition-colors mb-8 group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              All Industries
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 flex items-center justify-center rounded-sm"
                style={{ backgroundColor: `${industry.color}20` }}
              >
                <Icon size={24} style={{ color: industry.color }} />
              </div>
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                {industry.tagline}
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              {industry.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <p className="font-body text-primary-dark text-xl leading-relaxed mb-6 border-l-2 border-secondary-teal pl-6">
                {industry.intro}
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed">
                {industry.body}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-template-neutral rounded-sm p-7">
                <p className="font-heading text-xs uppercase tracking-widest text-secondary-teal mb-4">
                  Survey Services
                </p>
                <ul className="space-y-3">
                  {industry.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-teal shrink-0" />
                      <span className="font-body text-sm text-primary-dark">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-secondary-teal/20 rounded-sm p-7">
                <p className="font-heading text-xs uppercase tracking-widest text-secondary-teal mb-4">
                  Why ADG
                </p>
                <ul className="space-y-3">
                  {industry.whyAdg.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary-teal" />
                      </div>
                      <span className="font-body text-sm text-primary-dark">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
              Supporting your {industry.title} project
            </h2>
            <p className="font-body text-white/60 text-lg mb-8">
              Speak with our team about your upcoming offshore survey requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-teal text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal/80 transition-colors rounded-sm group"
            >
              Get in Touch
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
