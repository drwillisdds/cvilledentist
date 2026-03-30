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

export default function AlloOn4Content() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatIsRef, inView: whatIsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whoIsRef, inView: whoIsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: advantagesRef, inView: advantagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: costRef, inView: costInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const candidateReasons = [
    {
      icon: "🦷",
      title: "Multiple Missing Teeth",
      description:
        "Several teeth are missing, and the remaining teeth are compromised or at risk of being extracted soon.",
    },
    {
      icon: "💔",
      title: "Failing Dentition",
      description:
        "Your remaining teeth have significant decay, gum disease, or have failed root canals. Extraction and implant restoration is the best path forward.",
    },
    {
      icon: "😷",
      title: "Existing Denture Wearer",
      description:
        "You've worn a traditional denture and are tired of adhesives, slipping, taste changes, and the hassle. You want a permanent solution.",
    },
    {
      icon: "👄",
      title: "Dental Phobia",
      description:
        "You've avoided the dentist for years. By replacing failing teeth all at once, you avoid years of piecemeal treatment and start fresh.",
    },
  ];

  const processSteps = [
    {
      phase: "Consultation & Planning",
      description:
        "Dr. Karamcheti evaluates your remaining teeth, takes 3D imaging, and assesses your bone. She discusses treatment options and designs your All-on-4 plan.",
      timeline: "1-2 weeks",
    },
    {
      phase: "Tooth Extraction (if needed)",
      description:
        "Any remaining failing teeth are extracted. Most often, extraction and implant placement happen on the same day. You leave with a temporary denture.",
      timeline: "Same day",
    },
    {
      phase: "All-on-4 Implant Placement",
      description:
        "Dr. Karamcheti places 4 implants at specific angles—2 vertical in the front, 2 angled in the back. You wear a temporary fixed prosthetic immediately.",
      timeline: "2-6 hours",
    },
    {
      phase: "Healing & Integration",
      description:
        "Your implants integrate with bone over 4-6 months. You adjust to your temporary denture and return for regular check-ups. The implants become rock-solid.",
      timeline: "4-6 months",
    },
    {
      phase: "Final Restoration",
      description:
        "Dr. Karamcheti removes the temporary and places your final fixed denture—either permanent or removable, depending on your preference and bone.",
      timeline: "2-4 weeks",
    },
  ];

  const advantages = [
    {
      icon: "⚡",
      title: "Fewer Implants",
      description:
        "Only 4 implants support a full arch of teeth. Less surgery, less cost, faster healing than placing 8-10 individual implants.",
    },
    {
      icon: "😊",
      title: "Immediate Function",
      description:
        "You leave the surgery with fixed teeth. Temporary or final denture is secured to your implants on day one. No waiting months without teeth.",
    },
    {
      icon: "🍽️",
      title: "Eat & Speak Normally",
      description:
        "Unlike traditional dentures that slip and click, All-on-4 dentures are fixed. You eat your favorite foods and speak with confidence.",
    },
    {
      icon: "🔒",
      title: "Permanent Solution",
      description:
        "All-on-4 is not a denture you remove at night. It's fixed to implants and lasts 15+ years with proper care—much longer than traditional dentures.",
    },
    {
      icon: "💰",
      title: "Cost-Effective",
      description:
        "All-on-4 costs less than individual implants for each missing tooth. For patients missing all or most teeth, it's often the most economical option.",
    },
    {
      icon: "🧠",
      title: "Preserves Bone",
      description:
        "Implants stimulate bone, preventing the bone loss that occurs with dentures. Your face structure remains fuller and younger-looking longer.",
    },
  ];

  const dentureLivesWith = [
    {
      issue: "Denture Adhesives",
      comparison:
        "All-day adhesive mess, refill during the day, sticky residue on teeth and gums.",
    },
    {
      issue: "Slipping & Clicking",
      comparison:
        "Dentures slip when you eat or speak. Clicking sounds announce your dentures to the world.",
    },
    {
      issue: "Taste Loss",
      comparison:
        "Denture covers your palate, dulling taste of food and reducing eating enjoyment.",
    },
    {
      issue: "Bone Loss",
      comparison:
        "Dentures speed up bone resorption. Over years, your face sinks, jaws become misaligned, and your denture needs constant adjustment.",
    },
    {
      issue: "Limited Foods",
      comparison:
        "Hard, crunchy, or sticky foods are off-limits. Many patients accept a limited diet.",
    },
    {
      issue: "Social Concerns",
      comparison:
        "Removing dentures at night, storing them, cleaning them—constant reminders you have 'fake teeth.'",
    },
  ];

  const financingInfo = [
    {
      category: "Average Cost",
      detail: "$20,000 - $30,000 per arch (varies by complexity and material)",
    },
    {
      category: "What's Included",
      detail:
        "Extractions, implant placement, temporary prosthetic, final restoration, aftercare",
    },
    {
      category: "Insurance Coverage",
      detail:
        "Most insurance covers extractions and some implant costs. Dr. Karamcheti verifies coverage and explains your out-of-pocket costs.",
    },
    {
      category: "Financing Options",
      detail:
        "Care Credit, payment plans, and other financing available to spread costs over time.",
    },
  ];

  const faqItems = [
    {
      question: "What happens to my natural teeth during All-on-4?",
      answer:
        "Failing or remaining teeth are extracted before implant placement. Usually extraction and implant placement happen on the same day, minimizing the period without teeth. You wear a temporary denture from day one.",
    },
    {
      question: "Can I choose between fixed and removable All-on-4?",
      answer:
        "Yes. A fixed all-on-4 is permanently screwed to implants and never removed—even for cleaning. A removable denture snaps onto implants but can be taken out. Both are supported by 4 implants and superior to traditional dentures. Dr. Karamcheti discusses which option suits you best.",
    },
    {
      question: "Will All-on-4 look natural?",
      answer:
        "Absolutely. Dr. Karamcheti designs your new teeth to match your natural smile—color, shape, and alignment. Tooth positioning can be improved over your original teeth. Most people won't know you have implants.",
    },
    {
      question: "How long does All-on-4 surgery take?",
      answer:
        "Usually 2-6 hours depending on whether extractions are needed and the complexity of your case. You're sedated for comfort during the entire procedure.",
    },
    {
      question: "When can I eat normally after All-on-4?",
      answer:
        "Initially, soft foods only for 2-3 weeks. As healing progresses, you gradually return to normal eating. Most patients enjoy a normal diet within 6-8 weeks of surgery.",
    },
    {
      question: "How often do I need to see the dentist after All-on-4?",
      answer:
        "Every 6 months for cleaning and check-ups. Dr. Karamcheti monitors your implant health, prosthetic condition, and bone. Regular visits ensure your All-on-4 lasts decades.",
    },
    {
      question: "What if an implant fails?",
      answer:
        "Implant failure is rare (less than 2% with proper care), but if it occurs, Dr. Karamcheti can replace the single implant without replacing your entire denture. The prosthetic design allows for individual implant replacement.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

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
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg mb-6"
          >
            All-on-4 Dental Implants in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Replace a full arch of teeth with 4 implants. Fixed. Permanent. Life-changing.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-cream border-l-4 border-gold">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={answerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={answerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <p className="text-lg text-gray-800 leading-relaxed font-semibold mb-3">
              All-on-4 dental implants replace a full arch of teeth using just four strategically placed implants. At Willis & Associates in Charlottesville, Dr. Karamcheti offers full-arch implant consultations. This permanent solution eliminates denture adhesives and slipping.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All-on-4 is a breakthrough restoration technique for patients missing most or all of their teeth. Instead of removing all your teeth and wearing a denture, or placing 8-10 individual implants, All-on-4 restores your entire arch with just 4 implants and a fixed or removable denture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is All-on-4 */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={whatIsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            What is All-on-4?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whatIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
          >
            A dental technique that restores an entire arch of teeth using only 4 strategically angled implants and a full-mouth denture or bridge.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whatIsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <ImagePlaceholder
                aspectRatio="4/3"
                label="All-on-4 Implant Positioning Diagram"
              />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={whatIsInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h3 className="heading-sm text-navy mb-2">The Concept</h3>
                <p className="text-gray-700 leading-relaxed">
                  Two implants are placed vertically in the front of your jaw where bone is denser. Two implants are angled in the back. These 4 implants bear the entire bite force of a full set of teeth.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="heading-sm text-navy mb-2">Why It Works</h3>
                <p className="text-gray-700 leading-relaxed">
                  The strategic angle and positioning distributes bite force efficiently, allowing just 4 implants to support a full arch. No gaps, no slipping—just stability.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="heading-sm text-navy mb-2">The Prosthetic</h3>
                <p className="text-gray-700 leading-relaxed">
                  A custom denture—either permanently fixed to your implants or removable—attaches to your 4 implants. It looks and functions like natural teeth. No gaps, no adhesives, no shifting.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is a Candidate */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={whoIsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whoIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16"
          >
            Who Benefits From All-on-4?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whoIsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {candidateReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="heading-sm text-white mb-3">{reason.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-navy"
          >
            The All-on-4 Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-gold"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold">
                      <span className="text-2xl text-navy font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="heading-sm text-navy">{step.phase}</h3>
                      <span className="text-sm text-gold font-semibold">
                        {step.timeline}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All-on-4 vs Traditional Dentures */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={advantagesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            All-on-4 vs. Traditional Dentures
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
          >
            Traditional dentures are removable and rely on suction. All-on-4 is fixed to implants and works like real teeth.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={advantagesInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {dentureLivesWith.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-cream rounded-lg p-6 border border-gold border-opacity-30"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-navy mb-2">
                      With Traditional Denture
                    </h4>
                    <p className="text-gray-700">{item.issue}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-2">With All-on-4</h4>
                    <p className="text-gray-700">
                      Fixed to implants — no adhesives, no slipping, no clicking, no taste loss, full bone preservation, all foods welcome, complete confidence.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages Cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-16"
          >
            Key Advantages of All-on-4
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <div className="text-5xl mb-4">{advantage.icon}</div>
                <h3 className="heading-sm text-white mb-3">{advantage.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cost & Financing */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={costRef}
            initial={{ opacity: 0, y: 20 }}
            animate={costInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Cost & Financing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={costInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto"
          >
            All-on-4 is more affordable than you might think—especially compared to years of denture expenses and individual implants.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={costInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {financingInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-gold"
              >
                <h3 className="heading-sm text-navy mb-3">{info.category}</h3>
                <p className="text-gray-700 leading-relaxed">{info.detail}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={costInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="mt-12 bg-white rounded-lg p-8 shadow-sm border border-gold border-opacity-50 text-center"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. Karamcheti provides transparent pricing during your consultation. You'll understand exactly what's included, what your insurance covers, and what payment options are available to you.
            </p>
            <p className="text-navy font-semibold text-lg">
              Don't let cost fears prevent you from exploring this life-changing option.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            All-on-4 Questions Answered
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

      {/* Success Story */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg mb-8"
          >
            A Typical All-on-4 Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-opacity-90 leading-relaxed text-lg italic mb-8"
          >
            "I wore a denture for 15 years. It was uncomfortable, slipped when I talked, and I was self-conscious all the time. Then I learned about All-on-4. Surgery day came, and by evening I had new, fixed teeth. Six months later, I got my final restoration. I can eat anything. I speak without worry. I smile without checking if my teeth are straight. Best decision I ever made."
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gold font-semibold"
          >
            — Patricia R., Charlottesville
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Restore Your Smile With All-on-4"
        subheadline="Schedule a free consultation with Dr. Karamcheti. Let's explore if All-on-4 is right for you."
        buttonText="Book Your Free Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
