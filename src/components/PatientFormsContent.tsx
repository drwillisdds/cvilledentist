"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CTASection from "@/components/CTASection";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
  },
};

const easeValue = [0, 0, 0.2, 1] as const;

export default function PatientFormsContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: formsRef, inView: formsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: whatToRef, inView: whatToInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: firstVisitRef, inView: firstVisitInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: parkingRef, inView: parkingInView } = useInView({
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
            New Patient Forms
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Get ahead of your first appointment by downloading and completing your forms online. We'll have everything we need when you arrive.
          </motion.p>
        </div>
      </section>

      {/* Patient Forms Section */}
      <section
        ref={formsRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            Download Forms
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12"
          >
            Print, fill out, and bring these forms to your appointment. You can also fill them out digitally and email them to us before your visit.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col"
            >
              <h3 className="heading-sm text-navy mb-3">Patient History Form</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Basic information about you, your medical history, current medications, and any allergies. Helps us understand your overall health.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-fit"
              >
                Download PDF
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.15, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col"
            >
              <h3 className="heading-sm text-navy mb-3">Insurance Information</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Bring your insurance card or fill out this form with your coverage details. Helps us verify benefits and process claims.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-fit"
              >
                Download PDF
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col"
            >
              <h3 className="heading-sm text-navy mb-3">HIPAA Privacy Notice</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Our privacy and confidentiality practices. Required by federal law. We keep your health information protected.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-fit"
              >
                Download PDF
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200 flex flex-col"
            >
              <h3 className="heading-sm text-navy mb-3">Emergency Contact Form</h3>
              <p className="text-gray-700 mb-6 flex-grow">
                Emergency contact information and authorized treatment preferences. Helps us reach you or an emergency contact if needed.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-fit"
              >
                Download PDF
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={formsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeValue }}
            className="bg-gold bg-opacity-10 border border-gold border-opacity-30 rounded-lg p-8"
          >
            <h3 className="heading-sm text-navy mb-3">Can't Print at Home?</h3>
            <p className="text-gray-700">
              No problem. Arrive 10-15 minutes early on your appointment day and we'll have paper forms ready for you to complete in our waiting area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section
        ref={whatToRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={whatToInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            What to Bring to Your Appointment
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={whatToInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: easeValue }}
            >
              <h3 className="heading-sm text-navy mb-6">Required Items</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Photo ID</p>
                    <p className="text-sm text-gray-600">Driver's license or passport</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Insurance Card</p>
                    <p className="text-sm text-gray-600">Front and back photos or physical card</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Completed Forms</p>
                    <p className="text-sm text-gray-600">Patient history, insurance info</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={whatToInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: easeValue }}
            >
              <h3 className="heading-sm text-navy mb-6">Helpful to Have</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Previous X-rays</p>
                    <p className="text-sm text-gray-600">From your last dentist if available</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">List of Medications</p>
                    <p className="text-sm text-gray-600">Helps us understand your health context</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-sage flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">FSA/HSA Card</p>
                    <p className="text-sm text-gray-600">If you use these for healthcare</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* First Visit Section */}
      <section
        ref={firstVisitRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={firstVisitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            What to Expect at Your First Visit
          </motion.h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={firstVisitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-gold flex-shrink-0">1</span>
                <div>
                  <h3 className="heading-sm text-navy mb-2">Welcome & Check-In</h3>
                  <p className="text-gray-700">
                    Arrive 10-15 minutes early. Our team will welcome you, confirm your insurance information, and have you review HIPAA forms.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={firstVisitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.15, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-gold flex-shrink-0">2</span>
                <div>
                  <h3 className="heading-sm text-navy mb-2">Hygiene Appointment</h3>
                  <p className="text-gray-700">
                    Our hygienist will take X-rays, conduct a thorough cleaning, and assess your overall oral health. This takes about 45 minutes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={firstVisitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-gold flex-shrink-0">3</span>
                <div>
                  <h3 className="heading-sm text-navy mb-2">Doctor Exam with Dr. Karamcheti</h3>
                  <p className="text-gray-700">
                    Dr. Karamcheti will review your X-rays, examine your teeth and gums, discuss any concerns, and create a treatment plan if needed.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={firstVisitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.25, ease: easeValue }}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-gold flex-shrink-0">4</span>
                <div>
                  <h3 className="heading-sm text-navy mb-2">Treatment Discussion & Scheduling</h3>
                  <p className="text-gray-700">
                    We'll explain any findings, discuss treatment options, explain costs, and help you schedule future appointments if needed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={firstVisitInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeValue }}
            className="mt-12 bg-sage bg-opacity-10 border border-sage border-opacity-30 rounded-lg p-8"
          >
            <p className="text-gray-700 text-center text-lg">
              Your first visit typically takes 60-90 minutes. We take our time to get to know you and assess your dental health thoroughly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Parking & Directions */}
      <section
        ref={parkingRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={parkingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-md text-navy text-center mb-12"
          >
            Parking & Directions
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={parkingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: easeValue }}
              className="bg-cream rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">Our Location</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-navy">Willis & Associates Family Dentistry</span>
                  <br />
                  2375 Commonwealth Dr # A
                  <br />
                  Charlottesville, VA 22901
                </p>
                <p>
                  <span className="font-semibold text-navy">Phone:</span>
                  <br />
                  (434) 973-5873
                </p>
                <p>
                  <span className="font-semibold text-navy">Hours:</span>
                  <br />
                  Monday – Thursday: 8:00 AM – 5:00 PM
                  <br />
                  Friday – Sunday: Closed
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={parkingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: easeValue }}
              className="bg-cream rounded-lg p-8 border border-gray-200"
            >
              <h3 className="heading-sm text-navy mb-4">Parking</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Free parking available in front and rear lots</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Accessible entry with ramp available</span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Handicap accessible spaces available</span>
                </li>
              </ul>
              <div className="mt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://maps.google.com/maps?q=2375+Commonwealth+Dr+A+Charlottesville+VA+22901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm"
                >
                  Get Directions
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        variant="navy"
        headline="Ready to Get Started?"
        subheadline="Download your forms and schedule your first appointment today."
        buttonText="Schedule Now"
        buttonLink="/contact"
      />
    </>
  );
}
