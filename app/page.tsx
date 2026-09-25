import Link from "next/link";

export default function Home() {
  const tools = [
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
    </main>
  );
}