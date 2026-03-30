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

export default function BlogImplantsCostContent() {
  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: relatedRef, inView: relatedInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-cream min-h-screen">
      {/* Article Header */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-navy text-cream py-12 md:py-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 text-sm text-cream/80">
            <Link href="/blog" className="hover:text-gold transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span>Dental Implants Cost</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How Much Do Dental Implants Cost in Charlottesville, VA in 2026?
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-cream/80">
            <span>Dr. Sowmya Karamcheti, DDS, MHA</span>
            <span>March 29, 2026</span>
            <span>8 min read</span>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.article
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      >
        <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
          <p className="text-lg text-navy/80 leading-relaxed mb-6">
            Dental implants are one of the most significant investments in your
            oral health, but many patients in Charlottesville hesitate due to
            cost concerns. I understand—tooth replacement is a major decision.
            Let's break down exactly what you can expect to invest in a dental
            implant solution at Cville Dentist and explore
            how to make this transformative treatment affordable.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Single Tooth Implant Cost in Charlottesville
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            A single tooth implant at our Charlottesville practice typically
            ranges from $3,500 to $6,500. This cost includes three main
            components:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Implant placement:</strong> $1,500–$2,500 (surgical
              placement of the titanium post)
            </li>
            <li>
              <strong>Abutment:</strong> $500–$1,000 (the connector piece)
            </li>
            <li>
              <strong>Crown restoration:</strong> $1,500–$3,000 (custom-made to
              match your natural teeth)
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            The exact cost depends on bone density, gum health, and whether bone
            grafting is needed. In Charlottesville, where many patients need
            additional diagnostics due to varying bone quality, we perform
            comprehensive 3D imaging to give you an accurate quote before we
            begin.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Multiple Implants and All-on-4 Solutions
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            If you're missing multiple teeth, your cost per tooth actually
            decreases. Here's what to expect:
          </p>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Cost Breakdown:</p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Two teeth:</strong> $6,500–$11,000 (shared surgical time)
              </li>
              <li>
                <strong>Three to four teeth:</strong> $10,000–$18,000
              </li>
              <li>
                <strong>All-on-4 (full arch):</strong> $20,000–$35,000
              </li>
              <li>
                <strong>All-on-X (6 implants):</strong> $25,000–$40,000
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            Our All-on-4 and All-on-X solutions have changed lives for
            Charlottesville patients who suffered with loose dentures or avoided
            eating certain foods. These full-mouth solutions restore both
            function and confidence. While the upfront cost is significant, you're
            essentially replacing a decade or more of denture adjustments and
            adhesives with a permanent solution.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            What Factors Affect Your Implant Cost?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Several variables influence the final price of your implant treatment:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Bone grafting:</strong> If you have significant bone loss,
              a graft ($500–$3,000) may be necessary before implant placement
            </li>
            <li>
              <strong>Tooth extraction:</strong> If the tooth must be removed
              first, add $150–$400 per tooth
            </li>
            <li>
              <strong>Sinus lift:</strong> Upper jaw implants sometimes require
              this procedure ($1,500–$3,000)
            </li>
            <li>
              <strong>Material choice:</strong> Premium crown materials cost more
              than standard zirconia
            </li>
            <li>
              <strong>Complexity:</strong> Difficult cases or revision surgeries
              may increase costs
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Does Dental Insurance Cover Implants in Virginia?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Unfortunately, most traditional dental insurance plans classify
            implants as "cosmetic" and don't cover them. However, some plans
            cover 20–50% of the crown restoration portion. You should always:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              Contact your insurance provider with your plan details to verify
              coverage
            </li>
            <li>
              Request an estimated benefits letter from our office before
              treatment
            </li>
            <li>
              Ask if you have orthodontic or major restorative coverage that
              might apply
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            At Cville Dentist, we'll help you navigate your coverage and
            maximize any benefits available.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Virginia Dental Club: Your Savings Plan for Implants
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Don't have insurance? Our in-house Virginia Dental Club membership
            plan is designed specifically for this situation. For a low annual or
            monthly fee, VDC members receive:
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 my-6 rounded">
            <ul className="space-y-2 text-navy/80">
              <li>15–60% discounts on major procedures, including implants</li>
              <li>Implant placement typically reduced to $1,000–$1,500</li>
              <li>Crown restoration savings of 30–40%</li>
              <li>Free emergency exams and cleanings</li>
              <li>No waiting periods—savings start immediately</li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            For a patient needing a single implant ($4,000 average), VDC
            membership could save $1,000–$2,000. For All-on-4, savings often
            exceed $5,000–$10,000. Many patients pay for their membership fee
            within a single major procedure.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Financing Options for Dental Implants
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            We understand implant treatment is a significant investment. We offer
            flexible financing to make treatment accessible:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Payment plans:</strong> Spread costs over 6–24 months with
              no interest for qualified patients
            </li>
            <li>
              <strong>CareCredit:</strong> Special financing with 0% APR for 6–18
              months
            </li>
            <li>
              <strong>Monthly installments:</strong> Work directly with our
              billing team to create a plan that fits your budget
            </li>
            <li>
              <strong>Discount for upfront payment:</strong> Ask about our cash
              discount for procedures paid in full
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            The Real Cost of Delaying Implants
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Here's something many patients don't consider: every year you delay
            implant treatment, the true cost actually increases. Here's why:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Bone loss continues.</strong> After tooth loss, your jawbone
              resorbs about 0.5–1 mm per year. Advanced bone loss means more
              expensive grafting.
            </li>
            <li>
              <strong>Adjacent teeth shift.</strong> Missing teeth allow
              neighboring teeth to move, potentially requiring orthodontics before
              implant placement.
            </li>
            <li>
              <strong>Denture adjustments add up.</strong> If you're using a
              partial or full denture, annual adjustments, repairs, and
              replacements cost $300–$1,500 yearly.
            </li>
            <li>
              <strong>Cosmetic impact.</strong> Bone loss changes your facial
              structure and smile appearance, sometimes requiring cosmetic
              restoration alongside implants.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            In other words, waiting 5 years could cost you $2,500–$7,500 in
            additional procedures compared to treating now.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Your Investment in Lifelong Oral Health
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            At Cville Dentist, I view implants not as a luxury expense but
            as an investment in your health, function, and quality of life. A
            well-maintained implant can last 20+ years—essentially a lifetime.
            Compare that to:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Dentures:</strong> Replaced every 5–10 years, costing
              $2,000–$8,000 per replacement
            </li>
            <li>
              <strong>Bridges:</strong> Last 10–15 years, require replacement
              ($3,000–$10,000)
            </li>
            <li>
              <strong>Continued bone loss:</strong> Without a tooth root, your
              jaw continues degenerating, creating future complications
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            An implant preserves bone, maintains your facial structure, and
            eliminates the annual maintenance costs of removable prosthetics.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            How to Get an Accurate Cost Estimate
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Every mouth is different. The only way to know your exact cost is
            through a consultation with 3D imaging. Here's what we do:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-navy/80 mb-6">
            <li>Comprehensive examination of your teeth, gums, and jawbone</li>
            <li>
              CBCT (cone beam CT) scan to assess bone volume and density
            </li>
            <li>
              Discussion of your goals and which implant solution suits you best
            </li>
            <li>Detailed itemized quote showing every component</li>
            <li>
              Review of financing, insurance, and Virginia Dental Club savings
            </li>
          </ol>
          <p className="text-navy/80 leading-relaxed mb-6">
            We'll never pressure you. You'll have all the information needed to
            make an informed decision.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Why Choose Cville Dentist for Implants?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Our practice offers several advantages that can affect cost-effectiveness:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>In-house placement and restoration:</strong> No outside
              referrals mean better coordination and often lower total cost
            </li>
            <li>
              <strong>Experienced implant surgeon:</strong> Complex cases are
              handled here, not referred elsewhere
            </li>
            <li>
              <strong>Advanced technology:</strong> Digital imaging and
              computer-guided placement reduce complications and healing time
            </li>
            <li>
              <strong>Virginia Dental Club:</strong> Our exclusive membership plan
              saves uninsured patients thousands
            </li>
            <li>
              <strong>Convenient location:</strong> Near UVA and downtown
              Charlottesville means fewer travel costs and missed work time
            </li>
          </ul>

          <div className="bg-navy text-cream p-8 rounded-lg my-8">
            <p className="text-lg mb-4">
              Ready to explore your implant options? Schedule a consultation at
              Cville Dentist. We'll assess your situation,
              discuss cost, and help you understand your path to a restored smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-center"
              >
                Schedule Your Consultation
              </Link>
              <Link
                href="/dental-implants-charlottesville"
                className="inline-block border border-gold text-gold px-6 py-2 rounded-lg font-semibold hover:bg-gold/10 transition-colors text-center"
              >
                Learn More About Implants
              </Link>
            </div>
          </div>

          <p className="text-navy/70 italic mt-8">
            Dr. Sowmya Karamcheti, DDS, MHA, is a Charlottesville family and
            cosmetic dentist specializing in dental implants, Invisalign, and
            anxiety-free dentistry. Her practice offers in-house implant placement
            and restoration for seamless, affordable care.
          </p>
        </motion.div>
      </motion.article>

      {/* Related Articles */}
      <motion.section
        ref={relatedRef}
        initial="hidden"
        animate={relatedInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-navy/5 py-12 md:py-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-navy mb-8 font-heading"
          >
            Related Articles
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants}>
              <Link
                href="/blog/dental-implants-vs-dentures"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  Dental Implants vs. Dentures: Which Is Right for You?
                </h4>
                <p className="text-navy/70 text-sm">
                  Compare comfort, cost, longevity, and bone health implications.
                </p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/blog/affordable-dental-care-charlottesville"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  How to Get Affordable Dental Care in Charlottesville Without
                  Insurance
                </h4>
                <p className="text-navy/70 text-sm">
                  Discover Virginia Dental Club and other cost-saving strategies.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
