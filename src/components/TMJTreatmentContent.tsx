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

export default function TMJTreatmentContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: symptomsRef, inView: symptomsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: causesRef, inView: causesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: diagnosisRef, inView: diagnosisInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: treatmentRef, inView: treatmentInView } = useInView({
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
            TMJ Treatment in Charlottesville VA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Jaw pain and TMJ dysfunction don't have to be permanent. Dr. Karamcheti
            diagnoses and treats TMD with precision and a patient-centered approach.
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
                What is TMJ/TMD?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Your temporomandibular joint (TMJ) is the hinge connecting your lower jaw to your skull, just in front of your ear. When this joint or the muscles controlling it malfunction, you have TMD (temporomandibular dysfunction), often called TMJ disorder. It can cause jaw pain, clicking, popping, difficulty chewing, and even headaches or neck pain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TMD is common—affecting millions of people—and the causes are often multifactorial: bite alignment, stress, clenching, habit, muscle tightness, or joint degeneration. The good news: Dr. Karamcheti diagnoses TMD methodically and offers evidence-based treatment options, from conservative (night guards, physical therapy) to occlusal adjustment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Most patients improve significantly with proper diagnosis and treatment coordination. You don't have to live with jaw pain.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={symptomsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={symptomsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Common Symptoms of TMD
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={symptomsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                symptom: "Jaw Pain",
                icon: "🦴",
                description:
                  "Pain, soreness, or aching in the jaw joint, jaw muscles, temples, or face. Pain may be sharp or dull and can occur on one or both sides.",
              },
              {
                symptom: "Clicking or Popping",
                icon: "🔊",
                description:
                  "Sounds when you open or close your mouth, especially when chewing. This indicates joint disc displacement or cartilage irregularity.",
              },
              {
                symptom: "Difficulty Chewing",
                icon: "🍽",
                description:
                  "Pain or difficulty when biting or chewing, especially hard or chewy foods. Some patients unconsciously avoid using one side.",
              },
              {
                symptom: "Jaw Locking",
                icon: "🔒",
                description:
                  "The jaw gets stuck open or closed, or feels like it slips in and out of place. This usually improves with careful jaw movement.",
              },
              {
                symptom: "Headaches",
                icon: "🧠",
                description:
                  "Frequent or chronic headaches, especially tension headaches in the temples or forehead. TMD is an underdiagnosed cause.",
              },
              {
                symptom: "Neck or Shoulder Pain",
                icon: "💪",
                description:
                  "Pain or tension in the neck, shoulders, or upper back. Poor jaw posture and muscle tension radiate pain upward.",
              },
              {
                symptom: "Tinnitus or Ear Pain",
                icon: "👂",
                description:
                  "Ringing in the ears (tinnitus), ear fullness, or ear pain. The TMJ is located right next to the ear canal.",
              },
              {
                symptom: "Bite Changes",
                icon: "😁",
                description:
                  "Your bite feels different—upper and lower teeth don't meet evenly. Sometimes only one side contacts when you close.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm text-navy mb-3">{item.symptom}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Causes & Risk Factors */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={causesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={causesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            What Causes TMD?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={causesInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                cause: "Bite Misalignment (Malocclusion)",
                description:
                  "When your upper and lower teeth don't meet evenly, the jaw muscles work harder to compensate. Crowding, missing teeth, or a poor bite relationship strains the joint. This is often why TMD develops after orthodontic treatment if the bite wasn't finalized perfectly.",
              },
              {
                cause: "Stress and Tension",
                description:
                  "Stress causes muscle tension throughout the body, including the jaw muscles. Many people unconsciously clench their jaw or grind their teeth (bruxism) when stressed, overworking the TMJ. Emotional stress is a major TMD trigger.",
              },
              {
                cause: "Muscle Tension and Poor Posture",
                description:
                  "Forward head posture (common with screen time) strains neck and jaw muscles. Tight muscles in the neck, shoulders, and jaw prevent normal jaw mechanics. Physical therapy often targets these tight muscles.",
              },
              {
                cause: "Jaw Injury or Trauma",
                description:
                  "A blow to the jaw, whiplash, or even excessive dental work can traumatize the joint. Sometimes TMD develops immediately after injury; other times, it develops years later as arthritis or inflammation progresses.",
              },
              {
                cause: "Disc Displacement",
                description:
                  "The TMJ has a small disc that cushions the joint, similar to a knee meniscus. If the disc slips out of position, it causes clicking, popping, and eventually pain. This can happen from injury, wear, or poor biomechanics.",
              },
              {
                cause: "Arthritis",
                description:
                  "Osteoarthritis or rheumatoid arthritis can affect the TMJ, causing cartilage damage and bone deterioration. This is more common in older adults but can occur at any age.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border-l-4 border-gold hover:shadow-sm transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.cause}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diagnosis */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={diagnosisRef}
            initial={{ opacity: 0, y: 20 }}
            animate={diagnosisInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            How Dr. Karamcheti Diagnoses TMD
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={diagnosisInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                step: "Thorough History",
                content:
                  "Dr. Karamcheti asks detailed questions: When did symptoms start? What makes them better or worse? Do you grind or clench? How's your stress? Any past jaw injuries? She listens carefully to understand your specific situation.",
              },
              {
                step: "Physical Examination",
                content:
                  "She palpates your jaw joints and muscles, feeling for tenderness, clicks, or restricted movement. She assesses your bite at rest and during closure. She asks you to open wide, move side to side, and demonstrates normal versus limited ranges. She checks for muscle tightness in the neck and shoulders.",
              },
              {
                step: "Digital Imaging",
                content:
                  "Standard X-rays show bone structure. Dr. Karamcheti often uses CBCT (cone beam computed tomography) for a 3D view of the joint, disc position, and bone condition. This level of detail helps her diagnose disc displacement, arthritis, or structural damage that 2D X-rays miss.",
              },
              {
                step: "Bite Analysis",
                content:
                  "She evaluates how your teeth meet, noting any crossbites, open bites, or uneven contacts. Sometimes she uses bite registration materials to see exactly where your teeth touch. Bite problems often drive TMD.",
              },
              {
                step: "Diagnosis & Explanation",
                content:
                  "Dr. Karamcheti sits down and explains her findings in plain language, showing you the images and describing what she sees. She'll tell you if her findings suggest muscle dysfunction, disc displacement, arthritis, or a combination. She'll discuss the likely causes and what this means for treatment.",
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 border-l-4 border-gold"
              >
                <h3 className="heading-sm text-navy mb-4">{section.step}</h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={treatmentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={treatmentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Treatment Options for TMD
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={treatmentInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                treatment: "Night Guard (Occlusal Splint)",
                description:
                  "A custom-fitted guard worn while sleeping prevents tooth grinding and clenching. It reduces muscle tension, protects teeth from wear, and often reduces morning jaw pain and headaches. Dr. Karamcheti designs each guard to encourage a relaxed jaw position.",
                best_for: "Clenching, grinding, or muscle-based TMD",
              },
              {
                treatment: "Physical Therapy & Stretching",
                description:
                  "Dr. Karamcheti may refer you to a physical therapist who specializes in TMD. Exercises and stretches reduce muscle tension, improve jaw mobility, and retrain movement patterns. She provides guidance on posture, ergonomics, and self-care at home. Many patients see significant improvement with consistent PT.",
                best_for: "Muscle tightness, limited jaw opening, posture-related pain",
              },
              {
                treatment: "Occlusal Adjustment",
                description:
                  "If your bite is uneven—some teeth contact before others—Dr. Karamcheti can carefully adjust the biting surfaces to create even contact and reduce strain on the joint. This is a precise procedure requiring careful analysis. The goal is balanced contact on all teeth.",
                best_for: "Bite misalignment, uneven tooth contact",
              },
              {
                treatment: "Bite Correction or Orthodontics",
                description:
                  "For some patients, the underlying bite problem is severe enough that occlusal adjustment alone won't work. Orthodontic treatment (braces or Invisalign) may be recommended to properly align the bite. This is coordinated with Dr. Karamcheti's TMD management.",
                best_for: "Significant crowding or bite misalignment",
              },
              {
                treatment: "Stress Management & Lifestyle",
                description:
                  "Since stress is a major TMD trigger, managing stress is crucial. Meditation, yoga, counseling, adequate sleep, and exercise reduce tension. Dr. Karamcheti coaches patients on jaw relaxation, avoiding clenching triggers, and mindful eating. Small habit changes have big impacts.",
                best_for: "Stress-related clenching and TMD",
              },
              {
                treatment: "Anti-Inflammatory Medications",
                description:
                  "Over-the-counter NSAIDs (ibuprofen, naproxen) reduce inflammation and pain. Dr. Karamcheti may recommend short-term use during acute flare-ups. For some patients, low-dose muscle relaxants provide temporary relief while other treatments take effect.",
                best_for: "Acute pain flare-ups, inflammation",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border-l-4 border-gold hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.treatment}</h3>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  {item.description}
                </p>
                <p className="text-sm font-semibold text-navy">
                  Best for: {item.best_for}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-navy text-white rounded-lg p-8 text-center"
          >
            <h3 className="heading-sm mb-4">Individualized Treatment Plans</h3>
            <p className="leading-relaxed">
              Dr. Karamcheti designs each TMD treatment plan based on your specific diagnosis, symptoms, and lifestyle. Most patients improve with a combination of approaches—night guard, physical therapy, stress management, and bite correction. She coordinates care with your physical therapist and primary doctor, ensuring all providers are aligned.
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
            TMD Treatment FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              {
                q: "Can TMD go away on its own?",
                a: "Sometimes mild cases improve with rest, ice, and jaw exercises. But if the underlying cause persists—ongoing clenching, stress, or bite misalignment—symptoms usually return. Professional treatment addresses root causes and prevents chronic problems.",
              },
              {
                q: "How long does TMD treatment take?",
                a: "It varies. Some patients notice improvement within weeks of starting a night guard. Others need several months of physical therapy. Occlusal adjustment benefits show quickly. The key is consistency—using your night guard, doing exercises, managing stress—and patience as tissues heal.",
              },
              {
                q: "Does insurance cover TMD treatment?",
                a: "Often, yes. Night guards, physical therapy, and occlusal adjustment are frequently covered under dental or medical insurance. Dr. Karamcheti's team will verify your coverage and discuss costs before treatment begins.",
              },
              {
                q: "What if treatment doesn't work?",
                a: "If conservative treatment doesn't provide relief after 3-6 months, imaging (MRI) can assess disc position and joint condition more precisely. In rare cases, joint injection or surgical intervention may be considered. Dr. Karamcheti will discuss next steps if needed and may refer to an oral surgeon for advanced cases.",
              },
              {
                q: "Can TMD cause serious damage?",
                a: "Untreated TMD can lead to progressive joint damage, disc displacement, arthritis, or chronic muscle dysfunction. Early diagnosis and treatment prevent complications. This is why Dr. Karamcheti takes a proactive approach—the sooner you address it, the better the outcomes.",
              },
              {
                q: "Is TMD permanent?",
                a: "No. Most TMD is treatable and manageable. With proper treatment, stress management, and habit changes, many patients achieve lasting relief. Even if occasional symptoms recur during stressful periods, they're usually mild and manageable with techniques you've learned.",
              },
              {
                q: "Should I see a specialist?",
                a: "Dr. Karamcheti's training and experience with TMD is substantial. For most cases, her care is comprehensive. If your case is unusually complex or requires surgery, she'll refer you to an oral surgeon or TMD specialist. But the vast majority of patients improve under her care.",
              },
              {
                q: "How do I prevent TMD?",
                a: "Manage stress, maintain good posture, avoid jaw trauma, correct bite problems early, don't clench or grind, and see Dr. Karamcheti regularly for preventive bite checks. If you're prone to clenching, a night guard prevents damage even before pain develops.",
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
            Related Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link
              href="/general-dentistry-charlottesville"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                General Dentistry
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Comprehensive preventive and restorative care for optimal oral health.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>

            <Link
              href="/about/comfort"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Our Comfort Philosophy
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Learn how Dr. Karamcheti creates a relaxing, patient-focused environment.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Address Your Jaw Pain?"
        subheadline="Schedule a TMJ consultation with Dr. Karamcheti. She'll diagnose the cause and design a treatment plan that works for you."
        buttonText="Schedule Your TMJ Evaluation"
        buttonLink="/new-patients"
      />
    </>
  );
}
