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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
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
    id: "insurance",
    question: "Is the Virginia Dental Club insurance?",
    answer:
      "No. It's a membership plan offered directly by our practice. There are no claims, no third-party approvals, and no fine print. You pay an annual fee and receive the benefits listed above.",
  },
  {
    id: "immediately",
    question: "Can I use it immediately?",
    answer:
      "Yes. There are no waiting periods. Schedule your first cleaning the same week you join.",
  },
  {
    id: "major",
    question: "What if I need a major procedure like implants?",
    answer:
      "Your 15% membership discount applies to all treatment, including implants, Invisalign, crowns, and cosmetic work.",
  },
  {
    id: "family",
    question: "Can my whole family join?",
    answer:
      "Absolutely. Each family member needs their own membership. Ask about family pricing when you call.",
  },
  {
    id: "signup",
    question: "How do I sign up?",
    answer:
      "Call (434) 973-5873 or ask at your next visit. We'll get you enrolled in minutes.",
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function VirginiaDentalClubContent() {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whatIsRef, inView: whatIsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: includedRef, inView: includedInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whoRef, inView: whoInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: compareRef, inView: compareInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: testimonialRef, inView: testimonialInView } = useInView({
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
            Virginia Dental Club — Affordable Dental Care Without Insurance in
            Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Quality dental care shouldn't depend on whether your employer offers
            insurance. The Virginia Dental Club gives Charlottesville patients
            everything they need — cleanings, exams, X-rays, and real discounts
            — for one flat annual fee.
          </motion.p>
        </div>
      </section>

      {/* What Is the Virginia Dental Club Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div ref={whatIsRef} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={whatIsInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h2 className="heading-md mb-4 text-navy">
                  What Is the Virginia Dental Club
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Virginia Dental Club is our in-house membership plan
                  designed for patients who don't have traditional dental
                  insurance. Instead of navigating claims, waiting periods, and
                  annual maximums, you pay one annual fee and get preventive
                  care covered plus meaningful discounts on every treatment in
                  our office. It's dental care the way it should work:
                  transparent, affordable, and free from insurance bureaucracy.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                whatIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Virginia Dental Club membership — Willis & Associates Charlottesville"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            ref={includedRef}
            initial="hidden"
            animate={includedInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-12 text-navy text-center"
            >
              What's Included
            </motion.h2>

            {/* Pricing Card */}
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg border-2 border-gold p-8 md:p-12 text-center max-w-xl mx-auto"
            >
              <h3 className="heading-sm text-navy mb-2">Annual Membership</h3>

              <div className="mb-8">
                <span className="text-5xl font-bold text-gold">$299</span>
                <span className="text-xl text-gray-600">/year</span>
              </div>

              {/* Badge */}
              <div className="inline-block bg-gold text-navy px-4 py-2 rounded-full text-sm font-semibold mb-8">
                Best Value
              </div>

              {/* Features List */}
              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Two professional cleanings per year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Two comprehensive exams per year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">
                    Full set of X-rays (as needed)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">
                    15% discount on all additional treatment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">No waiting periods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">No annual maximums</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg mt-0.5">✓</span>
                  <span className="text-gray-700">No claims to file</span>
                </li>
              </ul>

              <Link
                href="tel:(434)973-5873"
                className="inline-block w-full bg-gold text-navy px-8 py-3 font-semibold rounded-full transition-all transform hover:scale-105"
              >
                Join the Virginia Dental Club
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={whoRef}
            initial="hidden"
            animate={whoInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-12 text-center"
            >
              Who It's For
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Self-Employed & Freelancers",
                  description:
                    "You run your own business and don't have employer-sponsored dental coverage. The Club gives you comprehensive care without the overhead of individual dental insurance.",
                },
                {
                  title: "Between Jobs",
                  description:
                    "In transition? Don't let a gap in coverage mean a gap in dental care. Join month one, use it that week.",
                },
                {
                  title: "Retirees Without Coverage",
                  description:
                    "Medicare doesn't cover dental. The Club fills that gap with straightforward pricing.",
                },
                {
                  title: "Anyone Tired of Insurance Hassle",
                  description:
                    "If you're underinsured, hit your annual max, or just want a simpler option, the Club puts you in control.",
                },
              ].map((persona, i) => (
                <motion.div
                  key={persona.title}
                  custom={i}
                  variants={cardVariants}
                  className="bg-white bg-opacity-10 rounded-lg p-6 border border-gold border-opacity-30"
                >
                  <h3 className="heading-sm mb-3">{persona.title}</h3>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {persona.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={compareRef}
            initial="hidden"
            animate={compareInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-12 text-navy text-center"
            >
              How It Compares to Insurance
            </motion.h2>

            <motion.div variants={itemVariants} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    {
                      feature: "Waiting periods",
                      club: "None",
                      insurance: "6-12 months for major work",
                    },
                    {
                      feature: "Annual maximums",
                      club: "None",
                      insurance: "Typical $1,000-$1,500",
                    },
                    {
                      feature: "Claims process",
                      club: "None",
                      insurance: "Claims, denials, pre-authorizations",
                    },
                    {
                      feature: "Treatment discounts",
                      club: "15% on ALL treatment",
                      insurance: "Many procedures excluded or limited",
                    },
                    {
                      feature: "Pricing",
                      club: "One flat fee, you know the cost",
                      insurance: "Monthly premiums + copays + deductibles",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={
                        idx % 2 === 0 ? "bg-white" : "bg-gold bg-opacity-10"
                      }
                    >
                      <td className="px-6 py-4 font-semibold text-navy border-b border-gold border-opacity-30">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sage font-semibold border-b border-gold border-opacity-30">
                        {row.club}
                      </td>
                      <td className="px-6 py-4 text-gray-600 border-b border-gold border-opacity-30">
                        {row.insurance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={testimonialRef}
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-cream rounded-lg p-8 md:p-12 border-l-4 border-gold"
          >
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              "I was paying $50/month for dental insurance that barely covered
              anything. The Virginia Dental Club saves me money and I actually
              use it."
            </p>
            <p className="text-lg font-semibold text-navy">
              Placeholder Patient, Charlottesville
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            ref={faqRef}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-12 text-center"
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              <AnimatePresence>
                {faqItems.map((item) => (
                  <motion.div key={item.id} layout className="border-b border-gold border-opacity-30">
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full py-6 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-colors px-4"
                    >
                      <h3 className="text-lg font-semibold text-left">
                        {item.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: expanded[item.id] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gold flex-shrink-0" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expanded[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 pb-6 text-white text-opacity-90">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        headline="Stop Overpaying. Start Smiling."
        subheadline="Join the Virginia Dental Club and take control of your dental care."
        buttonText="Call to Join: (434) 973-5873"
        buttonLink="tel:(434)973-5873"
        variant="gold"
      />
    </>
  );
}
