import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  const tools = [
    {
      title: "Job Offer Comparison Calculator",
      href: "/job-offer-comparison-calculator",
      description: "Compare two job offers by total compensation, not just salary.",
    },
    {
      title: "Salary Calculator",
      href: "/salary-calculator",
      description: "Calculate your annual salary from monthly income.",
    },
    {
      title: "Raise Calculator",
      href: "/raise-calculator",
      description: "Estimate salary increases and raises.",
    },
    {
      title: "Freelance Rate Calculator",
      href: "/freelance-rate-calculator",
      description: "Calculate your ideal freelance rate.",
    },
    {
      title: "Freelance Day Rate Calculator",
      href: "/freelance-day-rate-calculator",
      description: "Convert between hourly and day rates.",
    },
    {
      title: "Hourly to Annual Calculator",
      href: "/hourly-to-annual-calculator",
      description: "Convert hourly pay into annual salary.",
    },
  ];

  return (
    <main className="min-h-screen">
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="font-bold text-2xl">
            Odojema
          </h1>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-5xl font-bold">
          Career & Income Tools
        </h2>

        <p className="mt-4 text-xl text-gray-600">
          Free calculators to help you make smarter work and income decisions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {tool.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold">
            Latest Articles
          </h2>

          <Link
            href="/blog"
            className="text-green-700 hover:underline"
          >
            View All →
          </Link>
        </div>

        <p className="mt-4 text-gray-600">
          Practical guides on salaries, raises, freelance rates, and career growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {post.date}
              </p>

              <p className="mt-3 text-gray-600">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}