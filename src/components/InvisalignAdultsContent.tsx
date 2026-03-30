"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
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
    question: "Am I too old for Invisalign?",
    answer:
      "Absolutely not. There is no age limit for Invisalign. Dr. Karamcheti treats adult patients ranging from their 20s through their 70s and beyond. Your teeth respond to gentle pressure regardless of age. Many of her adult patients have been told they were too old by other practices—that's simply not true. If your teeth and gums are healthy, you're a candidate.",
  },
  {
    id: "timeline",
    question: "How long does adult Invisalign treatment take?",
    answer:
      "Most adult cases complete in 6–18 months depending on how much movement is needed. Mild spacing or crowding may finish faster. Dr. Karamcheti gives you an exact timeline after examining your teeth and taking 3D images. You'll see noticeable improvement within 4–6 weeks.",
  },
  {
    id: "eating",
    question: "Can I eat whatever I want with Invisalign?",
    answer:
      "Yes. Remove your aligners for every meal and snack. Eat whatever you want—no restrictions on sticky foods, hard foods, or anything else. Just remove the aligners, enjoy your meal, brush your teeth, and put them back in. This freedom is one of the biggest advantages Invisalign has over traditional metal braces.",
  },
  {
    id: "visible",
    question: "Will people notice I'm wearing Invisalign?",
    answer:
      "Most people won't notice. The aligners are nearly invisible—80% less noticeable than metal braces. In professional settings, video calls, and social situations, Invisalign keeps your appearance exactly as it is now. You maintain your confidence throughout treatment.",
  },
  {
    id: "cost",
    question: "What does Invisalign cost for adults?",
    answer:
      "Invisalign treatment typically ranges from $3,500–$6,500 depending on case complexity and treatment duration. Your exact cost depends on how many aligners you need and how long treatment takes. Most dental insurance covers 20–50% of the cost. We offer 0% interest payment plans. Visit our cost page for full pricing details.",
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function InvisalignAdultsContent() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: problemsRef, inView: problemsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whyChooseInvisalign = [
    {
      icon: "👁️",
      title: "Nearly Invisible",
      description:
        "Clear aligners let you keep your appearance throughout treatment. No metal wires, no brackets, no obvious hardware in your mouth.",
    },
    {
      icon: "🍽️",
      title: "No Food Restrictions",
      description:
        "Remove aligners for meals. Eat whatever you want—sticky foods, hard foods, everything. No dietary limitations like you'd have with braces.",
    },
    {
      icon: "🪥",
      title: "Easier Cleaning",
      description:
        "Remove aligners to brush and floss normally. No wires to navigate around. Your teeth stay cleaner and healthier throughout treatment.",
    },
    {
      icon: "😌",
      title: "Greater Comfort",
      description:
        "Smooth plastic aligners cause less irritation than metal wires and brackets. Minimal soreness when switching to new aligners. Far more comfortable than traditional braces.",
    },
    {
      icon: "📅",
      title: "Convenient Appointments",
      description:
        "Fewer office visits than traditional braces. No metal tightening appointments needed. More time between check-ins with Dr. Karamcheti.",
    },
    {
      icon: "💼",
      title: "Professional Appearance",
      description:
        "Perfect for professionals, executives, and anyone who cannot afford visible braces. Keep your polished look while straightening your teeth.",
    },
  ];

  const problemsItFixes = [
    {
      problem: "Crowding",
      description:
        "Teeth overlap or are too close together. Invisalign gently spreads them into their proper positions. Common in adults whose teeth shifted over the years.",
    },
    {
      problem: "Spacing",
      description:
        "Large gaps between teeth. Invisalign closes the spaces by gradually moving teeth closer together. No need for bonding or veneers.",
    },
    {
      problem: "Bite Issues",
      description:
        "Overbite, underbite, or crossbite. Invisalign corrects how your upper and lower teeth meet, improving function and appearance.",
    },
    {
      problem: "Rotated Teeth",
      description:
        "Teeth twisted or at odd angles. Invisalign rotates them to proper alignment. Works on single teeth or full mouth correction.",
    },
    {
      problem: "Relapsed Previous Braces",
      description:
        "After braces came off years ago, your teeth shifted back. Invisalign re-straightens them without the visibility of braces again.",
    },
    {
      problem: "Mild to Moderate Misalignment",
      description:
        "Any combination of crowding, spacing, and bite issues. Invisalign handles 80% of adult orthodontic cases.",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Free Smile Assessment",
      description:
        "Dr. Karamcheti examines your teeth and takes 3D images (CBCT scan) to assess your specific alignment issues. You discuss goals, timeline, and options. Zero pressure. Zero commitment.",
    },
    {
      number: "2",
      title: "Custom Treatment Plan",
      description:
        "Using your 3D images, Dr. Karamcheti creates a personalized digital treatment plan showing exactly how your teeth will move. You see your before and after on the screen. She explains the timeline and cost.",
    },
    {
      number: "3",
      title: "Aligners Are Made",
      description:
        "Your custom aligners are fabricated based on Dr. Karamcheti's treatment plan. Each aligner makes small movements. Most adult cases require 20–40 aligners total.",
    },
    {
      number: "4",
      title: "Wear Your Aligners",
      description:
        "Wear each set for 7–10 days, then switch to the next. Wear them 20–22 hours per day (remove only for meals and cleaning). Most patients notice changes within 4–6 weeks.",
    },
    {
      number: "5",
      title: "Regular Check-Ins",
      description:
        "Return to Cville Dentist every 6–8 weeks for progress monitoring. Dr. Karamcheti ensures treatment is on track and addresses any questions. These visits are brief.",
    },
    {
      number: "6",
      title: "Retention Forever",
      description:
        "Once treatment finishes, you wear retainers to keep your teeth in place. Your straight smile lasts forever with simple nightly retainer wear.",
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
          Invisalign for Adults in Charlottesville
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 text-[#e8e6e1]"
        >
          Straighten your teeth discreetly. Dr. Karamcheti treats adults of all ages with clear aligners. No visible braces. No food restrictions. Genuine results.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c9a84c] text-[#1a2332] font-heading font-bold rounded hover:bg-[#d4b961] transition-all duration-300"
          >
            Free Smile Assessment
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
            No Age Limit
          </h2>
          <p className="font-body text-lg text-[#2a3d4d] leading-relaxed">
            There is no age limit for Invisalign. Dr. Karamcheti at Cville Dentist in Charlottesville treats adults from their 20s through their 70s with clear aligners. Most adult cases take 6–18 months. Your teeth respond to gentle pressure at any age. Straight teeth are within reach no matter when you decide to pursue them. Free smile assessments available.
          </p>
        </motion.div>
      </motion.section>

      {/* Why Adults Choose Invisalign */}
      <motion.section
        ref={whyRef}
        initial="hidden"
        animate={whyInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          Why Adults Choose Invisalign
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          Professional. Comfortable. Invisible. Adults choose Invisalign over traditional braces for one simple reason: life is different as an adult.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseInvisalign.map((item, index) => (
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

      {/* What Invisalign Fixes */}
      <motion.section
        ref={problemsRef}
        initial="hidden"
        animate={problemsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 bg-white max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          What Invisalign Fixes
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          Whether your teeth shifted after braces or never got attention, Invisalign corrects the alignment issues you see in the mirror.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {problemsItFixes.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 bg-[#faf9f7] border border-[#e8e6e1] rounded-lg hover:border-[#c9a84c] transition-colors duration-300"
            >
              <h3 className="font-heading text-xl font-bold text-[#1a2332] mb-2">
                {item.problem}
              </h3>
              <p className="font-body text-[#4a5f6f] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Treatment Process */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-6 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-4 text-center"
        >
          The Adult Treatment Process
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg text-[#4a5f6f] text-center mb-12 max-w-2xl mx-auto"
        >
          Straightforward. Simple. Effective. Here's exactly what to expect from your first appointment to your final retainers.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-[#e8e6e1] rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a84c] text-[#1a2332] font-heading font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-heading text-xl font-bold text-[#1a2332] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[#4a5f6f] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 bg-gradient-to-br from-[#7a9e7e] to-[#5a7e5e] text-[#faf9f7] max-w-6xl mx-auto rounded-lg"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Dr. Karamcheti's Adult Invisalign Experience
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="font-body text-lg mb-6 max-w-3xl mx-auto text-center leading-relaxed"
        >
          Dr. Sowmya Karamcheti has straightened hundreds of adult smiles with Invisalign. She understands the unique needs of busy professionals, executives, and anyone who values confidence and convenience. She specializes in complex adult cases and has the expertise to get your best possible outcome.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <Link
            href="/about/team"
            className="inline-block px-8 py-3 bg-[#c9a84c] text-[#1a2332] font-heading font-bold rounded hover:bg-[#d4b961] transition-all duration-300"
          >
            Learn About Dr. Karamcheti
          </Link>
        </motion.div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        className="px-6 py-20 max-w-4xl mx-auto bg-white"
      >
        <motion.h2
          variants={itemVariants}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center"
        >
          Typical Adult Timeline
        </motion.h2>

        <div className="space-y-4">
          <motion.div
            variants={cardVariants}
            className="flex gap-4 items-start p-6 bg-[#faf9f7] rounded-lg border border-[#e8e6e1]"
          >
            <div className="flex-shrink-0 font-heading font-bold text-[#c9a84c] text-lg">
              Week 1
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#1a2332] mb-1">
                First Appointment
              </h3>
              <p className="font-body text-[#4a5f6f]">
                Assessment, 3D imaging, treatment plan review, and your custom aligners.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex gap-4 items-start p-6 bg-white border-l-4 border-[#c9a84c]"
          >
            <div className="flex-shrink-0 font-heading font-bold text-[#c9a84c] text-lg">
              Weeks 4–6
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#1a2332] mb-1">
                Noticeable Progress
              </h3>
              <p className="font-body text-[#4a5f6f]">
                Visible improvement in alignment. You're on track.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex gap-4 items-start p-6 bg-[#faf9f7] rounded-lg border border-[#e8e6e1]"
          >
            <div className="flex-shrink-0 font-heading font-bold text-[#c9a84c] text-lg">
              6–8 Weeks
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#1a2332] mb-1">
                First Check-In
              </h3>
              <p className="font-body text-[#4a5f6f]">
                Quick progress appointment with Dr. Karamcheti.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="flex gap-4 items-start p-6 bg-white border-l-4 border-[#c9a84c]"
          >
            <div className="flex-shrink-0 font-heading font-bold text-[#c9a84c] text-lg">
              6–18 Months
            </div>
            <div>
              <h3 className="font-heading font-bold text-[#1a2332] mb-1">
                Complete Treatment
              </h3>
              <p className="font-body text-[#4a5f6f]">
                Your final aligners guide your teeth into perfect position. Straight smile achieved.
              </p>
            </div>
          </motion.div>
        </div>
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
        headline="Ready to Straighten Your Teeth?"
        subheadline="Schedule your free smile assessment with Dr. Karamcheti. She'll explain exactly what Invisalign can do for your smile and show you your potential results."
        buttonText="Free Smile Assessment"
        buttonLink="/contact"
        variant="navy"
      />
    </main>
  );
}
