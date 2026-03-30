"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Check } from "lucide-react";
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "age",
    question: "What age is right for Invisalign Teen?",
    answer:
      "Invisalign Teen works best for ages 12 and up, once most or all permanent teeth have erupted. Dr. Karamcheti evaluates each teen individually to determine if they're ready. Some younger teens may benefit from traditional braces or phase-one treatment. At your free consultation, Dr. Karamcheti will explain what's best for your teen's smile.",
  },
  {
    id: "compliance",
    question: "How can parents monitor wear compliance?",
    answer:
      "Invisalign Teen includes a brilliant compliance indicator: blue dots on the aligners that fade gradually as the teen wears them. The dots show exactly how many hours per day the aligners are in the mouth. Parents can easily see if their teen is wearing them the recommended 20–22 hours per day. No guessing. Complete transparency.",
  },
  {
    id: "sports",
    question: "Is Invisalign safe for sports and activities?",
    answer:
      "Absolutely. Invisalign is safer for sports than metal braces. There are no wires or brackets to break, bend, or cut lips and cheeks during contact sports. Teens simply remove aligners before practice or games, then pop them back in afterward. Mouthguards fit properly without bulky brackets in the way.",
  },
  {
    id: "cost_vs_braces",
    question: "Is Invisalign Teen more expensive than braces?",
    answer:
      "Invisalign Teen and traditional braces are typically comparable in cost—usually $3,500–$6,500. Invisalign may actually be cheaper long-term because there are fewer office visits and no emergency bracket repairs. Insurance often covers both similarly. Dr. Karamcheti discusses pricing during your consultation.",
  },
  {
    id: "duration",
    question: "How long does teen Invisalign treatment take?",
    answer:
      "Most teen cases take 8–16 months, depending on how much alignment is needed. Some less complex cases finish faster. Dr. Karamcheti gives an exact timeline after examining your teen's teeth and taking 3D images. Teens see noticeable progress within 4–6 weeks.",
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function InvisalignTeensContent() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: parentRef, inView: parentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: complianceRef, inView: complianceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teenBenefits = [
    {
      icon: "😊",
      title: "Confidence Now",
      description:
        "Straight teeth make teenagers feel confident at school, in photos, and on social media. Invisalign is nearly invisible, so they feel good about their appearance from day one.",
    },
    {
      icon: "🍕",
      title: "No Food Restrictions",
      description:
        "Remove aligners for lunch, snacks, and meals. Eat pizza, popcorn, apples, whatever they want. No worrying about braces getting damaged by certain foods.",
    },
    {
      icon: "🏃",
      title: "Better for Sports",
      description:
        "Play soccer, basketball, football, or any contact sport without worrying about bracket damage or mouth cuts. Mouthguards fit perfectly without bulky braces.",
    },
    {
      icon: "🎤",
      title: "Clearer Speech",
      description:
        "Smooth aligners don't interfere with speech like metal braces do. No lisp. No adjusting to speak clearly. Talk confidently from day one.",
    },
    {
      icon: "🪥",
      title: "Easier Hygiene",
      description:
        "Teens remove aligners to brush and floss normally. No complicated threading around wires and brackets. Better oral hygiene habits start now.",
    },
    {
      icon: "⏱️",
      title: "Fewer Appointments",
      description:
        "Fewer office visits than traditional braces. Less time out of school for orthodontic appointments. More time for homework and activities.",
    },
  ];

  const bracesComparison = [
    {
      feature: "Appearance",
      invisalign: "Nearly invisible clear aligners",
      braces: "Visible metal wires and brackets",
    },
    {
      feature: "Food Restrictions",
      invisalign: "None—remove for meals",
      braces: "Many sticky, hard, and crunchy foods forbidden",
    },
    {
      feature: "Sports & Activities",
      invisalign: "Safe—remove for practice/games",
      braces: "Risk of bracket damage and mouth cuts",
    },
    {
      feature: "Cleaning",
      invisalign: "Remove to brush and floss normally",
      braces: "Must navigate wires and brackets carefully",
    },
    {
      feature: "Comfort",
      invisalign: "Smooth plastic, minimal irritation",
      braces: "Metal wires cause cuts and soreness",
    },
    {
      feature: "Maintenance",
      invisalign: "No emergency appointments",
      braces: "Broken brackets require urgent visits",
    },
    {
      feature: "Office Visits",
      invisalign: "Every 6–8 weeks",
      braces: "Every 4–6 weeks for adjustments",
    },
  ];

  const specialFeatures = [
    {
      feature: "Compliance Indicators",
      description:
        "Blue dots on each aligner fade with wear time. Parents can verify 20–22 hour daily wear without monitoring or nagging.",
    },
    {
      feature: "Eruption Tabs",
      description:
        "Special tabs on aligners accommodate erupting second molars. No need to stop treatment or get new aligners just for emerging teeth.",
    },
    {
      feature: "Optimized Movement",
      description:
        "Treatment plan accounts for jaw growth and tooth eruption. Aligners adapt as your teen's mouth develops.",
    },
    {
      feature: "Replacement Aligners",
      description:
        "If an aligner gets lost, Dr. Karamcheti provides replacements without reprinting the whole series. Keep treatment on track.",
    },
  ];

  const parentMonitoring = [
    {
      title: "See the Blue Indicator",
      description:
        "Each aligner has blue dots that fade with wear. Check them monthly to verify your teen is wearing aligners 20–22 hours daily. No hiding low compliance.",
    },
    {
      title: "Attend Check-Ups",
      description:
        "Come to appointments with your teen. Dr. Karamcheti shows you progress, answers questions, and discusses any challenges.",
    },
    {
      title: "Set Clear Expectations",
      description:
        "Talk to your teen about the goal: straight teeth in 8–16 months if they wear aligners consistently. Make it a shared commitment.",
    },
    {
      title: "Weekly Check-In",
      description:
        "Ask your teen to show you the aligner's blue indicator each week. Quick conversation. No judgment. Just accountability.",
    },
  ];

  return (
    <main className="bg-[#faf9f7]">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 md:py-28 bg-gradient-to-br from-[#1a2332] to-[#2a3d4d] text-[#faf9f7] text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
        >
          Invisalign for Teens in Charlottesville
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#e8e6e1]"
        >
          Clear aligners designed for active teenage lifestyles. No food restrictions. Safer for sports. Built-in compliance monitoring. Confidence now.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-[#1a2332] font-heading font-bold rounded hover:bg-[#d4b961] transition-all duration-300"
          >
            Free Teen Assessment
          </Link>
        </motion.div>
      </motion.section>

      {/* Direct Answer Block */}
      <motion.section
        ref={answerRef}
        initial="hidden"
        animate={answerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-16 max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="bg-[#f0ede7] border-l-4 border-[#c9a84c] p-8 rounded"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#1a2332] mb-4">
            Built for Teenagers
          </h2>
          <p className="font-body text-lg text-[#2a3d4d] leading-relaxed">
            Invisalign Teen at Cville Dentist in Charlottesville works for teens ages 12 and up. Built-in compliance indicators help parents track wear time. No food restrictions, no wire adjustments, and safer for sports than metal braces. Your teen gets a straighter smile while keeping the freedom and confidence that matters to them.
          </p>
        </motion.div>
      </motion.section>

      {/* Why Teens Choose Invisalign */}
      <motion.section
        ref={comparisonRef}
        initial="hidden"
        animate={comparisonInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          Why Teens Prefer Invisalign
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          Teenagers face pressures that younger kids don't. They care about appearance, activity freedom, and fitting in. Invisalign delivers on all three.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teenBenefits.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#e8e6e1]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading text-xl font-bold text-[#1a2332] mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[#4a5f6f] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Invisalign vs Braces */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto bg-white"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center"
        >
          Invisalign Teen vs. Traditional Braces
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a2332] text-[#faf9f7]">
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Feature</th>
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Invisalign Teen</th>
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Braces</th>
              </tr>
            </thead>
            <tbody>
              {bracesComparison.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#faf9f7]" : "bg-white"}
                >
                  <td className="font-heading font-bold p-4 border border-[#e8e6e1] text-[#1a2332]">
                    {row.feature}
                  </td>
                  <td className="font-body p-4 border border-[#e8e6e1] text-[#4a5f6f]">
                    {row.invisalign}
                  </td>
                  <td className="font-body p-4 border border-[#e8e6e1] text-[#4a5f6f]">
                    {row.braces}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      {/* Teen-Specific Features */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center"
        >
          Invisalign Teen Features
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {specialFeatures.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-[#f0ede7] to-[#faf9f7] p-8 rounded-lg border border-[#e8e6e1] hover:border-[#c9a84c] transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-2xl">✓</div>
                <div className="flex-grow">
                  <h3 className="font-heading font-bold text-[#1a2332] text-lg mb-2">
                    {item.feature}
                  </h3>
                  <p className="font-body text-[#4a5f6f] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Compliance & Parent Monitoring */}
      <motion.section
        ref={complianceRef}
        initial="hidden"
        animate={complianceInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 bg-gradient-to-br from-[#7a9e7e] to-[#5a7e5e] text-[#faf9f7] max-w-6xl mx-auto rounded-lg"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Built-In Compliance Monitoring
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg mb-12 max-w-3xl mx-auto text-center leading-relaxed"
        >
          The biggest question parents ask: "Will my teen actually wear them?" Invisalign Teen includes a brilliant compliance indicator that removes the guesswork.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {parentMonitoring.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-[#1a2332] bg-opacity-20 p-6 rounded-lg border border-[#faf9f7] border-opacity-20"
            >
              <h3 className="font-heading font-bold text-[#faf9f7] text-lg mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[#e8e6e1] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* The Blue Indicator */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-8 text-center"
        >
          How the Blue Indicator Works
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white border border-[#e8e6e1] rounded-lg p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-lg mb-3 flex items-center gap-3">
              <span className="text-2xl">🔵</span>
              Week 1: New Aligner
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              Each new aligner comes with bright blue dots printed on the outside. These dots are visible whenever the aligner is in your teen's mouth.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-[#f0ede7] border border-[#c9a84c] rounded-lg p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-lg mb-3 flex items-center gap-3">
              <span className="text-2xl">🔘</span>
              Throughout the Week: Dots Fade
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              As saliva and wear gradually fade the blue dots, you can see exactly how many hours per day the aligner was worn. If most dots are still bright blue at the end of the week, you know your teen needs a reminder about compliance.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white border border-[#e8e6e1] rounded-lg p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-lg mb-3 flex items-center gap-3">
              <span className="text-2xl">✓</span>
              Week 2: Ready to Switch
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              After 7–10 days of consistent wear, your teen switches to the next aligner. Faded blue dots show perfect compliance. No nagging needed.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* The Confidence Factor */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 max-w-4xl mx-auto bg-white"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 text-center"
        >
          The Confidence Factor
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] leading-relaxed text-center mb-6"
        >
          Straight teeth change how teenagers feel about themselves. With Invisalign, your teen gets straighter teeth while maintaining the confidence that matters during these important years.
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] leading-relaxed text-center"
        >
          No visible brackets. No self-consciousness in class photos. No feeling like they stand out. Invisalign is the choice of teenagers who want results without the spotlight.
        </motion.p>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="space-y-4"
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-white border border-[#e8e6e1] rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpanded({
                    ...expanded,
                    [item.id]: !expanded[item.id],
                  })
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#faf9f7] transition-colors duration-200"
              >
                <h3 className="font-heading font-bold text-[#1a2332] text-left text-lg">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`flex-shrink-0 w-5 h-5 text-[#c9a84c] transition-transform duration-300 ${
                    expanded[item.id] ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expanded[item.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
                    className="border-t border-[#e8e6e1]"
                  >
                    <p className="font-body text-[#4a5f6f] leading-relaxed px-6 py-4">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        headline="Give Your Teen the Invisalign Advantage"
        subheadline="Schedule a free assessment for your teen with Dr. Karamcheti. She'll evaluate their smile, discuss options, and show you exactly what Invisalign can achieve."
        buttonText="Free Teen Assessment"
        buttonLink="/contact"
        variant="navy"
      />
    </main>
  );
}
