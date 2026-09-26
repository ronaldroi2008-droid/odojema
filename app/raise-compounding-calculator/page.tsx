import Link from "next/link";
import RaiseCompoundingForm from "./RaiseCompoundingForm";

export const metadata = {
  title: "Raise Compounding Calculator | Compare Annual Raises vs One-Time Jumps",
  description:
    "See how consistent annual raises compare to a single one-time salary jump over several years, including total earnings and final salary differences.",
  openGraph: {
    title: "Raise Compounding Calculator",
    description:
      "Compare consistent annual raises against a one-time salary jump over time.",
    url: "https://odojema.com/raise-compounding-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/raise-compounding-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it better to get small raises every year or one big raise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the time horizon and the size of each option. Small annual raises compound over time and can eventually overtake a one-time jump, especially over longer periods, while a one-time jump provides more value immediately.",
      },
    },
    {
      "@type": "Question",
      name: "How does salary compounding work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each year's raise is calculated as a percentage of the previous year's salary, not the original starting salary, so the dollar value of each raise grows over time.",
      },
    },
  ],
};

export default function RaiseCompoundingCalculator() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">
        Raise Compounding Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Compare consistent annual raises against a one-time salary jump to
        see which grows your income more over time.
      </p>

      <RaiseCompoundingForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">How Compounding Works</h2>

        <p className="mt-4">
          A raise applied every year compounds, meaning each year&apos;s
          increase is based on the previous year&apos;s salary, not the
          original starting number. Over time, this can add up to more than
          a single larger raise that never repeats.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Year N Salary = Starting Salary × (1 + Raise %)^N</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          Starting at $60,000, a 3% annual raise every year versus a single
          15% jump with no further raises:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Year 5 (3% annual) = $60,000 × 1.03⁵ ≈ $69,556
            <br />
            Year 5 (one-time 15%) = $60,000 × 1.15 = $69,000
          </code>
        </div>

        <p className="mt-4">
          By year 5, the compounding raises slightly overtake the one-time
          jump, and the gap continues to widen the longer the time period
          extends.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            Is it better to get small raises every year or one big raise?
          </h3>
          <p className="mt-2">
            It depends on the time horizon and the size of each option.
            Small annual raises compound over time and can eventually
            overtake a one-time jump, especially over longer periods, while
            a one-time jump provides more value immediately.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">How does salary compounding work?</h3>
          <p className="mt-2">
            Each year&apos;s raise is calculated as a percentage of the
            previous year&apos;s salary, not the original starting salary,
            so the dollar value of each raise grows over time.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Tools</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/raise-calculator">Raise Calculator</a>
          </li>
          <li>
            <a href="/salary-calculator">Salary Calculator</a>
          </li>
          <li>
            <a href="/job-offer-comparison-calculator">
              Job Offer Comparison Calculator
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