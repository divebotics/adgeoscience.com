"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Waves, Layers, Shield, Radar, CloudRain } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const services = [
  {
    slug: "marine-geophysical-survey",
    icon: Waves,
    title: "Marine Geophysical Survey",
    tagline: "Complete image of the seafloor",
    description:
      "From surf zone to full ocean depth high resolution bathymetry, 2D HR&UHR seismic, sub-bottom profiling, side-scan sonar and magnetometry for a complete image of the seafloor.",
    details: [
      "High Resolution Multibeam Bathymetry",
      "2D HR & UHR Seismic",
      "Sub-Bottom Profiling (SBP)",
      "Side-Scan Sonar (SSS)",
      "Magnetometry",
      "Shallow Water & Deep Water Capability",
    ],
  },
  {
    slug: "marine-geotechnical-survey",
    icon: Layers,
    title: "Marine Geotechnical Survey",
    tagline: "Soil certainty for engineering foundations",
    description:
      "Precision CPT, coring, and sediment characterization to define soil parameters with certainty.",
    details: [
      "Cone Penetration Testing (CPT)",
      "Gravity & Piston Coring",
      "Sediment Characterization",
      "Geotechnical Lab Analysis",
      "Foundation Soil Assessment",
      "Liquefaction Risk Evaluation",
    ],
  },
  {
    slug: "offshore-construction-support",
    icon: Shield,
    title: "Offshore Construction Support",
    tagline: "Precision for infrastructure installation",
    description:
      "Precise positioning, touchdown monitoring, and subsea metrology for infrastructure installation.",
    details: [
      "Acoustic Positioning (LBL/USBL)",
      "Touchdown Monitoring (TDM)",
      "Subsea Metrology",
      "As-Built Surveys",
      "Pipeline Route Verification",
      "Seabed Model Generation",
    ],
  },
  {
    slug: "uxo-survey",
    icon: Radar,
    title: "UXO Survey",
    tagline: "Safety-critical clearance support",
    description:
      "Advanced detection and clearance support for unexploded ordnance in complex offshore environments.",
    details: [
      "Magnetometry & Gradiometry",
      "AUV-Based Detection",
      "Risk Assessment & Mapping",
      "Clearance Planning Support",
      "Historical Background Research",
      "Regulatory Compliance Reporting",
    ],
  },
  {
    slug: "metocean-monitoring-modelling",
    icon: CloudRain,
    title: "Metocean Monitoring and Modelling",
    tagline: "Understand the marine environment",
    description:
      "Real-time data and predictive modelling with numerical simulations to understand the impact of marine dynamics on your project.",
    details: [
      "Wave & Current Monitoring",
      "Wind & Meteorological Data",
      "Numerical Ocean Modelling",
      "Extreme Event Analysis",
      "Operational Weather Windows",
      "Environmental Impact Assessment Support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-0 bg-primary-dark overflow-hidden">
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Our Capabilities
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              Integrated geoscience capability, from measurement to model
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Survey Image Feature */}
      <section className="bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
            className="relative h-64 md:h-96 rounded-sm overflow-hidden"
          >
            <Image
              src="/survey_image.jpg"
              alt="Marine geophysical survey operations"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <p className="coord-decoration">Survey operations — Mediterranean Basin</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-template-neutral py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  variants={fadeUp}
                >
                  <div className="bg-white rounded-sm overflow-hidden border border-transparent hover:border-secondary-teal/20 transition-all duration-300 hover:shadow-md group">
                    <div className="p-8 md:p-10">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-7">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm group-hover:bg-secondary-teal/20 transition-colors">
                              <Icon size={20} className="text-secondary-teal" />
                            </div>
                            <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                              Service {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <h2 className="font-heading font-bold text-primary-dark text-3xl mb-3 group-hover:text-secondary-teal transition-colors">
                            {service.title}
                          </h2>
                          <p className="font-heading text-primary-gray text-sm uppercase tracking-wide mb-5">
                            {service.tagline}
                          </p>
                          <p className="font-body text-primary-gray text-base leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-widest text-secondary-teal hover:text-primary-dark transition-colors group/link"
                          >
                            Learn More
                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                        <div className="md:col-span-5">
                          <div className="bg-template-neutral rounded-sm p-6">
                            <p className="font-heading text-xs uppercase tracking-widest text-primary-gray mb-4">
                              Deliverables & Methods
                            </p>
                            <ul className="space-y-2.5">
                              {service.details.map((detail, j) => (
                                <li key={j} className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-secondary-teal shrink-0" />
                                  <span className="font-body text-sm text-primary-dark">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
              Need a tailored survey solution?
            </h2>
            <p className="font-body text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Our team can design integrated survey programs combining multiple disciplines for maximum data value.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-teal text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal/80 transition-colors rounded-sm group"
            >
              Discuss Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
