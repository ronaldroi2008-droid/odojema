import Link from "next/link";
import OvertimeForm from "./OvertimeForm";

export const metadata = {
  title: "Overtime Pay Calculator | Calculate Overtime Earnings",
  description:
    "Calculate overtime pay instantly. Enter your hourly rate, overtime hours, and overtime multiplier to estimate overtime earnings and total pay.",
  openGraph: {
    title: "Overtime Pay Calculator",
    description:
      "Calculate your regular pay, overtime pay, and total earnings instantly.",
    url: "https://odojema.com/overtime-pay-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://odojema.com/overtime-pay-calculator",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is overtime pay calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply your hourly rate by your overtime multiplier, then by the number of overtime hours worked. Add that to your regular pay (hourly rate × regular hours) for your total earnings.",
      },
    },
    {
      "@type": "Question",
      name: "What is time and a half pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Time and a half means you're paid 1.5 times your normal hourly rate for overtime hours. A $20 hourly rate becomes $30 an hour for any overtime worked at this multiplier.",
      },
    },
    {
      "@type": "Question",
      name: "What is double time pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Double time means you're paid 2 times your normal hourly rate. A $20 hourly rate becomes $40 an hour for hours worked at this multiplier, often applied to holidays or hours beyond a higher threshold.",
      },
    },
    {
      "@type": "Question",
      name: "When do I qualify for overtime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This depends on your employer's policy and local labor law, which commonly sets a weekly hours threshold, often 40 hours, beyond which overtime rates apply. Check your local regulations or employee handbook for the exact rule that applies to you.",
      },
    },
  ],
};

export default function OvertimePayCalculator() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-6">Overtime Pay Calculator</h1>

      <p className="mt-4 text-gray-600">
        Enter your hourly rate, hours worked, and overtime multiplier to see
        your regular pay, overtime pay, and total earnings.
      </p>

      <OvertimeForm />

      <section className="mt-16">
        <h2 className="text-2xl font-bold">How Overtime Pay Is Calculated</h2>

        <p className="mt-4">
          Overtime pay adds a multiplier on top of your normal hourly rate
          for hours worked beyond your regular schedule, most commonly 40
          hours a week.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Regular Pay = Hourly Rate × Regular Hours</code>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Overtime Pay = Hourly Rate × Overtime Multiplier × Overtime Hours
          </code>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Total Pay = Regular Pay + Overtime Pay</code>
        </div>

        <p className="mt-4">
          The overtime multiplier depends on your employer&apos;s policy or
          local labor law. Time and a half (1.5x) is the most common rate,
          though double time (2.0x) and higher multipliers apply in some
          jurisdictions, industries, or for holiday work.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Example Calculation</h2>

        <p className="mt-4">
          If your hourly rate is $20, you work 40 regular hours and 10
          overtime hours, at a 1.5x multiplier:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Regular Pay: $20 × 40 = $800</code>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Overtime Pay: $20 × 1.5 × 10 = $300</code>
        </div>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>Total Pay: $800 + $300 = $1,100</code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>

        <div className="mt-6">
          <h3 className="font-semibold">How is overtime pay calculated?</h3>
          <p className="mt-2">
            Multiply your hourly rate by your overtime multiplier, then by
            the number of overtime hours worked. Add that to your regular
            pay for your total earnings.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">What is time and a half pay?</h3>
          <p className="mt-2">
            Time and a half means you&apos;re paid 1.5 times your normal
            hourly rate for overtime hours. A $20 hourly rate becomes $30 an
            hour at this multiplier.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">What is double time pay?</h3>
          <p className="mt-2">
            Double time means you&apos;re paid 2 times your normal hourly
            rate. A $20 hourly rate becomes $40 an hour at this multiplier,
            often applied to holidays or hours beyond a higher threshold.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">When do I qualify for overtime?</h3>
          <p className="mt-2">
            This depends on your employer&apos;s policy and local labor law,
            which commonly sets a weekly hours threshold, often 40 hours,
            beyond which overtime rates apply.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Overtime Guides</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/how-is-overtime-pay-calculated">
              How Is Overtime Pay Calculated?
            </a>
          </li>
          <li>
            <a href="/what-is-time-and-a-half-pay">
              What Is Time and a Half Pay?
            </a>
          </li>
          <li>
            <a href="/how-much-is-overtime-worth">
              How Much Is Overtime Worth?
            </a>
          </li>
          <li>
            <a href="/overtime-pay-vs-regular-pay">
              Overtime Pay vs Regular Pay
            </a>
          </li>
          <li>
            <a href="/double-time-vs-time-and-a-half">
              Double Time vs Time and a Half
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Related Tools</h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/job-offer-comparison-calculator">
              Job Offer Comparison Calculator
            </a>
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