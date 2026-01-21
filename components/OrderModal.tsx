'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, ExternalLink, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const deliveryOptions = [
    {
      name: 'Talabat',
      links: [
        { label: 'Tea Break (Dubai)', url: 'https://www.talabat.com/uae/tea-break-2' },
        { label: 'Tea Break Cafe (The Old Market)', url: 'https://www.talabat.com/uae/tea-break-cafe-the-old-market' },
      ],
      icon: '🛵',
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-500',
    },
    {
      name: 'Noon Food',
      links: [
        { label: 'Tea Break on Noon Food', url: 'https://food.noon.com/outlet/TBRKLD4QYC/' },
      ],
      icon: '📱',
      color: 'from-orange-500/20 to-orange-600/20',
      borderColor: 'border-orange-500/30',
      hoverColor: 'hover:border-orange-500',
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-2xl bg-black border-2 border-mustard/30 rounded-3xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-mustard/20 hover:bg-mustard text-mustard hover:text-black rounded-full flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="relative h-48 bg-gradient-to-br from-mustard/20 to-black border-b border-mustard/20">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/landscape/tb_a7.jpeg"
                    alt="Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full p-6">
                  <div className="text-center">
                    <ShoppingBag className="w-16 h-16 text-mustard mx-auto mb-4" />
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                      Order from <span className="gradient-text">Tea Break</span>
                    </h2>
                    <p className="text-gray-300">Choose your preferred delivery platform</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Delivery Options */}
                {deliveryOptions.map((option, index) => (
                  <motion.div
                    key={option.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${option.color} border-2 ${option.borderColor} rounded-2xl p-6 ${option.hoverColor} transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{option.icon}</span>
                      <h3 className="font-display text-2xl font-bold text-white">{option.name}</h3>
                    </div>
                    <div className="space-y-3">
                      {option.links.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between bg-black/50 hover:bg-black/70 rounded-xl p-4 transition-colors group"
                        >
                          <span className="text-white font-semibold">{link.label}</span>
                          <ExternalLink className="w-5 h-5 text-mustard group-hover:text-mustard-400 transition-colors" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Call to Order */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-mustard/20 to-black border-2 border-mustard/30 rounded-2xl p-6 hover:border-mustard transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="w-8 h-8 text-mustard" />
                    <h3 className="font-display text-2xl font-bold text-white">Call to Order</h3>
                  </div>
                  <motion.a
                    href="tel:+97124442144"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between bg-black/50 hover:bg-black/70 rounded-xl p-4 transition-colors group"
                  >
                    <div>
                      <span className="text-white font-semibold block">Call the Cafe Directly</span>
                      <span className="text-mustard text-sm">+971 2 444 2144</span>
                    </div>
                    <Phone className="w-5 h-5 text-mustard group-hover:text-mustard-400 transition-colors" />
                  </motion.a>
                </motion.div>

                {/* Visit Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center pt-4 border-t border-mustard/20"
                >
                  <p className="text-gray-400 mb-4">Or visit us at one of our 20+ locations</p>
                  <motion.a
                    href="/locations"
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-semibold"
                  >
                    Find a Location
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
