import Link from "next/link";
import HourlyCalculatorForm from "./HourlyCalculatorForm";

export const metadata = {
  title: "Hourly to Annual Salary Calculator | Convert Hourly Wage to Yearly Pay",
  description:
    "Free hourly to annual salary calculator. Convert your hourly wage into monthly, weekly, and yearly income instantly.",
  openGraph: {
    title: "Hourly to Annual Salary Calculator",
    description:
      "Convert your hourly wage into estimated monthly, weekly, and annual salary.",
    url: "https://odojema.com/hourly-to-annual-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/hourly-to-annual-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate annual salary from hourly pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your hourly rate by your hours worked per week and then by the number of weeks worked per year.",
      },
    },
    {
      "@type": "Question",
      name: "How many work hours are in a year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard full-time schedule is 40 hours per week for 52 weeks, or 2,080 hours per year.",
      },
    },
  ],
};

export default function HourlyToAnnualCalculator() {
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
        Hourly to Annual Salary Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Convert your hourly wage into estimated annual salary.
      </p>

      <HourlyCalculatorForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Calculate Annual Salary from Hourly Pay
        </h2>

        <p className="mt-4">
          To calculate annual salary, multiply your hourly wage by
          the number of hours worked per week and the number of
          weeks worked per year.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Annual Salary = Hourly Rate × Hours Per Week × Weeks Per Year
          </code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          If you earn $25 per hour, work 40 hours per week,
          and work 52 weeks per year:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>$25 × 40 × 52 = $52,000</code>
        </div>

        <p className="mt-4">
          Your estimated annual salary would be $52,000.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate annual salary from hourly pay?
          </h3>

          <p className="mt-2">
            Multiply your hourly rate by your hours worked per week
            and then by the number of weeks worked per year.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            How many work hours are in a year?
          </h3>

          <p className="mt-2">
            A standard full-time schedule is 40 hours per week for
            52 weeks, or 2,080 hours per year.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Tools</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/salary-calculator">Salary Calculator</a>
          </li>
          <li>
            <a href="/raise-calculator">Raise Calculator</a>
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