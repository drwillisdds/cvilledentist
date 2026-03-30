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

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function ComfortContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: approachRef, inView: approachInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: amenitiesRef, inView: amenitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: sedationRef, inView: sedationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const comfortAmenities = [
    {
      icon: "🎧",
      title: "Noise-Canceling Headphones",
      description:
        "Listen to your favorite playlist or relaxing music during treatment. Block out dental sounds that trigger anxiety.",
    },
    {
      icon: "🛏️",
      title: "Weighted Blankets",
      description:
        "A gentle weighted blanket reduces physiological stress response. Many patients find the pressure deeply calming.",
    },
    {
      icon: "⏸️",
      title: "Pause Button",
      description:
        "Raise your hand anytime you need a break. Dr. Karamcheti stops immediately. You control the pace, not the clock.",
    },
    {
      icon: "💆",
      title: "Relaxed Environment",
      description:
        "Soft lighting, calming decor, comfortable seating, and no rushed atmosphere. Designed from the ground up for nervous patients.",
    },
  ];

  const sedationOptions = [
    {
      name: "Nitrous Oxide (Laughing Gas)",
      description:
        "Mild sedation that relaxes you while keeping you awake and responsive. Wears off quickly. Perfect for moderately anxious patients.",
      ideal: "Good for patients who feel nervous but don't want deep sedation.",
    },
    {
      name: "Oral Sedation",
      description:
        "Take a prescribed medication before your appointment. You'll be deeply relaxed but still conscious. Great for more complex procedures.",
      ideal: "Ideal for patients with high anxiety or longer appointments.",
    },
    {
      name: "IV Sedation",
      description:
        "Administered by an anesthesia specialist. You'll have little memory of the procedure. Maximum comfort and safety monitoring.",
      ideal: "Best for extensive procedures or severe dental phobia.",
    },
  ];

  const faqItems = [
    {
      question: "Will Dr. Karamcheti judge me for being anxious?",
      answer:
        "Absolutely not. Dental anxiety is incredibly common. Dr. Karamcheti has treated hundreds of anxious patients—it's a normal part of her practice. Her calm, non-judgmental demeanor is specifically designed to put fearful patients at ease.",
    },
    {
      question: "Can you really understand what I'm feeling?",
      answer:
        "Yes. Dr. Karamcheti listens. You explain your specific fears—whether it's needles, sounds, or loss of control—and she adapts her approach accordingly. She doesn't rush; she takes time to build trust before any treatment begins.",
    },
    {
      question: "What if I've avoided the dentist for years?",
      answer:
        "Dr. Karamcheti has brought many long-time avoiders back to regular dental care. Your first appointment is a consultation—no treatment, just conversation. She learns about your history and concerns, and you see that her practice is genuinely different.",
    },
    {
      question: "Is sedation safe?",
      answer:
        "Yes. All sedation options are administered by trained professionals following strict safety protocols. Dr. Karamcheti monitors your vitals throughout any sedated procedure. She uses the lightest sedation level necessary to keep you comfortable.",
    },
    {
      question: "Will I remember the procedure?",
      answer:
        "That depends on the type of sedation. Nitrous oxide and oral sedation allow you to be aware but relaxed. IV sedation may cause minimal memory—which many patients appreciate. You'll discuss preferences before treatment.",
    },
    {
      question: "How much will anxiety treatment cost?",
      answer:
        "Sedation adds to the cost of your procedure. Dr. Karamcheti discusses all options and costs upfront. Many patients find the extra investment worth the peace of mind and ability to get necessary dental work done.",
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
            Anxiety-Free Dentistry in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Your nervousness is valid. Your comfort is priority. Return to regular dental care without fear.
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
              Dr. Karamcheti at Cville Dentist in Charlottesville specializes in treating anxious patients. Her calm, patient-paced approach has helped patients who avoided the dentist for years return to regular care. Comfort amenities and sedation options available.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you've dreaded the dentist, avoided appointments for years, or felt panic during past visits—you're not alone, and you're not broken. Dr. Karamcheti has helped hundreds of nervous patients rediscover that dental care doesn't have to be frightening.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Patients Are Anxious */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={approachRef}
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Why Dental Anxiety Happens (And Why It's Not Your Fault)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto"
          >
            Dental anxiety stems from real things: loss of control, fear of pain, uncomfortable sensations, past trauma, or feeling judged. Every reason is legitimate.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-4">Dr. Karamcheti's Approach</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Listens to your specific fears without judgment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Never pressures you into treatment before you're ready</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Explains every step in plain language before she does it</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Lets you take breaks whenever you need them</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <span>Offers sedation options that fit your comfort level</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 border-l-4 border-sage"
            >
              <h3 className="heading-sm text-navy mb-4">What You'll Experience</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span>First appointment is low-pressure consultation, not treatment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span>You control the pace—Dr. Karamcheti doesn't rush</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span>Comfort options: headphones, blankets, breaks anytime</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span>Clear expectations before any procedure begins</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-sage font-bold">→</span>
                  <span>Sedation available if you want to relax further</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Comfort Amenities */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={amenitiesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={amenitiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16"
          >
            Comfort Amenities Designed for Nervous Patients
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={amenitiesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {comfortAmenities.map((amenity, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <div className="text-5xl mb-4">{amenity.icon}</div>
                <h3 className="heading-sm text-white mb-3">{amenity.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sedation Options */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={sedationRef}
            initial={{ opacity: 0, y: 20 }}
            animate={sedationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Sedation Options
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sedationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto"
          >
            Not all anxiety requires the same level of support. We offer multiple sedation options to match your needs.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={sedationInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {sedationOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-4">{option.name}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {option.description}
                </p>
                <div className="bg-gold bg-opacity-20 rounded-lg p-4 border border-gold border-opacity-30">
                  <p className="text-sm text-gray-800 font-semibold">{option.ideal}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Common Questions About Anxious Dental Care
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
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

      {/* Patient Stories */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-12"
          >
            Patients Who Overcame Dental Anxiety
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                story:
                  "I hadn't been to a dentist in 12 years. I was terrified. Dr. Karamcheti didn't rush me. She just talked with me, answered all my questions, and made me feel safe. Now I actually come for my regular cleanings.",
                name: "Robert T.",
              },
              {
                story:
                  "Needles used to make me panic. But Dr. Karamcheti explained exactly what she was doing, let me take breaks, and I felt in control the whole time. I'm not a nervous wreck anymore when I need dental work.",
                name: "Lisa M.",
              },
              {
                story:
                  "The weighted blanket and headphones made such a difference. Just having those comfort tools helped me relax more than I expected. Dr. Karamcheti took time to see me as a person, not just a patient.",
                name: "James P.",
              },
              {
                story:
                  "I got the laughing gas for my crown, and it completely changed the experience. I was relaxed but still aware. If I could've prescribed that feeling, I would've done it years ago.",
                name: "Sandra C.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <p className="text-white text-opacity-90 leading-relaxed mb-4 italic">
                  "{testimonial.story}"
                </p>
                <p className="text-gold font-semibold">— {testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Your First Anxiety-Free Visit Starts Here"
        subheadline="Schedule a low-pressure consultation with Dr. Karamcheti. No treatment on day one—just conversation and understanding."
        buttonText="Schedule Your Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
