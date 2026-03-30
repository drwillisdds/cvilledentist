"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    transition: { duration: 0.6 },
  },
};

const processStepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "timeline",
    question: "How long does Invisalign take?",
    answer:
      "Most cases complete in 4-12 months. Minor crowding can resolve in as few as 3 months. Dr. Karamcheti designs a treatment timeline during your initial assessment based on your specific alignment needs. You'll see noticeable progress within the first few weeks.",
  },
  {
    id: "pain",
    question: "Does Invisalign hurt?",
    answer:
      "Mild pressure for a day or two when you switch to a new set of aligners. Nothing like the tightening and soreness that comes with traditional metal braces. Most patients describe it as gentle and manageable. Over-the-counter pain relief handles any discomfort if needed.",
  },
  {
    id: "eating",
    question: "Can I eat normally with Invisalign?",
    answer:
      "Yes. Remove your aligners for meals, brush your teeth, and put them back. No food restrictions. This is one of the biggest advantages over metal braces—you eat whatever you want. Just remember to brush before reinserting the aligners to keep your teeth clean.",
  },
  {
    id: "age",
    question: "Am I too old for Invisalign?",
    answer:
      "No. Adults of all ages straighten their teeth successfully with Invisalign. Most of Dr. Karamcheti's Invisalign patients are in their 30s, 40s, and 50s. Whether your teeth shifted after previous braces or you never addressed crowding, there's no age limit for clear aligner treatment.",
  },
  {
    id: "cost",
    question: "How much does Invisalign cost in Charlottesville?",
    answer:
      "Invisalign treatment typically ranges from $3,500-$6,500 depending on case complexity. Many insurance plans cover 20-50% of the cost. We offer 0% interest payment plans so you can spread the cost comfortably. Virginia Dental Club members receive additional discounts.",
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function InvisalignContent() {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whyHereRef, inView: whyHereInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: adultsRef, inView: adultsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: teensRef, inView: teensInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: vsOrthoRef, inView: vsOrthoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: costRef, inView: costInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
            transition={{ duration: 0.6 }}
            className="heading-lg mb-6"
          >
            Invisalign in Charlottesville — Straighter Teeth, Zero Hassle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Clear aligners that fit your Charlottesville life. Fewer office visits, no metal brackets, and results you can see in months — all managed by Dr. Karamcheti right here on Commonwealth Drive.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block — GEO Optimization */}
      <section className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
            Invisalign treatment at Willis & Associates in Charlottesville typically ranges from $3,500 to $6,500 depending on case complexity. Dr. Karamcheti offers free smile assessments, and most dental insurance plans cover a portion of treatment. Virginia Dental Club members and patients using our 0% interest payment plans make clear aligners accessible at every budget.
          </p>
        </div>
      </section>

      {/* Why Invisalign Here Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div ref={whyHereRef} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={whyHereInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <div>
                <motion.h2
                  variants={itemVariants}
                  className="heading-md mb-4 text-navy"
                >
                  Why Invisalign Here
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  You don't need a separate orthodontist. Dr. Karamcheti handles clear aligner cases from initial scan to final refinement, right in our Charlottesville office. She uses iTero digital scanning—no goopy impressions—and monitors your progress at each visit. Fewer appointments than traditional braces, and each one takes minutes.
                </motion.p>
              </div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2">One Doctor, Complete Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  No transferring records between offices. No coordination headaches. Dr. Karamcheti sees you from start to finish and adjusts your treatment plan as needed. You build a relationship with one team who understands your case completely.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2">Digital Scanning, Not Goopy Impressions</h3>
                <p className="text-gray-700 leading-relaxed">
                  iTero scanning is fast, accurate, and comfortable. No trays of impression material. We take digital photos and scans, and Dr. Karamcheti shows you a 3D preview of your projected results before you commit to treatment.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2">Fits Busy Charlottesville Schedules</h3>
                <p className="text-gray-700 leading-relaxed">
                  For professionals, UVA faculty, and busy parents—Invisalign requires fewer office visits than traditional braces. Quick check-ins every 6-8 weeks, no metal brackets to tighten, and aligners you can wear during work and meetings. Your smile transformation happens invisibly.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                whyHereInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Invisalign consultation at Willis & Associates Charlottesville"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Invisalign for Adults Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={adultsRef}
            initial="hidden"
            animate={adultsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-8 text-navy text-center"
            >
              Invisalign for Adults
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              Am I too old? No. There's no age limit for Invisalign. Most of Dr. Karamcheti's clear aligner patients are adults in their 30s, 40s, and 50s. Whether you had braces as a teenager and your teeth shifted, or you never addressed crowding as a kid, Invisalign works for most mild-to-moderate alignment issues.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              Aligners are nearly invisible—your coworkers won't notice you're straightening your teeth. They're removable for meals and important meetings. You maintain total control over your professional appearance while your smile transforms subtly in the background.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Most adult cases complete in 4-12 months. You'll see results within weeks. The process doesn't interrupt your work, social life, or eating habits. Invisalign is the modern solution for adults who want straighter teeth without the visibility and inconvenience of metal braces.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Invisalign for Teens Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={teensRef}
            initial="hidden"
            animate={teensInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-8 text-center"
            >
              Invisalign for Teens
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white text-opacity-95 leading-relaxed mb-6"
            >
              Invisalign Teen includes compliance indicators so Dr. Karamcheti can track wear time and replacement aligners for active lifestyles. Teens straighten their teeth without the social friction of metal braces.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white text-opacity-95 leading-relaxed"
            >
              Play sports, eat what you want, attend school dances without worrying about brackets and wires. The aligners are removable, nearly invisible, and designed for the busy teenage schedule. It's the treatment that fits their lives, not the other way around.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">How Invisalign Works</h2>
            <p className="text-lg text-white text-opacity-90">
              Four straightforward steps from scan to smile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: 1,
                title: "Free Smile Assessment",
                description:
                  "Dr. Karamcheti performs an iTero digital scan, takes photos, and reviews your alignment. We discuss your goals and show you a 3D preview of your projected results before you start.",
              },
              {
                step: 2,
                title: "Custom Treatment Plan",
                description:
                  "Your aligners are custom-made to your teeth. Each aligner is designed to move your teeth incrementally. You'll see exactly how your smile will look when treatment is complete.",
              },
              {
                step: 3,
                title: "Wear Your Aligners",
                description:
                  "Switch to a new set every 1-2 weeks. Quick check-ins with Dr. Karamcheti every 6-8 weeks to monitor progress. Wear aligners 20-22 hours daily for best results.",
              },
              {
                step: 4,
                title: "Reveal Your New Smile",
                description:
                  "Most cases finish in 4-12 months. Retainers keep your results locked in. You get to enjoy your straighter smile for a lifetime.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                custom={index}
                variants={processStepVariants}
                initial="hidden"
                animate={processInView ? "visible" : "hidden"}
                className="bg-navy bg-opacity-50 border border-gold border-opacity-30 rounded-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Here vs Orthodontist Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={vsOrthoRef}
            initial="hidden"
            animate={vsOrthoInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-8 text-navy text-center"
            >
              Why Invisalign Here vs. An Orthodontist
            </motion.h2>

            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="text-gold">✓</span> One Office, One Team
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No separate specialist appointment. No transferring records. Dr. Karamcheti manages everything from scan to final result. You build a relationship with one team who knows your case inside and out.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="text-gold">✓</span> Address Other Dental Needs
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Need a cleaning, filling, or crown while straightening your teeth? Dr. Karamcheti handles it at the same visit. No coordination between offices. One appointment covers multiple needs.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="text-gold">✓</span> Fewer Overall Appointments
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Orthodontists schedule frequent tightening appointments. Invisalign check-ins are quick—every 6-8 weeks. You spend less time in treatment offices and more time living your life.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="text-gold">✓</span> Lower Cost
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  No referral fees. No specialist markups. One practice managing your entire case means you save money compared to split treatment between a dentist and orthodontist.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost & Financing Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={costRef}
            initial="hidden"
            animate={costInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-8 text-navy text-center"
            >
              Cost & Financing
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
            >
              Invisalign in Charlottesville typically ranges from <span className="font-semibold">$3,500-$6,500</span> depending on case complexity. We make it affordable.
            </motion.p>

            <div className="space-y-4">
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <span className="text-gold font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Insurance Coverage</h3>
                  <p className="text-gray-700">
                    Many plans cover 20-50% of Invisalign treatment. Our team handles all claims submission for you.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <span className="text-gold font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-navy mb-1">0% Interest Payment Plans</h3>
                  <p className="text-gray-700">
                    Spread the cost comfortably over time with zero interest. We work with multiple payment options.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <span className="text-gold font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Virginia Dental Club Discounts</h3>
                  <p className="text-gray-700">
                    Members receive significant discounts on Invisalign treatment.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="heading-md text-navy text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-700 text-lg">
              Answers to questions we hear from Charlottesville patients
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-lg font-semibold text-navy">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expanded[item.id] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      size={24}
                      className="text-gold flex-shrink-0"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded[item.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-white"
                    >
                      <div className="px-6 py-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gold"
        headline="Your Straighter Smile Starts with a Free Assessment"
        subheadline="See your smile transformation in 3D. No commitment, no obligation."
        buttonText="Book Your Free Smile Assessment"
        buttonLink="/contact"
      />
    </>
  );
}
