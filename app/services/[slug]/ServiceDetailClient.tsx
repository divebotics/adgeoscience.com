"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Waves, Layers, Shield, Radar, CloudRain } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const iconMap = { Waves, Layers, Shield, Radar, CloudRain } as const;
type IconName = keyof typeof iconMap;

export type ServiceMethod = {
  title: string;
  desc: string;
};

export type ServiceData = {
  slug: string;
  iconName: IconName;
  title: string;
  tagline: string;
  heroDescription: string;
  intro: string;
  methods: ServiceMethod[];
  applications: string[];
  relatedSlugs: string[];
};

export default function ServiceDetailClient({
  service,
  relatedServices,
}: {
  service: ServiceData;
  relatedServices: ServiceData[];
}) {
  const Icon = iconMap[service.iconName];

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
              href="/services"
              className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-widest text-white/40 hover:text-secondary-teal transition-colors mb-8 group"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary-teal/20 rounded-sm">
                <Icon size={24} className="text-secondary-teal" />
              </div>
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                {service.tagline}
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
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
                {service.heroDescription}
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed">
                {service.intro}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="bg-template-neutral rounded-sm p-7">
                <p className="font-heading text-xs uppercase tracking-widest text-secondary-teal mb-4">
                  Key Applications
                </p>
                <ul className="space-y-3">
                  {service.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-teal shrink-0" />
                      <span className="font-body text-sm text-primary-dark">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="bg-template-neutral py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="mb-10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Methods & Deliverables
              </span>
            </div>
            <h2 className="font-heading font-bold text-primary-dark text-3xl">
              Our {service.title} Methodology
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.methods.map((method, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                variants={fadeUp}
                className="bg-white rounded-sm p-7 border border-transparent hover:border-secondary-teal/20 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-secondary-teal shrink-0 mt-2" />
                  <h3 className="font-heading font-semibold text-primary-dark text-lg">{method.title}</h3>
                </div>
                <p className="font-body text-primary-gray text-sm leading-relaxed ml-5">{method.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              variants={fadeUp}
              className="mb-8"
            >
              <h2 className="font-heading font-bold text-primary-dark text-2xl mb-2">Related Services</h2>
              <p className="font-body text-primary-gray">
                Combine with these services for comprehensive integrated surveys.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedServices.map((rs, i) => {
                const RelIcon = iconMap[rs.iconName];
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    variants={fadeUp}
                  >
                    <Link
                      href={`/services/${rs.slug}`}
                      className="group flex items-start gap-5 p-6 border border-template-neutral hover:border-secondary-teal/30 rounded-sm transition-all hover:shadow-md"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm shrink-0 group-hover:bg-secondary-teal/20 transition-colors">
                        <RelIcon size={20} className="text-secondary-teal" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-primary-dark group-hover:text-secondary-teal transition-colors mb-1">
                          {rs.title}
                        </h3>
                        <p className="font-body text-sm text-primary-gray">{rs.tagline}</p>
                      </div>
                      <ArrowRight size={16} className="text-secondary-teal ml-auto shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

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
              Require {service.title}?
            </h2>
            <p className="font-body text-white/60 text-lg mb-8">
              Talk to our survey team about your project requirements.
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
