"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function DentalBridgesContent() {
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
            Dental Bridges in Charlottesville
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Restore your smile and confidence with a fixed dental bridge. Willis & Associates offers multiple bridge options to replace missing teeth and restore your ability to eat, speak, and smile naturally.
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
            A dental bridge is a fixed prosthesis that replaces one or more missing teeth by spanning the gap and anchoring to adjacent teeth or implants. Bridges restore your smile, preserve your bite, and prevent teeth from shifting. Dr. Karamcheti offers traditional bridges (supported by natural teeth), Maryland bridges (bonded to neighboring teeth), cantilever bridges, and implant-supported bridges. The choice depends on which teeth are missing and the overall condition of your mouth.
          </p>
        </div>
      </section>

      {/* Why Replace Missing Teeth */}
      <section ref={ref1} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Why Replace Missing Teeth?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A missing tooth is not just a cosmetic concern. It affects your function, health, and the stability of your remaining teeth. Here is why replacement matters:
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  1
                </span>
                Prevents Remaining Teeth from Shifting
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When a tooth is missing, the teeth on either side of the gap drift toward the empty space. Teeth above or below the gap also shift upward or downward. This creates bite problems, misalignment, and difficulty cleaning teeth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  2
                </span>
                Maintains Proper Chewing Function
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A missing tooth affects your ability to chew properly. Many people shift chewing to the other side of the mouth, causing wear and tear on that side and poor nutrition if you avoid certain foods.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  3
                </span>
                Prevents Gum Disease and Decay
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A gap left by a missing tooth is difficult to clean. Food and plaque accumulate, leading to gum disease and decay in neighboring teeth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  4
                </span>
                Improves Appearance and Speech
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A missing tooth affects your smile and can change the way you speak. Filling the gap restores your confidence and eliminates changes to your speech.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={4}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  5
                </span>
                Protects Your Jaw and Facial Structure
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Missing teeth can contribute to jaw problems and changes in facial height and appearance over time. Replacing teeth early prevents these complications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Types of Bridges */}
      <section ref={ref2} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Types of Dental Bridges
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Dr. Karamcheti will recommend the best bridge type based on which teeth are missing, the health of your remaining teeth, and your budget. Here are the main options:
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Traditional Bridge</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A traditional bridge is the most common type. It consists of one or more artificial teeth (pontics) held in place by crowns on the teeth on either side of the gap (abutment teeth). The abutment teeth must be reshaped and crowned to support the bridge.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Best for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>One or more missing teeth in a row</li>
                  <li>When teeth on both sides of the gap are healthy enough for crowns</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Cantilever Bridge</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A cantilever bridge is anchored on only one side. It is supported by a crown on an abutment tooth on one end, with the artificial tooth extending out from that support, cantilevered over the gap.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Best for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>One missing tooth with a healthy tooth on only one side</li>
                  <li>Missing tooth at the end of a row</li>
                  <li>When there is no tooth on the other side to use as an abutment</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Maryland Bridge (Resin-Bonded Bridge)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Maryland bridge is a conservative option. It has a false tooth anchored by a framework bonded to the back of the adjacent teeth using composite resin. No crowns are needed on the abutment teeth, so less tooth structure is removed.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Best for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>One or two missing front teeth</li>
                  <li>When you want to preserve tooth structure</li>
                  <li>Young patients with healthy teeth</li>
                  <li>Lower cost option</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Implant-Supported Bridge</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                An implant-supported bridge uses dental implants as anchors instead of natural teeth. Implants are surgically placed in the jawbone where teeth are missing, and the bridge is anchored to the implants. This option preserves the abutment teeth and preserves bone.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Best for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Multiple missing teeth in a row</li>
                  <li>When adjacent teeth are not strong enough to be abutments</li>
                  <li>Long-term solution (implants last many years)</li>
                  <li>Preserves natural teeth and bone</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bridge vs Implant */}
      <section ref={ref3} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Bridge vs Implant: Which is Right for You?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Both bridges and implants replace missing teeth, but they work differently. Here is how they compare:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#1a2332] text-white">
                <tr>
                  <th className="p-4 text-left font-heading">Factor</th>
                  <th className="p-4 text-left font-heading">Bridge</th>
                  <th className="p-4 text-left font-heading">Implant</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Treatment time</td>
                  <td className="p-4 text-gray-700">2-3 weeks (2 appointments)</td>
                  <td className="p-4 text-gray-700">3-6 months (multiple appointments)</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f5f3f0]">
                  <td className="p-4 font-heading text-[#7a9e7e]">Cost</td>
                  <td className="p-4 text-gray-700">Lower initial cost</td>
                  <td className="p-4 text-gray-700">Higher initial cost</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Effect on adjacent teeth</td>
                  <td className="p-4 text-gray-700">Requires crowns on abutment teeth</td>
                  <td className="p-4 text-gray-700">Does not affect adjacent teeth</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f5f3f0]">
                  <td className="p-4 font-heading text-[#7a9e7e]">Bone preservation</td>
                  <td className="p-4 text-gray-700">Bone under missing tooth continues to shrink</td>
                  <td className="p-4 text-gray-700">Implant preserves bone</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-heading text-[#7a9e7e]">Lifespan</td>
                  <td className="p-4 text-gray-700">7-10 years, may need replacement</td>
                  <td className="p-4 text-gray-700">15+ years, often lifelong</td>
                </tr>
                <tr className="border-b border-gray-200 bg-[#f5f3f0]">
                  <td className="p-4 font-heading text-[#7a9e7e]">Maintenance</td>
                  <td className="p-4 text-gray-700">Clean under bridge (floss threader or water flosser)</td>
                  <td className="p-4 text-gray-700">Brush and floss like natural teeth</td>
                </tr>
                <tr>
                  <td className="p-4 font-heading text-[#7a9e7e]">Surgical requirement</td>
                  <td className="p-4 text-gray-700">No surgery</td>
                  <td className="p-4 text-gray-700">Surgical implant placement required</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-[#f5f3f0] p-6 rounded-lg">
            <h3 className="font-heading text-lg text-[#1a2332] mb-4">Which Should You Choose?</h3>
            <p className="text-gray-700 leading-relaxed">
              The best choice depends on your situation. If you need a replacement quickly and cost is a concern, a bridge is a good option. If you have healthy adjacent teeth you want to preserve, or if you want the longest-lasting solution, an implant is better. Dr. Karamcheti will discuss both options and help you make the decision that fits your needs and timeline.
            </p>
          </div>
        </motion.div>
      </section>

      {/* The Bridge Process */}
      <section ref={ref4} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            The Bridge Process at Willis & Associates
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Getting a bridge typically takes two appointments over 2-3 weeks. Here is what to expect:
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  1
                </span>
                First Appointment: Planning & Preparation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Dr. Karamcheti examines the gap and the adjacent teeth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>X-rays are taken to evaluate tooth and bone health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Dr. Karamcheti discusses bridge options and materials (porcelain, zirconia, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The abutment teeth are shaped to receive crowns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>An impression is taken and sent to our laboratory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>A temporary bridge is placed while the permanent bridge is made</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                Duration: 60-90 minutes
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  2
                </span>
                Between Appointments
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Our laboratory technician hand-crafts your bridge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The bridge is made to match your tooth color and shape</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>We typically receive your bridge within 7-14 days</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-10 h-10 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 font-bold">
                  3
                </span>
                Second Appointment: Bridge Placement
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The temporary bridge is removed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Dr. Karamcheti checks the fit and bite of your permanent bridge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Any adjustments are made as needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The bridge is cemented permanently in place</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>You receive instructions on cleaning and caring for your bridge</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                Duration: 45-60 minutes
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Bridge Care & Maintenance */}
      <section ref={ref5} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Caring for Your Bridge
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A dental bridge can last 7-10 years or longer with excellent care. The key is keeping the bridge and the supporting teeth very clean.
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
                    Use a soft-bristled toothbrush. Brush the bridge and the supporting teeth carefully, especially around the crown margins.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Clean under the bridge</p>
                  <p className="text-gray-700 text-sm">
                    This is the most important step. The area under the false tooth (pontic) cannot be reached with regular floss. Use a floss threader, water flosser, or special bridge floss to clean underneath daily.
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
                    Do not chew hard candy, ice, nuts, or sticky foods like taffy near your bridge. These can damage the bridge or loosen it.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Use a mouthwash</p>
                  <p className="text-gray-700 text-sm">
                    An antimicrobial mouthwash helps kill bacteria around your bridge and supporting teeth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="font-heading text-lg mb-6 text-[#1a2332]">Regular Checkups</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visit Willis & Associates every six months for cleanings and exams. Dr. Karamcheti will check your bridge for loosening, damage, or decay at the margins. She will also examine the supporting teeth and monitor the bone beneath the bridge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your bridge becomes loose, uncomfortable, or damaged, contact us immediately. Early intervention can often save the bridge. If the bridge fails completely, a new bridge or implant can be placed.
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
                Will my bridge look natural?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Dr. Karamcheti carefully matches the bridge to your natural teeth in color, shape, and shade. The artificial tooth (pontic) is indistinguishable from a natural tooth. The supporting crowns blend seamlessly with your smile.
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
                Is getting a bridge painful?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. The abutment teeth are numbed before Dr. Karamcheti shapes them. You may feel vibration and hear sounds, but you should not feel pain. If you do experience discomfort, let us know and we will apply additional anesthetic.
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
                How do I clean under a bridge?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A floss threader (a small plastic tool) helps you thread floss under the bridge. You can also use a water flosser or special bridge floss. Dr. Karamcheti will show you the best technique during your appointment. We recommend doing this daily.
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
                Can I eat normally with a bridge?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, mostly. You can eat almost all foods once the bridge is fully set. Avoid very hard, sticky, or crunchy foods that could damage the bridge or loosen it. Use the other side of your mouth for chewing if you are uncomfortable chewing on the bridge side initially.
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
                What happens if my bridge becomes loose?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If your bridge becomes loose, call us immediately. Do not wait. Decay can develop quickly beneath a loose bridge, and the abutment teeth can be damaged. We can often re-cement the bridge if it is still in good condition. If the bridge is damaged, a new bridge will be needed.
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
                How long does a bridge last?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A well-maintained bridge typically lasts 7-10 years. Some bridges last longer with excellent care. Eventually, the cement weakens or the underlying teeth develop problems, and the bridge needs to be replaced. Regular checkups help us catch problems early.
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
            <Link href="/general-dentistry-charlottesville/dental-crowns">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Crowns</h3>
                <p className="text-gray-600 text-sm">Restore strength and appearance</p>
              </motion.div>
            </Link>

            <Link href="/general-dentistry-charlottesville/cleanings-exams">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Cleanings & Exams</h3>
                <p className="text-gray-600 text-sm">Professional cleanings and checkups</p>
              </motion.div>
            </Link>

            <Link href="/general-dentistry-charlottesville/dental-fillings">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Tooth-Colored Fillings</h3>
                <p className="text-gray-600 text-sm">Natural-looking cavity treatment</p>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                className="bg-[#c9a84c] rounded-lg p-6 text-white cursor-pointer hover:bg-[#b89536] transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg mb-2">Schedule Your Bridge Consultation</h3>
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
            Replace Missing Teeth With a Dental Bridge
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Willis & Associates offers custom dental bridges to restore your smile and bite. Dr. Karamcheti will help you choose the best bridge type for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#c9a84c] hover:bg-[#b89536] text-white font-bold py-3 px-8 rounded transition-colors">
                Schedule a Consultation
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
