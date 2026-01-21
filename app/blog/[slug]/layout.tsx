import type { Metadata } from 'next'

const blogPosts: Record<string, { title: string; description: string }> = {
  'why-semi-is-the-new-well-done': {
    title: "Why 'Semi' is the New 'Well-Done'",
    description: 'Learn about the Semi cooking method - Tea Break\'s philosophy of fresh, fast, and flavorful food.',
  },
  'the-science-of-the-cheetos-burger': {
    title: 'The Science of the Cheetos Burger: An Investigation',
    description: 'A deep dive into the texture profile and science behind the legendary Cheetos Chicken Burger.',
  },
  'a-love-letter-to-double-saffron': {
    title: 'A Love Letter to Double Saffron',
    description: 'Discover why our Double Saffron Karak is the most luxurious tea experience in the UAE.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug]
  
  if (!post) {
    return {
      title: 'Blog Post | Tea Break Cafe',
    }
  }

  return {
    title: `${post.title} | Tea Break Cafe Blog`,
    description: post.description,
  }
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
