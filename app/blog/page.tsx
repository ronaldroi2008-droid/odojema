import { Suspense } from "react";
import { getAllPosts } from "@/lib/posts";
import BlogList from "./BlogList";

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
    <Suspense fallback={null}>
      <BlogList posts={posts} />
    </Suspense>
  );
}