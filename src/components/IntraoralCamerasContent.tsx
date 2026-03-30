"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";
import { Eye, Zap, Clock, Shield, Microscope, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function IntraoralCamerasContent() {
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

  const capabilities = [
    {
      magnification: "60-80x",
      capability: "Magnified tooth surfaces show microscopic cavities and fractures",
      used_for: "Cavity detection, crack identification",
    },
    {
      magnification: "Live display",
      capability: "Real-time images on the monitor during your exam",
      used_for: "Patient education, treatment planning",
    },
    {
      magnification: "HD clarity",
      capability: "High-definition resolution captures fine details",
      used_for: "Documentation, insurance claims, records",
    },
    {
      magnification: "Color accuracy",
      capability: "True color reproduction shows discoloration and staining",
      used_for: "Shade selection for restorations, cosmetic planning",
    },
  ];

  const benefits = [
    {
      icon: Eye,
      title: "See What Dr. Karamcheti Sees",
      description:
        "Watch the exam in real-time on the monitor. No more wondering what the dentist is looking at or where that cavity is. Transparency builds trust.",
    },
    {
      icon: Zap,
      title: "Detect Problems Early",
      description:
        "The camera's magnification reveals tiny cavities, fractures, and decay under old fillings before symptoms appear. Early detection means simpler treatment.",
    },
    {
      icon: Microscope,
      title: "Better Patient Education",
      description:
        "Seeing your cavity in HD makes it real. Understanding the problem motivates better oral hygiene. Before-and-after images show progress.",
    },
    {
      icon: Shield,
      title: "Insurance Documentation",
      description:
        "High-resolution images support insurance claims. Clearer documentation means fewer denials and faster processing.",
    },
    {
      icon: Clock,
      title: "Treatment Planning",
      description:
        "Dr. Karamcheti uses intraoral images to plan crowns, bridges, veneers, and implants. Precise visuals lead to better treatment outcomes.",
    },
    {
      icon: TrendingUp,
      title: "Permanent Digital Record",
      description:
        "Images become part of your file. Future visits can compare current condition to previous exams. Track your oral health over years.",
    },
  ];

  const detectionExamples = [
    {
      problem: "Hidden Decay Between Teeth",
      howDetected:
        "Camera zooms into interproximal spaces that brushing misses. Early cavities show as discoloration or shadow.",
      whyMatters: "Treatment is simple and less expensive at early stages.",
    },
    {
      problem: "Decay Under Existing Fillings",
      howDetected:
        "High magnification reveals dark areas around filling margins. Secondary decay visible before deep infection.",
      whyMatters:
        "Dr. Karamcheti can replace the filling before root canal is needed.",
    },
    {
      problem: "Hairline Cracks in Teeth",
      howDetected:
        "Fine fractures invisible to the naked eye show as thin lines. May run vertically or horizontally.",
      whyMatters:
        "Early identification prevents full break. Treatment options range from bonding to crowns.",
    },
    {
      problem: "Gum Recession and Bone Loss",
      howDetected:
        "Camera shows gum line position and exposed root surfaces. Bleeding gums visible during gentle probing.",
      whyMatters: "Periodontal disease detected early for treatment to prevent tooth loss.",
    },
    {
      problem: "Developing Cavities at Gumline",
      howDetected:
        "Root cavities develop below the gumline. Camera reveals cavities Dr. Karamcheti spots during careful examination.",
      whyMatters:
        "Gumline cavities spread fast. Early detection prevents deep involvement.",
    },
    {
      problem: "Discoloration and Staining",
      howDetected:
        "Color camera shows exact shade and pattern of staining. Differentiates surface stain from internal discoloration.",
      whyMatters:
        "Treatment varies — whitening works for surface stain, veneers needed for internal.",
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

  const { ref: capabilitiesRef, inView: capabilitiesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: detectionRef, inView: detectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: patientEdRef, inView: patientEdInView } = useInView({
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
            Intraoral Cameras in Charlottesville
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="bg-[#c9a84c] text-[#1a2332] rounded-lg p-6 mb-8 inline-block"
          >
            <p className="font-heading text-2xl font-bold">
              See Your Teeth in HD. Understand Your Oral Health.
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-[#f0ebe3] mb-10 leading-relaxed"
          >
            Watch your exam in real-time. A tiny camera magnifies your teeth 60-80
            times, revealing cavities, cracks, and problems that would otherwise be
            invisible. You'll see exactly what Dr. Karamcheti sees — and understand
            why treatment is recommended.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="bg-[#c9a84c] text-[#1a2332] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#d4b55d] transition-all duration-300 text-lg shadow-lg"
            >
              Schedule Your Exam
            </a>
            <Link
              href="/new-patients"
              className="border-2 border-[#c9a84c] text-[#c9a84c] font-heading font-bold py-4 px-8 rounded-lg hover:bg-[#c9a84c]/10 transition-all duration-300 text-lg"
            >
              New Patient Info
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
            Why Intraoral Cameras Matter for Your Dental Health
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

      {/* Camera Capabilities */}
      <motion.section
        ref={capabilitiesRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={capabilitiesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            What Makes Intraoral Cameras So Powerful
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a3d4d] rounded-lg p-8 border-l-4 border-[#c9a84c]"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <p className="font-body text-sm text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">
                      Capability
                    </p>
                    <p className="font-heading text-3xl font-bold text-[#faf9f7]">
                      {cap.magnification}
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-sm text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">
                      What It Does
                    </p>
                    <p className="font-body text-[#d0ccc4]">{cap.capability}</p>
                  </div>
                  <div>
                    <p className="font-heading text-sm text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">
                      Used For
                    </p>
                    <p className="font-body text-[#d0ccc4]">{cap.used_for}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#c9a84c]/20 to-[#7a9e7e]/20 border border-[#c9a84c]/30 rounded-lg p-8"
          >
            <p className="font-body text-lg text-[#f0ebe3] leading-relaxed">
              <strong>The takeaway:</strong> At magnifications of 60-80x, problems that
              would be missed by the naked eye become obvious. Dr. Karamcheti can detect
              and document issues at their earliest, most treatable stage.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What Can Be Detected */}
      <motion.section
        ref={detectionRef}
        className="px-6 py-16 md:py-24 bg-[#2a3d4d]/60"
        initial="hidden"
        animate={detectionInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            What Can the Intraoral Camera Detect?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {detectionExamples.map((example, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#1a2332] rounded-lg overflow-hidden border-l-4 border-[#7a9e7e]"
              >
                <div className="bg-gradient-to-r from-[#7a9e7e]/20 to-transparent p-6 border-b border-[#7a9e7e]/30">
                  <h3 className="font-heading text-2xl font-bold text-[#faf9f7]">
                    {example.problem}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <p className="font-heading text-sm text-[#7a9e7e] font-semibold uppercase tracking-wide mb-2">
                      How It's Detected
                    </p>
                    <p className="font-body text-[#d0ccc4]">
                      {example.howDetected}
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-sm text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">
                      Why It Matters
                    </p>
                    <p className="font-body text-[#d0ccc4]">{example.whyMatters}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Patient Education */}
      <motion.section
        ref={patientEdRef}
        className="px-6 py-16 md:py-24"
        initial="hidden"
        animate={patientEdInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl font-bold text-[#faf9f7] mb-12 text-center"
          >
            Intraoral Cameras as an Education Tool
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                scenario: "You Can't Understand Why You Need a Crown",
                solution:
                  "Dr. Karamcheti points to the crack on the monitor — now you see it clearly in 60x magnification. The hairline fracture that will split the tooth without protection is obvious.",
              },
              {
                scenario:
                  "You Don't Think Your Gums Are a Problem (But You Skip Flossing)",
                solution:
                  "The camera shows gum recession and inflammation you can't see in the mirror. Seeing bleeding during the exam motivates better flossing habits.",
              },
              {
                scenario: "You Want to See if Your Fillings Need Replacement",
                solution:
                  "The camera reveals dark areas of secondary decay around old filling margins. Dr. Karamcheti can show you the problem before symptoms develop.",
              },
              {
                scenario: "You're Considering Cosmetic Whitening or Veneers",
                solution:
                  "High-definition color images show exact shade, discoloration pattern, and shape. You'll see before-and-after mockups on the monitor.",
              },
              {
                scenario:
                  "You're Skeptical About Suggested Treatment (Natural Resistance to Dentistry)",
                solution:
                  "Seeing your cavity, crack, or bone loss on the monitor makes it real. Visual evidence is more persuasive than verbal explanation.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#2a3d4d] rounded-lg p-8 border-l-4 border-[#c9a84c]"
              >
                <h3 className="font-heading text-2xl font-bold text-[#c9a84c] mb-4">
                  {item.scenario}
                </h3>
                <p className="font-body text-lg text-[#d0ccc4] leading-relaxed">
                  <strong>What happens:</strong> {item.solution}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-r from-[#c9a84c]/20 to-[#7a9e7e]/20 border border-[#c9a84c]/30 rounded-lg p-8"
          >
            <p className="font-body text-lg text-[#f0ebe3] leading-relaxed">
              <strong>Bottom line:</strong> When you see the problem clearly on the
              monitor, you understand the treatment recommendation. Trust increases
              when patients are educated — not just told "you need this."
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* How the Exam Works */}
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
            What to Expect During an Exam with the Intraoral Camera
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            {[
              {
                stage: "Initial Setup",
                description:
                  "Dr. Karamcheti explains that you'll be able to watch the exam on the monitor. A small HD camera on a thin wand will be used to capture images of your teeth and gums.",
              },
              {
                stage: "Scanning Process",
                description:
                  "The camera moves through your mouth, capturing images of each tooth surface, gumline, and the back of your mouth. You can see everything on the screen in real-time. The entire process takes about 5-10 minutes.",
              },
              {
                stage: "Live Discussion",
                description:
                  "As images appear, Dr. Karamcheti points out areas of concern. 'See this dark area? That's early decay.' You watch together, not just listen.",
              },
              {
                stage: "Documentation",
                description:
                  "Key images are saved to your permanent dental record. These become benchmarks for future exams. Six months from now, a new scan can compare to these baseline images.",
              },
              {
                stage: "Treatment Planning",
                description:
                  "If treatment is needed, Dr. Karamcheti uses the images to explain options. You both understand the problem and can discuss solutions intelligently.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#c9a84c] text-[#1a2332]">
                    <span className="font-heading font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-heading text-2xl font-bold text-[#faf9f7] mb-3">
                    {step.stage}
                  </h3>
                  <p className="font-body text-[#d0ccc4] leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
            Intraoral Camera FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {[
              {
                q: "Does the camera hurt or feel uncomfortable?",
                a: "Not at all. The camera head is small and smooth. It doesn't touch your teeth — just captures images. Many patients find it more comfortable than traditional mirrors.",
              },
              {
                q: "Is the camera sterile?",
                a: "Yes. Dr. Karamcheti uses either disposable camera covers or sterilizes the camera between patients using an autoclave. Your safety and hygiene are paramount.",
              },
              {
                q: "Will the images be stored in my file?",
                a: "Yes. Key images are saved to your permanent dental record. This allows Dr. Karamcheti and any future dentist to compare your current condition to previous exams over years.",
              },
              {
                q: "Can I get copies of my intraoral photos?",
                a: "Absolutely. We can provide you with digital copies of your images. Many patients like to see their progress over time, especially with cosmetic or orthodontic treatment.",
              },
              {
                q: "Do insurance companies accept intraoral images for claims?",
                a: "Yes. These high-resolution, professional images are excellent documentation for insurance claims. They often result in faster approval and fewer denials.",
              },
              {
                q: "Will I see things that scare me?",
                a: "Possibly, but knowledge is power. If there's decay or bone loss, knowing about it early means simpler treatment. Ignoring problems never makes them better.",
              },
              {
                q: "Is there an extra charge for intraoral camera imaging?",
                a: "No. The camera is part of Dr. Karamcheti's standard diagnostic toolkit, included in your exam cost.",
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
            Explore Our Complete Technology Suite
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Digital X-Rays",
                description: "90% less radiation, instant high-resolution imaging",
                link: "/technology/digital-xrays",
              },
              {
                name: "iTero Digital Scanner",
                description: "No-gag impressions for Invisalign, crowns, and bridges",
                link: "/technology/itero-scanner",
              },
              {
                name: "Same-Day Crowns",
                description:
                  "Complete restoration in one visit using CEREC technology",
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
