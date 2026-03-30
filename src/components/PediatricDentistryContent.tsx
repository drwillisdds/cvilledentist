"use client";

import Link from "next/link";
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
    transition: { duration: 0.6 },
  },
};

const easeArray = [0, 0, 0.2, 1] as const;

export default function PediatricDentistryContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: answerRef, inView: answerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ageRef, inView: ageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: approachRef, inView: approachInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: parentRef, inView: parentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: faqRef, inView: faqInView } = useInView({
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
            Pediatric Dentistry in Charlottesville VA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Gentle, kid-friendly dental care that builds healthy habits and
            positive relationships with dentistry. Dr. Karamcheti loves working
            with children and families.
          </motion.p>
        </div>
      </section>

      {/* Direct Answer Block */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={answerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={answerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border-l-4 border-gold">
              <h2 className="heading-md text-navy mb-6">
                Why Pediatric Dental Care Matters
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A child's first dental experiences shape their lifelong attitudes about dental care. A positive, gentle visit builds confidence and establishes healthy habits. A scary or rushed visit can create dental anxiety that lasts decades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dr. Karamcheti specializes in making dental visits fun, calm, and rewarding for kids. She takes time to explain what she's doing, listens to children's concerns, and celebrates their cooperation. The result: children who grow up confident about dental health and willing to seek care as adults.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether your child is visiting the dentist for the first time or needs restorative care, Dr. Karamcheti approaches every visit with warmth, clear communication, and age-appropriate skill.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to Start */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={ageRef}
            initial={{ opacity: 0, y: 20 }}
            animate={ageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            When Should Your Child First See a Dentist?
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={ageInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                age: "6 Months to 1 Year",
                title: "Teething Begins",
                content: [
                  "Your baby's first teeth are starting to erupt.",
                  "A dental visit helps parents understand teething and oral care for infants.",
                  "Dr. Karamcheti can answer questions about comfort measures and pacifier use.",
                  "Early visits normalize the dental environment for your child.",
                ],
              },
              {
                age: "12-18 Months",
                title: "First Teeth Appearing",
                content: [
                  "Your child likely has several primary (baby) teeth by now.",
                  "The American Academy of Pediatrics recommends a first dental visit around this age.",
                  "Dr. Karamcheti will check for proper eruption, clean teeth gently, and discuss home care.",
                  "This visit establishes baseline oral health and begins your child's relationship with dentistry.",
                ],
              },
              {
                age: "2-3 Years",
                title: "Primary Dentition Complete",
                content: [
                  "Your child now has all 20 primary teeth.",
                  "Regular check-ups every 6 months begin monitoring for cavities and proper development.",
                  "Dr. Karamcheti may apply fluoride treatments to strengthen enamel.",
                  "Behavioral guidance helps children understand brushing and cooperation.",
                ],
              },
              {
                age: "4-5 Years",
                title: "Early Childhood",
                content: [
                  "Cavity risk is highest during this age because children love sugary snacks and may not brush thoroughly.",
                  "Dental sealants protect the chewing surfaces of molars from decay.",
                  "Dr. Karamcheti monitors for early signs of crowding or bite problems.",
                  "Prevention is easier than treatment at this age.",
                ],
              },
              {
                age: "6-12 Years",
                title: "Mixed Dentition",
                content: [
                  "Primary teeth begin shedding and permanent teeth erupt.",
                  "Regular cleaning and sealants continue protecting developing teeth.",
                  "Dr. Karamcheti monitors bite development and may identify cases needing orthodontics later.",
                  "Reinforcing good brushing and flossing habits is crucial during this transition.",
                ],
              },
              {
                age: "13+ Years",
                title: "Teen Dentistry",
                content: [
                  "Most permanent teeth are in place; focus shifts to prevention and maintenance.",
                  "Orthodontics may be recommended if not already underway.",
                  "Teens often develop cavities from snacking and irregular brushing—guidance helps.",
                  "Dr. Karamcheti prepares them for lifelong dental health habits.",
                ],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-semibold text-gold mb-2">
                  {item.age}
                </div>
                <h3 className="heading-sm text-navy mb-4">{item.title}</h3>
                <ul className="space-y-3">
                  {item.content.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-700 leading-relaxed flex gap-2"
                    >
                      <span className="text-gold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dr. Karamcheti's Approach */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={approachRef}
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Dr. Karamcheti's Kid-Friendly Approach
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                principle: "Communication & Honesty",
                description:
                  "Dr. Karamcheti never tricks or surprises children. She explains what she's about to do in simple, honest language. She shows them instruments and lets them touch them. She tells them what they'll feel and why. This builds trust and reduces anxiety.",
              },
              {
                principle: "Gentle Technique",
                description:
                  "Her hands are calm and sure. She works slowly and takes breaks if a child needs them. She doesn't rush. Pain is minimized through excellent numbing technique and careful instrument control. Children leave knowing the dentist doesn't hurt.",
              },
              {
                principle: "Positive Reinforcement",
                description:
                  "She celebrates cooperation, bravery, and good behavior. She doesn't scold or shame kids for being nervous or having cavities. Positive experiences build confidence and willingness to return.",
              },
              {
                principle: "Parent Involvement",
                description:
                  "Parents are welcome in the treatment room. Dr. Karamcheti partners with you, explaining findings, discussing treatment options, and coaching you on home care. You know what's happening every step of the way.",
              },
              {
                principle: "Age-Appropriate Care",
                description:
                  "Treatment approaches differ based on age and development. A 3-year-old's visit looks different from a 12-year-old's. Dr. Karamcheti adapts her communication, technique, and expectations to each child's developmental stage.",
              },
              {
                principle: "Prevention Focus",
                description:
                  "Dr. Karamcheti emphasizes prevention: brushing, flossing, healthy diet, fluoride, and sealants. She coaches kids on habits that prevent cavities. When children understand the connection between their actions and their teeth, they become invested in their own health.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border-l-4 border-gold hover:shadow-md transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.principle}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services for Children */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            ref={servicesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-16 text-navy"
          >
            Pediatric Services We Offer
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              {
                service: "Preventive Cleanings & Exams",
                icon: "🪥",
                description:
                  "We clean your child's teeth to remove plaque and tartar, then examine for cavities, alignment issues, and overall development. These visits set the foundation for lifelong oral health.",
              },
              {
                service: "Fluoride Treatments",
                icon: "✨",
                description:
                  "Professional fluoride strengthens enamel and prevents cavities. Dr. Karamcheti applies fluoride during routine visits, especially for children at higher cavity risk.",
              },
              {
                service: "Dental Sealants",
                icon: "🛡",
                description:
                  "Sealants are thin plastic coatings applied to the chewing surfaces of back molars. They prevent food and bacteria from getting stuck in the grooves where cavities often form.",
              },
              {
                service: "Cavity Treatment (Fillings)",
                icon: "🩹",
                description:
                  "If a cavity does develop, Dr. Karamcheti removes the decay and restores the tooth with tooth-colored fillings. She numbs thoroughly to prevent discomfort.",
              },
              {
                service: "Behavioral Guidance",
                icon: "👧",
                description:
                  "Dr. Karamcheti coaches children on brushing technique, importance of flossing, healthy snacking, and reducing sugary drinks. She helps build habits that prevent future cavities.",
              },
              {
                service: "Monitoring Development",
                icon: "📈",
                description:
                  "As teeth erupt and jaws develop, Dr. Karamcheti monitors for crowding, bite problems, and other issues. Early detection of orthodontic problems allows for timely intervention.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="heading-sm text-navy mb-3">{item.service}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parent Guidance */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={parentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={parentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Parent Guidance: Supporting Your Child's Dental Health
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={parentInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {[
              {
                topic: "Starting Good Brushing Habits",
                tips: [
                  "Infants and toddlers: Use a soft baby toothbrush and water until age 2, then a pea-sized amount of fluoride toothpaste.",
                  "Ages 2-5: Brush twice daily for two minutes. Help guide the toothbrush to ensure all surfaces are cleaned.",
                  "Ages 6+: Let them brush independently but supervise to ensure they're thorough. Electric toothbrushes are often more effective for kids.",
                  "Lead by example: Children who see parents brushing and flossing are more likely to do it themselves.",
                ],
              },
              {
                topic: "Flossing & Interdental Cleaning",
                tips: [
                  "Start flossing once teeth touch—usually around age 3-4 when primary molars are in place.",
                  "Help your child floss at first. Many kids master it by age 7-8 with practice.",
                  "Water flossers or floss picks are often easier for kids than traditional floss.",
                  "Positive reinforcement: praise flossing efforts rather than criticizing mistakes.",
                ],
              },
              {
                topic: "Healthy Diet & Cavity Prevention",
                tips: [
                  "Limit sugary snacks and drinks. Cavities form from frequent sugar exposure, not just amount.",
                  "If your child has candy or soda, have it with meals, not between meals. Saliva during meals helps protect teeth.",
                  "Water is the best drink. Limit juice and sports drinks to meal times.",
                  "Avoid sticky candies, chips, and dried fruit, which stick to teeth. Fresh fruits and vegetables are great for teeth.",
                ],
              },
              {
                topic: "Preparing Your Child for Dental Visits",
                tips: [
                  "Use positive language: 'We're going to help keep your teeth strong and healthy.'",
                  "Read children's books about dental visits beforehand.",
                  "Avoid scary language like 'shot,' 'drill,' or 'it might hurt.' Instead, say 'cleaning' and 'buzzing sound.'",
                  "Let them know the dentist will explain everything and that it's okay to raise a hand if they need a break.",
                ],
              },
              {
                topic: "Handling Tooth Loss & Permanent Teeth Eruption",
                tips: [
                  "Losing primary teeth is normal and usually painless. Celebrate with a tooth fairy tradition if desired.",
                  "If a tooth is knocked out, call Dr. Karamcheti immediately. Quick action can sometimes save it.",
                  "Permanent teeth come in and may look larger or grayer—this is normal. Color deepens with age.",
                  "If permanent teeth come in crowded or misaligned, Dr. Karamcheti will advise when orthodontics might help.",
                ],
              },
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border-l-4 border-gold"
              >
                <h3 className="heading-sm text-navy mb-4">{section.topic}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-gold font-bold mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-center mb-12 text-navy"
          >
            Pediatric Dentistry FAQ
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {[
              {
                q: "At what age should my child first visit the dentist?",
                a: "The American Academy of Pediatrics recommends a first dental visit around 12-18 months of age, or when the first tooth erupts, whichever is earlier. This establishes baseline oral health and begins your child's positive relationship with dentistry.",
              },
              {
                q: "How often should my child see the dentist?",
                a: "Most children benefit from dental visits every 6 months for cleaning and examination. Some children with higher cavity risk may need more frequent visits or fluoride treatments. Dr. Karamcheti will recommend a schedule based on your child's individual needs.",
              },
              {
                q: "Is it normal for baby teeth to fall out?",
                a: "Absolutely! Primary (baby) teeth are designed to shed and be replaced by permanent teeth. This process usually begins around age 6 and continues through the early teens. It's a normal, healthy part of development.",
              },
              {
                q: "My child had a cavity. Does this mean they'll have cavities their whole life?",
                a: "No. One cavity doesn't predict a lifetime of cavities. It means conditions were right for decay at that moment—maybe diet, brushing habits, or oral hygiene. With improved habits, fluoride, and sealants, you can prevent future cavities. Dr. Karamcheti will help identify the cause and prevent recurrence.",
              },
              {
                q: "Does my child need fluoride treatments?",
                a: "It depends. Most children benefit from professional fluoride to strengthen enamel, especially those drinking fluoridated water and using fluoride toothpaste. Children at higher cavity risk (history of cavities, lots of sugary snacks, poor brushing) especially benefit. Dr. Karamcheti will recommend based on your child's risk.",
              },
              {
                q: "What are sealants and should my child have them?",
                a: "Sealants are protective coatings on the chewing surfaces of back molars. They prevent cavities by sealing off grooves where decay often starts. Most children benefit from sealants once permanent molars erupt (around ages 6 and 12). They're safe, effective, and usually covered by insurance.",
              },
              {
                q: "My child has two rows of teeth. Is this normal?",
                a: "This happens sometimes when permanent teeth erupt before baby teeth have fallen out. Usually, the baby tooth eventually falls out and the permanent tooth shifts into place. If a baby tooth doesn't fall out within a few months, or if the permanent tooth is severely misaligned, Dr. Karamcheti may recommend extraction.",
              },
              {
                q: "When should my child see an orthodontist?",
                a: "Dr. Karamcheti monitors bite development during routine visits. If she detects significant crowding, bite problems, or jaw discrepancies, she may recommend an orthodontic consultation around age 8-10. Early assessment allows for better planning. Not all children need braces, and early treatment can sometimes prevent them.",
              },
              {
                q: "My child is anxious about the dentist. What can you do?",
                a: "Dr. Karamcheti specializes in helping anxious children. She takes time, communicates clearly, never surprises, and celebrates cooperation. For very anxious children, sedation options exist. The key is finding ways to make visits positive so anxiety decreases over time.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-cream rounded-lg p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="heading-sm text-navy mb-3">{item.q}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="heading-md text-navy mb-8 text-center"
          >
            Other Services for Your Family
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link
              href="/general-dentistry-charlottesville"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                General Dentistry
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Comprehensive care for the whole family, from children through adults.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>

            <Link
              href="/about"
              className="group bg-white rounded-lg p-6 hover:shadow-md transition-shadow border-l-4 border-gold"
            >
              <h3 className="heading-sm text-navy mb-2 group-hover:text-gold transition-colors">
                Meet Dr. Karamcheti
              </h3>
              <p className="text-sm text-gray-700 mb-3">
                Learn about Dr. Karamcheti's approach to patient care and family dentistry.
              </p>
              <span className="text-sm font-semibold text-gold">Learn more →</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Start Your Child's Dental Journey?"
        subheadline="Schedule your child's first visit with Dr. Karamcheti. She'll make it positive, fun, and build habits for a lifetime of healthy smiles."
        buttonText="Schedule Your Child's First Visit"
        buttonLink="/new-patients"
      />
    </>
  );
}
