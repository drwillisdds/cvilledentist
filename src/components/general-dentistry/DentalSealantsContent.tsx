"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
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
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function DentalSealantsContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatRef, inView: whatInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: benefitsRef, inView: benefitsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      number: "1",
      title: "Tooth Surface Cleaning",
      description:
        "Dr. Karamcheti thoroughly cleans the chewing surface of each molar to remove any plaque or debris. A clean surface allows the sealant to bond securely.",
    },
    {
      number: "2",
      title: "Preparation with Mild Acid Etch",
      description:
        "A mild acidic solution is applied to slightly roughen the tooth surface—creating tiny microscopic pits that help the sealant material grip tightly. This takes less than one minute.",
    },
    {
      number: "3",
      title: "Sealant Application",
      description:
        "The liquid sealant material is carefully painted onto the prepared tooth surface, filling all the deep grooves and fissures. The consistency is thin and flows easily into every crevice.",
    },
    {
      number: "4",
      title: "Hardening with Blue Light",
      description:
        "Dr. Karamcheti uses a special blue light (called a curing light) to harden the sealant in seconds. Once hard, it forms a protective shield over the tooth. The entire process takes 2-3 minutes per tooth.",
    },
  ];

  const benefitsList = [
    {
      icon: "🔒",
      title: "Cavity Prevention",
      description:
        "Sealants block the most common entry points for decay. Studies show sealants reduce cavity risk by up to 86% in sealed molars.",
    },
    {
      icon: "💰",
      title: "Cost-Effective Prevention",
      description:
        "A sealant costs a fraction of a filling. Preventing one cavity saves money—and prevents the need for future root canals or crowns if decay spreads.",
    },
    {
      icon: "⚡",
      title: "Quick Application",
      description:
        "No drilling, no needles, no anesthesia. A single molar is sealed in 2-3 minutes. Most children complete all four molars in one visit.",
    },
    {
      icon: "🦷",
      title: "Long-Lasting Protection",
      description:
        "Sealants typically last 5-10 years. Dr. Karamcheti checks them at every cleaning appointment and refreshes them as needed.",
    },
    {
      icon: "✅",
      title: "Works with Braces",
      description:
        "If your child has braces or will get them soon, sealants provide extra protection during orthodontic treatment when brushing is more challenging.",
    },
    {
      icon: "🌟",
      title: "Part of a Complete Prevention Plan",
      description:
        "Sealants work best alongside regular cleanings, fluoride treatments, and good home brushing. Dr. Karamcheti builds a personalized cavity-prevention strategy.",
    },
  ];

  const faqItems = [
    {
      question: "Will my child still be able to brush and floss normally?",
      answer:
        "Yes, absolutely. Sealants don't interfere with brushing or flossing. In fact, kids often find it easier to brush sealed teeth because the grooves are filled and smoothed over. Regular brushing and flossing remain essential for overall oral health.",
    },
    {
      question: "What if my child already has a cavity in a molar?",
      answer:
        "Sealants can only be applied to healthy, cavity-free teeth. If a molar has decay, Dr. Karamcheti will first treat the cavity with a filling. Once restored, that tooth can be sealed to prevent future decay in the same area.",
    },
    {
      question: "Can sealants chip or wear off?",
      answer:
        "Sealants are durable, but they can wear down over time from normal chewing. During regular check-ups, Dr. Karamcheti inspects the sealants and can touch them up or reapply them if they're wearing thin. Typically they last 5-10 years before needing replacement.",
    },
    {
      question: "Are sealants recommended for adults?",
      answer:
        "Yes, though they're more common in children. Adults with cavity-prone molars or deep grooves can benefit from sealants. Dr. Karamcheti evaluates your cavity risk and recommends sealants if appropriate. People with existing fillings typically don't need sealants on those teeth.",
    },
    {
      question: "Will my insurance cover sealants?",
      answer:
        "Many insurance plans cover sealants for children, often at little or no cost. Coverage for adults varies. Our team at Cville Dentist can check your specific plan and discuss costs. Even if insurance doesn't cover them, the cost is low compared to treating cavities.",
    },
    {
      question: "What happens if a sealant chips?",
      answer:
        "A chipped sealant isn't dangerous, but it loses its protective power in that spot. Dr. Karamcheti can quickly repair or replace it. This is another reason regular check-ups matter—she catches any issues before decay starts.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  return (
    <div className="bg-white text-navy">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-gradient-to-br from-navy via-navy to-blue-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-cream mb-6"
          >
            Dental Sealants in Charlottesville VA
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-cream/90 mb-8 leading-relaxed"
          >
            Protect your child's molars with quick, painless sealants. Dr. Karamcheti uses advanced sealant technology to prevent cavities before they start—reducing decay risk by up to 86%.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ImagePlaceholder label="Dental sealants procedure" />
          </motion.div>
        </div>
      </motion.section>

      {/* Quick Answer Block */}
      <motion.section
        ref={answerRef}
        initial="hidden"
        animate={answerInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 max-w-4xl mx-auto"
      >
        <div className="bg-amber-50 border-l-4 border-gold p-6 sm:p-8 rounded-sm">
          <h3 className="text-gold text-sm font-semibold uppercase tracking-wide mb-3">
            Quick Answer
          </h3>
          <p className="text-navy text-lg leading-relaxed">
            Dental sealants are thin protective coatings applied to the chewing surfaces of molars. They fill deep grooves where cavities typically develop, creating a smooth, sealed surface that bacteria can't penetrate. Sealants take 2-3 minutes per tooth, don't hurt, and last 5-10 years. They're one of the most effective and affordable ways to prevent cavities in cavity-prone teeth.
          </p>
        </div>
      </motion.section>

      {/* What Are Sealants Section */}
      <motion.section
        ref={whatRef}
        initial="hidden"
        animate={whatInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            What Are Dental Sealants?
          </motion.h2>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                Molars are different from your front teeth. Unlike smooth front teeth, molars have deep grooves, pits, and fissures on their chewing surfaces—nature's way of helping you grind food. But those deep crevices are also the perfect hiding place for cavity-causing bacteria and food particles.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                Brushing can clean the smooth surfaces of your teeth, but even the best toothbrush bristles (which are about 200 micrometers wide) can't reach into fissures that are sometimes only 5-10 micrometers across. That's where sealants come in.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                A dental sealant is a thin, clear or slightly tinted plastic coating that Dr. Karamcheti carefully applies to those vulnerable chewing surfaces. The material flows into every groove and hardens under a special blue light, creating a smooth, sealed barrier. Think of it as a protective raincoat for your molars—nothing gets through to the tooth surface beneath.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-navy text-base leading-relaxed">
                <strong>Why it matters:</strong> Decay almost always starts in these deep grooves. By sealing them, you're preventing the problem before it begins—much easier than treating a cavity later.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who Benefits Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Who Benefits Most from Sealants?
          </motion.h2>

          <div className="space-y-6">
            <motion.div variants={cardVariants} className="border border-gold/30 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-navy mb-3">Children (Ages 6-14)</h3>
              <p className="text-navy/80 leading-relaxed">
                Sealants are most effective when applied as soon as permanent molars erupt. Children's first molars come in around age 6, and second molars around age 12. This is the ideal window—before decay has a chance to start. Kids often struggle with thorough brushing technique, making sealants an excellent safety net during these cavity-prone years.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="border border-gold/30 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-navy mb-3">Adults with Deep Grooves</h3>
              <p className="text-navy/80 leading-relaxed">
                Not just for kids. Adults with naturally deep fissures in their molars or a history of cavities can benefit from sealants. Dr. Karamcheti evaluates each adult's cavity risk and recommends sealants when appropriate—especially if the molars don't already have fillings.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="border border-gold/30 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-navy mb-3">Teenagers with Braces</h3>
              <p className="text-navy/80 leading-relaxed">
                Braces make thorough brushing significantly harder. Food gets trapped more easily, and bacteria thrive. Sealants on molars provide extra protection during the 2-3 years of orthodontic treatment, reducing the risk of hidden decay that might not show up until braces come off.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="border border-gold/30 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-navy mb-3">Anyone with Cavity-Prone Teeth</h3>
              <p className="text-navy/80 leading-relaxed">
                If you or your child has a history of cavities, even with good brushing habits, your teeth might just be more susceptible to decay. Genetics, enamel thickness, and saliva composition all play a role. Sealants are an excellent preventive strategy for cavity-prone patients of any age.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* The Sealant Application Process */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            The Sealant Application Process
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-heading text-lg font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-navy font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-navy/75 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <p className="text-navy text-base leading-relaxed">
              <strong>The entire process is painless.</strong> There's no drilling, no needles, no anesthesia, and no discomfort. Most children handle it extremely well, often finishing all four molars in a single 10-15 minute visit.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Why Choose Sealants at Cville Dentist?
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-navy/75 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-amber-50 p-6 rounded-lg border border-gold/30">
            <h3 className="text-navy font-semibold text-lg mb-3">Sealants vs. Fillings</h3>
            <p className="text-navy/80 text-base leading-relaxed mb-4">
              A filling costs $150-300 and repairs damage that's already happened. A sealant costs $30-50 and prevents decay from starting in the first place. Dr. Karamcheti prefers prevention—it's better for your teeth and easier on your wallet.
            </p>
            <p className="text-navy/80 text-base leading-relaxed">
              Plus, if a sealed tooth never gets decay, you avoid drilling, possible nerve damage, and the eventual need for root canal therapy if decay reaches deep into the tooth.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How Long Sealants Last */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            How Long Do Sealants Last?
          </motion.h2>

          <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed space-y-6 mb-12">
            <p>
              Most sealants last between 5-10 years. The exact lifespan depends on how much wear and tear the tooth experiences and the quality of your daily brushing and flossing.
            </p>

            <p>
              The good news? Dr. Karamcheti checks your sealants at every cleaning appointment. If a sealant is wearing down or has a small chip, she can touch it up or replace it quickly—no additional drilling needed. A replacement sealant costs far less than treating a cavity that might have developed under a worn sealant.
            </p>

            <p>
              Regular cleanings every 6 months, combined with good home care, help sealants last as long as possible. This is why Dr. Karamcheti recommends making sealants part of your overall preventive care routine.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Next Steps After Sealants</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              Sealants work best when paired with regular cleanings, fluoride treatments, good brushing technique, and a cavity-smart diet. Dr. Karamcheti builds a complete preventive strategy tailored to your specific risk factors. Think of sealants as one powerful tool in a comprehensive cavity-prevention program.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border border-navy/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 bg-white hover:bg-cream transition flex items-center justify-between group"
                >
                  <span className="text-navy font-semibold text-left group-hover:text-gold transition">
                    {item.question}
                  </span>
                  <span className="text-gold text-xl flex-shrink-0 ml-4">
                    {expandedFaq === index ? "−" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedFaq === index ? "auto" : 0,
                    opacity: expandedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-cream border-t border-navy/10">
                    <p className="text-navy/80 text-base leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <CTASection
        headline="Schedule Your Sealant Appointment"
        subheadline="Dr. Karamcheti is ready to protect your child's smile with quick, effective sealants. Call Cville Dentist today to book an appointment."
        buttonText="Call (434) 973-5873"
        buttonLink="tel:4349735873"
      />
    </div>
  );
}
