import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return {
      title: `${post.title} | Odojema Blog`,
      description: post.excerpt,
      alternates: {
        canonical: `https://odojema.com/blog/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;

  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>

      <p className="mt-2 text-sm text-gray-500">{post.date}</p>

      <div
        className="mt-8 prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}