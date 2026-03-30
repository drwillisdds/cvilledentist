"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CTASection from "@/components/CTASection";

const easeArray = [0, 0, 0.2, 1] as const;

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
    transition: { duration: 0.6, ease: easeArray },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easeArray },
  },
};

export default function ToothExtractionsContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whenRef, inView: whenInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: typesRef, inView: typesInView } = useInView({
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

  const { ref: replacementRef, inView: replacementInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const extractionTypes = [
    {
      type: "Simple Extraction",
      icon: "🪥",
      description:
        "Used for teeth visible above the gum line that are loose or have been damaged. The tooth is grasped with forceps and gently rocked back and forth to loosen it from the ligaments holding it in place. Then it's lifted out.",
      characteristics: [
        "Tooth is visible and accessible",
        "Takes 5-15 minutes per tooth",
        "Minimal discomfort",
        "Quick healing",
        "Usually done with local anesthesia only",
      ],
      examples: "Loose adult teeth, severely decayed front teeth, removal for orthodontics",
    },
    {
      type: "Surgical Extraction",
      icon: "🔧",
      description:
        "Required when a tooth is impacted (stuck beneath the gum or bone), severely broken, or has curved roots that won't come out with simple extraction. Dr. Karamcheti may need to open the gum, remove bone, or break the tooth into pieces.",
      characteristics: [
        "Tooth is below gum line or impacted",
        "Takes 15-45 minutes",
        "More tissue involvement",
        "Potential for more swelling",
        "Requires careful aftercare",
        "Often done with sedation for comfort",
      ],
      examples: "Impacted wisdom teeth, fractured tooth roots, severely angled teeth",
    },
  ];

  const procedureSteps = [
    {
      step: "1. Consultation & Evaluation",
      description:
        "You meet with Dr. Karamcheti in Charlottesville to discuss why the extraction is necessary. She examines the tooth, takes X-rays to understand its position and root structure, and assesses your overall oral health. This is when you discuss sedation options and ask questions.",
    },
    {
      step: "2. Anesthesia Administration",
      description:
        "Dr. Karamcheti injects local anesthetic around the tooth. The numbing takes 5-10 minutes. If you're using nitrous oxide or sedation, that's administered now. You remain comfortable and relaxed throughout.",
    },
    {
      step: "3. Tooth Extraction",
      description:
        "For simple extractions, Dr. Karamcheti uses forceps to gently loosen and lift the tooth. For surgical cases, she may open the gum, remove bone, or section the tooth. You'll feel pressure and vibration—never pain. The actual extraction usually takes 5-30 minutes.",
    },
    {
      step: "4. Socket Care & Closure",
      description:
        "After the tooth is removed, the socket is cleaned and any damaged bone smoothed. If needed, Dr. Karamcheti places a bone-preservation graft to maintain your jaw structure. Stitches may be placed and are usually dissolvable.",
    },
    {
      step: "5. Recovery Instructions",
      description:
        "You receive detailed aftercare instructions. Bite on gauze for 30-45 minutes. Take prescribed pain medication if needed. Ice your face in 15-minute intervals. Avoid strenuous activity and eating hard foods. Follow-up appointments monitor healing.",
    },
  ];

  const recoveryTimeline = [
    {
      period: "First 24 Hours",
      key: "Immediate Healing",
      what: "Bleeding may continue for a few hours; bite gauze to help clotting. Take pain medication as prescribed. Apply ice to your face (15 min on, 15 min off). Swelling may start.",
      eat: "Soft foods only: pudding, yogurt, soup, mashed potatoes",
    },
    {
      period: "Days 2-3",
      key: "Swelling Peak",
      what: "Peak swelling usually occurs around day 2-3. Discomfort is manageable with medication. Continue ice for the first 48 hours, then switch to warm compresses. Slight bruising may appear.",
      eat: "Soft, cool foods: ice cream, smoothies, applesauce, scrambled eggs",
    },
    {
      period: "Days 4-7",
      key: "Early Healing",
      what: "Swelling decreases. Discomfort lessens. Return for stitch removal if not dissolvable. Socket begins to close. You can resume gentle rinsing with warm salt water.",
      eat: "Progress to more textured foods: oatmeal, pasta, cooked vegetables, fish",
    },
    {
      period: "Week 2-4",
      key: "Functional Recovery",
      what: "Most patients feel near-normal. You can return to exercise and normal activities. Socket continues healing from inside. Any remaining bruising fades.",
      eat: "Return to normal diet, but avoid extremely hard or sticky foods near the extraction site",
    },
    {
      period: "Month 1-3",
      key: "Bone Healing",
      what: "The socket gradually fills with bone. You may notice a slight depression where the tooth was—this is normal. Jaw function returns completely.",
      eat: "Full normal diet",
    },
  ];

  const replacementOptions = [
    {
      name: "Dental Implant",
      pros: [
        "Looks and functions like a natural tooth",
        "Preserves jaw bone",
        "Lasts 20+ years with care",
        "No special cleaning required",
        "Doesn't affect adjacent teeth",
      ],
      cons: [
        "Higher upfront cost",
        "Requires bone healing time (3-6 months)",
        "Requires adequate bone density",
        "Surgical placement needed",
      ],
      timeline: "Placement at 3-6 months, crown at 6-9 months",
      idealFor: "Patients wanting a permanent, tooth-like solution",
    },
    {
      name: "Dental Bridge",
      pros: [
        "Faster than implants",
        "Preserves more tooth structure than you might think",
        "Good aesthetics",
        "No bone grafting usually needed",
        "Lower cost than implants",
      ],
      cons: [
        "Adjacent teeth must be shaped (they support the bridge)",
        "Bridge eventually needs replacement",
        "Requires special flossing technique",
        "Can look less natural than implants",
      ],
      timeline: "Ready in 2-3 weeks",
      idealFor: "Patients needing quick replacement or with weak adjacent teeth",
    },
    {
      name: "Partial Denture",
      pros: [
        "No adjacent tooth shaping",
        "Removable (easier to clean)",
        "Least expensive option",
        "Can replace multiple teeth",
        "Simple adjustments if needed",
      ],
      cons: [
        "Requires daily removal and cleaning",
        "May feel less natural",
        "Requires adjustment appointments",
        "Can shift during eating",
        "Doesn't preserve bone like implants",
      ],
      timeline: "Ready in 2-3 weeks",
      idealFor: "Patients who prefer removable options or replacing many teeth",
    },
  ];

  const wisdomTeethNote = [
    "Wisdom teeth are often extracted because they're impacted, crowded, causing pain, or prone to decay due to their position at the back of the mouth.",
    "Many people develop wisdom teeth around age 17-21, but they don't always emerge fully or at all.",
    "Dr. Karamcheti has extensive experience removing wisdom teeth. See our dedicated Wisdom Teeth Extraction page for complete information about the process, recovery, and timing.",
  ];

  const faqItems = [
    {
      question: "Why does Dr. Karamcheti always try to save a tooth first?",
      answer:
        "Your natural teeth are almost always better than replacements. They preserve jaw bone, function perfectly, and don't require special maintenance. Extraction is a last resort only when the tooth can't be saved with root canal, a crown, or other treatment. Dr. Karamcheti will present all options before recommending extraction.",
    },
    {
      question: "How much does a tooth extraction cost?",
      answer:
        "Simple extraction costs $75-200 per tooth. Surgical extraction costs $150-500+ depending on complexity. Wisdom teeth extraction typically costs $200-600 each. Dr. Karamcheti discusses costs upfront during your consultation. Many dental insurance plans cover extractions. We also offer payment plans.",
    },
    {
      question: "What if I'm extremely anxious about extraction?",
      answer:
        "Dr. Karamcheti works with anxious patients regularly. Options include nitrous oxide (laughing gas) for mild relaxation, oral sedation for deeper relaxation while remaining conscious, or IV sedation for the most anxious patients. You can discuss your specific fears during your consultation, and she'll recommend the best approach.",
    },
    {
      question: "Can I have multiple teeth extracted at once?",
      answer:
        "Yes. Dr. Karamcheti can extract multiple teeth in one appointment. However, extracting too many at once increases swelling and recovery time. She'll discuss the best plan—perhaps spacing multiple extractions into two or three appointments—based on your situation.",
    },
    {
      question: "When can I resume exercise and normal activities?",
      answer:
        "Light activities can resume after a few days. Avoid strenuous exercise and heavy lifting for 1 week—this increases blood pressure and can disturb the healing socket. Return to normal exercise after 1-2 weeks depending on how you feel. Dr. Karamcheti will give you specific guidance.",
    },
    {
      question: "Is dry socket a common problem?",
      answer:
        "Dry socket (when the blood clot dislodges) affects about 5% of extractions. It's more common after wisdom tooth extraction, in smokers, and if you don't follow aftercare instructions. It causes throbbing pain and bad taste. Dr. Karamcheti will teach you how to avoid it and treat it quickly if it occurs.",
    },
    {
      question: "Can I smoke after extraction?",
      answer:
        "You should avoid smoking for at least 5-7 days, ideally longer. Smoking impairs healing, increases infection risk, and significantly increases dry socket risk. Talk to Dr. Karamcheti about smoking cessation resources if you need help.",
    },
    {
      question: "What's the best tooth replacement—implant, bridge, or denture?",
      answer:
        "Implants are ideal because they preserve bone and function like natural teeth. However, they're pricier and require 6 months of healing. Bridges are faster and less expensive but require shaping adjacent teeth. Dentures are cheapest but require daily care. Dr. Karamcheti recommends implants when possible but respects your preferences and budget.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-[#1a2332] to-[#2a3d4a] py-24 px-6 md:px-12 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-white font-display mb-6"
        >
          Tooth Extractions in Charlottesville VA
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          When a tooth can't be saved, Dr. Karamcheti performs gentle extractions with
          expertise and care. She uses advanced techniques to minimize discomfort and
          promote fast healing. Whether it's a simple extraction or surgical removal,
          you're in capable hands.
        </motion.p>
      </motion.section>

      {/* Quick Answer Block */}
      <motion.section
        ref={answerRef}
        initial="hidden"
        animate={answerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-4xl mx-auto px-6 md:px-12 py-16"
      >
        <motion.div
          variants={itemVariants}
          className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] rounded-lg p-8"
        >
          <h2 className="text-lg font-bold text-[#c9a84c] mb-4">Quick Answer</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Tooth extraction becomes necessary when a tooth is severely decayed, infected,
            damaged beyond repair, or causing problems (like impacted wisdom teeth). Dr.
            Karamcheti always explores saving the tooth first through root canal treatment,
            crown restoration, or other methods. Only when these aren't viable does she
            recommend extraction.
          </p>
          <p className="text-gray-800 leading-relaxed">
            You'll experience no pain during the procedure—local anesthesia ensures comfort.
            Recovery typically takes 1-2 weeks, with swelling peaking around day 2-3. Most
            patients return to work within 1-2 days. After extraction, you have replacement
            options: dental implants (best long-term), bridges, or dentures.
          </p>
        </motion.div>
      </motion.section>

      {/* When Extraction is Necessary */}
      <motion.section
        ref={whenRef}
        initial="hidden"
        animate={whenInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4"
        >
          When is Extraction Necessary?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg mb-12 leading-relaxed"
        >
          Dr. Karamcheti believes in saving natural teeth whenever possible. But in these
          situations, extraction becomes the best choice:
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: "Severe Decay",
              description:
                "When a cavity is so deep it reaches the pulp and root canal treatment isn't feasible or has already failed, the tooth can't be saved. Extraction prevents the infection from spreading to adjacent teeth or bone.",
            },
            {
              title: "Advanced Gum Disease",
              description:
                "Periodontitis can destroy the bone supporting a tooth. If the tooth becomes too loose and affects your bite or health, extraction is necessary. Dr. Karamcheti treats gum disease aggressively to avoid reaching this point.",
            },
            {
              title: "Impacted Wisdom Teeth",
              description:
                "Wisdom teeth that grow at angles or become trapped below the gum cause pain, crowding, and decay. Dr. Karamcheti removes them to protect your bite and the teeth around them.",
            },
            {
              title: "Fractured or Broken Teeth",
              description:
                "A tooth broken below the gum line or split vertically can't be repaired. If the fracture extends to the root, extraction is the only option. Dr. Karamcheti assesses if a crown might save the tooth first.",
            },
            {
              title: "Orthodontic Crowding",
              description:
                "Sometimes extracting one or two teeth creates the space needed for Invisalign or braces to straighten your bite. Dr. Karamcheti coordinates with your orthodontist to determine the best approach.",
            },
            {
              title: "Root Damage or Infection",
              description:
                "If a root is severely curved, broken, or infected and root canal treatment hasn't worked, extraction prevents ongoing pain and infection. This is truly a last resort after exploring all other options.",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={cardVariants} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Extraction Types */}
      <motion.section
        ref={typesRef}
        initial="hidden"
        animate={typesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12"
          >
            Two Types of Extraction
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-8">
            {extractionTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-2 border-[#7a9e7e] rounded-lg p-8 bg-gradient-to-br from-[#faf9f7] to-white"
              >
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-4xl">{type.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a2332] mb-2">{type.type}</h3>
                    <p className="text-gray-700 leading-relaxed">{type.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-4">Characteristics:</h4>
                    <ul className="space-y-2">
                      {type.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#c9a84c] font-bold mt-1">•</span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-4">Common Examples:</h4>
                    <p className="text-gray-700 bg-[#f5f0eb] rounded p-4">{type.examples}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Wisdom Teeth Note */}
      <motion.section
        initial="hidden"
        animate={typesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-12"
      >
        <motion.div
          variants={itemVariants}
          className="bg-[#7a9e7e] bg-opacity-10 border-2 border-[#7a9e7e] rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-[#1a2332] mb-4">About Wisdom Teeth Extraction</h3>
          <div className="space-y-4 text-gray-800">
            {wisdomTeethNote.map((note, i) => (
              <p key={i} className="leading-relaxed">
                {note}
              </p>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="/general-dentistry-charlottesville/wisdom-teeth"
              className="inline-block bg-[#7a9e7e] text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-all"
            >
              Learn More About Wisdom Teeth Extraction →
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* What to Expect - Procedure */}
      <motion.section
        ref={procedureRef}
        initial="hidden"
        animate={procedureInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-[#f5f0eb] to-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
          >
            What to Expect: The Extraction Procedure
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto"
          >
            Dr. Karamcheti walks you through every step. You're in control—ask questions
            anytime. Here's what typically happens:
          </motion.p>

          <motion.div variants={containerVariants} className="space-y-6">
            {procedureSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 border-l-4 border-[#c9a84c] shadow-md"
              >
                <h3 className="text-xl font-bold text-[#1a2332] mb-3">{step.step}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-[#1a2332] text-white rounded-lg p-8 text-center"
          >
            <p className="text-lg mb-4">
              Total time for the appointment is typically 30-60 minutes, depending on the
              complexity of the extraction.
            </p>
            <p className="text-gray-300">
              You won't drive home if you've used sedation. Arrange for a trusted friend or
              family member to drive you and stay with you for the rest of the day.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Recovery Timeline */}
      <motion.section
        ref={recoveryRef}
        initial="hidden"
        animate={recoveryInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
        >
          Recovery Timeline: What Happens Day by Day
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-6">
          {recoveryTimeline.map((timeline, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-md border-t-4 border-[#7a9e7e]"
            >
              <div className="bg-[#7a9e7e] text-white px-6 py-4">
                <h3 className="text-xl font-bold">{timeline.period}</h3>
                <p className="text-sm opacity-90">{timeline.key}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-3">What to Expect:</h4>
                    <p className="text-gray-700 leading-relaxed">{timeline.what}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a2332] mb-3">What to Eat:</h4>
                    <p className="text-gray-700 leading-relaxed">{timeline.eat}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8"
        >
          <h4 className="font-bold text-[#1a2332] mb-3 text-lg">Key Aftercare Tips:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Bite on gauze:</strong> For 30-45 minutes to help the blood clot form
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Ice first 48 hours:</strong> Then switch to warm compresses to reduce swelling
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Soft foods only:</strong> For the first week—avoid hot, crunchy, or hard foods
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Take medication:</strong> Pain relievers and antibiotics as prescribed
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Rest:</strong> Avoid strenuous activity for 1 week; light activity after 3-5 days
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">✓</span>
              <span>
                <strong>Rinse carefully:</strong> After 24 hours, gentle salt water rinses promote healing
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Replacement Options */}
      <motion.section
        ref={replacementRef}
        initial="hidden"
        animate={replacementInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
          >
            After Extraction: Tooth Replacement Options
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto"
          >
            Leaving a gap after extraction can cause neighboring teeth to shift and affect
            your bite. Dr. Karamcheti recommends replacement. Here are your options:
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-8">
            {replacementOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#faf9f7] to-white rounded-lg p-8 border-2 border-[#7a9e7e]"
              >
                <h3 className="text-2xl font-bold text-[#1a2332] mb-6">{option.name}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold text-[#7a9e7e] mb-4 text-lg">Advantages:</h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#7a9e7e] font-bold text-lg">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#c9a84c] mb-4 text-lg">Considerations:</h4>
                    <ul className="space-y-2">
                      {option.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#c9a84c] font-bold">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f5f0eb] rounded p-4 border border-[#c9a84c]">
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Timeline:</p>
                    <p className="text-gray-800">{option.timeline}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-semibold">Best For:</p>
                    <p className="text-gray-800">{option.idealFor}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-[#1a2332] text-white rounded-lg p-8"
          >
            <h4 className="text-xl font-bold mb-4">Dr. Karamcheti's Recommendation:</h4>
            <p className="leading-relaxed mb-4">
              Dental implants are the gold standard. They preserve bone, last 20+ years, and
              feel exactly like a natural tooth. The downside is cost and waiting 6+ months
              for healing. But they're worth it for the long-term health of your jaw and
              neighboring teeth.
            </p>
            <p className="text-gray-300">
              If implants aren't right for you, bridges are excellent alternatives with faster
              timelines. Dentures are the most affordable but require daily care and eventual
              replacement. Dr. Karamcheti will discuss all options and help you choose what's
              best for your needs and budget.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-[#f5f0eb] to-white py-20 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
          >
            Extraction Questions Answered
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#c9a84c] flex items-between justify-between"
                >
                  <h3 className="text-lg font-bold text-[#1a2332]">{item.question}</h3>
                  <span className="text-[#c9a84c] font-bold text-xl">
                    {expandedFaq === index ? "−" : "+"}
                  </span>
                </button>

                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: easeArray }}
                    className="bg-[#f5f0eb] rounded-b-lg p-6 text-gray-700 leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
