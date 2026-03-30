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

export default function DenturesContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: typesRef, inView: typesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: adjustmentRef, inView: adjustmentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: careRef, inView: careInView } = useInView({
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

  const dentureTypes = [
    {
      name: "Complete Full Dentures",
      description:
        "Replace all upper teeth, all lower teeth, or both. The denture base, typically acrylic, rests on your gums and is held in place by suction and careful fit.",
      best: "Ideal when all teeth in one or both arches need replacement.",
    },
    {
      name: "Partial Dentures",
      description:
        "Replace only some missing teeth. They attach to remaining natural teeth with clasps or precision attachments, filling the gaps. Less invasive than full dentures.",
      best: "Perfect when you have some healthy natural teeth remaining.",
    },
    {
      name: "Implant-Supported Dentures",
      description:
        "Full or partial dentures anchored to dental implants for superior stability and retention. Much more secure than traditional dentures, allowing better chewing function. Requires implant placement first.",
      best: "Best option if you want maximum stability and function, and have sufficient jawbone.",
    },
    {
      name: "Implant-Supported Fixed Bridge",
      description:
        "Also called an All-on-4 or All-on-6 bridge. Multiple implants support a fixed (non-removable) restoration. Looks and functions most like natural teeth but is more expensive and complex.",
      best: "For patients who want a fixed solution and have good bone health.",
    },
  ];

  const fitProcess = [
    {
      step: "1",
      title: "Comprehensive Assessment",
      description:
        "Dr. Karamcheti evaluates your oral health, jawbone structure, and overall health. She takes digital scans or impressions and discusses your goals, budget, and timeline.",
    },
    {
      step: "2",
      title: "Digital Impressions & Model Creation",
      description:
        "Using 3D imaging and digital impressions, Dr. Karamcheti creates precise models of your mouth. These guide the denture fabrication process, ensuring accuracy from the start.",
    },
    {
      step: "3",
      title: "Bite Registration & Tooth Selection",
      description:
        "Dr. Karamcheti records your bite relationship and helps you select tooth shape, size, and color that match your face and personal preferences.",
    },
    {
      step: "4",
      title: "First Try-In Appointment",
      description:
        "The lab creates a denture model for you to try. Dr. Karamcheti checks fit, occlusion (bite), esthetics, and comfort. Adjustments are made as needed.",
    },
    {
      step: "5",
      title: "Final Fabrication & Delivery",
      description:
        "The lab creates your final denture based on feedback. Dr. Karamcheti seats it, verifies the fit and bite, and makes any final adjustments for comfort.",
    },
    {
      step: "6",
      title: "Follow-Up Adjustments",
      description:
        "You'll return for follow-up appointments at 24 hours, 1 week, and 1 month to address any sore spots or fit issues. Dr. Karamcheti adjusts the denture as your mouth adapts.",
    },
  ];

  const advantages = [
    {
      icon: "✨",
      title: "Restored Smile & Confidence",
      description:
        "Dentures restore your smile, facial support, and ability to speak and eat. Many patients report a dramatic boost in self-confidence and quality of life.",
    },
    {
      icon: "💬",
      title: "Clear Speech",
      description:
        "Missing teeth affect speech, creating gaps in sound production. Dentures restore your ability to speak clearly and naturally.",
    },
    {
      icon: "🍽️",
      title: "Restored Chewing Function",
      description:
        "Dentures allow you to eat a wider variety of foods. While they won't chew like natural teeth, they restore significant function compared to no teeth.",
    },
    {
      icon: "🏥",
      title: "Prevents Bone Loss",
      description:
        "Empty spaces where teeth are missing cause jawbone to resorb. Dentures stimulate the bone, slowing bone loss and preserving your facial profile.",
    },
    {
      icon: "💰",
      title: "Cost-Effective Restoration",
      description:
        "Dentures are significantly less expensive than implant-supported restoration, making tooth replacement accessible to more patients.",
    },
    {
      icon: "🎯",
      title: "Customizable & Replaceable",
      description:
        "Modern denture materials offer many cosmetic options. If they wear out or you want changes, new dentures can be made.",
    },
  ];

  const careTips = [
    {
      title: "Daily Cleaning",
      description:
        "Brush dentures with a soft brush and denture cleaner daily, just like natural teeth. Never use regular toothpaste—it's too abrasive for the material.",
    },
    {
      title: "Soak Overnight",
      description:
        "Soak dentures in clean water or denture solution overnight. This keeps them moist (dentures can shrink if left to dry) and removes accumulated plaque.",
    },
    {
      title: "Handle with Care",
      description:
        "Dentures break easily if dropped. Always clean them over a sink filled with water as a safety precaution. Handle them gently.",
    },
    {
      title: "Regular Check-Ups",
      description:
        "Visit Willis & Associates every 6-12 months for professional cleaning and to check for fit issues. Your mouth shape changes over time, requiring adjustments.",
    },
    {
      title: "Avoid Extreme Temperatures",
      description:
        "Don't soak dentures in hot water—heat can warp them. Use cool or lukewarm water for soaking and rinsing.",
    },
    {
      title: "Use Denture Adhesive If Needed",
      description:
        "Some patients benefit from denture adhesive for extra stability, especially during eating. Dr. Karamcheti can recommend appropriate products.",
    },
  ];

  const adjustmentPhase = [
    {
      timeline: "First 24 Hours",
      description:
        "Return so Dr. Karamcheti can identify and relieve any sore spots. This is normal and expected—don't try to adjust at home.",
    },
    {
      timeline: "Week 1-2",
      description:
        "You'll likely notice tender areas or spots where the denture feels loose. Another appointment allows Dr. Karamcheti to make adjustments.",
    },
    {
      timeline: "Month 1",
      description:
        "Significant bone resorption happens in the first month. A visit at the 1-month mark addresses any fit issues from this change.",
    },
    {
      timeline: "Months 2-3",
      description:
        "Continued adaptation. You're learning how to insert and remove dentures, eat, and speak with them. Practice and patience are key.",
    },
    {
      timeline: "3+ Months",
      description:
        "Most patients are well-adjusted by 3 months. Bone continues to resorb slowly over the first year, requiring possible adjustments.",
    },
  ];

  const faqItems = [
    {
      question: "Will dentures look natural?",
      answer:
        "Modern dentures look very natural. Dr. Karamcheti carefully selects tooth shape, size, color, and positioning to match your facial features and personal preferences. Most people won't notice you're wearing dentures. The key is starting with high-quality lab work and proper customization.",
    },
    {
      question: "Can I eat normally with dentures?",
      answer:
        "You can eat most foods, but not exactly like natural teeth. Dentures allow you to eat far better than having no teeth. Avoid extremely sticky foods (caramel, toffee), hard foods (nuts, ice), and large, tough pieces. With practice, you'll develop efficient eating techniques and figure out what works for you.",
    },
    {
      question: "Will my speech sound different?",
      answer:
        "Initially, yes. You may lisp slightly or feel like you have a mouthful when you first get dentures. This is temporary. Most patients adapt within a few weeks of practice. If speech problems persist beyond a few months, contact Dr. Karamcheti—the denture may need adjustment.",
    },
    {
      question: "How much do dentures cost?",
      answer:
        "Basic complete dentures range from $600-$1500 per arch. Premium dentures with cosmetic customization cost $1500-$3000. Implant-supported dentures cost significantly more due to implant placement. Dr. Karamcheti discusses costs upfront and works with patients on payment options.",
    },
    {
      question: "Do dentures require any special care?",
      answer:
        "Yes, but it's straightforward. Daily brushing with denture cleaner, overnight soaking, gentle handling, and regular check-ups keep dentures in good shape. They're easier to care for than natural teeth in some ways—no flossing, no cavities.",
    },
    {
      question: "Will my dentures ever feel comfortable?",
      answer:
        "Yes, most patients adapt within 2-3 months. The adjustment period involves learning new habits and addressing fit issues. Some patients struggle longer and need extra patience or adjustments. If you're struggling after 3 months, talk to Dr. Karamcheti—there are strategies to improve comfort.",
    },
    {
      question: "How often do dentures need to be replaced?",
      answer:
        "Well-maintained dentures typically last 5-8 years before needing replacement. They may need adjustments or 'relines' (updating the fit) more frequently as your jawbone shape changes. Some adjustments are simple; others may require new dentures.",
    },
    {
      question: "Are implant-supported dentures worth the cost?",
      answer:
        "If you can afford them and have sufficient bone, many patients find them worth the investment. They offer superior stability, better chewing function, and less bone loss over time. However, traditional dentures are a great option if budget is a concern.",
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
            Dentures in Charlottesville VA
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-cream/90 mb-8 leading-relaxed"
          >
            Restore your smile with custom dentures crafted by Dr. Sowmya Karamcheti. Full, partial, and implant-supported options for natural-looking restoration and confident living.
          </motion.p>
          <motion.div variants={itemVariants}>
            <ImagePlaceholder label="Custom dentures fitting process" />
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
            Dentures are custom-made artificial teeth that replace missing natural teeth. They come in three main types: complete dentures (replacing all teeth), partial dentures (replacing some teeth), and implant-supported dentures (anchored to dental implants for superior stability). Modern dentures look natural, restore eating and speaking ability, and are significantly more affordable than implants. The fitting process takes 4-6 weeks and includes multiple appointments to ensure proper fit, bite, and comfort.
          </p>
        </div>
      </motion.section>

      {/* Types of Dentures */}
      <motion.section
        ref={typesRef}
        initial="hidden"
        animate={typesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Types of Dentures
          </motion.h2>

          <div className="space-y-6">
            {dentureTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-navy mb-3">{type.name}</h3>
                <p className="text-navy/80 text-base leading-relaxed mb-4">{type.description}</p>
                <div className="bg-blue-50 p-3 rounded border border-blue-100">
                  <p className="text-navy/75 text-sm">
                    <strong>Best for:</strong> {type.best}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-amber-50 p-6 rounded-lg border border-gold/30">
            <h3 className="text-navy font-semibold text-lg mb-3">Which Type Is Right for You?</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              Your choice depends on how many teeth need replacement, the health of remaining teeth, your jawbone structure, and your budget. Dr. Karamcheti evaluates all these factors and provides recommendations tailored to your specific situation. She can explain the pros and cons of each option to help you make the best choice for your needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Dentures vs. Implants */}
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
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            Dentures vs. Dental Implants: What's Best for You?
          </motion.h2>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed">
              <p>
                Both dentures and dental implants can restore missing teeth, but they're different solutions with different pros and cons. Here's how they compare:
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="border-2 border-gold p-6 rounded-lg bg-amber-50">
              <h3 className="text-lg font-semibold text-navy mb-4">Dentures: The Classic Solution</h3>
              <div className="space-y-3">
                <p className="text-navy/80"><strong>Cost:</strong> $600-$3000 depending on type and customization. Much more affordable than implants.</p>
                <p className="text-navy/80"><strong>Procedure:</strong> Non-surgical. Impressions and custom fitting over 4-6 weeks.</p>
                <p className="text-navy/80"><strong>Function:</strong> Very good for eating and speaking. Not quite as natural as implants or original teeth.</p>
                <p className="text-navy/80"><strong>Bone:</strong> Dentures don't prevent bone loss, though they slow it somewhat.</p>
                <p className="text-navy/80"><strong>Maintenance:</strong> Daily cleaning, soaking, regular check-ups. No special oral hygiene.</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="border-2 border-sage p-6 rounded-lg bg-blue-50">
              <h3 className="text-lg font-semibold text-navy mb-4">Dental Implants: Modern Restoration</h3>
              <div className="space-y-3">
                <p className="text-navy/80"><strong>Cost:</strong> $3000-$6000+ per implant. Can be very expensive for full mouth restoration.</p>
                <p className="text-navy/80"><strong>Procedure:</strong> Surgical implant placement with several months of healing before teeth attach. More complex process.</p>
                <p className="text-navy/80"><strong>Function:</strong> Most natural feeling and functioning. Chew almost like natural teeth.</p>
                <p className="text-navy/80"><strong>Bone:</strong> Implants stimulate bone, preventing bone loss—the best option for long-term jaw health.</p>
                <p className="text-navy/80"><strong>Maintenance:</strong> Same as natural teeth—brush, floss, and regular check-ups.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-navy text-base leading-relaxed">
                <strong>Many patients choose dentures initially for cost-effectiveness, then consider implants later if they want an upgrade.</strong> Both are valid solutions. Some patients do a hybrid: dentures supported by a few implants for added stability.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* The Fitting Process */}
      <motion.section
        ref={adjustmentRef}
        initial="hidden"
        animate={adjustmentInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            The Denture Fitting Process at Willis & Associates
          </motion.h2>

          <div className="space-y-4 mb-12">
            {fitProcess.map((stage, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-heading font-bold">{stage.step}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-navy mb-2">{stage.title}</h3>
                    <p className="text-navy/80 text-base leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Digital Impressions Advantage</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              Dr. Karamcheti uses 3D digital impressions rather than messy traditional impressions. This technology is more comfortable, more accurate, and gives the lab precise information for superior-fitting dentures from the start.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Adjustment Period */}
      <motion.section
        ref={careRef}
        initial="hidden"
        animate={careInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-8"
          >
            The Adjustment Period: What to Expect
          </motion.h2>

          <motion.div variants={itemVariants} className="text-navy text-lg leading-relaxed mb-12">
            <p>
              Getting dentures is a significant adjustment. Your mouth is learning something entirely new—how to position the dentures, how to speak and eat with them, and how to manage them daily. This adjustment period varies from person to person, typically taking 2-3 months before you feel truly comfortable.
            </p>
          </motion.div>

          <div className="space-y-4 mb-12">
            {adjustmentPhase.map((phase, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border-l-4 border-gold bg-amber-50 p-6 rounded-r-lg"
              >
                <h3 className="text-navy font-semibold text-lg mb-2">{phase.timeline}</h3>
                <p className="text-navy/80 text-base leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Dr. Karamcheti's Support Through Adjustment</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              You're not alone in this transition. Dr. Karamcheti schedules follow-up appointments at critical points and is available if issues arise. She provides guidance on insertion and removal, eating techniques, speech adjustment, and troubleshooting. Many patients benefit from talking to others who wear dentures—Dr. Karamcheti can connect you with resources and support.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Care & Maintenance */}
      <motion.section
        initial="hidden"
        animate={careInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-cream"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl text-navy mb-12"
          >
            Denture Care & Maintenance
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {careTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-navy font-semibold text-lg mb-3">{tip.title}</h3>
                <p className="text-navy/75 text-base leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-navy font-semibold text-lg mb-3">Professional Cleaning at Willis & Associates</h3>
            <p className="text-navy/80 text-base leading-relaxed">
              Even with excellent home care, visit Willis & Associates every 6-12 months for professional cleaning and adjustment. Dr. Karamcheti inspects the dentures for wear, checks your bite, and ensures your mouth remains healthy. Regular monitoring helps catch issues early and extends denture life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
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
            The Benefits of Dentures at Willis & Associates
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-cream border border-navy/10 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{adv.icon}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{adv.title}</h3>
                <p className="text-navy/75 text-sm leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
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
                  <div className="px-6 py-4 bg-blue-50 border-t border-navy/10">
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
        headline="Restore Your Smile with Custom Dentures"
        subheadline="Dr. Sowmya Karamcheti creates beautiful, comfortable dentures tailored to your needs. Schedule a consultation at Willis & Associates in Charlottesville today."
        buttonText="Call (434) 973-5873"
        buttonLink="tel:4349735873"
      />
    </div>
  );
}
