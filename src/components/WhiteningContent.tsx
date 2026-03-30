"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

export default function WhiteningContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: optionsRef, inView: optionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: candidateRef, inView: candidateInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whiteningOptions = [
    {
      title: "In-Office Whitening",
      timeframe: "1 hour appointment",
      description:
        "Dr. Karamcheti applies professional-grade whitening gel directly to your teeth and activates it with a specialized light. Results are dramatic and immediate.",
      process: [
        "Teeth are cleaned and protected",
        "Professional-strength whitening gel applied",
        "Activation light used (20–30 minutes)",
        "Gel removed and reapplied 2–3 times",
        "Results visible immediately after appointment",
      ],
      results: "Shade lighter 2–4 shades in one appointment",
      cost: "$300–$500",
      bestFor: "Patients who want immediate, dramatic results",
      sensitivity: "Managed during treatment with protective measures",
    },
    {
      title: "Custom Take-Home Whitening",
      timeframe: "1–2 weeks of use",
      description:
        "Dr. Karamcheti creates custom-fitted trays made from impressions of your teeth. You apply whitening gel at home and wear trays for a few hours daily.",
      process: [
        "Impressions taken for custom tray creation",
        "Lab fabricates custom-fit trays (3–5 days)",
        "You return for gel and instructions",
        "Wear trays at home 1–2 hours daily (or overnight)",
        "Gradual whitening over 1–2 weeks",
      ],
      results: "Shade lighter 2–3 shades gradually over 2 weeks",
      cost: "$150–$300 for trays + gel",
      bestFor: "Patients who prefer gradual brightening and convenience",
      sensitivity: "Adjustable — lower concentration gel available",
    },
  ];

  const whyProfessional = [
    {
      icon: "🧪",
      title: "Stronger Formulas",
      description:
        "Professional whitening uses significantly higher concentrations of hydrogen peroxide than OTC products. Drugstore strips typically contain 3–5% peroxide; professional treatments contain 15–35%.",
    },
    {
      icon: "👍",
      title: "Custom Fit",
      description:
        "In-office treatment ensures the gel contacts all surfaces evenly. Take-home custom trays fit perfectly — no leakage or uneven coverage like generic strips.",
    },
    {
      icon: "🔬",
      title: "Dentist Supervision",
      description:
        "Dr. Karamcheti monitors your teeth before and after treatment. She assesses sensitivity, ensures gums are protected, and adjusts treatment based on your response.",
    },
    {
      icon: "⚡",
      title: "Faster Results",
      description:
        "Professional treatments deliver visible results in one visit. OTC products require weeks of daily use and often deliver minimal improvement.",
    },
    {
      icon: "🛡",
      title: "Sensitivity Management",
      description:
        "Professional treatments include sensitivity-reducing measures. Pre-treatment applications protect tooth roots. Post-treatment fluoride strengthens enamel.",
    },
    {
      icon: "✓",
      title: "Predictable Outcome",
      description:
        "You know what to expect. Professional treatment delivers consistent, measurable shade improvement. OTC results vary wildly and often disappoint.",
    },
  ];

  const faqItems = [
    {
      question: "How much whiter will my teeth get?",
      answer:
        "In-office whitening typically lightens teeth 2–4 shades in a single appointment. Take-home whitening lightens teeth 2–3 shades over 1–2 weeks. Results depend on your starting shade and tooth structure. Dr. Karamcheti shows you the whitening scale during consultation.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes. Professional whitening is safe when performed by a dentist. The gel is applied carefully to avoid contact with gums. Pre-treatment applications protect tooth roots. Sensitivity is temporary and easily managed. Whitening does not damage tooth structure or enamel.",
    },
    {
      question: "Will whitening work on crowns or veneers?",
      answer:
        "No. Whitening only affects natural tooth structure. Crowns and veneers don't whiten. If you have crowns on visible teeth, Dr. Karamcheti whitens natural teeth to match, then may recommend crown replacement to ensure color match.",
    },
    {
      question: "How long do results last?",
      answer:
        "Professional whitening results last 6 months to 3 years, depending on your habits. Coffee, tea, wine, smoking, and dark foods stain teeth faster. Regular touch-ups maintain brightness. With care, you can extend results significantly.",
    },
    {
      question: "What causes tooth sensitivity after whitening?",
      answer:
        "Whitening gel temporarily opens pores in enamel, exposing dentin underneath. This causes sensitivity to temperature and touch for 24–48 hours. Dr. Karamcheti uses protective measures during treatment and provides sensitivity relief gel to minimize discomfort.",
    },
    {
      question: "Can I whiten if my teeth are already sensitive?",
      answer:
        "Yes, but Dr. Karamcheti takes extra precautions. She may recommend pre-treatment with desensitizing gel or use a lower concentration whitening agent. Custom take-home trays are often better for sensitive teeth than in-office treatment.",
    },
    {
      question: "How do I maintain whitening results?",
      answer:
        "Brush twice daily with whitening toothpaste. Avoid staining foods and drinks (coffee, tea, red wine, berries). Use a straw when drinking dark beverages. Schedule touch-up appointments every 6–12 months. Avoid smoking and tobacco products.",
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
            Professional Teeth Whitening in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Drugstore strips don't work. Professional whitening does. Dr. Karamcheti offers in-office and custom take-home whitening that delivers results you'll actually see — and results that last.
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
              Professional teeth whitening at Cville Dentist in Charlottesville delivers results drugstore strips can't match. In-office whitening takes about one hour. Custom take-home trays available for gradual brightening. Both options supervised by Dr. Karamcheti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Whitening Options Section */}
      <section
        ref={optionsRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              Two Whitening Options
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose what works best for your lifestyle and timeline
            </p>
          </motion.div>

          <div className="space-y-12">
            {whiteningOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={optionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0, 0, 0.2, 1] as [number, number, number, number],
                }}
                className="bg-white rounded-lg border-2 border-gold border-opacity-30 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gold bg-opacity-10 p-8 border-b border-gold border-opacity-20">
                  <h3 className="heading-sm text-navy mb-2">{option.title}</h3>
                  <p className="text-gold font-semibold text-sm">
                    {option.timeframe}
                  </p>
                </div>

                <div className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {option.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="heading-sm text-navy mb-4">Process:</h4>
                      <ul className="space-y-2">
                        {option.process.map((step, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-gray-700 text-sm"
                          >
                            <span className="text-gold font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-cream p-4 rounded-lg">
                        <p className="text-sm font-semibold text-navy mb-1">
                          Results:
                        </p>
                        <p className="text-gray-700">{option.results}</p>
                      </div>

                      <div className="bg-cream p-4 rounded-lg">
                        <p className="text-sm font-semibold text-navy mb-1">
                          Cost:
                        </p>
                        <p className="text-gray-700">{option.cost}</p>
                      </div>

                      <div className="bg-cream p-4 rounded-lg">
                        <p className="text-sm font-semibold text-navy mb-1">
                          Best For:
                        </p>
                        <p className="text-gray-700 text-sm">{option.bestFor}</p>
                      </div>

                      <div className="bg-cream p-4 rounded-lg">
                        <p className="text-sm font-semibold text-navy mb-1">
                          Sensitivity:
                        </p>
                        <p className="text-gray-700 text-sm">
                          {option.sensitivity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mt-12 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Dr. Karamcheti recommends the best option based on your teeth, sensitivity, and preferences. Many patients do in-office whitening first, then maintain with take-home trays.
          </motion.p>
        </div>
      </section>

      {/* Why Professional Section */}
      <section
        ref={benefitsRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              Why Professional Beats OTC
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Professional whitening delivers results drugstore strips simply cannot match
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyProfessional.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={benefitsInView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-cream rounded-lg p-8 border border-gold border-opacity-30 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm text-navy mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0, 0, 0.2, 1] as [number, number, number, number],
            }}
            className="mt-12 bg-navy text-white p-8 rounded-lg text-center"
          >
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Bottom line:</span> OTC strips average $5–$50 and often deliver no visible results. Professional whitening costs $150–$500 and guarantees noticeable improvement. The investment pays off in results that actually work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional vs OTC Comparison */}
      <section
        ref={comparisonRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              Professional vs. Over-the-Counter
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={comparisonInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-4 text-left font-semibold">Factor</th>
                  <th className="p-4 text-left font-semibold">Professional</th>
                  <th className="p-4 text-left font-semibold">OTC Strips</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">
                    Whitening Strength
                  </td>
                  <td className="p-4 text-gray-700">15–35% peroxide</td>
                  <td className="p-4 text-gray-700">3–5% peroxide</td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Results</td>
                  <td className="p-4 text-gray-700">
                    2–4 shades in 1 hour
                  </td>
                  <td className="p-4 text-gray-700">
                    0–1 shade in 2 weeks (often none)
                  </td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Coverage</td>
                  <td className="p-4 text-gray-700">
                    Even coverage, all surfaces
                  </td>
                  <td className="p-4 text-gray-700">
                    Uneven, misses spots
                  </td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Gum Protection</td>
                  <td className="p-4 text-gray-700">Professional barrier</td>
                  <td className="p-4 text-gray-700">Minimal protection</td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Longevity</td>
                  <td className="p-4 text-gray-700">6 months–3 years</td>
                  <td className="p-4 text-gray-700">Days to weeks</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Cost</td>
                  <td className="p-4 text-gray-700">$150–$500</td>
                  <td className="p-4 text-gray-700">$5–$50</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0, 0, 0.2, 1] as [number, number, number, number],
            }}
            className="text-center mt-12 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Professional whitening costs more upfront but delivers 10–20 times better results. The investment pays for itself the moment you see how much whiter your teeth get.
          </motion.p>
        </div>
      </section>

      {/* Candidate Section */}
      <section
        ref={candidateRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={candidateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-12"
          >
            <h2 className="heading-md mb-4">Is Whitening Right for You?</h2>
            <p className="text-lg text-white text-opacity-90">
              Most patients are good candidates
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={candidateInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="space-y-6 text-white text-opacity-90"
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="heading-sm mb-4 text-white">Good candidates:</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>Teeth that are stained, yellowed, or darkened</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>Healthy teeth with no decay or cavities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>Patients with mild to moderate sensitivity</span>
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <h3 className="heading-sm mb-4 text-white">Not good candidates:</h3>
              <ul className="space-y-2">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">—</span>
                  <span>Severe internal tooth discoloration (gray teeth)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">—</span>
                  <span>Teeth with large composite fillings on front surface</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">—</span>
                  <span>Patients with severe enamel erosion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">—</span>
                  <span>
                    Pregnant or breastfeeding (wait until after pregnancy)
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-center text-lg">
              Dr. Karamcheti assesses your teeth during a consultation and recommends whether professional whitening is right for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Maintaining Results Section */}
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
              Maintaining Your Whitening Results
            </h2>
            <p className="text-lg text-gray-700">
              Keep your smile bright with these simple habits
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-gray-700"
          >
            <div className="bg-cream p-8 rounded-lg border-l-4 border-gold">
              <h3 className="heading-sm text-navy mb-4">Do this:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>
                    <strong>Brush and floss daily.</strong> Good oral hygiene keeps teeth clean and helps preserve whiteness.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>
                    <strong>Use a straw.</strong> When drinking coffee, tea, or wine, use a straw to minimize contact with teeth.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>
                    <strong>Rinse with water.</strong> After consuming staining foods or drinks, rinse your mouth with water.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>
                    <strong>Use whitening toothpaste.</strong> Maintains brightness between professional treatments.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <span>
                    <strong>Schedule touch-ups.</strong> Every 6–12 months, do a quick in-office or take-home touch-up.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="heading-sm mb-4">Avoid this:</h3>
              <ul className="space-y-3 text-white text-opacity-90">
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✗</span>
                  <span>Excessive coffee, tea, red wine, or dark cola</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✗</span>
                  <span>Smoking or tobacco products</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✗</span>
                  <span>Acidic foods and drinks (lemon, soda)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold flex-shrink-0">✗</span>
                  <span>
                    Whitening products from unverified sources
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              With proper care and occasional touch-ups, professional whitening results can last 1–3 years. Many patients find it's worth the small investment to maintain their bright smile.
            </p>
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
            Professional Teeth Whitening in Charlottesville
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 text-lg text-white text-opacity-90"
          >
            <p>
              <span className="font-semibold">Cville Dentist</span>
              <br />
              2375 Commonwealth Dr # A, Charlottesville, VA 22901
              <br />
              <span className="text-gold font-semibold">(434) 973-5873</span>
            </p>
            <p>
              Dr. Karamcheti offers in-office and custom take-home whitening for Charlottesville patients. Same-day appointments often available. Call to book your whitening treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Get a Brighter Smile Today"
        subheadline="Professional teeth whitening delivers results drugstore strips can't. Schedule your whitening appointment with Dr. Karamcheti at Cville Dentist."
        buttonText="Schedule Your Whitening Appointment"
        buttonLink="/contact"
      />
    </>
  );
}
