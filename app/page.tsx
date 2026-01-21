'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Coffee, Utensils, Sparkles, Zap, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import ImageSlider from '@/components/ImageSlider'
import FoodBanner from '@/components/FoodBanner'
import SocialFeed from '@/components/SocialFeed'
import OrderModal from '@/components/OrderModal'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7])

  // Featured items - compact version
  const featuredItems = [
    {
      name: 'The Cheetos Chicken',
      description: "It's orange. It's crunchy. It's chaotic.",
      image: '/images/landscape/tb_a1.jpeg',
    },
    {
      name: 'Double Saffron Karak',
      description: 'Because regular Karak is for amateurs.',
      image: '/images/landscape/tb_a2.jpeg',
    },
    {
      name: 'Dynamite Shrimp',
      description: 'Spicy enough to wake you up.',
      image: '/images/landscape/tb_a3.jpeg',
    },
    {
      name: 'Wagyu Burger',
      description: 'The CEO of burgers.',
      image: '/images/landscape/tb_a4.jpeg',
    },
  ]

  // Blog posts preview
  const blogPosts = [
    {
      slug: 'why-semi-is-the-new-well-done',
      title: "Why 'Semi' is the New 'Well-Done'",
      excerpt: 'Learn about the Semi cooking method - Tea Break\'s philosophy of fresh, fast, and flavorful food.',
      image: '/images/landscape/tb_a8.jpeg',
    },
    {
      slug: 'the-science-of-the-cheetos-burger',
      title: 'The Science of the Cheetos Burger',
      excerpt: 'A deep dive into the texture profile and science behind the legendary Cheetos Chicken Burger.',
      image: '/images/landscape/tb_a9.jpeg',
    },
  ]

  // Social media posts
  const instagramPosts = [
    { id: '1', image: '/images/landscape/tb_a5.jpeg', platform: 'instagram' as const, likes: 1250 },
    { id: '2', image: '/images/landscape/tb_a6.jpeg', platform: 'instagram' as const, likes: 890 },
    { id: '3', image: '/images/landscape/tb_a7.jpeg', platform: 'instagram' as const, likes: 2100 },
    { id: '4', image: '/images/landscape/tb_a1.jpeg', platform: 'instagram' as const, likes: 1500 },
    { id: '5', image: '/images/landscape/tb_a2.jpeg', platform: 'instagram' as const, likes: 980 },
    { id: '6', image: '/images/landscape/tb_a3.jpeg', platform: 'instagram' as const, likes: 1750 },
  ]

  const tiktokPosts = [
    { id: '1', image: '/images/landscape/tb_a4.jpeg', platform: 'tiktok' as const, likes: 5200 },
    { id: '2', image: '/images/landscape/tb_a10.jpeg', platform: 'tiktok' as const, likes: 3800 },
    { id: '3', image: '/images/landscape/tb_a11.jpeg', platform: 'tiktok' as const, likes: 6700 },
    { id: '4', image: '/images/landscape/tb_a12.jpeg', platform: 'tiktok' as const, likes: 4500 },
    { id: '5', image: '/images/landscape/tb_a8.jpeg', platform: 'tiktok' as const, likes: 3200 },
    { id: '6', image: '/images/landscape/tb_a9.jpeg', platform: 'tiktok' as const, likes: 5800 },
  ]

  return (
    <div className="relative">
      {/* Hero Section - Bright with Proper Image */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Bright Hero Background */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/landscape/tb_a7.jpeg"
            alt="Tea Break Cafe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </motion.div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-mustard/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-mustard/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating Fun Elements */}
        <motion.div
          className="absolute top-1/4 left-20 hidden lg:block"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-12 h-12 text-mustard" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-20 hidden lg:block"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -15, 15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="w-10 h-10 text-mustard" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0.3, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-2xl"
              initial={{ opacity: 0.5, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Official Sponsor
              </motion.span>
              <br />
              <span className="text-white">of Your Cheat Day</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0.5, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We serve 100% fresh Wagyu, homemade buns, and regrets? Never heard of them.
              <br />
              <span className="text-mustard font-semibold">Welcome to Tea Break.</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0.5, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => setIsOrderModalOpen(true)}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mustard text-black font-bold text-lg rounded-full hover:bg-mustard-400 transition-colors flex items-center gap-2 group shadow-lg shadow-mustard/50"
              >
                I'm Hungry (Order Now)
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="/locations"
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
              >
                Where Are You? (Find Us)
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-mustard rounded-full flex justify-center backdrop-blur-sm bg-black/20">
            <motion.div
              className="w-1 h-3 bg-mustard rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Food Suggestion Banner 1 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Try Our Wagyu Burgers"
            description="Premium 100% Wagyu beef, homemade buns, and house sauce. The burger that dreams are made of."
            image="/images/landscape/tb_a4.jpeg"
            cta="Order Wagyu Burger"
            href="/menu"
            reverse={false}
          />
        </div>
      </section>

      {/* Compact Menu Section with Sliding Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Favorites</span>
            </h2>
            <p className="text-gray-400">Our most loved items</p>
          </motion.div>

          {/* Sliding Image Gallery */}
          <div className="mb-12 h-96 rounded-3xl overflow-hidden">
            <ImageSlider 
              images={[
                '/images/landscape/tb_a1.jpeg',
                '/images/landscape/tb_a2.jpeg',
                '/images/landscape/tb_a3.jpeg',
                '/images/landscape/tb_a4.jpeg',
                '/images/landscape/tb_a5.jpeg',
              ]}
              autoSlide={true}
              slideInterval={3000}
            />
          </div>

          {/* Compact Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300 h-full">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-mustard mb-1">{item.name}</h3>
                    <p className="text-gray-400 text-xs">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Food Suggestion Banner 2 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Double Saffron Karak"
            description="We doubled the saffron because you deserve luxury. The most aromatic tea experience in the UAE."
            image="/images/landscape/tb_a2.jpeg"
            cta="Try It Now"
            href="/menu"
            reverse={true}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/landscape/tb_a8.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Utensils, number: '20+', label: 'Locations Across UAE' },
              { icon: Award, number: '2013', label: 'Serving Since' },
              { icon: Coffee, number: '100%', label: 'Fresh Daily' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-black/80 border-2 border-mustard/30 rounded-2xl p-8 text-center hover:border-mustard transition-colors backdrop-blur-sm"
                >
                  <Icon className="w-12 h-12 text-mustard mx-auto mb-4" />
                  <div className="text-4xl font-bold text-mustard mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Blog Glimpses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
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
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Feeds */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Follow Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-400">See what's happening at Tea Break</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Instagram Feed */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/50 border-2 border-mustard/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <SocialFeed posts={instagramPosts} platform="instagram" />
            </motion.div>

            {/* TikTok Feed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/50 border-2 border-mustard/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <SocialFeed posts={tiktokPosts} platform="tiktok" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              People Love Us. <span className="gradient-text">(And We Love Them Back)</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The ambiance is fascinating... airy and clear. Also, the Aloha drink is very refreshing.",
                author: "A wanderer in Ajman",
                image: "/images/landscape/tb_a9.jpeg",
              },
              {
                text: "Chicken Porotta sandwich is juicy and tasty. Karak Tea is a must.",
                author: "Shaasnapzz S.",
                image: "/images/landscape/tb_a10.jpeg",
              },
              {
                text: "Best traditional Emirati food in town... Best Karak in Town.",
                author: "Mama C, Airport Road Regular",
                image: "/images/landscape/tb_a11.jpeg",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-black border-2 border-mustard/20 rounded-2xl overflow-hidden hover:border-mustard transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
                  <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                  <p className="text-mustard font-semibold">— {review.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0.7, 1], ['0%', '30%']) }}
          className="absolute inset-0 opacity-20"
        >
          <Image
            src="/images/landscape/tb_a12.jpeg"
            alt="Tea Break"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Ready for Your <span className="gradient-text">Cheat Day?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you need a saffron-infused wake-up call or a burger the size of your head, we've got you covered.
            </p>
            <motion.a
              href="/menu"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              className="inline-block px-12 py-5 bg-mustard text-black font-bold text-xl rounded-full hover:bg-mustard-400 transition-colors shadow-2xl shadow-mustard/50"
            >
              Explore Our Menu
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </div>
  )
}
