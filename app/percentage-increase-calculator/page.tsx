import Link from "next/link";
import PercentageIncreaseForm from "./PercentageIncreaseForm";

export const metadata = {
  title: "Percentage Increase Calculator | Calculate Percentage Growth",
  description:
    "Calculate percentage increase between two values instantly. Find salary raises, price increases, revenue growth, and percentage changes with our free calculator.",
  openGraph: {
    title: "Percentage Increase Calculator",
    description:
      "Calculate percentage increase between two values instantly.",
    url: "https://odojema.com/percentage-increase-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/percentage-increase-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I calculate percentage increase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Subtract the original value from the new value, divide by the original value, and multiply by 100.",
      },
    },
    {
      "@type": "Question",
      name: "How much is a 10% raise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 10% raise on a $50,000 salary equals $5,000, resulting in a new salary of $55,000.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good salary increase percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good salary increase depends on industry, performance, and market conditions. Many routine raises are smaller than major promotion-related increases.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this calculator for prices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Percentage increase calculations can be used for salaries, prices, revenue, investments, and other values.",
      },
    },
  ],
};

export default function PercentageIncreaseCalculator() {
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
        Percentage Increase Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Enter an original value and a new value to instantly calculate the
        percentage increase, the amount of change, and the growth
        multiplier between the two.
      </p>

      <PercentageIncreaseForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">What Is Percentage Increase?</h2>

        <p className="mt-4">
          A percentage increase measures how much a value has grown
          compared to its original amount. It is commonly used to
          calculate salary raises, business growth, investment returns,
          and price changes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          How to Calculate Percentage Increase
        </h2>

        <p className="mt-4">Formula:</p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Percentage Increase = ((New Value − Original Value) ÷ Original
            Value) × 100
          </code>
        </div>

        <p className="mt-4">
          For example, a salary moving from $50,000 to $55,000 has a
          difference of $5,000. Dividing that by the original $50,000
          gives 0.10, and multiplying by 100 gives a 10% increase.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          Common Percentage Increase Examples
        </h2>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 border-b">
                <th className="py-2 pr-4">Original</th>
                <th className="py-2 pr-4">New</th>
                <th className="py-2">Increase</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4">50,000</td>
                <td className="py-2 pr-4">55,000</td>
                <td className="py-2 font-medium">10%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">60,000</td>
                <td className="py-2 pr-4">66,000</td>
                <td className="py-2 font-medium">10%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">100</td>
                <td className="py-2 pr-4">120</td>
                <td className="py-2 font-medium">20%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4">500</td>
                <td className="py-2 pr-4">600</td>
                <td className="py-2 font-medium">20%</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">1,000</td>
                <td className="py-2 pr-4">1,250</td>
                <td className="py-2 font-medium">25%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Salary Raise Example</h2>

        <p className="mt-4">
          If your salary increases from $50,000 to $55,000, your raise
          percentage is 10%.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            (($55,000 − $50,000) ÷ $50,000) × 100 = 10%
          </code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate percentage increase?
          </h3>
          <p className="mt-2">
            Subtract the original value from the new value, divide by the
            original value, and multiply by 100.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">How much is a 10% raise?</h3>
          <p className="mt-2">
            A 10% raise on a $50,000 salary equals $5,000, resulting in a
            new salary of $55,000.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            What is a good salary increase percentage?
          </h3>
          <p className="mt-2">
            A good salary increase depends on industry, performance, and
            market conditions. Many routine raises are smaller than major
            promotion-related increases.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Can I use this calculator for prices?</h3>
          <p className="mt-2">
            Yes. Percentage increase calculations can be used for
            salaries, prices, revenue, investments, and other values.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Guides</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/raise-calculator">Raise Calculator</a>
          </li>
          <li>
            <a href="/how-much-is-a-5-percent-raise">
              How Much Is a 5% Raise?
            </a>
          </li>
          <li>
            <a href="/how-much-is-a-10-percent-raise">
              How Much Is a 10% Raise?
            </a>
          </li>
          <li>
            <a href="/average-percentage-raise">
              What Is an Average Percentage Raise?
            </a>
          </li>
          <li>
            <a href="/reasonable-raise-percentage">
              What Is a Reasonable Raise Percentage?
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Tools</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/salary-calculator">Salary Calculator</a>
          </li>
          <li>
            <a href="/job-offer-comparison-calculator">
              Job Offer Comparison Calculator
            </a>
          </li>
          <li>
            <a href="/overtime-pay-calculator">Overtime Pay Calculator</a>
          </li>
        </ul>
      </section>

      <section className="mt-10 text-sm text-gray-500">
        Last updated: October 2026
      </section>
    </main>
  );
}