"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";
import {
  Clock,
  Zap,
  Shield,
  Eye,
  Smile,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function SameDayCrownsContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    },
  };

  const timeline = [
    {
      step: 1,
      title: "Tooth Preparation",
      duration: "15-20 min",
      description:
        "Dr. Karamcheti removes any decay and shapes your tooth to accommodate the crown. Local anesthetic ensures comfort.",
    },
    {
      step: 2,
      title: "Digital Scan",
      duration: "5-10 min",
      description:
        "The iTero scanner captures a precise 3D image of your prepared tooth and surrounding teeth for an ideal match.",
    },
    {
      step: 3,
      title: "Digital Design",
      duration: "5-10 min",
      description:
        "Dr. Karamcheti designs your crown on the computer, adjusting color, shape, and bite for a perfect fit. You approve the design.",
    },
    {
      step: 4,
      title: "Milling",
      duration: "15-20 min",
      description:
        "The CEREC mill automatically carves your crown from a solid block of ceramic or zirconia. Precision is perfect every time.",
    },
    {
      step: 5,
      title: "Finishing & Placement",
      duration: "15-20 min",
      description:
        "Dr. Karamcheti polishes the crown, checks your bite, and cements it in place. You leave with your permanent restoration.",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "One Visit, Not Two",
      description:
        "Traditional crowns require two appointments separated by a week or two. CEREC crowns are done in a single 1-2 hour visit. Perfect for busy Charlottesville professionals.",
    },
    {
      icon: Zap,
      title: "No Temporary Crown",
      description:
        "Temporary crowns are uncomfortable, can fall out, and don't protect as well as permanent ones. CEREC places your final crown immediately.",
    },
    {
      icon: Shield,
      title: "Precise Fit",
      description:
        "Digital design and milling eliminate human error. Your crown fits your tooth and bite perfectly, minimizing future adjustments.",
    },
    {
      icon: Eye,
      title: "See Your Crown Before Placement",
      description:
        "The 3D design shows exactly how your crown will look. Color, shape, and contour are previewed and approved by you before milling.",
    },
    {
      icon: Smile,
      title: "Natural-Looking Results",
      description:
        "CEREC crowns are made from high-quality ceramic or zirconia that mimics natural tooth color and translucency. The result is beautiful and durable.",
    },
    {
      icon: TrendingUp,
      title: "Immediate Protection",
      description:
        "A broken or decayed tooth is vulnerable. Your permanent crown protects it immediately — no waiting weeks with a weak temporary.",
    },
  ];

  const materials = [
    {
      name: "High-Strength Ceramic",
      best_for: "Front teeth, smile zone",
      aesthetic: "Excellent — matches natural tooth color and translucency",
      strength: "Very strong, suitable for all tooth positions",
      notes: "Most popular choice for visible teeth due to superior aesthetics",
    },
    {
      name: "Zirconia",
      best_for: "Back teeth, heavy chewers",
      aesthetic: "Good — slightly more opaque than ceramic",
      strength: "Extremely strong — most durable option",
      notes: "Best for molars where strength matters more than translucency",
    },
    {
      name: "Hybrid (Ceramic + Resin)",
      best_for: "Mixed aesthetic and strength needs",
      aesthetic: "Very good — good color match",
      strength: "Strong, slightly less than pure ceramic",
      notes: "Good balance of beauty and durability for most patients",
    },
  ];

  const idealCandidates = [
    "Large cavity that requires crown restoration",
    "Tooth with a large existing filling failing",
    "Cracked or fractured tooth",
    "Tooth that received a root canal",
    "Tooth that was ground down for cosmetic reasons",
    "Tooth with significant discoloration that whitening won't fix",
    "Implant crown (works with implants too)",
  ];

  const notIdeal = [
    "Tooth with extremely poor bone support (gum disease)",
    "Severe decay extending below the gumline (may need extraction)",
    "Very young patients whose teeth are still developing",
    "Patients unwilling to remove any healthy tooth structure",
  ];

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: timelineRef, inView: timelineInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: materialsRef, inView: materialsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: candidatesRef, inView: candidatesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2332] to-[#2a3d4d]">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative px-6 py-20 md:py-32 text-center"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-6xl font-bold text-[#faf9f7] mb-8"
          >
            Same-Day Dental Crowns in Charlottesville
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-[#c9a84c] text-[#1a2332] rounded-lg p-6 mb-8 inline-block"
          >
            <p className="font-heading text-2xl font-bold">
              One Appointment. Permanent Crown. No Waiting.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#f0ebe3] mb-10 leading-relaxed"
          >
            Using CEREC technology, Dr. Karamcheti designs and mills your crown in the office
            while you wait. No temporary crown. No second appointment. One visit from decay
            to restoration. Perfect for Charlottesville professionals who don't have time
            for traditional crown procedures.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300 text-lg shadow-lg"
            >
              Schedule Your Crown
            </a>
            <Link
              href="/contact"
              className="border-2 border-[#c9a84c] text-[#c9a84c] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#c9a84c]/10 transition-all duration-300 text-lg"
            >
              Get More Information
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Direct Answer Block */}
      <motion.section
        ref={benefitsRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Why Choose Same-Day Crowns at Willis & Associates
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#1a2332] border-l-4 border-[#c9a84c] rounded-lg p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-[#c9a84c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#faf9f7] mb-3">
                        {benefit.title}
                      </h3>
                      <p className="font-body text-[#d0ccc4] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        ref={timelineRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={timelineInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            How CEREC Same-Day Crowns Work
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c9a84c] text-[#1a2332]">
                    <span className="font-heading text-3xl font-bold">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="flex-grow bg-[#2a3d4d] rounded-lg p-8 border-l-4 border-[#c9a84c]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <h3 className="font-heading text-2xl font-bold text-[#faf9f7]">
                      {step.title}
                    </h3>
                    <span className="font-heading text-lg font-semibold text-[#c9a84c] whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>
                  <p className="font-body text-lg text-[#d0ccc4] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#c9a84c]/20 to-[#7a9e7e]/20 border border-[#c9a84c]/30 rounded-lg p-8"
          >
            <p className="font-body text-lg text-[#f0ebe3] leading-relaxed">
              <strong>Total time in the chair:</strong> 1-2 hours from start to finish.
              You arrive with a broken or decayed tooth and leave with a permanent,
              perfectly-fitting crown. No temporary, no second appointment, no waiting.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Materials */}
      <motion.section
        ref={materialsRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={materialsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Crown Materials: What's Best for Your Tooth?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {materials.map((material, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a2332] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-[#c9a84c] to-[#b89a3c] p-6">
                  <h3 className="font-heading text-2xl font-bold text-[#1a2332]">
                    {material.name}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="font-heading text-xs text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">
                      Best For
                    </p>
                    <p className="font-body text-[#f0ebe3]">
                      {material.best_for}
                    </p>
                  </div>
                  <div className="border-t border-[#2a3d4d] pt-4">
                    <p className="font-heading text-xs text-[#7a9e7e] font-semibold uppercase tracking-wide mb-2">
                      Aesthetics
                    </p>
                    <p className="font-body text-[#d0ccc4]">
                      {material.aesthetic}
                    </p>
                  </div>
                  <div className="border-t border-[#2a3d4d] pt-4">
                    <p className="font-heading text-xs text-[#7a9e7e] font-semibold uppercase tracking-wide mb-2">
                      Strength
                    </p>
                    <p className="font-body text-[#d0ccc4]">
                      {material.strength}
                    </p>
                  </div>
                  <div className="border-t border-[#2a3d4d] pt-4">
                    <p className="font-body text-[#d0ccc4] text-sm">
                      {material.notes}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-[#d0ccc4] mt-12 text-center leading-relaxed"
          >
            Dr. Karamcheti will recommend the best material for your specific tooth.
            Front teeth usually benefit from ceramic for superior aesthetics. Back teeth
            often use zirconia for maximum durability. Together you'll choose what's
            right for you.
          </motion.p>
        </div>
      </motion.section>

      {/* Ideal Candidates */}
      <motion.section
        ref={candidatesRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={candidatesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Are You a Candidate for Same-Day Crowns?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.h3
                variants={itemVariants}
                className="font-heading text-3xl font-bold text-[#7a9e7e] mb-8 text-center md:text-left"
              >
                CEREC Is Great For:
              </motion.h3>
              {idealCandidates.map((candidate, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a3d4d] rounded-lg p-6 border-l-4 border-[#7a9e7e] flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#7a9e7e]">
                      <span className="text-[#1a2332] font-bold">✓</span>
                    </div>
                  </div>
                  <p className="font-body text-[#d0ccc4]">{candidate}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              <motion.h3
                variants={itemVariants}
                className="font-heading text-3xl font-bold text-[#c9a84c] mb-8 text-center md:text-left"
              >
                May Not Be Ideal For:
              </motion.h3>
              {notIdeal.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a3d4d] rounded-lg p-6 border-l-4 border-[#c9a84c] flex items-start gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#c9a84c]">
                      <span className="text-[#1a2332] font-bold">⚠</span>
                    </div>
                  </div>
                  <p className="font-body text-[#d0ccc4]">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#c9a84c]/20 to-[#7a9e7e]/20 border border-[#c9a84c]/30 rounded-lg p-8"
          >
            <p className="font-body text-lg text-[#f0ebe3] leading-relaxed">
              <strong>Unsure if CEREC is right for you?</strong> Schedule a consultation
              with Dr. Karamcheti. She'll examine your tooth and discuss all options —
              sometimes traditional lab-made crowns are actually better, and we'll tell
              you honestly.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison */}
      <motion.section
        ref={comparisonRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={comparisonInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-8 text-center"
          >
            Same-Day vs. Traditional Crown Process
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#c9a84c]/20">
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Factor
                  </th>
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    CEREC Same-Day
                  </th>
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Traditional Lab Crown
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Appointments Required",
                    "1 visit (1-2 hours)",
                    "2 visits (1-2 weeks apart)",
                  ],
                  [
                    "Temporary Crown",
                    "None — permanent crown placed immediately",
                    "Uncomfortable temporary crown for 1-2 weeks",
                  ],
                  ["Time to Completion", "Same day", "7-14 days"],
                  [
                    "Precision",
                    "Digital design, perfect CAD/CAM milling",
                    "Depends on lab quality and technician",
                  ],
                  [
                    "Color Matching",
                    "Digital preview shows color before placement",
                    "Shade selected at first visit, may need adjustment",
                  ],
                  [
                    "Customization",
                    "Limited — CEREC works best for standard crowns",
                    "More customization options available",
                  ],
                  [
                    "Cost",
                    "Usually $1,200-1,800 per crown",
                    "Usually $1,000-2,000+ per crown",
                  ],
                  [
                    "Best For",
                    "Patients with busy schedules who want immediate results",
                    "Complex cases needing extra customization",
                  ],
                ].map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-[#1a2332]" : "bg-[#1a2332]/50"
                    }
                  >
                    <td className="font-heading font-semibold text-[#c9a84c] p-4 border-b border-[#2a3d4d]">
                      {row[0]}
                    </td>
                    <td className="font-body text-[#f0ebe3] p-4 border-b border-[#2a3d4d]">
                      {row[1]}
                    </td>
                    <td className="font-body text-[#d0ccc4] p-4 border-b border-[#2a3d4d]">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* Care Instructions */}
      <motion.section
        className="px-6 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Caring for Your CEREC Crown
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                period: "First 24 Hours",
                tips: [
                  "Avoid very hard foods while cement is fully setting",
                  "Don't chew on the crown side if possible",
                  "Rinse gently with warm salt water",
                  "Minor sensitivity is normal and usually fades quickly",
                ],
              },
              {
                period: "Long-Term Care",
                tips: [
                  "Brush twice daily with soft-bristled toothbrush (normal brushing won't damage the crown)",
                  "Floss daily — dental floss won't hurt the crown, and gum health is crucial",
                  "Avoid chewing extremely hard objects (ice, hard candy, pens)",
                  "If you grind your teeth at night, use a night guard",
                  "Regular checkups every 6 months allow Dr. Karamcheti to monitor the crown",
                ],
              },
              {
                period: "What to Expect",
                tips: [
                  "Your crown should feel like a natural tooth",
                  "Initially, your bite might feel slightly different — this is normal and adjusts quickly",
                  "The crown won't decay, but the underlying tooth can if gums recede",
                  "Most CEREC crowns last 10-15 years or longer",
                  "If a crown ever needs replacement, Dr. Karamcheti can make a new one the same day",
                ],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a3d4d] rounded-lg overflow-hidden border-l-4 border-[#c9a84c]"
              >
                <div className="bg-gradient-to-r from-[#c9a84c]/20 to-transparent p-6 border-b border-[#c9a84c]/30">
                  <h3 className="font-heading text-2xl font-bold text-[#faf9f7]">
                    {section.period}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {section.tips.map((tip, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-[#c9a84c] font-bold flex-shrink-0 mt-1">
                          •
                        </span>
                        <span className="font-body text-[#d0ccc4]">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Same-Day Crown FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                q: "Is the crown temporary or permanent?",
                a: "It's permanent. The crown milled by CEREC is your final restoration. You don't need a second appointment.",
              },
              {
                q: "Will my crown look natural?",
                a: "Yes. CEREC uses high-quality ceramic or zirconia that matches natural tooth color and translucency. Most people can't tell the difference between your crown and your natural teeth.",
              },
              {
                q: "What if the bite doesn't feel right?",
                a: "Dr. Karamcheti carefully adjusts your bite before cementing the crown. If minor adjustments are needed afterward, they're quick and easy.",
              },
              {
                q: "Can CEREC make a crown that matches my implant?",
                a: "Yes. CEREC crowns work beautifully on implants. The digital design ensures a perfect match between your implant crown and natural teeth.",
              },
              {
                q: "What if my crown breaks or gets damaged?",
                a: "With CEREC, Dr. Karamcheti can mill a replacement crown the same day. Your digital design is saved, so replacement is quick.",
              },
              {
                q: "Is the CEREC crown covered by insurance?",
                a: "Most insurance plans cover CEREC crowns the same way they cover traditional crowns. Check with your insurance for coverage details.",
              },
              {
                q: "How long will my CEREC crown last?",
                a: "With proper care, CEREC crowns typically last 10-15 years or longer. Some of Dr. Karamcheti's crowns have lasted 20+ years.",
              },
              {
                q: "Are CEREC crowns more expensive than traditional crowns?",
                a: "Similar price range, but CEREC saves time — one visit instead of two means less time off work. For busy Charlottesville professionals, the convenience is worth it.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a2332] rounded-lg p-8 border-l-4 border-[#c9a84c]"
              >
                <h3 className="font-heading text-xl font-bold text-[#c9a84c] mb-4">
                  {faq.q}
                </h3>
                <p className="font-body text-[#d0ccc4] leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Related Services */}
      <motion.section
        className="px-6 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Other Advanced Technology at Willis & Associates
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Digital X-Rays",
                description: "90% less radiation for precise crown planning",
                link: "/technology/digital-xrays",
              },
              {
                name: "iTero Digital Scanner",
                description: "Perfect impressions for custom crowns and bridges",
                link: "/technology/itero-scanner",
              },
              {
                name: "Intraoral Cameras",
                description:
                  "See tooth damage and decay before crown planning begins",
                link: "/technology/intraoral-cameras",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  href={service.link}
                  className="block bg-[#2a3d4d] border-2 border-[#c9a84c]/30 rounded-lg p-8 hover:border-[#c9a84c] transition-all group"
                >
                  <h3 className="font-heading text-2xl font-bold text-[#faf9f7] mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-body text-[#d0ccc4] mb-4">
                    {service.description}
                  </p>
                  <span className="font-heading text-[#c9a84c] font-semibold">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
