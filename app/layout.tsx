import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tea Break Cafe | Official Sponsor of Your Cheat Day | UAE',
  description: 'Fueling the UAE, one cup at a time. Fresh Wagyu burgers, homemade buns, and Double Saffron Karak. 20+ locations across Abu Dhabi, Dubai, Ajman, RAK, and Fujairah. Home Grown Franchise of the Year.',
  keywords: 'Tea Break Cafe, UAE cafe, Karak tea, Wagyu burger, Abu Dhabi cafe, Dubai cafe, fast casual dining, Emirati food, Double Saffron Karak, Cheetos burger',
  authors: [{ name: 'Tea Break Cafe' }],
  openGraph: {
    title: 'Tea Break Cafe | Official Sponsor of Your Cheat Day',
    description: 'Fresh Wagyu, homemade buns, and regrets? Never heard of them. Welcome to Tea Break.',
    type: 'website',
    locale: 'en_AE',
    siteName: 'Tea Break Cafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tea Break Cafe | Official Sponsor of Your Cheat Day',
    description: 'Fresh Wagyu, homemade buns, and regrets? Never heard of them.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Tea Break Cafe",
    "description": "Fast-casual dining cafe serving fresh Wagyu burgers, homemade buns, and premium Karak tea across the UAE",
    "url": "https://teabreakcafe.com",
    "logo": "https://teabreakcafe.com/logo.png",
    "image": "https://teabreakcafe.com/og-image.jpg",
    "telephone": "+97124442144",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AE",
      "addressRegion": "Abu Dhabi"
    },
    "servesCuisine": "Middle Eastern, Fast Casual",
    "priceRange": "$$",
    "award": "Home Grown Franchise of the Year - Arab Franchise Expo"
  }

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://teabreakcafe.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className="bg-black text-white antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
