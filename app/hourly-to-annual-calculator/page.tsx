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
    </main>
  );
}