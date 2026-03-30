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

export default function SedationDentistryContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: optionsRef, inView: optionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: safetyRef, inView: safetyInView } = useInView({
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
            Sedation Dentistry in Charlottesville VA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Dental anxiety doesn't have to control you. Dr. Karamcheti offers
            multiple sedation options to help you get the care you need in
            complete comfort.
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
                What is Sedation Dentistry?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Sedation dentistry uses medication to help you relax during dental treatment. You remain conscious and able to respond to Dr. Karamcheti, but you'll feel calm, time passes quickly, and you may have little memory of the procedure afterward. It's a safe, evidence-based approach for anxious patients, those with sensitive gag reflexes, or anyone facing complex or lengthy treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Willis & Associates Family Dentistry, Dr. Karamcheti carefully evaluates each patient's anxiety level, medical history, and treatment needs to recommend the right sedation option. Your safety and comfort are paramount.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sedation Options Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={optionsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Sedation Options We Offer
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={optionsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Nitrous Oxide */}
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-gold">☁</span>
              </div>
              <h3 className="heading-sm text-navy mb-4">Nitrous Oxide (Laughing Gas)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nitrous oxide mixed with oxygen is inhaled through a small nose mask. It creates a pleasant, relaxed feeling within minutes. You stay fully aware and responsive, able to raise your hand if you need a break. It wears off completely within minutes of stopping the gas.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-navy">Best for:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mild to moderate anxiety</li>
                  <li>• Routine cleanings and fillings</li>
                  <li>• Shorter appointments</li>
                  <li>• Those who need to drive afterward</li>
                </ul>
              </div>
            </motion.div>

            {/* Oral Sedation */}
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl text-gold">💊</span>
              </div>
              <h3 className="heading-sm text-navy mb-4">Oral Sedation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Karamcheti prescribes an oral sedative medication taken about 30-45 minutes before your appointment. You'll arrive already relaxed and can receive nitrous oxide as well. Most patients enter a twilight state and remember little of the procedure. A responsible adult must drive you home.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-navy">Best for:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Moderate to severe anxiety</li>
                  <li>• Longer, complex procedures</li>
                  <li>• Wisdom teeth extraction</li>
                  <li>• Those who benefit from deeper relaxation</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={benefitsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Who Benefits Most From Sedation?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Anxious Patients",
                description:
                  "If dental anxiety has kept you away from the dentist or makes appointments painful, sedation can remove that barrier and help you access necessary care.",
              },
              {
                title: "Sensitive Gag Reflex",
                description:
                  "A strong gag reflex can make dental work uncomfortable. Sedation relaxes those reflexes and makes procedures more tolerable.",
              },
              {
                title: "Low Pain Tolerance",
                description:
                  "Some people feel more sensation or discomfort during dental work. Sedation eases that sensitivity and creates a smoother experience.",
              },
              {
                title: "Complex or Long Procedures",
                description:
                  "Wisdom teeth extraction, multiple restorations, or implant work can be lengthy. Sedation makes time pass quickly and reduces fatigue.",
              },
              {
                title: "Special Needs",
                description:
                  "Patients with autism, ADHD, developmental disabilities, or other conditions that make sitting still difficult can benefit greatly.",
              },
              {
                title: "Catch-Up Care",
                description:
                  "If you've skipped dental visits for years, you may need extensive work. Sedation allows Dr. Karamcheti to address everything in one or a few visits.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Sedation Process */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            What to Expect: The Sedation Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={processInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                step: "Before Your Appointment",
                content: [
                  "Dr. Karamcheti reviews your medical history, current medications, allergies, and any previous sedation experiences.",
                  "You'll discuss your anxiety level and what you hope to accomplish during this visit.",
                  "If oral sedation is planned, you'll receive detailed pre-medication instructions: fasting, what not to do beforehand, and what to arrange for transport home.",
                  "If nitrous oxide only, you can eat normally and drive yourself home afterward.",
                ],
              },
              {
                step: "Arrival & Setup",
                content: [
                  "You'll check in and relax in our calm, comfortable treatment area.",
                  "Dr. Karamcheti or a team member will place a pulse oximeter on your finger to monitor your oxygen levels throughout the procedure—painless and non-invasive.",
                  "If using nitrous oxide, a small nose mask is fitted comfortably.",
                  "If using oral sedation, medication is already working from your pre-appointment dose.",
                ],
              },
              {
                step: "During Treatment",
                content: [
                  "You'll feel deeply relaxed, and time will seem to pass quickly.",
                  "Dr. Karamcheti explains what she's doing, but many patients report feeling little concern or discomfort.",
                  "With oral sedation, you may drift in and out of light sleep but remain responsive to gentle direction.",
                  "We monitor your vital signs continuously to ensure safety.",
                ],
              },
              {
                step: "Recovery",
                content: [
                  "With nitrous oxide: The mask is removed, and you breathe oxygen for a few minutes. You're alert within 5-10 minutes and can drive home.",
                  "With oral sedation: You'll rest briefly while the medication wears off. You'll feel groggy for several hours, so your drive-home companion is essential.",
                  "Dr. Karamcheti will provide post-sedation care instructions: rest, avoid heavy machinery or important decisions, stay hydrated, and eat soft foods if your mouth is numb.",
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border-l-4 border-gold pl-6 py-4"
              >
                <h3 className="heading-sm text-navy mb-4">{section.step}</h3>
                <ul className="space-y-3">
                  {section.content.map((point, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety & Monitoring */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={safetyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={safetyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Safety Is Non-Negotiable
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={safetyInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Dr. Karamcheti's Approach</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sedation must always be administered with care and accountability. Dr. Karamcheti takes a thoughtful, conservative approach:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Every sedation patient receives a thorough pre-operative evaluation, including blood pressure, heart rate, and oxygen baseline.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Continuous pulse oximetry and cardiac monitoring during all sedated procedures.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Dr. Karamcheti stays focused on patient safety—her treatment team handles auxiliary tasks so she observes every moment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>All sedatives used are proven, FDA-approved medications dosed carefully based on age, weight, and medical status.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold font-bold">•</span>
                  <span>Emergency medications and oxygen are always available, and Dr. Karamcheti knows how to manage complications.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Your Medical History Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Certain medical conditions require special care with sedation. During your consultation, Dr. Karamcheti asks detailed questions about heart disease, lung conditions, sleep apnea, liver or kidney issues, and current medications. This information allows her to choose the safest sedation path for you and coordinate care with your primary care doctor if needed. Complete honesty about your health is essential.
              </p>
            </motion.div>
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
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              {
                q: "Will I be unconscious during sedation?",
                a: "With nitrous oxide and oral sedation, you remain semi-conscious and responsive. You may feel dreamlike, sleepy, or unaware, but Dr. Karamcheti can give you instructions and you can indicate if you need a break. You won't be fully unconscious or under general anesthesia.",
              },
              {
                q: "Is sedation dentistry safe?",
                a: "Yes, when administered by a trained professional like Dr. Karamcheti using proper monitoring and established protocols. The sedatives and doses used in dentistry are well-researched and very safe for most patients. Serious complications are extremely rare.",
              },
              {
                q: "Will I remember the procedure?",
                a: "With nitrous oxide alone, most patients remember much of it. With oral sedation, most remember little to nothing—many patients are surprised the procedure is already done. Dr. Karamcheti can discuss what to expect based on your specific plan.",
              },
              {
                q: "How much does sedation cost?",
                a: "Nitrous oxide is typically a modest fee added to your procedure cost. Oral sedation may be more, depending on the medication and length of appointment. Dr. Karamcheti's team can provide an estimate when you schedule and discuss financing options if needed.",
              },
              {
                q: "Can I eat before my appointment?",
                a: "With nitrous oxide only, yes—eat normally. With oral sedation, you'll receive fasting instructions (typically nothing to eat or drink for several hours before your appointment). Dr. Karamcheti's team will clarify this when scheduling.",
              },
              {
                q: "When can I return to normal activities?",
                a: "After nitrous oxide, you can drive and resume normal activities immediately. After oral sedation, plan for several hours of grogginess—no driving, no heavy machinery, no major decisions. Rest and have someone present for the first few hours.",
              },
              {
                q: "What if I'm allergic to one of the sedatives?",
                a: "Dr. Karamcheti has multiple sedation options available. During your consultation, you'll disclose any known allergies or sensitivities, and she'll choose a safe alternative or skip sedation if necessary.",
              },
              {
                q: "Can pregnant patients use sedation?",
                a: "Generally, elective dental work and sedation are avoided during pregnancy. Emergency dental care can often be done with local anesthesia alone. Dr. Karamcheti works closely with your OB-GYN to determine what's safest for you and your baby.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internal Links Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-md text-navy mb-8 text-center"
          >
            Related Procedures & Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link
              href="/wisdom-teeth"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Wisdom Teeth Removal
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Expert extraction often performed with sedation for patient comfort.
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
                Comprehensive preventive and restorative care for every patient.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Overcome Dental Anxiety?"
        subheadline="Schedule a consultation with Dr. Karamcheti to discuss sedation options tailored to your needs and comfort."
        buttonText="Schedule Your Sedation Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
