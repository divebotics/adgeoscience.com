"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  compact?: boolean;
}

export default function HeroSection({
  headline,
  subheadline,
  description,
  ctaLabel,
  ctaHref,
  imageSrc = "/banner.png",
  imageAlt = "AD Geoscience offshore operations",
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full flex items-end ${
        compact ? "min-h-[40vh]" : "min-h-screen"
      } overflow-hidden`}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-primary-dark/40 to-primary-dark/90" />
      </div>

      {/* Coordinate decorations */}
      <div className="absolute top-32 right-8 md:right-16 z-10 hidden md:block">
        <p className="coord-decoration">36°N 15°E — Mediterranean Basin</p>
      </div>
      <div className="absolute top-32 left-8 md:left-16 z-10 hidden md:block">
        <p className="coord-decoration">Subsurface Intelligence Partner</p>
      </div>

      {/* Thin horizontal scan line */}
      <div className="absolute left-0 right-0 z-10 hidden md:block" style={{ top: "38%" }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-secondary-teal/20" />
            <span className="coord-decoration text-[10px]">ADG — GEOPHYSICAL SURVEY OPERATIONS</span>
            <div className="h-px w-16 bg-secondary-teal/20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {subheadline && (
            <p className="font-heading text-secondary-teal text-sm uppercase tracking-[0.2em] mb-5 font-medium">
              {subheadline}
            </p>
          )}
          <h1
            className="font-heading font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            {headline}
          </h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-body text-white/70 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              {description}
            </motion.p>
          )}
          {ctaLabel && ctaHref && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-teal text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal/80 transition-colors duration-200 rounded-sm group"
              >
                {ctaLabel}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
