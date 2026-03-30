"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";
import { Zap, Smile, Clock, Eye, Microscope, Shield } from "lucide-react";
import Link from "next/link";

export default function IteroScannerContent() {
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

  const howItWorks = [
    {
      step: 1,
      title: "Scan Your Teeth",
      description:
        "Dr. Karamcheti uses the handheld iTero wand to scan all tooth surfaces. The camera captures thousands of micro-precise 3D images.",
    },
    {
      step: 2,
      title: "Real-Time Visualization",
      description:
        "The images appear immediately on the screen. You can see your teeth in 3D, and Dr. Karamcheti can verify the scan is complete.",
    },
    {
      step: 3,
      title: "Digital Model Created",
      description:
        "The software stitches the images into one accurate 3D model of your mouth. This takes just seconds.",
    },
    {
      step: 4,
      title: "No More Uncomfortable Trays",
      description:
        "Your impression is done — no gag-inducing trays, no retakes for accuracy, no waiting. The digital data is ready for your restoration.",
    },
  ];

  const applications = [
    {
      icon: Smile,
      name: "Invisalign Clear Aligners",
      description:
        "iTero is the gold standard for Invisalign. The precise scan shows how your teeth will move throughout treatment. You can see your final smile before starting.",
      specialty: "Orthodontics & Cosmetics",
    },
    {
      icon: Shield,
      name: "Dental Crowns",
      description:
        "Perfect measurements for custom crowns that fit seamlessly with your bite. See a preview of your crown before it's milled.",
      specialty: "Restorative Dentistry",
    },
    {
      icon: Eye,
      name: "Bridges",
      description:
        "Multiple tooth gaps? iTero captures the precise span needed for a custom bridge. Ensures proper fit and function.",
      specialty: "Complex Restorations",
    },
    {
      icon: Microscope,
      name: "Veneers",
      description:
        "Ultra-precise measurements for cosmetic veneers. The 3D model shows how veneers will look on your specific teeth.",
      specialty: "Cosmetic Dentistry",
    },
    {
      icon: Zap,
      name: "Inlays & Onlays",
      description:
        "Conservative restorations that preserve tooth structure. iTero ensures they fit perfectly.",
      specialty: "Conservative Restorations",
    },
    {
      icon: Clock,
      name: "Implant Planning",
      description:
        "Detailed imaging helps Dr. Karamcheti plan implant placement and eventual restoration.",
      specialty: "Implant Dentistry",
    },
  ];

  const benefits = [
    {
      icon: Smile,
      title: "No Gag Reflex",
      description:
        "The wand is small and doesn't trigger your gag reflex like impression trays. Much more comfortable for sensitive patients.",
    },
    {
      icon: Clock,
      title: "Quick & Easy",
      description:
        "Scan takes 2-3 minutes total. No waiting for tray material to set or multiple retakes. You're done and comfortable.",
    },
    {
      icon: Eye,
      title: "See Your Smile in 3D",
      description:
        "Dr. Karamcheti can show you exactly how your restoration will look before it's made. You have a voice in the design.",
    },
    {
      icon: Shield,
      title: "Superior Accuracy",
      description:
        "Digital data is more precise than traditional impressions. Better fit means fewer adjustments needed.",
    },
    {
      icon: Zap,
      title: "Instant Digital Record",
      description:
        "Your scan is saved permanently in your digital file. Future restorations can reference it. No lost or damaged molds.",
    },
    {
      icon: Microscope,
      title: "Perfect for Tracking Progress",
      description:
        "With Invisalign or orthodontic treatment, you can compare scans over time and see your transformation happening.",
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

  const { ref: howRef, inView: howInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: applicationsRef, inView: applicationsInView } = useInView({
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
            iTero Digital Scanner in Charlottesville
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-[#c9a84c] text-[#1a2332] rounded-lg p-6 mb-8 inline-block"
          >
            <p className="font-heading text-2xl font-bold">
              No Gag-Inducing Trays. Perfect Digital Impressions. Better Results.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#f0ebe3] mb-10 leading-relaxed"
          >
            Say goodbye to uncomfortable impression trays. The iTero 3D scanner captures
            precise digital impressions in minutes — comfortable, accurate, and
            perfect for everything from Invisalign to crowns and bridges. You'll see
            exactly what your restoration will look like before it's made.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300 text-lg shadow-lg"
            >
              Schedule Your Scan
            </a>
            <Link
              href="/invisalign-charlottesville"
              className="border-2 border-[#c9a84c] text-[#c9a84c] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#c9a84c]/10 transition-all duration-300 text-lg"
            >
              Explore Invisalign
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
            Why We Use iTero at Cville Dentist
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

      {/* How It Works */}
      <motion.section
        ref={howRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={howInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            How the iTero Scanner Works
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#c9a84c] text-[#1a2332]">
                    <span className="font-heading text-3xl font-bold">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="flex-grow bg-[#2a3d4d] rounded-lg p-8 border-l-4 border-[#c9a84c]">
                  <h3 className="font-heading text-2xl font-bold text-[#faf9f7] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-lg text-[#d0ccc4] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#c9a84c]/20 to-[#7a9e7e]/20 border border-[#c9a84c]/30 rounded-lg p-8"
          >
            <p className="font-body text-lg text-[#f0ebe3] leading-relaxed">
              <strong>Total time:</strong> 2-3 minutes. Your teeth are captured, your
              restoration is designed, and you're comfortable throughout. No more
              sitting with trays in your mouth or gagging. Just a quick, easy scan
              that's more accurate than traditional impressions.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Applications */}
      <motion.section
        ref={applicationsRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={applicationsInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            What Can the iTero Scan Be Used For?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-[#1a2332] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-[#c9a84c] to-[#b89a3c] p-6">
                    <Icon className="w-10 h-10 text-[#1a2332] mb-3" />
                    <h3 className="font-heading text-2xl font-bold text-[#1a2332]">
                      {app.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-[#d0ccc4] mb-6 leading-relaxed">
                      {app.description}
                    </p>
                    <div className="border-t border-[#1a2332] pt-4">
                      <p className="font-body text-sm text-[#c9a84c] font-semibold uppercase tracking-wide">
                        {app.specialty}
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
            Whether you're straightening your teeth with Invisalign, replacing a
            damaged tooth with a crown, or planning cosmetic veneers, the iTero scan
            gives Dr. Karamcheti the precision needed to create restorations that
            match your natural teeth perfectly.
          </motion.p>
        </div>
      </motion.section>

      {/* Comparison */}
      <motion.section
        ref={comparisonRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={comparisonInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-8 text-center"
          >
            iTero vs. Traditional Impression Trays
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#c9a84c]/20">
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Factor
                  </th>
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    iTero Digital
                  </th>
                  <th className="font-heading font-bold text-[#faf9f7] p-4 border-b border-[#c9a84c]/30">
                    Traditional Trays
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Comfort",
                    "Wand-based scanning, no gag reflex, patient has control",
                    "Tray material fills entire mouth, triggers gag reflex",
                  ],
                  [
                    "Time Required",
                    "2-3 minutes, one session",
                    "5-10 minutes with material set time",
                  ],
                  [
                    "Accuracy",
                    "Precise 3D digital model, can verify real-time",
                    "Physical mold prone to distortion during removal",
                  ],
                  [
                    "Retakes",
                    "Easy to rescan small areas instantly",
                    "Entire tray must be redone",
                  ],
                  [
                    "Patient Preview",
                    "See 3D preview of final restoration",
                    "Cannot see final result until restoration is made",
                  ],
                  [
                    "Record Keeping",
                    "Digital file stored forever, searchable",
                    "Physical mold easy to lose or damage",
                  ],
                  [
                    "Sensitivity",
                    "Comfortable for sensitive gag reflex patients",
                    "Often very uncomfortable",
                  ],
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

      {/* Invisalign Specific Section */}
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
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-8 text-center"
          >
            iTero & Invisalign: A Perfect Match
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                title: "See Your Future Smile Before Starting",
                description:
                  "The iTero scan feeds directly into Invisalign's software. Dr. Karamcheti can show you a virtual treatment plan — exactly how your teeth will move and what your final smile will look like. No surprises.",
              },
              {
                title: "Perfectly Fitting Aligners",
                description:
                  "Invisalign aligners are custom-made based on your digital scan. The fit is precise because the data is precise. No loose aligners, no slippage, just effective tooth movement.",
              },
              {
                title: "Track Your Transformation",
                description:
                  "Compared to patients with traditional impressions, Invisalign patients with iTero can see their progress in 3D. Month 3 scan vs. month 6 scan — watch your teeth straighten in real time.",
              },
              {
                title: "Faster Treatment Planning",
                description:
                  "Because the scan is digital and instant, Dr. Karamcheti can start your Invisalign treatment faster. No waiting for molds to be sent to the lab and back.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a2332] rounded-lg p-8 border-l-4 border-[#7a9e7e]"
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
            iTero Scanning FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                q: "Does it hurt or feel uncomfortable?",
                a: "Not at all. The wand is comfortable, and there's no pressure or intrusive feeling. Many patients with sensitive gag reflexes prefer iTero to traditional trays. You can stop the scan anytime if you need a break.",
              },
              {
                q: "How long does the scan take?",
                a: "The actual scanning takes 2-3 minutes. The entire appointment, including discussion of your restoration options, usually takes 20-30 minutes.",
              },
              {
                q: "Will I need multiple scans?",
                a: "Usually one scan is sufficient. The iTero captures incredibly detailed 3D data in a single session. If Dr. Karamcheti wants to rescan one small area, it only adds seconds.",
              },
              {
                q: "Can the iTero scan be used for multiple restorations?",
                a: "Yes. If you're getting both a crown and Invisalign, for example, one scan can serve both purposes. The digital data is incredibly versatile.",
              },
              {
                q: "Is the scan data secure?",
                a: "Your scan is stored in our secure digital system and protected by dental privacy regulations. Only you and Dr. Karamcheti can access it.",
              },
              {
                q: "What happens if I move during the scan?",
                a: "The iTero software is designed to handle minor movements. If you move significantly, Dr. Karamcheti can simply rescan that area. It takes just seconds.",
              },
              {
                q: "Is there an additional cost for iTero?",
                a: "The iTero scan is included in your treatment cost. There's no extra charge. It actually saves time and ensures better accuracy.",
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
            Explore More Advanced Technology at Cville Dentist
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Digital X-Rays",
                description: "90% less radiation, instant imaging for precise diagnosis",
                link: "/technology/digital-xrays",
              },
              {
                name: "Intraoral Cameras",
                description: "See exactly what Dr. Karamcheti sees during your exam",
                link: "/technology/intraoral-cameras",
              },
              {
                name: "Same-Day Crowns",
                description:
                  "Complete crown restoration in one visit using CEREC technology",
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
