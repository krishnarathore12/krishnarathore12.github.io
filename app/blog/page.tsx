import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      slug: "hello-world",
      title: "Hello World — My First Blog",
      date: "January 17, 2026",
      excerpt: "Today I created my website and this is my first blog!",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-bold mb-6">_blog</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="blog-list-item">
            <Link href={`/blog/${post.slug}`} className="block group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span className="text-bold group-hover:underline">{post.title}</span>
                <span className="text-date text-xs">{post.date}</span>
              </div>
              <p className="text-muted text-sm mt-1">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}