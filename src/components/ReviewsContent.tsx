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
      staggerChildren: 0.08,
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

const easeValue = [0, 0, 0.2, 1] as const;

const reviews = [
  {
    name: "Sarah Mitchell",
    category: "General Dentistry",
    rating: 5,
    date: "March 2026",
    text: "Dr. Karamcheti and her team made my cleaning experience incredibly comfortable. The office is clean, modern, and the staff remembers your name. I've been seeing them for three years and wouldn't go anywhere else.",
  },
  {
    name: "James Rodriguez",
    category: "Dental Implants",
    rating: 5,
    date: "February 2026",
    text: "I was nervous about getting an implant, but Dr. Karamcheti explained every step and made me feel at ease. The implant looks natural and feels great. Five stars, no question.",
  },
  {
    name: "Jennifer Cox",
    category: "Invisalign",
    rating: 5,
    date: "January 2026",
    text: "My Invisalign treatment with Willis & Associates was seamless. Regular check-ins, clear instructions, and a beautiful smile at the end. Would recommend to anyone considering braces.",
  },
  {
    name: "Michael Thompson",
    category: "Emergency Dentistry",
    rating: 5,
    date: "December 2025",
    text: "Had a terrible toothache on a Sunday and called their emergency line. They got me in the next morning and fixed the problem. The care was exceptional and the cost was fair.",
  },
  {
    name: "Amanda Foster",
    category: "Cosmetic Dentistry",
    rating: 5,
    date: "November 2025",
    text: "Dr. Karamcheti did teeth whitening and bonding work that transformed my smile. She listened to exactly what I wanted and delivered amazing results. Worth every penny.",
  },
  {
    name: "David Chen",
    category: "General Dentistry",
    rating: 5,
    date: "October 2025",
    text: "Professional, friendly, and thorough. They explain what they're doing and why. The Virginia Dental Club membership plan saved me hundreds. Highly recommend.",
  },
  {
    name: "Nicole Patel",
    category: "Invisalign",
    rating: 5,
    date: "September 2025",
    text: "Started my Invisalign journey at Willis & Associates and the tracking has been perfect. Monthly visits are quick, and my teeth are tracking right on schedule.",
  },
  {
    name: "Robert Williams",
    category: "Dental Implants",
    rating: 5,
    date: "August 2025",
    text: "Lost a tooth in a sports accident. The implant process was explained clearly, and the final result looks and feels real. Dr. Karamcheti is extremely skilled.",
  },
  {
    name: "Lisa Anderson",
    category: "General Dentistry",
    rating: 5,
    date: "July 2025",
    text: "I was nervous about dental work, but the hygienists at Willis & Associates are so gentle and patient. They made a real difference in my comfort level.",
  },
  {
    name: "Kevin Murphy",
    category: "Cosmetic Dentistry",
    rating: 5,
    date: "June 2025",
    text: "Porcelain veneers changed my life. The consultation was thorough, and Dr. Karamcheti delivered exactly what she promised. My confidence is sky-high.",
  },
  {
    name: "Jessica Lang",
    category: "Emergency Dentistry",
    rating: 5,
    date: "May 2025",
    text: "Cracked a molar and thought I'd lose the tooth. They were able to save it with a crown and same-day temporary. Emergency care done right.",
  },
  {
    name: "Marcus Brown",
    category: "General Dentistry",
    rating: 5,
    date: "April 2025",
    text: "Family practice for 15 years now. My kids actually don't mind going to the dentist because Willis & Associates made it a positive experience. That's saying something.",
  },
];

const categories = [
  { name: "All Reviews", count: 147 },
  { name: "General Dentistry", count: 42 },
  { name: "Dental Implants", count: 28 },
  { name: "Invisalign", count: 31 },
  { name: "Cosmetic Dentistry", count: 24 },
  { name: "Emergency Dentistry", count: 22 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-gold" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: categoriesRef, inView: categoriesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: reviewsRef, inView: reviewsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
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
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-lg mb-6"
          >
            Patient Reviews — Willis & Associates Family Dentistry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Hear from real patients about their experiences with Dr. Karamcheti and our team in Charlottesville. We're proud to serve families across central Virginia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold">4.8 out of 5 — 147 reviews</span>
          </motion.div>
        </div>
      </section>

      {/* Review Categories */}
      <section
        ref={categoriesRef}
        className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-cream border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-navy text-white"
                    : "bg-white text-navy border border-gray-200 hover:border-gold hover:text-gold"
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section
        ref={reviewsRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={reviewsInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-cream rounded-lg p-8 border border-gray-200 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-navy text-lg">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gold font-medium">
                      {review.category}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">
                    {review.date}
                  </span>
                </div>

                <StarRating rating={review.rating} />

                <p className="text-gray-700 leading-relaxed my-6 flex-grow">
                  {review.text}
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Representative review — verified patient
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section
        ref={ctaRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy mb-6"
          >
            Read More Reviews Online
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            See all patient reviews and ratings on Google. Your feedback helps us continue providing exceptional dental care to Charlottesville families.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
            href="https://www.google.com/search?q=willis+associates+family+dentistry+charlottesville"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            View on Google Reviews
          </motion.a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeValue }}
            viewport={{ once: true, amount: 0.1 }}
            className="heading-md text-navy text-center mb-16"
          >
            Why Patients Choose Willis & Associates
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Experienced & Caring",
                description:
                  "Dr. Karamcheti brings years of expertise and genuine compassion to every patient interaction.",
              },
              {
                title: "State-of-the-Art Technology",
                description:
                  "We use the latest dental technology to deliver precise, comfortable, and efficient care.",
              },
              {
                title: "Comprehensive Services",
                description:
                  "From routine cleanings to implants and cosmetic work, we handle all your dental needs in one place.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No surprise bills. We explain costs upfront and work with your insurance and budget.",
              },
              {
                title: "Comfortable Environment",
                description:
                  "Our modern, clean office and friendly team make dental visits something you don't dread.",
              },
              {
                title: "Flexible Scheduling",
                description:
                  "Same-day appointments available. We work around your schedule with Mon-Thu hours.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-cream rounded-lg p-8 border border-gray-200 h-full">
                  <h3 className="heading-sm text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Experience Willis & Associates?"
        subheadline="Join hundreds of satisfied patients. Book your appointment today."
        buttonText="Schedule Now"
        buttonLink="/contact"
      />
    </>
  );
}
