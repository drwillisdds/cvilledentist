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

export default function WisdomTeethContent() {
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

  const { ref: signsRef, inView: signsInView } = useInView({
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
            Wisdom Teeth Removal in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Expert extraction with sedation for comfort. Dr. Karamcheti performs
            wisdom teeth removal right here in Charlottesville—no referral to an
            oral surgeon required.
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
                Do You Need Your Wisdom Teeth Out?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Wisdom teeth are your third molars, typically appearing in your late teens and twenties. For some people, they erupt normally and cause no problems. For many others, they become impacted, infected, or create crowding—requiring removal.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If your dentist recommends extraction and you're in Charlottesville, Dr. Karamcheti can perform the procedure right in her office using gentle surgical technique, local anesthesia, and sedation if you prefer. You won't need a referral or a separate appointment across town.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're a UVA student on break or a local resident facing this milestone, Dr. Karamcheti makes wisdom teeth extraction as straightforward, comfortable, and seamless as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Remove Wisdom Teeth */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={whyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Why Wisdom Teeth Often Need Removal
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Impaction */}
            <motion.div variants={itemVariants}>
              <div className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-gold">⊗</span>
                </div>
                <h3 className="heading-sm text-navy mb-4">Impacted Teeth</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Often, the jaw doesn't have enough space. Wisdom teeth become stuck beneath the gum or bone and erupt at odd angles. An impacted tooth can't be cleaned properly, leading to decay and infection.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Soft-tissue impaction (stuck in the gum)</li>
                  <li>• Partial bony impaction (partially embedded)</li>
                  <li>• Complete bony impaction (fully trapped)</li>
                </ul>
              </div>
            </motion.div>

            {/* Infection & Disease */}
            <motion.div variants={itemVariants}>
              <div className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-gold">🔥</span>
                </div>
                <h3 className="heading-sm text-navy mb-4">Infection & Inflammation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Impacted teeth trap bacteria, food, and plaque in the space between the tooth and gum. This causes pericoronitis—painful swelling, infection, and sometimes abscess. Infection can spread if left untreated.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Swollen, red, tender gums</li>
                  <li>• Difficulty opening your mouth or swallowing</li>
                  <li>• Fever and malaise</li>
                </ul>
              </div>
            </motion.div>

            {/* Crowding */}
            <motion.div variants={itemVariants}>
              <div className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-gold">↔</span>
                </div>
                <h3 className="heading-sm text-navy mb-4">Crowding & Misalignment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Even if a wisdom tooth partially erupts, pressure from eruption can push adjacent teeth forward, causing crowding and undoing orthodontic work. Extraction prevents this damage.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Shifting of front teeth</li>
                  <li>• Bite problems develop</li>
                  <li>• Can undo years of braces</li>
                </ul>
              </div>
            </motion.div>

            {/* Decay & Cysts */}
            <motion.div variants={itemVariants}>
              <div className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold bg-opacity-20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-gold">⚠</span>
                </div>
                <h3 className="heading-sm text-navy mb-4">Decay & Cysts</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Wisdom teeth are hard to clean. Cavities develop and progress silently. Sometimes, a cyst forms around an impacted tooth, damaging surrounding bone and the roots of adjacent teeth.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cavity in the wisdom tooth</li>
                  <li>• Cavity in the adjacent molar</li>
                  <li>• Odontogenic cyst formation</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signs Your Wisdom Teeth Need Removal */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={signsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={signsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Signs Your Wisdom Teeth May Need Removal
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={signsInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              {
                symptom: "Pain or Discomfort",
                description:
                  "Sharp, dull, or throbbing pain at the back of your mouth, jaw, or even radiating to the ear or neck.",
              },
              {
                symptom: "Swelling & Inflammation",
                description:
                  "Swollen gums, jaw, or cheeks around the wisdom tooth area. Sometimes the whole side of the face looks puffy.",
              },
              {
                symptom: "Difficulty Opening Your Mouth",
                description:
                  "Trismus, or jaw stiffness, makes it hard to chew or open wide for dental exams. Often caused by inflammation.",
              },
              {
                symptom: "Persistent Bad Breath or Taste",
                description:
                  "Bacteria trapped around an impacted tooth cause foul odor and taste. Regular brushing doesn't help.",
              },
              {
                symptom: "Crowding of Front Teeth",
                description:
                  "Your front teeth begin to shift forward, especially if you've had braces. Wisdom tooth pressure is often the culprit.",
              },
              {
                symptom: "Visible Decay or Damage",
                description:
                  "You see a cavity, dark spot, or broken tooth at the back of your mouth on X-rays or during exams.",
              },
              {
                symptom: "Cysts Detected on Imaging",
                description:
                  "A cyst or lesion appears on panoramic X-rays around an impacted wisdom tooth. Early removal prevents serious bone loss.",
              },
              {
                symptom: "Repeated Infections",
                description:
                  "Pericoronitis keeps recurring despite antibiotics and home care. Extraction is often the permanent solution.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-6 border-l-4 border-gold hover:shadow-sm transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-2">{item.symptom}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
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
            <p className="text-lg leading-relaxed">
              If you notice any of these signs, or if X-rays show impacted or problematic wisdom teeth, contact Dr. Karamcheti for an evaluation. Early treatment prevents complications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Extraction Procedure */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={procedureRef}
            initial={{ opacity: 0, y: 20 }}
            animate={procedureInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            The Wisdom Tooth Extraction Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={procedureInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                step: "Consultation & Imaging",
                content:
                  "Dr. Karamcheti takes panoramic and sometimes CBCT (cone beam) X-rays to see exactly how each wisdom tooth is positioned, how deep it's embedded, and what nerves and bone are nearby. This imaging guides her surgical approach and helps predict healing time. She'll show you the images and explain what she sees.",
              },
              {
                step: "Pre-Operative Planning",
                content:
                  "Dr. Karamcheti reviews your medical history and current medications. If you want sedation, she'll discuss options (nitrous oxide or oral sedation) and arrange for a driver if needed. She'll explain the procedure step-by-step and answer all your questions. You'll know exactly what to expect.",
              },
              {
                step: "Anesthesia",
                content:
                  "You'll receive local anesthesia around the extraction site. Dr. Karamcheti injects carefully, and most patients feel pressure but no pain. If you chose sedation, it will be administered now. You'll become relaxed, and time will seem to pass quickly.",
              },
              {
                step: "Extraction",
                content:
                  "Dr. Karamcheti uses specialized instruments to gently elevate and remove the tooth. For impacted teeth, she may need to remove small amounts of bone or section the tooth for easier removal. Throughout, she works carefully to protect nearby nerves and blood vessels. You'll hear sounds and feel pressure, but pain should be minimal due to anesthesia.",
              },
              {
                step: "Closure & Aftercare Instructions",
                content:
                  "The extraction site may require stitches (usually self-dissolving) to help healing. Dr. Karamcheti places gauze and instructs you on biting pressure and when to remove it. She reviews post-extraction care in detail: bleeding control, ice application, medication use, dietary restrictions, and activity limits. You'll receive written instructions to take home.",
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

      {/* Recovery Timeline */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={recoveryRef}
            initial={{ opacity: 0, y: 20 }}
            animate={recoveryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Recovery Timeline: What to Expect
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={recoveryInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                timeframe: "First 24 Hours",
                details: [
                  "Bleeding: Expect some oozing—gauze helps. Replace if saturated, usually stops within a few hours.",
                  "Swelling peaks on day 2-3, but some swelling starts immediately. Ice packs (15 min on, 15 min off) reduce it dramatically.",
                  "Pain: Controlled with prescribed or over-the-counter pain medication. Take it as directed, not just when pain is unbearable.",
                  "Activity: Rest at home. No strenuous activity, bending, lifting, or exercise for the first week.",
                  "Diet: Soft, cold foods like smoothies, yogurt, ice cream, mashed potatoes. Avoid hot foods—heat increases blood flow and bleeding.",
                ],
              },
              {
                timeframe: "Days 2-4",
                details: [
                  "Swelling often peaks on day 2-3, then gradually reduces. Keep using ice and elevation (extra pillows when sleeping).",
                  "Pain usually decreases. Continue medication as directed; many patients need less after day 3.",
                  "Some oozing may continue, especially if you disturb the site. Avoid rinsing, spitting, or using a straw—these actions can dislodge the clot (dry socket).",
                  "Bruising may appear on the jaw or neck—normal and resolves in 1-2 weeks.",
                  "Diet: Soft foods still. Lukewarm, not hot. Avoid crunchy, hard, or chewy foods.",
                ],
              },
              {
                timeframe: "Days 5-7",
                details: [
                  "Swelling decreases significantly. You'll feel more normal each day.",
                  "Pain and discomfort usually mild by day 5-7, manageable without medication or with minimal over-the-counter meds.",
                  "Light activity can resume (walking), but avoid gym, sports, or heavy lifting for 7-10 days.",
                  "Continue soft diet but can begin adding warmer foods if comfortable. Chew away from the extraction site.",
                  "You can gently rinse with salt water (1/2 teaspoon salt in 8 oz warm water) starting day 4-5 after meals.",
                ],
              },
              {
                timeframe: "Week 2+",
                details: [
                  "Most swelling and tenderness resolve. Many people return to normal diet and exercise.",
                  "Stitches dissolve or are removed if non-absorbable.",
                  "The extraction site still looks like a small hole—this is normal and gradually fills in with bone and tissue.",
                  "Complete bone healing takes several months, but you'll feel 100% by week 2-3.",
                  "If a bone fragment (sequestrum) works to the surface, it may feel like a hard point in the gum. Dr. Karamcheti can remove it painlessly.",
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border-l-4 border-gold"
              >
                <h3 className="heading-sm text-navy mb-4">{section.timeframe}</h3>
                <ul className="space-y-3">
                  {section.details.map((detail, i) => (
                    <li key={i} className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-navy">
                        {detail.split(":")[0]}:
                      </span>
                      {detail.split(":")[1]}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-gold bg-opacity-10 border-l-4 border-gold rounded-lg p-8"
          >
            <h3 className="heading-sm text-navy mb-4">Preventing Complications</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most common post-extraction complication is dry socket (alveolar osteitis), where the blood clot dislodges. To prevent it:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Avoid rinsing, spitting, or using a straw for 5-7 days</li>
              <li>• Don't smoke or use tobacco—significantly increases dry socket risk</li>
              <li>• Avoid alcohol while taking pain medication</li>
              <li>• Follow Dr. Karamcheti's aftercare instructions exactly</li>
              <li>• If pain intensifies after day 3, contact Dr. Karamcheti immediately—it may signal dry socket</li>
            </ul>
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
            Wisdom Tooth Extraction FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              {
                q: "At what age should wisdom teeth be removed?",
                a: "Most people get wisdom teeth between 17-25, though some erupt later or not at all. There's no strict age requirement—if they're causing problems, they should come out. If they're impacted and likely to cause future problems, early removal (late teens/early twenties) often means simpler extraction. UVA students often handle extraction during academic breaks.",
              },
              {
                q: "Do all wisdom teeth need to be removed?",
                a: "No. If wisdom teeth erupt fully, are properly positioned, and can be cleaned with normal oral hygiene, they can stay. Dr. Karamcheti will monitor them and recommend extraction only if they pose a problem or risk. Preventive removal of asymptomatic but impacted teeth is sometimes recommended to avoid future complications.",
              },
              {
                q: "Can you remove all four at once?",
                a: "Yes, Dr. Karamcheti can remove all four wisdom teeth in a single appointment if you prefer. This approach is efficient but involves slightly longer recovery. Some patients prefer extracting two at a time (one side first, then the other weeks later) to have one side functional for eating. Dr. Karamcheti can discuss which approach is best for you.",
              },
              {
                q: "How long does extraction take?",
                a: "A straightforward extraction of a simple wisdom tooth may take 20-45 minutes. Impacted teeth or complex extractions may take longer—30 minutes to over an hour per tooth. During your consultation, Dr. Karamcheti will estimate your specific timeline based on imaging.",
              },
              {
                q: "Will there be a lot of pain during extraction?",
                a: "With adequate local anesthesia, you should feel pressure and vibration but no sharp pain. If you start to feel pain, let Dr. Karamcheti know immediately—she'll inject more anesthetic. Sedation makes the procedure feel even easier and faster.",
              },
              {
                q: "How long is recovery?",
                a: "Most people feel mostly normal within a week but experience some swelling and mild discomfort days 2-5. Complete bone healing takes several months, but you can resume regular activities (eating, work, exercise) within 7-10 days if you're careful.",
              },
              {
                q: "What should I eat after extraction?",
                a: "First 24 hours: soft, cold foods (yogurt, ice cream, smoothies). Days 2-7: soft, warm foods (soup, mashed potatoes, scrambled eggs) chewed away from the extraction site. Avoid hot foods initially, hard or crunchy foods, straws, and spitting for the first week.",
              },
              {
                q: "Can I use a straw after extraction?",
                a: "No—avoid straws for at least a week. Suction can dislodge the blood clot, leading to dry socket. Sip from a cup instead, even if it feels awkward.",
              },
              {
                q: "What is dry socket and how do I prevent it?",
                a: "Dry socket (alveolar osteitis) occurs when the blood clot protecting the extraction site is dislodged, exposing the bone underneath. It causes severe pain 3-5 days after extraction. Prevention: avoid rinsing, spitting, straws, and smoking for a week. Follow all aftercare instructions carefully. If pain suddenly intensifies, contact Dr. Karamcheti.",
              },
              {
                q: "Should I have sedation for wisdom teeth extraction?",
                a: "Many people choose sedation for comfort and convenience. Sedation makes the procedure faster-feeling and you remember little. If you have dental anxiety or complex extractions planned, it's a great option. Dr. Karamcheti will discuss whether sedation is appropriate and arrange transportation if needed.",
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
            Related Dental Services
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link
              href="/sedation-dentistry"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Sedation Dentistry
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Comfortable, anxiety-free extraction with our sedation options.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>

            <Link
              href="/general-dentistry-charlottesville/tooth-extractions"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Tooth Extractions
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Safe, gentle removal of compromised or painful teeth.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="navy"
        headline="Need Your Wisdom Teeth Evaluated?"
        subheadline="Schedule a consultation with Dr. Karamcheti. She'll review your X-rays and discuss your options."
        buttonText="Schedule Your Wisdom Teeth Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
