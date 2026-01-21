'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/teabreakcafe', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/teabreakcafe', label: 'Facebook' },
    { icon: Mail, href: 'mailto:info@teabreakcafe.com', label: 'Email' },
  ]

  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/menu', label: 'Menu' },
    { href: '/locations', label: 'Locations' },
    { href: '/franchise', label: 'Franchise' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-black border-t border-mustard/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative w-14 h-14 flex items-center justify-center"
              >
                <Image
                  src="/logos/teabreak_logo.png"
                  alt="Tea Break Cafe Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </motion.div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Official Sponsor of Your Cheat Day. Fresh Wagyu, homemade buns, and regrets? Never heard of them.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-mustard/20 rounded-full flex items-center justify-center text-mustard hover:bg-mustard hover:text-black transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-mustard transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="text-mustard mt-1 flex-shrink-0" size={18} />
                <a href="tel:+97124442144" className="text-gray-400 hover:text-mustard transition-colors">
                  +971 2 444 2144
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-mustard mt-1 flex-shrink-0" size={18} />
                <a href="mailto:info@teabreakcafe.com" className="text-gray-400 hover:text-mustard transition-colors">
                  info@teabreakcafe.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-mustard mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  20+ Locations across UAE
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mustard/20 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Tea Break Cafe. All rights reserved. | Home Grown Franchise of the Year</p>
        </div>
      </div>
    </footer>
  )
}
