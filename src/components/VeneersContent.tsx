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

const processStepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  }),
};

export default function VeneersContent() {
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

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: candidateRef, inView: candidateInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      step: 1,
      title: "Consultation & Design",
      description:
        "Dr. Karamcheti discusses what you want to change about your smile. Together, you examine shade, shape, and positioning. She uses digital imaging to show you potential results before any preparation work begins.",
      details: [
        "Detailed conversation about your smile goals",
        "Digital smile preview shows projected results",
        "Shade matching against your skin tone",
        "Assessment of tooth structure and alignment",
      ],
    },
    {
      step: 2,
      title: "Tooth Preparation",
      description:
        "Dr. Karamcheti removes a thin layer of enamel from the front of each tooth—usually less than 1mm. This creates space for the veneer without making your tooth feel thick or unnatural. You receive a temporary veneer immediately.",
      details: [
        "Minimal enamel removal (under 1mm)",
        "Teeth gently reshaped for veneer fit",
        "Temporary veneers placed to protect teeth",
        "Impressions sent to the dental lab",
      ],
    },
    {
      step: 3,
      title: "Lab Fabrication",
      description:
        "Your impressions go to a premium dental lab where technicians craft custom porcelain veneers matched exactly to your design. This typically takes 2-3 weeks. You wear temporaries in the meantime.",
      details: [
        "Digital design sent to certified lab technicians",
        "Custom porcelain veneers crafted to specifications",
        "Multiple shade and translucency options tested",
        "Quality checked before shipping back",
      ],
    },
    {
      step: 4,
      title: "Veneer Bonding",
      description:
        "Dr. Karamcheti removes your temporary veneers and carefully bonds the custom porcelain veneers to your teeth using a specialized dental cement. She takes time to ensure perfect fit, shade, and bite alignment.",
      details: [
        "Try-in to confirm shade and fit",
        "Teeth cleaned and prepared for bonding",
        "Veneer bonded with dental cement",
        "Bite checked and adjusted as needed",
      ],
    },
  ];

  const candidateFactors = [
    {
      title: "You want to correct multiple issues",
      description:
        "Chips, gaps, stains, and uneven teeth? Veneers fix them all in one treatment.",
      icon: "✓",
    },
    {
      title: "Your teeth are relatively healthy",
      description:
        "Veneers work best on teeth without large fillings or decay. Dr. Karamcheti assesses whether your teeth are a good candidate.",
      icon: "✓",
    },
    {
      title: "You want a natural look",
      description:
        "If you want teeth that look like teeth — not artificial white squares — you're a perfect candidate.",
      icon: "✓",
    },
    {
      title: "You're ready to commit to care",
      description:
        "Veneers last 15-20 years with proper brushing, flossing, and avoiding habits like nail-biting or chewing ice.",
      icon: "✓",
    },
  ];

  const faqItems = [
    {
      question: "Will my teeth look fake or too white?",
      answer:
        "No. Dr. Karamcheti designs veneers to look like natural teeth. She matches them to your skin tone, eye color, and facial features. The goal is a smile that looks like your best smile—not an artificial Hollywood smile. Translucency, texture, and subtle color gradation make veneers indistinguishable from natural teeth.",
    },
    {
      question: "How long do porcelain veneers last?",
      answer:
        "With proper care, porcelain veneers last 15-20 years. Some last even longer. The bond is durable, but veneers can chip or stain if you chew on hard objects or neglect oral hygiene. Avoid biting ice, using teeth as tools, or grinding.",
    },
    {
      question: "Are veneers reversible?",
      answer:
        "Once tooth enamel is removed for veneer placement, it cannot regrow. However, if a veneer fails, Dr. Karamcheti can place a new one. The process is not truly reversible in the sense that your original tooth structure is altered, but replacement is straightforward.",
    },
    {
      question: "Do veneers require special care?",
      answer:
        "No special care is needed beyond normal oral hygiene. Brush twice daily, floss daily, and visit the dentist every six months. Avoid chewing on hard objects, ice, or your nails. If you grind your teeth, ask Dr. Karamcheti about a night guard.",
    },
    {
      question: "How much do porcelain veneers cost?",
      answer:
        "Porcelain veneers at Willis & Associates in Charlottesville range from $1,200 to $2,500 per tooth, depending on complexity and lab costs. Most patients do 2-4 veneers to match the visible smile. Dr. Karamcheti discusses cost during your consultation.",
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
            Porcelain Veneers in Charlottesville — Natural, Not Obvious
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your smile with custom porcelain veneers designed to complement your face. Dr. Karamcheti creates natural-looking results that make people notice your confidence, not your teeth.
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
              Porcelain veneers at Willis & Associates in Charlottesville range from $1,200 to $2,500 per tooth. Dr. Karamcheti designs each veneer to look natural — color-matched and shaped to complement your face, not the over-white obvious look some patients fear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Veneers Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div
            ref={whyRef}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={whyInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.h2
                variants={itemVariants}
                className="heading-md text-navy"
              >
                What Are Porcelain Veneers?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Veneers are ultra-thin shells of porcelain bonded to the front surface of your teeth. They're custom-made to match your bite, smile line, and facial features. Think of them as a layer of porcelain that covers the visible front of your tooth while keeping the back intact.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Dr. Karamcheti's approach prioritizes natural results. She shapes veneers to match your tooth anatomy—subtle variations in shade and translucency that make them look like real teeth, not restorations.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="border-l-4 border-gold pl-6 py-4"
              >
                <p className="text-gold font-semibold mb-2">
                  Veneers fix:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✓ Chips and cracks</li>
                  <li>✓ Stains and discoloration</li>
                  <li>✓ Gaps between teeth</li>
                  <li>✓ Uneven or misaligned teeth</li>
                  <li>✓ Worn or short teeth</li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={whyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            >
              <ImagePlaceholder
                aspectRatio="4/5"
                label="Porcelain veneer consultation in Charlottesville"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section
        ref={processRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              The Veneer Process — Step by Step
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From consultation to bonding, here's how Dr. Karamcheti transforms your smile
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                custom={index}
                variants={processStepVariants}
                initial="hidden"
                animate={processInView ? "visible" : "hidden"}
                className="border-l-4 border-gold pl-8 py-6 bg-cream rounded-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-gold text-xl font-bold">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="heading-sm text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gold mt-1 flex-shrink-0">
                            •
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Timeline Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="mt-12 bg-navy text-white p-8 rounded-lg text-center"
          >
            <p className="text-lg">
              <span className="font-semibold">Total Time:</span> Two to three visits over 2-3 weeks. First appointment takes 1-2 hours for prep and temporary placement. Final appointment is 1 hour for bonding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Are You a Candidate Section */}
      <section
        ref={candidateRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={candidateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">Are You a Veneer Candidate?</h2>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              Veneers work for most patients who want a smile transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {candidateFactors.map((factor, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={candidateInView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="text-gold text-2xl font-bold flex-shrink-0">
                    {factor.icon}
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">{factor.title}</h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={candidateInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mt-16 text-lg text-white text-opacity-95"
          >
            If you're unsure whether veneers are right for you, Dr. Karamcheti provides a free consultation to discuss your goals and options.
          </motion.p>
        </div>
      </section>

      {/* Veneers vs Bonding Comparison */}
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
              Veneers vs. Bonding — Which Is Right for You?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Both are excellent cosmetic options. Here's how to decide.
            </p>
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
                  <th className="p-4 text-left font-semibold">Feature</th>
                  <th className="p-4 text-left font-semibold">Porcelain Veneers</th>
                  <th className="p-4 text-left font-semibold">Dental Bonding</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Cost</td>
                  <td className="p-4 text-gray-700">
                    $1,200–$2,500 per tooth
                  </td>
                  <td className="p-4 text-gray-700">
                    $300–$600 per tooth
                  </td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Longevity</td>
                  <td className="p-4 text-gray-700">
                    15–20 years
                  </td>
                  <td className="p-4 text-gray-700">
                    5–10 years
                  </td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Process</td>
                  <td className="p-4 text-gray-700">
                    2–3 visits over 2–3 weeks
                  </td>
                  <td className="p-4 text-gray-700">
                    One visit, same-day results
                  </td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Stain Resistance</td>
                  <td className="p-4 text-gray-700">
                    Highly resistant
                  </td>
                  <td className="p-4 text-gray-700">
                    Prone to staining
                  </td>
                </tr>
                <tr className="border-b border-gold border-opacity-30 hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Durability</td>
                  <td className="p-4 text-gray-700">
                    Very durable, resists chipping
                  </td>
                  <td className="p-4 text-gray-700">
                    More prone to chipping
                  </td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="p-4 font-semibold text-navy">Best For</td>
                  <td className="p-4 text-gray-700">
                    Multiple issues, long-term solution
                  </td>
                  <td className="p-4 text-gray-700">
                    Single chips, quick fixes
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center mt-12 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            During your consultation, Dr. Karamcheti recommends which option makes the most sense for your smile.
          </motion.p>
        </div>
      </section>

      {/* Longevity & Care Section */}
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
              How Long Do Veneers Last?
            </h2>
            <p className="text-lg text-gray-700">
              Porcelain veneers last 15–20 years with proper care
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-gray-700"
          >
            <p className="text-lg leading-relaxed">
              The bond between veneer and tooth is extremely durable. Most veneers fail not because the bond breaks, but because patients don't care for them properly or suffer accidental trauma.
            </p>

            <div className="bg-cream border-l-4 border-gold p-8 rounded-lg">
              <h3 className="heading-sm text-navy mb-4">To maximize veneer lifespan:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Brush and floss daily.</strong> Veneers don't decay, but the tooth underneath does if you neglect hygiene.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Avoid hard objects.</strong> Don't chew ice, hard candy, pens, or your nails.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Wear a night guard if you grind.</strong> Grinding can fracture veneers. Dr. Karamcheti can make a custom guard.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Visit the dentist every six months.</strong> Regular check-ups catch problems early.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>
                    <strong>Avoid biting fingernails or chewing pens.</strong> Use your teeth only for eating.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              If a veneer chips or becomes loose, Dr. Karamcheti can replace it. Replacement is straightforward and doesn't require repeating the entire process.
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
            Porcelain Veneers in Charlottesville
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
              Dr. Karamcheti designs custom veneer treatments for patients across Charlottesville, UVA, and the Route 29 corridor. Free smile consultations available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="See What Porcelain Veneers Can Do for Your Smile"
        subheadline="Schedule a free consultation with Dr. Karamcheti. She'll discuss your goals and show you projected results before any treatment."
        buttonText="Schedule Your Veneer Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
