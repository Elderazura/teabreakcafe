'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, ExternalLink } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-mustard/10">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-mustard/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Talk to Us. We Don't <span className="gradient-text">Bite</span>
            <br />
            <span className="text-3xl md:text-4xl">(Unlike Our Burgers)</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Sections */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300"
            >
              <MessageCircle className="w-12 h-12 text-mustard mb-6" />
              <h2 className="font-display text-2xl font-bold mb-4">Customer Service</h2>
              <p className="text-gray-400 mb-6">
                Did we make your day? Did we forget your extra sauce? Let us know. We are obsessed with feedback.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@teabreakcafe.com"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  info@teabreakcafe.com
                </a>
                <a
                  href="tel:+97124442144"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +971 2 444 2144
                </a>
              </div>
            </motion.div>

            {/* Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300"
            >
              <ExternalLink className="w-12 h-12 text-mustard mb-6" />
              <h2 className="font-display text-2xl font-bold mb-4">Delivery</h2>
              <p className="text-gray-400 mb-6">
                Too cozy to leave the couch? We are on all the apps.
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.talabat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Talabat (Look for the Tea Break Logo)
                </a>
                <a
                  href="https://www.deliveroo.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Deliveroo
                </a>
                <a
                  href="https://www.noon.com/uae-en/food"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Noon Food
                </a>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300"
            >
              <Instagram className="w-12 h-12 text-mustard mb-6" />
              <h2 className="font-display text-2xl font-bold mb-4">Social Media</h2>
              <p className="text-gray-400 mb-6">
                Follow us for thirst traps (of tea).
              </p>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/teabreakcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @teabreakcafe
                </a>
                <a
                  href="https://facebook.com/teabreakcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Tea Break Cafe
                </a>
                <a
                  href="https://tiktok.com/@teabreakcafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  @teabreakcafe
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-16 h-16 text-mustard mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Visit Us <span className="gradient-text">In Person</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We have 20+ locations across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah.
            </p>
            <motion.a
              href="/locations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-mustard text-black font-bold text-lg rounded-full hover:bg-mustard-400 transition-colors"
            >
              Find Your Nearest Location
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
