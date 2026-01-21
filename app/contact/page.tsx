'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, ExternalLink, ArrowRight } from 'lucide-react'
import SocialFeed from '@/components/SocialFeed'
import FoodBanner from '@/components/FoodBanner'
import { useLanguage } from '@/contexts/LanguageContext'

const blogPosts = [
  {
    slug: 'why-semi-is-the-new-well-done',
    title: "Why 'Semi' is the New 'Well-Done'",
    excerpt: 'Learn about the Semi cooking method - Tea Break\'s philosophy of fresh, fast, and flavorful food.',
    image: '/images/landscape/tb_a2.jpeg',
  },
  {
    slug: 'the-science-of-the-cheetos-burger',
    title: 'The Science of the Cheetos Burger',
    excerpt: 'A deep dive into the texture profile and science behind the legendary Cheetos Chicken Burger.',
    image: '/images/landscape/tb_a4.jpeg',
  },
]

const instagramPosts = [
  { id: '1', image: '/images/landscape/tb_a5.jpeg', platform: 'instagram' as const, likes: 1250 },
  { id: '2', image: '/images/landscape/tb_a6.jpeg', platform: 'instagram' as const, likes: 890 },
  { id: '3', image: '/images/landscape/tb_a7.jpeg', platform: 'instagram' as const, likes: 2100 },
  { id: '4', image: '/images/landscape/tb_a8.jpeg', platform: 'instagram' as const, likes: 1500 },
  { id: '5', image: '/images/landscape/tb_a9.jpeg', platform: 'instagram' as const, likes: 980 },
  { id: '6', image: '/images/landscape/tb_a10.jpeg', platform: 'instagram' as const, likes: 1750 },
]

const tiktokPosts = [
  { id: '1', image: '/images/landscape/tb_a4.jpeg', platform: 'tiktok' as const, likes: 5200 },
  { id: '2', image: '/images/landscape/tb_a10.jpeg', platform: 'tiktok' as const, likes: 3800 },
  { id: '3', image: '/images/landscape/tb_a11.jpeg', platform: 'tiktok' as const, likes: 6700 },
  { id: '4', image: '/images/landscape/tb_a12.jpeg', platform: 'tiktok' as const, likes: 4500 },
  { id: '5', image: '/images/landscape/tb_a3.jpeg', platform: 'tiktok' as const, likes: 3200 },
  { id: '6', image: '/images/landscape/tb_a2.jpeg', platform: 'tiktok' as const, likes: 5800 },
]

export default function ContactPage() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  const { t, dir } = useLanguage()

  return (
    <div className="pt-20">
      {/* Hero Section with Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/landscape/tb_a7.jpeg"
            alt="Contact Tea Break"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            {t('contact.hero.title')} <span className="gradient-text">{t('contact.hero.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 drop-shadow-lg"
          >
            {t('contact.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Sections with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Customer Service */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/landscape/tb_a1.jpeg"
                  alt="Customer Service"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <MessageCircle className="w-12 h-12 text-mustard" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-mustard">{t('contact.customer.title')}</h2>
                <p className="text-gray-400 mb-6">
                  {t('contact.customer.desc')}
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
              </div>
            </motion.div>

            {/* Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/landscape/tb_a3.jpeg"
                  alt="Delivery"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <ExternalLink className="w-12 h-12 text-mustard" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-mustard">{t('contact.delivery.title')}</h2>
                <p className="text-gray-400 mb-6">
                  {t('contact.delivery.desc')}
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.talabat.com/uae/tea-break-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Talabat
                  </a>
                  <a
                    href="https://food.noon.com/outlet/TBRKLD4QYC/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-mustard hover:text-mustard-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Noon Food
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/images/landscape/tb_a5.jpeg"
                  alt="Social Media"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Instagram className="w-12 h-12 text-mustard" />
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-display text-2xl font-bold mb-4 text-mustard">{t('contact.social.title')}</h2>
                <p className="text-gray-400 mb-6">
                  {t('contact.social.desc')}
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Have Questions? We Have Answers"
            description="Whether you want to know about our menu, locations, or just want to say hi, we're here for you."
            image="/images/landscape/tb_a8.jpeg"
            cta="View Our Menu"
            href="/menu"
            reverse={false}
          />
        </div>
      </section>

      {/* Social Feeds Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Follow Our <span className="gradient-text">Adventures</span>
            </h2>
            <p className="text-gray-400 text-lg">See what's happening at Tea Break</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Instagram Feed */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 border-2 border-mustard/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <SocialFeed posts={instagramPosts} platform="instagram" />
            </motion.div>

            {/* TikTok Feed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/50 border-2 border-mustard/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <SocialFeed posts={tiktokPosts} platform="tiktok" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Latest from <span className="gradient-text">Our Blog</span>
            </h2>
            <p className="text-gray-400">Food stories, tips, and more</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-mustard mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-mustard hover:text-mustard-400 font-semibold"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-semibold"
            >
              View All Blog Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Info */}
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
            <MapPin className="w-16 h-16 text-mustard mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t('contact.visit.title')} <span className="gradient-text">{t('contact.visit.title')}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('contact.visit.desc')}
            </p>
            <motion.a
              href="/locations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-mustard text-black font-bold text-lg rounded-full hover:bg-mustard-400 transition-colors"
            >
              {t('contact.visit.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
