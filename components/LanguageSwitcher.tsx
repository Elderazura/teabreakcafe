'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const { locale, setLocale, dir } = useLanguage()

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      dir={dir}
      className={`fixed bottom-6 z-50 w-14 h-14 bg-mustard text-black rounded-full shadow-lg hover:bg-mustard-400 transition-colors flex items-center justify-center font-bold text-lg ${
        dir === 'rtl' ? 'left-6' : 'right-6'
      }`}
      aria-label="Toggle language"
      title={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Globe className="w-6 h-6" />
      <span className="text-sm font-bold ml-1">{locale === 'en' ? 'AR' : 'EN'}</span>
    </motion.button>
  )
}
