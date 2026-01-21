'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import { useEffect } from 'react'

const blogPosts: Record<string, { title: string; content: string; date: string }> = {
  'why-semi-is-the-new-well-done': {
    title: "Why 'Semi' is the New 'Well-Done'",
    date: '2024-01-15',
    content: `You've seen it on the menu. 'Semi Hot Dog'. 'Semi Pulled Chicken'. You probably asked, 'Does that mean it's half raw?'

No, friend. It means we cook it fresh on the spot, searing the flavor in quickly so it stays juicy. It's not fast food; it's fast gourmet. It's the 'Semi' lifestyle—maximum flavor, minimum wait.

The 'Semi' method isn't just a cooking technique; it's a philosophy. While others are microwaving pre-cooked patties, we're marinating, searing, and serving fresh. Every. Single. Time.

Why? Because we have trust issues with frozen food. And because you deserve better than cardboard disguised as a burger.

So next time you see 'Semi' on our menu, know that it means: fresh, fast, and flavorful. The holy trinity of fast-casual dining.`,
  },
  'the-science-of-the-cheetos-burger': {
    title: 'The Science of the Cheetos Burger: An Investigation',
    date: '2024-01-10',
    content: `Scientists say the perfect crunch creates a sound of 45 decibels. We say, hold my Karak.

We took a juicy chicken fillet and rolled it in Cheetos dust. Why? Because we could. And because the combination of spicy, cheesy crunch and tender chicken is scientifically proven to make you 110% happier.

Let's break down the science:
- The Crunch Factor: That satisfying sound when you bite? That's the Cheetos coating creating the perfect textural contrast.
- The Flavor Bomb: Spicy, cheesy, savory—all hitting your taste buds at once.
- The Juiciness: The chicken stays tender because we cook it fresh, not frozen.

Is it over the top? Yes. Is it delicious? Also yes. And sometimes, that's all the science you need.`,
  },
  'a-love-letter-to-double-saffron': {
    title: 'A Love Letter to Double Saffron',
    date: '2024-01-05',
    content: `Saffron is the most expensive spice in the world. So naturally, we decided to put double the amount in your tea. Why? Because you're worth it. And because once you go Double Saffron, you can't go back to regular tea bags.

Our Double Saffron Karak isn't just tea; it's an experience. The aroma hits you before the flavor does. Rich, aromatic, and luxurious—everything your morning (or 2 AM) deserves.

We don't skimp on the good stuff. While others are using saffron as a garnish, we're making it the star. Because if you're going to have Karak, you might as well have the best Karak.

So here's to Double Saffron. The tea that started a revolution. The drink that made regular Karak look like amateur hour.

Once you've tried it, there's no going back. Consider yourself warned.`,
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params?.slug as string
  const post = blogPosts[slug]

  useEffect(() => {
    if (!post) {
      router.push('/404')
    }
  }, [post, router])

  if (!post) {
    return null
  }

  return (
    <div className="pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-mustard hover:text-mustard-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-mustard text-sm mb-6">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 text-mustard">
            {post.title}
          </h1>

          <div className="prose prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-300 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  )
}
