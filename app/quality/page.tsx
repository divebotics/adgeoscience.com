"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BookOpen, Leaf, Users, ClipboardList, Award } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const pillars = [
  {
    icon: ShieldCheck,
    title: "HSSE Management",
    desc: "Health, Safety, Security, and Environment management systems aligned with international offshore industry standards. Zero tolerance for unsafe acts or conditions.",
  },
  {
    icon: ClipboardList,
    title: "QA/QC Processes",
    desc: "Transparent quality assurance and control workflows covering data acquisition, processing, and deliverable production. Every dataset is independently verified.",
  },
  {
    icon: BookOpen,
    title: "Regulatory Compliance",
    desc: "Full compliance with applicable local and international maritime regulations, environmental legislation, and survey standards including IHO and OSIG specifications.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    desc: "Commitment to minimizing environmental impact across all operational activities. We integrate environmental risk assessment into every project plan.",
  },
  {
    icon: Users,
    title: "Competency Assurance",
    desc: "Personnel competency framework ensuring all offshore staff meet defined qualifications and experience requirements for their roles.",
  },
  {
    icon: Award,
    title: "Scientific Integrity",
    desc: "Rigorous data quality standards and peer review processes ensure deliverables meet the highest standards of scientific and engineering accuracy.",
  },
];

export default function QualityPage() {
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
                Quality & HSSE
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              Disciplined execution, zero-compromise safety.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
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
                ADG operates with transparent QA/QC processes and operational discipline, in compliance with international standards.
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed mb-6">
                Scientific integrity and operational reliability are fundamental to our business. We are committed to sustainability and environmental responsibility. Our quality management approach is built into every stage of survey operations — from pre-mobilization planning through data acquisition, processing, and final deliverable production.
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed">
                We navigate the complexities of local and international maritime standards. Our operations comply with applicable flag state regulations, port state requirements, and international frameworks including IMO and MARPOL standards, ensuring our clients can present compliant deliverables to all regulatory authorities.
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
              <div className="bg-primary-dark rounded-sm p-8 text-white">
                <p className="font-heading text-xs uppercase tracking-widest text-secondary-teal mb-6">
                  Our Commitments
                </p>
                <ul className="space-y-4">
                  {[
                    "Zero harm to personnel",
                    "Minimal environmental footprint",
                    "Full data traceability",
                    "Independent QC verification",
                    "Regulatory compliance in all jurisdictions",
                    "Transparent incident reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ShieldCheck size={16} className="text-secondary-teal shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-template-neutral py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Quality Framework
              </span>
            </div>
            <h2 className="font-heading font-bold text-primary-dark text-4xl">
              Six pillars of operational excellence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  variants={fadeUp}
                  className="bg-white rounded-sm p-8 border border-transparent hover:border-secondary-teal/20 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm mb-5">
                    <Icon size={20} className="text-secondary-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary-dark text-lg mb-3">{pillar.title}</h3>
                  <p className="font-body text-primary-gray text-sm leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory compliance section */}
      <section className="bg-primary-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-secondary-teal" />
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                  Regulatory Compliance
                </span>
              </div>
              <h2 className="font-heading font-bold text-white text-4xl mb-6">
                Navigating international standards
              </h2>
              <p className="font-body text-white/60 text-lg leading-relaxed">
                We navigate the complexities of local and international maritime standards. AD Geoscience ensures full compliance with all applicable regulatory frameworks across the Mediterranean and Black Sea operating regions, giving our clients confidence in the compliance status of their survey programs.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {["IHO Standards", "IMO Compliance", "MARPOL", "OSIG Guidelines", "ISO 9001 Aligned", "IOGP Standards"].map((std, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-sm px-5 py-4 text-center hover:border-secondary-teal/30 transition-colors"
                >
                  <span className="font-heading font-semibold text-white/70 text-sm">{std}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-template-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <h2 className="font-heading font-bold text-primary-dark text-4xl mb-4">
              Questions about our quality framework?
            </h2>
            <p className="font-body text-primary-gray text-lg mb-8 max-w-xl mx-auto">
              Our technical team can discuss QA/QC requirements and compliance specifics for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-dark text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal transition-colors rounded-sm group"
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
