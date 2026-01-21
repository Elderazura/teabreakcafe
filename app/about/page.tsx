'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Coffee, Heart, Users, ArrowRight, Sparkles, Zap, Clock, ChefHat } from 'lucide-react'
import { useRef } from 'react'
import FoodBanner from '@/components/FoodBanner'
import ImageSlider from '@/components/ImageSlider'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const { t, dir } = useLanguage()
  
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const featuredFoods = [
    {
      name: 'Wagyu Burger',
      description: 'Premium 100% Wagyu beef, house sauce, creamy cheddar. The burger that started it all.',
      image: '/images/landscape/tb_a4.jpeg',
    },
    {
      name: 'Double Saffron Karak',
      description: 'The tea that made us famous. Double the saffron, double the luxury.',
      image: '/images/landscape/tb_a2.jpeg',
    },
    {
      name: 'Semi Pulled Chicken',
      description: 'Our signature Semi method. Fresh, fast, flavorful.',
      image: '/images/landscape/tb_a6.jpeg',
    },
    {
      name: 'Cheetos Chicken Burger',
      description: 'The viral sensation. Orange, crunchy, chaotic perfection.',
      image: '/images/landscape/tb_a1.jpeg',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section with About Images */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/landscape/about/about1.webp"
            alt="Tea Break Cafe Story"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Animated Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-mustard/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-40 h-40 bg-mustard/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            {t('about.hero.title')} <span className="gradient-text">{t('about.hero.title')}</span>
            <br />
            {t('about.hero.title2')} <span className="gradient-text">{t('about.hero.title2')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg"
          >
            Our journey from a small tea shop to 20+ locations across the UAE
          </motion.p>
        </div>
      </section>

      {/* Origin Story with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/landscape/about/about2.webp"
                alt="Our Beginning in Shahama"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="gradient-text">Origin Story</span>
              </h2>
              <p>
                Let's rewind to <span className="text-mustard font-semibold">2013</span>. The place: Shahama, Abu Dhabi. The mission: To save the world from bad tea and boring burgers. Our founder, Mr. Shahaban, looked around and saw a sea of sameness. He didn't want to open just another cafeteria; he wanted to create a <span className="text-mustard font-semibold">'Tea Break'</span>—a literal pause button in the chaotic soundtrack of UAE life.
              </p>
              <p>
                We started small. But word travels fast when your Karak hits different and your Wagyu doesn't cost a kidney. We obsessed over the details. We decided to bake our own bread because we have trust issues with store-bought buns. We developed the <span className="text-mustard font-semibold">'Semi'</span> cooking method—searing flavor in minutes—because nobody likes waiting for fast food.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Showcase Banner 1 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Fresh. Daily. Always."
            description="Our buns? Baked fresh daily in our own bakery. Our meat? Marinated in-house until it's so tender it practically sings. We don't do frozen. We aren't a Disney movie."
            image="/images/landscape/tb_a5.jpeg"
            cta="See Our Menu"
            href="/menu"
            reverse={false}
          />
        </div>
      </section>

      {/* Today Section with Image */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Fast Forward to <span className="gradient-text">Today</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From one teapot to an empire across the UAE
            </p>
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
                Fast forward to today, and we're kind of a big deal. We were named the <span className="text-mustard font-semibold">'Home Grown Franchise of the Year'</span> by the Arab Franchise Expo. We have over <span className="text-mustard font-semibold">20 outlets</span> across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah.
              </p>
              <p>
                But despite the awards and the fancy 'franchise' title, we're still the same folks who believe that a cup of tea can fix almost anything.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/landscape/about/about3.webp"
                alt="Tea Break Today"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Award Winning', description: 'Home Grown Franchise of the Year', color: 'from-mustard/30 to-yellow-500/20' },
              { icon: Coffee, title: 'Fresh Daily', description: 'Baked in-house, marinated fresh', color: 'from-mustard/30 to-amber-500/20' },
              { icon: Heart, title: 'Made with Love', description: 'Since 2013, same passion', color: 'from-mustard/30 to-pink-500/20' },
              { icon: Users, title: '20+ Locations', description: 'Across the UAE', color: 'from-mustard/30 to-blue-500/20' },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-black border-2 border-mustard/30 rounded-2xl p-8 text-center hover:border-mustard transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-12 h-12 text-mustard mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Food Showcase Banner 2 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="The Semi Philosophy"
            description="It's not fast food; it's fast gourmet. Fresh on the spot, searing flavor in minutes. Maximum flavor, minimum wait. That's the Semi lifestyle."
            image="/images/landscape/tb_a3.jpeg"
            cta="Try Semi Items"
            href="/menu"
            reverse={true}
          />
        </div>
      </section>

      {/* Featured Food Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Signature Dishes</span>
            </h2>
            <p className="text-xl text-gray-400">The food that made us famous</p>
          </motion.div>

          {/* Image Slider */}
          <div className="mb-12 h-[500px] rounded-3xl overflow-hidden">
            <ImageSlider 
              images={featuredFoods.map(food => food.image)}
              autoSlide={true}
              slideInterval={4000}
            />
          </div>

          {/* Food Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredFoods.map((food, index) => (
              <motion.div
                key={food.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={food.image}
                      alt={food.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-mustard mb-2 group-hover:text-mustard-400 transition-colors">
                      {food.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{food.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors"
            >
              Explore Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* The Semi Philosophy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              whileInView={{ scale: [1, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChefHat className="w-16 h-16 text-mustard mx-auto mb-6" />
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              The <span className="gradient-text">'Semi'</span> Philosophy
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                You've seen it on the menu. <span className="text-mustard font-semibold">'Semi Hot Dog'</span>. <span className="text-mustard font-semibold">'Semi Pulled Chicken'</span>. You probably asked, "Does that mean it's half raw?"
              </p>
              <motion.p 
                className="text-3xl text-mustard font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                No, friend.
              </motion.p>
              <p>
                It means we cook it fresh on the spot, searing the flavor in quickly so it stays juicy. It's not fast food; it's <span className="text-mustard font-semibold">fast gourmet</span>. It's the 'Semi' lifestyle—maximum flavor, minimum wait.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/landscape/tb_a7.jpeg"
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
              Ready to Experience <span className="gradient-text">Tea Break?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Visit us at one of our 20+ locations or order online for delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors"
              >
                View Menu
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors"
              >
                Find Locations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
