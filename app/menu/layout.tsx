import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu | Tea Break Cafe - The Wake-Up Call, Burger Lab, Semi Legends & More',
  description: 'Explore our menu: Fresh Wagyu burgers, Double Saffron Karak, Cheetos Chicken, Semi sandwiches, and more. Available at 20+ locations across UAE.',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
