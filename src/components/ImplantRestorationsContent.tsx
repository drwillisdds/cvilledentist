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

export default function ImplantRestorationsContent() {
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

  const { ref: materialsRef, inView: materialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: aftercareRef, inView: aftercareInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const restorativeSteps = [
    {
      step: "1",
      title: "Implant Assessment & Planning",
      description:
        "After your implant has integrated (3-6 months), Dr. Karamcheti examines it to ensure perfect bone integration. She takes digital scans and X-rays to design your custom crown with precision.",
    },
    {
      step: "2",
      title: "Abutment Selection or Fabrication",
      description:
        "The abutment is the connector between implant and crown. Dr. Karamcheti selects a standard abutment or fabricates a custom one for perfect fit and esthetics.",
    },
    {
      step: "3",
      title: "Crown Preparation",
      description:
        "Dr. Karamcheti takes precise digital scans and impressions of your implant and natural teeth. She designs your crown to match the color, shape, and alignment of your natural smile.",
    },
    {
      step: "4",
      title: "Crown Fabrication",
      description:
        "Your crown is fabricated in a trusted dental lab using premium materials. Dr. Karamcheti oversees quality control to ensure it matches her design specifications perfectly.",
    },
    {
      step: "5",
      title: "Crown Try-In & Fitting",
      description:
        "The crown is tested on your implant. Dr. Karamcheti checks bite, fit, and esthetics. Minor adjustments are made to ensure perfect alignment and comfort.",
    },
    {
      step: "6",
      title: "Crown Cementation",
      description:
        "Once approved, the crown is permanently cemented onto your abutment. Your implant restoration is complete and looks and functions like a natural tooth.",
    },
  ];

  const crowMaterialOptions = [
    {
      material: "Porcelain Fused to Metal (PFM)",
      description:
        "Gold or platinum base with tooth-colored porcelain overlay. Extremely durable and cost-effective.",
      pros: ["Very strong", "Affordable", "Tested track record"],
      cons: ["Metal can show if gums recede", "Not as natural-looking as all-ceramic"],
    },
    {
      material: "All-Ceramic (Zirconia or Lithium Disilicate)",
      description:
        "No metal—100% ceramic. Most natural-looking option with excellent durability.",
      pros: [
        "Most esthetic",
        "No metal to show",
        "Biocompatible",
        "Natural light transmission",
      ],
      cons: ["Slightly higher cost", "Not ideal if gums are very dark"],
    },
    {
      material: "Gold Crown",
      description:
        "Premium choice using biocompatible gold. Lasts decades without corrosion.",
      pros: [
        "Exceptional durability",
        "Most biocompatible",
        "Never corrodes",
        "Excellent for bite force",
      ],
      cons: ["Visible gold color", "Higher cost", "Not preferred if you want tooth-colored"],
    },
  ];

  const oneOfficeBenefits = [
    {
      icon: "👁️",
      title: "Vision to Reality",
      description:
        "Dr. Karamcheti designs the crown BEFORE placing the implant. Your final restoration matches the plan perfectly—no surprises.",
    },
    {
      icon: "🎯",
      title: "Precision Fit",
      description:
        "Same doctor who positioned your implant designs your crown. The relationship between implant angle and crown shape is perfect.",
    },
    {
      icon: "💬",
      title: "Seamless Communication",
      description:
        "No coordination between surgeons and restorative dentists. Dr. Karamcheti oversees every detail and takes responsibility for the final result.",
    },
    {
      icon: "⏰",
      title: "Fewer Appointments",
      description:
        "All appointments—implant placement, assessment, crown try-in, cementation—happen in one office with one doctor. Simpler timeline.",
    },
  ];

  const aftercareItems = [
    {
      title: "Regular Brushing & Flossing",
      description:
        "Treat your implant crown like a natural tooth. Brush twice daily and floss daily. Special floss for implants helps clean around the crown.",
    },
    {
      title: "Professional Cleanings",
      description:
        "Visit Cville Dentist every 6 months for professional cleaning and check-up. Dr. Karamcheti monitors the implant and crown for any issues.",
    },
    {
      title: "Avoid Hard Foods",
      description:
        "Don't chew on ice, hard candy, or bones. Your implant is strong, but repeated trauma can damage it over time.",
    },
    {
      title: "Quit Smoking",
      description:
        "Smoking impairs healing and increases implant failure risk. If you smoke, quit or reduce significantly before implant surgery.",
    },
    {
      title: "Manage Health Conditions",
      description:
        "Controlled diabetes, heart disease, and other conditions support implant health. Work with your physician to manage your overall health.",
    },
    {
      title: "Watch for Warning Signs",
      description:
        "Report pain, swelling, or loosening of the crown to Dr. Karamcheti immediately. Early intervention prevents complications.",
    },
  ];

  const bridges = [
    {
      scenario: "Multiple Missing Teeth",
      solution: "Implant-Supported Bridge",
      description:
        "If you're missing 3 or 4 teeth in a row, Dr. Karamcheti may place 2 implants with a bridge spanning the gap. Less expensive than 3-4 individual implants.",
      benefit: "Restores multiple teeth with fewer implants. Still looks and functions naturally.",
    },
    {
      scenario: "Few Implants, Many Missing Teeth",
      solution: "Implant-Supported Denture",
      description:
        "For patients missing an entire arch of teeth, 4-6 implants can support a fixed or removable denture. Much more stable than traditional dentures.",
      benefit: "Permanent solution to denture slippage and adhesive. Eat and speak with confidence.",
    },
  ];

  const faqItems = [
    {
      question: "How long does the restoration process take?",
      answer:
        "After your implant integrates (3-6 months), the restoration process takes 2-4 weeks. That includes assessment, design, fabrication, and placement. The exact timeline depends on the lab and any adjustments needed.",
    },
    {
      question: "Will my implant crown look natural?",
      answer:
        "Yes. Dr. Karamcheti designs custom crowns to match your natural tooth color, shape, and size. Most people can't tell the difference between an implant crown and a natural tooth.",
    },
    {
      question: "Can my implant crown get cavities?",
      answer:
        "No. The crown itself is made of ceramic or gold—materials that don't decay. However, your natural gum around the implant can develop gum disease if not properly cleaned. Good oral hygiene prevents problems.",
    },
    {
      question: "What if the crown breaks?",
      answer:
        "Implant crowns are durable and rarely break. If damage occurs, Dr. Karamcheti can repair or replace it. The implant underneath remains intact, so replacement is simpler than replacing a natural tooth with root canal failure.",
    },
    {
      question: "How long will my implant crown last?",
      answer:
        "With good care, implant crowns last 15-30+ years. Some last a lifetime. The implant itself can last indefinitely if properly maintained. The crown may eventually need replacement due to wear or cosmetic changes.",
    },
    {
      question: "What's the cost of implant restoration?",
      answer:
        "Crown costs vary by material and complexity. All-ceramic crowns typically cost more than PFM crowns. Dr. Karamcheti discusses costs during your consultation and explains your material options.",
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
            Dental Implant Restorations in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Custom crowns that complete your implant journey and restore your smile.
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
              Dr. Karamcheti designs and places custom implant crowns at Cville Dentist in Charlottesville. Because the same doctor handles both placement and restoration, your implant crown fits precisely and matches your natural teeth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The restoration phase is the final step in your implant journey. After your implant has integrated with bone (3-6 months), Dr. Karamcheti designs a custom crown that looks and functions like your natural tooth—and lasts for decades.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why One Office Matters */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={whyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-navy"
          >
            The Advantage of One Office, One Doctor
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {oneOfficeBenefits.map((benefit, index) => (
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

      {/* Restoration Process */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16"
          >
            The Crown Restoration Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {restorativeSteps.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold">
                      <span className="text-lg text-navy font-bold">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm text-white mb-2">{item.title}</h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Crown Materials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={materialsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={materialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Crown Material Options
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={materialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto"
          >
            Your choice of material affects durability, appearance, and cost. Dr. Karamcheti recommends the best option for your situation.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={materialsInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {crowMaterialOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-sm"
              >
                <h3 className="heading-sm text-navy mb-2">{option.material}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {option.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                      <span className="text-gold">✓</span> Advantages
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-sage">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                      <span className="text-gold">→</span> Considerations
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {option.cons.map((con, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-gold">•</span>
                          <span>{con}</span>
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

      {/* Bridges & Multiple Teeth */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Restoring Multiple Missing Teeth
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {bridges.map((bridge, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 border-l-4 border-gold"
              >
                <p className="text-gold font-semibold text-sm mb-2">
                  {bridge.scenario}
                </p>
                <h3 className="heading-sm text-navy mb-3">{bridge.solution}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {bridge.description}
                </p>
                <div className="bg-gold bg-opacity-20 rounded-lg p-4 border border-gold border-opacity-30">
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">Benefit: </span>
                    {bridge.benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Aftercare */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={aftercareRef}
            initial={{ opacity: 0, y: 20 }}
            animate={aftercareInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16"
          >
            Caring for Your Implant Crown
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={aftercareInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {aftercareItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20"
              >
                <h3 className="heading-sm text-white mb-3">{item.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
            Questions About Your Implant Crown
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
        headline="Restore Your Smile With Confidence"
        subheadline="Complete your implant journey with Dr. Karamcheti's custom crown restoration. Schedule your consultation at Cville Dentist."
        buttonText="Book Your Restoration Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
