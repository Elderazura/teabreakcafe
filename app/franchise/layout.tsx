import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Opportunities | Tea Break Cafe - Own a Slice of the Pie',
  description: 'Join Tea Break Cafe franchise. Award-winning Home Grown Franchise of the Year. Investment from AED 200,000. 20+ locations across UAE.',
}

export default function FranchiseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
