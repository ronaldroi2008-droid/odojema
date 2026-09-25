"use client";

import Link from "next/link";
import { useState } from "react";

export default function SalaryCalculator() {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    const monthly = Number(monthlySalary);

    if (!monthly) return;

    setAnnualSalary(monthly * 12);
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
        Salary Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Convert your monthly salary into annual income.
      </p>

      <div className="mt-10">
        <label className="block mb-2 font-medium" htmlFor="monthlySalary">
          Monthly Salary
        </label>

        <input
          id="monthlySalary"
          type="number"
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)}
          placeholder="3000"
          className="w-full border rounded-lg px-4 py-3"
        />

        <button
          onClick={calculateSalary}
          className="mt-4 px-6 py-3 bg-black text-white rounded-lg"
        >
          Calculate
        </button>
      </div>

      {annualSalary !== null && (
        <div className="mt-10 border rounded-lg p-6">
          <h2 className="text-2xl font-bold">
            Annual Salary
          </h2>

          <p className="text-4xl font-bold mt-4">
            ${annualSalary.toLocaleString()}
          </p>

          <div className="mt-6 space-y-2">
            <p>
              Monthly Salary: <strong>${Number(monthlySalary).toLocaleString()}</strong>
            </p>

            <p>
              Weekly Salary:{" "}
              <strong>
                $
                {(annualSalary / 52).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </strong>
            </p>
          </div>
        </div>
      )}

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Calculate Annual Salary
        </h2>

        <p className="mt-4">
          Multiply your monthly salary by 12 months.
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            Annual Salary = Monthly Salary × 12
          </code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          Example Calculation
        </h2>

        <p className="mt-4">
          If your monthly salary is $3,000:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            $3,000 × 12 = $36,000
          </code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate annual salary from monthly salary?
          </h3>

          <p className="mt-2">
            Multiply your monthly salary by 12 months.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate weekly salary from annual salary?
          </h3>

          <p className="mt-2">
            Divide your annual salary by 52 weeks.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">
          Related Tools
        </h2>

        <ul className="mt-4 list-disc pl-6">
          <li>
            <a href="/hourly-to-annual-calculator">
              Hourly to Annual Salary Calculator
            </a>
          </li>

          <li>
            <a href="/raise-calculator">
              Raise Calculator
            </a>
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