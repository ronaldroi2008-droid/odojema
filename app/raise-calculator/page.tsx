import Link from "next/link";
import RaiseCalculatorForm from "./RaiseCalculatorForm";

export const metadata = {
  title: "Raise Calculator | Calculate Your Salary Increase",
  description:
    "Free raise calculator. Enter your current salary and raise percentage to see your new salary instantly.",
  openGraph: {
    title: "Raise Calculator",
    description:
      "Calculate your new salary after a raise, including the raise amount and new monthly pay.",
    url: "https://odojema.com/raise-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/raise-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my new salary after a raise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your current salary by the raise percentage, then add that amount to your current salary.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate a raise percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the raise amount by your current salary, then multiply by 100 to get the percentage.",
      },
    },
  ],
};

export default function RaiseCalculator() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">Raise Calculator</h1>

      <p className="mt-4 text-gray-600">
        Calculate your new salary after a percentage raise.
      </p>

      <RaiseCalculatorForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">How to Calculate a Raise</h2>

        <p className="mt-4">
          Multiply your current salary by the raise percentage to get the
          raise amount, then add it to your current salary.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>New Salary = Current Salary + (Current Salary × Raise %)</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          If your current salary is $50,000 and you get a 5% raise:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>$50,000 + ($50,000 × 0.05) = $52,500</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate my new salary after a raise?
          </h3>

          <p className="mt-2">
            Multiply your current salary by the raise percentage, then add
            that amount to your current salary.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate a raise percentage?
          </h3>

          <p className="mt-2">
            Divide the raise amount by your current salary, then multiply by
            100 to get the percentage.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Tools</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/hourly-to-annual-calculator">
              Hourly to Annual Salary Calculator
            </a>
          </li>
          <li>
            <a href="/salary-calculator">Salary Calculator</a>
          </li>
          <li>
            <a href="/freelance-rate-calculator">
              Freelance Rate Calculator
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-10 text-sm text-gray-500">
        Last updated: September 2026
      </section>
    </main>
  );
}