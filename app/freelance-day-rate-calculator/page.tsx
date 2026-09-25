import Link from "next/link";
import DayRateForm from "./DayRateForm";

export const metadata = {
  title: "Freelance Day Rate Calculator | Convert Hourly to Daily Rate",
  description:
    "Convert your freelance hourly rate to a day rate, or a day rate back to hourly. Free calculator for freelancers quoting project-based work.",
  openGraph: {
    title: "Freelance Day Rate Calculator",
    description:
      "Convert between hourly and day rates for freelance project quotes.",
    url: "https://odojema.com/freelance-day-rate-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/freelance-day-rate-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I convert my hourly rate to a day rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your hourly rate by the number of hours you work in a typical day, usually 8.",
      },
    },
    {
      "@type": "Question",
      name: "How do I convert a day rate to an hourly rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide the day rate by the number of hours worked in a typical day.",
      },
    },
    {
      "@type": "Question",
      name: "Should freelancers charge hourly or by the day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Day rates work well for project-based work with a clear scope, since they simplify quoting and reduce the need to track hours. Hourly rates work better for open-ended or unpredictable work.",
      },
    },
  ],
};

export default function FreelanceDayRateCalculator() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">
        Freelance Day Rate Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Convert between your hourly rate and day rate for project-based
        quotes.
      </p>

      <DayRateForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Convert Hourly to Day Rate
        </h2>

        <p className="mt-4">
          Multiply your hourly rate by the number of hours you typically
          work in a day. Most freelancers use an 8-hour day as the
          baseline, but this can be adjusted for shorter or longer working
          days.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Day Rate = Hourly Rate × Hours Per Day</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          If your hourly rate is $50 and you work 8-hour days:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>$50 × 8 = $400 per day</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I convert my hourly rate to a day rate?
          </h3>

          <p className="mt-2">
            Multiply your hourly rate by the number of hours you work in a
            typical day, usually 8.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I convert a day rate to an hourly rate?
          </h3>

          <p className="mt-2">
            Divide the day rate by the number of hours worked in a typical
            day.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            Should freelancers charge hourly or by the day?
          </h3>

          <p className="mt-2">
            Day rates work well for project-based work with a clear scope,
            since they simplify quoting and reduce the need to track hours.
            Hourly rates work better for open-ended or unpredictable work.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Tools</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/freelance-rate-calculator">Freelance Rate Calculator</a>
          </li>
          <li>
            <a href="/hourly-to-annual-calculator">
              Hourly to Annual Salary Calculator
            </a>
          </li>
          <li>
            <a href="/salary-calculator">Salary Calculator</a>
          </li>
        </ul>
      </section>

      <section className="mt-10 text-sm text-gray-500">
        Last updated: September 2026
      </section>
    </main>
  );
}