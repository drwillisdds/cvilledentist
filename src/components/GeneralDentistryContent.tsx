"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";
import {
  Smile,
  Crown,
  Link as LinkIcon,
  Pill,
  Eye,
  Moon,
  AlertCircle,
  Droplets,
} from "lucide-react";

export default function GeneralDentistryContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const services = [
    {
      icon: Smile,
      title: "Cleanings & Exams",
      description:
        "Professional cleaning removes tartar that brushing misses. Dr. Karamcheti does a comprehensive exam at every visit — teeth, gums, jaw, bite, and soft tissue.",
    },
    {
      icon: Crown,
      title: "Dental Crowns",
      description:
        "Custom-fitted caps that restore damaged, cracked, or weakened teeth to full strength and appearance. Color-matched to your natural teeth.",
    },
    {
      icon: LinkIcon,
      title: "Dental Bridges",
      description:
        "Replace one or more missing teeth by anchoring to adjacent teeth. A proven, reliable restoration.",
    },
    {
      icon: Pill,
      title: "Dental Fillings",
      description:
        "Tooth-colored composite fillings that blend seamlessly. No more metal in your smile.",
    },
    {
      icon: Eye,
      title: "Tooth Extractions",
      description:
        "When a tooth can't be saved, Dr. Karamcheti removes it with care and minimal discomfort. She discusses replacement options before you leave.",
    },
    {
      icon: Moon,
      title: "Night Guards",
      description:
        "Custom-fitted guards that protect your teeth from grinding and clenching while you sleep. Prevent wear, fractures, and jaw pain.",
    },
    {
      icon: AlertCircle,
      title: "Oral Cancer Screenings",
      description:
        "Quick, painless check at every exam. Early detection saves lives. Dr. Karamcheti examines your tongue, cheeks, palate, and throat.",
    },
    {
      icon: Droplets,
      title: "Gum Disease Treatment",
      description:
        "Scaling and root planing to treat periodontal disease before it leads to tooth loss.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2332] to-[#2a3d4d]">
      {/* Hero Section */}
      <motion.section
        className="relative px-6 py-20 md:py-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-6xl font-bold text-[#faf9f7] mb-8"
          >
            Family & General Dentistry in Charlottesville
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#f0ebe3] mb-8 leading-relaxed"
          >
            From your child's first cleaning to your annual exam to the crown
            you've been putting off — Dr. Karamcheti and her Charlottesville
            team handle it all under one roof.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300 text-lg shadow-lg text-center"
            >
              Schedule Your Exam
            </a>
            <a
              href="tel:(434) 973-5873"
              className="border-2 border-[#c9a84c] text-[#c9a84c] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#c9a84c]/10 transition-all duration-300 text-lg text-center"
            >
              Call (434) 973-5873
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Direct Answer Block — GEO Optimization */}
      <section className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
            Dr. Sowmya Karamcheti, DDS, MHA at Cville Dentist serves families across Charlottesville from their Commonwealth Drive office. The practice offers cleanings, exams, crowns, fillings, extractions, and oral cancer screenings for patients of all ages — with same-day appointments and a membership plan for uninsured patients.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <motion.section
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl font-bold text-[#faf9f7] mb-6">
              Foundation of Lifelong Oral Health
            </h2>
            <p className="font-body text-lg text-[#f0ebe3] mb-4 leading-relaxed">
              General dentistry is the foundation of everything we do. Regular
              visits catch small problems before they become expensive ones. Dr.
              Karamcheti takes a thorough, unhurried approach to every exam —
              she looks at more than just the tooth that brought you in.
            </p>
            <p className="font-body text-lg text-[#f0ebe3] mb-4 leading-relaxed">
              Digital X-rays, oral cancer screenings, and gum assessments happen
              at every visit because prevention costs a fraction of treatment.
              We focus on keeping you healthy, not just treating problems.
            </p>
            <p className="font-body text-lg text-[#f0ebe3] leading-relaxed">
              Your family's dental health matters to us. We create a practice
              where every visit builds trust and confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={images.dentalExam}
              alt="Family dental exam and general dentistry care in Charlottesville"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="px-6 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl font-bold text-[#faf9f7] mb-6 text-center"
          >
            Services We Provide
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-[#f0ebe3] text-center mb-12 max-w-2xl mx-auto"
          >
            Comprehensive care for every stage of life. Everything happens in
            our office.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a3d4d] border border-[#c9a84c]/30 rounded-lg p-6 hover:border-[#c9a84c] hover:shadow-lg hover:bg-[#2a3d4d]/80 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-10 h-10 text-[#c9a84c] mb-4" />
                  </motion.div>
                  <h3 className="font-heading text-lg font-bold text-[#faf9f7] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-[#f0ebe3] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Preventive Care Matters */}
      <motion.section
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold text-[#faf9f7] mb-8 text-center"
          >
            Why Preventive Care Matters
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a2332]/50 border-l-4 border-[#c9a84c] rounded-lg p-6"
            >
              <h3 className="font-heading text-2xl font-bold text-[#c9a84c] mb-2">
                Saves Money
              </h3>
              <p className="font-body text-lg text-[#f0ebe3]">
                A $150 cleaning prevents the need for a $1,500 root canal.
                Catching decay early means a simple filling instead of a crown.
                Prevention always costs less than treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a2332]/50 border-l-4 border-[#c9a84c] rounded-lg p-6"
            >
              <h3 className="font-heading text-2xl font-bold text-[#c9a84c] mb-2">
                Prevents Pain
              </h3>
              <p className="font-body text-lg text-[#f0ebe3]">
                Regular exams catch problems before they cause pain. No tooth
                pain means no emergency visits, no lost sleep, no disrupted
                work. Staying ahead of decay keeps you comfortable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a2332]/50 border-l-4 border-[#c9a84c] rounded-lg p-6"
            >
              <h3 className="font-heading text-2xl font-bold text-[#c9a84c] mb-2">
                Keeps Your Teeth
              </h3>
              <p className="font-body text-lg text-[#f0ebe3]">
                Most dental problems are 100% preventable with consistent care.
                Gum disease, decay, and tooth loss start with early warning
                signs. Dr. Karamcheti catches them and stops them.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* For the Whole Family */}
      <motion.section
        className="px-6 py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold text-[#faf9f7] mb-8"
          >
            For the Whole Family
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-body text-xl text-[#f0ebe3] mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            We see patients of every age — toddlers getting their first checkup,
            teenagers managing wisdom teeth, adults staying on top of their
            health, and seniors maintaining their smiles. Your whole family, one
            team, one office. Bring everyone and experience dental care that
            feels personal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#2a3d4d] border border-[#c9a84c]/30 rounded-lg p-8 md:p-10"
          >
            <h3 className="font-heading text-2xl font-bold text-[#c9a84c] mb-4">
              No Insurance? Virginia Dental Club
            </h3>
            <p className="font-body text-lg text-[#f0ebe3] mb-6">
              The Virginia Dental Club covers two cleanings, exams, and X-rays
              annually — plus discounts on all treatment. A smart way to stay
              on top of your teeth without waiting room visits.
            </p>
            <a
              href="/virginia-dental-club"
              className="inline-block bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-3 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300"
            >
              Learn About Virginia Dental Club
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        headline="Your Dental Health Starts with a Conversation"
        subheadline="Schedule a visit. Dr. Karamcheti will listen and plan the right care for you."
        buttonText="Schedule Your Exam"
        buttonLink="/contact"
        variant="navy"
      />
    </div>
  );
}
