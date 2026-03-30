"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const articles = [
  {
    slug: "dental-implants-cost-charlottesville",
    title: "How Much Do Dental Implants Cost in Charlottesville, VA in 2026?",
    excerpt:
      "Comprehensive guide to dental implant pricing in Charlottesville, including single implants, All-on-4 solutions, financing options, and Virginia Dental Club savings.",
    date: "March 29, 2026",
    readTime: "8 min read",
  },
  {
    slug: "invisalign-vs-braces-charlottesville",
    title: "Invisalign vs. Braces in Charlottesville: What Adults Need to Know",
    excerpt:
      "Compare Invisalign and braces for adult orthodontics. Learn about candidacy, cost, timeline, and why Charlottesville professionals choose clear aligners.",
    date: "March 29, 2026",
    readTime: "8 min read",
  },
  {
    slug: "dental-emergency-charlottesville",
    title: "What to Do When You Have a Dental Emergency in Charlottesville",
    excerpt:
      "Learn how to handle common dental emergencies—from knocked-out teeth to severe pain. We offer same-day emergency care in Charlottesville.",
    date: "March 29, 2026",
    readTime: "7 min read",
  },
  {
    slug: "affordable-dental-care-charlottesville",
    title: "How to Get Affordable Dental Care in Charlottesville Without Insurance",
    excerpt:
      "Discover affordable dental care options in Charlottesville, including our Virginia Dental Club membership plan, financing, and preventive cost savings.",
    date: "March 29, 2026",
    readTime: "8 min read",
  },
  {
    slug: "choosing-dentist-charlottesville",
    title: "How to Choose the Right Dentist in Charlottesville for Your Family",
    excerpt:
      "Guide to selecting a family dentist in Charlottesville. Learn what to look for, questions to ask, and why location near UVA matters.",
    date: "March 29, 2026",
    readTime: "7 min read",
  },
  {
    slug: "dental-implants-vs-dentures",
    title: "Dental Implants vs. Dentures: Which Is Right for You?",
    excerpt:
      "Compare dental implants and dentures on comfort, cost, longevity, bone health, and maintenance. Find the best tooth replacement solution.",
    date: "March 29, 2026",
    readTime: "8 min read",
  },
];

export default function BlogIndexContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: articlesRef, inView: articlesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-navy text-cream py-16 md:py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 font-heading"
          >
            Dental Health Guide
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-cream/90 max-w-2xl"
          >
            Expert insights from Dr. Sowmya Karamcheti on dental implants,
            orthodontics, emergency care, and affordable dentistry in
            Charlottesville.
          </motion.p>
        </div>
      </motion.section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={articlesRef}
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-gradient-to-br from-sage/30 to-gold/20 flex items-center justify-center border-b-4 border-gold">
                  <div className="text-center px-4">
                    <div className="text-5xl font-bold text-gold/40 font-heading">
                      {index + 1}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-navy/60 mb-3">
                    <span>{article.date}</span>
                    <span className="text-gold">•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold font-heading text-navy mb-3 leading-snug hover:text-gold transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-navy/70 mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center font-semibold text-gold hover:text-gold/80 transition-colors"
                  >
                    Read Article
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-navy text-cream py-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heading">
            Ready for Your Best Smile?
          </h2>
          <p className="text-lg text-cream/90 mb-8">
            Schedule a consultation with Dr. Karamcheti and discover personalized
            dental care in Charlottesville.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
          >
            Schedule an Appointment
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
