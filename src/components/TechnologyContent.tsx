"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "@/lib/images";
import CTASection from "@/components/CTASection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function TechnologyContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: techCardsRef, inView: techCardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: howWorksRef, inView: howWorksInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      icon: "🔍",
      title: "Digital X-Rays",
      description:
        "80% less radiation than traditional film X-rays. Real-time digital images let Dr. Karamcheti diagnose cavities, bone loss, and other issues with precision while minimizing radiation exposure.",
    },
    {
      icon: "🔬",
      title: "iTero Digital Scanning",
      description:
        "Impression-free treatment planning. Instead of goopy impressions, we use advanced digital scanning to capture precise 3D models for crowns, bridges, Invisalign, and implant restorations.",
    },
    {
      icon: "📹",
      title: "Intraoral Cameras",
      description:
        "See what Dr. Karamcheti sees. High-resolution intraoral cameras display live video of your teeth and gums on screen, so you understand exactly what's happening and why treatment is recommended.",
    },
    {
      icon: "🎯",
      title: "Computer-Guided Implant Surgery",
      description:
        "Surgical precision meets 3D planning. Dr. Karamcheti uses guided implant technology to plan and execute implant placement with millimeter accuracy, maximizing long-term success and esthetics.",
    },
  ];

  const benefits = [
    {
      title: "Patient Comfort",
      description:
        "Digital scanning eliminates uncomfortable impression materials. Digital X-rays reduce radiation. Intraoral cameras let you stay informed without surprises.",
    },
    {
      title: "Diagnostic Accuracy",
      description:
        "High-resolution imaging catches problems early—before they become bigger, more costly procedures. 3D planning ensures nothing is missed.",
    },
    {
      title: "Treatment Efficiency",
      description:
        "Precise digital planning means fewer adjustments, shorter appointments, and faster completion of complex cases like implants and restorations.",
    },
    {
      title: "Transparent Communication",
      description:
        "See your teeth and treatment plan on screen. Dr. Karamcheti walks you through findings and recommendations using visual evidence, not guesswork.",
    },
  ];

  const implantWorkflow = [
    {
      step: "1",
      title: "3D Cone Beam Imaging",
      description:
        "We capture a three-dimensional X-ray image of your jaw, showing bone density, nerve location, and implant positioning options with precision impossible on traditional X-rays.",
    },
    {
      step: "2",
      title: "Digital Treatment Planning",
      description:
        "Dr. Karamcheti designs the exact implant placement—position, angle, and depth—on a 3D model. She accounts for your anatomy, the final crown design, and long-term function.",
    },
    {
      step: "3",
      title: "Surgical Guide Creation",
      description:
        "A custom surgical guide is 3D-printed to Dr. Karamcheti's exact specifications. On surgery day, this guide keeps the implant perfectly positioned throughout placement.",
    },
    {
      step: "4",
      title: "Guided Placement",
      description:
        "Dr. Karamcheti places the implant using the surgical guide, achieving precision that free-hand placement cannot match. Less guessing, better positioning, better outcomes.",
    },
  ];

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
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg mb-6"
          >
            Advanced Dental Technology in Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Modern precision tools that improve comfort, accuracy, and outcomes.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-cream border-l-4 border-gold">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={answerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={answerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <p className="text-lg text-gray-800 leading-relaxed font-semibold mb-3">
              Cville Dentist uses digital X-rays (80% less radiation than film), iTero digital scanners for impression-free treatment planning, intraoral cameras, and computer-guided implant surgery. Located at 2375 Commonwealth Dr in Charlottesville.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every technology we invest in has one purpose: make your experience more comfortable and your outcomes more predictable. We don't use technology for technology's sake—only tools that genuinely improve patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={techCardsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={techCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Our Advanced Dental Tools
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={techCardsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-cream rounded-lg p-8 border border-gold border-opacity-30 hover:border-opacity-100 transition-colors"
              >
                <div className="text-5xl mb-6">{tech.icon}</div>
                <h3 className="heading-sm text-navy mb-4">{tech.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={benefitsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16"
          >
            How Technology Improves Your Experience
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <h3 className="heading-sm text-gold mb-4">{benefit.title}</h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Guided Implant Workflow */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={howWorksRef}
            initial={{ opacity: 0, y: 20 }}
            animate={howWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Computer-Guided Implant Placement
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={howWorksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto"
          >
            Here's how precision planning translates to better outcomes for your implant.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={howWorksInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              {implantWorkflow.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="heading-sm text-navy mb-2">{item.title}</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <img
                src={images.officeInterior2}
                alt="Advanced computer-guided implant surgery technology at Charlottesville dental office"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            The Difference Precision Makes
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Fewer Adjustments</h3>
              <p className="text-gray-700 leading-relaxed">
                Precise digital planning means implants are positioned correctly on the first placement—no surprises during restoration. Your crown fits perfectly because the implant angle was planned from the start.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Better Long-Term Success</h3>
              <p className="text-gray-700 leading-relaxed">
                Implants placed at the optimal angle and depth have better bone integration, less stress on adjacent teeth, and higher survival rates over decades. Precision placement prevents future complications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Shorter Healing Timeline</h3>
              <p className="text-gray-700 leading-relaxed">
                Minimal trauma during guided placement means faster healing. You get back to eating and living normally more quickly than with traditional implant surgery techniques.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-cream rounded-lg p-8">
              <h3 className="heading-sm text-navy mb-4">Predictable Esthetics</h3>
              <p className="text-gray-700 leading-relaxed">
                Because Dr. Karamcheti designs the restoration before placing the implant, she can ensure the final crown will match your natural smile—in shape, color, and alignment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Experience Advanced Dental Care"
        subheadline="Schedule a consultation at Cville Dentist in Charlottesville. See how modern technology improves comfort and results."
        buttonText="Book Your Consultation"
        buttonLink="/new-patients"
      />
    </>
  );
}
