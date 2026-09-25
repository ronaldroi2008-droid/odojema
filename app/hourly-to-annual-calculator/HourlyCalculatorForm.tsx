"use client";

import { useState } from "react";

export default function HourlyCalculatorForm() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const [annualSalary, setAnnualSalary] = useState<number | null>(null);

  const calculateSalary = () => {
    const hourly = Number(hourlyRate);
    const hours = Number(hoursPerWeek);
    const weeks = Number(weeksPerYear);

    if (!hourly || !hours || !weeks) return;

    const annual = hourly * hours * weeks;

    setAnnualSalary(annual);
  };

  return (
    <>
      <div className="mt-10 space-y-6">
        <div>
          <label className="block mb-2 font-medium" htmlFor="hourlyRate">
            Hourly Rate ($)
          </label>

          <input
            id="hourlyRate"
            type="number"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
            placeholder="25"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="hoursPerWeek">
            Hours Per Week
          </label>

          <input
            id="hoursPerWeek"
            type="number"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="weeksPerYear">
            Weeks Per Year
          </label>

          <input
            id="weeksPerYear"
            type="number"
            value={weeksPerYear}
            onChange={(e) => setWeeksPerYear(e.target.value)}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          onClick={calculateSalary}
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Calculate
        </button>
      </div>

      {annualSalary !== null && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Annual Salary</h2>

          <p className="text-4xl font-bold mt-4">
            ${annualSalary.toLocaleString()}
          </p>

          <div className="mt-6 space-y-2">
            <p>
              Monthly Salary:{" "}
              <strong>
                $
                {(annualSalary / 12).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </strong>
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