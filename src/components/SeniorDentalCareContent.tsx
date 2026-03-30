"use client";

import Link from "next/link";
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
    transition: { duration: 0.6 },
  },
};

const easeArray = [0, 0, 0.2, 1] as const;

export default function SeniorDentalCareContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: changesRef, inView: changesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: challengesRef, inView: challengesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: approachRef, inView: approachInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: optionsRef, inView: optionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
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
            transition={{ duration: 0.6 }}
            className="heading-lg mb-6"
          >
            Senior Dental Care in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Specialized care addressing the unique dental needs of older adults.
            Compassionate, gentle treatment from Dr. Karamcheti and her team.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={answerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={answerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border-l-4 border-gold">
              <h2 className="heading-md text-navy mb-6">
                Why Senior Dental Care is Different
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dental health changes as we age. Medications, systemic diseases, changes in saliva, root recession, and years of wear accumulate. What worked for your teeth at 40 doesn't work at 75. Seniors face specific challenges: dry mouth, gum disease risk, root cavities, denture issues, medication interactions, and difficulty accessing care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Karamcheti understands these changes. She provides specialized care for older adults—from managing dry mouth to designing comfortable dentures, from implant restoration to coordinating with your physician about medications affecting teeth. She takes time, listens to your concerns, and tailors treatment to your health status and goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Many seniors discover that excellent dental care improves quality of life, nutrition, confidence, and overall health. It's never too late to invest in your smile.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Age-Related Changes */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={changesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={changesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Normal Changes in Aging Teeth
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={changesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              {
                change: "Enamel Wear",
                description:
                  "Enamel thins with age and decades of chewing. Teeth appear more yellow as the darker dentin underneath shows through. This is normal and not a disease—just a sign of a lifetime of use.",
              },
              {
                change: "Receding Gums",
                description:
                  "Gums naturally recede slightly with age. When the gum line moves down, the root of the tooth—which has no protective enamel—becomes exposed. Roots are softer and more prone to decay.",
              },
              {
                change: "Root Cavities",
                description:
                  "Because exposed roots are vulnerable, cavities often develop on the root surface rather than the crown. These can progress quickly and are best prevented with fluoride and excellent oral hygiene.",
              },
              {
                change: "Reduced Saliva Production",
                description:
                  "Saliva decreases with age naturally and as a side effect of many medications. Saliva protects teeth by buffering acid and fighting bacteria. Reduced saliva accelerates decay and gum disease.",
              },
              {
                change: "Bone Loss & Tooth Shifting",
                description:
                  "Jawbone gradually resorbs with age, especially if teeth are missing. Remaining teeth may shift. Dentures may become loose over time as bone underneath continues to resorb.",
              },
              {
                change: "Increased Gum Disease Risk",
                description:
                  "Gum disease (periodontitis) is more common in seniors due to years of plaque accumulation, medication interactions, and immune system changes. Advanced gum disease can lead to tooth loss.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-4">{item.change}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={challengesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={challengesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Common Dental Challenges for Seniors
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={challengesInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                challenge: "Dry Mouth (Xerostomia)",
                description:
                  "Many seniors experience dry mouth due to age or medications (for blood pressure, depression, diabetes, allergies). Dry mouth increases cavity risk, makes dentures uncomfortable, and can affect taste and swallowing. Dr. Karamcheti recommends saliva substitutes, sugar-free gum, and frequent water sips.",
              },
              {
                challenge: "Medication Interactions",
                description:
                  "Blood pressure medications, anticoagulants, bisphosphonates, and other common drugs affect oral health. Some thin gums, others cause dry mouth, and some interact with dental anesthetics. Dr. Karamcheti reviews your medications and coordinates with your physician to ensure safe dental treatment.",
              },
              {
                challenge: "Denture Discomfort & Fit",
                description:
                  "As bone resorbs after tooth loss, dentures become loose. Ill-fitting dentures cause sore spots, limit chewing ability, and reduce confidence. Relines, adjustments, or implant-supported dentures may help. Dr. Karamcheti can discuss options.",
              },
              {
                challenge: "Advanced Gum Disease",
                description:
                  "Decades of plaque and tartar can lead to serious periodontitis. Deep cleaning (scaling and root planing), antimicrobial rinses, and improved hygiene may save remaining teeth. Dr. Karamcheti can assess and develop a treatment plan.",
              },
              {
                challenge: "Difficulty Accessing Care",
                description:
                  "Mobility issues, transportation challenges, or health problems make dental visits difficult. Dr. Karamcheti's office is accessible, appointments are flexible, and she's patient with health needs. Some seniors benefit from periodic in-home or mobility assistance.",
              },
              {
                challenge: "Multiple Missing Teeth & Functional Loss",
                description:
                  "Missing teeth affect nutrition, speech, and confidence. Eating becomes difficult. Options include partial dentures, implants, or implant-supported bridges. Dr. Karamcheti can discuss which solution fits your health, budget, and goals.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border-l-4 border-gold hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.challenge}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dr. Karamcheti's Approach */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={approachRef}
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            How Dr. Karamcheti Cares for Seniors
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                principle: "Comprehensive Medical History",
                content:
                  "She reviews all your medications, medical conditions (heart disease, diabetes, osteoporosis), surgeries, and allergies. This information guides treatment choices, anesthesia selection, and safety protocols. She coordinates with your physician when needed.",
              },
              {
                principle: "Gentle, Patient-Paced Care",
                content:
                  "She takes time, never rushes, and listens to your concerns. If you need to get up, stretch, or take a break during an appointment, she accommodates. She explains every step in plain language and addresses any anxiety.",
              },
              {
                principle: "Functional Dentistry",
                content:
                  "Rather than complex cosmetic work, she focuses on function: can you chew? Can you speak clearly? Are you comfortable? Her goal is restored oral function and quality of life.",
              },
              {
                principle: "Conservative Treatment",
                content:
                  "When possible, Dr. Karamcheti preserves natural teeth. She uses the least invasive approach that achieves results. Not every problem requires extraction or complex restoration.",
              },
              {
                principle: "Denture Expertise",
                content:
                  "Whether you have complete dentures, partials, or are considering them, Dr. Karamcheti designs comfortable, functional prosthetics. She adjusts and refits them as your bone changes. She's experienced in implant-supported dentures too.",
              },
              {
                principle: "Root Cavity & Gum Disease Prevention",
                content:
                  "With receding gums and exposed roots, Dr. Karamcheti emphasizes prevention: fluoride rinses, gentle scaling, antimicrobial therapy, and excellent home care. Preventing disease is easier than treating it.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 border-l-4 border-gold hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.principle}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={optionsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Restorative Options for Seniors
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={optionsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                option: "Fluoride & Dry Mouth Management",
                icon: "💧",
                description:
                  "High-potency fluoride rinses, gels, or pastes prevent root cavities. Saliva substitutes and stimulants ease dry mouth. Sugar-free lozenges and frequent water increase saliva naturally.",
              },
              {
                option: "Deep Cleaning (Scaling & Root Planing)",
                icon: "🧹",
                description:
                  "For gum disease, Dr. Karamcheti removes tartar above and below the gum line and smooths root surfaces. This stops disease progression and can save remaining teeth.",
              },
              {
                option: "Traditional Dentures",
                icon: "😁",
                description:
                  "Complete or partial dentures replace missing teeth. Dr. Karamcheti designs them for comfort, esthetics, and function. Regular adjustments as bone changes keep them fitting well.",
              },
              {
                option: "Implant-Supported Dentures",
                icon: "🦴",
                description:
                  "Implants anchoring a denture provide greater stability and function than traditional dentures. Less bone is needed than with multiple implants. A great option for many seniors.",
              },
              {
                option: "Dental Implants",
                icon: "⭐",
                description:
                  "Dr. Karamcheti places and restores implants in-house, even for seniors. Age isn't a barrier—health status is. Implants replace missing teeth and feel like natural teeth.",
              },
              {
                option: "Root Canal Therapy",
                icon: "🔧",
                description:
                  "When a tooth is infected but can be saved, root canal therapy removes infection and saves the tooth. Dr. Karamcheti performs many in-house, eliminating need for referrals.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm text-navy mb-3">{item.option}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Medicare & Insurance */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Insurance & Affordability
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Medicare Coverage</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Original Medicare does not cover routine dental care, cleanings, fillings, or dentures. This is a significant gap for seniors on fixed incomes. However, Medicare may cover oral surgery (like tooth extraction) if medically necessary and performed in a hospital.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many seniors benefit from supplemental dental insurance or dental discount plans. Dr. Karamcheti's team can discuss options and help you understand what's covered.
              </p>
            </div>

            <div className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Private Insurance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have private dental insurance through a spouse's employer or union, it may cover preventive care, basic restorative work, and major procedures. Coverage varies widely.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti's team will verify your benefits and discuss out-of-pocket costs before treatment. We work with your insurance to maximize benefits.
              </p>
            </div>

            <div className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Payment Plans & Affordability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For seniors without insurance or when costs exceed coverage, Dr. Karamcheti offers payment plans and discusses affordable options. She won't recommend expensive treatment you can't afford—she'll suggest alternatives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sometimes conservative treatment (cleaning, fluoride, simple fillings) prevents the need for expensive restorations down the line. Prevention is the most affordable approach.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Virginia Dental Club */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Virginia Dental Club for Retirees
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 md:p-12 border-l-4 border-gold shadow-sm"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Dr. Karamcheti is a proud member of the Virginia Dental Club, a professional organization serving dentists and their patients throughout Virginia. The club advocates for quality dental care and patient access—especially for seniors on fixed incomes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through the Virginia Dental Club, Dr. Karamcheti stays current on geriatric dentistry techniques, evidence-based treatment for seniors, and advocacy on issues affecting senior care and insurance coverage. This membership reflects her commitment to serving the senior population in Charlottesville with state-of-the-art, compassionate care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you'd like more information about the Virginia Dental Club or senior dental resources, Dr. Karamcheti's team is happy to discuss.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Senior Dental Care FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              {
                q: "I have dentures that no longer fit. What are my options?",
                a: "Dr. Karamcheti can adjust or reline your current dentures to improve fit. If your bone has resorbed significantly, implant-supported dentures may provide better stability. Or, if you prefer, you can transition to dental implants. She'll discuss which option suits your health and budget.",
              },
              {
                q: "I'm too old for dental implants, right?",
                a: "Not necessarily. Age alone isn't a barrier to implants. What matters is overall health, bone density, and ability to heal. Many people in their 80s and beyond successfully have implants placed and restored. A consultation with Dr. Karamcheti can determine if you're a candidate.",
              },
              {
                q: "My mouth is always dry. Is this normal?",
                a: "Dry mouth (xerostomia) is common in seniors due to age and medications, but it's not inevitable. Dr. Karamcheti can identify the cause—whether medications, systemic disease, or other—and recommend solutions: saliva substitutes, fluoride rinses, sugar-free gum, or medication adjustments (in consultation with your doctor).",
              },
              {
                q: "I'm worried about my medications affecting my dental treatment.",
                a: "That's a smart concern. Dr. Karamcheti reviews all your medications before treatment. Some medications affect anesthesia, bleeding, or healing. Others interact with dental medications. She coordinates with your physician to ensure safe treatment. Always disclose all medications.",
              },
              {
                q: "Can my gum disease be treated, or is it too late?",
                a: "It's rarely too late. Advanced gum disease (periodontitis) requires deeper cleaning, antimicrobial therapy, and improved home care, but treatment can stop progression and save remaining teeth. Early treatment is easier, but even advanced cases can improve with intervention.",
              },
              {
                q: "I haven't been to a dentist in 20 years. Where do I start?",
                a: "A comprehensive examination with Dr. Karamcheti is the first step. She'll assess your oral health, take X-rays, evaluate gum disease risk, and discuss any concerns. She'll never shame you for years away. Instead, she'll create a realistic, affordable plan to restore your dental health.",
              },
              {
                q: "Are there financial assistance programs for seniors?",
                a: "Some nonprofits and community health centers offer reduced-cost or free dental care for low-income seniors. Dr. Karamcheti's team can discuss payment plans, discount options, and potential resources. We also explore whether any part of treatment might be covered by insurance.",
              },
              {
                q: "How do I prevent root cavities?",
                a: "With receding gums exposing roots, prevention is critical: excellent brushing (soft-bristled brush, gentle technique), fluoride rinses daily, sugar-free diet, adequate saliva (ask about saliva stimulants), and regular professional cleaning. Dr. Karamcheti can tailor a prevention plan.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-md text-navy mb-8 text-center"
          >
            Related Services & Resources
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link
              href="/dental-implants-charlottesville"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Dental Implants
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Permanent tooth replacement with natural look and function.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>

            <Link
              href="/general-dentistry-charlottesville/dentures"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Dentures & Prosthetics
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Custom dentures and implant-supported prosthetics for comfort and function.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>

            <Link
              href="/virginia-dental-club"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Virginia Dental Club
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Learn about resources and advocacy for dental care access.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>

            <Link
              href="/general-dentistry-charlottesville"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                General Dentistry
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Preventive and restorative care for optimal oral health.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Invest in Your Smile?"
        subheadline="Schedule a senior dental consultation with Dr. Karamcheti. She'll listen to your concerns and create a treatment plan that fits your health and goals."
        buttonText="Schedule Your Senior Dental Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
