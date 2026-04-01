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
    image: "/services/marine_geophysical_survey.png",
  },
  {
    slug: "marine-geotechnical-survey",
    icon: Layers,
    title: "Marine Geotechnical Survey",
    tagline: "Soil certainty for engineering foundations",
    description:
      "Precision CPT, coring, and sediment characterization to define soil parameters with certainty.",
    image: "/services/marine_geotechnical_survey.jpg",
  },
  {
    slug: "offshore-construction-support",
    icon: Shield,
    title: "Offshore Construction Support",
    tagline: "Precision for infrastructure installation",
    description:
      "Precise positioning, touchdown monitoring, and subsea metrology for infrastructure installation.",
    image: "/services/construction_support.jpg",
  },
  {
    slug: "uxo-survey",
    icon: Radar,
    title: "UXO Survey",
    tagline: "Safety-critical clearance support",
    description:
      "De-risk your project with our comprehensive non-intrusive UXO survey and risk mitigation services.",
    image: "/services/uxo_survey.jpg",
  },
  {
    slug: "metocean-monitoring-modelling",
    icon: CloudRain,
    title: "Metocean Monitoring and Modelling",
    tagline: "Understand the marine environment",
    description:
      "Real-time data and predictive modelling with numerical simulations to understand the impact of marine dynamics on your project.",
    image: "/services/metocean.jpg",
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
              src="/services/sand.jpg"
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
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7">
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
                          <div className="relative h-52 rounded-sm overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
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
