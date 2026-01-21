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
            <div className="relative w-full max-w-lg bg-black border-2 border-mustard/30 rounded-3xl overflow-hidden shadow-2xl">
              {/* Close Button - More Prominent */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-20 w-12 h-12 bg-mustard hover:bg-mustard-400 text-black rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 font-bold" />
              </button>

              {/* Header */}
              <div className="relative h-32 bg-gradient-to-br from-mustard/20 to-black border-b border-mustard/20">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/landscape/tb_a7.jpeg"
                    alt="Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full p-4">
                  <div className="text-center">
                    <ShoppingBag className="w-12 h-12 text-mustard mx-auto mb-2" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                      Order from <span className="gradient-text">Tea Break</span>
                    </h2>
                    <p className="text-gray-300 text-sm">Choose your preferred delivery platform</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                {/* Delivery Options */}
                {deliveryOptions.map((option, index) => (
                  <motion.div
                    key={option.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${option.color} border-2 ${option.borderColor} rounded-xl p-4 ${option.hoverColor} transition-all`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{option.icon}</span>
                      <h3 className="font-display text-xl font-bold text-white">{option.name}</h3>
                    </div>
                    <div className="space-y-2">
                      {option.links.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between bg-black/50 hover:bg-black/70 rounded-lg p-3 transition-colors group"
                        >
                          <span className="text-white font-semibold text-sm">{link.label}</span>
                          <ExternalLink className="w-4 h-4 text-mustard group-hover:text-mustard-400 transition-colors" />
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
                  className="bg-gradient-to-br from-mustard/20 to-black border-2 border-mustard/30 rounded-xl p-4 hover:border-mustard transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-6 h-6 text-mustard" />
                    <h3 className="font-display text-xl font-bold text-white">Call to Order</h3>
                  </div>
                  <motion.a
                    href="tel:+97124442144"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between bg-black/50 hover:bg-black/70 rounded-lg p-3 transition-colors group"
                  >
                    <div>
                      <span className="text-white font-semibold block text-sm">Call the Cafe Directly</span>
                      <span className="text-mustard text-xs">+971 2 444 2144</span>
                    </div>
                    <Phone className="w-4 h-4 text-mustard group-hover:text-mustard-400 transition-colors" />
                  </motion.a>
                </motion.div>

                {/* Visit Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center pt-3 border-t border-mustard/20"
                >
                  <p className="text-gray-400 mb-3 text-sm">Or visit us at one of our 20+ locations</p>
                  <motion.a
                    href="/locations"
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-semibold text-sm"
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
