"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { label: "Dental Implants", href: "/dental-implants-charlottesville" },
    { label: "Invisalign", href: "/invisalign-charlottesville" },
    { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry-charlottesville" },
    {
      label: "Emergency Dentistry",
      href: "/emergency-dentist-charlottesville",
    },
    { label: "General Dentistry", href: "/general-dentistry-charlottesville" },
  ];

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "New Patients", href: "/new-patients" },
    { label: "Virginia Dental Club", href: "/virginia-dental-club" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
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
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-1">
                Services
                <ChevronDown size={16} />
              </button>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 group-hover:mt-0"
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-navy hover:bg-cream hover:text-gold first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            {navLinks.slice(1).map((link) => (
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
          <div className="hidden lg:flex items-center gap-4">
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
            className="lg:hidden p-2 text-navy"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
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
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-navy hover:bg-cream hover:text-gold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left text-base font-medium text-navy hover:text-gold flex items-center justify-between"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 space-y-1"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-3 py-2 text-sm text-navy hover:text-gold bg-gray-50 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                    onClick={() => setIsMobileMenuOpen(false)}
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
