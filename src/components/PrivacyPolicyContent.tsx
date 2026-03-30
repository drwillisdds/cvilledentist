"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const easeValue = [0, 0, 0.2, 1] as const;

export default function PrivacyPolicyContent() {
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
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
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="heading-lg mb-4"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeValue }}
            className="text-xl text-white text-opacity-90"
          >
            Cville Dentist — Charlottesville, VA
            <br />
            Effective Date: March 2026
          </motion.p>
        </div>
      </section>

      {/* Policy Content */}
      <section
        ref={contentRef}
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
      >
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-gray-700">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeValue }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div>
              <h2 className="heading-sm text-navy mb-4">Introduction</h2>
              <p>
                Cville Dentist ("we," "us," "our," or "the Practice") is
                committed to protecting your privacy and ensuring you have a positive experience
                on our website and in our office. This Privacy Policy explains our information
                practices, how we collect and use your information, and your rights regarding
                your health information under the Health Insurance Portability and Accountability
                Act (HIPAA).
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">We collect information in various ways:</p>
              <div className="space-y-3 ml-4">
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Directly from You
                  </h3>
                  <p>
                    When you complete patient forms, make an appointment, or communicate with us,
                    we collect information including your name, contact information, medical and
                    dental history, insurance details, and emergency contacts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    During Treatment
                  </h3>
                  <p>
                    We create and maintain dental records including examination findings, X-rays,
                    treatment plans, billing records, and clinical notes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Through Our Website
                  </h3>
                  <p>
                    We may collect limited information about your use of our website, such as
                    pages visited, to improve our online services.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Providing dental treatment and services</li>
                <li>Maintaining your dental records</li>
                <li>Processing insurance claims and handling billing</li>
                <li>Communicating with you about appointments and treatment</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Improving our services and office operations</li>
                <li>Contacting you for appointment reminders (with your consent)</li>
              </ul>
            </div>

            {/* HIPAA Compliance */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                HIPAA Privacy Protection
              </h2>
              <p className="mb-4">
                Your dental health information is protected under HIPAA. We maintain strict
                confidentiality standards and limit access to your records to authorized personnel
                who need it for treatment or practice operations.
              </p>
              <p>
                We will not use or disclose your health information for any reason other than
                those listed in this policy or as permitted or required by law, without your
                written authorization.
              </p>
            </div>

            {/* Information Disclosure */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                When We May Disclose Your Information
              </h2>
              <p className="mb-4">
                We may disclose your health information in the following situations:
              </p>
              <div className="space-y-3 ml-4">
                <div>
                  <h3 className="font-semibold text-navy mb-1">Treatment</h3>
                  <p>
                    To healthcare providers involved in your care and treatment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Payment & Insurance
                  </h3>
                  <p>
                    To your insurance company to process claims and verify coverage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Legal Requirements
                  </h3>
                  <p>
                    When required by law, court order, or for public health purposes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">
                    Business Operations
                  </h3>
                  <p>
                    To authorized staff members for appointment scheduling, billing, and practice
                    management.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                Data Security
              </h2>
              <p>
                We maintain physical, administrative, and electronic safeguards to protect your
                health information from unauthorized access, alteration, or destruction. All staff
                members are trained on confidentiality practices and HIPAA requirements. Access to
                patient records is limited to authorized personnel only.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                Your Privacy Rights
              </h2>
              <p className="mb-4">
                Under HIPAA and applicable state law, you have the right to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access and review your dental records</li>
                <li>Request amendments or corrections to your records</li>
                <li>Request restrictions on certain uses and disclosures</li>
                <li>Receive a copy of this Privacy Policy</li>
                <li>Receive an accounting of disclosures of your health information</li>
                <li>File a complaint with us or with the Department of Health and Human Services</li>
                <li>Request that we communicate with you in a certain manner or location</li>
              </ul>
            </div>

            {/* Requests for Records */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                Requesting Your Records
              </h2>
              <p>
                To request access to your dental records, file a complaint, or exercise any of
                your privacy rights, contact our Privacy Officer at (434) 973-5873 or
                info@cvilledentist.com. We will respond to your request within 30 days or as
                required by law. A reasonable copying fee may apply for records requests.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className="heading-sm text-navy mb-4">
                Changes to This Policy
              </h2>
              <p>
                We reserve the right to update this Privacy Policy at any time. Changes will be
                effective immediately upon posting to our website. We encourage you to review this
                policy periodically for updates.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="heading-sm text-navy mb-4">Contact Us</h2>
              <p className="mb-3">
                For questions about this Privacy Policy or to exercise your privacy rights:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Cville Dentist</span>
                  <br />
                  2375 Commonwealth Dr # A
                  <br />
                  Charlottesville, VA 22901
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> (434) 973-5873
                </p>
                <p>
                  <span className="font-semibold">Email:</span> info@cvilledentist.com
                </p>
                <p>
                  <span className="font-semibold">Privacy Officer:</span> Dr. Sowmya Karamcheti, DDS, MHA
                </p>
              </div>
            </div>

            {/* Compliance Notice */}
            <div className="bg-gold bg-opacity-10 border border-gold border-opacity-30 rounded-lg p-6">
              <h3 className="font-semibold text-navy mb-2">HIPAA Complaint Rights</h3>
              <p className="text-sm">
                You have the right to file a complaint with the Department of Health and Human
                Services, Office for Civil Rights, if you believe your privacy rights have been
                violated. You may file a complaint with us or with the U.S. Department of Health
                and Human Services without fear of retaliation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
