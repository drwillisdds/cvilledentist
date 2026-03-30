"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

const easeValue = [0, 0, 0.2, 1] as const;

export default function InsuranceFinancingContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: insuranceRef, inView: insuranceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: vdcRef, inView: vdcInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: financingRef, inView: financingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: transparentRef, inView: transparentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Banner */}
      <section
        ref={heroRef}
        className="bg-navy text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-lg mb-6"
          >
            Dental Insurance & Financing — Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Affordable dental care for every budget. We accept all major insurance plans, offer in-house membership, flexible financing, and transparent pricing—so you can get the care you need without financial stress.
          </motion.p>
        </div>
      </section>

      {/* Insurance Section */}
      <section
        ref={insuranceRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="mb-16"
          >
            <h2 className="heading-md text-navy mb-6">Insurance We Accept</h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              We're in-network with all major dental insurance carriers including Delta Dental, Cigna, United Healthcare, Aetna, Humana, and others. We also accept Medicaid and Medicare. Not sure if we're in your plan? Just give us a call at (434) 973-5873 and we'll check for you.
            </p>
          </motion.div>

          {/* Maximize Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={insuranceInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">
                Maximize Your Benefits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>We submit claims directly to your insurance</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    We track your deductible and annual maximum
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    We explain coverage before you commit to treatment
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>We answer insurance questions honestly</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">FSA & HSA Cards</h3>
              <p className="text-gray-700 mb-4">
                We accept Flexible Spending Account (FSA) and Health Savings Account (HSA) cards. These let you pay for dental care with pre-tax dollars—meaning you save money on taxes and can afford more treatment.
              </p>
              <p className="text-gray-700 text-sm">
                Bring your FSA or HSA card to your appointment, just like you would a credit card.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={insuranceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
            className="bg-gold bg-opacity-10 border border-gold border-opacity-30 rounded-lg p-8"
          >
            <h3 className="heading-sm text-navy mb-3">Coverage for Common Procedures</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p className="font-semibold text-navy mb-2">Typically Covered 100%</p>
                <ul className="text-sm space-y-1">
                  <li>Routine exams (2x/year)</li>
                  <li>Professional cleanings (2x/year)</li>
                  <li>X-rays</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-navy mb-2">Typically Covered 50-80%</p>
                <ul className="text-sm space-y-1">
                  <li>Fillings</li>
                  <li>Root canals</li>
                  <li>Periodontal treatment</li>
                  <li>Crowns</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              *Coverage varies by plan. We'll verify your exact coverage before treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Virginia Dental Club */}
      <section
        ref={vdcRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={vdcInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            Virginia Dental Club Membership
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={vdcInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
          >
            No insurance? No problem. Our in-house membership plan is designed for uninsured patients who want affordable, quality dental care without a middleman.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={vdcInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: easeValue }}
              className="bg-cream rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-6">Adult Membership</h3>
              <p className="text-4xl font-bold text-gold mb-6">
                $35<span className="text-lg text-gray-700">/month</span>
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Two cleanings per year</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Two exams per year</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited X-rays</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>20% off all other services</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                *Other services include fillings, crowns, root canals, extractions, implants, cosmetic work, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={vdcInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: easeValue }}
              className="bg-cream rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-6">Children's Membership</h3>
              <p className="text-4xl font-bold text-gold mb-6">
                $25<span className="text-lg text-gray-700">/month</span>
              </p>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Two cleanings per year</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Two exams per year</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Unlimited X-rays</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>20% off all other services</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Fluoride treatments included</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                *For patients age 17 and under.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={vdcInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
            className="bg-sage bg-opacity-10 border border-sage border-opacity-30 rounded-lg p-8"
          >
            <h3 className="font-semibold text-navy mb-3">Example Savings</h3>
            <p className="text-gray-700">
              A family of 3 (2 adults + 1 child) paying $95/month ($35+$35+$25) gets $6,900 in preventive care per year while saving hundreds on other treatments with the 20% discount. One crown alone typically costs $800-1200, and with 20% off, that's $160-240 in immediate savings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financing Section */}
      <section
        ref={financingRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={financingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            Flexible Financing Options
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={financingInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">CareCredit</h3>
              <p className="text-gray-700 mb-4">
                Special financing for healthcare expenses. With CareCredit, you can get the dental work you need now and pay over time. Many purchases qualify for no-interest if paid in full within the promotional period (12-24 months depending on purchase size).
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Fast online application (takes 2 minutes)</li>
                <li>Decisions in seconds</li>
                <li>No annual fee</li>
                <li>Works like a credit card</li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">
                Payment Plans & Discounts
              </h3>
              <p className="text-gray-700 mb-4">
                We offer custom payment plans for larger treatments. Talk to our team about arranging a schedule that works for your budget. We also offer discounts for cash payments.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>Monthly payment plans available</li>
                <li>No interest on payment plans</li>
                <li>Cash discounts on treatments</li>
                <li>Call to discuss your specific needs</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section
        ref={transparentRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={transparentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            Transparent Pricing & No Surprises
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={transparentInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">How We Work</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">1.</span>
                  <span>Exam and consultation with clear cost estimate</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">2.</span>
                  <span>Insurance verification (we check your coverage)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">3.</span>
                  <span>Written estimate showing what you'll pay</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">4.</span>
                  <span>Treatment only after you approve</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold flex-shrink-0">5.</span>
                  <span>No surprise bills — ever</span>
                </li>
              </ol>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">Our Promise</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>We explain costs before treatment</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Honest answers about insurance coverage</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Fair pricing for quality care</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Flexible financing to fit your budget</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={transparentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
            className="bg-gold bg-opacity-10 border border-gold border-opacity-30 rounded-lg p-8 text-center"
          >
            <h3 className="heading-sm text-navy mb-3">
              Questions About Cost?
            </h3>
            <p className="text-gray-700 mb-6">
              Call us at (434) 973-5873. We're happy to discuss costs and options before your visit.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              >
                Request Estimate
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        variant="navy"
        headline="Start Your Smile Journey Today"
        subheadline="We make quality dental care affordable. Book your appointment now."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
