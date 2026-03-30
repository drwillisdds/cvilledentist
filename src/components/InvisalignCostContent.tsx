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
    id: "exact_cost",
    question: "What is the exact cost of Invisalign in Charlottesville?",
    answer:
      "Invisalign treatment costs between $3,500 and $6,500 at Cville Dentist, depending on your specific case complexity and treatment duration. Simple spacing or minor crowding may cost $3,500–$4,500. Complex bite issues or severe crowding may cost $5,000–$6,500. Dr. Karamcheti gives you an exact quote after examining your teeth and creating your treatment plan. No surprises.",
  },
  {
    id: "insurance",
    question: "Will dental insurance cover Invisalign?",
    answer:
      "Most dental insurance plans cover Invisalign similarly to traditional braces—typically 20–50% of the cost. Some plans have ortho lifetime maximums ($1,500–$2,000) that apply whether you choose braces or Invisalign. We verify your benefits before treatment starts. Contact your insurance provider or bring your card to your consultation. Many patients find insurance covers $1,000–$2,500 of treatment cost.",
  },
  {
    id: "payment_plans",
    question: "Do you offer payment plans for Invisalign?",
    answer:
      "Yes. We offer 0% interest payment plans that let you spread treatment costs over months or years without paying extra interest. Monthly payments can be as low as $150–$300 depending on your total cost. We work with third-party financing companies for larger amounts. Ask Dr. Karamcheti's team about payment plan options during your consultation.",
  },
  {
    id: "braces_cost_compare",
    question: "Is Invisalign cheaper than traditional braces?",
    answer:
      "Invisalign and traditional braces typically cost the same—usually $3,500–$6,500. However, Invisalign may be less expensive long-term because there are fewer office visits and no emergency bracket repairs. If a bracket breaks, you need an urgent appointment. Invisalign has no such issues. Insurance usually covers both similarly.",
  },
  {
    id: "long_term_value",
    question: "Why should I invest in straight teeth?",
    answer:
      "Straight teeth deliver long-term value: easier cleaning prevents cavities (saving hundreds on fillings), improved bite reduces jaw pain and TMJ issues, better appearance boosts confidence, and straighter teeth are less likely to be damaged. Over a lifetime, investing in orthodontics now saves money and improves health and quality of life.",
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function InvisalignCostContent() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: pricingRef, inView: pricingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatIncludedRef, inView: whatIncludedInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: insuranceRef, inView: insuranceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: financingRef, inView: financingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: valueRef, inView: valueInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatIsIncluded = [
    {
      icon: "📸",
      item: "3D Imaging & Digital Scans",
      description: "Comprehensive cone beam CT or digital photos to plan your treatment precisely.",
    },
    {
      icon: "🦷",
      item: "Custom Aligners",
      description: "All aligners needed for your complete treatment (typically 20–40 trays).",
    },
    {
      icon: "📋",
      item: "Custom Treatment Plan",
      description: "Dr. Karamcheti's personalized digital plan showing your treatment path and timeline.",
    },
    {
      icon: "👀",
      item: "Progress Monitoring",
      description: "Regular check-in appointments (every 6–8 weeks) to ensure treatment stays on track.",
    },
    {
      icon: "💍",
      item: "Retention",
      description: "Custom-made retainers (Vivera) to maintain your straight smile for life.",
    },
    {
      icon: "🔄",
      item: "All Follow-Up Visits",
      description: "Unlimited follow-up appointments included in your treatment cost. No surprise fees.",
    },
  ];

  const costFactors = [
    {
      factor: "Treatment Complexity",
      impact:
        "Simple spacing or crowding costs less than complex bite issues requiring full-mouth correction.",
    },
    {
      factor: "Number of Aligners",
      impact:
        "Mild cases need 15–20 aligners. Complex cases may need 40–50. More aligners = higher cost.",
    },
    {
      factor: "Treatment Duration",
      impact:
        "Faster treatments (6–12 months) may cost less than longer treatments (14–24 months).",
    },
    {
      factor: "Your Age Group",
      impact:
        "Teen cases may differ slightly from adult cases, but Dr. Karamcheti quotes based on your specific needs, not your age.",
    },
  ];

  const financingOptions = [
    {
      title: "0% Interest Payment Plans",
      description:
        "Spread your Invisalign cost over 12, 24, or 36 months with zero interest. Monthly payments typically $150–$300. No hidden fees.",
      details: ["Simple application", "Quick approval", "Flexible terms"],
    },
    {
      title: "Dental Insurance Coverage",
      description:
        "Most plans cover 20–50% of orthodontic treatment. We verify benefits before starting so you know exactly what insurance pays.",
      details: ["20–50% typical coverage", "Lifetime ortho max usually $1,500–$2,000", "We file claims for you"],
    },
    {
      title: "Virginia Dental Club Discount",
      description:
        "Members receive additional discounts on Invisalign treatment at Cville Dentist. Ask our team if you're a member.",
      details: ["Member benefits apply", "Stacks with insurance", "Additional savings on cost"],
    },
    {
      title: "Flexible Spending Accounts (FSA)",
      description:
        "Use pre-tax healthcare dollars to pay for Invisalign. Reduces your out-of-pocket cost significantly.",
      details: ["Pre-tax savings", "Check your employer plan", "We accept FSA cards"],
    },
  ];

  const breakdownExample = [
    {
      case: "Simple Spacing or Mild Crowding",
      duration: "6–9 months",
      aligners: "15–20 trays",
      cost: "$3,500–$4,200",
      afterInsurance: "$1,750–$3,360 (assuming 25% coverage)",
    },
    {
      case: "Moderate Crowding or Bite Issue",
      duration: "9–14 months",
      aligners: "25–35 trays",
      cost: "$4,500–$5,500",
      afterInsurance: "$2,250–$4,400 (assuming 25% coverage)",
    },
    {
      case: "Complex Crowding, Spacing & Bite Issue",
      duration: "14–20 months",
      aligners: "35–50 trays",
      cost: "$5,500–$6,500",
      afterInsurance: "$2,750–$5,200 (assuming 25% coverage)",
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
          Invisalign Cost in Charlottesville
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#e8e6e1]"
        >
          Transparent pricing. Flexible financing. Insurance coverage. See what straight teeth cost at Cville Dentist.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-[#1a2332] font-heading font-bold rounded hover:bg-[#d4b961] transition-all duration-300"
          >
            Get Your Price Quote
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
            Typical Cost: $3,500–$6,500
          </h2>
          <p className="font-body text-lg text-[#2a3d4d] leading-relaxed">
            Invisalign treatment at Cville Dentist in Charlottesville typically costs $3,500 to $6,500 depending on case complexity. This includes all scans, aligners, and follow-up visits. Most dental insurance covers a portion. 0% financing and Virginia Dental Club discounts available.
          </p>
        </motion.div>
      </motion.section>

      {/* Pricing Tiers */}
      <motion.section
        ref={pricingRef}
        initial="hidden"
        animate={pricingInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          What Affects Your Cost
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          Your exact Invisalign cost depends on your specific alignment needs. Here's what we evaluate.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {costFactors.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-lg border border-[#e8e6e1] hover:border-[#c9a84c] transition-colors duration-300"
            >
              <h3 className="font-heading font-bold text-[#1a2332] text-xl mb-3">
                {item.factor}
              </h3>
              <p className="font-body text-[#4a5f6f] leading-relaxed">
                {item.impact}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Cost Breakdown by Case Type */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto bg-white"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center"
        >
          Cost Examples by Case Type
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="overflow-x-auto"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#1a2332] text-[#faf9f7]">
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Case Type</th>
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Duration</th>
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Aligners</th>
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">Cost</th>
                <th className="font-heading font-bold p-4 border border-[#e8e6e1]">After Insurance*</th>
              </tr>
            </thead>
            <tbody>
              {breakdownExample.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#faf9f7]" : "bg-white"}
                >
                  <td className="font-body p-4 border border-[#e8e6e1] text-[#1a2332]">
                    {row.case}
                  </td>
                  <td className="font-body p-4 border border-[#e8e6e1] text-[#4a5f6f]">
                    {row.duration}
                  </td>
                  <td className="font-body p-4 border border-[#e8e6e1] text-[#4a5f6f]">
                    {row.aligners}
                  </td>
                  <td className="font-heading font-bold p-4 border border-[#e8e6e1] text-[#c9a84c]">
                    {row.cost}
                  </td>
                  <td className="font-body p-4 border border-[#e8e6e1] text-[#4a5f6f] text-sm">
                    {row.afterInsurance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body text-sm text-[#7a7a7a] mt-6 text-center"
        >
          *Assuming 25% insurance coverage. Your actual coverage depends on your plan. Dr. Karamcheti's team verifies your benefits before treatment.
        </motion.p>
      </motion.section>

      {/* What's Included */}
      <motion.section
        ref={whatIncludedRef}
        initial="hidden"
        animate={whatIncludedInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          What's Included in Your Cost
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          No hidden fees. No surprises. Your Invisalign cost includes everything needed for successful treatment.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whatIsIncluded.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-[#f0ede7] to-[#faf9f7] p-8 rounded-lg border border-[#e8e6e1]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-heading font-bold text-[#1a2332] text-lg mb-2">
                {item.item}
              </h3>
              <p className="font-body text-[#4a5f6f] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Insurance Coverage */}
      <motion.section
        ref={insuranceRef}
        initial="hidden"
        animate={insuranceInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 bg-gradient-to-br from-[#7a9e7e] to-[#5a7e5e] text-[#faf9f7] max-w-6xl mx-auto rounded-lg"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Insurance Coverage for Invisalign
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={cardVariants}
            className="bg-[#1a2332] bg-opacity-30 p-6 rounded-lg border border-[#faf9f7] border-opacity-20"
          >
            <h3 className="font-heading font-bold text-[#faf9f7] text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">✓</span>
              Typical Coverage
            </h3>
            <ul className="font-body text-[#e8e6e1] space-y-2">
              <li>20–50% of treatment cost</li>
              <li>Applied from your ortho benefit</li>
              <li>Subject to lifetime maximums</li>
              <li>May have waiting periods</li>
            </ul>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-[#1a2332] bg-opacity-30 p-6 rounded-lg border border-[#faf9f7] border-opacity-20"
          >
            <h3 className="font-heading font-bold text-[#faf9f7] text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              How We Help
            </h3>
            <ul className="font-body text-[#e8e6e1] space-y-2">
              <li>We verify your benefits before treatment</li>
              <li>We submit claims for you</li>
              <li>We work with your insurance company</li>
              <li>You know exact out-of-pocket cost upfront</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#e8e6e1] text-center mt-8 max-w-3xl mx-auto leading-relaxed"
        >
          Bring your insurance card to your consultation, and Dr. Karamcheti's team will contact your insurance to verify exactly what they cover. Most patients receive $1,000–$2,500 in insurance benefits.
        </motion.p>
      </motion.section>

      {/* Financing Options */}
      <motion.section
        ref={financingRef}
        initial="hidden"
        animate={financingInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          Financing Options
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          We make Invisalign affordable. Multiple payment options ensure cost never prevents you from getting a straighter smile.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {financingOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white p-8 rounded-lg border border-[#e8e6e1] hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-heading font-bold text-[#1a2332] text-xl mb-3">
                {option.title}
              </h3>
              <p className="font-body text-[#4a5f6f] leading-relaxed mb-4">
                {option.description}
              </p>
              <ul className="font-body text-[#4a5f6f] space-y-2">
                {option.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#7a9e7e] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Long-Term Value */}
      <motion.section
        ref={valueRef}
        initial="hidden"
        animate={valueInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-4xl mx-auto bg-white"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-8 text-center"
        >
          Why Straight Teeth Save Money
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div
            variants={cardVariants}
            className="bg-[#faf9f7] border border-[#e8e6e1] rounded-lg p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-xl mb-3">
              Better Cleaning = Fewer Cavities
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              Crowded teeth are harder to clean. Food gets trapped. Cavities form. Each filling costs $150–$300. Straight teeth are easy to clean. No trapped food. No surprise cavities. Over a lifetime, straight teeth save hundreds on dental work.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white border-l-4 border-[#c9a84c] p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-xl mb-3">
              Proper Bite Reduces TMJ Problems
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              Misaligned bites create jaw tension, headaches, and TMJ disorder. Treatment costs thousands. Invisalign corrects your bite. Less strain. Less pain. Less future expensive treatment.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-[#faf9f7] border border-[#e8e6e1] rounded-lg p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-xl mb-3">
              Confidence = Better Life Outcomes
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              Studies show straighter smiles correlate with better job opportunities and personal relationships. The confidence from a beautiful smile is priceless and has real-world benefits.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white border-l-4 border-[#c9a84c] p-8"
          >
            <h3 className="font-heading font-bold text-[#1a2332] text-xl mb-3">
              Longer Tooth Life
            </h3>
            <p className="font-body text-[#4a5f6f] leading-relaxed">
              Misaligned teeth wear unevenly and break more easily. Straight teeth distribute bite forces evenly. Your teeth last longer. Future extractions, implants, and bridges cost thousands. Investing in alignment now saves major expense later.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Payment Example */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 max-w-4xl mx-auto bg-gradient-to-br from-[#f0ede7] to-[#faf9f7] rounded-lg border border-[#e8e6e1]"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-8 text-center"
        >
          Sample Payment Scenarios
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-lg border border-[#c9a84c]"
          >
            <h3 className="font-heading font-bold text-[#1a2332] mb-3">
              Scenario 1: $4,500 Treatment Cost
            </h3>
            <div className="space-y-2 font-body text-[#4a5f6f]">
              <div className="flex justify-between">
                <span>Treatment cost:</span>
                <span className="font-bold">$4,500</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance coverage (25%):</span>
                <span className="font-bold">–$1,125</span>
              </div>
              <div className="border-t border-[#e8e6e1] pt-2 flex justify-between">
                <span className="font-bold">Your out-of-pocket:</span>
                <span className="font-bold text-[#c9a84c]">$3,375</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Spread over 24 months (0%):</span>
                <span className="font-bold">~$140/month</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-white p-6 rounded-lg border border-[#c9a84c]"
          >
            <h3 className="font-heading font-bold text-[#1a2332] mb-3">
              Scenario 2: $5,500 Treatment Cost
            </h3>
            <div className="space-y-2 font-body text-[#4a5f6f]">
              <div className="flex justify-between">
                <span>Treatment cost:</span>
                <span className="font-bold">$5,500</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance coverage (30%):</span>
                <span className="font-bold">–$1,650</span>
              </div>
              <div className="border-t border-[#e8e6e1] pt-2 flex justify-between">
                <span className="font-bold">Your out-of-pocket:</span>
                <span className="font-bold text-[#c9a84c]">$3,850</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Spread over 36 months (0%):</span>
                <span className="font-bold">~$107/month</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="font-body text-[#4a5f6f] text-center mt-8"
        >
          These are examples only. Your actual cost and payment depend on your specific treatment plan and insurance coverage. Dr. Karamcheti will provide exact figures during your consultation.
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
        headline="Let's Talk About Your Invisalign Investment"
        subheadline="Dr. Karamcheti will provide an exact cost quote during your free smile assessment. No hidden fees. No surprises. Transparent pricing and flexible financing make Invisalign affordable."
        buttonText="Get Your Price Quote"
        buttonLink="/contact"
        variant="navy"
      />
    </main>
  );
}
