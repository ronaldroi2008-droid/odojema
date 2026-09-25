"use client";

import { useState } from "react";

export default function HourlyToAnnualCalculator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [annualSalary, setAnnualSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    const hourly = Number(hourlyRate);

    if (!hourly) return;

    const annual = hourly * 40 * 52;

    setAnnualSalary(annual);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">
        Hourly to Annual Salary Calculator
      </h1>

      <p className="mt-4 text-gray-600">
        Convert your hourly wage into estimated annual salary.
      </p>

      <div className="mt-10">
        <label className="block mb-2 font-medium">
          Hourly Rate ($)
        </label>

        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
          className="w-full border rounded-lg px-4 py-3"
          placeholder="Enter hourly rate"
        />

        <button
          onClick={calculateSalary}
          className="mt-4 px-6 py-3 rounded-lg bg-black text-white"
        >
          Calculate
        </button>
      </div>

      {annualSalary !== null && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">
            Annual Salary
          </h2>

          <p className="text-4xl font-bold mt-4">
            ${annualSalary.toLocaleString()}
          </p>
        </div>
      )}

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          How to Calculate Annual Salary from Hourly Pay
        </h2>

        <p className="mt-4">
          To calculate annual salary, multiply your hourly wage
          by the number of hours worked per week and then by
          the number of weeks worked per year.
        </p>

        <p className="mt-4">
          Formula:
        </p>

        <div className="mt-2 p-4 bg-gray-100 rounded-lg">
          <code>
            Annual Salary = Hourly Rate × Hours Per Week × Weeks Per Year
          </code>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          Example Calculation
        </h2>

        <p className="mt-4">
          If you earn $10 per hour and work 40 hours per week for 52 weeks:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <code>
            $10 × 40 × 52 = $20,800
          </code>
        </div>

        <p className="mt-4">
          Your estimated annual salary would be $20,800.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-6">
          <h3 className="font-semibold">
            How do I calculate annual salary from hourly pay?
          </h3>

          <p className="mt-2">
            Multiply your hourly rate by the number of hours worked per week and then by the number of weeks worked per year.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">
            How many work hours are in a year?
          </h3>

          <p className="mt-2">
            A standard full-time schedule is 40 hours per week for 52 weeks, or 2,080 hours per year.
          </p>
        </div>
      </section>
    </main>
  );
}