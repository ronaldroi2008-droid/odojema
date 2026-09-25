import Link from "next/link";
import FreelanceRateForm from "./FreelanceRateForm";

export const metadata = {
  title: "Freelance Rate Calculator | Find Your Ideal Hourly Rate",
  description:
    "Calculate the hourly rate you need to charge as a freelancer based on your desired income, billable hours, expenses, and taxes.",
  openGraph: {
    title: "Freelance Rate Calculator",
    description:
      "Find your ideal freelance hourly rate based on income goals, billable time, expenses, and taxes.",
    url: "https://odojema.com/freelance-rate-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/freelance-rate-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate my freelance hourly rate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add your desired income and business expenses, divide by your tax buffer, then divide by your billable hours per year — not your total working hours.",
      },
    },
    {
      "@type": "Question",
      name: "What is a billable percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's the portion of your working time you actually bill to clients. Most freelancers spend 20-40% of their time on admin, marketing, and unpaid work, leaving 60-80% billable.",
      },
    },
    {
      "@type": "Question",
      name: "Why is my freelance rate higher than a similar employee salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freelancers cover their own taxes, benefits, equipment, and unpaid downtime, none of which an employer provides. These costs are built into the hourly rate.",
      },
    },
  ],
};

export default function FreelanceRateCalculator() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">Freelance Rate Calculator</h1>

      <p className="mt-4 text-gray-600">
        Find the hourly rate you need to charge based on your income goals,
        billable hours, expenses, and taxes.
      </p>

      <FreelanceRateForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Calculate Your Freelance Rate
        </h2>

        <p className="mt-4">
          Unlike a salaried employee, your freelance rate needs to cover
          taxes, business expenses, and unpaid time spent on admin and
          marketing. The formula accounts for all of this:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Hourly Rate = (Desired Income + Expenses) ÷ (1 − Tax Buffer) ÷
            Billable Hours
          </code>
        </div>

        <p className="mt-4">
          Billable hours are lower than your total working hours because
          time spent on invoicing, proposals, and marketing isn&apos;t
          billed to clients.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          If you want to earn $60,000 a year, work 48 weeks at 40 hours a
          week, bill 70% of that time, have $2,000 in expenses, and set
          aside 25% for taxes:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Billable Hours = 48 × 40 × 0.70 = 1,344 hours
            <br />
            Rate = ($60,000 + $2,000) ÷ 0.75 ÷ 1,344 ≈ $61.50/hr
          </code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate my freelance hourly rate?
          </h3>

          <p className="mt-2">
            Add your desired income and business expenses, divide by your
            tax buffer, then divide by your billable hours per year — not
            your total working hours.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">What is a billable percentage?</h3>

          <p className="mt-2">
            It&apos;s the portion of your working time you actually bill to
            clients. Most freelancers spend 20-40% of their time on admin,
            marketing, and unpaid work, leaving 60-80% billable.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            Why is my freelance rate higher than a similar employee salary?
          </h3>

          <p className="mt-2">
            Freelancers cover their own taxes, benefits, equipment, and
            unpaid downtime, none of which an employer provides. These costs
            are built into the hourly rate.
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
            <a href="/raise-calculator">Raise Calculator</a>
          </li>
        </ul>
      </section>

      <section className="mt-10 text-sm text-gray-500">
        Last updated: September 2026
      </section>
    </main>
  );
}