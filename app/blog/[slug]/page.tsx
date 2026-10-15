
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
      title: post.title,
      description: post.excerpt,
      alternates: {
        canonical: `https://odojema.com/blog/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

// Hinahati ang HTML content sa mga block.
function splitIntoBlocks(html: string): string[] {
  const blocks = html
    .split(/(?<=<\/(?:p|ul|ol|blockquote|pre|table|h[1-6])>)\s*/i)
    .filter((block) => block.trim().length > 0);

  return blocks.length > 0 ? blocks : [html];
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

  const blocks = splitIntoBlocks(post.contentHtml);

  const firstPart = blocks.slice(0, 3).join("\n");
  const remaining = blocks.slice(3);

  const middleIndex = Math.ceil(remaining.length / 2);
  const middlePart = remaining.slice(0, middleIndex).join("\n");
  const lastPart = remaining.slice(middleIndex).join("\n");

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="text-blue-600 hover:underline"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mt-6">
        {post.title}
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        {post.date}
      </p>

      <div className="mt-8 prose max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: firstPart }}
        />

        <div
          dangerouslySetInnerHTML={{ __html: middlePart }}
        />

        <div
          dangerouslySetInnerHTML={{ __html: lastPart }}
        />
      </div>
    </main>
  );
}
