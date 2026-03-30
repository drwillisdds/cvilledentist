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

export default function BlogInvisalignVsBracesContent() {
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
            <span>Invisalign vs. Braces</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            Invisalign vs. Braces in Charlottesville: What Adults Need to Know
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
            If you're an adult in Charlottesville considering straightening your
            teeth, you've likely wondered: should I get Invisalign or braces?
            Both options can transform your smile, but they work very differently.
            As a cosmetic dentist who works with professionals, executives, and
            busy parents, I'm here to help you understand which is right for you.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            The Basic Difference
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Let me start with the fundamentals. Invisalign uses a series of
            custom-made plastic aligners to gradually shift your teeth into
            proper position. Braces use wires, brackets, and bands bonded to
            your teeth to apply constant pressure that moves teeth over time.
            Both are effective. The choice depends on your lifestyle, teeth
            complexity, and what matters most to you.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Aesthetics: The Biggest Advantage for Invisalign
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Let's address the elephant in the room: appearance. Invisalign is
            nearly invisible, especially from a distance or in photographs. The
            aligners are clear plastic, custom-fitted to your teeth. Most people
            won't notice you're wearing them unless they're looking closely.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            This is why I see so many Charlottesville professionals, UVA staff
            members, and business owners choose Invisalign. If you attend client
            meetings, present publicly, or simply feel self-conscious about
            visible orthodontia, Invisalign eliminates that concern entirely.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            Braces, by contrast, are visible. Traditional metal braces are the
            most noticeable. Ceramic braces (tooth-colored) blend better but are
            still visible upon close inspection. Many adults find this
            unacceptable for their personal or professional lives.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Comfort and Eating: Invisalign's Practical Edge
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Invisalign aligners are removable. You take them out to eat, floss,
            and brush. This means:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>No food restrictions.</strong> Eat whatever you want—corn,
              nuts, popcorn, sticky candy. With braces, these foods can damage
              brackets and wires.
            </li>
            <li>
              <strong>Easier cleaning.</strong> You can brush and floss normally,
              removing the aligners. Braces require special flossing techniques
              and create areas where food gets trapped.
            </li>
            <li>
              <strong>No mouth soreness.</strong> Braces wires can poke cheeks and
              lips, creating painful sores. Invisalign causes minimal mouth
              irritation.
            </li>
            <li>
              <strong>Better oral hygiene.</strong> Studies show Invisalign
              patients maintain better plaque control because cleaning is easier.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            That said, Invisalign requires discipline. You must wear the aligners
            20–22 hours per day for them to work effectively. If you forget or
            remove them frequently, treatment will take longer or fail.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Treatment Timeline: They're Often Similar
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Many patients assume Invisalign is slower, but that's not always true.
          </p>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Typical Timeline:</p>
            <ul className="space-y-2 text-navy/80">
              <li>
                <strong>Invisalign:</strong> 12–18 months for most cases (some
                simpler cases: 6–12 months)
              </li>
              <li>
                <strong>Braces:</strong> 18–24 months on average
              </li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            Invisalign can sometimes be faster because modern digital planning
            allows us to apply precise forces throughout treatment. However, if
            your compliance with wearing the aligners drops, treatment extends
            significantly.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            What Cases Is Each Best For?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Both treatments work well for many cases, but they have limits:
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Invisalign Works Best For:</p>
            <ul className="space-y-2 text-navy/80">
              <li>Mild to moderate crowding and spacing issues</li>
              <li>Simple bite corrections</li>
              <li>Patients with good compliance and discipline</li>
              <li>Adults seeking aesthetic discreetness</li>
              <li>Busy professionals who want convenience</li>
            </ul>
          </div>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Braces Work Better For:</p>
            <ul className="space-y-2 text-navy/80">
              <li>Severe crowding or spacing</li>
              <li>Complex bite problems (deep overbite, cross-bite)</li>
              <li>Significant jaw alignment issues</li>
              <li>Cases requiring precise 3D tooth control</li>
              <li>Patients who struggle with removable appliance compliance</li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            During your consultation, I'll examine your bite, take X-rays, and
            recommend which option suits your specific situation. Sometimes only
            one makes sense. Often, both can work—and then it's about your
            preferences.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Cost Comparison
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Cost is often a major factor. Here's what to expect in Charlottesville:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Invisalign:</strong> $3,500–$8,000 depending on treatment
              complexity
            </li>
            <li>
              <strong>Braces (metal):</strong> $3,000–$7,000
            </li>
            <li>
              <strong>Braces (ceramic):</strong> $4,000–$8,500
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            The cost difference is smaller than many expect. What matters is that
            both options are often covered by dental insurance (frequently 50% of
            major restorative care). Additionally, if you're a Virginia Dental
            Club member, you'll receive 15–60% discounts on either treatment.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            Many patients can finance treatment over 12–24 months with 0% APR
            through CareCredit or our office payment plans, making monthly costs
            manageable.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Effectiveness: Both Get Results
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Let me be clear: both Invisalign and braces are clinically effective.
            The American Dental Association recognizes both as legitimate
            orthodontic treatments. Your teeth will move, your bite will improve,
            and your smile will transform.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            The difference isn't about whether they work—it's about how comfortable
            the journey is and how well the treatment fits your life. Some research
            suggests braces may have a slight advantage in extremely complex cases,
            but for 80% of adult patients, Invisalign achieves excellent results.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Common Misconceptions About Invisalign
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            I address these questions daily with Charlottesville patients:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>"Invisalign is only cosmetic."</strong> False. It corrects
              both cosmetic issues and functional bite problems.
            </li>
            <li>
              <strong>"Invisalign only works for minor issues."</strong> False. I
              treat severe crowding and bite corrections with Invisalign
              regularly.
            </li>
            <li>
              <strong>"You have to wear them constantly or they don't work."</strong>{" "}
              Partially true. You need 20–22 hours daily. Less than this extends
              treatment or reduces effectiveness.
            </li>
            <li>
              <strong>"Invisalign is permanent after treatment."</strong> False.
              You'll need to wear a retainer, just like with braces.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Maintenance and Retainers
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Here's something critical that applies to both treatments: after
            either Invisalign or braces, you'll need to wear a retainer for
            several years, often indefinitely. Teeth want to shift back. A
            retainer prevents this.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            With Invisalign, you'll likely get a fixed retainer (bonded to the
            back of your teeth) plus a removable retainer for nighttime wear.
            With braces, the same approach applies. This is standard and
            necessary for permanent results.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            My Professional Recommendation
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            As a cosmetic dentist serving the Charlottesville community—including
            UVA professionals, executives, and parents—I see the lifestyle impact
            of orthodontic treatment. Most of my adult patients choose Invisalign
            because:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-navy/80 mb-6">
            <li>They don't want visible brackets during professional interactions</li>
            <li>
              They value the ability to eat normally without dietary restrictions
            </li>
            <li>
              They appreciate easier oral hygiene and fewer orthodontic
              appointments
            </li>
            <li>
              They can see their progress with each new aligner—it's motivating
            </li>
          </ol>
          <p className="text-navy/80 leading-relaxed mb-6">
            That said, I always ensure patients understand they need to commit to
            wearing aligners consistently. If someone struggles with that
            commitment, I'll recommend braces instead, because fixed appliances
            guarantee compliance.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Teeth Whitening After Treatment
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            One final thought: whichever treatment you choose, after straightening
            your teeth, you might consider whitening. Many of my Charlottesville
            patients combine Invisalign or braces with our professional whitening
            treatments for a complete smile transformation. We can discuss this
            during your consultation.
          </p>

          <div className="bg-navy text-cream p-8 rounded-lg my-8">
            <p className="text-lg mb-4">
              Ready to explore your orthodontic options? Schedule a consultation
              at Cville Dentist. We'll assess your bite,
              discuss your goals, and recommend the best path to your best smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-center"
              >
                Schedule Your Consultation
              </Link>
              <Link
                href="/invisalign-charlottesville"
                className="inline-block border border-gold text-gold px-6 py-2 rounded-lg font-semibold hover:bg-gold/10 transition-colors text-center"
              >
                Learn More About Invisalign
              </Link>
            </div>
          </div>

          <p className="text-navy/70 italic mt-8">
            Dr. Sowmya Karamcheti, DDS, MHA, is a Charlottesville cosmetic and
            family dentist specializing in Invisalign, braces, and smile
            transformations. Her practice offers comprehensive orthodontic
            consultations and personalized treatment planning for adults and
            families.
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
                href="/blog/choosing-dentist-charlottesville"
                className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold text-navy mb-2 hover:text-gold transition-colors">
                  How to Choose the Right Dentist in Charlottesville for Your
                  Family
                </h4>
                <p className="text-navy/70 text-sm">
                  What to look for in a dentist who can handle all your family's
                  needs.
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
                  Financing and cost-saving options for orthodontic treatment.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
