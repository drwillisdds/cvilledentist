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

export default function ImplantPlacementContent() {
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

  const { ref: procedureRef, inView: procedureInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: recoveryRef, inView: recoveryInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const procedureSteps = [
    {
      phase: "Pre-Surgery Planning",
      title: "3D Imaging & Surgical Design",
      description:
        "Dr. Karamcheti takes cone beam CT images to visualize your jaw bone, nerve locations, and optimal implant positioning. She designs the exact placement on her computer—angle, depth, position—before surgery.",
      details: [
        "Complete health history and medications reviewed",
        "3D imaging to assess bone quality and density",
        "Surgical guide designed specifically for your anatomy",
        "You meet with Dr. Karamcheti to discuss the plan",
      ],
    },
    {
      phase: "Surgery Day",
      title: "Implant Placement",
      description:
        "Dr. Karamcheti places the implant using the surgical guide she designed, ensuring perfect positioning. The procedure typically takes 30-60 minutes, depending on your case.",
      details: [
        "Local anesthesia administered (you feel pressure, no pain)",
        "Gum is gently opened to expose bone",
        "Guided surgical system positions the implant precisely",
        "Implant is secured in bone",
        "Gum is closed with dissolvable stitches",
      ],
    },
    {
      phase: "Healing Phase",
      title: "Osseointegration (3-6 months)",
      description:
        "The implant fuses with your bone—a process called osseointegration. You'll wear a temporary crown so you look and function normally while healing. Follow-up appointments ensure everything progresses perfectly.",
      details: [
        "You return in 1-2 weeks for stitch removal",
        "Regular check-ins ensure bone integration is progressing",
        "You return to eating, speaking, and normal life within days",
        "Bone and implant bond together (natural process)",
      ],
    },
  ];

  const recoveryTimeline = [
    {
      day: "Day 0-1",
      what: "Surgery Day",
      expectations:
        "Some swelling and mild discomfort. Take prescribed pain medication if needed. Rest and ice your face.",
    },
    {
      day: "Day 2-3",
      what: "Initial Recovery",
      expectations:
        "Peak swelling may occur. Continue ice, take medication, eat soft foods. No strenuous activity.",
    },
    {
      day: "Day 4-7",
      what: "Early Healing",
      expectations:
        "Swelling decreases. Discomfort minimal. Return for stitch removal. Can resume light activity.",
    },
    {
      day: "Week 2-4",
      what: "Functional Recovery",
      expectations:
        "Most patients return to normal eating and activities. Minimal pain. Continue oral hygiene carefully.",
    },
    {
      day: "Month 2-6",
      what: "Bone Healing",
      expectations:
        "Implant is integrating with bone. You feel completely normal. Attend follow-up appointments to monitor progress.",
    },
  ];

  const inHouseBenefits = [
    {
      icon: "⏱️",
      title: "No Referral Delays",
      description:
        "Surgery happens in our Charlottesville office with Dr. Karamcheti. No waiting for oral surgeon appointments or traveling elsewhere.",
    },
    {
      icon: "🤝",
      title: "Continuity of Care",
      description:
        "Dr. Karamcheti places the implant and restores it with your crown—same doctor, start to finish. Perfect communication and coordination.",
    },
    {
      icon: "💰",
      title: "Better Value",
      description:
        "No referral fees, no multiple appointments at different offices. One surgeon, one office, lower overall cost.",
    },
    {
      icon: "🔍",
      title: "Precision Planning",
      description:
        "Computer-guided surgical system ensures exact implant positioning. Dr. Karamcheti designs YOUR surgery, not a one-size-fits-all approach.",
    },
  ];

  const anesthesiaOptions = [
    {
      name: "Local Anesthesia Only",
      description:
        "Numbing medication keeps the surgical area pain-free. You're awake and comfortable. Perfect for most patients.",
    },
    {
      name: "Local + Nitrous Oxide",
      description:
        "Laughing gas adds mild relaxation. You feel safe and calm while staying conscious. Great for anxious patients.",
    },
    {
      name: "Local + Oral Sedation",
      description:
        "Take a medication before surgery for deeper relaxation. You're mostly unaware of the procedure but still responsive.",
    },
    {
      name: "IV Sedation",
      description:
        "Administered by anesthesia specialist. You have little memory of surgery. Maximum comfort and monitoring.",
    },
  ];

  const candidateRequirements = [
    {
      requirement: "Adequate Bone",
      explanation:
        "Your jaw must have sufficient bone density to support an implant. Dr. Karamcheti's 3D imaging assesses this. If bone is lacking, bone grafting can help.",
    },
    {
      requirement: "Good Oral Health",
      explanation:
        "Gum disease must be treated before implant surgery. You need good oral hygiene habits to care for your implant long-term.",
    },
    {
      requirement: "General Health",
      explanation:
        "Controlled diabetes, heart disease, and other conditions usually don't prevent implants, but they matter. Dr. Karamcheti reviews your full health history.",
    },
    {
      requirement: "Realistic Expectations",
      explanation:
        "Implants are not permanent—they need lifelong care. With good hygiene and regular check-ups, they last decades or a lifetime.",
    },
  ];

  const faqItems = [
    {
      question: "Is implant surgery painful?",
      answer:
        "No. Local anesthesia keeps the area completely numb during surgery. You feel pressure and vibration, but no pain. If you're anxious, sedation options make the experience even more comfortable. After surgery, mild discomfort is normal and controlled with medication.",
    },
    {
      question: "How long does the implant placement surgery take?",
      answer:
        "Usually 30-60 minutes, depending on the complexity of your case. Dr. Karamcheti takes the time needed to ensure perfect positioning—not rushing through.",
    },
    {
      question: "Can I eat right after implant surgery?",
      answer:
        "Not immediately. For the first few days, stick to cold foods (ice cream, yogurt), soft foods (pudding, applesauce), and smoothies. Avoid hard, crunchy, and hot foods. Within a week, most patients progress to normal eating.",
    },
    {
      question: "What if I have low bone density?",
      answer:
        "Dr. Karamcheti assesses bone quality with 3D imaging. If bone is insufficient, bone grafting can rebuild it before implant placement. This takes additional time but makes implants possible.",
    },
    {
      question: "When can I return to work?",
      answer:
        "Most patients return to desk jobs within 2-3 days. If your job is physically demanding, wait a week. Avoid heavy lifting and strenuous exercise for 2-3 weeks.",
    },
    {
      question: "How do I know the implant took?",
      answer:
        "Dr. Karamcheti monitors healing with regular check-ups and imaging. You'll feel integration happening—the area becomes less sensitive, and normal chewing feels more stable. After 3-6 months, the implant is fully integrated and ready for your crown.",
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
            Dental Implant Placement in Charlottesville — No Referral Needed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Computer-guided surgical precision from the dentist you already trust.
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
              Dr. Karamcheti places dental implants in-house at Willis & Associates in Charlottesville using computer-guided surgery for precise positioning. No referral to an oral surgeon needed. Most patients return to normal activities within 24-48 hours.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The surgical phase is the first step in your implant journey. Dr. Karamcheti uses 3D imaging and guided surgical technology to place your implant with millimeter precision. Then your implant heals for 3-6 months while it integrates with your bone. Finally, she restores it with a custom crown.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why In-House Implant Surgery */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={whyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Why In-House Surgery Beats Getting Referred Out
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {inHouseBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 border border-gold border-opacity-30"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="heading-sm text-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Surgical Procedure */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={procedureRef}
            initial={{ opacity: 0, y: 20 }}
            animate={procedureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16"
          >
            The Implant Placement Procedure
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={procedureInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {procedureSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
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
                    <p className="text-gold font-semibold text-sm mb-1">
                      {step.phase}
                    </p>
                    <h3 className="heading-sm text-white mb-2">{step.title}</h3>
                    <p className="text-white text-opacity-90 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-white text-opacity-80">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-gold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recovery Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={recoveryRef}
            initial={{ opacity: 0, y: 20 }}
            animate={recoveryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Recovery Timeline
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={recoveryInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {recoveryTimeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 border-l-4 border-gold shadow-sm"
              >
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0">
                    <p className="font-bold text-gold text-lg">{item.day}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-navy heading-sm">
                      {item.what}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.expectations}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Anesthesia Options */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={benefitsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Anesthesia Options for Your Comfort
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto"
          >
            Choose the level of comfort that works for you. All options are safe and effective.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {anesthesiaOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 border border-navy border-opacity-20"
              >
                <h3 className="heading-sm text-navy mb-3">{option.name}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Are You a Candidate? */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-12"
          >
            Are You a Candidate for Implants?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {candidateRequirements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <h3 className="heading-sm text-gold mb-3">{item.requirement}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {item.explanation}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20 text-center"
          >
            <p className="text-white text-opacity-90 leading-relaxed mb-6">
              Not sure if you're a candidate? Dr. Karamcheti reviews your specific case during a consultation. Many conditions don't disqualify you from implants—she'll design a plan that works for you.
            </p>
            <a
              href="/new-patients"
              className="inline-block px-8 py-3 font-semibold rounded-full bg-gold text-navy hover:bg-opacity-90 transition-all"
            >
              Schedule Your Implant Consultation
            </a>
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

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Ready to Restore Your Smile?"
        subheadline="Schedule a free implant consultation with Dr. Karamcheti at Willis & Associates in Charlottesville."
        buttonText="Book Your Free Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
