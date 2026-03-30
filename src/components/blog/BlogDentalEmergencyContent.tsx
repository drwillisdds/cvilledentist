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

export default function BlogDentalEmergencyContent() {
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
            <span>Dental Emergency</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
            What to Do When You Have a Dental Emergency in Charlottesville
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
            A knocked-out tooth at your child's soccer game. A sudden severe toothache
            at 2 AM. A crown that falls off during dinner. Dental emergencies happen
            when you least expect them, and panic is usually the first response. But
            knowing how to react in those first few minutes can mean the difference
            between saving a tooth and losing it. Here's what you need to know about
            handling dental emergencies in Charlottesville.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            What Counts as a Dental Emergency?
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Not every dental problem requires emergency care, but some definitely do.
            Here's what qualifies:
          </p>
          <div className="bg-gold/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">True Dental Emergencies:</p>
            <ul className="space-y-2 text-navy/80">
              <li>Knocked-out (avulsed) tooth</li>
              <li>Severe toothache with swelling or fever</li>
              <li>Broken or fractured tooth with exposed nerve</li>
              <li>Loose tooth from injury or trauma</li>
              <li>Abscessed tooth (serious infection)</li>
              <li>Severe gum bleeding or swelling</li>
              <li>Jaw pain or swelling after injury</li>
              <li>Anything causing severe pain or difficulty swallowing</li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            These situations need prompt attention—ideally within hours, not days.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            A Knocked-Out Tooth: The Critical First 30 Minutes
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            If a permanent tooth gets knocked out (this is more common in children,
            but happens to adults too), time is critical. Here's what to do:
          </p>
          <ol className="list-decimal list-inside space-y-4 text-navy/80 mb-6">
            <li>
              <strong>Find the tooth.</strong> Look for it immediately. If it's on
              the ground, don't panic about dirt.
            </li>
            <li>
              <strong>Hold it correctly.</strong> Touch only the crown (the white
              part you see), never the root. The root has delicate fibers we need
              to preserve.
            </li>
            <li>
              <strong>Rinse gently if dirty.</strong> Use cool water only—don't
              scrub. Never use soap or chemicals.
            </li>
            <li>
              <strong>Reinsert immediately if possible.</strong> Gently place the
              tooth back in its socket and bite down on a clean cloth to hold it.
              This is the best option.
            </li>
            <li>
              <strong>If reinsertion isn't possible,</strong> keep the tooth moist.
              Options include:
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>
                  Place it in your mouth (cheek pouch), keeping it moist with
                  saliva
                </li>
                <li>
                  Use a "tooth saver" kit if available (emergency tooth
                  preservation solution)
                </li>
                <li>Use milk as your next best option</li>
                <li>
                  Last resort: wrap in wet gauze or use saltwater if nothing else
                  is available
                </li>
              </ul>
            </li>
            <li>
              <strong>Call us immediately.</strong> Willis & Associates offers
              emergency treatment, and we often can save a tooth if seen within
              30 minutes to an hour.
            </li>
          </ol>
          <p className="text-navy/80 leading-relaxed mb-6">
            Never throw away a knocked-out tooth hoping it's a baby tooth. Let us
            examine it. Even if it's a permanent tooth lost, we may be able to
            reimplant it successfully.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Severe Toothache: First Aid Steps
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            A sudden severe toothache is often caused by:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>Deep cavity reaching the nerve (pulpitis)</li>
            <li>Tooth abscess (bacterial infection)</li>
            <li>Fractured or cracked tooth</li>
            <li>Loose filling exposing the tooth interior</li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            While waiting for emergency care:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Take over-the-counter pain relief:</strong> Ibuprofen
              (Advil, Motrin) or acetaminophen (Tylenol) per package directions
            </li>
            <li>
              <strong>Apply a cold compress:</strong> Ice pack on the outside of
              your cheek for 15 minutes on, 15 minutes off
            </li>
            <li>
              <strong>Avoid hard, hot, or cold foods:</strong> Stick to soft,
              lukewarm foods
            </li>
            <li>
              <strong>Rinse with salt water:</strong> Dissolve 1/2 teaspoon salt
              in 8 oz warm water. This reduces inflammation and may provide relief.
            </li>
            <li>
              <strong>Don't put aspirin directly on the tooth or gum.</strong> This
              damages tissue and doesn't help.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            If the pain is accompanied by facial swelling, difficulty swallowing,
            fever, or difficulty breathing, this may be a serious infection. Call
            911 or go to the ER immediately.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Broken or Fractured Tooth
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            A broken tooth can range from a small cosmetic chip to a serious fracture
            that exposes the nerve. Here's how to handle it:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Collect the pieces if possible.</strong> We can sometimes use
              them, especially if the break is fresh.
            </li>
            <li>
              <strong>Rinse your mouth with salt water.</strong> This keeps the area
              clean and may reduce pain.
            </li>
            <li>
              <strong>Apply cold compression to the outside of your cheek.</strong>
            </li>
            <li>
              <strong>Avoid the broken tooth when eating.</strong> Use the other
              side of your mouth.
            </li>
            <li>
              <strong>If a sharp edge is cutting your mouth,</strong> cover it
              temporarily with sugarless gum or wax until you can see us.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            Small cosmetic chips can often wait for an appointment, but if the tooth
            is sensitive or if a large portion is missing, this is an emergency.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Loose or Knocked-Loose Tooth
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            A tooth that's loose after an injury is different from the normal
            looseness of baby teeth. Do this:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Don't wiggle or pull the tooth.</strong> Let it be until we
              can see you.
            </li>
            <li>
              <strong>Bite gently to keep it in position.</strong> Use the other
              side of your mouth for chewing.
            </li>
            <li>
              <strong>Apply ice to the outside of your cheek.</strong>
            </li>
            <li>
              <strong>Avoid touching the tooth with your tongue.</strong> I know
              it's tempting, but movement can worsen the injury.
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            We can often stabilize a loose tooth with a splint, especially if seen
            promptly.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Crown or Filling Falls Off
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            A lost crown or filling is uncomfortable and exposes the tooth interior,
            but it's not always an immediate emergency. However, you should seek
            treatment within a few days.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            In the meantime:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Save the crown or filling if you find it.</strong> Sometimes
              we can recement it.
            </li>
            <li>
              <strong>Use temporary filling material</strong> (available over the
              counter) to fill the gap until your appointment
            </li>
            <li>
              <strong>Avoid chewing on that side.</strong>
            </li>
            <li>
              <strong>If there's no pain,</strong> you can often wait a few days for
              a regular appointment rather than emergency care
            </li>
          </ul>
          <p className="text-navy/80 leading-relaxed mb-6">
            If the tooth is very sensitive after losing a filling, this becomes more
            urgent.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            When to Go to the Emergency Room vs. Call Your Dentist
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            This is an important distinction. Emergency rooms handle medical
            emergencies, not dental ones. However, a few situations warrant an ER
            visit:
          </p>
          <div className="bg-sage/10 border-l-4 border-gold p-6 my-6 rounded">
            <p className="font-semibold text-navy mb-3">Go to the ER if:</p>
            <ul className="space-y-2 text-navy/80">
              <li>You have facial swelling affecting your ability to breathe</li>
              <li>You have a fever above 101°F with dental pain</li>
              <li>You have difficulty swallowing or speaking</li>
              <li>
                You have severe facial or jaw trauma (possible fracture or
                structural damage)
              </li>
              <li>You have signs of a spreading infection (swelling in neck/throat)</li>
            </ul>
          </div>
          <p className="text-navy/80 leading-relaxed mb-6">
            For everything else—even severe pain—call us first. We can provide
            emergency dental treatment. ERs rarely have the tools to handle dental
            problems and will likely refer you to an emergency dentist anyway.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Willis & Associates Emergency Dentistry in Charlottesville
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            Here's what I want you to know about our practice: we take dental
            emergencies seriously. Our office is conveniently located at 2375
            Commonwealth Drive in Charlottesville, and we offer same-day emergency
            appointments for patients in pain.
          </p>
          <p className="text-navy/80 leading-relaxed mb-6">
            When you call with an emergency:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-navy/80 mb-6">
            <li>Describe your situation briefly</li>
            <li>
              We'll fit you into the schedule the same day whenever possible
            </li>
            <li>
              You'll be seen quickly—not after a long wait—because we prioritize
              emergency cases
            </li>
            <li>
              We can perform root canals, extractions, trauma repair, and other
              emergency procedures in-house
            </li>
          </ol>

          <p className="text-navy/80 leading-relaxed mb-6">
            <strong>Call us immediately at (434) 973-5873</strong> if you have a
            dental emergency. If it's after hours and you're experiencing severe
            pain or facial swelling, our answering service will direct you to
            emergency care.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-4 mt-8 font-heading">
            Prevention Is Always Better Than Emergency Care
          </h2>
          <p className="text-navy/80 leading-relaxed mb-6">
            While knowing how to handle emergencies is important, prevention is
            better. Here are evidence-based ways to avoid dental emergencies:
          </p>
          <ul className="list-disc list-inside space-y-3 text-navy/80 mb-6">
            <li>
              <strong>Wear a mouthguard during sports.</strong> This prevents
              knocked-out and broken teeth.
            </li>
            <li>
              <strong>Don't chew on hard objects:</strong> ice, hard candy, pens,
              or fingernails
            </li>
            <li>
              <strong>Maintain regular dental checkups.</strong> We catch problems
              before they become emergencies.
            </li>
            <li>
              <strong>Address decay early.</strong> Small cavities are inexpensive
              to fill; infections are expensive and painful.
            </li>
            <li>
              <strong>Keep your teeth strong:</strong> brush twice daily, floss
              once daily, and limit sugary foods
            </li>
          </ul>

          <div className="bg-navy text-cream p-8 rounded-lg my-8">
            <p className="text-lg mb-4">
              If you're experiencing a dental emergency, don't wait. Call Willis &
              Associates Family Dentistry at (434) 973-5873 immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-gold text-navy px-6 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/emergency-dentist-charlottesville"
                className="inline-block border border-gold text-gold px-6 py-2 rounded-lg font-semibold hover:bg-gold/10 transition-colors text-center"
              >
                Learn About Emergency Dentistry
              </Link>
            </div>
          </div>

          <p className="text-navy/70 italic mt-8">
            Dr. Sowmya Karamcheti, DDS, MHA, is a Charlottesville dentist offering
            same-day emergency dental treatment. Her practice is equipped to handle
            trauma, infections, severe pain, and other urgent dental situations.
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
                  Find a dentist you trust for both routine and emergency care.
                </p>
              </Link>
            </motion.div>
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
                  Learn about tooth replacement options if an emergency results
                  in tooth loss.
                </p>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
