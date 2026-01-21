import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Locations | Tea Break Cafe - 20+ Locations Across UAE',
  description: 'Find Tea Break Cafe near you. Locations in Abu Dhabi, Dubai, Ajman, Ras Al Khaimah, and Fujairah. Open daily with late-night hours.',
}

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
