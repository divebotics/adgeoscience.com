"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const partners = [
  {
    logo: "/agea_logo.png",
    name: "Agea Survey",
    location: "Catania, Italia",
    role: "Project Management Excellence",
    description:
      "Agea Survey brings deep project management expertise and international client relationships. Based in Catania, Sicily, Agea has a proven track record of delivering complex marine survey projects to the highest standards of technical and commercial excellence.",
  },
  {
    logo: "/denar_logo.png",
    name: "Denar Ocean Engineering",
    location: "Istanbul, Türkiye",
    role: "Operational Strength",
    description:
      "Denar Ocean Engineering provides unmatched operational capability — a specialized fleet of DP2 vessels, cutting-edge survey equipment, and a highly experienced offshore operations team. Based in Istanbul, Denar executes complex offshore surveys across the Mediterranean and Black Sea.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(61,175,196,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(61,175,196,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
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
                About AD Geoscience
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              Where Agea&apos;s project management experience meets Denar&apos;s operational strength
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <p className="font-body text-primary-dark text-xl leading-relaxed mb-8 border-l-2 border-secondary-teal pl-6">
                AD Geoscience is a unified marine geoscience company delivering integrated subsurface intelligence for engineering decision making, combining project management experience of Agea Survey, based in Catania, with the operational strength of Denar Ocean Engineering, based in Istanbul.
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed mb-8">
                With experience in over 1000 completed projects in the Mediterranean and Black Sea regions, we transform data into engineering decisions. Our integrated approach eliminates the fragmentation that plagues multi-vendor survey operations—delivering one coherent dataset that engineers can rely on with confidence.
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed mb-8">
                We position ourselves as a Subsurface Intelligence Partner for offshore engineers, developers and infrastructure planners.
              </p>
              <p className="font-body text-primary-gray text-lg leading-relaxed">
                From the survey vessel to the deliverable, every stage of our workflow is managed under a single quality framework, eliminating the interface risks that arise from multi-vendor survey operations.
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
              <div className="bg-template-neutral rounded-sm p-8">
                <h3 className="font-heading font-semibold text-primary-dark text-xl mb-6 uppercase tracking-wide">
                  The ADG Advantage
                </h3>
                <ul className="space-y-5">
                  {[
                    "Single integrated survey operation",
                    "1000+ completed projects",
                    "Mediterranean & Black Sea specialists",
                    "DP2 vessel fleet operations",
                    "Full geophysical + geotechnical capability",
                    "Metocean monitoring & modelling",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-secondary-teal" />
                      </div>
                      <span className="font-body text-primary-dark text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-6 border border-secondary-teal/20 rounded-sm">
                <p className="font-heading text-secondary-teal text-sm uppercase tracking-widest mb-3">
                  Operating Region
                </p>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-primary-gray mt-0.5 shrink-0" />
                  <p className="font-body text-primary-dark text-base">
                    Mediterranean Sea and Black Sea — with offices in Catania, Italy and Istanbul, Türkiye
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-template-neutral py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
            className="mb-14"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-secondary-teal" />
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-secondary-teal">
                Our Partners
              </span>
            </div>
            <h2 className="font-heading font-bold text-primary-dark text-4xl lg:text-5xl">
              Two industry leaders, one unified vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                variants={fadeUp}
                className="bg-white rounded-sm p-8 border border-transparent hover:border-secondary-teal/20 transition-colors"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={48}
                  className="h-12 w-auto object-contain mb-6"
                />
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={14} className="text-secondary-teal" />
                  <span className="font-heading text-xs text-primary-gray uppercase tracking-wider">
                    {partner.location}
                  </span>
                </div>
                <p className="font-heading font-semibold text-secondary-teal text-sm uppercase tracking-wide mb-4">
                  {partner.role}
                </p>
                <p className="font-body text-primary-gray text-base leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
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
              Ready to work with ADG?
            </h2>
            <p className="font-body text-white/60 text-lg mb-8">
              Discuss your next offshore survey project with our team.
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
