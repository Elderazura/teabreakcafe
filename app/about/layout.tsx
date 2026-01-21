import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Tea Break Cafe - From Shahama to UAE Empire',
  description: 'Learn about Tea Break Cafe\'s journey from a single teapot in Shahama to 20+ locations across the UAE. Home Grown Franchise of the Year.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
