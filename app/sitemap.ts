import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllPosts } from "@/lib/posts";

// Required for static export (output: "export")
export const dynamic = "force-static";

const BASE_URL = "https://odojema.com";
const APP_DIR = path.join(process.cwd(), "app");

// Mga route na ayaw mong isama sa sitemap (hal. "/thank-you")
const EXCLUDE: string[] = [];

// Hinahanap ang lahat ng folder sa app/ na may page.tsx
function scanApp(dir: string, segments: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes: string[] = [];

  const hasPage = entries.some(
    (e) => e.isFile() && /^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name)
  );
  if (hasPage) routes.push("/" + segments.join("/"));

  for (const e of entries) {
    if (!e.isDirectory()) continue;

    // skip: _private, @parallel, [dynamic], api, components
    if (/^[_@\[]/.test(e.name) || e.name === "api" || e.name === "components") {
      continue;
    }

    // route groups tulad ng (site) ay hindi parte ng URL
    const isGroup = e.name.startsWith("(") && e.name.endsWith(")");
    routes.push(
      ...scanApp(path.join(dir, e.name), isGroup ? segments : [...segments, e.name])
    );
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages (home, calculators, blog index, atbp.): automatic
  const staticEntries: MetadataRoute.Sitemap = Array.from(new Set(scanApp(APP_DIR)))
    .filter((route) => !EXCLUDE.includes(route))
    .sort()
    .map((route) => ({
      url: route === "/" ? BASE_URL : `${BASE_URL}${route}`,
    }));

  // Blog posts: automatic mula sa getAllPosts()
  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
  }));

  return [...staticEntries, ...postEntries];
}