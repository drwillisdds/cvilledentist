"use client";

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
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function TeamContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamCardsRef, inView: teamCardsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: trainingRef, inView: trainingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whyRef, inView: whyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: "Dr. Sowmya Karamcheti",
      role: "Lead Dentist, DDS, MHA",
      bio: "Founder and lead dentist with advanced credentials in both clinical dentistry and healthcare administration. Dr. Karamcheti specializes in family dentistry, cosmetic procedures, and in-house dental implant placement and restoration.",
    },
    {
      name: "Dr. James Willis",
      role: "Associate Dentist, DDS",
      bio: "Experienced associate dentist bringing warmth and precision to every patient interaction. Dr. Willis works alongside Dr. Karamcheti to ensure continuity of care and the same consistent quality at every visit.",
    },
    {
      name: "Sarah Martinez",
      role: "Dental Hygienist, RDH",
      bio: "Caring hygienist with over 8 years of experience. Sarah builds relationships with patients, performs thorough cleanings, and educates on preventive oral health practices. Patients feel heard and supported during every hygiene visit.",
    },
    {
      name: "Emma Chen",
      role: "Dental Assistant & Treatment Coordinator",
      bio: "Detail-oriented assistant who assists in all clinical procedures and coordinates patient treatment plans. Emma's warm demeanor and organizational skills help patients feel comfortable and informed from scheduling through completion.",
    },
  ];

  const stabilityReasons = [
    {
      icon: "♡",
      title: "Same Familiar Faces",
      description:
        "No revolving door. The same doctors, hygienists, and team members see your family at every visit. Continuity builds trust and better outcomes.",
    },
    {
      icon: "✓",
      title: "Experience That Shows",
      description:
        "Years of patient relationships mean we know your history, understand your preferences, and anticipate your needs before you ask.",
    },
    {
      icon: "⚡",
      title: "Consistent Quality",
      description:
        "Each team member is trained to the same high standard. You receive the same excellent care whether you see Dr. Karamcheti or Dr. Willis.",
    },
  ];

  const trainingPoints = [
    {
      title: "Continuing Education",
      description:
        "Every team member participates in ongoing training on the latest techniques, materials, and patient communication methods. Dentistry evolves, and so do we.",
    },
    {
      title: "Team Collaboration",
      description:
        "Doctors, hygienists, and assistants meet regularly to discuss cases, refine protocols, and ensure seamless coordination from exam room to lab to final delivery.",
    },
    {
      title: "Patient-Centric Culture",
      description:
        "Every training session reinforces our commitment to listening, explaining, and making patients feel unhurried and heard. Excellence means both clinical skill and genuine care.",
    },
  ];

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
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg mb-6"
          >
            Meet Our Charlottesville Dental Team
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Experienced. Stable. Genuinely warm. The same familiar faces at every visit.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-cream border-l-4 border-gold">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={introRef}
            initial={{ opacity: 0, y: 20 }}
            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
          >
            <p className="text-lg text-gray-800 leading-relaxed font-semibold mb-3">
              Cville Dentist in Charlottesville employs a stable, experienced dental team led by Dr. Sowmya Karamcheti (DDS, MHA) and Dr. James Willis (DDS). Patients see the same familiar faces at every visit — no revolving door of unfamiliar providers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our hygienists, assistants, and front desk staff are trained to the same high standard and stay with us year after year. That continuity of care makes all the difference in building trust, understanding your unique needs, and delivering consistent excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={teamCardsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={teamCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-navy"
          >
            The Faces Behind Your Smile
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={teamCardsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            {teamMembers.map((member, index) => {
              let imageUrl = images.officeInterior1;
              if (index === 0) imageUrl = images.drKaramcheti;
              else if (index === 1) imageUrl = images.drWillis;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-cream rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={imageUrl}
                    alt={`${member.name}, dental professional in Charlottesville`}
                    className="w-full h-full object-cover rounded-xl mb-6"
                  />
                  <h3 className="heading-sm text-navy mb-2">{member.name}</h3>
                  <p className="text-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Stability Matters */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={whyRef}
            initial={{ opacity: 0, y: 20 }}
            animate={whyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-16 text-white"
          >
            Why Team Stability Matters
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {stabilityReasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm border border-white border-opacity-20"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-navy">{reason.icon}</span>
                </div>
                <h3 className="heading-sm text-center text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-white text-opacity-90 text-center leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training & Continuing Education */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={trainingRef}
            initial={{ opacity: 0, y: 20 }}
            animate={trainingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="heading-lg text-center mb-4 text-navy"
          >
            Team Excellence Starts With Training
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={trainingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            className="text-center text-gray-700 text-lg mb-16 max-w-3xl mx-auto"
          >
            Every member of our team participates in ongoing professional development. We invest in continuing education, collaborate on cases, and constantly refine how we communicate with and care for patients.
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={trainingInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {trainingPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl text-navy">📚</span>
                </div>
                <h3 className="heading-sm text-navy mb-4">{point.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Patient Testimonial Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
            viewport={{ once: true, amount: 0.3 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            What Patients Say About Our Team
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                quote:
                  "I've been coming here for 5 years and I see the same wonderful people every time. That consistency is priceless. They know me, they remember my preferences, and they actually care.",
                author: "Michael K.",
              },
              {
                quote:
                  "Dr. Karamcheti AND Dr. Willis? That's not common. And their whole team is on the same page about patient care. I feel like I'm in truly capable hands.",
                author: "Jennifer L.",
              },
              {
                quote:
                  "My daughter was anxious about the dentist. Sarah, the hygienist, made her feel so comfortable. Now she actually looks forward to cleanings. That's the power of having the right people.",
                author: "David M.",
              },
              {
                quote:
                  "No surprises, no new faces, no 'we'll send you somewhere else for that.' This team handles everything, and they do it with genuine warmth. Best dental experience I've had.",
                author: "Patricia R.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 border-l-4 border-gold"
              >
                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-navy font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="gold"
        headline="Meet Your Team"
        subheadline="Schedule a consultation with Cville Dentist and experience the difference a stable, experienced team makes."
        buttonText="Schedule Your First Visit"
        buttonLink="/new-patients"
      />
    </>
  );
}
