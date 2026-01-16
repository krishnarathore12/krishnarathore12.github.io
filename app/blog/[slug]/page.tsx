import Link from "next/link";
import { notFound } from "next/navigation";

// Blog posts data
const posts: Record<string, {
  title: string;
  date: string;
  content: string;
}> = {
  "hello-world": {
    title: "Hello World — My First Blog",
    date: "January 17, 2026",
    content: `Today I created my website and this is my first blog!

I'm finally ready to share my corner of the internet. This portfolio will serve as a home for my projects, thoughts, and experiments.

Stay tuned for more posts about tech, design and whatever else catches my interest.

_end_of_transmission`,
  },
};

// Generate static params for all blog posts
export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Link href="/blog" className="text-muted text-sm hover:underline mb-6 inline-block">
        ← back to blog
      </Link>
      
      <article className="mt-4">
        <header className="mb-6 border-b header-border pb-4">
          <h1 className="text-xl font-bold text-bold mb-2">{post.title}</h1>
          <time className="text-date text-sm">{post.date}</time>
        </header>
        
        <div className="blog-content text-muted leading-relaxed whitespace-pre-line">
          {post.content}
        </div>
      </article>
    </div>
  );
}
