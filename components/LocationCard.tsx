'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Location {
  name: string
  vibe?: string
  address: string
  phone: string
  hours?: string
  coordinates: { lat: number; lng: number }
  mapDescription?: string
  mapUrl?: string
}

interface LocationCardProps {
  location: Location
  index: number
  city: string
}

export default function LocationCard({ location, index, city }: LocationCardProps) {
  const { t } = useLanguage()
  const googleMapsUrl = location.mapUrl || `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`
  const telUrl = `tel:${location.phone.split(' / ')[0].replace(/\s/g, '').replace(/-/g, '')}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
      className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 group"
    >
      {/* Map Preview */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative h-48 overflow-hidden block bg-mustard/10"
      >
        {/* Google Maps Embed (will show link if no API key) */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-mustard/20 to-black">
          <div className="text-center p-4">
            <Navigation className="w-12 h-12 text-mustard mx-auto mb-2" />
            <p className="text-mustard font-bold">View on Google Maps</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 right-3 bg-mustard text-black px-3 py-1 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Click to view
        </div>
      </a>

      {/* Location Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-mustard mb-1 group-hover:text-mustard-400 transition-colors">
              {location.name}
            </h3>
            {location.vibe && (
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-mustard" />
                <p className="text-sm text-gray-400 italic">"{location.vibe}"</p>
              </div>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 mb-4">
          <MapPin className="w-5 h-5 text-mustard flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-gray-300 text-sm leading-relaxed">{location.address}</p>
            {location.mapDescription && (
              <p className="text-gray-500 text-xs italic mt-1">{location.mapDescription}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 mb-3">
          <Phone className="w-5 h-5 text-mustard flex-shrink-0" />
          <a
            href={telUrl}
            className="text-gray-300 text-sm hover:text-mustard transition-colors"
          >
            {location.phone}
          </a>
        </div>

        {/* Hours */}
        {location.hours && (
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-mustard flex-shrink-0" />
            <p className="text-gray-300 text-sm">{location.hours}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <motion.a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-mustard/20 text-mustard rounded-lg hover:bg-mustard hover:text-black transition-colors text-sm font-semibold"
          >
            <Navigation className="w-4 h-4" />
            {t('locations.card.directions')}
          </motion.a>
          <motion.a
            href={telUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-mustard text-black rounded-lg hover:bg-mustard-400 transition-colors text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            {t('locations.card.callStore')}
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
