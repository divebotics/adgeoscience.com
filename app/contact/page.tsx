"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

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
                Get In Touch
              </span>
            </div>
            <h1 className="font-heading font-bold text-white text-5xl lg:text-6xl leading-tight max-w-3xl">
              Let&apos;s turn uncertainty into clarity
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              variants={fadeUp}
              className="lg:col-span-4"
            >
              <h2 className="font-heading font-bold text-primary-dark text-2xl mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm shrink-0">
                    <MapPin size={18} className="text-secondary-teal" />
                  </div>
                  <div>
                    <p className="font-heading text-xs uppercase tracking-widest text-primary-gray mb-1">
                      Address
                    </p>
                    <p className="font-body text-primary-dark text-base leading-relaxed">
                      Piazza Michelangelo Buonarroti 22<br />
                      95126 Catania (CT)<br />
                      ITALIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-secondary-teal/10 rounded-sm shrink-0">
                    <Mail size={18} className="text-secondary-teal" />
                  </div>
                  <div>
                    <p className="font-heading text-xs uppercase tracking-widest text-primary-gray mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@adgeoscience.com"
                      className="font-body text-primary-dark text-base hover:text-secondary-teal transition-colors"
                    >
                      info@adgeoscience.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-template-neutral">
                <p className="font-heading text-xs uppercase tracking-widest text-primary-gray mb-4">
                  Regional Operations
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal" />
                    <span className="font-body text-sm text-primary-dark">Catania, Italy — Project Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal" />
                    <span className="font-body text-sm text-primary-dark">Istanbul, Türkiye — Operations Base</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary-teal/40" />
                    <span className="font-body text-sm text-primary-gray">Mediterranean & Black Sea coverage</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              variants={fadeUp}
              className="lg:col-span-8"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-secondary-teal/10 rounded-full mb-6">
                    <CheckCircle size={32} className="text-secondary-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-primary-dark text-2xl mb-3">
                    Message Received
                  </h3>
                  <p className="font-body text-primary-gray text-lg max-w-md">
                    Thank you for reaching out. Our team will review your enquiry and respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-heading text-xs uppercase tracking-widest text-primary-gray mb-2"
                      >
                        Full Name <span className="text-accent-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-template-neutral border border-template-neutral focus:border-secondary-teal focus:bg-white rounded-sm outline-none font-body text-primary-dark text-base transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block font-heading text-xs uppercase tracking-widest text-primary-gray mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-template-neutral border border-template-neutral focus:border-secondary-teal focus:bg-white rounded-sm outline-none font-body text-primary-dark text-base transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-heading text-xs uppercase tracking-widest text-primary-gray mb-2"
                    >
                      Email Address <span className="text-accent-orange">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-template-neutral border border-template-neutral focus:border-secondary-teal focus:bg-white rounded-sm outline-none font-body text-primary-dark text-base transition-colors"
                      placeholder="your@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-heading text-xs uppercase tracking-widest text-primary-gray mb-2"
                    >
                      Message <span className="text-accent-orange">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-template-neutral border border-template-neutral focus:border-secondary-teal focus:bg-white rounded-sm outline-none font-body text-primary-dark text-base transition-colors resize-none"
                      placeholder="Describe your project and survey requirements..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="font-body text-xs text-primary-gray">
                      Fields marked with <span className="text-accent-orange">*</span> are required
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-dark text-white font-heading font-semibold text-sm uppercase tracking-widest hover:bg-secondary-teal transition-colors rounded-sm group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
