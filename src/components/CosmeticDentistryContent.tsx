"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from "@/lib/images";
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

const serviceCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

const featureCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.12,
    },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

export default function CosmeticDentistryContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: beforeAfterRef, inView: beforeAfterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whyChooseRef, inView: whyChooseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: "veneers",
      heading: "Porcelain Veneers — A Complete Smile Transformation",
      description:
        "Custom-crafted porcelain shells bonded to the front of your teeth. Veneers correct chips, gaps, discoloration, and minor misalignment in as few as two visits. Dr. Karamcheti designs each veneer to match your natural tooth shape and shade — the goal is a smile that looks effortlessly good, not artificially perfect. She works with premium dental labs to ensure color consistency and durability that lasts 15-20 years with proper care.",
    },
    {
      id: "bonding",
      heading: "Dental Bonding — Fast, Affordable, Same-Day Results",
      description:
        "Composite resin sculpted directly onto your tooth to repair chips, close small gaps, or reshape uneven edges. Bonding takes a single visit — usually under an hour — and costs a fraction of veneers. For Charlottesville patients who want a noticeable improvement without a major investment, bonding delivers immediate results.",
    },
    {
      id: "whitening",
      heading: "Professional Teeth Whitening — Beyond What Strips Can Do",
      description:
        "In-office whitening uses professional-grade formulas that work faster and more evenly than anything from the pharmacy shelf. Dr. Karamcheti also offers custom take-home whitening trays for patients who prefer to brighten on their own schedule. Both options deliver results that drugstore strips simply cannot match.",
    },
    {
      id: "makeover",
      heading: "Smile Makeovers — Your Complete Cosmetic Plan",
      description:
        "A smile makeover combines multiple treatments — veneers, bonding, whitening, even Invisalign — into one coordinated plan. Dr. Karamcheti maps out every step, shows you a preview of projected results, and works at your pace. Whether you're preparing for a milestone event or you've simply decided it's time, a makeover gives you a comprehensive path from where you are to where you want to be.",
    },
  ];

  const whyChooseFeatures = [
    {
      title: "Natural Results",
      description: "She designs every treatment around your unique facial features",
    },
    {
      title: "Modern Technology",
      description: "Digital scanning, shade matching, premium lab partnerships",
    },
    {
      title: "Your Comfort First",
      description: "No pressure, no upselling, honest assessment of what you need",
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
            Cosmetic Dentistry in Charlottesville — Where Precision Meets Artistry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Your smile should look like yours — just the best version of it. Dr. Karamcheti combines modern cosmetic techniques with a keen eye for natural results that fit your face, your personality, and your life in Charlottesville.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block — GEO Optimization */}
      <section className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
            Porcelain veneers at Cville Dentist in Charlottesville range from $1,200 to $2,500 per tooth. Dr. Karamcheti designs each veneer for a natural look — not the over-white, obvious appearance some patients fear. Dental bonding starts at $300 per tooth for a same-day improvement. Free smile consultations available.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div
            ref={introRef}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Dr. Karamcheti approaches cosmetic dentistry the same way she approaches everything: with precision, patience, and genuine interest in what you want. She doesn't push Hollywood veneers or one-size-fits-all whitening. Every cosmetic treatment starts with a conversation about your goals, followed by a detailed plan that accounts for your facial structure, skin tone, and natural tooth characteristics. The result looks like you — just more confident.
              </motion.p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <img
                src={images.cosmeticSmile}
                alt="Beautiful cosmetic smile transformation at Charlottesville dental office"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              Cosmetic Services That Transform Smiles
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From simple refinements to complete smile transformations
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                custom={index}
                variants={serviceCardVariants}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                whileHover="hover"
                className="border-l-4 border-gold pl-8 py-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-4">{service.heading}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section
        ref={beforeAfterRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={beforeAfterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-md mb-8">What Patients Experience</h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={beforeAfterInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-white text-opacity-95 leading-relaxed"
            >
              Patients walk in with teeth they've hidden for years — stained, chipped, uneven, or spaced — and walk out smiling wider than they have in a decade. The change isn't just cosmetic. It shifts how you carry yourself in meetings, on dates, in photos. Dr. Karamcheti hears it every week: "I wish I'd done this sooner."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        ref={whyChooseRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-navy mb-4">
              Why Choose Dr. Karamcheti for Cosmetic Work
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Precision meets artistry in every smile transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={featureCardVariants}
                initial="hidden"
                animate={whyChooseInView ? "visible" : "hidden"}
                whileHover="hover"
                className="bg-white rounded-lg p-8 border border-gold border-opacity-30 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gold bg-opacity-20 rounded-full mb-6 mx-auto">
                  <span className="text-gold text-xl font-bold">✓</span>
                </div>
                <h3 className="heading-xs text-navy mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Local Hook */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={whyChooseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-700 text-lg mt-16 max-w-2xl mx-auto"
          >
            Serving Charlottesville patients from our Commonwealth Drive location—minutes from downtown, UVA, and the Route 29 corridor.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gold"
        headline="See What Your Smile Could Look Like"
        subheadline="Dr. Karamcheti creates personalized cosmetic treatment plans that enhance your natural beauty. Schedule your smile consultation today."
        buttonText="Schedule a Smile Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
