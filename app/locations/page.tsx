'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MapPin, Phone, Clock, Navigation, Search, Filter, X, Star, Sparkles, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import LocationCard from '@/components/LocationCard'
import FoodBanner from '@/components/FoodBanner'
import { useLanguage } from '@/contexts/LanguageContext'

// Location data structure combining JSON with existing data
const locationsByCity = [
  {
    city: 'Abu Dhabi',
    label: 'The Heartland',
    branches: [
      {
        name: 'Al Nahyan (The OG)',
        vibe: 'The heartbeat of the operation. Always buzzing, perfect for people-watching.',
        address: 'Thanyat Al Hidan St, Zone 1. Near Zoal Corner and Rain Cafe.',
        phone: '02 444 2144',
        hours: 'Daily 06:00 AM – 03:00 AM',
        mapDescription: 'Located on Thanyat Al Hidan St. Look for the crowd of happy people.',
        mapUrl: 'https://goo.gl/maps/y3h9sUxjjb6YTf4b8',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
      {
        name: 'Airport Road (Al Mushrif)',
        vibe: 'The late-night hero. Open until 3 AM for your insomnia cravings.',
        address: '816 Sheikh Rashid Bin Saeed Street (Airport Road), Al Mushrif area.',
        phone: '02 671 2356 / 054 439 9918',
        hours: 'Daily 06:00 AM – 03:00 AM',
        mapUrl: 'https://maps.app.goo.gl/3N4MnYxGFVdAy8nJA',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
      {
        name: 'Khalifa City A',
        vibe: 'Suburban chill. Spacious and family-friendly.',
        address: 'Market Area, Opposite Ibn Nafees Medical Center, Near International Hypermarket.',
        phone: '02 444 1499 / 050 483 2217',
        mapDescription: 'In the heart of the Khalifa City Market. Park up and come in.',
        mapUrl: 'https://goo.gl/maps/H2kQfjB18zWjJKB58',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
      {
        name: 'Al Maqta (Rabdan)',
        vibe: 'The Pitstop. Ideal for a quick Karak on the go.',
        address: 'Al Maqta St, Rabdan Area (near Al Qana).',
        phone: '02 558 8141 / 056 526 5688',
        hours: 'Daily 06:00 AM – 03:00 AM',
        mapUrl: 'https://maps.app.goo.gl/x7kHHmQSmeyyZvUt6',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
      {
        name: 'Tourist Club Area (Al Zahiyah)',
        vibe: 'City slicker energy. Fast and furious.',
        address: 'Opposite Kia Motors, Tourist Club Area.',
        phone: '02 671 2356 / 054 439 9918',
        mapUrl: 'https://maps.app.goo.gl/mJNfEvZdWkNsfqsWA',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
      {
        name: 'Mafraq',
        address: 'Building No 87, Mafraq Road.',
        phone: '02 565 1009 / 050 995 4772',
        mapUrl: 'https://goo.gl/maps/roxu6D5nTDwEacyx7',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
      {
        name: 'Al Markaziya',
        address: 'Opposite Hamdan Center, Hamdan Street.',
        phone: '02 622 7875 / 054 439 9974',
        mapUrl: 'https://goo.gl/maps/9BecR8XGXXzAJAt69',
        coordinates: { lat: 24.4539, lng: 54.3773 },
      },
    ],
  },
  {
    city: 'Dubai',
    label: 'The Expansion',
    branches: [
      {
        name: 'Al Warqa 1',
        vibe: 'Neighborhood gem.',
        address: 'Ground Floor, Awqaf Building No. 13, Behind Life Pharmacy.',
        phone: '04 283 3323 / 050 467 5787',
        hours: '05:30 AM – 02:00 AM',
        mapUrl: 'https://goo.gl/maps/U5V8ebYxNrTk2JVe6',
        coordinates: { lat: 25.2048, lng: 55.2708 },
      },
      {
        name: 'JLT (Jumeirah Lakes Towers)',
        vibe: 'Office escape. Where business meets burgers.',
        address: 'Basement Level, HDS Tower, Cluster F.',
        phone: '04 399 9337 / 056 411 7723',
        mapDescription: 'Head down to the basement in Cluster F. It\'s a hidden treasure.',
        mapUrl: 'https://goo.gl/maps/YCz6ZqrBE9VMD2UB7',
        coordinates: { lat: 25.0657, lng: 55.1428 },
      },
    ],
  },
  {
    city: 'Northern Emirates',
    label: 'The Frontier',
    branches: [
      {
        name: 'Ajman (Al Jurf)',
        vibe: 'Student central (Near the University).',
        address: 'Ahmed Bin Hanbal Street, Opposite Ajman University, Shop No 4.',
        phone: '06 546 7888 / 054 702 3475',
        mapUrl: 'https://goo.gl/maps/4QG25c6zgSSvm6fG8',
        coordinates: { lat: 25.4052, lng: 55.5136 },
      },
      {
        name: 'Ras Al Khaimah (Al Nakheel)',
        vibe: 'The Northern Star.',
        address: 'Near Old Fish Market, Sheikh Muhammad Bin Salem Road.',
        phone: '07 556 6155 / 050 620 4232',
        mapUrl: 'https://goo.gl/maps/e2uPBMkywhXTUKvv7',
        coordinates: { lat: 25.7889, lng: 55.9590 },
        note: 'New Branch Alert: Coming soon to Mina Al Arab!',
      },
      {
        name: 'Ras Al Khaimah (Mina Al Arab)',
        address: 'Mina Al Arab Area.',
        phone: '07 556 6155 / 050 620 4232',
        mapUrl: 'https://maps.app.goo.gl/RgMDA2YDBmQYWX6Q9',
        coordinates: { lat: 25.7889, lng: 55.9590 },
      },
      {
        name: 'Fujairah',
        address: 'Box Yard, Corniche Road.',
        phone: '09 224 2110 / 050 975 7734',
        mapUrl: 'https://g.co/kgs/6KLgBHW',
        coordinates: { lat: 25.1288, lng: 56.3264 },
      },
      {
        name: 'Sharjah',
        address: 'Sharjah Area.',
        phone: '09 224 4777 / 050 124 6698',
        mapUrl: 'https://goo.gl/maps/8oYmQwLEdHrfKs619',
        coordinates: { lat: 25.3573, lng: 55.4033 },
      },
    ],
  },
]

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  const { t, dir } = useLanguage()

  // Get all locations for the main map
  const allLocations = locationsByCity.flatMap(city => 
    city.branches.map(branch => ({ ...branch, city: city.city }))
  )

  // Filter locations based on search and city
  const filteredCities = locationsByCity.map(city => ({
    ...city,
    branches: city.branches.filter(branch => {
      const matchesSearch = !searchQuery || 
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCity = !selectedCity || city.city === selectedCity
      return matchesSearch && matchesCity
    })
  })).filter(city => city.branches.length > 0)

  // Generate main map URL with all locations
  const mainMapUrl = `https://www.google.com/maps/search/Tea+Break+Cafe+${locationsByCity.map(c => c.city).join('+')}`

  return (
    <div className="pt-20">
      {/* Hero Section with Map Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-mustard/20">
            <Image
              src="/images/landscape/tb_a7.jpeg"
              alt="UAE Map Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            {t('locations.hero.title')} <span className="gradient-text">{t('locations.hero.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg"
          >
            {t('locations.hero.subtitle')}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-white"
          >
            <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-mustard/30">
              <span className="text-mustard font-bold text-2xl">{allLocations.length}+</span>
              <span className="ml-2">{t('locations.hero.locations')}</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-mustard/30">
              <span className="text-mustard font-bold text-2xl">3</span>
              <span className="ml-2">{t('locations.hero.cities')}</span>
            </div>
            <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-mustard/30">
              <span className="text-mustard font-bold text-2xl">24/7</span>
              <span className="ml-2">{t('locations.hero.stores')}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5 sticky top-20 z-40 backdrop-blur-md border-b border-mustard/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-mustard w-5 h-5" />
              <input
                type="text"
                placeholder={t('locations.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border-2 border-mustard/20 rounded-full text-white placeholder-gray-400 focus:border-mustard focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-mustard"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* City Filter */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setSelectedCity(null)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  !selectedCity
                    ? 'bg-mustard text-black'
                    : 'bg-black/50 border-2 border-mustard/20 text-mustard hover:border-mustard'
                }`}
              >
                {t('locations.search.allCities')}
              </button>
              {locationsByCity.map((city) => (
                <button
                  key={city.city}
                  onClick={() => setSelectedCity(city.city)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    selectedCity === city.city
                      ? 'bg-mustard text-black'
                      : 'bg-black/50 border-2 border-mustard/20 text-mustard hover:border-mustard'
                  }`}
                >
                  {city.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Map View - All Locations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-mustard/5 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('locations.map.title')} <span className="gradient-text">{t('locations.map.title')}</span>
            </h2>
            <p className="text-gray-400">{t('locations.map.desc')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-mustard/20 hover:border-mustard transition-colors group"
          >
            <a
              href={`https://www.google.com/maps/search/Tea+Break+Cafe+${locationsByCity.map(c => c.city).join('+')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative bg-gradient-to-br from-mustard/20 to-black"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Navigation className="w-20 h-20 text-mustard mx-auto mb-4 animate-pulse" />
                  <p className="text-white text-xl font-bold mb-2">{t('locations.map.title')}</p>
                  <p className="text-gray-300">{t('locations.map.desc')}</p>
                </div>
              </div>
              {/* Location markers visualization */}
              <div className="absolute inset-0">
                {allLocations.slice(0, 10).map((loc, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute w-4 h-4 bg-mustard rounded-full shadow-lg shadow-mustard/50"
                    style={{
                      left: `${20 + (idx % 5) * 15}%`,
                      top: `${20 + Math.floor(idx / 5) * 20}%`,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-mustard text-black px-6 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                {t('locations.map.clickToView')}
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Food Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Find Your Nearest Tea Break"
            description="With 20+ locations across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah, there is always a Tea Break near you. Fresh food and Karak, just around the corner."
            image="/images/landscape/tb_a7.jpeg"
            cta="View Menu"
            href="/menu"
            reverse={false}
          />
        </div>
      </section>

      {/* Locations by City */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCities.map((cityGroup, cityIndex) => (
            <motion.div
              key={cityGroup.city}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: cityIndex * 0.2 }}
              className="mb-20"
            >
              {/* City Header */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">
                    {cityGroup.city}
                  </h2>
                  <p className="text-mustard text-xl">{cityGroup.label}</p>
                </div>
                <div className="bg-mustard/20 px-6 py-3 rounded-full border-2 border-mustard/30">
                  <span className="text-mustard font-bold text-2xl">{cityGroup.branches.length}</span>
                  <span className="text-gray-300 ml-2">locations</span>
                </div>
              </div>

              {/* Locations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityGroup.branches.map((branch, branchIndex) => (
                  <LocationCard
                    key={branch.name}
                    location={branch}
                    index={branchIndex}
                    city={cityGroup.city}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {filteredCities.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl mb-4">No locations found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCity(null)
                }}
                className="px-6 py-3 bg-mustard text-black rounded-full font-semibold hover:bg-mustard-400 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/landscape/tb_a12.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Can't Find Your <span className="gradient-text">Location?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Give us a call and we'll help you find the nearest Tea Break.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+97124442144"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-mustard/50"
              >
                <Phone className="w-5 h-5" />
                Call HQ: +971 2 444 2144
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
