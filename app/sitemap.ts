import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://odojema.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}