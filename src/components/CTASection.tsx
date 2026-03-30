"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: "gold" | "navy";
}

export default function CTASection({
  headline = "Ready to Schedule Your Visit?",
  subheadline = "New patients are always welcome at Cville Dentist in Charlottesville.",
  buttonText = "Book Appointment",
  buttonLink = "/contact",
  variant = "navy",
}: CTASectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isGold = variant === "gold";

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 ${
        isGold ? "bg-gold" : "bg-navy"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`heading-lg mb-4 ${
              isGold ? "text-navy" : "text-white"
            }`}
          >
            {headline}
          </h2>
        </motion.div>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-lg mb-8 ${
              isGold ? "text-navy text-opacity-80" : "text-white text-opacity-90"
            }`}
          >
            {subheadline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <Link
            href={buttonLink}
            className={`px-8 py-3 font-semibold rounded-full transition-all transform hover:scale-105 ${
              isGold
                ? "bg-navy text-white hover:bg-opacity-90"
                : "bg-gold text-navy hover:bg-opacity-90"
            }`}
          >
            {buttonText}
          </Link>

          <a
            href="tel:(434)973-5873"
            className={`text-lg font-semibold ${
              isGold
                ? "text-navy hover:text-opacity-70"
                : "text-gold hover:text-opacity-70"
            } transition-opacity`}
          >
            Call (434) 973-5873
          </a>
        </motion.div>
      </div>
    </section>
  );
}
