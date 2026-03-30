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

export default function AboutContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: bioRef, inView: bioInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
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
            Meet Dr. Sowmya Karamcheti — Your Charlottesville Dentist
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            A dentist who listens first, explains everything, and never sends you
            somewhere else for something she can handle herself.
          </motion.p>
        </div>
      </section>

      {/* Full Bio Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div
            ref={bioRef}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={bioInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={images.drKaramcheti}
                alt="Dr. Sowmya Karamcheti, DDS, MHA — Lead Dentist in Charlottesville, Virginia"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Bio Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h2 className="heading-md mb-4 text-navy">Her Background</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Karamcheti holds two powerful credentials: a Doctor of Dental Surgery (DDS) from a nationally ranked dental school and a Master of Health Administration (MHA) from the University of Michigan. That rare combination means she understands both the clinical craft of dentistry and the operational side of healthcare delivery. She knows how to diagnose and treat complex dental cases with precision, and she knows how to run a practice that genuinely puts patients first.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="heading-md mb-4 text-navy">How She Works</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Karamcheti's approach is straightforward: listen first, explain everything, then execute flawlessly. Before she starts any treatment, she sits with you, reviews your health history personally, and walks through her findings in plain language—no jargon, no surprises. She remembers her patients by name, knows their dental histories, and tailors every visit around your comfort and pace, not the clock. If you're anxious about dentistry, you're not alone. Dr. Karamcheti has spent years perfecting the calm, communicative manner that breaks through dental anxiety and builds trust from the first visit.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="heading-md mb-4 text-navy">In-House Expertise</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Karamcheti places dental implants and restores them in-house—no referrals, no waiting, no juggling multiple providers. She's trained in advanced cosmetic techniques, designs and oversees Invisalign treatment, and handles complex restorative cases that other dentists often send elsewhere. This means fewer appointments, clearer communication, and continuity of care from consultation through final restoration.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="heading-md mb-4 text-navy">Who She Serves</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dr. Karamcheti treats patients across Charlottesville—from downtown to the UVA area, along the Route 29 corridor, and throughout Albemarle County. Families bring their children because they trust her with young patients. Anxious adults schedule with her because they know she'll take time. Professionals seek her expertise for cosmetic work and implants. And referring dentists trust her to handle complex cases they can't manage in their own offices.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="heading-md mb-4 text-navy">Her Philosophy</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dentistry is a partnership. Your job is to show up and be honest about your health, your concerns, and what matters to you. Dr. Karamcheti's job is to listen, design a plan that fits your goals and budget, and execute that plan with warmth and precision. You should never feel rushed, unclear, or upsold. You should always feel heard.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Patients Choose Cards */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={cardsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Why Patients Choose Dr. Karamcheti
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-navy">♡</span>
              </div>
              <h3 className="heading-sm text-center text-navy mb-4">
                Warmth That Puts You at Ease
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                She takes time, explains every step, and never rushes. Her calm, conversational approach puts even the most anxious patients at ease.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-navy">✓</span>
              </div>
              <h3 className="heading-sm text-center text-navy mb-4">
                Precision You Can Trust
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                DDS and MHA credentials, modern technology, and meticulous technique backed by years of clinical experience and continuing education.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={itemVariants}
              className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl text-navy">★</span>
              </div>
              <h3 className="heading-sm text-center text-navy mb-4">
                In-House Expertise
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Implants, Invisalign, cosmetic restoration, and complex cases—all handled by Dr. Karamcheti in-house. No referral runaround.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={teamRef}
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            The Team Behind Your Smile
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center">
              <img
                src={images.drKaramcheti}
                alt="Dr. Sowmya Karamcheti, dentist in Charlottesville"
                className="w-full h-full object-cover rounded-xl mb-6"
              />
              <h3 className="heading-sm text-navy mb-2">Dr. Sowmya Karamcheti</h3>
              <p className="text-gray-700">DDS, MHA — Lead Dentist</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <img
                src={images.drWillis}
                alt="Dr. James Willis, dentist in Charlottesville"
                className="w-full h-full object-cover rounded-xl mb-6"
              />
              <h3 className="heading-sm text-navy mb-2">Dr. James Willis</h3>
              <p className="text-gray-700">DDS — Dentist</p>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <img
                src={images.officeInterior1}
                alt="Cville Dentist office interior in Charlottesville"
                className="w-full h-full object-cover rounded-xl mb-6"
              />
              <h3 className="heading-sm text-navy mb-2">Our Practice</h3>
              <p className="text-gray-700">Modern Dental Care</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Meet Dr. Karamcheti?"
        subheadline="Schedule your first visit today and experience the difference warmth and precision make."
        buttonText="Schedule Your First Visit"
        buttonLink="/new-patients"
      />
    </>
  );
}
