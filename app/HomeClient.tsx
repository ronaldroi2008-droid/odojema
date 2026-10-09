"use client";

import { useState } from "react";
import Link from "next/link";

type Post = { slug: string; title: string; date: string; excerpt: string };

type ToolCategory = {
  label: string;
  text: string;
  bg: string;
  iconBg: string;
  from: string;
  to: string;
};

type CategoryKey = "offers" | "raises" | "freelance" | "hourly" | "default";

const CATEGORIES: Record<CategoryKey, ToolCategory> = {
  offers: {
    label: "Job Offers",
    text: "text-rose-700",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    from: "#FB7185",
    to: "#F43F5E",
  },
  raises: {
    label: "Raises & Salary",
    text: "text-blue-700",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    from: "#60A5FA",
    to: "#2563EB",
  },
  freelance: {
    label: "Freelance",
    text: "text-violet-700",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    from: "#A78BFA",
    to: "#7C3AED",
  },
  hourly: {
    label: "Hourly & Overtime",
    text: "text-amber-700",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    from: "#FBBF24",
    to: "#D97706",
  },
  default: {
    label: "Career Tools",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    from: "#34D399",
    to: "#059669",
  },
};

function getCategoryKey(href: string): CategoryKey {
  if (href.includes("job-offer") || href.includes("compare")) return "offers";
  if (href.includes("raise") || href.includes("salary") || href.includes("percentage-increase"))
    return "raises";
  if (href.includes("freelance")) return "freelance";
  if (href.includes("hourly") || href.includes("overtime")) return "hourly";
  return "default";
}

function getArticleCategoryKey(slug: string): CategoryKey {
  if (slug.includes("promotion") || slug.includes("job-offer") || slug.includes("compare") || slug.includes("benefits"))
    return "offers";
  if (slug.includes("raise") || slug.includes("salary") || slug.includes("percentage") || slug.includes("fair-pay"))
    return "raises";
  if (slug.includes("freelance") || slug.includes("day-rate"))
    return "freelance";
  if (slug.includes("overtime") || slug.includes("hourly") || slug.includes("time-and-half") || slug.includes("double-time"))
    return "hourly";
  return "default";
}

function CategoryIcon({ category, className }: { category: CategoryKey; className?: string }) {
  if (category === "offers") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M9 11l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category === "raises") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 17l6-6 4 4 7-8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h7v7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category === "freelance") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category === "hourly") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2.1 2.1M8.6 15.4l-2.1 2.1m0-11l2.1 2.1m6.8 6.8l2.1 2.1" strokeLinecap="round" />
    </svg>
  );
}

