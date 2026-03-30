import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Virginia Dental Club Callout */}
      <div className="bg-gradient-to-r from-gold to-gold bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/virginia-dental-club"
            className="flex items-center justify-between text-navy font-semibold hover:opacity-80 transition-opacity"
          >
            <span>No Insurance? Join the Virginia Dental Club</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Practice Info */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">
              Willis & Associates
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="block font-semibold mb-1">Address</span>
                2375 Commonwealth Dr # A
                <br />
                Charlottesville, VA 22901
              </p>
              <p>
                <span className="block font-semibold mb-1">Phone</span>
                <a
                  href="tel:(434)973-5873"
                  className="hover:text-gold transition-colors"
                >
                  (434) 973-5873
                </a>
              </p>
              <p>
                <span className="block font-semibold mb-1">Emergency</span>
                <a
                  href="tel:434-922-0340"
                  className="hover:text-gold transition-colors"
                >
                  434-922-0340
                </a>
              </p>
              <p>
                <span className="block font-semibold mb-1">Email</span>
                <a
                  href="mailto:info@cvilledentist.com"
                  className="hover:text-gold transition-colors"
                >
                  info@cvilledentist.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Dr. Karamcheti</Link></li>
              <li><Link href="/about/team" className="hover:text-gold transition-colors">Our Team</Link></li>
              <li><Link href="/new-patients" className="hover:text-gold transition-colors">New Patients</Link></li>
              <li><Link href="/reviews" className="hover:text-gold transition-colors">Patient Reviews</Link></li>
              <li><Link href="/insurance-financing" className="hover:text-gold transition-colors">Insurance & Financing</Link></li>
              <li><Link href="/patient-forms" className="hover:text-gold transition-colors">Patient Forms</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/dental-implants-charlottesville" className="hover:text-gold transition-colors">Dental Implants</Link></li>
              <li><Link href="/invisalign-charlottesville" className="hover:text-gold transition-colors">Invisalign</Link></li>
              <li><Link href="/cosmetic-dentistry-charlottesville" className="hover:text-gold transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/emergency-dentist-charlottesville" className="hover:text-gold transition-colors">Emergency Dentistry</Link></li>
              <li><Link href="/general-dentistry-charlottesville" className="hover:text-gold transition-colors">General Dentistry</Link></li>
              <li><Link href="/same-day-crowns" className="hover:text-gold transition-colors">Same-Day Crowns</Link></li>
              <li><Link href="/sedation-dentistry" className="hover:text-gold transition-colors">Sedation Dentistry</Link></li>
              <li><Link href="/wisdom-teeth" className="hover:text-gold transition-colors">Wisdom Teeth</Link></li>
              <li><Link href="/tmj-treatment" className="hover:text-gold transition-colors">TMJ Treatment</Link></li>
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">More Care</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/pediatric-dentistry" className="hover:text-gold transition-colors">Pediatric Dentistry</Link></li>
              <li><Link href="/senior-dental-care" className="hover:text-gold transition-colors">Senior Dental Care</Link></li>
              <li><Link href="/general-dentistry-charlottesville/cleanings-exams" className="hover:text-gold transition-colors">Cleanings & Exams</Link></li>
              <li><Link href="/general-dentistry-charlottesville/dental-crowns" className="hover:text-gold transition-colors">Dental Crowns</Link></li>
              <li><Link href="/general-dentistry-charlottesville/dental-fillings" className="hover:text-gold transition-colors">Dental Fillings</Link></li>
              <li><Link href="/general-dentistry-charlottesville/root-canal" className="hover:text-gold transition-colors">Root Canal</Link></li>
              <li><Link href="/general-dentistry-charlottesville/dentures" className="hover:text-gold transition-colors">Dentures</Link></li>
              <li><Link href="/virginia-dental-club" className="hover:text-gold transition-colors">Virginia Dental Club</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="font-semibold">Monday - Thursday</span>
                <p>8:00 AM - 5:00 PM</p>
              </li>
              <li>
                <span className="font-semibold">Friday - Sunday</span>
                <p>Closed</p>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-gold text-navy font-semibold rounded-full hover:bg-opacity-90 transition-all text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} Willis & Associates Family Dentistry. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <p>
                Powered by{" "}
                <span className="text-gold font-semibold">Denovia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
