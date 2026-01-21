'use client'

import { motion } from 'framer-motion'
import { Award, TrendingUp, Users, Mail, Phone } from 'lucide-react'

export default function FranchisePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-mustard/10">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-mustard/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 10,
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
            Want to Own a Slice of the <span className="gradient-text">Pie?</span>
            <br />
            <span className="text-3xl md:text-4xl">(Or the Burger?)</span>
          </motion.h1>
        </div>
      </section>

      {/* The Pitch */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <p>
              So, you love our Karak. You dream about our Wagyu. <span className="text-mustard font-semibold">Why not make money from it?</span>
            </p>
            <p>
              Tea Break is not just a cafe; it's a movement. We started in Shahama and now we are taking over the UAE. We are looking for partners who are hungry—literally and figuratively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Credentials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-mustard/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">Credentials</span>
            </h2>
            <p className="text-xl text-gray-400">We aren't amateurs; we're decorated veterans.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Award-Winning',
                description: 'Winner of the "Home Grown Franchise of the Year" at the Arab Franchise Expo.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Model',
                description: "Since 2013, we've refined the art of the 'Semi' cook and the perfect brew.",
              },
              {
                icon: Users,
                title: 'Accessible Investment',
                description: 'Franchise opportunities start from approximately AED 200,000. We believe in making success accessible.',
              },
            ].map((credential, index) => {
              const Icon = credential.icon
              return (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-black border-2 border-mustard/30 rounded-2xl p-8 text-center hover:border-mustard transition-colors"
                >
                  <Icon className="w-16 h-16 text-mustard mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold mb-4">{credential.title}</h3>
                  <p className="text-gray-400">{credential.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What <span className="gradient-text">You Get</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: 'Training',
                description: "We teach you the secret of the 'Semi'. Master the art of fast gourmet cooking and perfect Karak brewing.",
              },
              {
                title: 'Support',
                description: 'We help you find the location (because location is everything). Plus ongoing operational and marketing support.',
              },
              {
                title: 'Brand Power',
                description: 'You get to use the Tea Break name, which is basically a license to print smiles. And profits.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ x: 10 }}
                className="bg-black border-2 border-mustard/20 rounded-xl p-6 hover:border-mustard transition-colors"
              >
                <h3 className="font-display text-2xl font-bold text-mustard mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-mustard/10 via-black to-mustard/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to be the <span className="gradient-text">Boss of Burgers?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's brew some success together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="mailto:franchise@teabreakcafe.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 bg-mustard text-black font-bold text-lg rounded-full hover:bg-mustard-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                franchise@teabreakcafe.com
              </motion.a>
              <motion.a
                href="tel:+97124442144"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 border-2 border-mustard text-mustard font-bold text-lg rounded-full hover:bg-mustard/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +971 2 444 2144
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
