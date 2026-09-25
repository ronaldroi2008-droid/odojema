"use client";

import { useState } from "react";

export default function SalaryCalculatorForm() {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [annualSalary, setAnnualSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    const monthly = Number(monthlySalary);

    if (!monthly) return;

    setAnnualSalary(monthly * 12);
  };

  return (
    <>
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
          <h2 className="text-2xl font-bold">Annual Salary</h2>

          <p className="text-4xl font-bold mt-4">
            ${annualSalary.toLocaleString()}
          </p>

          <div className="mt-6 space-y-2">
            <p>
              Monthly Salary:{" "}
              <strong>${Number(monthlySalary).toLocaleString()}</strong>
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
    </>
  );
}