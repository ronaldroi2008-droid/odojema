import Link from "next/link";
import JobOfferForm from "./JobOfferForm";

export const metadata = {
  title: "Job Offer Comparison Calculator | Compare Total Compensation",
  description:
    "Compare two job offers beyond base salary. Factor in bonuses, health insurance, retirement match, PTO, and commute costs to see which offer is actually worth more.",
  openGraph: {
    title: "Job Offer Comparison Calculator",
    description:
      "Compare two job offers by total compensation, not just base salary.",
    url: "https://odojema.com/job-offer-comparison-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/job-offer-comparison-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I compare two job offers fairly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add up the total value of each offer, including base salary, bonus, health insurance value, retirement match, and paid time off, then subtract any added costs like commuting or relocation.",
      },
    },
    {
      "@type": "Question",
      name: "Should I only compare base salary between job offers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Base salary alone can be misleading. Benefits like health insurance, retirement matching, and paid time off can add significant value, while commute and relocation costs can reduce the real value of an offer.",
      },
    },
    {
      "@type": "Question",
      name: "How is PTO value calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PTO value is estimated by calculating your daily rate (annual salary divided by working days in a year) and multiplying it by the number of paid days off offered.",
      },
    },
  ],
};

export default function JobOfferComparisonCalculator() {
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
        Job Offer Comparison Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Compare two job offers by total compensation, not just base salary.
        Factor in bonuses, benefits, and hidden costs to see which one
        actually pays more.
      </p>

      <JobOfferForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Compare Job Offers Properly
        </h2>

        <p className="mt-4">
          Base salary is only one part of total compensation. A lower salary
          with strong benefits can be worth more than a higher salary with
          none, once you account for the full picture:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Total Value = Base Salary + Bonus + Health Insurance Value +
            Retirement Match + PTO Value − Commute/Relocation Cost
          </code>
        </div>

        <p className="mt-4">
          PTO is converted into a dollar value using your daily rate, since
          paid time off is compensation you&apos;d otherwise have to take
          unpaid or not at all.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          Offer A: $70,000 base, no bonus, $4,000 health insurance value, 3%
          retirement match, 10 PTO days, no commute cost.
        </p>

        <p className="mt-4">
          Offer B: $75,000 base, no bonus, $0 health insurance value, 0%
          retirement match, 5 PTO days, $2,000 commute cost.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Offer A ≈ $70,000 + $4,000 + $2,100 (retirement) + $2,692 (PTO) =
            $78,792
            <br />
            Offer B ≈ $75,000 + $1,346 (PTO) − $2,000 = $74,346
          </code>
        </div>

        <p className="mt-4">
          Despite the higher listed salary, Offer B is actually worth about
          $4,446 less per year once benefits and costs are factored in.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I compare two job offers fairly?
          </h3>
          <p className="mt-2">
            Add up the total value of each offer, including base salary,
            bonus, health insurance value, retirement match, and paid time
            off, then subtract any added costs like commuting or relocation.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            Should I only compare base salary between job offers?
          </h3>
          <p className="mt-2">
            No. Base salary alone can be misleading. Benefits like health
            insurance, retirement matching, and paid time off can add
            significant value, while commute and relocation costs can reduce
            the real value of an offer.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">How is PTO value calculated?</h3>
          <p className="mt-2">
            PTO value is estimated by calculating your daily rate (annual
            salary divided by working days in a year) and multiplying it by
            the number of paid days off offered.
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
            <a href="/hourly-to-annual-calculator">
              Hourly to Annual Salary Calculator
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