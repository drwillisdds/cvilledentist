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

export default function RootCanalContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: mythRef, inView: mythInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whenRef, inView: whenInView } = useInView({
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

  const { ref: crownRef, inView: crownInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const painMythPoints = [
    {
      myth: "Root canals are the most painful dental procedure",
      truth:
        "Modern root canal treatment is no more painful than a filling. Local anesthesia numbs the tooth completely. The pain you felt before root canal (from the infected tooth) is far worse than the treatment itself. After treatment, the pain goes away.",
      relief: "Relief comes immediately after treatment ends",
    },
    {
      myth: "The pain during root canal is unbearable",
      truth:
        "You won't feel pain. You'll feel vibration and pressure from the instruments, but no sharp pain. If you do feel pain during treatment, Dr. Karamcheti can increase anesthesia immediately. Your comfort is paramount.",
      relief: "Modern anesthesia is extremely effective",
    },
    {
      myth: "Root canals hurt for weeks after",
      truth:
        "Minor soreness lasting 1-2 days is normal, not unbearable pain. Most patients manage discomfort with over-the-counter pain relievers. Many patients feel fine within 24 hours. Severe pain after root canal suggests a complication—contact Dr. Karamcheti.",
      relief: "Pain resolves quickly with proper aftercare",
    },
    {
      myth: "I'd rather have the tooth extracted",
      truth:
        "A natural tooth, even after root canal, is superior to any replacement. Extractions cause bone loss and require replacement therapy (implant, bridge, denture). These alternatives are more costly, take longer, and function less naturally. Save your tooth when possible.",
      relief: "Your natural tooth is always preferable",
    },
  ];

  const warningSign = [
    {
      sign: "Severe Pain When Chewing",
      description:
        "Intense pain when biting down or chewing suggests nerve inflammation or infection. The tooth is painful to touch. This is often the first sign that root canal is needed.",
    },
    {
      sign: "Sensitivity to Hot/Cold That Lingers",
      description:
        "If tooth sensitivity to temperature lingers long after the stimulus is removed (not immediate), it suggests nerve damage. Normal sensitivity is brief; this is persistent.",
    },
    {
      sign: "Discoloration or Graying",
      description:
        "A tooth that darkens, becomes grayish, or appears discolored suggests the nerve is dying. The tooth essentially becomes 'bruised' internally.",
    },
    {
      sign: "Swelling in Surrounding Gum",
      description:
        "A pimple-like bump on the gum above a painful tooth indicates infection. The bump may drain pus. This is a sign of an abscessed tooth that needs immediate root canal treatment.",
    },
    {
      sign: "Jaw Swelling or Fever",
      description:
        "Swelling in your jaw, face, or neck; fever; or feeling ill suggests infection has spread. This is serious and requires urgent treatment.",
    },
  ];

  const procedureSteps = [
    {
      step: "1. Diagnosis & Imaging",
      description:
        "You describe your symptoms. Dr. Karamcheti performs tests (thermal sensitivity, percussion) to assess which tooth is problematic. She takes digital X-rays and may take a 3D CBCT image to visualize the tooth roots precisely. This imaging ensures accurate treatment.",
    },
    {
      step: "2. Anesthesia",
      description:
        "Dr. Karamcheti injects local anesthetic to numb the tooth and surrounding area. The numbing takes 5-10 minutes. You remain completely awake but feel no pain. If you're anxious, discuss sedation options—nitrous oxide or oral sedation is available.",
    },
    {
      step: "3. Access & Rubber Dam",
      description:
        "Dr. Karamcheti places a rubber dam around your tooth. This keeps the area dry and prevents instruments from entering your throat. It also isolates the tooth so bacteria can't contaminate the treated tooth. The rubber dam is comfortable and ensures safety.",
    },
    {
      step: "4. Pulp Removal & Cleaning",
      description:
        "Using small instruments, Dr. Karamcheti removes the infected/inflamed pulp from the crown and roots. She then cleans, disinfects, and shapes the inside of the tooth, including the root canals. This process is methodical and careful—no rushing.",
    },
    {
      step: "5. Disinfection & Medication",
      description:
        "The cleaned canals are rinsed with antimicrobial solutions. Dr. Karamcheti may place medication inside the tooth to ensure complete disinfection. If the tooth is severely infected, she may wait a week before filling it, allowing the infection to fully resolve.",
    },
    {
      step: "6. Root Canal Filling",
      description:
        "Once the tooth is clean and free of infection, Dr. Karamcheti fills the root canals with gutta-percha (a biocompatible rubber material) and sealer. The canals are filled from the tip of the root to the crown, completely sealing the space. This prevents re-infection.",
    },
    {
      step: "7. Core Buildup & Temporary Restoration",
      description:
        "The access hole is filled with composite resin or a core buildup material. Dr. Karamcheti places a temporary crown or filling to protect the tooth until your permanent restoration is ready. The tooth is now stable and free of pain.",
    },
  ];

  const recoveryTimeline = [
    {
      period: "First 24 Hours",
      what: "Minor sensitivity or soreness is normal. The tooth was traumatized during treatment, even though nothing painful happened during the procedure. Take over-the-counter pain relievers if needed. Avoid chewing on the treated tooth.",
      avoid: "Avoid hard foods; stick to soft foods",
    },
    {
      period: "Days 2-7",
      what: "Sensitivity typically resolves. The tooth no longer hurts when pressure is applied (which it did before treatment). You can return to normal eating and activities. Continue taking pain relievers only if needed.",
      avoid: "Avoid very hot foods and drinks that might irritate the temporary filling",
    },
    {
      period: "Week 2-4",
      what: "The tooth feels completely normal. You're ready for the permanent crown. Dr. Karamcheti removes the temporary restoration and places the final crown. The tooth is now fully restored and protected.",
      avoid: "Avoid waiting too long for the crown—protect the treated tooth",
    },
  ];

  const crownImportance = [
    {
      point: "Without a crown, your treated tooth is vulnerable to re-fracture under normal chewing pressure.",
      explanation:
        "Root canal treatment removes the nerve, which is a vital part of the tooth's sensory feedback system. Without the nerve, you don't feel micro-stress warning signals. The tooth becomes brittle. A crown protects it like armor.",
    },
    {
      point: "A crown prevents new bacterial infection from entering the treated root canals.",
      explanation:
        "Saliva and bacteria can leak around temporary restorations. A sealed crown prevents this leakage. Without a crown, your carefully cleaned and filled root canals can become re-infected.",
    },
    {
      point: "A crowned tooth can last 15-20+ years; without a crown, re-treatment is likely within 5 years.",
      explanation:
        "A protected tooth remains strong and functional. Uncrowned teeth frequently require re-treatment or extraction. The initial cost of a crown is far less than the cost of a failed tooth and subsequent treatment.",
    },
    {
      point: "A crown restores full function and appearance.",
      explanation:
        "A temporary filling is temporary—it eventually wears away. A crown is durable, looks natural, and functions like a real tooth. You can eat anything without worry.",
    },
  ];

  const faqItems = [
    {
      question: "Why can't I just extract the tooth instead of doing root canal?",
      answer:
        "You can extract the tooth, but you'll lose a natural tooth that's still functional. This triggers a cascade of problems: bone under the missing tooth resorbs (shrinks), neighboring teeth shift, your bite changes, and you need replacement therapy (implant, bridge, or denture). These are more expensive, less functional, and more invasive than root canal treatment. Always save a natural tooth when possible.",
    },
    {
      question:
        "Can I get a root canal from a general dentist or do I need a specialist?",
      answer:
        "Dr. Karamcheti, a general dentist, performs most root canals successfully. Simple cases are ideal for general dentistry. Complex cases (severely curved roots, calcified canals, previous treatment failure) may be referred to an endodontist (root canal specialist). Dr. Karamcheti discusses this with you upfront.",
    },
    {
      question: "How much does a root canal cost?",
      answer:
        "A root canal typically costs $800-1500 depending on the tooth and complexity. Front teeth are simpler (lower cost). Molars have multiple roots and cost more. Dr. Karamcheti discusses cost upfront. Most dental insurance covers 70-80% of root canal treatment. A crown after root canal costs an additional $1000-1500.",
    },
    {
      question: "Can a tooth need root canal treatment again?",
      answer:
        "Yes, but it's uncommon (5-10% of treated teeth). Re-treatment is needed if the initial treatment failed, new infection developed, or new trauma occurred. If re-treatment is necessary, Dr. Karamcheti can usually retreat the tooth before referral to a specialist becomes necessary.",
    },
    {
      question: "What if I have no symptoms? Do I need root canal?",
      answer:
        "Sometimes a tooth needs root canal even without pain. Dr. Karamcheti identifies this through testing and imaging. For example, a tooth with a deep cavity might have a dying nerve without obvious pain yet. Early treatment prevents emergency pain later and has better outcomes.",
    },
    {
      question: "Can I drive home after root canal?",
      answer:
        "Yes, if you only had local anesthesia. If you took oral sedation or nitrous oxide, you can't drive. You'll need someone to pick you up. Most root canals use local anesthesia only, so you can drive yourself home.",
    },
    {
      question: "How long after root canal can I return to work or exercise?",
      answer:
        "Most patients return to work the next day. Light exercise can resume after 3-5 days. Avoid strenuous exercise for a full week. The tooth may be slightly sensitive during chewing—this is normal and temporary. Within a week, the tooth feels completely normal.",
    },
    {
      question:
        "What if I have a root canal but delay getting a crown? Is that okay?",
      answer:
        "No. Your temporary restoration will eventually wear away or break, exposing the treated tooth. This allows bacteria to re-infect the root canals, causing the problem to return. Schedule your crown as soon as Dr. Karamcheti recommends it—typically 1-4 weeks after root canal.",
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
          Root Canal Treatment in Charlottesville VA
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          An infected or dying tooth causes real pain. Root canal treatment saves your
          natural tooth and eliminates that pain. Modern root canal therapy is comfortable,
          effective, and performed by Dr. Karamcheti using advanced digital imaging.
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
            Root canal treatment removes infected or inflamed nerve tissue from inside your
            tooth, disinfects and seals the space, and saves the tooth from extraction. The
            procedure is no more painful than a filling. Anesthesia prevents pain entirely.
            Most patients feel relief immediately after treatment—the severe pain they felt
            before is gone.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Dr. Karamcheti uses modern techniques, digital imaging to visualize root canals
            precisely, and meticulous care to ensure success. After root canal, your tooth
            is restored with a crown for long-term protection and function.
          </p>
        </motion.div>
      </motion.section>

      {/* The Root Canal Pain Myth */}
      <motion.section
        ref={mythRef}
        initial="hidden"
        animate={mythInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
        >
          Let's Debunk the Root Canal Pain Myth
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg mb-12 leading-relaxed text-center max-w-2xl mx-auto"
        >
          Root canals have a reputation for being agonizing. This reputation is outdated
          and inaccurate. Modern root canal treatment is actually quite comfortable:
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="space-y-6"
        >
          {painMythPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#7a9e7e]"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl font-bold text-red-500">✗</span>
                <h3 className="text-xl font-bold text-[#1a2332]">{item.myth}</h3>
              </div>
              <div className="ml-12">
                <p className="text-gray-700 leading-relaxed mb-4">{item.truth}</p>
                <p className="text-sm bg-blue-50 border-l-2 border-blue-400 p-3 text-gray-700">
                  <strong>Reality:</strong> {item.relief}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-[#1a2332] text-white rounded-lg p-8"
        >
          <p className="text-lg leading-relaxed">
            <strong>The actual truth:</strong> The pain you feel before root canal (from the
            infected tooth) is far worse than any discomfort during treatment. Most patients
            report feeling <strong>relief</strong> once Dr. Karamcheti begins treating the
            infected tooth. The treatment itself is routine and manageable.
          </p>
        </motion.div>
      </motion.section>

      {/* When is Root Canal Needed */}
      <motion.section
        ref={whenRef}
        initial="hidden"
        animate={whenInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
          >
            When is Root Canal Treatment Needed?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto"
          >
            Your tooth's nerve (pulp) becomes infected or inflamed in these situations:
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {[
              {
                cause: "Deep Decay",
                description:
                  "A cavity that extends deep into the tooth eventually reaches the pulp. Bacteria invade, causing infection and pain.",
              },
              {
                cause: "Repeated Dental Work",
                description:
                  "Multiple fillings, crowns, or procedures on the same tooth can irritate the pulp. The nerve gradually weakens and dies.",
              },
              {
                cause: "Trauma or Crack",
                description:
                  "A tooth fractured from impact, a fall, or biting on hard objects exposes the nerve. Even a small crack can let bacteria in.",
              },
              {
                cause: "Severe Grinding or Clenching",
                description:
                  "Chronic grinding (bruxism) can stress the tooth enough to damage the nerve. The nerve doesn't recover; root canal becomes necessary.",
              },
              {
                cause: "Large Filling or Crown",
                description:
                  "A large restoration that removes significant tooth structure can irritate the nerve. Sometimes symptoms appear years later.",
              },
              {
                cause: "Gum Disease",
                description:
                  "Advanced periodontal disease that reaches the root apex can infect the nerve. The infection must be treated with root canal.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={cardVariants} className="bg-[#faf9f7] rounded-lg p-6 border-2 border-[#7a9e7e]">
                <h3 className="text-lg font-bold text-[#1a2332] mb-3">{item.cause}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8"
          >
            <h4 className="text-xl font-bold text-yellow-900 mb-4">5 Warning Signs You May Need Root Canal:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {warningSign.map((item, index) => (
                <div key={index} className="bg-white rounded p-4 border-l-4 border-yellow-400">
                  <p className="font-bold text-[#1a2332] mb-2">{item.sign}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Procedure */}
      <motion.section
        ref={procedureRef}
        initial="hidden"
        animate={procedureInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
        >
          The Root Canal Procedure: Step by Step
        </motion.h2>

        <motion.div variants={containerVariants} className="space-y-6">
          {procedureSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#c9a84c]"
            >
              <h3 className="text-xl font-bold text-[#1a2332] mb-3">{step.step}</h3>
              <p className="text-gray-700 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-[#1a2332] to-[#2a3d4a] text-white rounded-lg p-8 text-center"
        >
          <p className="text-lg mb-2">
            <strong>Total time:</strong> 45 minutes to 2 hours
          </p>
          <p className="text-gray-200">
            The time depends on the tooth and number of roots. Front teeth are faster. Molars
            take longer. Dr. Karamcheti takes her time to ensure thorough disinfection and
            proper sealing.
          </p>
        </motion.div>
      </motion.section>

      {/* Recovery & Aftercare */}
      <motion.section
        ref={recoveryRef}
        initial="hidden"
        animate={recoveryInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-[#f5f0eb] to-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
          >
            Recovery & Aftercare
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-6 mb-12">
            {recoveryTimeline.map((timeline, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-md border-t-4 border-[#7a9e7e]"
              >
                <div className="bg-[#7a9e7e] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">{timeline.period}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#1a2332] mb-3">What to Expect:</h4>
                      <p className="text-gray-700 leading-relaxed">{timeline.what}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a2332] mb-3">What to Avoid:</h4>
                      <p className="text-gray-700 leading-relaxed">{timeline.avoid}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8"
          >
            <h4 className="font-bold text-[#1a2332] mb-4 text-lg">Aftercare Tips:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Take pain relievers:</strong> Ibuprofen or acetaminophen manage mild
                  soreness. Don't wait until pain is severe—stay ahead of it.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Avoid chewing on the treated tooth:</strong> Until the crown is placed,
                  use the other side of your mouth for chewing.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Don't delay the crown:</strong> Schedule the crown appointment soon. The
                  temporary filling wears away; the crown protects the tooth.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span>
                  <strong>Contact Dr. Karamcheti if pain worsens:</strong> Severe pain after root
                  canal suggests a complication. Call immediately if pain increases beyond day 1.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Crown After Root Canal */}
      <motion.section
        ref={crownRef}
        initial="hidden"
        animate={crownInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
        >
          Why You Need a Crown After Root Canal
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto"
        >
          Many patients ask: "Why do I need a crown? Can't I just seal the tooth with a
          filling?" The answer is no. Here's why:
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="space-y-6 mb-12"
        >
          {crownImportance.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#c9a84c]"
            >
              <h3 className="text-lg font-bold text-[#1a2332] mb-3">{item.point}</h3>
              <p className="text-gray-700 leading-relaxed text-sm">{item.explanation}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#1a2332] text-white rounded-lg p-8"
        >
          <h4 className="text-xl font-bold mb-4">Dr. Karamcheti's Recommendation:</h4>
          <p className="leading-relaxed mb-4">
            A crown is not optional after root canal—it's essential. The cost of a crown is
            far less than the cost of a failed tooth needing re-treatment or extraction.
            Schedule your crown appointment within 2-4 weeks of your root canal.
          </p>
          <p className="text-gray-300">
            At Willis & Associates in Charlottesville, Dr. Karamcheti coordinates your root
            canal and crown seamlessly, ensuring your tooth is fully restored and protected.
          </p>
        </motion.div>
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
            Root Canal Questions Answered
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
