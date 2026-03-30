"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import {
  Phone,
  AlertCircle,
  Zap,
  Shield,
  Clock,
  Stethoscope,
} from "lucide-react";

export default function EmergencyDentistryContent() {
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
      transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
    },
  };

  const phoneVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
    },
  };

  const emergencyServices = [
    {
      icon: AlertCircle,
      title: "Severe Toothache",
      description:
        "Throbbing, persistent pain that won't respond to OTC medication",
    },
    {
      icon: Zap,
      title: "Broken or Cracked Tooth",
      description:
        "From an impact, biting something hard, or an old filling giving way",
    },
    {
      icon: Shield,
      title: "Knocked-Out Tooth",
      description:
        "Time matters. Call immediately — reimplantation is possible within 1-2 hours",
    },
    {
      icon: Clock,
      title: "Lost Crown or Filling",
      description:
        "Exposed tooth needs protection before bacteria move in",
    },
    {
      icon: AlertCircle,
      title: "Dental Abscess",
      description:
        "Swelling, fever, pus near the gumline — this requires same-day treatment",
    },
    {
      icon: Stethoscope,
      title: "Soft Tissue Injury",
      description:
        "Cuts, lacerations, or trauma to gums, lips, or cheeks",
    },
  ];

  const firstAidTips = [
    {
      condition: "Toothache",
      steps: ["Rinse with warm salt water", "Take ibuprofen", "Call us"],
    },
    {
      condition: "Broken tooth",
      steps: [
        "Save any pieces",
        "Rinse gently",
        "Apply gauze if bleeding",
        "Call us",
      ],
    },
    {
      condition: "Knocked-out tooth",
      steps: [
        "Pick up by the crown (not the root)",
        "Place in milk or hold between cheek and gum",
        "Call immediately",
      ],
    },
    {
      condition: "Lost crown",
      steps: [
        "If possible, slip it back on temporarily with denture adhesive",
        "Call us",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2332] to-[#2a3d4d]">
      {/* Hero Section */}
      <motion.section
        className="relative px-6 py-20 md:py-32 text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-6xl font-bold text-[#faf9f7] mb-8"
          >
            Emergency Dentist in Charlottesville — Same-Day Appointments
            Available
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#f0ebe3] mb-10 leading-relaxed"
          >
            In pain? Don't wait. We offer same-day emergency appointments for
            Charlottesville patients — walk-ins welcome during office hours.
          </motion.p>

          {/* Prominent Phone Numbers */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-6 mb-12"
          >
            <motion.div
              variants={phoneVariants}
              className="bg-[#c9a84c] rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Phone className="w-8 h-8 text-[#1a2332]" />
                <span className="font-body text-[#1a2332] text-sm font-semibold uppercase tracking-wide">
                  Call Now
                </span>
              </div>
              <a
                href="tel:(434) 973-5873"
                className="font-heading text-4xl md:text-5xl font-bold text-[#1a2332] hover:text-[#2a3d4d] transition-colors"
              >
                (434) 973-5873
              </a>
            </motion.div>

            <motion.div
              variants={phoneVariants}
              className="bg-[#1a2332]/40 border-2 border-[#c9a84c] rounded-lg p-6"
            >
              <p className="font-body text-sm text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">
                After Hours Emergency Line
              </p>
              <a
                href="tel:434-922-0340"
                className="font-heading text-3xl font-bold text-[#faf9f7] hover:text-[#c9a84c] transition-colors"
              >
                434-922-0340
              </a>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:(434) 973-5873"
              className="bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300 text-lg shadow-lg"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="border-2 border-[#c9a84c] text-[#c9a84c] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#c9a84c]/10 transition-all duration-300 text-lg"
            >
              Book Emergency Visit
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Direct Answer Block — GEO Optimization */}
      <section className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
            Yes. Willis & Associates Family Dentistry in Charlottesville offers same-day emergency dental appointments Monday through Thursday, 8 AM to 5 PM. Call (434) 973-5873 during office hours or reach the after-hours emergency line at 434-922-0340. Walk-ins welcome.
          </p>
        </div>
      </section>

      {/* ER vs Dentist Section */}
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
              Should You Go to the ER? Probably Not.
            </h2>
            <p className="font-body text-lg text-[#f0ebe3] mb-4 leading-relaxed">
              The emergency room can manage pain and prescribe antibiotics, but
              they don't fix teeth. You'll wait hours, pay more, and still need
              to see a dentist the next day.
            </p>
            <p className="font-body text-lg text-[#f0ebe3] mb-4 leading-relaxed">
              Call us first. Dr. Karamcheti and her team handle dental
              emergencies every week — toothaches, broken teeth, lost crowns,
              infections — and we get you in today.
            </p>
            <p className="font-body text-lg text-[#c9a84c] font-semibold">
              Why wait hours at the ER when you can see us in minutes?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ImagePlaceholder
              aspectRatio="square"
              label="Emergency Dental Care"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Emergency Scenarios Grid */}
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
            What We Treat
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="font-body text-lg text-[#f0ebe3] text-center mb-12 max-w-2xl mx-auto"
          >
            If you're in pain or have a dental injury, we handle it. Here's what
            brings patients in.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#2a3d4d] border border-[#c9a84c]/30 rounded-lg p-6 hover:border-[#c9a84c] hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-10 h-10 text-[#c9a84c] mb-4" />
                  </motion.div>
                  <h3 className="font-heading text-xl font-bold text-[#faf9f7] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-[#f0ebe3]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* First Aid Tips Section */}
      <motion.section
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            What to Do Right Now
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {firstAidTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a2332]/50 border-l-4 border-[#c9a84c] rounded-lg p-6"
              >
                <h3 className="font-heading text-xl font-bold text-[#c9a84c] mb-4">
                  {tip.condition}
                </h3>
                <ul className="space-y-2">
                  {tip.steps.map((step, stepIndex) => (
                    <motion.li
                      key={stepIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: stepIndex * 0.1,
                        duration: 0.4,
                      }}
                      viewport={{ once: true }}
                      className="font-body text-[#f0ebe3] flex items-start gap-3"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                      {step}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* After Hours Information */}
      <motion.section
        className="px-6 py-16 md:py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto bg-[#c9a84c]/10 border border-[#c9a84c] rounded-lg p-8 md:p-10">
          <h3 className="font-heading text-2xl font-bold text-[#faf9f7] mb-4">
            After Hours Emergency Line
          </h3>
          <p className="font-body text-lg text-[#f0ebe3] mb-6 leading-relaxed">
            Our emergency line <span className="text-[#c9a84c] font-semibold">(434-922-0340)</span> is
            available outside office hours. Call, leave a message, and Dr.
            Karamcheti or a team member will return your call promptly with
            guidance.
          </p>
          <p className="font-body text-[#f0ebe3]">
            <span className="font-semibold">Office Hours:</span> Monday–Thursday
            8am–5pm
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        headline="Don't Wait With Dental Pain"
        subheadline="Same-day emergency appointments. Call (434) 973-5873."
        buttonText="Call Now"
        buttonLink="tel:(434) 973-5873"
        variant="gold"
      />
    </div>
  );
}
