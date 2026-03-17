import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-0 overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wave_footer.png"
          alt=""
          fill
          className="object-cover object-top"
          quality={90}
        />
        <div className="absolute inset-0 bg-primary-dark/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/adg_logo.png"
                alt="AD Geoscience"
                width={180}
                height={54}
                className="h-20 w-auto object-contain"
              />
              {/* <div className="h-10 w-px bg-secondary-teal/30" /> */}
              {/* <Image
                src="/monogram_logo.png"
                alt="ADG Monogram"
                width={48}
                height={48}
                className="h-10 w-auto object-contain opacity-80"
              /> */}
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
              Subsurface Intelligence Partner delivering integrated geoscience solutions for confident offshore engineering decisions.
            </p>
            <div className="mt-6 flex items-start gap-2 text-white/50 text-sm font-body">
              <MapPin size={14} className="text-secondary-teal mt-0.5 shrink-0" />
              <span>Piazza Michelangelo Buonarroti 22,<br />95126 Catania (CT) ITALIA</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-white/50 text-sm font-body">
              <Mail size={14} className="text-secondary-teal shrink-0" />
              <a href="mailto:info@adgeoscience.com" className="hover:text-secondary-teal transition-colors">
                info@adgeoscience.com
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-secondary-teal mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Assets & Equipment", href: "/assets" },
                { label: "Quality & HSSE", href: "/quality" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-secondary-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-secondary-teal mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Marine Geophysical Survey", href: "/services/marine-geophysical-survey" },
                { label: "Marine Geotechnical Survey", href: "/services/marine-geotechnical-survey" },
                { label: "Offshore Construction Support", href: "/services/offshore-construction-support" },
                { label: "UXO Survey", href: "/services/uxo-survey" },
                { label: "Metocean Monitoring", href: "/services/metocean-monitoring-modelling" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/50 hover:text-secondary-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-white/30">
              &copy; {new Date().getFullYear()} AD Geoscience. All rights reserved. A strategic partnership of Agea Survey and Denar Ocean Engineering.
            </p>
            <div className="flex items-center gap-6">
              <Image src="/agea_logo.png" alt="Agea Survey" width={80} height={28} className="h-6 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity" />
              <Image src="/denar_logo.png" alt="Denar Ocean Engineering" width={80} height={28} className="h-6 w-auto object-contain opacity-40 hover:opacity-70 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
