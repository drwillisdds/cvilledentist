"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

const reviews: Review[] = [
  {
    name: "Callisto W.",
    rating: 5,
    date: "2 months ago",
    text: "This is a wonderful dental practice! I haven't been to a dentist in nearly 20 years, due to anxiety. When I woke up on a Friday with a potential emergency, Cville Dentist fit me in as a new patient and had me in the chair within the hour. The dental technician made the whole process stress free and comfortable. I was really impressed and will definitely use them for continued care and to re-establish a dental health routine.",
    source: "Google",
  },
  {
    name: "Kaitlyn K.",
    rating: 5,
    date: "3 months ago",
    text: "The staff here take exceptional care of you. I put off going to the dentist for a long time, but everyone made me feel comfortable and never made me feel bad for all of the work I needed to have done. Even with my fear of needles, I was taken care of and made comfortable by a gentle shoulder rub to make sure I had the best experience possible. Thank you so much!",
    source: "Google",
  },
  {
    name: "Tracey F.",
    rating: 5,
    date: "1 month ago",
    text: "Really love this office and the people that work there. It's always spotlessly clean, they run on time and everyone is very professional and so kind. They have the most up to date dental and digital technology out there, which makes things easier for the patient. Dr. Parvez did some cosmetic dental work for me recently and it turned out perfectly. Highly recommend.",
    source: "Google",
  },
  {
    name: "Sarah M.",
    rating: 5,
    date: "2 weeks ago",
    text: "Dr. Karamcheti is fantastic — thorough, gentle, and genuinely cares about her patients. The whole office has a welcoming feel from the moment you walk in. They explained every step of my treatment plan and worked with me on scheduling. Best dental experience I've had in Charlottesville.",
    source: "Google",
  },
  {
    name: "Michael R.",
    rating: 5,
    date: "3 weeks ago",
    text: "Switched here after moving to Charlottesville and couldn't be happier. The office is modern, clean, and the team is incredibly friendly. They got me in quickly for a crown and the whole process was seamless. The technology they use made everything faster than I expected.",
    source: "Google",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    date: "1 month ago",
    text: "I brought my whole family here — two kids and my husband — and everyone had a great experience. The hygienists are patient with my little ones and Dr. Karamcheti takes the time to explain things at a level kids can understand. We finally found our forever dentist in Charlottesville!",
    source: "Google",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const visibleReviews = 3;
  const maxIndex = reviews.length - visibleReviews;

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] }}
      className="bg-cream py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-navy">5.0</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">
            What Our Patients Say
          </h2>
          <p className="text-gray-600">
            Real reviews from real patients in Charlottesville
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleReviews + 2)}%` }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            >
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  className="min-w-[calc(33.333%-16px)] bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0, 0, 0.2, 1] as [number, number, number, number],
                  }}
                >
                  {/* Google icon + Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">{review.name}</p>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  <StarRating rating={review.rating} />

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-5">
                    {review.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={20} className="text-navy" />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight size={20} className="text-navy" />
            </button>
          )}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Cville+Dentist/@38.03,-78.5,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
          >
            Read All Google Reviews
            <ExternalLink size={16} />
          </a>
        </div>

        {/*
          ELFSIGHT WIDGET INTEGRATION POINT
          To connect live Google Reviews that auto-sync:
          1. Sign up at elfsight.com
          2. Create a "Google Reviews" widget
          3. Connect your Google Business Profile for Cville Dentist
          4. Copy the widget code and paste it below

          Example:
          <div className="elfsight-app-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" data-elfsight-app-lazy></div>
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
        */}
      </div>
    </motion.section>
  );
}
