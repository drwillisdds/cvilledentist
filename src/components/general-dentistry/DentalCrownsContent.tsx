"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function DentalCrownsContent() {
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
            Dental Crowns in Charlottesville VA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Restore strength, function, and beauty to damaged teeth with custom crowns crafted to match your natural smile. Cville Dentist offers durable, natural-looking crowns and same-day crown technology.
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
            A dental crown is a tooth-shaped cap that covers a damaged or weakened tooth, restoring its strength and appearance. The crown process involves two appointments: preparation and temporary crown placement, then crown fitting. With same-day crown technology, we can complete the entire process in one visit. Crowns typically last 10-15 years with proper care.
          </p>
        </div>
      </section>

      {/* When You Need a Crown */}
      <section ref={ref1} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            When Do You Need a Crown?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A tooth may need a crown for several reasons. Dr. Karamcheti evaluates each situation to determine whether a crown is the best solution or if another treatment (like a filling or bonding) might work.
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
                Large Cavity or Decay
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When a cavity is too large for a filling to support, a crown provides superior strength and longevity. A large filling weakens the tooth structure over time, while a crown distributes chewing forces evenly.
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
                Root Canal Treatment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After a root canal, the tooth becomes brittle and prone to fracture. A crown protects the tooth and extends its life significantly. Most root canal-treated teeth need crowns to function properly long-term.
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
                Broken or Fractured Tooth
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A crown can restore a tooth that is cracked, chipped, or has broken. The extent of damage determines whether bonding, veneering, or a crown is best. Dr. Karamcheti will explain your options.
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
                Weakened Tooth with Large Filling
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A tooth with a very large existing filling loses structural integrity over time. Replacing the filling with a crown is often the smartest long-term approach, as it prevents future fracture.
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
                Cosmetic Improvement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A crown can improve the appearance of a discolored, oddly shaped, or poorly aligned tooth. This is especially useful for visible front teeth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={5}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  6
                </span>
                Support for a Bridge or Implant
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Crowns are used as anchors for dental bridges (to replace missing teeth) or as implant crowns on dental implants to replace lost teeth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Crown Materials */}
      <section ref={ref2} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Crown Materials: Choosing What is Right for You
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Dr. Karamcheti discusses material options with each patient based on the tooth location, esthetics, durability needs, and budget. Modern crowns are durable and beautiful—no longer do you have to choose between strength and appearance.
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Porcelain (All-Ceramic)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All-ceramic porcelain crowns offer the most natural appearance because they closely mimic the translucency and color of natural teeth. They are ideal for front teeth where esthetics are paramount. They are strong enough for most back teeth as well.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Benefits:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Most esthetic, matches natural teeth</li>
                  <li>No metal shows through</li>
                  <li>Biocompatible (good for sensitive gums)</li>
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
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Zirconia</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zirconia is a high-strength ceramic that is extremely durable. It resists chipping and is excellent for patients with a strong bite or heavy grinding habits. Zirconia crowns have a slightly more opaque appearance than all-ceramic crowns but look very natural, especially when Dr. Karamcheti customizes the shade.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Benefits:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Exceptional durability and strength</li>
                  <li>Resists fracture and chipping</li>
                  <li>No metal, biocompatible</li>
                  <li>Excellent for back teeth</li>
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
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Porcelain-Fused-to-Metal (PFM)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These crowns have a metal base for strength and a porcelain veneer for appearance. They are very durable and cost-effective. A thin dark line may sometimes show at the gumline as gums recede, which is why all-ceramic or zirconia is often preferred for front teeth.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Benefits:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Very strong and durable</li>
                  <li>Cost-effective</li>
                  <li>Good for back teeth</li>
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
              <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Gold Alloy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gold crowns are extremely durable and biocompatible. They last longer than any other crown material and fit more precisely at the margin. However, they are visible, so they are typically used only for back teeth. Some patients appreciate the appearance of gold on posterior teeth.
              </p>
              <div className="bg-[#f5f3f0] p-4 rounded text-sm text-gray-700">
                <p className="font-heading text-[#7a9e7e] mb-2">Benefits:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Longest-lasting material</li>
                  <li>Biocompatible, gentle on gums</li>
                  <li>Precise marginal fit</li>
                  <li>Best for back teeth only</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Crown Process at Cville Dentist */}
      <section ref={ref3} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            The Crown Process at Cville Dentist
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            The traditional crown process takes two appointments over two weeks. With same-day crown technology, we can often complete the entire process in a single visit. Here's what to expect:
          </p>

          <h3 className="font-heading text-xl mb-6 text-[#1a2332]">Traditional Two-Appointment Process</h3>

          <div className="space-y-6 mb-12">
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
                First Appointment: Tooth Preparation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Dr. Karamcheti numbs the tooth and surrounding area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Removes any decayed or damaged portions and old fillings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Shapes the remaining tooth into a conical form that will support the crown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Takes a digital impression or mold of the prepared tooth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Places a temporary crown to protect the tooth until the permanent crown is ready</span>
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
              animate={inView3 ? "visible" : "hidden"}
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
                  <span>Your impression is sent to our dental laboratory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The lab technician hand-crafts your permanent crown to match your tooth color and bite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>We typically receive your crown within 7-14 days</span>
                </li>
              </ul>
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
                Second Appointment: Crown Placement
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The temporary crown is removed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Dr. Karamcheti checks the fit, shade, and bite of the permanent crown</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Adjustments are made if needed (slight grinding on the chewing surface or contact points)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>The permanent crown is cemented onto the tooth with a strong adhesive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#c9a84c] font-bold mr-3">•</span>
                  <span>Bite is verified and final adjustments are made</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                Duration: 45-60 minutes
              </p>
            </motion.div>
          </div>

          <h3 className="font-heading text-xl mb-6 text-[#1a2332]">Same-Day Crowns (CEREC Technology)</h3>

          <div className="bg-[#f5f3f0] p-8 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-6">
              Cville Dentist offers same-day crowns using advanced CEREC technology (Chairside Economical Restoration of Esthetic Ceramics). A single appointment replaces the two-visit process:
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-[#c9a84c] font-bold text-2xl mr-4">1</span>
                <div>
                  <p className="font-heading text-[#1a2332] mb-2">Digital Scan</p>
                  <p className="text-gray-700 text-sm">
                    Dr. Karamcheti uses a digital camera to scan your prepared tooth. No impression molds needed.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#c9a84c] font-bold text-2xl mr-4">2</span>
                <div>
                  <p className="font-heading text-[#1a2332] mb-2">Design</p>
                  <p className="text-gray-700 text-sm">
                    Computer software designs your custom crown, and you can see a preview before we mill it.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#c9a84c] font-bold text-2xl mr-4">3</span>
                <div>
                  <p className="font-heading text-[#1a2332] mb-2">Milling</p>
                  <p className="text-gray-700 text-sm">
                    An in-office milling machine carves your crown from a porcelain block in about 10-15 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-[#c9a84c] font-bold text-2xl mr-4">4</span>
                <div>
                  <p className="font-heading text-[#1a2332] mb-2">Placement</p>
                  <p className="text-gray-700 text-sm">
                    Dr. Karamcheti finishes and polishes the crown, then cements it permanently. You leave with your completed crown in one visit.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded border-l-4 border-[#7a9e7e]">
              <p className="text-gray-700 text-sm">
                <strong className="text-[#1a2332]">Advantages of Same-Day Crowns:</strong> One appointment, no temporary crown, no second visit, no waiting. The CEREC crowns are milled from high-quality ceramic and are just as durable as traditional lab-made crowns.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Caring for Your Crown */}
      <section ref={ref4} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Caring for Your Crown
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A crown is a significant investment in your oral health. With proper care, your crown can last 10-15 years or longer. Here is how to protect it:
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
                    Use a soft-bristled toothbrush and non-abrasive toothpaste. Brush gently around the crown's edges.
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
                    Floss around the crown to remove plaque and food. If floss shreds, use a floss threader or water flosser.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Avoid sticky foods</p>
                  <p className="text-gray-700 text-sm">
                    Taffy, caramel, and gum can pull on the crown. If the crown becomes loose, contact us immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Avoid hard or crunchy foods</p>
                  <p className="text-gray-700 text-sm">
                    Ice, hard candy, nuts, and seeds can crack a crown. Be especially cautious with the newly crowned tooth.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Do not clench or grind</p>
                  <p className="text-gray-700 text-sm">
                    If you grind your teeth, ask Dr. Karamcheti about a night guard to protect your crown and natural teeth.
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
              Visit Cville Dentist for cleanings and exams every six months. Dr. Karamcheti will inspect your crown for any signs of wear, loosening, or failure. She will also check the tooth below the crown on X-rays to ensure the underlying tooth remains healthy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your crown cracks, chips, or becomes loose, contact us right away. Early intervention can often prevent more costly problems.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Longevity & Replacement */}
      <section ref={ref5} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            How Long Do Crowns Last?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            A well-made crown typically lasts 10-15 years or longer with proper care. Zirconia and gold crowns often last even longer—sometimes 15-25 years. Eventually, a crown may need replacement due to:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg text-[#7a9e7e] mb-4">Natural Wear</h3>
              <p className="text-gray-700 text-sm">
                The cement holding your crown weakens over time due to normal chewing forces and exposure to saliva and acids.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg text-[#7a9e7e] mb-4">Decay Below the Crown</h3>
              <p className="text-gray-700 text-sm">
                If the underlying tooth develops decay at the edge or below the crown, a new crown may be needed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg text-[#7a9e7e] mb-4">Chipping or Cracking</h3>
              <p className="text-gray-700 text-sm">
                An accident, very hard food, or heavy grinding can damage the crown. A new crown restores function.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-heading text-lg text-[#7a9e7e] mb-4">Gum Recession</h3>
              <p className="text-gray-700 text-sm">
                Gum tissue naturally recedes with age. If the margin of a crown becomes visible, replacement may be desired.
              </p>
            </div>
          </div>

          <div className="bg-[#f5f3f0] p-8 rounded-lg">
            <h3 className="font-heading text-lg text-[#1a2332] mb-4">Why Replace Rather Than Repair?</h3>
            <p className="text-gray-700 leading-relaxed">
              In most cases, a damaged crown cannot be repaired and must be replaced. This prevents infection, maintains proper bite, and ensures the underlying tooth remains protected. Dr. Karamcheti will advise whether repair or replacement is necessary.
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
                Will my crown feel natural?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Dr. Karamcheti carefully shapes your crown to match your bite and the size, shape, and color of your natural teeth. After a few days, you should forget the crown is there. If it feels high or uncomfortable, call us and we will adjust it.
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
                Is getting a crown painful?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No. The tooth and surrounding area are fully numbed before Dr. Karamcheti begins. You may feel vibration and hear sounds, but you should not feel pain. If you do experience any discomfort, let us know immediately and we will apply additional anesthetic.
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
                What is the difference between same-day crowns and lab-made crowns?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Same-day CEREC crowns are milled from high-quality ceramic blocks and are just as durable as lab-made crowns. The advantage is speed—you get your crown in one appointment. Lab-made crowns offer slightly more customization and hand-finishing by a lab technician. Both are excellent options.
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
                Can I eat normally with a crown?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Almost. Once the crown is fully set, you can eat most foods. Avoid very hard foods (like hard candy or ice), very sticky foods (like taffy), and chewing on the crown directly during the first few days while you adjust. Use your other side for chewing if you are unsure.
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
                What is temporary cement used for during the temporary crown stage?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The temporary crown is held with temporary cement that dissolves over time and can be easily removed. This allows Dr. Karamcheti to remove it without damaging the prepared tooth when your permanent crown arrives. Your temporary crown may fall off—if it does, call us right away and we will replace it to protect your tooth.
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
                <p className="text-gray-600 text-sm">Professional cleanings and comprehensive exams</p>
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
                <h3 className="font-heading text-lg mb-2">Schedule Your Crown Consultation</h3>
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
            Restore Your Smile With a Custom Crown
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Cville Dentist offers expert crown placement with same-day CEREC technology and beautiful lab-made crowns. Dr. Karamcheti will help you choose the perfect material for your tooth.
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
