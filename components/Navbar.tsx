"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { label: "Marine Geophysical Survey", slug: "marine-geophysical-survey" },
  { label: "Marine Geotechnical Survey", slug: "marine-geotechnical-survey" },
  { label: "Offshore Construction Support", slug: "offshore-construction-support" },
  { label: "UXO Survey", slug: "uxo-survey" },
  { label: "Metocean Monitoring and Modelling", slug: "metocean-monitoring-modelling" },
];

const industries = [
  { label: "Oil and Gas", slug: "oil-and-gas" },
  { label: "Submarine Cables", slug: "submarine-cables" },
  { label: "Renewables", slug: "renewables" },
  { label: "Positioning and Construction Support", slug: "positioning-construction-support" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navClass = scrolled
    ? "bg-white/25 backdrop-blur-md shadow-lg border-b border-white/10"
    : "bg-white/15 backdrop-blur-sm border-b border-white/10";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/adg_logo.png"
              alt="AD Geoscience"
              width={160}
              height={48}
              className="h-25 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/about"
              className="text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest transition-colors duration-200"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setIndustriesOpen(false);
                }}
                className="flex items-center gap-1 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-primary-dark border border-secondary-teal/20 shadow-xl rounded-sm overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="/services"
                      className="block px-5 py-3 text-sm font-heading font-medium text-secondary-teal border-b border-white/10 hover:bg-white/5 tracking-wider uppercase"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-5 py-3 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" ref={industriesRef}>
              <button
                onClick={() => {
                  setIndustriesOpen(!industriesOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-1 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest transition-colors duration-200"
              >
                Industries
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-primary-dark border border-secondary-teal/20 shadow-xl rounded-sm overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="/industries"
                      className="block px-5 py-3 text-sm font-heading font-medium text-secondary-teal border-b border-white/10 hover:bg-white/5 tracking-wider uppercase"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      All Industries
                    </Link>
                    {industries.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/industries/${i.slug}`}
                        className="block px-5 py-3 text-sm font-body text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setIndustriesOpen(false)}
                      >
                        {i.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/assets"
              className="text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest transition-colors duration-200"
            >
              Assets
            </Link>

            <Link
              href="/quality"
              className="text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest transition-colors duration-200"
            >
              Quality & HSSE
            </Link>

            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-secondary-teal text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal/80 transition-colors duration-200 rounded-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary-dark border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/about"
              className="block py-3 px-4 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest border-b border-white/5"
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="bg-white/5 py-2">
                  <Link
                    href="/services"
                    className="block py-2 px-8 text-secondary-teal font-heading text-sm uppercase tracking-wide"
                    onClick={() => setMobileOpen(false)}
                  >
                    All Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block py-2 px-8 text-white/60 hover:text-white font-body text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest border-b border-white/5"
              >
                Industries
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileIndustriesOpen && (
                <div className="bg-white/5 py-2">
                  <Link
                    href="/industries"
                    className="block py-2 px-8 text-secondary-teal font-heading text-sm uppercase tracking-wide"
                    onClick={() => setMobileOpen(false)}
                  >
                    All Industries
                  </Link>
                  {industries.map((i) => (
                    <Link
                      key={i.slug}
                      href={`/industries/${i.slug}`}
                      className="block py-2 px-8 text-white/60 hover:text-white font-body text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/assets"
              className="block py-3 px-4 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              Assets
            </Link>

            <Link
              href="/quality"
              className="block py-3 px-4 text-white/80 hover:text-secondary-teal font-heading font-medium text-sm uppercase tracking-widest border-b border-white/5"
              onClick={() => setMobileOpen(false)}
            >
              Quality & HSSE
            </Link>

            <Link
              href="/contact"
              className="block mt-4 mx-4 py-3 text-center bg-secondary-teal text-white font-heading font-semibold text-sm uppercase tracking-widest rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
