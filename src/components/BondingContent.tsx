"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

export default function BondingContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatRef, inView: whatInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: procedureRef, inView: procedureInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatFixesRef, inView: whatFixesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: durabilityRef, inView: durabilityInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatItFixes = [
    {
      issue: "Chipped Teeth",
      description:
        "A broken corner or jagged edge? Bonding repairs it in one visit. Dr. Karamcheti sculpts composite to match your tooth's original shape.",
      icon: "⚡",
    },
    {
      issue: "Small Gaps",
      description:
        "Gaps between front teeth look wider than they actually are. Bonding closes them by building composite on the tooth surfaces.",
      icon: "➖",
    },
    {
      issue: "Discoloration",
      description:
        "Stains, age-related yellowing, or fluorosis? Bonding covers the stain with tooth-colored composite.",
      icon: "✨",
    },
    {
      issue: "Uneven Teeth",
      description:
        "One tooth shorter than another? Bonding adds composite to lengthen it and even out your smile.",
      icon: "═",
    },
    {
      issue: "Exposed Roots",
      description:
        "Receding gums expose yellow root surface. Bonding covers the root and protects it while improving appearance.",
      icon: "🔒",
    },
    {
      issue: "Minor Misalignment",
      description:
        "Slight overlaps or crowding? Bonding can reshape teeth to improve alignment without braces.",
      icon: "↔",
    },
  ];

  const procedureSteps = [
    {
      step: 1,
      title: "Assessment",
      description:
        "Dr. Karamcheti examines the tooth and discusses your expectations. She tests shade-matching to find the exact color composite needed.",
    },
    {
      step: 2,
      title: "Preparation",
      description:
        "The tooth is lightly roughened to help the composite adhere. A thin barrier is applied to keep the tooth dry.",
    },
    {
      step: 3,
      title: "Application",
      description:
        "Dr. Karamcheti applies tooth-colored composite resin directly to the tooth and carefully sculpts it to match your tooth shape.",
    },
    {
      step: 4,
      title: "Hardening",
      description:
        "A special UV light hardens the composite. Dr. Karamcheti refines the shape and bite as needed.",
    },
    {
      step: 5,
      title: "Polish",
      description:
        "The bonded tooth is polished to a natural shine that matches the surrounding teeth.",
    },
  ];

  const faqItems = [
    {
      question: "Is dental bonding painful?",
      answer:
        "No. Bonding is painless. The tooth is not drilled or prepared extensively. You may feel slight vibration, but no pain. Anesthesia is rarely needed unless the bonding extends below the gum line.",
    },
    {
      question: "How long does bonding take?",
      answer:
        "Most bonding appointments take 30 minutes to one hour, depending on how many teeth need repair. It's done in a single visit—you walk in with a chip and walk out with a complete smile.",
    },
    {
      question: "How long does bonding last?",
      answer:
        "Dental bonding typically lasts 5–10 years. Composite resin is durable but not as long-lasting as porcelain veneers. Longevity depends on oral hygiene, bite force, and habits. Avoiding chewing on hard objects extends the life.",
    },
    {
      question: "Can bonding stain?",
      answer:
        "Yes, bonding is more prone to staining than veneers or natural teeth. Coffee, tea, wine, and tobacco can stain composite over time. Professional whitening can help, but results may not be uniform if only some teeth are bonded.",
    },
    {
      question: "Does bonding require special care?",
      answer:
        "No special care is needed. Brush and floss as normal. Avoid chewing on hard objects like ice or pens. If you grind your teeth, a night guard protects bonding from fracture.",
    },
    {
      question: "When would veneers be better than bonding?",
      answer:
        "Veneers are better for multiple teeth, long-term solutions, or when you want stain-resistant results. Bonding is ideal for single teeth, quick fixes, and patients on a budget. Dr. Karamcheti recommends the best option for your smile during consultation.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="bg-navy text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg mb-6"
          >
            Dental Bonding in Charlottesville — One Visit, Visible Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Chip a tooth? Notice a gap? Bonding fixes it the same day. Dr. Karamcheti sculpts tooth-colored composite directly onto your tooth—affordable, immediate, and surprisingly natural-looking.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section
        ref={answerRef}
        className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={answerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">
              Quick Answer
            </p>
            <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
              Dental bonding at Willis & Associates in Charlottesville starts at $300 per tooth and takes one visit. Dr. Karamcheti sculpts tooth-colored composite directly onto the tooth to fix chips, gaps, and discoloration — no lab work, no waiting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is Bonding Section */}
      <section
        ref={whatRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={whatInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="heading-md text-navy"
              >
                What Is Dental Bonding?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Bonding is a simple cosmetic technique where Dr. Karamcheti applies tooth-colored composite resin directly to your tooth and sculpts it into the desired shape. The composite is hardened with a UV light, creating an instant repair.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Unlike veneers, which require preparation and lab work, bonding is done completely in-office in one appointment. It's the fastest way to fix small cosmetic problems and one of the most affordable.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="bg-navy text-white p-6 rounded-lg"
              >
                <p className="font-semibold mb-3">Why patients choose bonding:</p>
                <ul className="space-y-2 text-white text-opacity-90">
                  <li>✓ Same-day results</li>
                  <li>✓ Affordable cosmetic dentistry</li>
                  <li>✓ Minimal tooth preparation</li>
                  <li>✓ No anesthesia usually needed</li>
                  <li>✓ Quick appointment time</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={whatInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            >
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Dental bonding repair in Charlottesville"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Bonding Fixes Section */}
      <section
        ref={whatFixesRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whatFixesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              What Bonding Fixes
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From chips to gaps to stains — bonding addresses all of these in one appointment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatItFixes.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={whatFixesInView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-cream rounded-lg p-8 border border-gold border-opacity-30 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4 items-start">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="heading-sm text-navy mb-2">
                      {item.issue}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Procedure Section */}
      <section
        ref={procedureRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={procedureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">
              The Bonding Procedure — Step by Step
            </h2>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              Most bonding appointments take less than an hour
            </p>
          </motion.div>

          <div className="space-y-6">
            {procedureSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={procedureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0, 0, 0.2, 1] as [number, number, number, number],
                }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold bg-opacity-20 rounded-full flex items-center justify-center border-2 border-gold">
                  <span className="text-gold text-lg font-bold">
                    {step.step}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="heading-sm mb-2">{step.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={procedureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0, 0, 0.2, 1] as [number, number, number, number],
            }}
            className="mt-12 text-center text-lg text-white text-opacity-95"
          >
            <p>
              <span className="font-semibold">Total time: 30–60 minutes.</span> No waiting for lab work. No temporary teeth. You leave with your completed smile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Durability & Longevity Section */}
      <section
        ref={durabilityRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={durabilityInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-navy mb-4">
              How Long Does Bonding Last?
            </h2>
            <p className="text-lg text-gray-700">
              5–10 years with proper care
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={durabilityInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="space-y-8 text-gray-700"
          >
            <div className="bg-white p-8 rounded-lg border-l-4 border-gold">
              <h3 className="heading-sm text-navy mb-4">
                What affects bonding longevity:
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy mb-3">
                    Extends life:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>Good oral hygiene</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>Avoiding hard foods</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>Not grinding teeth</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-gold">✓</span>
                      <span>Regular dental visits</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-3">
                    Shortens life:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex gap-2">
                      <span className="text-sage">✗</span>
                      <span>Chewing ice or hard candy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-sage">✗</span>
                      <span>Heavy coffee or tea drinking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-sage">✗</span>
                      <span>Teeth grinding</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-sage">✗</span>
                      <span>Smoking or tobacco use</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Bonding can chip or fracture with impact or hard biting. If this happens, Dr. Karamcheti easily repairs or replaces the bonding in a single appointment. Think of it like a patch — if it wears out, it's quick to refresh.
            </p>

            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="heading-sm mb-4">
                Bonding vs. Veneers — Durability
              </h3>
              <p className="text-white text-opacity-90 leading-relaxed mb-4">
                Veneers last 15–20 years because porcelain is harder and more stain-resistant. Bonding (composite resin) lasts 5–10 years because it's softer and can stain or chip more easily. For single teeth or quick fixes, bonding is ideal. For long-term, multi-tooth solutions, veneers may be better.
              </p>
              <p className="text-gold font-semibold">
                Dr. Karamcheti recommends the best option during your consultation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost & Value Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-navy mb-4">
              Cost & Value
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-gray-700"
          >
            <div className="bg-cream p-8 rounded-lg border-l-4 border-gold">
              <p className="text-lg font-semibold text-navy mb-2">
                Bonding: $300–$600 per tooth
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bonding is the most affordable cosmetic option. Many patients have multiple teeth bonded in one visit and spend under $1,000 for dramatic smile improvements.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Bonding is often covered partially by dental insurance if the tooth was previously damaged or if the bonding is considered necessary for tooth protection (like covering exposed root). Check with your insurance or ask Dr. Karamcheti's office about coverage.
            </p>

            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="heading-sm mb-4">Why bonding is a smart value:</h3>
              <ul className="space-y-3 text-white text-opacity-90">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Fast.</strong> Same-day results.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Affordable.</strong> A fraction of the cost of veneers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Reversible (mostly).</strong> Can be removed or replaced.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Minimal tooth prep.</strong> Preserves tooth structure.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-md text-center mb-12 text-navy"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-gold border-opacity-30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 bg-cream hover:bg-gold hover:bg-opacity-20 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-left heading-sm text-navy">
                    {item.question}
                  </h3>
                  <span className="text-gold font-bold text-xl flex-shrink-0 ml-4">
                    {expandedFaq === index ? "−" : "+"}
                  </span>
                </button>

                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-gold border-opacity-30">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Local Info Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-md mb-6"
          >
            Dental Bonding in Charlottesville
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 text-lg text-white text-opacity-90"
          >
            <p>
              <span className="font-semibold">Willis & Associates Family Dentistry</span>
              <br />
              2375 Commonwealth Dr # A, Charlottesville, VA 22901
              <br />
              <span className="text-gold font-semibold">(434) 973-5873</span>
            </p>
            <p>
              Dr. Karamcheti offers same-day bonding for Charlottesville patients. No referral needed. No waiting for lab work. Call today to schedule your bonding appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Fix That Chip Today"
        subheadline="Dental bonding is the fastest, most affordable way to repair chips, gaps, and stains. Schedule your same-day appointment with Dr. Karamcheti."
        buttonText="Schedule Your Bonding Appointment"
        buttonLink="/contact"
      />
    </>
  );
}
