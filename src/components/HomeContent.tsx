"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Calendar,
  Wrench,
  Shield,
  UserPlus,
  Star,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import CTASection from "./CTASection";
import ImagePlaceholder from "./ImagePlaceholder";

// Hero Section
function HeroSection() {
  const titleWords = [
    "Finally,",
    "a",
    "Charlottesville",
    "Dentist",
    "Who",
    "Makes",
    "It",
    "Easy",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="min-h-screen bg-navy text-white flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            {/* Word-by-word animated headline */}
            <motion.h1
              className="heading-xl text-white leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleWords.map((word, index) => (
                <motion.span key={index} variants={wordVariants}>
                  {word}{" "}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline fade-in */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-xl text-white text-opacity-90 leading-relaxed max-w-lg"
            >
              Same-day appointments. In-house implants. A doctor who actually
              listens.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="bg-gold text-navy px-8 py-4 font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 text-center"
              >
                Book Your Appointment
              </Link>
              <a
                href="tel:(434)973-5873"
                className="border-2 border-gold text-gold px-8 py-4 font-semibold rounded-full hover:bg-gold hover:text-navy transition-all transform hover:scale-105 text-center"
              >
                Call (434) 973-5873
              </a>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <ImagePlaceholder
              aspectRatio="3/4"
              label="Dr. Sowmya Karamcheti, DDS, MHA"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Direct Answer Block — GEO Optimization
function DirectAnswerBlock() {
  return (
    <section className="bg-[#f5f0eb] border-l-4 border-[#c9a84c] py-8 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider mb-2">Quick Answer</p>
        <p className="text-lg md:text-xl text-[#1a2332] font-medium leading-relaxed">
          Willis & Associates Family Dentistry, led by Dr. Sowmya Karamcheti (DDS, MHA), offers same-day appointments, in-house dental implants, Invisalign, and emergency care at 2375 Commonwealth Dr in Charlottesville. No referrals needed. New patients welcome — including those without insurance through the Virginia Dental Club.
        </p>
      </div>
    </section>
  );
}

// Trust Bar
function TrustBar() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trustItems = [
    { icon: Calendar, text: "Same-Day Appointments" },
    { icon: Wrench, text: "In-House Implants" },
    { icon: Shield, text: "No Insurance? No Problem" },
    { icon: UserPlus, text: "Accepting New Patients" },
  ];

  return (
    <section
      ref={ref}
      className="bg-cream border-t border-b border-navy border-opacity-10 py-12 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <IconComponent className="text-sage flex-shrink-0" size={32} />
                <span className="font-semibold text-navy text-lg">
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// About Dr. Karamcheti
function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <ImagePlaceholder
              aspectRatio="4/5"
              label="Dr. Karamcheti in her Charlottesville office"
            />
          </motion.div>

          {/* Text right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="heading-lg text-navy">
              Meet Dr. Sowmya Karamcheti
            </h2>

            <div className="space-y-4 text-navy text-opacity-80 leading-relaxed">
              <p>
                She holds both a DDS and an MHA—a rare combination that means
                she brings clinical precision and operational excellence to
                every patient visit. Her Charlottesville patients describe her
                as warm, thorough, and genuinely interested in their comfort.
              </p>
              <p>
                Dr. Karamcheti places and restores dental implants in-house,
                handles Invisalign cases from start to finish, and takes the
                time to explain every step before she begins. Whether you've
                avoided the dentist for years or you're looking for someone who
                respects your time, Dr. Karamcheti and her team make every
                visit feel different.
              </p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:text-opacity-80 transition-colors text-lg pt-2"
            >
              Read Dr. Karamcheti's Full Bio →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Grid
function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const services = [
    {
      title: "Dental Implants",
      description: "In-house placement and restoration. No referrals.",
      link: "/dental-implants-charlottesville",
      icon: Wrench,
    },
    {
      title: "Invisalign",
      description: "Clear aligners for adults and teens. Free smile assessment.",
      link: "/invisalign-charlottesville",
      icon: Shield,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, bonding, whitening—natural results.",
      link: "/cosmetic-dentistry-charlottesville",
      icon: Star,
    },
    {
      title: "Emergency Dentistry",
      description: "Same-day emergency appointments. Call now.",
      link: "/emergency-dentist-charlottesville",
      icon: AlertCircle,
    },
    {
      title: "General Dentistry",
      description:
        "Cleanings, exams, crowns, fillings—complete family care.",
      link: "/general-dentistry-charlottesville",
      icon: Calendar,
    },
    {
      title: "Virginia Dental Club",
      description:
        "No insurance? Our membership plan covers you.",
      link: "/virginia-dental-club",
      icon: UserPlus,
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg text-navy">
            Your Charlottesville Dental Team — One Practice, Every Service
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <div className="h-full bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-102 transition-all border-t-4 border-gold p-8 cursor-pointer">
                    <IconComponent className="text-gold mb-4" size={32} />
                    <h3 className="heading-sm text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-navy text-opacity-70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Add the missing import
import { AlertCircle } from "lucide-react";

// Virginia Dental Club Callout
function VirginiaClubSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-navy text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="heading-lg text-white"
        >
          No Insurance? We've Got You Covered.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-white text-opacity-90 max-w-2xl mx-auto leading-relaxed"
        >
          The Virginia Dental Club is our in-house membership plan for patients
          without insurance. It covers cleanings, exams, X-rays, and gives you
          discounts on every treatment—no claims, no waiting periods, no hassle.
          Designed for self-employed professionals, families between jobs, and
          anyone who wants affordable dental care in Charlottesville without the
          insurance runaround.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/virginia-dental-club"
            className="inline-block bg-gold text-navy px-8 py-4 font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Learn About the Virginia Dental Club
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Reviews Section
function ReviewsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const reviews = [
    {
      text: "I put off going to the dentist for almost three years. Dr. Karamcheti made me feel completely at ease from the first minute. No judgment, just genuine care. I'm never going anywhere else.",
      author: "Sarah M.",
      location: "Charlottesville",
    },
    {
      text: "Got my dental implant placed and restored in the same office—no oral surgeon referral, no extra appointments across town. The whole process took half the time I expected.",
      author: "David R.",
      location: "Albemarle County",
    },
    {
      text: "The Virginia Dental Club saved me hundreds of dollars. I don't have insurance through my employer, and this membership plan covers everything I need. Best dental decision I've made.",
      author: "Jennifer L.",
      location: "Charlottesville",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg text-navy">
            What Our Charlottesville Patients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-8 space-y-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-gold" size={20} />
                ))}
              </div>

              <p className="text-navy text-opacity-80 leading-relaxed italic">
                "{review.text}"
              </p>

              <div className="pt-2">
                <p className="font-semibold text-navy">
                  {review.author}
                </p>
                <p className="text-navy text-opacity-60 text-sm">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Location + Hours Section
function LocationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="heading-sm text-navy mb-6">
                Willis & Associates Family Dentistry
              </h3>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-navy mb-1">Address</p>
                <p className="text-navy text-opacity-70">
                  2375 Commonwealth Dr # A
                  <br />
                  Charlottesville, VA 22901
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-navy mb-1">Phone</p>
                <a
                  href="tel:(434)973-5873"
                  className="text-gold hover:text-opacity-80 transition-colors font-semibold"
                >
                  (434) 973-5873
                </a>
                <p className="text-navy text-opacity-60 text-sm mt-1">
                  Emergency: 434-922-0340
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="text-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-navy mb-1">Email</p>
                <a
                  href="mailto:info@cvilledentist.com"
                  className="text-gold hover:text-opacity-80 transition-colors font-semibold"
                >
                  info@cvilledentist.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="font-semibold text-navy mb-3">Hours</p>
              <table className="w-full text-navy text-opacity-70 text-sm">
                <tbody>
                  <tr>
                    <td className="py-1">Monday – Thursday</td>
                    <td className="text-right">8:00 AM – 5:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-1">Friday – Sunday</td>
                    <td className="text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
          >
            <ImagePlaceholder
              aspectRatio="4/3"
              label="Google Maps Embed — 2375 Commonwealth Dr # A, Charlottesville, VA 22901"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main HomeContent Component
export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <DirectAnswerBlock />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <VirginiaClubSection />
      <ReviewsSection />
      <LocationSection />
      <CTASection
        headline="New Patients Welcome. Same-Day Appointments Available."
        subheadline="Experience the difference at Charlottesville's most patient-focused dental practice."
        buttonText="Book Your Appointment"
        buttonLink="/contact"
        variant="gold"
      />
    </>
  );
}
