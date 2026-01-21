'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Award, TrendingUp, Users, Mail, Phone, Globe, MapPin, Star, ArrowRight, Sparkles, Zap } from 'lucide-react'
import FoodBanner from '@/components/FoodBanner'
import { useLanguage } from '@/contexts/LanguageContext'

export default function FranchisePage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  const { t, dir } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section - World Domination */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/landscape/franchise/franchise_1.jpeg"
            alt="Tea Break World Domination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            World Domination Plans
            <br />
            <span className="gradient-text">(With Burgers)</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-200 mb-4 drop-shadow-lg"
          >
            We Conquered the UAE. Next Stop? The Planet.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 italic"
          >
            (Okay, maybe just Europe, Africa, and Asia for now. We're humble like that.)
          </motion.p>
        </div>
      </section>

      {/* Section 1: The Growth Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              We Started in a Parking Lot. <span className="gradient-text">Now We're Here.</span>
            </h2>
            <p className="text-xl text-gray-400">From Shahama to Everywhere</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              <p>
                Look, we didn't start with a boardroom full of suits. We started in <span className="text-mustard font-semibold">2014 in Shahama, Abu Dhabi</span>, with a simple idea: "What if fast food didn't taste like cardboard?" and "What if Karak was actually made with love, not just sugar?"
              </p>
              <p>
                The result? <span className="text-mustard font-semibold">Absolute chaos. The good kind.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/landscape/franchise/franchise_2.jpeg"
                alt="Tea Break Growth"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                number: '50+',
                label: 'Outlets (and counting)',
                description: 'We went from 1 humble shop to over 50 outlets across the UAE. That\'s not just growth; that\'s a caffeine-fueled sprint.',
              },
              {
                icon: Award,
                number: '🏆',
                label: 'Home Grown Franchise of the Year',
                description: 'We didn\'t just win hearts; we won metal. Official award from the Arab Franchise Expo. That\'s right, we have a trophy. It\'s shiny.',
              },
              {
                icon: Star,
                number: '10+',
                label: 'Years of Success',
                description: 'Our registers have been ringing non-stop for a decade. We bridged the gap between fancy coffee chains and corner cafeterias.',
              },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-mustard mb-4" />
                  <div className="text-4xl font-bold text-mustard mb-2">{stat.number}</div>
                  <h3 className="font-display text-xl font-bold mb-3">{stat.label}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Food Banner 1 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Premium-Budget Niche That Didn't Exist"
            description="We are cheaper than the fancy coffee chains but way cooler than the corner cafeteria. Our sales graphs look like a staircase to heaven."
            image="/images/landscape/tb_a7.jpeg"
            cta="Join the Movement"
            href="#partner"
            reverse={false}
          />
        </div>
      </section>

      {/* Section 2: The UAE Love Affair */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              We Are Basically a <span className="gradient-text">Cultural Landmark</span> Now
            </h2>
            <p className="text-xl text-gray-400">Why People Are Obsessed</p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                icon: Zap,
                title: 'The "Semi" Cult',
                description: 'We introduced the UAE to the "Semi" cooking method. People didn\'t know they needed a Semi Hot Dog or Semi Pulled Chicken until we gave it to them. Now? They can\'t live without it.',
                highlight: 'Semi Method',
              },
              {
                icon: Star,
                title: 'The Talabat Truth',
                description: 'Check the receipts. With thousands of 5-star reviews, we aren\'t just feeding people; we are saving them from "Hangry" meltdowns. From students in Ajman needing a brain boost to families in Khalifa City needing a weekend feast, we are the first call.',
                highlight: '5-Star Reviews',
              },
              {
                icon: Award,
                title: 'The Verdict',
                description: 'We proved that a homegrown UAE brand could stand toe-to-toe with the big American giants. And honestly? We think our Wagyu Burger wins that fight every time.',
                highlight: 'Wagyu Burger Wins',
              },
            ].map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? -10 : 10 }}
                  className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-mustard/20 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-mustard" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-bold text-mustard mb-3">{point.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{point.description}</p>
                      <div className="mt-4 inline-block px-4 py-2 bg-mustard/20 text-mustard rounded-full text-sm font-semibold">
                        {point.highlight}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-2xl md:text-3xl text-white font-bold">
              In the UAE, you have the <span className="text-mustard">Burj Khalifa</span>, the <span className="text-mustard">Sheikh Zayed Mosque</span>, and then you have a <span className="gradient-text">Tea Break Yellow Cup</span>.
            </p>
            <p className="text-xl text-gray-300 mt-4 italic">
              We didn't just sell tea; we became a habit. A really tasty, slightly addictive habit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Future - Global Expansion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-10 h-10 text-mustard" />
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Europe, Africa, Asia... <span className="gradient-text">You Look Hungry</span>
              </h2>
            </div>
            <p className="text-xl text-gray-400">Pack Your Bags, We're Going Global</p>
            <p className="text-lg text-gray-300 mt-4">
              We've hugged the UAE tight enough. It's time to spread the love. Our passport is ready, and our grill is hot.
            </p>
          </motion.div>

          {/* Destinations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🇪🇺',
                destination: 'Europe',
                mission: 'To save Europe from boring sandwiches.',
                vibe: 'Imagine sipping a Double Saffron Karak in the rain in London, or eating a Cheetos Chicken Burger while walking through Paris. We are bringing the warmth of the desert to the cool streets of Europe.',
                cities: 'London, Paris, Berlin, and more',
              },
              {
                emoji: '🌍',
                destination: 'North Africa',
                mission: 'Returning to the roots of flavor.',
                vibe: 'North Africa knows tea. But they haven\'t tried our tea. We are expanding into the bustling markets of Cairo, Casablanca, and beyond. We are bringing our Fusion Breakfasts and legendary Shakshouka Croissants.',
                cities: 'Cairo, Casablanca, and beyond',
              },
              {
                emoji: '🌏',
                destination: 'East Asia',
                mission: 'The ultimate flavor exchange.',
                vibe: 'East Asia gave the world Boba. We are giving East Asia the Omani Chip Sandwich. Fair trade, right? We are targeting the high-energy cities where innovation meets flavor.',
                cities: 'Tokyo, Seoul, Shanghai, and more',
              },
            ].map((dest, index) => (
              <motion.div
                key={dest.destination}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.03, rotateY: 5 }}
                className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300 relative overflow-hidden group"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-mustard/0 group-hover:bg-mustard/5 transition-colors duration-300 rounded-2xl" />
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{dest.emoji}</div>
                  <h3 className="font-display text-3xl font-bold text-mustard mb-3">{dest.destination}</h3>
                  <p className="text-mustard font-semibold mb-4 italic">"{dest.mission}"</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{dest.vibe}</p>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{dest.cities}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Banner 2 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Taking the 'Semi' Lifestyle International"
            description="We are spreading the Tea Break magic worldwide. One yellow cup at a time."
            image="/images/landscape/tb_a8.jpeg"
            cta="Join the Invasion"
            href="#partner"
            reverse={true}
          />
        </div>
      </section>

      {/* Section 4: Become a Franchise Partner */}
      <section id="partner" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Do You Like Money? Do You Like Burgers? <span className="gradient-text">Keep Reading.</span>
            </h2>
            <p className="text-xl text-gray-400">Let's Make Money & Memories</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* What We Offer */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-3xl font-bold text-mustard mb-8">What We Offer</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingUp,
                    title: 'A Proven Model',
                    description: 'We\'ve made the mistakes so you don\'t have to.',
                  },
                  {
                    icon: Sparkles,
                    title: 'The Menu',
                    description: 'Access to our secret recipes (yes, even the secret sauce).',
                  },
                  {
                    icon: Star,
                    title: 'The Hype',
                    description: 'A brand that comes with a built-in fan base.',
                  },
                  {
                    icon: Users,
                    title: 'The Support',
                    description: 'We train your staff to pour tea from a height without making a mess. (Mostly).',
                  },
                ].map((offer, index) => {
                  const Icon = offer.icon
                  return (
                    <motion.div
                      key={offer.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 bg-black border-2 border-mustard/20 rounded-xl p-6 hover:border-mustard transition-all"
                    >
                      <Icon className="w-6 h-6 text-mustard flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-white mb-2">{offer.title}</h4>
                        <p className="text-gray-300">{offer.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* The Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-3xl font-bold text-mustard mb-8">The Details</h3>
              <div className="space-y-6">
                <div className="bg-black border-2 border-mustard/20 rounded-xl p-6 hover:border-mustard transition-all">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-mustard" />
                    Initial Investment
                  </h4>
                  <p className="text-gray-300 text-lg">
                    Starting from approximately <span className="text-mustard font-bold">AED 200,000</span> (varies by location/planet).
                  </p>
                </div>
                <div className="bg-black border-2 border-mustard/20 rounded-xl p-6 hover:border-mustard transition-all">
                  <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-mustard" />
                    Support
                  </h4>
                  <p className="text-gray-300 text-lg">
                    Complete training, ongoing operational support, and marketing assistance.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-mustard/20 to-black border-2 border-mustard/30 rounded-xl p-6">
                  <p className="text-white text-lg font-semibold">
                    We are looking for partners who are just as crazy as we are. If you want to bring the Tea Break magic to your city (whether that's Manchester or Marrakech), we want to talk.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/landscape/franchise/franchise_1.jpeg"
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
              Ready to Break the Internet <span className="gradient-text">(and Some Eggs)?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Tea Break Cafe: Taking over the world, one yellow cup at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:franchise@teabreakcafe.com"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-mustard text-black font-bold text-lg rounded-full hover:bg-mustard-400 transition-colors shadow-lg shadow-mustard/50"
              >
                <Mail className="w-5 h-5" />
                franchise@teabreakcafe.com
              </motion.a>
              <motion.a
                href="tel:+97124442144"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-bold text-lg"
              >
                <Phone className="w-5 h-5" />
                +971 2 444 2144
              </motion.a>
            </div>
            <p className="text-gray-400 mt-8 text-sm">
              Call the Boss. We answer. (Usually during business hours.)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