function CategoryArt({
  category,
  iconClassName,
  className,
}: {
  category: CategoryKey;
  iconClassName: string;
  className?: string;
}) {
  const cat = CATEGORIES[category];
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className ?? ""}`}
      style={{ background: `linear-gradient(135deg, ${cat.from}, ${cat.to})` }}
    >
      {/* soft glow blobs for depth */}
      <div
        className="absolute -top-8 -left-10 w-32 h-32 rounded-full opacity-30 blur-2xl"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-10 -right-6 w-40 h-40 rounded-full opacity-20 blur-2xl"
        style={{ background: "black" }}
      />

      {/* dot-grid texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* diagonal glare stripe */}
      <div
        className="absolute -inset-y-10 left-1/3 w-1/3 rotate-12 opacity-20"
        style={{ background: "linear-gradient(90deg, transparent, white, transparent)" }}
      />

      {/* glass icon badge */}
      <span className="relative flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/30 shadow-lg p-4">
        <CategoryIcon category={category} className={`${iconClassName} text-white drop-shadow-sm`} />
      </span>
    </div>
  );
}

const TOOLS = [
  {
    title: "Job Offer Comparison Calculator",
    href: "/job-offer-comparison-calculator",
    description: "Compare two job offers by total compensation, not just salary.",
  },
  {
    title: "Raise Compounding Calculator",
    href: "/raise-compounding-calculator",
    description: "Compare annual raises vs. a one-time jump over several years.",
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
  {
    title: "Overtime Pay Calculator",
    href: "/overtime-pay-calculator",
    description: "Calculate your regular pay, overtime pay, and total earnings.",
  },
  {
    title: "Percentage Increase Calculator",
    href: "/percentage-increase-calculator",
    description: "Calculate percentage increase between two values instantly.",
  },
];

const BROWSE_CATEGORIES: { key: CategoryKey; blurb: string }[] = [
  { key: "raises", blurb: "Know what a fair raise looks like." },
  { key: "freelance", blurb: "Price your work with confidence." },
  { key: "hourly", blurb: "Turn hours worked into real pay." },
  { key: "offers", blurb: "Compare total compensation, not just salary." },
];

export default function HomeClient({ posts }: { posts: Post[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey | "all">("all");

  const featured = posts[0];
  const rest = posts.slice(1);

  const filteredTools =
    activeCategory === "all"
      ? TOOLS
      : TOOLS.filter((tool) => getCategoryKey(tool.href) === activeCategory);

  const scrollToTools = () => {
    document.getElementById("tools")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const selectCategory = (key: CategoryKey) => {
    setActiveCategory((current) => (current === key ? "all" : key));
    scrollToTools();
  };

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-bold text-2xl tracking-tight">
            Odo<span className="text-orange-500">jema</span>
          </h1>

          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition">Home</Link>
            <Link href="/blog" className="hover:text-gray-900 transition">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #FFF8EE 0%, #FFFDF9 100%)" }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FB923C, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #34D399, transparent 70%)" }}
        />

        <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-orange-600">
            Career · Growth · Income
          </span>

          <h2 className="mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-gray-900">
            Know your worth.
            <br />
            Calculate it.
          </h2>

          <p className="mt-5 text-xl text-gray-600 leading-relaxed">
            Free calculators and practical guides to help you make smarter work and income decisions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={() => {
                setActiveCategory("all");
                scrollToTools();
              }}
              className="px-6 py-3 rounded-full font-semibold text-white shadow-lg shadow-orange-200 hover:shadow-orange-300 transition"
              style={{ backgroundColor: "#EA580C" }}
            >
              Explore Calculators
            </button>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-full font-semibold border-2 border-orange-300 text-orange-700 hover:bg-orange-50 transition"
            >
              Browse All Articles
            </Link>
          </div>

          <div className="mt-10 mx-auto max-w-md bg-white border border-orange-100 rounded-2xl shadow-sm px-6 py-5">
            <p className="text-gray-700 italic">
              &ldquo;Most companies budgeted a 3%&ndash;4% raise for 2026 &mdash; is your last increase keeping up?&rdquo;
            </p>
            <Link
              href="/blog/what-is-a-fair-pay-increase"
              className="mt-2 inline-block text-sm font-semibold text-orange-600 hover:underline"
            >
              Check if your raise is fair →
            </Link>
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900">Browse by Category</h2>
        <p className="mt-2 text-gray-600">
          Pick a category to see every matching calculator below.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {BROWSE_CATEGORIES.map((c) => {
            const cat = CATEGORIES[c.key];
            const isActive = activeCategory === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => selectCategory(c.key)}
                aria-pressed={isActive}
                className={`text-center rounded-2xl border p-6 transition-all duration-200 ${
                  isActive
                    ? `${cat.bg} border-transparent shadow-md -translate-y-0.5`
                    : "border-gray-100 bg-white hover:shadow-md hover:-translate-y-0.5"
                }`}
              >
                <span
                  className={`mx-auto flex items-center justify-center w-12 h-12 rounded-xl ${cat.iconBg} ${cat.text}`}
                >
                  <CategoryIcon category={c.key} className="w-6 h-6" />
                </span>
                <h3 className={`mt-4 font-semibold ${cat.text}`}>{cat.label}</h3>
                <p className="mt-1 text-sm text-gray-600">{c.blurb}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Tools grid */}
      <section id="tools" className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100 scroll-mt-20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === "all" ? "All Calculators" : CATEGORIES[activeCategory].label}
            </h2>
            <p className="mt-2 text-gray-600">Free, instant, and built for real career decisions.</p>
          </div>

          {activeCategory !== "all" && (
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className="text-sm font-semibold text-orange-600 hover:underline"
            >
              Show all calculators
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {filteredTools.map((tool) => {
            const key = getCategoryKey(tool.href);
            const cat = CATEGORIES[key];
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group border border-gray-100 rounded-2xl p-6 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <span
                  className={`flex items-center justify-center w-10 h-10 rounded-xl ${cat.iconBg} ${cat.text}`}
                >
                  <CategoryIcon category={key} className="w-5 h-5" />
                </span>

                <span className={`mt-3 inline-block text-[11px] font-bold uppercase tracking-wide ${cat.text}`}>
                  {cat.label}
                </span>

                <h3 className="mt-2 text-lg font-semibold text-gray-900">{tool.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>

          {(() => {
            const key = getArticleCategoryKey(featured.slug);
            const cat = CATEGORIES[key];
            return (
              <Link
                href={`/blog/${featured.slug}`}
                className="mt-8 grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-200"
              >
                <CategoryArt category={key} iconClassName="w-10 h-10" className="h-56 md:h-full" />

                <div className="p-8 flex flex-col justify-center bg-white">
                  <span className={`inline-block w-fit text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${cat.bg} ${cat.text}`}>
                    {cat.label}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900 leading-snug">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{featured.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-orange-600">Read this article →</span>
                </div>
              </Link>
            );
          })()}
        </section>
      )}

      {/* Latest articles */}
      <section className="border-t border-gray-100 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:underline">
              View all →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {rest.map((post) => {
              const key = getArticleCategoryKey(post.slug);
              const cat = CATEGORIES[key];
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <CategoryArt category={key} iconClassName="w-6 h-6" className="h-28" />

                  <div className="p-6">
                    <span className={`inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${cat.bg} ${cat.text}`}>
                      {cat.label}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900 leading-snug group-hover:underline decoration-2 underline-offset-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-400">{post.date}</p>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between flex-wrap gap-3">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Odojema. All rights reserved.</p>
          <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition">Blog</Link>
        </div>
      </footer>
    </main>
  );
}