"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function CleaningsExamsContent() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.2, triggerOnce: true });

  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a2332]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6 text-[#1a2332]">
            Dental Cleanings & Exams in Charlottesville
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prevention is the foundation of lifelong oral health. At Cville Dentist, every cleaning and exam is an opportunity to detect problems early and keep your teeth and gums thriving.
          </p>
        </motion.div>
      </section>

      {/* Quick Answer Block */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto bg-[#f5f3f0] border-l-4 border-[#c9a84c] p-6 rounded">
          <h3 className="font-heading text-lg text-[#c9a84c] mb-3 flex items-center">
            <span className="mr-2">●</span> Quick Answer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A professional cleaning and exam typically takes 45-60 minutes. You'll have plaque and tartar removed by our hygienist, digital X-rays taken, and a thorough exam by Dr. Karamcheti that includes checking for cavities, gum disease, oral cancer, and evaluating your bite. Most adults benefit from two cleanings per year.
          </p>
        </div>
      </section>

      {/* What Happens During Your Cleaning */}
      <section ref={ref1} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            What Happens During Your Cleaning
          </h2>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  1
                </span>
                Plaque & Tartar Removal
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our hygienist uses ultrasonic scalers and hand instruments to gently remove plaque buildup and hardened tartar from your teeth and below the gumline. Tartar cannot be removed with brushing alone, which is why professional cleaning is essential. You may hear a humming sound and feel vibrations—this is completely normal and safe.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  2
                </span>
                Polishing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After scaling, we polish your teeth with a gritty paste that removes surface stains and smooths the enamel. If you drink coffee, tea, or red wine, you may notice significant brightening. This step leaves your teeth feeling smooth and looking their best.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  3
                </span>
                Flossing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We floss between every tooth to remove debris from areas you cannot reach at home. This is especially important for identifying early signs of gum disease or cavities between teeth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-xl mb-4 text-[#7a9e7e] flex items-center">
                <span className="w-8 h-8 bg-[#c9a84c] text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                  4
                </span>
                Fluoride Application
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If appropriate for your age and risk level, we apply fluoride as a gel or foam. Fluoride strengthens enamel and helps prevent cavities. We can discuss whether fluoride is recommended for you or your child.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Comprehensive Exam */}
      <section ref={ref2} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            The Comprehensive Exam with Dr. Karamcheti
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            After your cleaning, Dr. Karamcheti performs a thorough examination of your mouth, teeth, and gums. This is where we catch problems early—often before you experience any pain or symptoms.
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Digital X-Rays</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our digital X-ray system is state-of-the-art and uses significantly less radiation than traditional film X-rays. We take full-mouth images every few years and bite-wing X-rays every 1-2 years, depending on your risk level. These images reveal cavities between teeth, bone loss, impacted teeth, and other issues invisible to the naked eye.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti reviews each X-ray with you and explains what she sees, so you understand exactly what's happening in your mouth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Oral Cancer Screening</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Oral cancer is highly treatable when caught early. During every exam, Dr. Karamcheti carefully examines your lips, cheeks, tongue, gums, and throat for any abnormal lesions or color changes. She also palpates your neck and jaw to check for swollen lymph nodes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If she notices anything unusual, she will discuss it with you and may recommend follow-up or a biopsy if needed. Risk factors include tobacco use, heavy alcohol consumption, and HPV exposure.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Periodontal Assessment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Karamcheti measures the depth of the space between your teeth and gums (the pocket depth) using a small probe. Healthy pockets are shallow (1-3mm); deeper pockets can indicate gingivitis or periodontitis. We also evaluate gum color, texture, and bleeding.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If gum disease is detected, we discuss treatment options. Early-stage gum disease responds very well to improved home care and professional deep cleaning (scaling and root planing).
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Cavity Detection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond X-rays, Dr. Karamcheti visually inspects each tooth and uses an explorer (a thin dental instrument) to check for soft spots or cavities. Digital technology also helps us detect cavities at the earliest possible stage, when they are smallest and easiest to treat.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We discuss any cavities we find and present treatment options. Many small cavities can be monitored with fluoride application and improved home care before they require a filling.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={4}
              variants={staggerVariants}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Evaluation of Existing Work</h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti checks all existing fillings, crowns, and other dental work to ensure they are in good condition. Fillings and crowns wear over time, and we monitor them carefully to catch any failures before they become problems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Twice Yearly Cleanings Matter */}
      <section ref={ref3} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Why Twice Yearly Cleanings Matter
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            The six-month cleaning interval is grounded in science. Even with excellent home care, plaque and tartar accumulate below the gumline where your toothbrush cannot reach. For most adults, this buildup reaches a significant level around the six-month mark.
          </p>

          <div className="bg-[#f5f3f0] p-8 rounded-lg mb-8">
            <h3 className="font-heading text-xl mb-4 text-[#1a2332]">Benefits of Twice Yearly Visits:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Early detection of cavities, gum disease, and oral cancer when treatment is simplest</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Prevention of advanced gum disease (periodontitis), which can lead to tooth loss</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Lower overall dental costs by avoiding expensive treatments</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Brighter, healthier-looking teeth through regular polishing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Peace of mind knowing a dental professional is monitoring your oral health</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Fresh breath and elimination of plaque-causing bacteria</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Some patients with gum disease, a history of cavities, or other risk factors may benefit from more frequent cleanings—every three to four months. Dr. Karamcheti will recommend what is right for your situation.
          </p>
        </motion.div>
      </section>

      {/* Children's Cleanings & Exams */}
      <section ref={ref4} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Children's Cleanings & Exams
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            Starting dental visits at an early age sets the foundation for a lifetime of healthy teeth. We recommend the first dental visit around age one or when the first tooth appears.
          </p>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={0}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Gentle, Comfortable Care</h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti and our hygienists are experienced with children and take time to make every visit positive and fun. We explain what we are doing in kid-friendly language, allow children to wear sunglasses if bright lights feel uncomfortable, and go at their pace.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={1}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Fluoride & Sealants</h3>
              <p className="text-gray-700 leading-relaxed">
                We apply fluoride to strengthen developing teeth. When permanent molars come in (around age six), we often recommend dental sealants—thin coatings that prevent cavities on the chewing surfaces of back teeth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={2}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Habit Assessment</h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Karamcheti monitors for habits like thumb-sucking or tongue thrusting that can affect tooth development. Early intervention can prevent the need for braces later.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              custom={3}
              variants={staggerVariants}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
            >
              <h3 className="font-heading text-lg mb-3 text-[#1a2332]">Home Care Education</h3>
              <p className="text-gray-700 leading-relaxed">
                We give parents practical guidance on brushing, flossing, diet, and cavity prevention. Teaching children to brush and floss properly early creates habits that last a lifetime.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What to Expect at Cville Dentist */}
      <section ref={ref5} className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            What to Expect at Cville Dentist
          </h2>

          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-8">
            <h3 className="font-heading text-lg mb-6 text-[#1a2332]">Your Visit Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center font-bold mr-4">
                  5
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Check-in (5 minutes)</p>
                  <p className="text-gray-600 text-sm">Update insurance and medical history if needed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center font-bold mr-4">
                  20
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Professional Cleaning (20-25 minutes)</p>
                  <p className="text-gray-600 text-sm">Scaling, polishing, flossing, and fluoride application with our hygienist</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#7a9e7e] text-white rounded-full flex items-center justify-center font-bold mr-4">
                  15
                </div>
                <div>
                  <p className="font-heading text-[#1a2332] mb-1">Doctor's Exam (15-20 minutes)</p>
                  <p className="text-gray-600 text-sm">Dr. Karamcheti's comprehensive exam and discussion of any findings</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f3f0] p-6 rounded-lg mb-8">
            <h3 className="font-heading text-lg mb-4 text-[#1a2332]">How to Prepare</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Brush and floss before your appointment (we clean regardless, but it helps us see your gums clearly)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Bring your insurance card and photo ID</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Arrive 5-10 minutes early</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#c9a84c] font-bold mr-3">•</span>
                <span>Make a list of any dental concerns to discuss with Dr. Karamcheti</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            We work hard to stay on schedule so your appointment respects your time. If you have anxiety about dental visits, please let us know before your appointment so we can take extra steps to make you comfortable.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-12 text-[#1a2332]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Is the cleaning uncomfortable or painful?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most cleanings are painless. You may feel vibration and hear humming sounds, and your gums may bleed slightly if they are inflamed—this is normal. If you have sensitive teeth, let us know and we can use a gentler approach or apply desensitizing gel. If anything becomes uncomfortable, just raise your hand and we will stop.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                How long do cleanings take, and when can I eat afterward?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A typical cleaning and exam takes 45-60 minutes. You can eat right after your appointment. If we applied fluoride, avoid eating or drinking for 30 minutes so the fluoride can be fully absorbed by your enamel.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                What if I have gum disease?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If gingivitis (early gum disease) is detected, we recommend improved home care, more frequent cleanings, and possibly scaling and root planing (a deeper cleaning below the gumline). Most early gum disease responds well to these interventions. More advanced periodontitis may require ongoing management or specialist care, which we can discuss with you.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                Do I need a cleaning if I have great home care habits?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Even people with excellent brushing and flossing habits accumulate tartar below the gumline where home tools cannot reach. Professional cleaning removes this tartar and allows Dr. Karamcheti to screen for cavities, gum disease, and oral cancer. These exams catch many problems that would otherwise become serious.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-lg text-[#1a2332] mb-3">
                What if I have not been to the dentist in years?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We see many patients returning after a long gap, and we never judge. During your first appointment, we may recommend a comprehensive exam or scaling and root planing if significant tartar has accumulated. We will discuss a personalized plan to get your mouth back on track and will work with you to make catch-up care affordable and comfortable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 bg-[#f5f3f0] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-8 text-[#1a2332]">
            Related General Dentistry Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link href="/general-dentistry-charlottesville/dental-fillings">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Tooth-Colored Fillings</h3>
                <p className="text-gray-600 text-sm">Fast, natural-looking cavity treatment</p>
              </motion.div>
            </Link>

            <Link href="/general-dentistry-charlottesville/dental-crowns">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Crowns</h3>
                <p className="text-gray-600 text-sm">Restore strength and appearance</p>
              </motion.div>
            </Link>

            <Link href="/general-dentistry-charlottesville/dental-bridges">
              <motion.div
                className="bg-white rounded-lg p-6 border border-gray-100 cursor-pointer hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg text-[#1a2332] mb-2">Dental Bridges</h3>
                <p className="text-gray-600 text-sm">Replace missing teeth</p>
              </motion.div>
            </Link>

            <Link href="/contact">
              <motion.div
                className="bg-[#c9a84c] rounded-lg p-6 text-white cursor-pointer hover:bg-[#b89536] transition-colors"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-heading text-lg mb-2">Schedule Your Cleaning</h3>
                <p className="text-sm">Book online or call us today</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-r from-[#1a2332] to-[#2a3545] rounded-lg p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-heading mb-4">
            Your Smile Deserves Professional Care
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            Cville Dentist offers gentle, comprehensive cleanings and exams in Charlottesville. Schedule your appointment today and start investing in lifelong oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#c9a84c] hover:bg-[#b89536] text-white font-bold py-3 px-8 rounded transition-colors">
                Schedule Online
              </button>
            </Link>
            <a href="tel:(434) 973-5873">
              <button className="bg-transparent hover:bg-[#1a2332] text-white font-bold py-3 px-8 rounded border-2 border-[#c9a84c] transition-colors">
                (434) 973-5873
              </button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
