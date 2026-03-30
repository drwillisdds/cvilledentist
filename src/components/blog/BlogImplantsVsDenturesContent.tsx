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

export default function BlogImplantsVsDenturesContent() {
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
            <span>Implants vs. Dentures</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Dental Implants vs. Dentures: Which Is Right for You?
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
            When you've lost multiple teeth or face losing teeth to decay or
            gum disease, the conversation usually comes down to this: implants
            or dentures? Both are effective tooth replacement solutions, but they
            work very differently, with distinct advantages and trade-offs. As a
            Charlottesville dentist who has placed hundreds of implants and fit
            thousands of dentures, I understand the complexity of this decision.
            Let me walk you through the comparison so you can choose what's right
            for your situation.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            The Fundamental Difference
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Let me start with the basics because understanding how these work is
            essential to choosing between them.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Dental implants</strong> are titanium posts surgically placed
            into your jawbone. Once integrated (usually 3–6 months), they act like
            a tooth root. An artificial crown is then attached to the implant.
            Result: a tooth that functions and looks like a natural tooth, is
            permanently fixed, and requires no special care beyond normal brushing
            and flossing.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Dentures</strong> are custom-made removable prosthetics that
            rest on your gums. They're held in place by suction, clasps (if
            partial), or dental adhesive. You remove them for cleaning and
            sleeping. Dentures require daily maintenance, periodic adjustments, and
            replacement every 5–10 years.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Cost Comparison: The Initial Difference
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            This is where many people's decision stops, but it shouldn't. Let's
            look at the full financial picture:
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Upfront Cost:</p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Single tooth implant:</strong> $4,000–$6,500
              </li>
              <li>
                <strong>All-on-4 implants (full mouth):</strong> $20,000–$35,000
              </li>
              <li>
                <strong>Full dentures:</strong> $1,500–$5,000 per set
              </li>
              <li>
                <strong>Partial dentures:</strong> $800–$2,500 per set
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            Yes, dentures are cheaper upfront. But—and this is critical—let's
            look at lifetime costs:
          </p>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">
              20-Year Lifetime Cost Comparison:
            </p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Implant (single tooth):</strong> $5,000–$7,000 (implant +
                minimal future repair)
              </li>
              <li>
                <strong>Denture (single tooth replacement needs):</strong>
                $6,000–$15,000+ (original + 2–4 replacements at $1,500–$5,000
                each + annual adjustments/repairs at $300–$500)
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            When you account for replacements and maintenance, implants become
            competitive or even cheaper over a 20+ year lifespan.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Comfort and Daily Function: Where Implants Shine
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            This is where patients truly feel the difference:
          </p>
          <div className="bg-navy/5 border-l-4 border-navy p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Implant Experience:</p>
            <ul className="space-y-2 text-navy/80">
              <li>Eat anything you want—no dietary restrictions</li>
              <li>No sore spots or irritation from rubbing</li>
              <li>No adhesive needed (unlike many dentures)</li>
              <li>
                Feel like natural teeth; 95% of implant patients feel natural
                sensation
              </li>
              <li>Never worry about dentures slipping or falling out</li>
              <li>Normal speech (no lisping from loose dentures)</li>
              <li>Brush and floss normally</li>
            </ul>
          </div>
          <div className="bg-navy/5 border-l-4 border-navy p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Denture Experience:</p>
            <ul className="space-y-2 text-navy/80">
              <li>Avoid hard, sticky, hot foods (risk breaking them)</li>
              <li>May develop sore spots that require adjustment</li>
              <li>Many denture wearers need adhesive daily</li>
              <li>Reduced taste (palate coverage reduces taste sensation)</li>
              <li>Risk of slipping while eating or speaking</li>
              <li>Speech can change; some develop slight lisp</li>
              <li>Must remove for cleaning and sleeping</li>
              <li>Require nightly soaking in solution</li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            The difference is real and significant. I've had countless patients
            tell me, "I wish I'd done implants earlier," but I've never had a
            denture patient say that.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Bone Health: A Critical Long-Term Consideration
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Here's something that doesn't get enough attention: what happens to
            your jawbone after tooth loss.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            When you lose a tooth, your body resorbs the bone that used to hold
            that tooth. This happens whether you get a denture or nothing. The
            difference:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>With an implant:</strong> The titanium post stimulates the
              bone, preserving its volume and density (just like natural tooth
              roots do). Your jawbone stays strong.
            </li>
            <li>
              <strong>With a denture:</strong> Bone resorption continues. On
              average, you lose 0.5–1 mm of bone height per year. After 10 years,
              significant bone loss occurs.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            This bone loss has cascading effects:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Dentures fit worse over time.</strong> As bone shrinks,
              dentures become loose, requiring frequent adjustments or remakes
            </li>
            <li>
              <strong>Facial structure changes.</strong> Your face can look sunken,
              aged, or collapsed as jaw height decreases
            </li>
            <li>
              <strong>Future implant placement becomes difficult.</strong> Severe
              bone loss means expensive bone grafting to place implants later
            </li>
            <li>
              <strong>Speech and swallowing affected.</strong> As bite collapses,
              speech and swallowing function decline
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            Implants prevent all of this. If you choose implants now, your bone
            stays healthy for decades. If you choose dentures and later want to
            switch to implants, bone grafting ($2,000–$8,000) becomes necessary.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Longevity: How Long Do They Last?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Implants:</strong> With proper care, dental implants last 20+
            years, often 30–40 years or longer. Some of my oldest patients have
            implants that are 25+ years old and still functioning perfectly. True
            failure rate (implant rejection) is less than 3%.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Dentures:</strong> Dentures typically last 5–10 years before
            they need replacement. The base material degrades, the fit changes with
            bone loss, teeth wear down, and breakage occurs. Some patients require
            replacement every 3–5 years.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            In terms of longevity, implants win decisively.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Maintenance and Care Requirements
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Implant care:</strong> Brush twice daily, floss once daily,
            see a dentist twice yearly. That's it. No special solutions, no removal,
            no adhesive. Same care as natural teeth.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Denture care:</strong> Remove after eating, rinse with water,
            soak overnight in denture solution, brush with denture brush, check
            daily for cracks, see dentist every 1–2 years for adjustments. Some
            patients need adjustments more frequently. You must have proper storage
            space (dentures dry out and warp if not kept moist).
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            For busy people or those with dexterity challenges, implants are far
            easier to maintain.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Who Is a Candidate for Implants vs. Dentures?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Not everyone can get implants, and sometimes dentures are the right
            choice:
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">
              Implants are ideal for:
            </p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Good bone density/volume</strong> (though grafting can help
                if bone is missing)
              </li>
              <li>
                <strong>Healthy gums</strong> (gum disease must be treated first)
              </li>
              <li>
                <strong>Good overall health</strong> (diabetes, heart disease,
                osteoporosis need careful evaluation)
              </li>
              <li>
                <strong>Realistic expectations</strong> (understanding that healing
                takes time)
              </li>
              <li>
                <strong>Commitment to oral hygiene</strong> (implants fail if you
                don't maintain them)
              </li>
              <li>
                <strong>Non-smoker or willing to quit</strong> (smoking impairs
                healing)
              </li>
            </ul>
          </div>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Dentures may be better if:</p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Severe bone loss already present</strong> (though bone
                grafting can help)
              </li>
              <li>
                <strong>Cannot commit to surgery</strong> (prefer non-surgical
                solution)
              </li>
              <li>
                <strong>Very limited budget</strong> (upfront cost is lower)
              </li>
              <li>
                <strong>Multiple health conditions</strong> (surgery may be too
                risky)
              </li>
              <li>
                <strong>Already comfortable with removable appliances</strong>
                (current denture wearers)
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            Many patients believe they're "not candidates" for implants when they
            simply need bone grafting or gum treatment first. Don't assume you're
            ineligible without a professional evaluation.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            A Hybrid Option: Implant-Supported Dentures
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            If you like the idea of dentures' lower upfront cost but want the
            comfort and bone preservation of implants, there's a middle option:
            implant-supported dentures (All-on-4, All-on-X).
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            How it works: 4–6 implants are placed in the jaw, and a denture is
            secured to them. Result:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>Much more stable than traditional dentures (they don't shift)</li>
            <li>
              Better comfort and function than traditional dentures (though not
              quite as good as individual implant crowns)
            </li>
            <li>Bone preservation (implants stimulate bone)</li>
            <li>
              Lower cost than full mouth of individual implants ($20,000–$35,000
              vs. $35,000–$50,000)
            </li>
            <li>Still removable for cleaning (helpful for some patients)</li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            This option works wonderfully for full-mouth tooth loss when budget or
            bone is a concern.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            My Professional Recommendation
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            After 15+ years placing implants and fitting dentures, here's my honest
            assessment: if you have the health, bone, budget, and commitment for
            implants, implants are superior. They provide comfort, function,
            longevity, and bone preservation that dentures simply cannot match.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            That said, dentures are a valid solution for patients who prefer
            non-surgical treatment or have limited resources. They work. They allow
            people to eat and smile and live normal lives. I fit dentures and treat
            denture patients with the same care as implant patients.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            The worst choice is to do nothing—to live with missing teeth affecting
            your nutrition, appearance, and confidence. Whether you choose implants
            or dentures, choose one.
          </p>

          <div className="bg-navy text-cream p-8 rounded-lg my-8">
            <p className="text-lg mb-4">
              Ready to explore your tooth replacement options? At Willis &
              Associates, we'll evaluate your specific situation and recommend what's
              best for your health, budget, and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/dental-implants-charlottesville"
                className="inline-block border border-gold text-gold px-6 py-2 rounded-lg font-semibold hover:bg-gold/10 transition-colors text-center"
              >
                Learn About Implants
              </Link>
            </div>
          </div>

          <p className="text-navy/70 italic mt-8">
            Dr. Sowmya Karamcheti, DDS, MHA, is a Charlottesville dentist
            experienced in both implant placement and denture fitting. She provides
            comprehensive evaluation to help patients choose the best tooth
            replacement solution for their unique situation.
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
                  Detailed pricing and financing options for implants.
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
                  Financing and membership options for tooth replacement.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
