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

export default function BlogAffordableCareContent() {
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
            <span>Affordable Dental Care</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How to Get Affordable Dental Care in Charlottesville Without Insurance
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
            One of the most common reasons people avoid dental care is cost.
            Whether you lost your dental insurance, are between jobs, or work
            for yourself, I understand the financial pressure. Here's the reality:
            skipping dental care to save money often costs you more in the long run.
            But you're not stuck. As a Charlottesville dentist, I've helped hundreds
            of uninsured patients access quality dental care affordably. Let me show
            you how.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            The Cost of Delaying Dental Care
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            I want to start with this because it matters. When uninsured patients
            skip dental checkups to avoid costs, here's what typically happens:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Small cavity becomes a root canal.</strong> A $150 filling
              becomes a $1,200 root canal and crown.
            </li>
            <li>
              <strong>Gum disease progresses untreated.</strong> Early gum disease
              ($200 treatment) becomes severe periodontal disease ($2,000–$5,000
              treatment).
            </li>
            <li>
              <strong>Tooth loss requires expensive replacement.</strong> A tooth
              lost to decay requires implant, bridge, or denture treatment
              ($3,500–$25,000).
            </li>
            <li>
              <strong>Infections spread.</strong> An untreated tooth abscess can
              develop into a serious systemic infection requiring hospitalization.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            The irony is stark: avoiding preventive care to save $100–$200 yearly
            results in thousands in emergency treatment. The most affordable dental
            care is prevention.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Virginia Dental Club: Your Affordable Alternative to Insurance
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            This is the single best solution I offer to uninsured patients in
            Charlottesville. The Virginia Dental Club is an in-house membership
            plan designed specifically for people without insurance. Here's how it
            works:
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">VDC Membership Benefits:</p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>15–60% discounts on all procedures</strong> (average 35%
                savings)
              </li>
              <li>
                <strong>Preventive care included:</strong> 2 cleanings and exams
                per year, X-rays, fluoride treatments
              </li>
              <li>
                <strong>Emergency exams free</strong> (after membership fee)
              </li>
              <li>
                <strong>Discounts apply immediately</strong> (no waiting periods)
              </li>
              <li>
                <strong>No eligibility requirements</strong> (anyone can join)
              </li>
              <li>
                <strong>Flexible payment plans</strong> available for major
                procedures
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            Let me put this in perspective with real numbers. The VDC membership
            costs roughly $150–$300 annually, depending on your plan level. Here's
            what an uninsured patient saves:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Routine cleanings:</strong> Without VDC $150 each × 2 =
              $300/year. With VDC: included. Saves $300.
            </li>
            <li>
              <strong>Small filling:</strong> Without VDC $250–$400. With VDC 35%
              off = $160–$260. Saves $90–$140 per filling.
            </li>
            <li>
              <strong>Crown restoration:</strong> Without VDC $1,500. With VDC
              40% off = $900. Saves $600.
            </li>
            <li>
              <strong>Root canal:</strong> Without VDC $1,200. With VDC 30% off =
              $840. Saves $360.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            For many patients, the membership pays for itself with a single major
            procedure. And because preventive care is included, you're more likely
            to stay on top of your oral health, preventing expensive problems.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Preventive Care: The Cheapest Dentistry
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Here's a principle I live by as a dentist: prevention is always
            cheaper than treatment. Let me show you:
          </p>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Cost Comparison:</p>
            <ul className="space-y-3 text-navy/80">
              <li>
                <strong>Preventive:</strong> 2 cleanings + exams = $300–$400/year
              </li>
              <li>
                <strong>vs. Emergency:</strong> Abscess diagnosis + emergency root
                canal + crown = $2,500–$3,500
              </li>
              <li className="pt-2 border-t border-gold">
                <strong>Savings with prevention:</strong> $2,100–$3,200/year
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            If you do nothing else, commit to professional cleanings twice per
            year and daily home care (brush twice, floss once). This prevents
            70% of dental problems.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Financing Options for Major Procedures
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Even with VDC discounts, major procedures like implants, crowns, or
            periodontal treatment require financing. We offer several options:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>In-office payment plans:</strong> Spread payments over 6–24
              months, often with 0% interest for qualified patients
            </li>
            <li>
              <strong>CareCredit:</strong> Medical/dental credit card with 0% APR
              for 6–18 months (depending on purchase amount). Widely accepted.
            </li>
            <li>
              <strong>Monthly installments:</strong> Work with our billing team to
              create a custom plan that fits your budget
            </li>
            <li>
              <strong>Upfront discounts:</strong> Ask about our cash discount if
              you can pay in full. Typically 5–10% off.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            For example, a $5,000 implant with a 24-month payment plan costs just
            $208/month. That's more manageable than many streaming services combined,
            and it's an investment that lasts 20+ years.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Making Routine Care Affordable
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            If VDC membership isn't quite right for you yet, here's how to keep
            routine care costs down:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Schedule twice yearly.</strong> Two routine cleanings cost
              less than one emergency visit.
            </li>
            <li>
              <strong>Brush and floss daily.</strong> Home care prevents 90% of
              tooth decay and gum disease.
            </li>
            <li>
              <strong>Avoid sticky/acidic foods.</strong> Limit candy, soda, and
              sports drinks to save money on cavities.
            </li>
            <li>
              <strong>Treat cavities early.</strong> A filling caught at the
              beginning is much cheaper than a root canal.
            </li>
            <li>
              <strong>Ask about payment plans for routine work.</strong> Yes, even
              for cleanings and fillings.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Medicaid and Community Health Options
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            If you qualify for Medicaid or are very low-income, Charlottesville
            has additional resources:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Virginia Medicaid Dental:</strong> Covers children up to age
              21 and some adults (eligibility varies). Contact Virginia Department
              of Medical Assistance.
            </li>
            <li>
              <strong>Charlottesville Free Clinic:</strong> Offers some free dental
              services and referrals to low-cost providers.
            </li>
            <li>
              <strong>UVA School of Dentistry Clinic:</strong> Reduced-cost services
              provided by dental students under faculty supervision. Excellent care
              at a fraction of typical cost.
            </li>
            <li>
              <strong>HRSA-qualified health centers:</strong> Community health
              centers offer sliding-scale fees based on income.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            I'm not here to compete with free or ultra-low-cost services. If that's
            your only option, use it. But if you can afford private care with
            financing or VDC membership, you'll get faster appointments, less
            waiting, and a more personalized experience.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Why Insurance Isn't Always the Best Option
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            This might surprise you coming from a dentist, but I'll be honest:
            individual dental insurance isn't always cost-effective. Here's why:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Monthly premiums add up.</strong> $30–$50/month = $360–$600
              yearly just to have coverage.
            </li>
            <li>
              <strong>High deductibles.</strong> Many plans have $50–$250
              deductibles before coverage kicks in.
            </li>
            <li>
              <strong>Annual maximums.</strong> Most cover only $1,000–$1,500/year
              total. One crown uses up your annual benefit.
            </li>
            <li>
              <strong>Waiting periods.</strong> Many plans don't cover major
              services for 6–12 months after enrollment.
            </li>
            <li>
              <strong>Limited provider networks.</strong> You can only see "in
              network" dentists, which may not include the best dentist for you.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            The math: $480/year in premiums + $150 deductible + 20% coinsurance
            on a $1,000 crown = You pay $650 for coverage that "helps." With VDC
            membership and 40% discount, that crown costs $600 total. You'd come
            out ahead with VDC.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            That's not to say insurance is bad—group dental plans from employers
            are usually excellent. But if you're shopping individual insurance,
            compare carefully to alternatives like VDC.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Special Situations: Cosmetic vs. Necessary Care
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            If cost is a concern, prioritize this way:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Infection/emergency treatment</strong> (root canal, abscess)
            </li>
            <li>
              <strong>Gum disease treatment</strong> (prevents tooth loss)
            </li>
            <li>
              <strong>Cavities and fillings</strong> (prevent larger problems)
            </li>
            <li>
              <strong>Necessary replacements</strong> (missing teeth affecting
              function)
            </li>
            <li>
              <strong>Cosmetic improvements</strong> (whitening, veneers,
              orthodontics)
            </li>
          </ol>
          <p className="text-navy/80 leading-relaxed mb-6">
            Items 1–4 maintain your health and function. Item 5 is wonderful if
            you want to invest, but it's not urgent. That said, we can work
            financing for any of these.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            The Bottom Line on Affordable Dental Care
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            You don't need insurance to get quality, affordable dental care in
            Charlottesville. Here's your action plan:
          </p>
          <div className="bg-navy text-cream p-8 rounded-lg my-8">
            <ol className="list-decimal list-inside space-y-2">
              <li className="mb-2">
                Schedule a consultation with us. It's affordable ($50–$100) and
                lets us assess your specific needs.
              </li>
              <li className="mb-2">
                Ask about Virginia Dental Club membership and calculate your
                annual savings.
              </li>
              <li className="mb-2">
                Commit to preventive care (cleanings, floss, limit sugar).
              </li>
              <li className="mb-2">
                Use financing for major procedures if needed.
              </li>
              <li>
                Stay consistent with care. You'll save thousands over your
                lifetime.
              </li>
            </ol>
          </div>

          <p className="text-navy/80 leading-relaxed mb-6">
            I've never turned away a Charlottesville patient because of cost.
            We'll find a way to make care work for your budget. Your oral health
            is too important to delay.
          </p>

          <p className="text-navy/70 italic mt-8">
            Dr. Sowmya Karamcheti, DDS, MHA, is a Charlottesville family dentist
            committed to making quality care accessible and affordable. She offers
            the Virginia Dental Club membership plan, flexible financing, and
            personalized care for patients with and without insurance.
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
                href="/blog/dental-implants-cost-charlottesville"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  How Much Do Dental Implants Cost in Charlottesville, VA in
                  2026?
                </h4>
                <p className="text-navy/70 text-sm">
                  Detailed breakdown of implant costs and financing options.
                </p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/blog/choosing-dentist-charlottesville"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  How to Choose the Right Dentist in Charlottesville for Your
                  Family
                </h4>
                <p className="text-navy/70 text-sm">
                  Find a dentist who values affordability and quality care.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
