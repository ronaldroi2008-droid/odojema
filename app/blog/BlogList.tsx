"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const POSTS_PER_PAGE = 10;

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  const rawPage = parseInt(searchParams.get("page") || "1", 10) || 1;
  const currentPage = Math.min(Math.max(1, rawPage), totalPages);

  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/" className="text-[#1F6F54] hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-5xl font-bold mt-8">Blog</h1>

      <p className="mt-4 text-gray-600">
        Practical guides on salary, freelance rates, and income calculations.
      </p>

      <div className="mt-12 space-y-10">
        {pagePosts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-3xl font-semibold hover:text-[#1F6F54] transition">
                {post.title}
              </h2>
            </Link>

            <p className="mt-2 text-sm text-gray-500">{post.date}</p>

            <p className="mt-4 text-gray-700">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-[#1F6F54] hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-4 flex items-center justify-center gap-2"
        >
          <PageLink
            page={currentPage - 1}
            disabled={currentPage === 1}
            label="← Previous"
          />

          <div className="flex items-center gap-1 mx-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => {
                const isCurrent = page === currentPage;
                return (
                  <Link
                    key={page}
                    href={page === 1 ? "/blog" : `/blog?page=${page}`}
                    aria-current={isCurrent ? "page" : undefined}
                    className={
                      isCurrent
                        ? "w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold text-white bg-[#1F6F54]"
                        : "w-9 h-9 flex items-center justify-center rounded-lg text-sm border border-gray-300 hover:border-[#1F6F54] hover:text-[#1F6F54] transition"
                    }
                  >
                    {page}
                  </Link>
                );
              }
            )}
          </div>

          <PageLink
            page={currentPage + 1}
            disabled={currentPage === totalPages}
            label="Next →"
          />
        </nav>
      )}
    </main>
  );
}

function PageLink({
  page,
  disabled,
  label,
}: {
  page: number;
  disabled: boolean;
  label: string;
}) {
  if (disabled) {
    return (
      <span className="px-4 py-2 rounded-lg text-sm text-gray-300 cursor-not-allowed select-none">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={page === 1 ? "/blog" : `/blog?page=${page}`}
      className="px-4 py-2 rounded-lg text-sm border border-gray-300 hover:border-[#1F6F54] hover:text-[#1F6F54] transition"
    >
      {label}
    </Link>
  );
}