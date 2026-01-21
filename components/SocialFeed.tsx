'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram, Music2 } from 'lucide-react'

interface SocialPost {
  id: string
  image: string
  platform: 'instagram' | 'tiktok'
  likes?: number
  caption?: string
}

interface SocialFeedProps {
  posts: SocialPost[]
  platform: 'instagram' | 'tiktok'
}

export default function SocialFeed({ posts, platform }: SocialFeedProps) {
  const Icon = platform === 'instagram' ? Instagram : Music2
  const platformName = platform === 'instagram' ? 'Instagram' : 'TikTok'
  const platformUrl = platform === 'instagram' 
    ? 'https://www.instagram.com/teabreakcafe'
    : 'https://www.tiktok.com/@teabreakcafe'

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-mustard" />
        <h3 className="text-2xl font-bold">@{platformName}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <motion.a
            key={post.id}
            href={platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.caption || `${platformName} post`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                {post.likes && (
                  <span className="text-white font-bold">❤️ {post.likes}</span>
                )}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.a
        href={platformUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="block text-center px-6 py-3 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-semibold"
      >
        Follow us on {platformName}
      </motion.a>
    </div>
  )
}
