import Link from "next/link";
import SalaryCalculatorForm from "./SalaryCalculatorForm";

export const metadata = {
  title: "Salary Calculator | Convert Monthly Salary to Annual Income",
  description:
    "Free salary calculator. Convert your monthly salary into annual and weekly income instantly.",
  openGraph: {
    title: "Salary Calculator",
    description:
      "Convert your monthly salary into estimated annual and weekly income.",
    url: "https://odojema.com/salary-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/salary-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate annual salary from monthly salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your monthly salary by 12 months.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate weekly salary from annual salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Divide your annual salary by 52 weeks.",
      },
    },
  ],
};

export default function SalaryCalculator() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">Salary Calculator</h1>

      <p className="mt-4 text-gray-600">
        Convert your monthly salary into annual income.
      </p>

      <SalaryCalculatorForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">How to Calculate Annual Salary</h2>

        <p className="mt-4">Multiply your monthly salary by 12 months.</p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Annual Salary = Monthly Salary × 12</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">If your monthly salary is $3,000:</p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>$3,000 × 12 = $36,000</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate annual salary from monthly salary?
          </h3>

          <p className="mt-2">Multiply your monthly salary by 12 months.</p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate weekly salary from annual salary?
          </h3>

          <p className="mt-2">Divide your annual salary by 52 weeks.</p>
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