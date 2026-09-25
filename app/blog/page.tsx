import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Odojema",
  description:
    "Practical guides on salary, freelance rates, and income calculations.",
  alternates: {
    canonical: "https://odojema.com/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link
        href="/"
        className="text-[#1F6F54] hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-5xl font-bold mt-8">
        Blog
      </h1>

      <p className="mt-4 text-gray-600">
        Practical guides on salary, freelance rates, and income calculations.
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-200 pb-8"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-3xl font-semibold hover:text-[#1F6F54] transition">
                {post.title}
              </h2>
            </Link>

            <p className="mt-2 text-sm text-gray-500">
              {post.date}
            </p>

            <p className="mt-4 text-gray-700">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-[#1F6F54] hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}