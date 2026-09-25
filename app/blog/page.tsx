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

console.log(posts);  

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">Blog</h1>

      <p className="mt-4 text-gray-600">
        Practical guides on salary, freelance rates, and income calculations.
      </p>

      <div className="mt-10 space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b pb-6">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>

            <p className="mt-2 text-sm text-gray-500">{post.date}</p>

            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}