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

export default function OralCancerScreeningContent() {
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

  const { ref: riskRef, inView: riskInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: screeningRef, inView: screeningInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: warningRef, inView: warningInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: velscopeRef, inView: velscopeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const riskFactors = [
    {
      factor: "Tobacco Use",
      description:
        "Cigarette smoking is the #1 risk factor. Pipes and cigars carry similar risk. Smokeless tobacco (chewing tobacco, snuff) increases risk of oral cancer in the cheek, gum, and lip. Former smokers reduce their risk over time but remain at elevated risk.",
      percentage: "75%",
    },
    {
      factor: "Alcohol",
      description:
        "Heavy alcohol consumption significantly increases oral cancer risk. The risk multiplies when combined with tobacco use. Even moderate drinking increases risk slightly. Alcohol irritates oral tissue and may increase cell damage susceptibility.",
      percentage: "60%",
    },
    {
      factor: "HPV Infection",
      description:
        "Human papillomavirus (HPV) is sexually transmitted and increasingly linked to oral and throat cancers. HPV-positive cancers tend to be more aggressive but may respond better to treatment. Vaccination can prevent HPV infection.",
      percentage: "35%",
    },
    {
      factor: "Age 50+",
      description:
        "Most oral cancers occur in people age 50 or older. Your cells accumulate damage over decades. However, oral cancer rates are rising in younger people due to HPV. Age alone isn't destiny—preventive measures matter at any age.",
      percentage: "80%",
    },
    {
      factor: "Sun Exposure",
      description:
        "Squamous cell carcinoma of the lip is linked to chronic sun exposure. The lower lip is most vulnerable. Wear sunscreen on your lips (SPF 30+) and limit sun exposure, especially during peak hours.",
      percentage: "40%",
    },
    {
      factor: "Poor Oral Hygiene",
      description:
        "Chronic gum disease and poor oral health increase cancer risk. Bacteria in infected gums release carcinogenic compounds. Regular brushing, flossing, and dental visits reduce risk and catch problems early.",
      percentage: "50%",
    },
    {
      factor: "Genetics & Family History",
      description:
        "If a close family member had oral cancer, your risk is elevated. Some people are genetically predisposed to cell mutations. Genetic testing may be recommended if you have early-onset cancer.",
      percentage: "15%",
    },
    {
      factor: "Previous Cancer Diagnosis",
      description:
        "If you've had oral cancer before, you're at risk for recurrence. If you've had any cancer, your entire oral cavity deserves careful monitoring. More frequent screenings are recommended.",
      percentage: "80%",
    },
  ];

  const warningSigns = [
    {
      sign: "Persistent Sore or Ulcer",
      description:
        "An oral sore that doesn't heal after two weeks is a red flag. Normal ulcers (from food, sharp tooth) usually heal in 7-10 days. A painless or slightly painful lump that persists warrants evaluation.",
      concern: "HIGH",
    },
    {
      sign: "Red or White Patches",
      description:
        "Red or white patches inside your mouth that don't wipe away are concerning. Leukoplakia (white patches) and erythroplakia (red patches) are precancerous. They may not hurt, which makes them easy to ignore.",
      concern: "HIGH",
    },
    {
      sign: "Lump or Thickened Tissue",
      description:
        "Any lump, bump, or area of thickening in your mouth, on your lips, tongue, or inside your cheek should be evaluated. Run your tongue over your mouth and feel with your fingers. Asymmetry is concerning.",
      concern: "HIGH",
    },
    {
      sign: "Pain or Difficulty Swallowing",
      description:
        "Persistent pain when swallowing, especially on one side, can indicate cancer deeper in the throat. You might feel like something is caught in your throat. Pain radiating to your ear is concerning.",
      concern: "MODERATE",
    },
    {
      sign: "Voice Changes or Hoarseness",
      description:
        "Unexplained hoarseness lasting more than two weeks, especially if you don't have a cold, can signal throat cancer. Voice changes might be subtle—your loved ones may notice before you do.",
      concern: "MODERATE",
    },
    {
      sign: "Ear Pain",
      description:
        "Pain referred to the ear from oral/throat cancer is common. If you have ear pain but your ears are fine, your dentist should examine your mouth and throat. This referred pain often accompanies other symptoms.",
      concern: "MODERATE",
    },
    {
      sign: "Jaw Stiffness",
      description:
        "Difficulty opening your mouth fully or stiffness in your jaw can indicate cancer affecting the muscles. Some people describe it as a 'locking' sensation. This often occurs late in disease progression.",
      concern: "MODERATE",
    },
    {
      sign: "Unintended Weight Loss",
      description:
        "Difficulty eating due to pain or swallowing problems leads to weight loss. Unexplained weight loss should prompt evaluation of the entire body, including your mouth and throat.",
      concern: "MODERATE",
    },
  ];

  const screeningProcess = [
    {
      step: "1. Visual Examination",
      description:
        "Dr. Karamcheti examines your lips (inside and outside), cheeks, gums, tongue (top and bottom), the floor of your mouth, and your throat. She looks for any color changes, lumps, bumps, or ulcers. This takes just a few minutes.",
    },
    {
      step: "2. Manual Palpation",
      description:
        "Using gloved fingers, Dr. Karamcheti feels your entire mouth, jaw, and neck for lumps, hardness, or abnormalities. She checks your lymph nodes (both sides of your neck and under your jaw) for swelling.",
    },
    {
      step: "3. VelScope Examination",
      description:
        "Dr. Karamcheti uses the VelScope device—a handheld oral cancer detection device that uses blue wavelength light. Tissue is examined under this light, which highlights subtle changes not visible under normal light. The device takes seconds to use and is completely painless.",
    },
    {
      step: "4. Risk Assessment",
      description:
        "Dr. Karamcheti asks about tobacco use, alcohol consumption, HPV status, family history, and previous cancer diagnoses. She assesses your individual risk and recommends screening frequency accordingly.",
    },
    {
      step: "5. Results & Education",
      description:
        "If everything is normal, Dr. Karamcheti provides reassurance and recommends when to return for your next screening. If anything is concerning, she explains the finding and discusses next steps—which may include biopsy or specialist referral.",
    },
  ];

  const faqItems = [
    {
      question:
        "Should I be screened for oral cancer even if I have no symptoms?",
      answer:
        "Yes, absolutely. Early-stage oral cancer often has no symptoms. By the time you feel pain or notice something wrong, the cancer may be advanced. This is why regular screenings are so important. Even if you have no risk factors, annual screening is recommended. Those with risk factors may need screening every 6 months.",
    },
    {
      question: "Is the VelScope screening uncomfortable?",
      answer:
        "No. The VelScope is a handheld device that uses light to visualize your tissue. There's no pain, no injection, no cutting. You might feel the device touch your mouth gently, but it's completely non-invasive. The screening takes seconds.",
    },
    {
      question:
        "What does it mean if Dr. Karamcheti finds something suspicious?",
      answer:
        "It doesn't automatically mean cancer. Dr. Karamcheti may recommend a biopsy—a small tissue sample is removed and analyzed under a microscope. A biopsy definitively determines if the lesion is benign or malignant. Early treatment of precancerous lesions (before they become cancer) has excellent outcomes.",
    },
    {
      question: "How is an oral cancer biopsy performed?",
      answer:
        "Dr. Karamcheti administers local anesthesia to numb the area. She removes a small tissue sample (usually the size of a pinhead) using a biopsy punch or scalpel. The sample is sent to a pathology lab for analysis. Results usually return within 1-2 weeks. A biopsy is a quick office procedure.",
    },
    {
      question: "Can oral cancer be prevented?",
      answer:
        "Yes, in many cases. Stop smoking and avoid all tobacco products. Limit alcohol. Get vaccinated against HPV if eligible. Practice excellent oral hygiene. Wear SPF 30+ sunscreen on your lips. Eat a diet rich in fruits and vegetables. Reduce stress. These measures significantly decrease your risk.",
    },
    {
      question:
        "If oral cancer is detected, what are the treatment options?",
      answer:
        "Treatment depends on the cancer stage, location, and type. Options include surgical removal, radiation therapy, chemotherapy, or combination treatments. Early-stage cancers often require only surgery. Your oncology team will design a personalized treatment plan. Early detection dramatically improves outcomes.",
    },
    {
      question: "How often should I be screened for oral cancer?",
      answer:
        "Low-risk patients without tobacco/alcohol use and no family history should be screened annually at their regular dental visits. Patients with risk factors (smoking, heavy drinking, HPV, previous cancer, age 50+) may benefit from screening every 6 months. Dr. Karamcheti recommends the appropriate interval for you.",
    },
    {
      question: "Can I develop oral cancer without risk factors?",
      answer:
        "Yes. While tobacco, alcohol, and HPV account for most cases, anyone can develop oral cancer. About 25% of oral cancers occur in people with no traditional risk factors. This is why screening is important for everyone. Don't assume you're safe just because you don't smoke or drink.",
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
          Oral Cancer Screening in Charlottesville
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Early detection of oral cancer saves lives. Dr. Karamcheti screens every patient
          for signs of oral cancer using visual examination and advanced VelScope
          technology. Screening is painless, takes minutes, and is included in every exam.
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
            Oral cancer includes cancers of the lips, tongue, cheeks, floor of the mouth,
            hard and soft palate, sinuses, and throat. When caught early (stage 1), the
            five-year survival rate is 90%. When detected late, this drops to 30%. Many
            early-stage cancers have no symptoms, which is why regular screening is critical.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Dr. Karamcheti screens every patient at their regular dental visits. She
            visually examines your mouth, palpates your jaw and neck, and uses VelScope
            technology to detect changes you can't see. If anything concerning is found,
            she discusses options, which may include biopsy. Screening is painless and
            takes minutes.
          </p>
        </motion.div>
      </motion.section>

      {/* Why Screening Matters */}
      <motion.section
        ref={whyRef}
        initial="hidden"
        animate={whyInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
        >
          Why Oral Cancer Screening Matters
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#7a9e7e]">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4">Early Detection = Survival</h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold text-[#7a9e7e]">90%</p>
                <p className="text-gray-700">
                  Five-year survival rate for early-stage oral cancer
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#c9a84c]">30%</p>
                <p className="text-gray-700">
                  Five-year survival rate for late-stage oral cancer
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed pt-4">
                The difference between early and late detection is enormous. Early-stage
                cancers often require only surgery and have minimal side effects. Late-stage
                cancers may require chemotherapy, radiation, and surgical disfigurement.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#c9a84c]">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4">Most Early Cancers Have No Symptoms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This is the critical insight: you can't detect oral cancer yourself. By the
              time you notice pain, swelling, or bleeding, the cancer is often advanced.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Regular screening by Dr. Karamcheti catches cancer before you feel symptoms.
              Precancerous lesions (which don't require biopsies) are treated before they
              become cancer. This approach saves lives and preserves function.
            </p>
            <p className="text-sm text-gray-600 italic">
              Screening is your best defense against oral cancer.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-red-50 border-2 border-red-300 rounded-lg p-8"
        >
          <h4 className="text-xl font-bold text-red-800 mb-3">The Numbers Are Clear:</h4>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold text-lg">•</span>
              <span>
                Oral cancer kills approximately 13,000 Americans annually (one person every
                hour)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold text-lg">•</span>
              <span>
                Only 50% of oral cancer patients survive five years (any stage combined)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold text-lg">•</span>
              <span>
                Early detection increases this to 90% five-year survival
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600 font-bold text-lg">•</span>
              <span>
                Many Charlottesville residents don't receive regular oral cancer screening
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.section>

      {/* Risk Factors */}
      <motion.section
        ref={riskRef}
        initial="hidden"
        animate={riskInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
          >
            Oral Cancer Risk Factors
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto"
          >
            Anyone can develop oral cancer, but certain factors significantly increase
            risk. Do you have any of these?
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {riskFactors.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-[#faf9f7] to-white rounded-lg p-6 border-2 border-[#7a9e7e] flex items-start gap-4"
              >
                <div className="flex-shrink-0">
                  <p className="text-3xl font-bold text-[#c9a84c]">{item.percentage}</p>
                  <p className="text-xs text-gray-600">increased risk</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-2">{item.factor}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-[#1a2332] text-white rounded-lg p-8"
          >
            <h4 className="text-xl font-bold mb-4">Have Risk Factors? Here's What to Do:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold text-lg">1.</span>
                <span>
                  Schedule screening with Dr. Karamcheti every 6 months (instead of annually)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold text-lg">2.</span>
                <span>
                  If you smoke or chew tobacco, ask Dr. Karamcheti about cessation programs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold text-lg">3.</span>
                <span>
                  Limit alcohol consumption (or eliminate it)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold text-lg">4.</span>
                <span>
                  Ask your doctor about HPV vaccination if you haven't been vaccinated
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a84c] font-bold text-lg">5.</span>
                <span>
                  Wear SPF 30+ sunscreen on your lips year-round
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Warning Signs */}
      <motion.section
        ref={warningRef}
        initial="hidden"
        animate={warningInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
        >
          8 Warning Signs of Oral Cancer
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto"
        >
          If you notice any of these signs, contact Dr. Karamcheti immediately. Don't wait
          for your next regular appointment:
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 gap-6"
        >
          {warningSignsMap.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-lg p-6 border-l-4 ${
                item.concern === "HIGH"
                  ? "bg-red-50 border-red-500"
                  : "bg-yellow-50 border-yellow-500"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-bold text-[#1a2332]">{item.sign}</h3>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded ${
                    item.concern === "HIGH"
                      ? "bg-red-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {item.concern} CONCERN
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-[#1a2332] text-white rounded-lg p-8 text-center"
        >
          <p className="text-lg mb-4">
            <strong>When in doubt, get it checked out.</strong>
          </p>
          <p className="text-gray-300">
            Most of these signs are not cancer—they could be canker sores, infection, or
            other benign conditions. But only Dr. Karamcheti can determine that. Call us
            immediately if you notice anything unusual.
          </p>
        </motion.div>
      </motion.section>

      {/* Screening Process */}
      <motion.section
        ref={screeningRef}
        initial="hidden"
        animate={screeningInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-[#f5f0eb] to-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
          >
            What to Expect: The Screening Process
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-6">
            {screeningProcess.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#c9a84c]"
              >
                <h3 className="text-xl font-bold text-[#1a2332] mb-3">{item.step}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center"
          >
            <p className="text-gray-800 leading-relaxed">
              <strong>Total screening time: 5-10 minutes.</strong> Screening is completely
              painless. You'll feel no discomfort. Dr. Karamcheti integrates screening into
              every regular exam—there's no additional appointment needed.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* VelScope Technology */}
      <motion.section
        ref={velscopeRef}
        initial="hidden"
        animate={velscopeInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
        >
          Advanced VelScope Technology
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8 shadow-md border-2 border-[#7a9e7e]"
          >
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4">What is VelScope?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              VelScope is a handheld oral cancer detection device that uses blue wavelength
              light (405 nm) to examine oral tissue. Under this light, healthy tissue appears
              as a specific shade of green. Abnormal tissue (including precancerous lesions)
              appears darker or shows different fluorescence patterns.
            </p>
            <p className="text-gray-700 leading-relaxed">
              VelScope detects cellular changes that are invisible to the naked eye. This
              allows Dr. Karamcheti to catch lesions earlier than traditional examination
              alone.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-8 shadow-md border-2 border-[#c9a84c]"
          >
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4">VelScope Advantages</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#7a9e7e] font-bold text-lg">✓</span>
                <span className="text-gray-700">
                  <strong>Non-invasive:</strong> Uses light only—no cutting or sampling
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9e7e] font-bold text-lg">✓</span>
                <span className="text-gray-700">
                  <strong>Quick:</strong> Screening takes seconds
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9e7e] font-bold text-lg">✓</span>
                <span className="text-gray-700">
                  <strong>Painless:</strong> No discomfort whatsoever
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9e7e] font-bold text-lg">✓</span>
                <span className="text-gray-700">
                  <strong>Accurate:</strong> Detects subtle changes missed by visual exam
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7a9e7e] font-bold text-lg">✓</span>
                <span className="text-gray-700">
                  <strong>Reassuring:</strong> Provides peace of mind with normal results
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#1a2332] text-white rounded-lg p-8"
        >
          <h4 className="text-xl font-bold mb-4">Why Dr. Karamcheti Uses VelScope:</h4>
          <p className="leading-relaxed mb-4">
            VelScope is the gold standard for oral cancer screening. Studies show it
            increases detection of precancerous lesions by 30-40% compared to visual
            examination alone. In Charlottesville, Dr. Karamcheti is committed to the most
            advanced detection technology.
          </p>
          <p className="text-gray-300">
            For you, this means better protection. For early-stage lesions, it means less
            invasive treatment and better outcomes.
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
            Oral Cancer Screening Questions
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

// Helper mapping
const warningSignsMap = [
  {
    sign: "Persistent Sore or Ulcer",
    description:
      "An oral sore that doesn't heal after two weeks is a red flag. Normal ulcers (from food, sharp tooth) usually heal in 7-10 days. A painless or slightly painful lump that persists warrants evaluation.",
    concern: "HIGH",
  },
  {
    sign: "Red or White Patches",
    description:
      "Red or white patches inside your mouth that don't wipe away are concerning. Leukoplakia (white patches) and erythroplakia (red patches) are precancerous. They may not hurt, which makes them easy to ignore.",
    concern: "HIGH",
  },
  {
    sign: "Lump or Thickened Tissue",
    description:
      "Any lump, bump, or area of thickening in your mouth, on your lips, tongue, or inside your cheek should be evaluated. Run your tongue over your mouth and feel with your fingers. Asymmetry is concerning.",
    concern: "HIGH",
  },
  {
    sign: "Pain or Difficulty Swallowing",
    description:
      "Persistent pain when swallowing, especially on one side, can indicate cancer deeper in the throat. You might feel like something is caught in your throat. Pain radiating to your ear is concerning.",
    concern: "MODERATE",
  },
  {
    sign: "Voice Changes or Hoarseness",
    description:
      "Unexplained hoarseness lasting more than two weeks, especially if you don't have a cold, can signal throat cancer. Voice changes might be subtle—your loved ones may notice before you do.",
    concern: "MODERATE",
  },
  {
    sign: "Ear Pain",
    description:
      "Pain referred to the ear from oral/throat cancer is common. If you have ear pain but your ears are fine, your dentist should examine your mouth and throat. This referred pain often accompanies other symptoms.",
    concern: "MODERATE",
  },
  {
    sign: "Jaw Stiffness",
    description:
      "Difficulty opening your mouth fully or stiffness in your jaw can indicate cancer affecting the muscles. Some people describe it as a 'locking' sensation. This often occurs late in disease progression.",
    concern: "MODERATE",
  },
  {
    sign: "Unintended Weight Loss",
    description:
      "Difficulty eating due to pain or swallowing problems leads to weight loss. Unexplained weight loss should prompt evaluation of the entire body, including your mouth and throat.",
    concern: "MODERATE",
  },
];
