"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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

const processStepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "candidate",
    question: "Am I a candidate for dental implants?",
    answer:
      "Most adults with adequate jawbone density qualify for dental implants. Dr. Karamcheti evaluates each patient individually using digital imaging to assess your bone structure and overall health. Even patients who've been told they don't qualify elsewhere sometimes have options here. If your jawbone needs strengthening first, bone grafting solutions are available.",
  },
  {
    id: "timeline",
    question: "How long does the implant process take?",
    answer:
      "From surgical placement to your final crown, the process typically takes 3-6 months. This timeline allows your implant to integrate fully with your jawbone—a critical step for long-term success. The surgical appointment itself takes about one hour. Once the implant has healed, your final restoration is placed and custom-fitted by Dr. Karamcheti right here in our office.",
  },
  {
    id: "pain",
    question: "Does implant placement hurt?",
    answer:
      "Most patients say the discomfort is far less than they anticipated. Local anesthesia keeps you completely comfortable during the procedure, and the sensation is more pressure than pain. Post-operative soreness is typical and manageable—over-the-counter pain medication handles it for most people within the first few days. Many patients return to normal activities by the next day.",
  },
  {
    id: "longevity",
    question: "How long do dental implants last?",
    answer:
      "With proper care and regular checkups, dental implants can last 25+ years. Many last a lifetime. The titanium post itself rarely fails—the crown may eventually need replacement after 10-15 years of use, but the implant beneath it remains solid. This longevity makes implants one of the most cost-effective tooth replacement options over time.",
  },
  {
    id: "financing",
    question: "Do you offer financing for implants?",
    answer:
      "Yes. We offer 0% interest payment plans so you can spread the cost comfortably. Virginia Dental Club members receive significant discounts on implant treatment. Most insurance plans cover a portion of implant treatment—typically 20-50%—and our team handles all claims submission for you. We work with multiple payment options to make implants accessible.",
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function DentalImplantsContent() {
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: advantageRef, inView: advantageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: whatAreRef, inView: whatAreInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: costRef, inView: costInView } = useInView({
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

  const toggleFAQ = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
            Dental Implants in Charlottesville — Placed and Restored In-House
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-3xl mx-auto leading-relaxed"
          >
            Most dental offices in Charlottesville send you to an oral surgeon for implants. We don't. Dr. Karamcheti places and restores your implant under one roof — saving you time, money, and the hassle of coordinating between offices.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block — GEO Optimization */}
      <section className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">Quick Answer</p>
          <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
            A single dental implant at Cville Dentist in Charlottesville typically ranges from $3,000 to $5,000 — less than most patients expect, especially since Dr. Karamcheti places and restores implants in-house without referral to an oral surgeon. Virginia Dental Club members receive additional discounts, and 0% financing is available.
          </p>
        </div>
      </section>

      {/* The In-House Advantage Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div ref={advantageRef} className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={advantageInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <div>
                <motion.h2
                  variants={itemVariants}
                  className="heading-md mb-4 text-navy"
                >
                  The In-House Advantage
                </motion.h2>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-700 leading-relaxed"
                >
                  One doctor managing your entire implant journey means continuity of care that you simply can't get when splitting the procedure between offices. Dr. Karamcheti sees you from the initial consultation through the final restoration, understanding every detail of your case and adjusting the treatment plan as needed.
                </motion.p>
              </div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2">No Scheduling Across Multiple Offices</h3>
                <p className="text-gray-700 leading-relaxed">
                  No transferring records between surgeons and restoring dentists. No waiting weeks between the surgical placement and your crown. Everything happens in our Charlottesville office on your timeline.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2">Significant Cost Savings</h3>
                <p className="text-gray-700 leading-relaxed">
                  When one practice handles placement and restoration, you pay one team's fees instead of two. Most patients save thousands by avoiding the dual-provider approach common in Charlottesville.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-navy mb-2">Precision Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dr. Karamcheti uses advanced digital imaging and guided implant planning to map every implant before surgery begins. This technology means more predictable outcomes and fewer surprises.
                </p>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                advantageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <img
                src={images.dentalChair}
                alt="Dental implant treatment chair at Charlottesville dental office"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Dental Implants Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={whatAreRef}
            initial="hidden"
            animate={whatAreInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-8 text-navy text-center"
            >
              What Are Dental Implants?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              A dental implant replaces the root of a missing tooth. It's a titanium post that bonds with your jawbone, and once fully healed, a custom crown attaches to the post. The result looks, feels, and functions exactly like a natural tooth—because structurally, it fills the same role.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              Unlike bridges or dentures, implants preserve your jawbone density. When you lose a tooth, your jawbone starts deteriorating without the stimulation that natural tooth roots provide. Implants prevent this bone loss, maintaining your facial structure and bite alignment long-term.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 leading-relaxed"
            >
              With proper care and regular checkups, dental implants last decades—and many last a lifetime. You treat them like natural teeth: brush, floss, and see us twice a year.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-md mb-4">The Process at Our Office</h2>
            <p className="text-lg text-white text-opacity-90">
              Four straightforward steps from consultation to your restored smile
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: 1,
                title: "Consultation & Digital Planning",
                description:
                  "Dr. Karamcheti evaluates your jawbone with digital imaging, discusses your options, and maps the implant placement digitally before anything happens in your mouth. We answer all your questions and create a treatment timeline.",
              },
              {
                step: 2,
                title: "Implant Placement",
                description:
                  "The titanium post is placed precisely using guided surgery. Most patients report far less discomfort than expected. The procedure takes about one hour, and you go home with temporary restoration the same day.",
              },
              {
                step: 3,
                title: "Healing Period",
                description:
                  "The implant integrates with your jawbone over 3-6 months—a process called osseointegration. You leave with a temporary restoration so you're never without a tooth. You eat, smile, and live normally during this phase.",
              },
              {
                step: 4,
                title: "Final Restoration",
                description:
                  "Dr. Karamcheti designs and places your permanent crown right here in our Charlottesville office. Color-matched, custom-fitted, and built to last. You walk out with your complete smile.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                custom={index}
                variants={processStepVariants}
                initial="hidden"
                animate={processInView ? "visible" : "hidden"}
                className="bg-navy bg-opacity-50 border border-gold border-opacity-30 rounded-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-sage text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={costRef}
            initial="hidden"
            animate={costInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="heading-md mb-8 text-center"
            >
              Let's Talk About Cost
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white text-opacity-95 mb-8 leading-relaxed"
            >
              Dental implants are an investment—and they're more affordable than most Charlottesville patients expect, especially when one office handles everything. Here's what you need to know:
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-8 mb-8"
            >
              <p className="text-xl font-semibold text-gold mb-2">
                Single Implant Cost Advantage
              </p>
              <p className="text-white text-opacity-90 leading-relaxed">
                A single dental implant at our Charlottesville office typically costs less than the combined fees of a surgeon and restoring dentist working separately. You're not paying two overhead bills.
              </p>
            </motion.div>

            <div className="space-y-4">
              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <span className="text-gold font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Virginia Dental Club Members</h3>
                  <p className="text-white text-opacity-90">
                    Receive significant discounts on implant treatment
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <span className="text-gold font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Zero-Interest Payment Plans</h3>
                  <p className="text-white text-opacity-90">
                    Spread the cost comfortably over time with no interest
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-3">
                <span className="text-gold font-bold text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold mb-1">Insurance Claims Handled</h3>
                  <p className="text-white text-opacity-90">
                    Most plans cover 20-50% of implant treatment. Our team submits all claims for you.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={comparisonRef}
            initial={{ opacity: 0, y: 20 }}
            animate={
              comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="heading-md text-navy text-center mb-4">
              Implants vs. Other Tooth Replacement Options
            </h2>
            <p className="text-center text-gray-700 text-lg max-w-2xl mx-auto">
              Why implants are the gold standard for missing tooth replacement
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={comparisonInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="pb-4 px-4 font-semibold text-navy">Feature</th>
                  <th className="pb-4 px-4 font-semibold text-navy">Implants</th>
                  <th className="pb-4 px-4 font-semibold text-navy">Bridges</th>
                  <th className="pb-4 px-4 font-semibold text-navy">Dentures</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    Permanence
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Permanent—lasts 25+ years
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    15-20 years before replacement
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    5-7 years average lifespan
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    Bone Preservation
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Preserves jawbone density
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Bone loss continues
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Bone loss accelerates
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    Adjacent Teeth
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    No damage to healthy teeth
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Requires grinding healthy teeth
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    No impact on other teeth
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    Function
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    100% normal chewing power
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Most normal chewing ability
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Reduced chewing ability
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-gray-700">
                    Maintenance
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Brush and floss like natural teeth
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Standard brushing and flossing
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Daily removal and cleaning
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Local Hook */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-gray-700 text-lg mt-12 max-w-2xl mx-auto"
          >
            Serving Charlottesville patients from our Commonwealth Drive location—minutes from downtown, UVA, and the Route 29 corridor.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="heading-md text-navy text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-700 text-lg">
              Answers to the questions we hear most from Charlottesville patients
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-lg font-semibold text-navy">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: expanded[item.id] ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown
                      size={24}
                      className="text-gold flex-shrink-0"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded[item.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="px-6 py-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        variant="gold"
        headline="Ready to Replace Missing Teeth — Without the Referral Runaround?"
        subheadline="Free implant consultations available. Same-day consults for qualified patients."
        buttonText="Book Your Free Implant Consultation"
        buttonLink="/contact"
      />
    </>
  );
}
