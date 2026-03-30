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

export default function DeepCleaningContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: gumDiseaseRef, inView: gumDiseaseInView } = useInView({
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

  const { ref: preventionRef, inView: preventionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const gumDiseaseStages = [
    {
      name: "Gingivitis (Early Stage)",
      description:
        "Inflammation of the gums only. Gums bleed when brushing or flossing, but no bone loss has occurred yet. This stage is reversible with improved oral hygiene and professional cleaning.",
    },
    {
      name: "Early Periodontitis",
      description:
        "Bacteria have spread below the gumline and begun attacking the bone. Pocket depth increases to 3-4 mm. Regular cleaning is no longer enough—deep cleaning (scaling and root planing) becomes necessary.",
    },
    {
      name: "Moderate Periodontitis",
      description:
        "Significant bone loss and pocket depth of 4-6 mm. Teeth may become mobile or sensitive. Deep cleaning is essential, often combined with antimicrobial rinses or localized medications.",
    },
    {
      name: "Advanced Periodontitis",
      description:
        "Severe bone loss with pockets deeper than 6 mm. Teeth are often loose and may require extraction. Deep cleaning may need to be combined with surgical therapy. Prevention of further loss is critical.",
    },
  ];

  const procedureSteps = [
    {
      step: "1",
      title: "Periodontal Examination",
      description:
        "Dr. Karamcheti measures pocket depths around each tooth using a periodontal probe. Depths greater than 3 mm indicate bone loss and gum disease.",
    },
    {
      step: "2",
      title: "Local Anesthesia",
      description:
        "The treatment area is numbed with local anesthetic to keep you comfortable. Dr. Karamcheti ensures you're completely numb before beginning any procedure.",
    },
    {
      step: "3",
      title: "Scaling",
      description:
        "Dr. Karamcheti uses hand instruments and ultrasonic scalers to carefully remove plaque and tartar (calculus) from the tooth surface and below the gumline. This is the most important step in halting disease progression.",
    },
    {
      step: "4",
      title: "Root Planing",
      description:
        "The root surfaces are smoothed to remove bacteria and rough spots where more bacteria might accumulate. Smooth roots allow gums to reattach more effectively.",
    },
    {
      step: "5",
      title: "Antimicrobial Rinse",
      description:
        "An antimicrobial rinse may be used to reduce bacteria in the treated pockets. This helps infection clear and allows healing to begin.",
    },
    {
      step: "6",
      title: "Post-Procedure Instructions",
      description:
        "Dr. Karamcheti provides detailed instructions for the coming weeks—what to expect, how to care for your mouth, and any activity restrictions during healing.",
    },
  ];

  const karamchetiApproach = [
    {
      icon: "🪥",
      title: "Meticulous Technique",
      description:
        "Dr. Karamcheti takes time to thoroughly remove all deposits below the gumline. She doesn't rush—a thorough deep cleaning is the foundation of success.",
    },
    {
      icon: "😌",
      title: "Comfort-Focused",
      description:
        "Proper anesthesia, gentle technique, and respect for your comfort level make the procedure manageable. Many patients are surprised at how comfortable it is.",
    },
    {
      icon: "🎯",
      title: "Targeted Approach",
      description:
        "Rather than trying to do the entire mouth in one appointment (which can be uncomfortable), Dr. Karamcheti schedules multiple shorter appointments, usually one quadrant at a time.",
    },
    {
      icon: "📚",
      title: "Education & Prevention",
      description:
        "Dr. Karamcheti explains what happened, why deep cleaning is necessary, and how to prevent recurrence. Understanding the problem helps you take ownership of your gum health.",
    },
  ];

  const recoveryPhase = [
    {
      timeline: "First 24 Hours",
      what: "Healing begins, but some inflammation remains. You may notice mild swelling or discomfort.",
      care: "Rinse gently with warm salt water 3-4 times daily. Take over-the-counter pain reliever if needed. Avoid very hot foods and drinks.",
    },
    {
      timeline: "Days 3-7",
      what: "Most discomfort resolves. Gums begin to shrink and tighten as inflammation decreases. You may notice gaps appearing between teeth—this is normal and expected.",
      care: "Continue salt water rinses. Avoid flossing in treated areas for the first week. Use a soft toothbrush if you brush.",
    },
    {
      timeline: "Weeks 2-3",
      what: "Most healing is complete. Gum tissue reattaches to tooth roots. Pocket depths decrease. You feel much better.",
      care: "Gentle flossing can resume. Continue careful oral hygiene. Avoid smoking completely—it significantly impairs healing.",
    },
    {
      timeline: "Months 1-3",
      what: "Complete healing and reattachment occurs. Pocket depths continue to decrease. Overall gum health improves significantly.",
      care: "Maintain meticulous oral hygiene. Use a prescription rinse if Dr. Karamcheti recommends. Attend all follow-up appointments.",
    },
  ];

  const preventionTips = [
    {
      title: "Brush Twice Daily",
      description:
        "Brush for 2 minutes using a soft-bristled brush and fluoride toothpaste. Proper technique removes plaque that bacteria feed on.",
    },
    {
      title: "Floss Daily",
      description:
        "Flossing removes plaque and food from between teeth where your toothbrush can't reach. This is the single most important habit for gum health.",
    },
    {
      title: "Professional Cleanings Every 3-4 Months",
      description:
        "After deep cleaning, you'll likely need more frequent cleanings than the standard 6-month interval. Regular removal of tartar prevents recurrence.",
    },
    {
      title: "Quit Smoking",
      description:
        "Smoking is one of the strongest risk factors for gum disease and the biggest factor preventing healing after deep cleaning. Quitting dramatically improves outcomes.",
    },
    {
      title: "Manage Stress",
      description:
        "Stress suppresses immune function and makes your mouth more vulnerable to infection. Exercise, sleep, and stress management support gum health.",
    },
    {
      title: "Eat a Healthy Diet",
      description:
        "Limit sugary foods and drinks that feed harmful bacteria. Eat plenty of fruits, vegetables, and protein to support immune function and healing.",
    },
  ];

  const faqItems = [
    {
      question: "Is deep cleaning really necessary, or can I just brush better?",
      answer:
        "Once bacteria have spread below the gumline and bone loss occurs, brushing and flossing alone cannot remove the deposits. Deep cleaning removes the bacterial source of the problem. Without it, the disease will progress. Think of it like treating an infection—sometimes you need professional intervention, not just prevention.",
    },
    {
      question: "How much does deep cleaning cost?",
      answer:
        "Cost varies depending on the extent of disease and the number of appointments needed. Full mouth deep cleaning typically ranges from $500-$1500. Many insurance plans cover a significant portion since deep cleaning is treatment, not just preventive care. Dr. Karamcheti discusses costs upfront.",
    },
    {
      question: "Will deep cleaning save my teeth?",
      answer:
        "Deep cleaning halts disease progression and gives your teeth the best chance at long-term health. However, if extensive bone loss has already occurred, some teeth may be too compromised to save. The earlier gum disease is caught and treated, the better the outcome.",
    },
    {
      question: "Is deep cleaning painful?",
      answer:
        "With proper anesthesia, deep cleaning shouldn't cause significant pain during the procedure. Some patients experience mild soreness or sensitivity during healing, similar to after a regular cleaning. Dr. Karamcheti can discuss pain management options.",
    },
    {
      question: "How many appointments will I need?",
      answer:
        "Most patients need 2-4 appointments, usually scheduled 1-2 weeks apart. Each appointment typically handles one or two areas of the mouth. Dr. Karamcheti recommends the schedule based on the extent of disease and your comfort level.",
    },
    {
      question: "What happens after deep cleaning? Do I need more treatment?",
      answer:
        "After deep cleaning, you'll need more frequent professional cleanings—typically every 3-4 months instead of 6 months—to prevent recurrence. You may also be recommended to use a special antimicrobial rinse. Dr. Karamcheti monitors your progress closely.",
    },
    {
      question: "Will my teeth look different after deep cleaning?",
      answer:
        "Your teeth may look slightly longer as gums shrink during healing. The exposed root surfaces may appear darker or slightly discolored compared to the whiter crown portion. This appearance usually stabilizes within a few weeks. Talk to Dr. Karamcheti if you have cosmetic concerns.",
    },
    {
      question: "How do I prevent gum disease from coming back?",
      answer:
        "Prevention requires consistent effort: excellent home oral hygiene (brush and floss daily), regular professional cleanings, quitting smoking, stress management, and a healthy diet. Dr. Karamcheti works with you to create a personalized prevention plan.",
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
            Deep Cleaning & Scaling in Charlottesville
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-cream/90 mb-8 leading-relaxed"
          >
            Treat gum disease with scaling and root planing. Dr. Karamcheti uses gentle, proven techniques to halt disease and restore your gum health.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ImagePlaceholder label="Deep cleaning and scaling procedure" />
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
            Deep cleaning, or scaling and root planing, is a non-surgical procedure that treats gum disease by removing plaque, tartar, and bacterial toxins from below the gumline and from root surfaces. It's recommended when pockets between teeth and gums exceed 3-4 mm, indicating bone loss. The procedure requires 2-4 appointments, uses local anesthesia for comfort, and is the most effective way to halt gum disease progression. Dr. Karamcheti uses meticulous technique and a gentle approach to help you avoid tooth loss.
          </p>
        </div>
      </motion.section>

      {/* Understanding Gum Disease */}
      <motion.section
        ref={gumDiseaseRef}
        initial="hidden"
        animate={gumDiseaseInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            Understanding Gum Disease
          </motion.h2>

          <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed space-y-6 mb-12">
            <p>
              Gum disease starts with plaque—a sticky film of bacteria that forms on your teeth. If plaque isn't removed by brushing and flossing, it hardens into tartar (also called calculus). Tartar can't be removed by brushing; it requires professional cleaning.
            </p>

            <p>
              When tartar accumulates below the gumline, bacteria spread deeper, triggering inflammation and infection. Your immune system fights back, causing gums to swell, bleed, and eventually pull away from teeth, creating pockets where more bacteria accumulate. Over time, the infection attacks the bone supporting your teeth, causing bone loss.
            </p>

            <p>
              Here's the critical point: once bacteria spread below the gumline and bone loss occurs, regular brushing and flossing can't fix the problem. You need professional intervention—specifically, deep cleaning.
            </p>
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="font-heading text-2xl text-navy mb-6"
          >
            Stages of Gum Disease
          </motion.h3>

          <div className="space-y-4">
            {gumDiseaseStages.map((stage, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-navy mb-2">{stage.name}</h3>
                <p className="text-navy/80 text-base leading-relaxed">{stage.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <p className="text-navy text-base leading-relaxed">
              <strong>Early detection matters:</strong> Gingivitis is reversible with improved oral hygiene and professional cleaning. Once bone loss occurs (periodontitis), the damage is permanent—though deep cleaning can halt progression and allow some healing.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Deep Cleaning vs. Regular Cleaning */}
      <motion.section
        ref={procedureRef}
        initial="hidden"
        animate={procedureInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            Deep Cleaning vs. Regular Cleaning: What's the Difference?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <motion.div variants={cardVariants} className="border-2 border-gold p-6 rounded-lg bg-amber-50">
              <h3 className="text-lg font-semibold text-navy mb-4">Regular Cleaning (Prophylaxis)</h3>
              <ul className="space-y-3 text-navy/80 text-base">
                <li className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>Removes plaque and tartar from above the gumline and slightly below</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>Used for healthy gums with no bone loss</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>Typically takes 30-45 minutes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>No anesthesia needed</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold">•</span>
                  <span>Purely preventive</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={cardVariants} className="border-2 border-sage p-6 rounded-lg bg-blue-50">
              <h3 className="text-lg font-semibold text-navy mb-4">Deep Cleaning (Scaling & Root Planing)</h3>
              <ul className="space-y-3 text-navy/80 text-base">
                <li className="flex gap-2">
                  <span className="text-sage">•</span>
                  <span>Removes plaque and tartar below the gumline and on root surfaces</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sage">•</span>
                  <span>Used to treat existing gum disease and bone loss</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sage">•</span>
                  <span>Requires 2-4 appointments, 45-60 minutes each</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sage">•</span>
                  <span>Uses local anesthesia for comfort</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-sage">•</span>
                  <span>Therapeutic—treats active disease</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.h3
            variants={itemVariants}
            className="font-heading text-2xl text-navy mb-6"
          >
            The Deep Cleaning Procedure: Step-by-Step
          </motion.h3>

          <div className="space-y-4">
            {procedureSteps.map((proc, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-heading font-bold">{proc.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-navy mb-2">{proc.title}</h3>
                    <p className="text-navy/80 text-base leading-relaxed">{proc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dr. Karamcheti's Approach */}
      <motion.section
        ref={recoveryRef}
        initial="hidden"
        animate={recoveryInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Dr. Karamcheti's Gentle Approach to Deep Cleaning
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {karamchetiApproach.map((approach, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{approach.icon}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{approach.title}</h3>
                <p className="text-navy/75 text-sm leading-relaxed">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Recovery & Healing */}
      <motion.section
        initial="hidden"
        animate={preventionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Recovery & Healing After Deep Cleaning
          </motion.h2>

          <div className="space-y-6">
            {recoveryPhase.map((phase, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border-l-4 border-gold bg-amber-50 p-6 rounded-r-lg"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{phase.timeline}</h3>
                <div className="space-y-3">
                  <p className="text-navy/80 text-base">
                    <strong>What to expect:</strong> {phase.what}
                  </p>
                  <p className="text-navy/80 text-base">
                    <strong>Care:</strong> {phase.care}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Important: Don't Give Up During Healing</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              The first 1-2 weeks can feel uncomfortable. Some patients get discouraged and skip their second appointment. Don't—completing all appointments is essential for success. The entire mouth must be treated thoroughly. Dr. Karamcheti will help manage any discomfort.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Preventing Recurrence */}
      <motion.section
        ref={preventionRef}
        initial="hidden"
        animate={preventionInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Preventing Gum Disease Recurrence
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {preventionTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-navy font-semibold text-lg mb-3">{tip.title}</h3>
                <p className="text-navy/75 text-base leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">The Most Important Factor: Smoking</h3>
            <p className="text-navy/80 text-base leading-relaxed mb-4">
              If you smoke, your risk of gum disease returning is extremely high. Smoking impairs healing, suppresses immune function, and masks symptoms. It's the single biggest risk factor for treatment failure. If there was ever a reason to quit smoking, gum disease is it.
            </p>
            <p className="text-navy/80 text-base leading-relaxed">
              Dr. Karamcheti can recommend smoking cessation resources and support. Many patients successfully quit with proper support.
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
        headline="Treat Gum Disease & Save Your Teeth"
        subheadline="Dr. Karamcheti provides gentle, thorough deep cleaning to halt gum disease. Schedule your consultation at Cville Dentist in Charlottesville today."
        buttonText="Request an Appointment"
        buttonLink="/contact"
        variant="navy"
      />
    </div>
  );
}
