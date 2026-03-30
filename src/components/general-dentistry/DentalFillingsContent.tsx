"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function DentalFillingsContent() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.2, triggerOnce: true });

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a2332]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6 text-[#1a2332]">
            Tooth-Colored Fillings in Charlottesville
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fast, natural-looking cavity repair. Cville Dentist uses tooth-colored composite fillings that blend seamlessly with your teeth while providing durable, long-lasting protection against decay.
          </p>
        </motion.div>
      </section>

      {/* Quick Answer Block */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto bg-[#f5f3f0] border-l-4 border-[#c9a84c] p-6 rounded">
          <h3 className="font-heading text-lg text-[#c9a84c] mb-3 flex items-center">
            <span className="mr-2">●</span> Quick Answer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A tooth-colored filling is a composite resin restoration that restores a decayed or damaged tooth. Composite fillings match your natural tooth color, require less tooth removal than old amalgam fillings, and bond directly to the tooth for a strong repair. The filling process takes 20-30 minutes. With proper care, a composite filling lasts 7-10 years or longer.
          </p>
        </div>
      </section>

      {/* Composite vs Amalgam */}
      <section ref={ref1} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Tooth-Colored Fillings vs Amalgam: Why We Choose Composite
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Cville Dentist uses tooth-colored composite fillings as the standard for all cavity treatment. Here is why composite is superior to the old silver amalgam fillings:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#1a2332] text-white">
                <tr>
                  <th className="p-4 text-left font-heading">Factor</th>
                  <th className="p-4 text-left font-heading">Composite (Tooth-Colored)</th>
                  <th className="p-4 text-left font-heading">Amalgam (Silver)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Appearance</td>
                  <td className="p-4 text-gray-700">Matches natural tooth color, invisible</td>
                  <td className="p-4 text-gray-700">Silver/gray color, very visible</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f5f3f0]">
                  <td className="p-4 font-heading text-[#7a9e7e]">Tooth removal</td>
                  <td className="p-4 text-gray-700">Minimal—only decayed tooth removed</td>
                  <td className="p-4 text-gray-700">More tooth structure must be removed for retention</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Bonding</td>
                  <td className="p-4 text-gray-700">Bonds directly to tooth, very strong</td>
                  <td className="p-4 text-gray-700">Does not bond; relies on shape for retention</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f5f3f0]">
                  <td className="p-4 font-heading text-[#7a9e7e]">Placement time</td>
                  <td className="p-4 text-gray-700">15-30 minutes per filling</td>
                  <td className="p-4 text-gray-700">Similar time, but process is messier</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Durability</td>
                  <td className="p-4 text-gray-700">7-10 years or longer</td>
                  <td className="p-4 text-gray-700">10-15 years, but tooth may fracture</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f5f3f0]">
                  <td className="p-4 font-heading text-[#7a9e7e]">Temperature sensitivity</td>
                  <td className="p-4 text-gray-700">Insulates tooth, less sensitivity</td>
                  <td className="p-4 text-gray-700">Conducts temperature, more sensitivity</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Mercury concerns</td>
                  <td className="p-4 text-gray-700">No mercury</td>
                  <td className="p-4 text-gray-700">Contains mercury (safe but controversial)</td>
                </tr>
                <tr>
                  <td className="p-4 font-heading text-[#7a9e7e]">Can be replaced with crown</td>
                  <td className="p-4 text-gray-700">Yes, easily</td>
                  <td className="p-4 text-gray-700">Yes, but tooth may be weak</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[#f5f3f0] p-6 rounded-lg">
            <h3 className="font-heading text-lg text-[#1a2332] mb-3">Why Composite is the Better Choice</h3>
            <p className="text-gray-700 leading-relaxed">
              Composite fillings are esthetic, durable, require less tooth removal, insulate the tooth against temperature sensitivity, and allow for future upgrades to a crown if needed. If you have old silver amalgam fillings, Dr. Karamcheti can replace them with composite fillings for a more natural appearance and better long-term outcomes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Cavity Detection */}
      <section ref={ref2} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            How We Detect Cavities
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Early detection means smaller fillings and better outcomes. At Cville Dentist, we use advanced technology to catch cavities at their earliest stage.
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  1
                </span>
                Digital X-Rays
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Digital X-rays show cavities between teeth and below the gumline where visual inspection cannot detect decay. These images reveal decay at the earliest stages, when fillings are smallest and easiest to place. Digital X-rays use minimal radiation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  2
                </span>
                Visual Examination
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti visually inspects each tooth for signs of decay, discoloration, or soft areas. She uses an explorer (a thin instrument) to check for soft spots that may indicate early cavity formation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  3
                </span>
                Digital Cavity Detection Technology
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Advanced digital tools can detect the earliest stages of decay—often before it is visible on X-rays. This allows Dr. Karamcheti to monitor small areas of concern and catch cavities when they are minimal.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  4
                </span>
                Early Intervention
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If a small area of decay is detected, Dr. Karamcheti may recommend monitoring it with improved home care and fluoride treatment rather than immediately placing a filling. Many small cavities can be halted or reversed with proper care.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Filling Process */}
      <section ref={ref3} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            The Filling Process at Cville Dentist
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A composite filling typically takes 20-30 minutes to place. Here is what to expect:
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  1
                </span>
                Numbing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti applies topical anesthetic to the area, then injects local anesthetic to numb the tooth and surrounding tissue. You will feel a pinch, but then the area becomes numb and comfortable.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  2
                </span>
                Decay Removal
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti uses a small drill to remove the decayed portion of the tooth. She removes only the affected area, preserving as much healthy tooth structure as possible. You will hear a high-pitched sound and feel vibration, but you should not feel pain.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  3
                </span>
                Cleaning
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The cavity is thoroughly cleaned and dried. A protective liquid may be applied to the exposed dentin (the inner layer of the tooth) to prevent sensitivity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  4
                </span>
                Bonding Agent Application
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A bonding agent (liquid resin) is applied to the cavity. This prepares the tooth surface for the composite filling and creates a strong bond between the filling and your tooth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={4}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  5
                </span>
                Composite Application
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti selects the shade of composite that matches your tooth color. The composite resin is applied in layers to fill the cavity. Each layer is hardened with a special blue light before the next layer is added.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={5}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  6
                </span>
                Shaping and Polishing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Once the composite is hardened, Dr. Karamcheti shapes it with small burs to match the natural contours of your tooth. The surface is then polished to a smooth, high shine. You cannot tell the filling from the natural tooth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={6}
              variants={staggerVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  7
                </span>
                Bite Check
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You bite down on the filled tooth to ensure the bite is correct. If the filling feels too high, Dr. Karamcheti will adjust it slightly so your bite feels natural and comfortable.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* When a Filling Becomes a Crown */}
      <section ref={ref4} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            When Does a Filling Need to Become a Crown?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Not every cavity needs a crown. However, large cavities may require a crown instead of a filling. Here is how Dr. Karamcheti decides:
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Fillings Work Best For</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Small to moderate cavities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Cavities on smooth surfaces (not biting surfaces)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Teeth where most of the original structure remains</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Crowns Are Better For</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Large cavities that affect a significant portion of the tooth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Cavities on biting surfaces that bear heavy chewing forces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Teeth that have had root canal treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Teeth with multiple large fillings that have failed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Teeth that are severely cracked or broken</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 bg-[#f5f3f0] p-6 rounded-lg">
            <h3 className="font-heading text-lg text-[#1a2332] mb-3">Why Larger Cavities Need Crowns</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A large filling removes a substantial amount of tooth structure, weakening the tooth. A tooth with a large filling is at risk of cracking or fracturing under the stress of chewing. A crown encases the entire tooth, distributing chewing forces and preventing future fracture.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dr. Karamcheti will discuss whether your cavity is better treated with a filling or a crown. Sometimes a filling is appropriate, even for a moderately large cavity. Other times, a crown is the smarter long-term choice to prevent future problems.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Caring for Your Filling */}
      <section ref={ref5} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Caring for Your Filling
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A composite filling is just as strong as the tooth around it when you care for it properly. Here is how to make your filling last:
          </p>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="font-heading text-lg mb-6 text-[#1a2332]">Daily Care</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Brush twice daily</p>
                  <p className="text-gray-700 text-sm">
                    Use a soft-bristled toothbrush and non-abrasive toothpaste. Brush gently around the filling.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Floss daily</p>
                  <p className="text-gray-700 text-sm">
                    Floss between your teeth to remove plaque and food. This prevents decay from developing around the filling margins.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Avoid hard and sticky foods</p>
                  <p className="text-gray-700 text-sm">
                    Do not chew hard candy, ice, or nuts near a new filling while you are adjusting to it. Avoid sticky foods like taffy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Limit acidic foods and drinks</p>
                  <p className="text-gray-700 text-sm">
                    Acid from soft drinks, fruit juice, and wine weakens enamel. If you consume acidic foods, rinse with water afterward.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Do not grind your teeth</p>
                  <p className="text-gray-700 text-sm">
                    If you grind your teeth, ask Dr. Karamcheti about a night guard. Grinding can crack fillings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Do not use teeth as tools</p>
                  <p className="text-gray-700 text-sm">
                    Avoid opening bottles or packages with your teeth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="font-heading text-lg mb-6 text-[#1a2332]">Regular Checkups</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visit Cville Dentist every six months for cleanings and exams. Dr. Karamcheti will check your filling for signs of wear, decay around the margins, or chipping. If a filling is failing, early replacement prevents the underlying tooth from developing decay.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A composite filling typically lasts 7-10 years. Some last longer with excellent care. When a filling fails, we can replace it or upgrade the tooth to a crown if needed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-12 text-[#1a2332]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Is getting a filling painful?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. The tooth is numbed with local anesthetic before Dr. Karamcheti begins. You will feel pressure and vibration, and hear a high-pitched sound, but you should not feel pain. If you do experience any discomfort, let us know and we will apply additional anesthetic.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                How long does it take to place a filling?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A composite filling typically takes 20-30 minutes. The time depends on the size and location of the cavity. Multiple cavities take longer, but we can often place 2-3 fillings in a single appointment.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Can I eat immediately after getting a filling?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You can eat once the anesthetic wears off (about 2-3 hours). However, avoid hard and crunchy foods for the first few days while the composite fully hardens. Stick to soft foods for a few days if you want to be cautious.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Why is the blue light used during filling placement?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The blue light (also called a curing light) hardens each layer of composite resin. Without the light, the composite would not harden. The light is safe and painless—you may feel slight warmth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Can fillings chip or break?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Composite fillings are durable, but they can chip if you chew hard foods or if you grind your teeth. If your filling chips or breaks, contact us and we will repair or replace it. A night guard helps protect fillings if you grind at night.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Why does the filled tooth sometimes feel sensitive?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Temporary sensitivity to temperature is normal for a few days after filling placement. The tooth can be sensitive to hot, cold, or sweet foods. This usually resolves within a few days as the tooth settles. If sensitivity persists, contact us and we can apply fluoride or a desensitizing treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#f5f3f0] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Related General Dentistry Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/general-dentistry-charlottesville/cleanings-exams">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Cleanings & Exams</h3>
                <p className="text-gray-600 text-sm">Early cavity detection and prevention</p>
              </motion.div>
            </Link>

            <Link href="/general-dentistry-charlottesville/dental-crowns">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Crowns</h3>
                <p className="text-gray-600 text-sm">For large cavities and tooth restoration</p>
              </motion.div>
            </Link>

            <Link href="/general-dentistry-charlottesville/dental-bridges">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Bridges</h3>
                <p className="text-gray-600 text-sm">Replace missing teeth</p>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                className="bg-[#c9a84c] rounded-lg p-6 text-white cursor-pointer hover:bg-[#b89536] transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg mb-2">Schedule Your Filling</h3>
                <p className="text-sm">Book online or call us today</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a2332] to-[#2a3545] rounded-lg p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-heading mb-4">
            Stop Cavities With a Tooth-Colored Filling
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Cville Dentist offers fast, natural-looking composite fillings. Dr. Karamcheti will remove decay and restore your tooth to full strength in a single visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#c9a84c] hover:bg-[#b89536] text-white font-bold py-3 px-8 rounded transition-colors">
                Schedule an Appointment
              </button>
            </Link>
            <a href="tel:(434) 973-5873">
              <button className="bg-transparent hover:bg-[#1a2332] text-white font-bold py-3 px-8 rounded border-2 border-[#c9a84c] transition-colors">
                (434) 973-5873
              </button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
