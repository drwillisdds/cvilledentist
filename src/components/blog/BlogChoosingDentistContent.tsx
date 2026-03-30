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

export default function BlogChoosingDentistContent() {
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
            <span>Choosing a Dentist</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            How to Choose the Right Dentist in Charlottesville for Your Family
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-cream/80">
            <span>Dr. Sowmya Karamcheti, DDS, MHA</span>
            <span>March 29, 2026</span>
            <span>7 min read</span>
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
            Choosing a dentist is one of those decisions that affects your health
            for years to come, yet many people approach it haphazardly. You might
            ask your neighbor for a recommendation, call the first office that
            answers, or just pick whoever your insurance lists nearby. Then you're
            stuck with someone who makes you anxious or doesn't spend time with you.
            Here's how to choose the right dentist in Charlottesville for your
            family—and actually be happy with that choice.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Understand Your Needs First
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Before you start researching dentists, clarify what you need:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Family or individual?</strong> Do you need a dentist who
              treats adults, children, or both?
            </li>
            <li>
              <strong>Specialty needs?</strong> Are you looking for cosmetic
              dentistry, orthodontics, implants, or just general care?
            </li>
            <li>
              <strong>Anxiety issues?</strong> Do you need a dentist experienced
              with anxious patients or sedation dentistry?
            </li>
            <li>
              <strong>Insurance or out-of-pocket?</strong> Does the dentist need to
              be in your insurance network?
            </li>
            <li>
              <strong>Location preference?</strong> How far are you willing to
              travel? Near work or home?
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            These questions narrow your search significantly and help you evaluate
            options more effectively.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Check Credentials and Training
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Your dentist's education and credentials matter. Here's what to verify:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>DDS or DMD degree:</strong> Both are equivalent. The dentist
              graduated from an accredited dental school.
            </li>
            <li>
              <strong>State license:</strong> Confirm they're licensed in Virginia.
              You can verify this on the Virginia Board of Dentistry website.
            </li>
            <li>
              <strong>Specialty credentials:</strong> If you need an orthodontist
              or periodontist, they should have completed a specialty residency
              (additional years of training).
            </li>
            <li>
              <strong>Additional qualifications:</strong> Look for memberships in
              professional organizations (American Dental Association, Academy of
              General Dentistry). This shows commitment to continuing education.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            In Charlottesville, many dentists have ties to UVA School of Dentistry
            or have taught there. This is often a good indicator of expertise.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Assess Technology and Modern Practices
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Dental technology has advanced dramatically in the past decade. Look for:
          </p>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Modern Dental Technology:</p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Digital X-rays:</strong> Faster, clearer, and much less
                radiation than old film
              </li>
              <li>
                <strong>Intraoral cameras:</strong> Lets you see what the dentist
                sees during examination
              </li>
              <li>
                <strong>CBCT scanning:</strong> 3D imaging essential for implant
                planning and complex cases
              </li>
              <li>
                <strong>Same-day crowns:</strong> CAD/CAM technology allows crowns
                to be made in one visit
              </li>
              <li>
                <strong>Laser technology:</strong> For gum treatment without
                cutting and stitching
              </li>
              <li>
                <strong>Digital smile design:</strong> Shows you what your smile
                will look like after cosmetic work
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            Practices with modern technology typically provide better diagnostics,
            faster treatment, and better patient communication. Ask about specific
            technologies during your consultation.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Read Reviews—But Critically
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Online reviews are helpful but imperfect. Here's how to interpret them:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Look for patterns, not individual comments.</strong> One
              complaint about wait times is normal. Five complaints suggest a real
              problem.
            </li>
            <li>
              <strong>Weight recent reviews more heavily.</strong> A five-star
              review from 2019 is less relevant than one from 2024.
            </li>
            <li>
              <strong>Be skeptical of all-perfect reviews.</strong> No dentist or
              practice is perfect. Some practices delete negative reviews or ask
              patients to leave positive ones, which skews results.
            </li>
            <li>
              <strong>Look for specific feedback.</strong> A review saying "great
              dentist" is less useful than one saying "Dr. X spent 30 minutes
              explaining my root canal options and never made me feel rushed."
            </li>
            <li>
              <strong>Check Google, Yelp, and Healthgrades.</strong> If negative
              comments appear on multiple platforms, they're likely legitimate.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            Also ask friends, coworkers, and neighbors in Charlottesville for
            personal recommendations. Word-of-mouth is often more honest than
            online reviews.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Questions to Ask During Your First Consultation
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            A good dentist welcomes questions. Here's what to ask:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>How long have you been in practice?</strong> More experience
              often means better judgment, though newer dentists may be current on
              latest techniques.
            </li>
            <li>
              <strong>Do you handle emergencies same-day?</strong> A good dentist
              keeps some appointment slots open for emergency patients.
            </li>
            <li>
              <strong>What's your approach to treatment?</strong> Do they recommend
              aggressive treatment or minimal intervention? Ask how they decide.
            </li>
            <li>
              <strong>Do you do cosmetic dentistry/implants/orthodontics?</strong>
              Or do you refer out? (Referring out isn't bad—it's honest if it's not
              their expertise.)
            </li>
            <li>
              <strong>What financing options do you offer?</strong> Payment plans?
              Membership programs? CareCredit?
            </li>
            <li>
              <strong>How do you stay current with continuing education?</strong>
              Does the dentist attend conferences and take continuing education
              courses?
            </li>
            <li>
              <strong>What's your approach to anxiety/nervous patients?</strong> Do
              they use nitrous oxide (laughing gas)? Sedation? Take time to calm
              anxious patients?
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Evaluate the Office Environment and Staff
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Your experience at a dental practice isn't just about the dentist.
            Notice:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Cleanliness:</strong> The office should be spotless and smell
              clean, not strongly medicated.
            </li>
            <li>
              <strong>Staff friendliness:</strong> Are they warm and helpful, or
              cold and rushed? Do they explain costs and procedures clearly?
            </li>
            <li>
              <strong>Wait times:</strong> Were you seen on time? (Occasional
              delays happen, but chronic delays are a red flag.)
            </li>
            <li>
              <strong>Communication:</strong> Did the dentist explain what they
              found? Did they answer your questions patiently?
            </li>
            <li>
              <strong>Personalization:</strong> Did they ask about your goals and
              concerns, or follow a one-size-fits-all approach?
            </li>
            <li>
              <strong>Office layout:</strong> Private treatment areas (not an open
              floor plan) reduce anxiety and provide privacy.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Consider Location and Convenience
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            This matters more than people realize. A dentist 30 minutes away is
            more likely to be skipped for routine care than one near your home or
            work. In Charlottesville:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Near UVA or downtown:</strong> Convenient for professionals
              and employees in those areas. Easy to pop in during lunch.
            </li>
            <li>
              <strong>Easy parking:</strong> Avoid offices in inconvenient strip
              malls or with limited parking.
            </li>
            <li>
              <strong>After-hours appointments:</strong> Can they accommodate
              working adults? Do they offer early morning or evening slots?
            </li>
            <li>
              <strong>Teledentistry options:</strong> Some consultations can happen
              by video, though in-person visits are still necessary for exams.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Ask About Preventive Philosophy
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            How a dentist approaches prevention tells you a lot about their
            philosophy:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Do they emphasize home care?</strong> A good dentist spends
              time teaching brushing, flossing, and diet.
            </li>
            <li>
              <strong>Do they recommend frequent fluoride?</strong> Age-appropriate
              fluoride is good; unnecessary fluoride for low-risk patients is
              overkill.
            </li>
            <li>
              <strong>How often do they recommend cleanings?</strong> Most people
              need 2/year. Some need 4/year (gum disease). Some need 1/year (great
              home care, no risk factors).
            </li>
            <li>
              <strong>Do they counsel about diet?</strong> Sugary drinks and foods
              are the main cause of cavities. A dentist should discuss this.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Don't Ignore Gut Feeling
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            After your first visit, ask yourself: Did I feel heard? Did the dentist
            explain things clearly? Did they respect my time and concerns? Trust
            your instincts. If something feels off, it probably is. A good dentist
            should make you feel comfortable and confident.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Give It Time, But Don't Settle
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Finding the right dentist might take trying a couple of offices. That's
            normal. But once you find someone you trust, stick with them. Continuity
            of care is valuable—your dentist learns your mouth, your history, and
            your concerns over time.
          </p>

          <div className="bg-navy text-cream p-8 rounded-lg my-8">
            <p className="text-lg mb-4">
              We'd love to be your family dentist in Charlottesville. Dr. Sowmya
              Karamcheti and her team are committed to comprehensive, compassionate
              care with modern technology and flexible scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/about"
                className="inline-block border border-gold text-gold px-6 py-2 rounded-lg font-semibold hover:bg-gold/10 transition-colors text-center"
              >
                Learn About Dr. Karamcheti
              </Link>
            </div>
          </div>

          <p className="text-navy/70 italic mt-8">
            Dr. Sowmya Karamcheti, DDS, MHA, is a Charlottesville family dentist
            offering comprehensive care, modern technology, and patient-centered
            treatment planning. She welcomes new patients and families.
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
                href="/blog/affordable-dental-care-charlottesville"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  How to Get Affordable Dental Care in Charlottesville Without
                  Insurance
                </h4>
                <p className="text-navy/70 text-sm">
                  Financing options and membership plans to make care accessible.
                </p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/blog/dental-emergency-charlottesville"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  What to Do When You Have a Dental Emergency in Charlottesville
                </h4>
                <p className="text-navy/70 text-sm">
                  First aid tips and how to get same-day emergency care.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
