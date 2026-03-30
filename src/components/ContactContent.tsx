"use client";

import Link from "next/link";
import { useState } from "react";
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
    transition: { duration: 0.6 },
  },
};

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: quickLinksRef, inView: quickLinksInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder form handler - real handler to be added
    if (formData.name && formData.email && formData.message) {
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
      alert(`Thank you for your message! We'll contact you soon.\n\nName: ${formData.name}\nEmail: ${formData.email}`);
    } else {
      setSubmitStatus("error");
      alert("Please fill in all required fields.");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

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
            Contact Cville Dentist — Charlottesville
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-white text-opacity-90 max-w-2xl mx-auto"
          >
            Have a question? Ready to book? We're here. Call, email, or fill out
            the form below — our Charlottesville team responds fast.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form Layout */}
      <section
        ref={contactRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={
                contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-navy mb-8">Contact Information</h2>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:(434)973-5873"
                      className="text-lg text-gray-700 hover:text-gold transition-colors"
                    >
                      (434) 973-5873
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Emergency Line */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4v2m0 4v2M6.25 3h11.5A2.25 2.25 0 0120 5.25v13.5A2.25 2.25 0 0117.75 21H6.25A2.25 2.25 0 014 18.75V5.25A2.25 2.25 0 016.25 3z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">
                      Emergency Line
                    </h3>
                    <a
                      href="tel:(434)922-0340"
                      className="text-lg text-gray-700 hover:text-gold transition-colors"
                    >
                      (434) 922-0340
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:info@cvilledentist.com"
                      className="text-lg text-gray-700 hover:text-gold transition-colors"
                    >
                      info@cvilledentist.com
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-gold mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy mb-1">
                      Address
                    </h3>
                    <p className="text-lg text-gray-700">
                      2375 Commonwealth Dr # A
                      <br />
                      Charlottesville, VA 22901
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
              >
                <h3 className="text-lg font-semibold text-navy mb-4">
                  Office Hours
                </h3>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <table className="w-full">
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100 last:border-b-0">
                        <td className="py-2 font-medium">Monday</td>
                        <td className="py-2 text-right">8:00 AM – 5:00 PM</td>
                      </tr>
                      <tr className="border-b border-gray-100 last:border-b-0">
                        <td className="py-2 font-medium">Tuesday</td>
                        <td className="py-2 text-right">8:00 AM – 5:00 PM</td>
                      </tr>
                      <tr className="border-b border-gray-100 last:border-b-0">
                        <td className="py-2 font-medium">Wednesday</td>
                        <td className="py-2 text-right">8:00 AM – 5:00 PM</td>
                      </tr>
                      <tr className="border-b border-gray-100 last:border-b-0">
                        <td className="py-2 font-medium">Thursday</td>
                        <td className="py-2 text-right">8:00 AM – 5:00 PM</td>
                      </tr>
                      <tr className="border-b border-gray-100 last:border-b-0">
                        <td className="py-2 font-medium">Friday</td>
                        <td className="py-2 text-right text-gray-500">Closed</td>
                      </tr>
                      <tr className="border-b border-gray-100 last:border-b-0">
                        <td className="py-2 font-medium">Saturday</td>
                        <td className="py-2 text-right text-gray-500">Closed</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Sunday</td>
                        <td className="py-2 text-right text-gray-500">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={
                contactInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-navy mb-8">Send Us a Message</h2>

              <form
                onSubmit={handleFormSubmit}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                {/* Name */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  className="mb-6"
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  className="mb-6"
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Phone
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="(434) 555-0000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  className="mb-6"
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    required
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  className="mb-8"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us what you'd like to discuss..."
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={`w-full py-3 px-6 font-semibold rounded-lg transition-all ${
                      submitStatus === "success"
                        ? "bg-sage text-white"
                        : submitStatus === "error"
                          ? "bg-red-500 text-white"
                          : "bg-gold text-navy hover:bg-opacity-90"
                    }`}
                  >
                    {submitStatus === "success"
                      ? "Message Sent ✓"
                      : submitStatus === "error"
                        ? "Please Try Again"
                        : "Send Message"}
                  </motion.button>
                </motion.div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  Fields marked with * are required
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        ref={mapRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Google Maps Embed */}
            <div className="w-full rounded-lg overflow-hidden mb-8 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.5!2d-78.5!3d38.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b3862d2c5ee3a5%3A0x1234!2s2375+Commonwealth+Dr+%23+A%2C+Charlottesville%2C+VA+22901!5e0!3m2!1sen!2sus!4v1711234567890!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Office Photo */}
            <div className="mb-8">
              <img
                src={images.facility1}
                alt="Cville Dentist office exterior in Charlottesville, Virginia at 2375 Commonwealth Drive"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Map Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={mapInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-gray-700 text-lg leading-relaxed"
            >
              Located on Commonwealth Drive in Charlottesville — easy access from
              downtown, UVA, and the Route 29 corridor. Free parking available.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section
        ref={quickLinksRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={quickLinksInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="heading-lg text-navy text-center mb-16"
          >
            Common Next Steps
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={quickLinksInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "New Patient?",
                description:
                  "Start here for everything you need for your first visit.",
                link: "/new-patients",
                linkText: "Learn More",
              },
              {
                title: "Need an Emergency Appointment?",
                description:
                  "Same-day appointments available. Call now.",
                link: "/emergency-dentist-charlottesville",
                linkText: "Emergency Info",
              },
              {
                title: "No Insurance?",
                description:
                  "Learn about the Virginia Dental Club membership plan.",
                link: "/virginia-dental-club",
                linkText: "View Plans",
              },
            ].map((card, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={card.link}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                    className="h-full bg-white rounded-lg p-8 border border-gray-200 cursor-pointer transition-all hover:border-gold"
                  >
                    <h3 className="heading-sm text-navy mb-3">{card.title}</h3>
                    <p className="text-gray-700 mb-6 flex-grow">
                      {card.description}
                    </p>
                    <span className="inline-block text-gold font-semibold hover:text-gold hover:translate-x-1 transition-transform">
                      {card.linkText} →
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        variant="navy"
        headline="We're Accepting New Patients"
        subheadline="Same-day appointments available. Your Charlottesville dental team is ready."
        buttonText="Book Your Appointment"
        buttonLink="/contact"
      />
    </>
  );
}
