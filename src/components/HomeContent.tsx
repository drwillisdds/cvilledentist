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
import { images } from "@/lib/images";
import CTASection from "./CTASection";
import GoogleReviews from "./GoogleReviews";

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
    <section
      className="min-h-screen bg-navy text-white flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-navy bg-opacity-60"></div>
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
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

            {/* CTA buttons + Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-4 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gold text-navy px-8 py-4 font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 text-center"
                >
                  Book Your Appointment
                </Link>
                <a
                  href="tel:(434)973-5873"
                  className="border-2 border-gold text-gold px-8 py-4 font-semibold rounded-full hover:bg-gold hover:text-navy transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call (434) 973-5873
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <img
              src={images.drKaramcheti}
              alt="Dr. Sowmya Karamcheti, DDS, MHA - Charlottesville Dentist"
              className="w-full h-auto rounded-lg shadow-2xl"
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
          Cville Dentist, led by Dr. Sowmya Karamcheti (DDS, MHA), offers same-day appointments, in-house dental implants, Invisalign, and emergency care at 2375 Commonwealth Dr in Charlottesville. No referrals needed. New patients welcome — including those without insurance through the Virginia Dental Club.
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
            <img
              src={images.drKaramcheti}
              alt="Dr. Sowmya Karamcheti in her Charlottesville dental office"
              className="w-full h-auto rounded-lg shadow-lg"
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
      image: images.womanSmiling,
    },
    {
      title: "Invisalign",
      description: "Clear aligners for adults and teens. Free smile assessment.",
      link: "/invisalign-charlottesville",
      image: images.invisalignService,
    },
    {
      title: "Cosmetic Dentistry",
      description: "Veneers, bonding, whitening—natural results.",
      link: "/cosmetic-dentistry-charlottesville",
      image: images.cosmeticService,
    },
    {
      title: "Emergency Dentistry",
      description: "Same-day emergency appointments. Call now.",
      link: "/emergency-dentist-charlottesville",
      image: images.emergencyService,
    },
    {
      title: "General Dentistry",
      description:
        "Cleanings, exams, crowns, fillings—complete family care.",
      link: "/general-dentistry-charlottesville",
      image: images.familyService,
    },
    {
      title: "Virginia Dental Club",
      description:
        "No insurance? Our membership plan covers you.",
      link: "/virginia-dental-club",
      image: images.insuranceService,
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <div className="h-full bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-102 transition-all border-t-4 border-gold overflow-hidden cursor-pointer">
                  <img
                    src={service.image}
                    alt={`${service.title} in Charlottesville`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="heading-sm text-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-navy text-opacity-70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Office Tour Section
function OfficeTourSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const officePhotos = [
    {
      image: images.officeInterior1,
      alt: "Cville Dentist waiting room in Charlottesville",
    },
    {
      image: images.officeInterior2,
      alt: "Dental treatment room at Cville Dentist Charlottesville",
    },
    {
      image: images.officeInterior3,
      alt: "Modern dental office interior in Charlottesville",
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg text-navy">
            Our Charlottesville Office
          </h2>
          <p className="text-navy text-opacity-70 mt-4 max-w-2xl mx-auto">
            A clean, comfortable, modern space designed for patient comfort and clinical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officePhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={photo.image}
                alt={photo.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Trust Badges Section
function TrustBadgesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const badges = [
    { image: images.googleReview, alt: "Google Reviews logo" },
    { image: images.healthgrades, alt: "Healthgrades logo" },
    { image: images.invisalignLogo, alt: "Invisalign certified provider" },
    { image: images.iteroLogo, alt: "iTero digital scanner logo" },
    { image: images.agdLogo, alt: "Academy of General Dentistry logo" },
    { image: images.adaLogo, alt: "American Dental Association logo" },
  ];

  return (
    <section
      ref={ref}
      className="py-12 md:py-16 bg-navy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {badges.map((badge, index) => (
            <motion.img
              key={index}
              src={badge.image}
              alt={badge.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="h-12 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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
                Cville Dentist
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

          {/* Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.5!2d-78.5!3d38.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3862d2c5ee3a5%3A0x1234!2s2375+Commonwealth+Dr+%23+A%2C+Charlottesville%2C+VA+22901!5e0!3m2!1sen!2sus!4v1711234567890!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
      <OfficeTourSection />
      <TrustBadgesSection />
      <VirginiaClubSection />
      <GoogleReviews />
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
