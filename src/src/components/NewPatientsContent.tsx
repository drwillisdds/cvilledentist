"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

export default function NewPatientsContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: stepsRef, inView: stepsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: insuranceRef, inView: insuranceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: clubRef, inView: clubInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: formsRef, inView: formsInView } = useInView({
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
            Welcome to Your New Charlottesville Dental Home
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Whether you just moved to Charlottesville or you've been putting off
            finding a new dentist, your first visit here will feel different.
          </motion.p>
        </div>
      </section>

      {/* What to Expect Steps */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={stepsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            What to Expect on Your First Visit
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={stepsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                num: "1",
                title: "Book in Minutes",
                description:
                  "Call or book online. Same-day appointments available for new patients. We answer the phone—no phone tree, no callbacks.",
              },
              {
                num: "2",
                title: "A Warm Welcome",
                description:
                  "Walk in, meet the team by name. Fill out a short health history (or download it ahead of time). No clipboard chaos.",
              },
              {
                num: "3",
                title: "A Thorough First Exam",
                description:
                  "Dr. Karamcheti reviews your health history personally, takes digital X-rays, does a comprehensive exam, and sits with you to discuss findings. She explains everything in plain language—no jargon, no pressure.",
              },
              {
                num: "4",
                title: "Your Plan, Your Pace",
                description:
                  "Leave with a clear treatment plan and honest cost breakdown. No surprise bills. No upselling. If you need time to decide, take it.",
              },
            ].map((step) => (
              <motion.div key={step.num} variants={itemVariants}>
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-gold text-navy rounded-full flex items-center justify-center mb-6 font-bold text-2xl flex-shrink-0">
                    {step.num}
                  </div>
                  <h3 className="heading-sm text-navy mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={insuranceRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              insuranceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="heading-lg text-navy mb-8"
          >
            Insurance & Payment
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={insuranceInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 mb-6">
                We accept most major dental insurance plans and handle claims on
                your behalf. You pay your copay or deductible at the visit—we
                handle the rest.
              </p>

              <h3 className="heading-sm text-navy mb-4">Plans We Accept</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Delta Dental",
                  "Cigna",
                  "United Concordia",
                  "MetLife",
                  "Aetna",
                  "Guardian",
                ].map((plan) => (
                  <motion.div
                    key={plan}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {plan}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="heading-sm text-navy mb-4">Payment Plans</h3>
              <p className="text-gray-700 leading-relaxed">
                0% interest payment plans available for larger treatments through
                CareCredit. We also offer direct payment plans tailored to your
                situation. No treatment is delayed because of cost concerns—we
                work with you to find a solution that fits your budget.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Virginia Dental Club Callout */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gold">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={clubRef}
            initial={{ opacity: 0, y: 20 }}
            animate={clubInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="heading-lg text-navy mb-6">
              No Insurance? Meet the Virginia Dental Club.
            </h2>

            <p className="text-lg text-navy text-opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Our in-house membership plan covers two cleanings, exams, and full
              X-rays each year—plus discounts on every treatment. No claims. No
              waiting periods. No annual maximums. Designed for Charlottesville
              patients who want quality dental care without the insurance headache.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={clubInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/virginia-dental-club"
                className="inline-block px-8 py-3 font-semibold bg-navy text-gold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                See Virginia Dental Club Details
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New Patient Forms */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            ref={formsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-navy mb-6"
          >
            New Patient Forms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-700 mb-8"
          >
            Save time at your first visit — download and complete your new
            patient forms before you arrive.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#"
            className="inline-block px-8 py-3 font-semibold bg-gold text-navy rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Download New Patient Forms (PDF)
          </motion.a>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        variant="gold"
        headline="Your First Visit Starts Here"
        subheadline="Call us or book your appointment online. Same-day appointments available."
        buttonText="Book Your Appointment"
        buttonLink="/contact"
      />
    </>
  );
}
