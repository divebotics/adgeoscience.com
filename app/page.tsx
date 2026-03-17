"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Layers, Shield, Radar, CloudRain } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const services = [
  {
    icon: Waves,
    title: "Marine Geophysical Survey",
    desc: "High resolution bathymetry, 2D seismic, sub-bottom profiling, side-scan sonar and magnetometry.",
    href: "/services/marine-geophysical-survey",
  },
  {
    icon: Layers,
    title: "Marine Geotechnical Survey",
    desc: "Precision CPT, coring, and sediment characterization to define soil parameters with certainty.",
    href: "/services/marine-geotechnical-survey",
  },
  {
    icon: Shield,
    title: "Offshore Construction Support",
    desc: "Precise positioning, touchdown monitoring, and subsea metrology for infrastructure installation.",
    href: "/services/offshore-construction-support",
  },
  {
    icon: Radar,
    title: "UXO Survey",
    desc: "Advanced detection and clearance support for unexploded ordnance in complex offshore environments.",
    href: "/services/uxo-survey",
  },
  {
    icon: CloudRain,
    title: "Metocean Monitoring and Modelling",
    desc: "Real-time data and predictive modelling with numerical simulations to understand marine dynamics.",
    href: "/services/metocean-monitoring-modelling",
  },
];

const stats = [
  { value: "1000+", label: "Completed Projects" },
  { value: "2", label: "DP2 Survey Vessels" },
  { value: "20+", label: "Years Combined Experience" },
  { value: "2", label: "Regional Hubs" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="Engineering Confidence Through Survey Excellence"
        subheadline="A strategic partnership from Agea Survey and Denar Ocean Engineering"
        description="One dataset. One model. One accuracy. AD Geoscience eliminates fragmentation in offshore projects by delivering integrated subsurface intelligence for confident engineering decisions."
        ctaLabel="Explore Our Services"
        ctaHref="/services"
      />

      {/* Partner Logos */}
      <section className="bg-white py-16 border-b border-template-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-primary-gray">
              Formed by the partnership of
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20"
          >
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/agea_logo.png"
                alt="Agea Survey"
                width={160}
                height={60}
                className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <p className="font-heading text-xs text-primary-gray uppercase tracking-wider">Catania, Italia</p>
            </div>
            <div className="w-px h-12 bg-template-neutral hidden sm:block" />
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/denar_logo.png"
                alt="Denar Ocean Engineering"
                width={160}
                height={60}
                className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
              <p className="font-heading text-xs text-primary-gray uppercase tracking-wider">Istanbul, Türkiye</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-primary-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-secondary-teal" />
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                  Why AD Geoscience
                </span>
              </div>
              <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl leading-tight mb-6">
                Integrated Subsurface Intelligence
              </h2>
              <p className="font-body text-white/60 text-lg leading-relaxed mb-8">
                Traditional offshore surveys fragment data across vendors, creating gaps in understanding and compounding risk. ADG delivers end-to-end geoscience—one survey team, one dataset, one model—so you make decisions with full confidence.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-widest text-secondary-teal hover:text-white transition-colors group"
              >
                About AD Geoscience
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-sm p-6 hover:border-secondary-teal/40 transition-colors"
                >
                  <div className="font-heading font-bold text-4xl text-secondary-teal mb-2">{stat.value}</div>
                  <div className="font-body text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-template-neutral py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Our Capabilities
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <h2 className="font-heading font-bold text-primary-dark text-4xl lg:text-5xl leading-tight max-w-2xl">
                Integrated geoscience capability, from measurement to model
              </h2>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-widest text-secondary-teal hover:text-primary-dark transition-colors group shrink-0"
              >
                All Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  variants={fadeUp}
                >
                  <Link
                    href={service.href}
                    className="group flex flex-col h-full bg-white border border-transparent hover:border-secondary-teal/30 rounded-sm p-7 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm mb-5 group-hover:bg-secondary-teal/20 transition-colors">
                      <Icon size={20} className="text-secondary-teal" />
                    </div>
                    <h3 className="font-heading font-semibold text-primary-dark text-lg mb-3 group-hover:text-secondary-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-primary-gray text-sm leading-relaxed flex-1">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-5 font-heading text-xs uppercase tracking-widest text-secondary-teal">
                      Learn more
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl mb-4">
              Let&apos;s turn uncertainty into clarity
            </h2>
            <p className="font-body text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Talk to our team about your next offshore project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-heading font-bold text-sm uppercase tracking-widest hover:bg-primary-dark hover:text-white transition-colors duration-200 rounded-sm group"
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
