"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCategory {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceCategories: ServiceCategory[] = [
    {
      label: "Dental Implants",
      href: "/dental-implants-charlottesville",
      children: [
        { label: "Implant Placement", href: "/dental-implants-charlottesville/implant-placement" },
        { label: "Implant Restorations", href: "/dental-implants-charlottesville/implant-restorations" },
        { label: "All-on-4 Implants", href: "/dental-implants-charlottesville/all-on-4" },
      ],
    },
    {
      label: "Invisalign",
      href: "/invisalign-charlottesville",
      children: [
        { label: "Invisalign for Adults", href: "/invisalign-charlottesville/adults" },
        { label: "Invisalign for Teens", href: "/invisalign-charlottesville/teens" },
        { label: "Invisalign Cost", href: "/invisalign-charlottesville/cost" },
      ],
    },
    {
      label: "Cosmetic Dentistry",
      href: "/cosmetic-dentistry-charlottesville",
      children: [
        { label: "Porcelain Veneers", href: "/cosmetic-dentistry-charlottesville/veneers" },
        { label: "Dental Bonding", href: "/cosmetic-dentistry-charlottesville/bonding" },
        { label: "Smile Makeovers", href: "/cosmetic-dentistry-charlottesville/smile-makeovers" },
        { label: "Teeth Whitening", href: "/cosmetic-dentistry-charlottesville/whitening" },
      ],
    },
    {
      label: "General Dentistry",
      href: "/general-dentistry-charlottesville",
      children: [
        { label: "Cleanings & Exams", href: "/general-dentistry-charlottesville/cleanings-exams" },
        { label: "Dental Crowns", href: "/general-dentistry-charlottesville/dental-crowns" },
        { label: "Dental Bridges", href: "/general-dentistry-charlottesville/dental-bridges" },
        { label: "Dental Fillings", href: "/general-dentistry-charlottesville/dental-fillings" },
        { label: "Tooth Extractions", href: "/general-dentistry-charlottesville/tooth-extractions" },
        { label: "Root Canal", href: "/general-dentistry-charlottesville/root-canal" },
        { label: "Night Guards", href: "/general-dentistry-charlottesville/night-guards" },
        { label: "Dental Sealants", href: "/general-dentistry-charlottesville/dental-sealants" },
        { label: "Fluoride Treatment", href: "/general-dentistry-charlottesville/fluoride-treatment" },
        { label: "Dentures", href: "/general-dentistry-charlottesville/dentures" },
        { label: "Deep Cleaning", href: "/general-dentistry-charlottesville/deep-cleaning" },
        { label: "Oral Cancer Screening", href: "/general-dentistry-charlottesville/oral-cancer-screening" },
      ],
    },
    {
      label: "Emergency Dentistry",
      href: "/emergency-dentist-charlottesville",
    },
    {
      label: "Same-Day Crowns",
      href: "/same-day-crowns",
    },
  ];

  const moreLinks: ServiceCategory[] = [
    {
      label: "Specialty",
      href: "#",
      children: [
        { label: "Sedation Dentistry", href: "/sedation-dentistry" },
        { label: "Wisdom Teeth", href: "/wisdom-teeth" },
        { label: "TMJ Treatment", href: "/tmj-treatment" },
        { label: "Pediatric Dentistry", href: "/pediatric-dentistry" },
        { label: "Senior Dental Care", href: "/senior-dental-care" },
      ],
    },
    {
      label: "Technology",
      href: "#",
      children: [
        { label: "Digital X-Rays", href: "/technology/digital-xrays" },
        { label: "iTero Scanner", href: "/technology/itero-scanner" },
        { label: "Intraoral Cameras", href: "/technology/intraoral-cameras" },
      ],
    },
  ];

  const aboutLinks = [
    { label: "About Dr. Karamcheti", href: "/about" },
    { label: "Our Team", href: "/about/team" },
    { label: "Our Technology", href: "/about/technology" },
    { label: "Comfort & Amenities", href: "/about/comfort" },
  ];

  const navLinks = [
    { label: "New Patients", href: "/new-patients" },
    { label: "Virginia Dental Club", href: "/virginia-dental-club" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="font-heading text-2xl font-bold text-navy">
              Willis & Associates
            </div>
            <div className="text-xs text-gold tracking-widest">
              FAMILY DENTISTRY
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1" ref={dropdownRef}>
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-1"
              >
                About
                <ChevronDown size={14} />
              </Link>
              {activeDropdown === "about" && (
                <div className="absolute left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-navy hover:bg-cream hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={14} />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[680px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 z-50">
                  <div className="grid grid-cols-3 gap-6">
                    {serviceCategories.map((cat) => (
                      <div key={cat.href}>
                        <Link
                          href={cat.href}
                          className="text-sm font-semibold text-navy hover:text-gold transition-colors block mb-2"
                        >
                          {cat.label}
                        </Link>
                        {cat.children && (
                          <div className="space-y-1">
                            {cat.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block text-xs text-gray-600 hover:text-gold transition-colors py-1"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                    {moreLinks.map((section) => (
                      <div key={section.label}>
                        <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">
                          {section.label}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {section.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="text-xs text-gray-600 hover:text-gold transition-colors py-1"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Phone */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="tel:(434)973-5873"
              className="text-xs text-navy hover:text-gold transition-colors"
            >
              (434) 973-5873
            </a>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gold text-navy font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-navy"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* About Section */}
                <div className="px-3 py-2">
                  <button
                    onClick={() =>
                      setActiveMobileSection(
                        activeMobileSection === "about" ? null : "about"
                      )
                    }
                    className="w-full text-left text-base font-medium text-navy hover:text-gold flex items-center justify-between"
                  >
                    About
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        activeMobileSection === "about" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileSection === "about" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 space-y-1"
                      >
                        {aboutLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2 text-sm text-navy hover:text-gold bg-gray-50 rounded-md"
                            onClick={closeMobile}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Section */}
                <div className="px-3 py-2">
                  <button
                    onClick={() =>
                      setActiveMobileSection(
                        activeMobileSection === "services" ? null : "services"
                      )
                    }
                    className="w-full text-left text-base font-medium text-navy hover:text-gold flex items-center justify-between"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        activeMobileSection === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeMobileSection === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 space-y-2"
                      >
                        {serviceCategories.map((cat) => (
                          <div key={cat.href}>
                            <Link
                              href={cat.href}
                              className="block px-3 py-2 text-sm font-semibold text-navy hover:text-gold"
                              onClick={closeMobile}
                            >
                              {cat.label}
                            </Link>
                            {cat.children && (
                              <div className="ml-4 space-y-1">
                                {cat.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block px-3 py-1.5 text-xs text-gray-600 hover:text-gold"
                                    onClick={closeMobile}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="pt-2 border-t border-gray-100">
                          <p className="px-3 py-1 text-xs font-semibold text-gold uppercase tracking-wider">
                            Specialty
                          </p>
                          {moreLinks[0].children?.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-3 py-1.5 text-xs text-gray-600 hover:text-gold"
                              onClick={closeMobile}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-gray-100">
                          <p className="px-3 py-1 text-xs font-semibold text-gold uppercase tracking-wider">
                            Technology
                          </p>
                          {moreLinks[1].children?.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-3 py-1.5 text-xs text-gray-600 hover:text-gold"
                              onClick={closeMobile}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Regular Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-cream hover:text-gold"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* More Pages */}
                <Link
                  href="/insurance-financing"
                  className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-cream hover:text-gold"
                  onClick={closeMobile}
                >
                  Insurance & Financing
                </Link>
                <Link
                  href="/patient-forms"
                  className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-cream hover:text-gold"
                  onClick={closeMobile}
                >
                  Patient Forms
                </Link>

                <div className="px-3 py-2 border-t border-gray-200 mt-2">
                  <a
                    href="tel:(434)973-5873"
                    className="block text-sm text-gold font-semibold mb-3"
                  >
                    (434) 973-5873
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full px-4 py-2 bg-gold text-navy font-semibold rounded-full text-center hover:bg-opacity-90 transition-all"
                    onClick={closeMobile}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
