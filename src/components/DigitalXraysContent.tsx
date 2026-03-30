"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  Zap,
  Shield,
  Eye,
  Clock,
  Microscope,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function DigitalXraysContent() {
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

  const radiationComparison = [
    {
      type: "Film X-Ray",
      dosage: "1.0 µSv (baseline)",
      notes: "Traditional method, slower processing",
    },
    {
      type: "Digital X-Ray",
      dosage: "0.1 µSv",
      notes: "90% reduction in radiation exposure",
    },
    {
      type: "One Year of Natural Background",
      dosage: "2.7 mSv",
      notes: "A digital x-ray is about 0.04% of annual natural exposure",
    },
  ];

  const xrayTypes = [
    {
      icon: Eye,
      name: "Bitewing X-Rays",
      description:
        "Show upper and lower back teeth in detail. Reveals decay between teeth and bone loss. Taken during routine checkups.",
      usesAt: "Routine exams, decay detection",
    },
    {
      icon: Microscope,
      name: "Panoramic X-Rays",
      description:
        "Full-mouth overview in one image. Shows all teeth, jaw structure, and surrounding bone. Excellent for detecting implant sites.",
      usesAt: "New patient exams, implant planning",
    },
    {
      icon: TrendingUp,
      name: "Periapical X-Rays",
      description:
        "Focus on individual teeth from crown to root tip. Shows root structure and bone supporting the tooth. Used for detailed assessment.",
      usesAt: "Root canal evaluation, infection detection",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "90% Less Radiation",
      description:
        "Digital sensors require significantly less exposure than film. Safe for children, adults, and pregnant patients.",
    },
    {
      icon: Clock,
      title: "Instant Results",
      description:
        "No waiting for film to be processed. Images appear on screen immediately for real-time discussion with Dr. Karamcheti.",
    },
    {
      icon: Eye,
      title: "Better Visibility",
      description:
        "High-resolution digital images can be enlarged and enhanced. Dr. Karamcheti spots decay, bone loss, and abnormalities earlier.",
    },
    {
      icon: Zap,
      title: "Patient Education",
      description:
        "See exactly what Dr. Karamcheti sees. Digital display lets you understand treatment recommendations and oral health status.",
    },
  ];

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: xraysRef, inView: xraysInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: comparisonRef, inView: comparisonInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatRevealRef, inView: whatRevealInView } = useInView({
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
            Digital X-Rays in Charlottesville
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-[#c9a84c] text-[#1a2332] rounded-lg p-6 mb-8 inline-block"
          >
            <p className="font-heading text-2xl font-bold">
              90% Less Radiation. Instant Results. Better Diagnosis.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#f0ebe3] mb-10 leading-relaxed"
          >
            Willis & Associates uses advanced digital x-ray technology to provide
            fast, safe, and precise imaging. Dr. Karamcheti can see what matters most
            — early decay, bone loss, infection — and create better treatment plans
            for you.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300 text-lg shadow-lg"
            >
              Schedule Your X-Ray Exam
            </a>
            <Link
              href="/new-patients"
              className="border-2 border-[#c9a84c] text-[#c9a84c] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#c9a84c]/10 transition-all duration-300 text-lg"
            >
              New Patient Info
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
            Why Digital X-Rays Are the Standard at Our Charlottesville Office
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

      {/* X-Ray Types Section */}
      <motion.section
        ref={xraysRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={xraysInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Types of Digital X-Rays We Use
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {xrayTypes.map((xray, index) => {
              const Icon = xray.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a3d4d] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-[#c9a84c] to-[#b89a3c] p-6">
                    <Icon className="w-10 h-10 text-[#1a2332] mb-3" />
                    <h3 className="font-heading text-2xl font-bold text-[#1a2332]">
                      {xray.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-[#d0ccc4] mb-6 leading-relaxed">
                      {xray.description}
                    </p>
                    <div className="border-t border-[#1a2332] pt-4">
                      <p className="font-body text-sm text-[#c9a84c] font-semibold uppercase tracking-wide">
                        Used For:
                      </p>
                      <p className="font-body text-[#f0ebe3] mt-2">
                        {xray.usesAt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-[#d0ccc4] mt-12 text-center leading-relaxed"
          >
            Dr. Karamcheti selects the appropriate x-ray type based on your specific
            needs and treatment plan. This precision approach means you only receive
            imaging that contributes to your diagnosis and care.
          </motion.p>
        </div>
      </motion.section>

      {/* Radiation Comparison */}
      <motion.section
        ref={comparisonRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={comparisonInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-8 text-center"
          >
            How Safe Are Digital X-Rays?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-[#d0ccc4] mb-12 text-center leading-relaxed"
          >
            Digital x-rays are among the safest diagnostic tools in dentistry. Let's
            put the radiation exposure in perspective:
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="space-y-4"
          >
            {radiationComparison.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a2332] border-l-4 border-[#c9a84c] rounded-lg p-8"
              >
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#faf9f7]">
                      {item.type}
                    </h3>
                  </div>
                  <div>
                    <p className="font-heading text-3xl font-bold text-[#c9a84c]">
                      {item.dosage}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-[#d0ccc4]">{item.notes}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#c9a84c]/20 to-[#7a9e7e]/20 border border-[#c9a84c]/30 rounded-lg p-8"
          >
            <p className="font-body text-[#f0ebe3] leading-relaxed">
              <strong>Bottom line:</strong> A single digital x-ray exposes you to less
              radiation than you receive naturally from the sun and space in just one
              day. The diagnostic benefit far outweighs any risk. For pregnant patients,
              digital x-rays can be taken safely with appropriate precautions — always
              inform Dr. Karamcheti if you're pregnant.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Digital X-Rays Reveal */}
      <motion.section
        ref={whatRevealRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={whatRevealInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            What Digital X-Rays Reveal
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                title: "Early Decay Between Teeth",
                description:
                  "Cavities between teeth are invisible to the naked eye. Digital x-rays show decay in its earliest stages, before symptoms develop. Early treatment means smaller fillings and lower cost.",
              },
              {
                title: "Bone Loss and Gum Disease",
                description:
                  "Periodontitis (advanced gum disease) erodes the bone supporting your teeth. Digital x-rays show the extent of bone loss and help Dr. Karamcheti monitor whether treatment is working.",
              },
              {
                title: "Hidden Infections",
                description:
                  "Abscessed teeth, failed root canals, and other infections may not cause obvious symptoms. Digital imaging reveals these problems so Dr. Karamcheti can treat them before they worsen.",
              },
              {
                title: "Impacted or Developing Teeth",
                description:
                  "Wisdom teeth, baby teeth that won't come out, or teeth growing in wrong directions show up clearly on panoramic digital x-rays. Helpful for planning orthodontics or extractions.",
              },
              {
                title: "Cysts, Tumors, and Abnormalities",
                description:
                  "Rare but serious lesions can develop in your jaw. Digital x-rays help Dr. Karamcheti spot these early for prompt referral to specialists.",
              },
              {
                title: "Implant and Bone Structure",
                description:
                  "Planning for dental implants requires detailed imaging of bone height and width. Digital x-rays and panoramic views show whether you're a candidate for implants.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a3d4d] rounded-lg p-8 border-l-4 border-[#7a9e7e]"
              >
                <h3 className="font-heading text-2xl font-bold text-[#faf9f7] mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-lg text-[#d0ccc4] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison to Film X-Rays */}
      <motion.section
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
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
            Digital vs. Film X-Rays
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#c9a84c]/20">
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Feature
                  </th>
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Digital
                  </th>
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Film
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Radiation Dose", "0.1 µSv (minimal)", "1.0 µSv"],
                  ["Processing Time", "Instant (1-2 seconds)", "5-10 minutes"],
                  ["Image Quality", "High-resolution, can be enlarged", "Fixed resolution"],
                  ["Patient Education", "Easy to display and explain", "Harder to visualize"],
                  ["Storage", "Digital files (searchable, organized)", "Physical files (easy to lose)"],
                  ["Environmental Impact", "No chemical waste", "Chemical processing required"],
                  ["Cost Over Time", "More efficient", "More expensive long-term"],
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

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Digital X-Ray FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                q: "Do I need x-rays at every appointment?",
                a: "No. Dr. Karamcheti takes x-rays based on your specific needs — typically at new patient exams, annual checkups, and when investigating a specific problem. Kids may need them more frequently due to changing teeth.",
              },
              {
                q: "Are digital x-rays safe for kids?",
                a: "Yes, absolutely. Kids' teeth are more susceptible to decay, so regular x-rays help catch problems early. The radiation dose is minimal, and Dr. Karamcheti takes extra care with protective shielding.",
              },
              {
                q: "What if I'm claustrophobic or have a gag reflex?",
                a: "Digital x-rays are quick — the sensor is in your mouth for just a few seconds. Some types (like panoramic) don't require anything in your mouth at all. Talk to Dr. Karamcheti about your concerns.",
              },
              {
                q: "Why do I need x-rays if my teeth feel fine?",
                a: "Many dental problems don't cause symptoms until they're advanced. Decay between teeth, bone loss, infections, and other issues can develop silently. X-rays catch these early when treatment is simpler and less expensive.",
              },
              {
                q: "Can I decline x-rays?",
                a: "Yes, it's your choice. However, without x-rays, Dr. Karamcheti can only see surface problems. You may miss early decay, bone loss, or other serious issues. We recommend following Dr. Karamcheti's recommendations for optimal oral health.",
              },
              {
                q: "How often should I get panoramic x-rays?",
                a: "Typically every 3-5 years for most adults, or more frequently if you have gum disease or are planning implants. Dr. Karamcheti will discuss the right frequency for your situation.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a3d4d] rounded-lg p-8 border-l-4 border-[#c9a84c]"
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
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
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
            Explore Our Other Advanced Dental Technology
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "iTero Digital Scanner",
                description: "No-gag impressions using 3D scanning technology",
                link: "/technology/itero-scanner",
              },
              {
                name: "Intraoral Cameras",
                description: "See exactly what Dr. Karamcheti sees during your exam",
                link: "/technology/intraoral-cameras",
              },
              {
                name: "Same-Day Crowns",
                description:
                  "Complete crown restoration in a single appointment using CEREC",
                link: "/same-day-crowns",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link
                  href={service.link}
                  className="block bg-[#1a2332] border-2 border-[#c9a84c]/30 rounded-lg p-8 hover:border-[#c9a84c] transition-all group"
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
