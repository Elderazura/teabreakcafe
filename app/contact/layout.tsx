import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Tea Break Cafe - Talk to Us, We Don\'t Bite',
  description: 'Get in touch with Tea Break Cafe. Customer service, delivery links, social media. We\'re here to help!',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
