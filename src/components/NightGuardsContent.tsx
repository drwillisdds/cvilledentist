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

export default function NightGuardsContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: signsRef, inView: signsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: bruxismRef, inView: bruxismInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: customVsRef, inView: customVsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: procesRef, inView: procesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: carRef, inView: carInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const signsOfGrinding = [
    {
      icon: "😴",
      title: "Morning Jaw Pain or Soreness",
      description:
        "Waking up with a sore jaw, stiffness, or pain is the most common sign. Your jaw muscles are fatigued from clenching overnight.",
    },
    {
      icon: "🤕",
      title: "Headaches or Migraines",
      description:
        "Tension headaches in the morning or persistent throughout the day often stem from jaw muscle tension and grinding force.",
    },
    {
      icon: "🦷",
      title: "Worn or Flattened Teeth",
      description:
        "Your back molars show visible wear—cusps flattened, surfaces sanded down. This is a clear sign of grinding force.",
    },
    {
      icon: "⚙️",
      title: "Grinding or Clenching Sounds",
      description:
        "Your partner may hear grinding, clicking, or popping sounds from your jaw at night. The sounds can be quite loud.",
    },
    {
      icon: "🔴",
      title: "Fractured or Chipped Teeth",
      description:
        "Teeth that suddenly chip or crack, especially on the chewing surfaces, may indicate heavy grinding pressure.",
    },
    {
      icon: "😖",
      title: "TMJ Pain and Dysfunction",
      description:
        "Pain in the temporomandibular joint (where your jaw connects), clicking jaw, or trouble opening your mouth fully.",
    },
    {
      icon: "👂",
      title: "Ear Pain or Fullness",
      description:
        "Referred pain from jaw tension can cause ear pain or a sensation of fullness without actual ear problems.",
    },
    {
      icon: "💤",
      title: "Poor Sleep Quality",
      description:
        "Grinding and clenching cause sleep disruption. You wake multiple times or feel unrested despite hours in bed.",
    },
  ];

  const bruxismFactors = [
    {
      category: "Stress & Anxiety",
      description:
        "Daily work stress, financial worries, relationship concerns, or major life changes trigger muscle tension and jaw clenching. Charlottesville residents often experience academic and professional pressure.",
      factor: "Psychological",
    },
    {
      category: "Sleep Disorders",
      description:
        "Sleep apnea, insomnia, restless leg syndrome, and other sleep disruptions are strongly linked to bruxism. Poor sleep quality increases grinding frequency.",
      factor: "Medical",
    },
    {
      category: "Caffeine & Alcohol",
      description:
        "High caffeine intake (coffee, energy drinks, tea) before bed stimulates the nervous system. Alcohol disrupts sleep quality and can trigger grinding.",
      factor: "Lifestyle",
    },
    {
      category: "Medications",
      description:
        "Certain antidepressants and stimulant medications can cause or worsen bruxism as a side effect. Talk to your doctor if you notice grinding after starting a new medication.",
      factor: "Medical",
    },
    {
      category: "Malocclusion (Bad Bite)",
      description:
        "Misaligned teeth force your jaw to work harder. Grinding increases as your jaw tries to find a comfortable position. Invisalign can help correct this.",
      factor: "Dental",
    },
    {
      category: "Muscle Tension",
      description:
        "Chronic tension in your neck, shoulders, and head radiates to your jaw. Poor posture, especially from desk work, amplifies grinding.",
      factor: "Postural",
    },
    {
      category: "Genetics",
      description:
        "Bruxism tends to run in families. If a parent grinded their teeth, you're more likely to develop the habit.",
      factor: "Genetic",
    },
  ];

  const guardComparison = [
    {
      type: "Store-Bought Boil-and-Bite Guard",
      construction: "One-size-fits-all thermoplastic material you soften in hot water and mold with your teeth",
      fit: "Loose, inconsistent fit; creates uncomfortable bulk in your mouth",
      comfort: "Often uncomfortable; bulky; can shift or fall out during sleep",
      durability: "1-2 years (wears out quickly from heavy grinding)",
      costPerYear: "High cost per year despite low initial price",
      effectiveness: "Moderate protection; uneven force distribution",
      adjustment: "No professional adjustments available",
    },
    {
      type: "Custom Guard by Dr. Karamcheti",
      construction: "Fabricated in a lab using your exact digital impressions; precision-engineered",
      fit: "Perfect fit; custom contoured to your teeth and jaw",
      comfort: "Comfortable and slim; minimal adjustment period",
      durability: "5-10 years with proper care",
      costPerYear: "Lower cost per year due to longevity",
      effectiveness: "Superior protection; even force distribution; protects teeth and jaw",
      adjustment: "Professional adjustments at your 6-month checkups",
    },
  ];

  const creationProcess = [
    {
      step: "1. Consultation & Assessment",
      description:
        "Dr. Karamcheti asks about your symptoms, sleep quality, stress levels, and family history. She examines your teeth for wear patterns, jaw pain, and TMJ function. Digital X-rays help visualize your bite and jaw structure.",
    },
    {
      step: "2. Digital Impressions",
      description:
        "Using advanced digital scanning technology, Dr. Karamcheti creates a precise 3D model of your teeth and jaw. No uncomfortable alginate impression—just a quick scan. Instant, accurate impressions that adjust for your specific bite.",
    },
    {
      step: "3. Guard Design",
      description:
        "Dr. Karamcheti designs your custom guard using the digital model. She adjusts thickness, material hardness, and occlusal balance to distribute grinding force evenly across all teeth and protect your jaw joints.",
    },
    {
      step: "4. Lab Fabrication",
      description:
        "Your design is sent to a specialized dental lab where your guard is fabricated. They use premium materials and precision equipment to create a guard that fits perfectly and lasts years.",
    },
    {
      step: "5. Try-In & Adjustment",
      description:
        "Your guard arrives at our Charlottesville office. Dr. Karamcheti ensures proper fit, checks your bite, and makes any needed adjustments. She shows you how to insert, remove, and care for your guard.",
    },
  ];

  const guardTypes = [
    {
      name: "Soft Guard",
      material: "Flexible thermoplastic material",
      best: "Mild to moderate grinders; patients who want maximum comfort",
      feel: "Cushioning sensation; most comfortable",
      durability: "3-5 years",
    },
    {
      name: "Hard Guard",
      material: "Rigid acrylic material",
      best: "Heavy grinders; patients needing maximum protection",
      feel: "Firmer; takes slight adjustment period",
      durability: "7-10 years",
    },
    {
      name: "Hybrid Guard",
      material: "Combination of hard and soft materials",
      best: "Most patients; balances comfort and protection",
      feel: "Hard exterior with soft lining; balanced comfort",
      durability: "5-8 years",
    },
  ];

  const careTips = [
    {
      title: "Clean Daily",
      description:
        "Brush your guard with a soft toothbrush and mild soap after removing it. Avoid toothpaste (it's abrasive). Rinse thoroughly.",
    },
    {
      title: "Soak Weekly",
      description:
        "Once a week, soak your guard in a denture cleaner solution (Polident, etc.) for 15-20 minutes. This kills bacteria and keeps it fresh.",
    },
    {
      title: "Store Properly",
      description:
        "Keep your guard in the ventilated case provided. Never leave it in direct sunlight or extreme heat—it can warp.",
    },
    {
      title: "Avoid Chlorine",
      description:
        "Don't soak your guard in chlorinated water (like a pool). Chlorine damages the material. Stick to mild soap and water.",
    },
    {
      title: "Check for Wear",
      description:
        "Examine your guard monthly for cracks, worn areas, or thinning. Bring it to your 6-month checkups so Dr. Karamcheti can assess durability.",
    },
    {
      title: "Never Force It",
      description:
        "If your guard is hard to insert, don't force it. You might bend it. Ask Dr. Karamcheti to adjust it at your appointment.",
    },
  ];

  const faqItems = [
    {
      question:
        "Why does my grinding damage my teeth but a night guard prevents it?",
      answer:
        "A night guard acts as a barrier between your upper and lower teeth. Instead of grinding tooth-on-tooth with thousands of pounds of force, the guard absorbs the force. It's like wearing a helmet to protect your head—the guard takes the impact instead of your teeth.",
    },
    {
      question: "Will wearing a night guard change my bite or teeth position?",
      answer:
        "No. A well-made custom guard maintains your natural bite position. Dr. Karamcheti designs it to align with your existing bite. Wearing a guard won't shift your teeth—it protects them from shifting due to grinding force.",
    },
    {
      question:
        "Can a night guard help if I also have TMJ dysfunction or jaw pain?",
      answer:
        "Yes! Many patients with TMJ pain also grind their teeth. The guard stabilizes your bite, reduces grinding force on the joint, and decreases tension in the jaw muscles. Combined with other TMJ treatments, a night guard can significantly reduce pain.",
    },
    {
      question: "How much does a custom night guard cost?",
      answer:
        "A custom night guard typically costs $400-800. It depends on the material and complexity. Dr. Karamcheti discusses cost upfront. Most dental insurance plans cover 50% of the cost. Even without insurance, the cost is worth it—one guard lasts 5-10 years.",
    },
    {
      question:
        "What if I travel a lot? Do I need a guard if I'm not home every night?",
      answer:
        "Yes, wear your guard every night, even when traveling. The damage from grinding happens every time you sleep, whether at home or in a hotel. Your guard is durable and comes in a protective travel case. One guard per person—you don't need multiple guards unless specifically recommended.",
    },
    {
      question: "How long does it take to adjust to wearing a night guard?",
      answer:
        "Most patients adjust within 3-7 nights. Your mouth is sensitive to new sensations initially, but the discomfort quickly fades. If you're still uncomfortable after a week, Dr. Karamcheti can make adjustments. Custom guards are much easier to adjust to than store-bought options.",
    },
    {
      question:
        "Besides wearing a guard, what else can I do to reduce grinding?",
      answer:
        "Manage stress through exercise, meditation, or therapy. Limit caffeine and alcohol, especially before bed. Improve sleep quality through consistent sleep schedules. Correct malocclusion with Invisalign if needed. Apply warm compresses to your jaw. Ask your doctor if medications are triggering grinding. A night guard protects while you address underlying causes.",
    },
    {
      question: "Can children grind their teeth? Do they need a night guard?",
      answer:
        "Yes, children grind. Childhood bruxism often resolves naturally by teenage years. Dr. Karamcheti assesses if a guard is necessary. If grinding is severe or causing damage, a custom guard protects their developing teeth. We'll monitor as they grow.",
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
          Custom Night Guards in Charlottesville
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Grinding your teeth at night damages them gradually—and you might not even know
          it's happening. Dr. Karamcheti creates custom night guards using digital
          impressions to fit perfectly and protect your teeth, jaw, and sleep.
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
            Bruxism (teeth grinding) happens when stress, anxiety, sleep disorders, or
            malocclusion cause your jaw muscles to clench and grind your teeth at night.
            You may wake with jaw pain, headaches, or notice worn tooth surfaces. Many
            people don't realize they grind until a dentist spots the damage.
          </p>
          <p className="text-gray-800 leading-relaxed">
            A custom night guard from Dr. Karamcheti protects your teeth from grinding
            damage, reduces jaw pain, and helps stabilize your bite. She designs each guard
            using your exact digital impressions for a perfect fit. The guard absorbs
            grinding force, protecting both your teeth and your temporomandibular joint
            (jaw joint).
          </p>
        </motion.div>
      </motion.section>

      {/* Signs of Grinding */}
      <motion.section
        ref={signsRef}
        initial="hidden"
        animate={signsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
        >
          Do You Grind Your Teeth? 8 Warning Signs
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg mb-12 leading-relaxed text-center max-w-2xl mx-auto"
        >
          Many Charlottesville residents grind their teeth without realizing it. These signs
          suggest you might be grinding at night:
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {signsOfGrinding.map((sign, index) => (
            <motion.div key={index} variants={cardVariants} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#7a9e7e]">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{sign.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1a2332] mb-2">{sign.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{sign.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-2xl mx-auto"
        >
          <p className="text-gray-800 text-center leading-relaxed">
            <strong>If you notice any of these signs,</strong> schedule an appointment with
            Dr. Karamcheti. She can identify grinding damage during a visual exam and
            recommend a custom night guard.
          </p>
        </motion.div>
      </motion.section>

      {/* What Causes Bruxism */}
      <motion.section
        ref={bruxismRef}
        initial="hidden"
        animate={bruxismInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
          >
            What Causes Teeth Grinding?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg mb-12 text-center max-w-2xl mx-auto leading-relaxed"
          >
            Bruxism has multiple triggers. Understanding yours helps you address it
            alongside wearing a protective night guard.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {bruxismFactors.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg p-6 bg-gradient-to-br from-[#faf9f7] to-white border-2 border-[#7a9e7e]"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-[#1a2332]">{item.category}</h3>
                  <span className="text-xs font-semibold bg-[#7a9e7e] text-white px-3 py-1 rounded">
                    {item.factor}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-[#1a2332] text-white rounded-lg p-8"
          >
            <h4 className="text-xl font-bold mb-4">The Bottom Line:</h4>
            <p className="leading-relaxed mb-4">
              Bruxism usually stems from a combination of factors. You might grind more
              during stressful periods and less when life is calm. A night guard protects
              while you work on underlying causes like stress management, sleep quality, and
              bite correction.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom vs Store-Bought */}
      <motion.section
        ref={customVsRef}
        initial="hidden"
        animate={customVsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
        >
          Custom Guard vs. Store-Bought: What's the Difference?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg mb-12 text-center max-w-2xl mx-auto"
        >
          You can buy a guard at any drugstore, but Dr. Karamcheti's custom guards are far
          superior:
        </motion.p>

        <motion.div variants={containerVariants} className="overflow-x-auto">
          <motion.table
            variants={itemVariants}
            className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <thead>
              <tr className="bg-[#1a2332] text-white">
                <th className="px-6 py-4 text-left font-bold">Feature</th>
                <th className="px-6 py-4 text-left font-bold">Store-Bought Guard</th>
                <th className="px-6 py-4 text-left font-bold">Custom Guard by Dr. Karamcheti</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Construction",
                  storeVersion:
                    guardComparison[0]?.construction || "One-size-fits-all",
                  customVersion:
                    guardComparison[1]?.construction || "Precision-engineered",
                },
                {
                  feature: "Fit",
                  storeVersion: guardComparison[0]?.fit || "Loose fit",
                  customVersion: guardComparison[1]?.fit || "Perfect fit",
                },
                {
                  feature: "Comfort",
                  storeVersion: guardComparison[0]?.comfort || "Often uncomfortable",
                  customVersion: guardComparison[1]?.comfort || "Highly comfortable",
                },
                {
                  feature: "Durability",
                  storeVersion: guardComparison[0]?.durability || "1-2 years",
                  customVersion: guardComparison[1]?.durability || "5-10 years",
                },
                {
                  feature: "Effectiveness",
                  storeVersion:
                    guardComparison[0]?.effectiveness || "Moderate protection",
                  customVersion:
                    guardComparison[1]?.effectiveness || "Superior protection",
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-[#faf9f7]" : "bg-white"}
                >
                  <td className="px-6 py-4 font-bold text-[#1a2332] border-b border-gray-200">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                    {row.storeVersion}
                  </td>
                  <td className="px-6 py-4 text-gray-700 border-b border-gray-200 bg-[#f5f0eb]">
                    {row.customVersion}
                  </td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6"
        >
          <p className="text-gray-800 leading-relaxed">
            <strong>Cost-Effective Long-Term:</strong> A custom guard costs more upfront but
            lasts 5-10 times longer. Over 10 years, a custom guard costs less per year than
            repeatedly replacing store-bought guards. Plus, the superior protection saves
            your teeth from damage.
          </p>
        </motion.div>
      </motion.section>

      {/* How Dr. Karamcheti Creates Your Guard */}
      <motion.section
        ref={procesRef}
        initial="hidden"
        animate={procesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gradient-to-b from-[#f5f0eb] to-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
          >
            How Dr. Karamcheti Creates Your Custom Guard
          </motion.h2>

          <motion.div variants={containerVariants} className="space-y-6">
            {creationProcess.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#c9a84c]"
              >
                <h3 className="text-2xl font-bold text-[#1a2332] mb-3">{item.step}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-[#1a2332] text-white rounded-lg p-8 text-center"
          >
            <p className="text-lg">
              <strong>Total time:</strong> From consultation to final fitting, 2-3 weeks.
              You can start wearing your guard within days of your initial appointment.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Guard Types */}
      <motion.section
        initial="hidden"
        animate={procesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 md:px-12 py-20"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-12 text-center"
        >
          Types of Custom Guards
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {guardTypes.map((guard, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#7a9e7e]"
            >
              <h3 className="text-xl font-bold text-[#1a2332] mb-4">{guard.name}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-600">Material:</p>
                  <p className="text-gray-800">{guard.material}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Best For:</p>
                  <p className="text-gray-800">{guard.best}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Feel:</p>
                  <p className="text-gray-800">{guard.feel}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Lifespan:</p>
                  <p className="text-gray-800">{guard.durability}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 text-center bg-[#f5f0eb] rounded-lg p-6 border-l-4 border-[#c9a84c]"
        >
          <p className="text-gray-800">
            <strong>Dr. Karamcheti recommends a hybrid guard for most patients.</strong> It
            balances comfort and durability, protecting heavily grinding teeth while
            remaining comfortable for nightly wear.
          </p>
        </motion.div>
      </motion.section>

      {/* Care and Maintenance */}
      <motion.section
        ref={carRef}
        initial="hidden"
        animate={carInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white py-20 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-[#1a2332] font-display mb-4 text-center"
          >
            How to Care for Your Night Guard
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg text-center mb-12"
          >
            Proper care extends your guard's lifespan and keeps it hygienic:
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {careTips.map((tip, index) => (
              <motion.div key={index} variants={cardVariants} className="bg-[#faf9f7] rounded-lg p-6 border-2 border-[#7a9e7e]">
                <h3 className="text-lg font-bold text-[#1a2332] mb-3">{tip.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6"
          >
            <h4 className="font-bold text-[#1a2332] mb-3">When to Replace Your Guard:</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Cracks or breaks develop in the material</li>
              <li>• The fit becomes loose or uncomfortable (your teeth may have shifted)</li>
              <li>• Visible thinning or wear reduces protective thickness</li>
              <li>• It's been 7-10 years (typical lifespan)</li>
              <li>
                • You notice it's not protecting as well (your teeth show new wear patterns)
              </li>
            </ul>
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
            Night Guard Questions Answered
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
