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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function FluorideTreatmentContent() {
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

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const treatmentOptions = [
    {
      name: "Fluoride Gel",
      description:
        "A clear gel with a mild fruit flavor is applied with a custom tray that fits over your teeth. You wear the tray for 4 minutes while the fluoride absorbs. Quick, effective, and comfortable.",
      ideal: "Best for routine preventive care and high-cavity-risk patients.",
    },
    {
      name: "Fluoride Varnish",
      description:
        "A sticky, thicker formula that adheres to teeth and releases fluoride slowly over several hours. Applied with a small brush directly to tooth surfaces. Doesn't taste strong and hardens quickly.",
      ideal: "Excellent for children, seniors, and patients with difficulty keeping a tray in place.",
    },
    {
      name: "Fluoride Rinse",
      description:
        "A liquid solution swished in the mouth for one minute. Lower concentration than gel or varnish, but still effective for cavity prevention when used regularly at home.",
      ideal: "Good for at-home supplemental fluoride, especially for cavity-prone patients.",
    },
  ];

  const benefitsList = [
    {
      icon: "🛡️",
      title: "Enamel Strengthening",
      description:
        "Professional fluoride significantly hardens tooth enamel, making it more resistant to acid attacks from cavity-causing bacteria and dietary sugars.",
    },
    {
      icon: "🦷",
      title: "Early Decay Reversal",
      description:
        "When decay is caught at the very earliest stage (white spot lesions), fluoride can help reverse it before a cavity forms. Prevention is always better than treatment.",
    },
    {
      icon: "👶",
      title: "Perfect for Children's Developing Teeth",
      description:
        "Children's teeth are still mineralizing. Professional fluoride strengthens them during this critical window, reducing cavity risk throughout childhood and beyond.",
    },
    {
      icon: "🌡️",
      title: "Especially Effective for Dry Mouth",
      description:
        "Saliva naturally protects teeth. Seniors and patients on medications that reduce saliva production face higher cavity risk. Fluoride compensates by directly strengthening enamel.",
    },
    {
      icon: "⚡",
      title: "Rapid Application",
      description:
        "Most fluoride treatments take just 5-10 minutes and are completely painless. Dr. Karamcheti often applies it right after a cleaning appointment.",
    },
    {
      icon: "💰",
      title: "Cost-Effective Prevention",
      description:
        "A fluoride treatment costs $30-40 and prevents costly cavities and fillings. It's preventive dentistry at its most affordable and effective.",
    },
  ];

  const riskFactors = [
    {
      title: "History of Cavities",
      description:
        "If you or your child have had multiple cavities, your teeth are naturally more cavity-prone. Professional fluoride significantly reduces recurrence risk.",
    },
    {
      title: "Cavity-Prone Lifestyle",
      description:
        "High sugar consumption, frequent snacking, or difficulty brushing thoroughly increases cavity risk. Fluoride provides extra protection against these challenges.",
    },
    {
      title: "Dry Mouth",
      description:
        "Conditions like Sjögren's syndrome, diabetes, or medications that reduce saliva flow leave teeth vulnerable. Fluoride replaces some protection that missing saliva provides.",
    },
    {
      title: "Gum Disease or Root Exposure",
      description:
        "When gums recede, softer root surfaces are exposed. These are more susceptible to decay. Fluoride strengthens and protects exposed roots.",
    },
    {
      title: "Orthodontic Treatment",
      description:
        "Braces make thorough brushing harder, increasing cavity risk. Fluoride provides backup protection during the 2-3 years of treatment.",
    },
    {
      title: "Limited Access to Water Fluoridation",
      description:
        "Charlottesville water is fluoridated, but well water or certain filtration systems remove fluoride. Professional treatments supplement your water exposure.",
    },
  ];

  const faqItems = [
    {
      question: "What's the difference between professional fluoride and toothpaste?",
      answer:
        "Professional fluoride treatments contain 5-10 times more fluoride than typical toothpaste. They're applied by Dr. Karamcheti in a controlled, concentrated dose that maximizes absorption. Toothpaste provides daily maintenance; professional treatment provides intensive, targeted prevention.",
    },
    {
      question: "Is it safe to have professional fluoride if I already use fluoridated toothpaste?",
      answer:
        "Absolutely. Professional fluoride and fluoridated toothpaste work together in your prevention plan. You continue brushing with your fluoride toothpaste daily, and professional treatments boost protection. Dr. Karamcheti monitors your total fluoride exposure and adjusts as needed.",
    },
    {
      question: "Can adults benefit from fluoride treatments, or are they just for kids?",
      answer:
        "Adults absolutely benefit. While children's developing teeth respond well to fluoride, adults with a cavity history, gum disease, dry mouth, or exposed roots need professional fluoride too. Dr. Karamcheti recommends fluoride based on individual risk, not age.",
    },
    {
      question: "How often should I get professional fluoride treatments?",
      answer:
        "It depends on your cavity risk. Low-risk patients benefit from annual treatments, while high-risk patients may need them every 3-6 months. Dr. Karamcheti assesses your specific situation and builds a customized prevention schedule.",
    },
    {
      question: "What happens after a fluoride treatment? Any restrictions?",
      answer:
        "None. You can eat and drink immediately after. The fluoride continues to work for hours afterward, so we just ask that you don't brush your teeth for 30 minutes to allow optimal absorption. That's the only 'restriction'—and most people don't notice it.",
    },
    {
      question: "Is professional fluoride fluorosis risk?",
      answer:
        "No. Fluorosis occurs when excessive fluoride is ingested during tooth development (before age 8) from swallowing fluoride—not from professional topical applications. Dr. Karamcheti uses age-appropriate doses and makes sure patients don't swallow varnish or gel. Professional treatment is safe for children of all ages.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-white text-navy">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-br from-navy via-navy to-blue-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream mb-6"
          >
            Professional Fluoride Treatments in Charlottesville
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-cream/90 mb-8 leading-relaxed"
          >
            Strengthen your teeth with professional-grade fluoride far more effective than over-the-counter toothpaste. Safe for all ages, quick application, powerful protection.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ImagePlaceholder label="Professional fluoride treatment application" />
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Answer Block */}
      <motion.section
        ref={answerRef}
        initial="hidden"
        animate={answerInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto"
      >
        <div className="bg-amber-50 border-l-4 border-gold p-6 sm:p-8 rounded-sm">
          <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-3">
            Quick Answer
          </h3>
          <p className="text-navy text-lg leading-relaxed">
            Professional fluoride treatments use high-concentration fluoride gel or varnish applied directly to your teeth by Dr. Karamcheti. Unlike fluoridated toothpaste, these treatments deliver 5-10 times more fluoride in a single session. They significantly strengthen tooth enamel, prevent cavities in cavity-prone teeth, and can even reverse very early decay. The treatment takes 5-10 minutes, is completely painless, and is safe for children and adults.
          </p>
        </div>
      </motion.section>

      {/* Why Professional Fluoride Matters */}
      <motion.section
        ref={whyRef}
        initial="hidden"
        animate={whyInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            Why Professional Fluoride Beats Store-Bought
          </motion.h2>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                You brush your teeth twice daily with fluoridated toothpaste. That's good—fluoride in toothpaste helps protect your teeth. But it's not enough if you're cavity-prone.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                Store-bought fluoride toothpaste typically contains 1000-1500 parts per million (ppm) of fluoride. Professional treatments contain 5000-12,300 ppm—up to 10 times higher. More importantly, professional applications are applied directly and concentrated, allowing deeper, more thorough absorption into tooth enamel.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                Think of it like the difference between daily lotion and an intensive moisturizing treatment. Daily toothpaste maintains baseline protection. Professional fluoride delivers intensive strengthening that builds up your enamel's resistance to decay far more effectively.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-navy text-base leading-relaxed">
                <strong>The science:</strong> Research shows professional fluoride treatments reduce cavity risk by 25-40% in cavity-prone patients. For people with high decay risk, they're one of the most cost-effective preventive tools available.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who Benefits Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Who Benefits Most from Professional Fluoride?
          </motion.h2>

          <div className="space-y-4 mb-12">
            {riskFactors.map((factor, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border border-gold/30 p-6 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-navy mb-2">{factor.title}</h3>
                <p className="text-navy/80 leading-relaxed">{factor.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-amber-50 p-6 rounded-lg border border-gold/30">
            <p className="text-navy text-base leading-relaxed">
              <strong>The bottom line:</strong> Dr. Karamcheti evaluates your individual cavity risk at each appointment. If you fit any of these categories, professional fluoride is likely a valuable part of your prevention plan.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Options */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Professional Fluoride Treatment Options
          </motion.h2>

          <div className="space-y-6">
            {treatmentOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{option.name}</h3>
                <p className="text-navy/80 text-base leading-relaxed mb-4">{option.description}</p>
                <div className="bg-blue-50 p-3 rounded border border-blue-100">
                  <p className="text-navy/75 text-sm">
                    <strong>Best for:</strong> {option.ideal}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Which Option Does Dr. Karamcheti Recommend?</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              Fluoride varnish is most commonly used in dental practices because it adheres to teeth longest and releases fluoride slowly over many hours—maximizing benefit. However, Dr. Karamcheti tailors her recommendation to each patient's preference and needs. Some patients prefer gel in a tray; others prefer varnish. She'll discuss options and choose what works best for you.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The Fluoride Advantage */}
      <motion.section
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            The Professional Fluoride Advantage
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-navy/75 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            What to Expect During Your Fluoride Treatment
          </motion.h2>

          <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed space-y-6">
            <p>
              <strong>Before:</strong> Dr. Karamcheti removes plaque and tartar during your cleaning. This exposes clean tooth surfaces where fluoride can work most effectively.
            </p>

            <p>
              <strong>During:</strong> Depending on which fluoride treatment you're receiving, Dr. Karamcheti either applies varnish directly with a small brush or places fluoride gel in a custom tray over your teeth. Most treatments take 4-5 minutes. You may notice a mild, pleasant flavor.
            </p>

            <p>
              <strong>After:</strong> You can eat and drink immediately, though we ask you not to brush teeth for 30 minutes to allow maximum fluoride absorption. That's truly the only restriction.
            </p>

            <p>
              <strong>Frequency:</strong> Dr. Karamcheti will recommend how often you need treatments based on your cavity risk. Most patients benefit from treatments every 3-6 months, while lower-risk patients may only need annual treatments.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Fluoride + Your Complete Prevention Plan</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              Professional fluoride works best alongside sealants, regular cleanings, careful brushing, and a low-sugar diet. Dr. Karamcheti builds a personalized prevention strategy that may include fluoride as one powerful tool among several.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-navy/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 bg-white hover:bg-cream transition flex items-center justify-between group"
                >
                  <span className="text-navy font-semibold text-left group-hover:text-gold transition">
                    {item.question}
                  </span>
                  <span className="text-gold text-xl flex-shrink-0 ml-4">
                    {expandedFaq === index ? "−" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-cream border-t border-navy/10">
                    <p className="text-navy/80 text-base leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        headline="Strengthen Your Teeth with Professional Fluoride"
        subheadline="Dr. Karamcheti personalizes fluoride treatment to your cavity risk. Schedule your appointment at Willis & Associates in Charlottesville today."
        buttonText="Call (434) 973-5873"
        buttonLink="tel:4349735873"
      />
    </div>
  );
}
