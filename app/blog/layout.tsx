import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Tea Break Cafe - The Science of Food, The Art of Semi',
  description: 'Read about the Semi cooking method, the Cheetos Burger investigation, and our love letter to Double Saffron Karak.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
