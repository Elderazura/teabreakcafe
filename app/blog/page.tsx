'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

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
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-mustard/10">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-mustard/10 rounded-full blur-3xl"
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
            The <span className="gradient-text">Tea Break</span> Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            Where food science meets food love.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-black border-2 border-mustard/20 rounded-2xl p-8 hover:border-mustard transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-mustard text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-mustard">
                  {post.title}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {post.fullContent}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-mustard hover:text-mustard-400 font-semibold group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
