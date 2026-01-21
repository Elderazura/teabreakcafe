'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Sparkles, Zap } from 'lucide-react'
import SocialFeed from '@/components/SocialFeed'
import FoodBanner from '@/components/FoodBanner'
import { useLanguage } from '@/contexts/LanguageContext'

const blogPosts = [
  {
    slug: 'why-semi-is-the-new-well-done',
    title: "Why 'Semi' is the New 'Well-Done'",
    excerpt: "You've seen it on the menu. 'Semi Hot Dog'. 'Semi Pulled Chicken'. You probably asked, 'Does that mean it's half raw?' No, friend. It means we cook it fresh on the spot, searing the flavor in quickly so it stays juicy.",
    fullContent: `You've seen it on the menu. 'Semi Hot Dog'. 'Semi Pulled Chicken'. You probably asked, 'Does that mean it's half raw?'

No, friend. It means we cook it fresh on the spot, searing the flavor in quickly so it stays juicy. It's not fast food; it's fast gourmet. It's the 'Semi' lifestyle—maximum flavor, minimum wait.

The 'Semi' method isn't just a cooking technique; it's a philosophy. While others are microwaving pre-cooked patties, we're marinating, searing, and serving fresh. Every. Single. Time.

Why? Because we have trust issues with frozen food. And because you deserve better than cardboard disguised as a burger.

So next time you see 'Semi' on our menu, know that it means: fresh, fast, and flavorful. The holy trinity of fast-casual dining.`,
    date: '2024-01-15',
    image: '/images/landscape/tb_a2.jpeg',
    category: 'Food Philosophy',
  },
  {
    slug: 'the-science-of-the-cheetos-burger',
    title: 'The Science of the Cheetos Burger: An Investigation',
    excerpt: "Scientists say the perfect crunch creates a sound of 45 decibels. We say, hold my Karak. We took a juicy chicken fillet and rolled it in Cheetos dust. Why? Because we could.",
    fullContent: `Scientists say the perfect crunch creates a sound of 45 decibels. We say, hold my Karak.

We took a juicy chicken fillet and rolled it in Cheetos dust. Why? Because we could. And because the combination of spicy, cheesy crunch and tender chicken is scientifically proven to make you 110% happier.

Let's break down the science:
- The Crunch Factor: That satisfying sound when you bite? That's the Cheetos coating creating the perfect textural contrast.
- The Flavor Bomb: Spicy, cheesy, savory—all hitting your taste buds at once.
- The Juiciness: The chicken stays tender because we cook it fresh, not frozen.

Is it over the top? Yes. Is it delicious? Also yes. And sometimes, that's all the science you need.`,
    date: '2024-01-10',
    image: '/images/landscape/tb_a4.jpeg',
    category: 'Food Science',
  },
  {
    slug: 'a-love-letter-to-double-saffron',
    title: 'A Love Letter to Double Saffron',
    excerpt: "Saffron is the most expensive spice in the world. So naturally, we decided to put double the amount in your tea. Why? Because you're worth it.",
    fullContent: `Saffron is the most expensive spice in the world. So naturally, we decided to put double the amount in your tea. Why? Because you're worth it. And because once you go Double Saffron, you can't go back to regular tea bags.

Our Double Saffron Karak isn't just tea; it's an experience. The aroma hits you before the flavor does. Rich, aromatic, and luxurious—everything your morning (or 2 AM) deserves.

We don't skimp on the good stuff. While others are using saffron as a garnish, we're making it the star. Because if you're going to have Karak, you might as well have the best Karak.

So here's to Double Saffron. The tea that started a revolution. The drink that made regular Karak look like amateur hour.

Once you've tried it, there's no going back. Consider yourself warned.`,
    date: '2024-01-05',
    image: '/images/landscape/tb_a1.jpeg',
    category: 'Beverages',
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

export default function BlogPage() {
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
            alt="Tea Break Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-20 hidden lg:block"
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
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            {t('blog.hero.title')} <span className="gradient-text">{t('blog.hero.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 drop-shadow-lg"
          >
            {t('blog.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t('blog.latest')} <span className="gradient-text">{t('blog.latest')}</span>
            </h2>
            <p className="text-gray-400 text-lg">{t('blog.desc')}</p>
          </motion.div>

          <div className="space-y-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-black border-2 border-mustard/20 rounded-3xl overflow-hidden hover:border-mustard transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <motion.div
                    className="relative h-64 lg:h-full min-h-[400px] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-mustard text-black rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-mustard text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-mustard transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6 line-clamp-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-mustard hover:text-mustard-400 font-semibold group/link"
                    >
                      {t('blog.readFull')}
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Food Banner */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Hungry for More Stories?"
            description="Read about our food philosophy, the science behind our recipes, and the stories that make Tea Break special."
            image="/images/landscape/tb_a8.jpeg"
            cta="Visit Our Menu"
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
              {t('blog.follow')} <span className="gradient-text">{t('blog.follow')}</span>
            </h2>
            <p className="text-gray-400 text-lg">{t('blog.followDesc')}</p>
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

      {/* Newsletter/CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-mustard/20 rounded-3xl p-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t('blog.newsletter.title')} <span className="gradient-text">{t('blog.newsletter.title')}</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {t('blog.newsletter.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.instagram.com/teabreakcafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors"
              >
                {t('blog.newsletter.instagram')}
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@teabreakcafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-bold"
              >
                {t('blog.newsletter.tiktok')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
