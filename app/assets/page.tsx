"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Anchor, Zap, Eye, Navigation } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const vessels = [
  {
    name: "M/V Denar Pathfinder",
    image: "/denar/pathfinder.png",
    type: "Offshore Survey Vessel",
    specs: [
      "DP2 Dynamic Positioning",
      "AHC Crane and 2 x A-Frames",
      "Deep and Shallow Water Survey Capability",
      "Geotechnical Survey Systems",
    ],
    description:
      "A dedicated offshore support and survey vessel with deep and shallow water geophysical and geotechnical capabilities. Denar Pathfinder can support complex construction support and multi-disciplinary survey programs in challenging offshore environments.",
  },
  {
    name: "M/V Denar Explorer",
    image: "/denar/explorer.jpeg",
    type: "Offshore Survey Vessel",
    specs: [
      "DP2 Dynamic Positioning",
      "Deep Water Survey Capability",
      "Full Geophysical Equipment Suite",
      "Geotechnical Sampling Systems",
    ],
    description:
      "A dedicated offshore survey vessel equipped for deep water geophysical and geotechnical operations. Denar Explorer supports complex multi-disciplinary survey programs in challenging offshore environments.",
  },
  {
    name: "S/V Denar Surveyor",
    image: "/denar/surveyor.jpeg",
    type: "Survey Support Vessel",
    specs: [
      "A-frame and tow winch",
      "Multibeam & Sub-bottom Systems",
      "Moon Pool",
      "Bow Thruster",
    ],
    description:
      "A versatile nearshore survey vessel, optimized for geophysical survey operations, equipped with high resolution MBES in moon pool and hull mounted CHIRP SBP as well as A-frame and service crane.",
  },
  {
    name: "Denar Echo",
    image: "/denar/echo.png",
    type: "Nearshore Survey Vessel",
    specs: [
      "Shallow Water Operations",
      "Nearshore & Inshore Survey",
      "Rapid Mobilization",
      "Multi-sensor Integration",
    ],
    description:
      "A high-performance nearshore survey vessel designed for operations in shallow and restricted water environments. Denar Echo delivers survey precision from the surf zone to continental shelf environments.",
  },
];

const additionalAssets = [
  {
    icon: Navigation,
    title: "Autonomous Underwater Vehicles (AUVs)",
    desc: "Multi-configuration AUV systems for deep water survey, UXO detection, and long-range seabed mapping at consistent altitude.",
  },
  {
    icon: Eye,
    title: "Remotely Operated Vehicles (ROVs)",
    desc: "Observation and work-class ROVs for subsea inspection, construction support, and equipment deployment.",
  },
  {
    icon: Anchor,
    title: "Jack-up and Floating Barges",
    desc: "Specialized jack-up and floating barge platforms capable of drilling, sampling, and geophysical testing in challenging environments.",
  },
  {
    icon: Zap,
    title: "Topo-Bathymetric LIDAR Drone",
    desc: "Airborne LIDAR system for nearshore and coastal surveys, delivering seamless land-sea topographic and bathymetric models.",
  },
];

export default function AssetsPage() {
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
                Fleet & Equipment
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              Proven offshore execution power with a specialized fleet
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 border-b border-template-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={fadeUp}
            >
              <p className="font-body text-primary-dark text-xl leading-relaxed mb-6 border-l-2 border-secondary-teal pl-6">
                Denar&apos;s extensive operational capacity and equipment fleet will be utilized for ADG operations.
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed">
                Assets at your service include two DP2 offshore survey and support vessels, manned and unmanned nearshore vessel fleet, jack-up and floating barges capable of drilling, sampling and geophysical testing, topo&amp;bathy LIDAR drone, AUV and ROV&apos;s for multiple use cases.
              </p>
            </motion.div>
            {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: "2", label: "DP2 Vessels" },
                { num: "3+", label: "Nearshore Vessels" },
                { num: "2+", label: "AUV Systems" },
                { num: "Full", label: "ROV Capability" },
              ].map((item, i) => (
                <div key={i} className="bg-template-neutral rounded-sm p-6 text-center">
                  <div className="font-heading font-bold text-4xl text-secondary-teal mb-1">{item.num}</div>
                  <div className="font-body text-sm text-primary-gray">{item.label}</div>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Fleet Gallery */}
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
                Vessel Fleet
              </span>
            </div>
            <h2 className="font-heading font-bold text-primary-dark text-4xl">
              Our Survey Vessels
            </h2>
          </motion.div>

          <div className="space-y-12">
            {vessels.map((vessel, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                variants={fadeUp}
                className="bg-white rounded-sm overflow-hidden border border-transparent hover:border-secondary-teal/20 transition-colors"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={`relative h-72 lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <Image
                      src={vessel.image}
                      alt={vessel.name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <p className="coord-decoration">{vessel.type}</p>
                    </div>
                  </div>
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal mb-2">
                      {vessel.type}
                    </p>
                    <h3 className="font-heading font-bold text-primary-dark text-3xl mb-4">
                      {vessel.name}
                    </h3>
                    <p className="font-body text-primary-gray text-base leading-relaxed mb-6">
                      {vessel.description}
                    </p>
                    <div>
                      <p className="font-heading text-xs uppercase tracking-widest text-primary-gray mb-3">
                        Key Capabilities
                      </p>
                      <ul className="space-y-2">
                        {vessel.specs.map((spec, j) => (
                          <li key={j} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-teal shrink-0" />
                            <span className="font-body text-sm text-primary-dark">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Assets */}
      <section className="bg-primary-dark py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeUp}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Additional Equipment
              </span>
            </div>
            <h2 className="font-heading font-bold text-white text-4xl">
              Beyond the Fleet
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalAssets.map((asset, i) => {
              const Icon = asset.icon;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-sm p-7 hover:border-secondary-teal/30 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm mb-4">
                    <Icon size={20} className="text-secondary-teal" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-3">{asset.title}</h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed">{asset.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <h2 className="font-heading font-bold text-white text-4xl mb-4">
              Discuss your mobilization requirements
            </h2>
            <p className="font-body text-white/80 text-lg mb-8">
              Our team can advise on the optimal vessel and equipment configuration for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-dark font-heading font-bold text-sm uppercase tracking-widest hover:bg-primary-dark hover:text-white transition-colors rounded-sm group"
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
