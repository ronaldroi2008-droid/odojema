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
    <main className="min-h-screen bg-[#F7F5F0]">
  <article className="max-w-3xl mx-auto px-6 py-20">
    <Link
      href="/blog"
      className="text-[#1F6F54] hover:underline"
    >
      ← Back to Blog
    </Link>

    <h1 className="text-5xl font-bold mt-8 leading-tight">
      {post.title}
    </h1>

    <p className="mt-4 text-gray-500">
      {post.date}
    </p>

    <div
      className="prose prose-lg max-w-none mt-12"
      dangerouslySetInnerHTML={{
        __html: post.contentHtml,
      }}
    />
  </article>
</main>
   
  );
}