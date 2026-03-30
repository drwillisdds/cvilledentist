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

export default function SmileMakeoversContent() {
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

  const { ref: combinationsRef, inView: combinationsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: designRef, inView: designInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const commonCombinations = [
    {
      title: "Veneers + Whitening",
      description:
        "The classic combination. Custom veneers on front teeth matched to bright, white shade achieved with professional whitening. Results last 15–20 years.",
      procedures: ["Porcelain veneers (4–6 teeth)", "Professional whitening"],
    },
    {
      title: "Bonding + Whitening",
      description:
        "For budget-conscious patients wanting quick transformation. Bonding fixes chips and gaps, whitening brightens everything. Same-day or two-visit plan.",
      procedures: ["Dental bonding", "Professional whitening"],
    },
    {
      title: "Veneers + Bonding + Whitening",
      description:
        "A comprehensive plan. Veneers on front teeth, bonding on secondary teeth, professional whitening across all teeth. Maximum impact.",
      procedures: [
        "Porcelain veneers",
        "Dental bonding",
        "Professional whitening",
      ],
    },
    {
      title: "Veneers + Invisalign",
      description:
        "For patients with alignment issues. Invisalign straightens teeth over months, then veneers refine shape and shade. Combined transformation.",
      procedures: ["Invisalign alignment", "Porcelain veneers"],
    },
    {
      title: "Bonding + Invisalign",
      description:
        "Straighten teeth with Invisalign, then bonding refines final appearance. Faster and less expensive than veneer combination.",
      procedures: ["Invisalign alignment", "Dental bonding"],
    },
    {
      title: "Crowns + Veneers + Whitening",
      description:
        "For patients with existing crowns or restorations. New crowns match custom veneers and whitening for unified smile appearance.",
      procedures: [
        "Porcelain crowns",
        "Porcelain veneers",
        "Professional whitening",
      ],
    },
  ];

  const designProcess = [
    {
      step: 1,
      title: "Comprehensive Consultation",
      description:
        "Dr. Karamcheti spends time understanding your goals, concerns, timeline, and budget. She examines your teeth, gums, and facial structure.",
    },
    {
      step: 2,
      title: "Digital Smile Design",
      description:
        "She uses digital imaging to show you a preview of projected results. You see what your smile could look like before any treatment begins.",
    },
    {
      step: 3,
      title: "Custom Treatment Plan",
      description:
        "Based on your goals and anatomy, she designs a multi-phase plan combining specific procedures in a logical sequence.",
    },
    {
      step: 4,
      title: "Detailed Timeline",
      description:
        "She explains which treatments happen first, how many visits each requires, and total timeline from start to finished smile.",
    },
    {
      step: 5,
      title: "Phased Execution",
      description:
        "Treatment proceeds according to plan. Dr. Karamcheti coordinates procedures so each builds on previous work for optimal final results.",
    },
    {
      step: 6,
      title: "Final Refinement",
      description:
        "Once all major work is complete, she fine-tunes bite, shade matching, and symmetry. You get exactly what was promised.",
    },
  ];

  const faqItems = [
    {
      question: "How long does a smile makeover take?",
      answer:
        "Timeline varies depending on the plan. Simple makeovers (bonding + whitening) take 1–2 visits. Complex plans (veneers + Invisalign + whitening) take 6–12 months. Dr. Karamcheti gives you a detailed timeline during consultation.",
    },
    {
      question: "What's the cost of a smile makeover?",
      answer:
        "Cost varies widely based on procedures chosen. Simple makeovers (bonding + whitening) start around $1,500. Comprehensive plans (veneers + whitening) range $5,000–$15,000+. Dr. Karamcheti provides exact pricing during consultation. Payment plans available.",
    },
    {
      question: "Can I do treatments one at a time?",
      answer:
        "Yes. Dr. Karamcheti customizes the plan to your budget and timeline. You can start with whitening, then add bonding later, then veneers eventually. She designs the plan so each phase works well even if you don't do everything immediately.",
    },
    {
      question: "Will I be without teeth during treatment?",
      answer:
        "No. If veneers are part of the plan, temporary veneers are placed immediately after tooth preparation. You never walk around without teeth. For other procedures like Invisalign, you wear aligners — not traditional braces.",
    },
    {
      question: "What if I change my mind about the plan?",
      answer:
        "You control the pace. If your circumstances change, Dr. Karamcheti adjusts the plan. Maybe you decide to stop after whitening and bonding instead of doing veneers. The plan is flexible based on your goals and resources.",
    },
    {
      question: "Does dental insurance cover smile makeover procedures?",
      answer:
        "Some procedures may have partial coverage. Whitening is usually cosmetic (not covered). Bonding may be covered if it addresses a damaged tooth. Veneers are typically cosmetic (not covered). Crowns may be covered if medically necessary. Ask about your specific insurance.",
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
            Smile Makeovers in Charlottesville — Your Complete Transformation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Tired of hiding your smile? Ready for a change? A smile makeover combines multiple cosmetic procedures into one coordinated plan designed specifically for you. Dr. Karamcheti turns your smile dreams into reality.
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
              A smile makeover at Willis & Associates in Charlottesville combines multiple cosmetic procedures — veneers, bonding, whitening, and crowns — into one custom treatment plan. Dr. Karamcheti designs every makeover around your face shape, skin tone, and goals. Cost and timeline vary based on your specific plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is a Smile Makeover Section */}
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
                What Is a Smile Makeover?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                A smile makeover is a personalized, multi-phase treatment plan that transforms your smile by combining cosmetic and restorative procedures. Instead of fixing one isolated problem, Dr. Karamcheti steps back and redesigns your entire smile.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Some patients need just whitening and bonding. Others need veneers, crowns, and alignment correction. Dr. Karamcheti assesses your specific situation and designs a plan that addresses all issues in a logical sequence.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="bg-sage text-white p-6 rounded-lg"
              >
                <p className="font-semibold mb-4">Smile makeovers address:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Discoloration</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Chips & cracks</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Gaps between teeth</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Misalignment</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Uneven teeth</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span>Shape issues</span>
                  </div>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed italic"
              >
                The result is a smile that looks natural, feels comfortable, and aligns with your personality and lifestyle.
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={whatInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            >
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Smile makeover design consultation"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Combinations Section */}
      <section
        ref={combinationsRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={combinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              Common Smile Makeover Combinations
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These are popular combinations. Dr. Karamcheti also designs custom plans for your specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonCombinations.map((combo, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={combinationsInView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-cream rounded-lg p-8 border border-gold border-opacity-30 hover:shadow-lg transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{combo.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {combo.description}
                </p>
                <div className="border-t border-gold border-opacity-30 pt-4">
                  <p className="text-sm font-semibold text-navy mb-2">
                    Includes:
                  </p>
                  <ul className="space-y-1">
                    {combo.procedures.map((procedure, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-700 flex gap-2"
                      >
                        <span className="text-gold">•</span>
                        <span>{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={combinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mt-12 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Your makeover plan is unique to you. During consultation, Dr. Karamcheti recommends the combination that delivers the best results for your specific smile.
          </motion.p>
        </div>
      </section>

      {/* Design Process Section */}
      <section
        ref={designRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={designInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">
              The Smile Makeover Design Process
            </h2>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              From consultation to final smile — how Dr. Karamcheti orchestrates your transformation
            </p>
          </motion.div>

          <div className="space-y-6">
            {designProcess.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                animate={designInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0, 0, 0.2, 1] as [number, number, number, number],
                }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold bg-opacity-20 rounded-full flex items-center justify-center border-2 border-gold">
                  <span className="text-gold text-lg font-bold">
                    {item.step}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="heading-sm mb-2">{item.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={designInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0, 0, 0.2, 1] as [number, number, number, number],
            }}
            className="mt-12 text-center text-lg text-white text-opacity-95"
          >
            <p>
              <span className="font-semibold">No surprises.</span> Dr. Karamcheti shows you the projected results before treatment begins.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before & After Philosophy */}
      <section
        ref={processRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-navy mb-4">
              The Makeover Philosophy
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={processInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="space-y-6 text-gray-700"
          >
            <div className="bg-white p-8 rounded-lg border-l-4 border-gold">
              <h3 className="heading-sm text-navy mb-4">
                Dr. Karamcheti's Approach
              </h3>
              <p className="text-lg leading-relaxed">
                Every makeover design starts with understanding YOU — your lifestyle, personality, and goals. She doesn't impose a "smile template." Instead, she creates a smile that complements your face, enhances your natural features, and feels authentically yours.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              She considers your smile line, lip position, facial proportions, and even how your teeth align with your face shape. The result isn't just whiter or straighter — it's better proportioned and more harmonious with your natural features.
            </p>

            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="heading-sm mb-4">What patients say:</h3>
              <p className="text-white text-opacity-90 italic leading-relaxed">
                "I didn't realize how much my smile affected my confidence. Now I catch myself smiling more in mirrors and photos. It doesn't look fake — it just looks like the best version of me."
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              That's the goal. Not a celebrity smile. Not an obvious restoration. Just your smile — healthier, brighter, and more confident.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline & Cost Section */}
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
              Timeline & Cost
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8 text-gray-700"
          >
            <div className="bg-cream p-8 rounded-lg border-l-4 border-gold">
              <h3 className="heading-sm text-navy mb-4">Timeline Varies</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">
                    →
                  </span>
                  <div>
                    <p className="font-semibold text-navy">Quick (1–2 visits)</p>
                    <p className="text-sm">Whitening + bonding</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">
                    →
                  </span>
                  <div>
                    <p className="font-semibold text-navy">Medium (4–6 weeks)</p>
                    <p className="text-sm">Veneers + whitening</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">
                    →
                  </span>
                  <div>
                    <p className="font-semibold text-navy">Long (6–12 months)</p>
                    <p className="text-sm">Invisalign + veneers + refinements</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="heading-sm mb-4">Cost Varies</h3>
              <ul className="space-y-3 text-white text-opacity-90">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">
                    $
                  </span>
                  <div>
                    <p className="font-semibold text-white">$1,500–$3,000</p>
                    <p className="text-sm">Quick makeovers</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">
                    $
                  </span>
                  <div>
                    <p className="font-semibold text-white">$5,000–$10,000</p>
                    <p className="text-sm">Mid-range makeovers</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">
                    $
                  </span>
                  <div>
                    <p className="font-semibold text-white">$10,000–$20,000+</p>
                    <p className="text-sm">Comprehensive transformations</p>
                  </div>
                </li>
              </ul>
              <p className="text-gold mt-4 font-semibold">
                Payment plans available
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-8 text-lg text-gray-700"
          >
            Dr. Karamcheti provides a detailed cost and timeline estimate during your consultation. You can start with Phase 1 and progress at your own pace.
          </motion.p>
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
            Smile Makeovers in Charlottesville
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
              Dr. Karamcheti specializes in complete smile transformations for Charlottesville patients. Schedule your free makeover consultation today to discuss your smile goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Ready to Transform Your Smile?"
        subheadline="Dr. Karamcheti will design a custom makeover plan that enhances your natural beauty and fits your timeline and budget. Schedule your consultation today."
        buttonText="Schedule Your Makeover Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
