'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Coffee, Utensils, Droplet, Flame, Download, Eye, ArrowRight, FileText, Sparkles } from 'lucide-react'
import { useState } from 'react'
import FoodBanner from '@/components/FoodBanner'
import menuData from '@/data/menu.json'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MenuPage() {
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%'])
  const { t, dir } = useLanguage()

  // Menu sections with images
  const menuSections = [
    {
      id: 'breakfast',
      title: 'The Wake-Up Call',
      subtitle: 'Available when you are. Because time is a construct.',
      icon: Coffee,
      image: '/images/landscape/menu/menu 1.jpeg',
      items: [
        {
          name: 'Tea Break Breakfast',
          price: 'AED 35.00',
          description: 'The heavy lifter. Fried eggs, grilled mushrooms, halloumi (the squeaky cheese of the gods), sweet potatoes, fried sausages, olives, feta, and mixed fruits.',
        },
        {
          name: 'Shakshouka Croissant',
          price: 'AED 18.00',
          description: 'We took a French croissant and introduced it to a spicy Middle Eastern Shakshouka. They fell in love.',
        },
        {
          name: 'Italian Breakfast',
          price: 'AED 17.00',
          description: 'Semi-cooked egg, beef bacon, mozzarella, capsicum, and onion. It\'s like a breakfast pizza, but socially acceptable.',
        },
        {
          name: 'Egg Mushroom Semi Club',
          price: 'AED 13.00',
          description: 'Mushrooms and eggs stuffed with cheddar. A classic club sandwich that went to finishing school.',
        },
      ],
    },
    {
      id: 'burgers',
      title: t('menu.sections.burgers.title'),
      subtitle: t('menu.sections.burgers.subtitle'),
      icon: Utensils,
      image: '/images/landscape/menu/menu 2.jpeg',
      items: [
        {
          name: 'Wagyu Burger',
          price: 'AED 36.00',
          description: 'The CEO of burgers. Premium Wagyu beef patty, house sauce, and creamy cheddar cheese.',
        },
        {
          name: 'Cheetos Chicken Burger',
          price: 'Market Price',
          description: 'Crunchy. Orange. Legendary. A juicy chicken fillet rolled in Cheetos dust.',
        },
        {
          name: 'Buffalo Chicken Burger',
          price: 'AED 25.00',
          description: 'Breaded chicken patty sorted out with spicy buffalo sauce. It brings the heat.',
        },
        {
          name: 'Stuffed Beef Burger',
          price: 'AED 36.00',
          description: 'It\'s what\'s on the inside that counts. Delicious fillings stuffed right into the beef patty.',
        },
        {
          name: 'Dynamite Chicken Slider',
          price: 'AED 18.00',
          description: 'Small buns, big attitude. Golden fried chicken coated in our signature dynamite sauce.',
        },
      ],
    },
    {
      id: 'sandwiches',
      title: t('menu.sections.sandwiches.title'),
      subtitle: t('menu.sections.sandwiches.subtitle'),
      icon: Flame,
      image: '/images/landscape/menu/menu3.jpeg',
      items: [
        {
          name: 'Semi Hot Dog Cheese Sandwich',
          price: 'AED 12.00',
          description: 'Fried hot dog. Cheese. Toasted bread. Marinated sauce. Prepared in 5 minutes.',
        },
        {
          name: 'Semi Pulled Chicken',
          price: 'AED 18.00',
          description: 'Marinated sliced chicken stuffed with cheddar. We pull the chicken so you don\'t have to pull a muscle.',
        },
        {
          name: 'Beef Fajita Wrap',
          price: 'AED 23.00',
          description: 'Fajita spiced beef and peppers in a soft tortilla with mozzarella. A fiesta in a wrap.',
        },
        {
          name: 'Francisco Poratta',
          price: 'Market Price',
          description: 'The street food king. Chicken wrapped in flaky, buttery poratta bread.',
        },
      ],
    },
    {
      id: 'pasta',
      title: 'Carb-Loading',
      subtitle: 'Because salad is a side dish.',
      icon: Utensils,
      image: '/images/landscape/menu/menu 4.jpeg',
      items: [
        {
          name: 'Mac and Cheetos Chicken Pasta',
          price: 'AED 49.00',
          description: 'We combined Mac & Cheese with Cheetos Chicken. Is it over the top? Yes. Is it delicious? Also yes.',
        },
        {
          name: 'Dynamite Shrimp Fettuccine',
          price: 'AED 37.00',
          description: 'Creamy fettuccine tossed with spicy crispy shrimp. Italy meets Asia in a delicious collision.',
        },
        {
          name: 'Creamy Chicken Pasta',
          price: 'AED 32.00',
          description: 'Juicy grilled chicken in a cheese-filled sauce with Penne. Comfort food 101.',
        },
      ],
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

  return (
    <div className="pt-20">
      {/* Hero Section with Menu Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/landscape/menu/menu 1.jpeg"
            alt="Tea Break Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            {t('menu.hero.title')} <span className="gradient-text">{t('menu.hero.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg"
          >
            {t('menu.hero.subtitle')}
          </motion.p>

          {/* PDF Menu Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => setPdfViewerOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-mustard text-black font-bold text-lg rounded-full hover:bg-mustard-400 transition-colors flex items-center gap-2 shadow-lg shadow-mustard/50"
            >
              <Eye className="w-5 h-5" />
              {t('menu.hero.viewPdf')}
            </motion.button>
            <motion.a
              href="/menu/TEA BREAK - MENU.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              {t('menu.hero.downloadPdf')}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {pdfViewerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPdfViewerOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-6xl h-[90vh] bg-black rounded-2xl overflow-hidden border-2 border-mustard"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPdfViewerOpen(false)}
              className="absolute top-4 right-4 z-10 bg-mustard text-black p-2 rounded-full hover:bg-mustard-400 transition-colors"
              aria-label="Close PDF viewer"
            >
              <span className="text-2xl">×</span>
            </button>
            <iframe
              src="/menu/TEA BREAK - MENU.pdf"
              className="w-full h-full"
              title="Tea Break Menu PDF"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Tea Menu from JSON - Creative Display */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Coffee className="w-10 h-10 text-mustard" />
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                {t('menu.tea.title')} <span className="gradient-text">{t('menu.tea.title')}</span>
              </h2>
            </div>
          </motion.div>

          {/* Hot Tea Grid */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-mustard mb-6 flex items-center gap-2">
              <Flame className="w-6 h-6" />
              {t('menu.tea.hotTea')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData.menu.hot_tea.map((item: any, index: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black border-2 border-mustard/20 rounded-xl p-5 hover:border-mustard transition-all duration-300"
                >
                  <h4 className="font-bold text-mustard mb-2">{item.name}</h4>
                  <p className="text-mustard font-bold text-lg mb-1">AED {item.price}</p>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Iced Tea Grid */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-mustard mb-6 flex items-center gap-2">
              <Droplet className="w-6 h-6" />
              {t('menu.tea.icedTea')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData.menu.iced_tea.map((item: any, index: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black border-2 border-mustard/20 rounded-xl p-5 hover:border-mustard transition-all duration-300"
                >
                  <h4 className="font-bold text-mustard mb-2">{item.name}</h4>
                  <p className="text-mustard font-bold text-lg mb-1">AED {item.price}</p>
                  {item.description && (
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tea Flasks */}
          <div>
            <h3 className="font-display text-2xl font-bold text-mustard mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Tea Flasks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.menu.tea_flasks.map((item: any, index: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-black border-2 border-mustard/20 rounded-xl p-6 hover:border-mustard transition-all duration-300"
                >
                  <h4 className="font-bold text-mustard mb-2 text-xl">{item.name}</h4>
                  <p className="text-mustard font-bold text-xl mb-2">AED {item.price}</p>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Food Banner 1 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="Fresh. Daily. Always."
            description="Our buns? Baked fresh daily in our own bakery. Our meat? Marinated in-house until it's so tender it practically sings."
            image="/images/landscape/menu/menu 2.jpeg"
            cta="Order Now"
            href="/locations"
            reverse={false}
          />
        </div>
      </section>

      {/* Main Menu Sections with Images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {menuSections.map((section, sectionIndex) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                className="mb-20"
              >
                {/* Section Header with Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative h-64 lg:h-80 rounded-3xl overflow-hidden"
                  >
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-mustard/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-6 h-6 text-mustard" />
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                          {section.title}
                        </h2>
                      </div>
                      <p className="text-gray-300">{section.subtitle}</p>
                    </div>
                  </motion.div>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-2 text-mustard"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="font-semibold">Fresh ingredients daily</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-2 text-mustard"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="font-semibold">Made to order</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-2 text-mustard"
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="font-semibold">Premium quality</span>
                    </motion.div>
                  </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.05, duration: 0.5 }}
                      whileHover={{ y: -8, scale: 1.03, rotate: itemIndex % 2 === 0 ? 1 : -1 }}
                      className="bg-black border-2 border-mustard/20 rounded-2xl p-6 hover:border-mustard transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-mustard/0 group-hover:bg-mustard/5 transition-colors duration-300 rounded-2xl" />
                      
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-display text-xl font-bold text-mustard group-hover:text-mustard-400 transition-colors flex-1">
                            {item.name}
                          </h3>
                          <span className="text-mustard font-bold text-lg whitespace-nowrap ml-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Food Banner 2 */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FoodBanner
            title="The Semi Method"
            description="It's not fast food; it's fast gourmet. Fresh on the spot, searing flavor in minutes. Maximum flavor, minimum wait."
            image="/images/landscape/menu/menu3.jpeg"
            cta="Try Semi Items"
            href="/menu#sandwiches"
            reverse={true}
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Menu <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-gray-400">Learn about our food philosophy</p>
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

      {/* CTA Section Before Footer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/landscape/menu/menu 4.jpeg"
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
              Ready to <span className="gradient-text">Order?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Order now on Talabat, Deliveroo, or Noon Food. Or visit us at one of our 20+ locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/locations"
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-mustard/50"
              >
                Find Us Near You
                <ArrowRight className="w-5 h-5" />
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
