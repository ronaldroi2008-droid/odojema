import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

// Required for static export (output: "export")
export const dynamic = "force-static";

const BASE_URL = "https://odojema.com";

// Static, non-blog routes. Add new calculator/page routes here when you
// create a new folder under app/ with a page.tsx.
const staticRoutes = [
  "",
  "salary-calculator",
  "raise-calculator",
  "raise-compounding-calculator",
  "hourly-to-annual-calculator",
  "freelance-rate-calculator",
  "freelance-day-rate-calculator",
  "job-offer-comparison-calculator",
  "blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route ? `${BASE_URL}/${route}` : BASE_URL,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
  }));

  return [...staticEntries, ...postEntries];
}