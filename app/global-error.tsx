'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, RefreshCw, AlertCircle } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <AlertCircle className="w-24 h-24 text-mustard mx-auto mb-6" />
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-6xl md:text-8xl font-bold text-mustard mb-4"
              >
                Oops!
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Something Went Wrong
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 mb-8 text-lg"
              >
                Looks like our tea kettle overflowed. Don't worry, we're on it!
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={reset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-mustard text-black font-bold rounded-full hover:bg-mustard-400 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
                Try Again
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-mustard text-mustard rounded-full hover:bg-mustard hover:text-black transition-colors font-bold"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </body>
    </html>
  )
}
