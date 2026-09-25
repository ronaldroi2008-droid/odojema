"use client";

import { useState } from "react";

export default function FreelanceRateForm() {
  const [desiredIncome, setDesiredIncome] = useState("");
  const [workWeeks, setWorkWeeks] = useState("48");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [billablePercent, setBillablePercent] = useState("70");
  const [expenses, setExpenses] = useState("0");
  const [taxBuffer, setTaxBuffer] = useState("25");

  const [hourlyRate, setHourlyRate] = useState<number | null>(null);
  const [billableHours, setBillableHours] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateRate = () => {
    const income = Number(desiredIncome);
    const weeks = Number(workWeeks);
    const hours = Number(hoursPerWeek);
    const billable = Number(billablePercent);
    const exp = Number(expenses);
    const tax = Number(taxBuffer);

    if (!income || income <= 0) {
      setError("Please enter a valid desired annual income.");
      setHourlyRate(null);
      return;
    }

    if (!weeks || weeks <= 0 || weeks > 52) {
      setError("Work weeks per year must be between 1 and 52.");
      setHourlyRate(null);
      return;
    }

    if (!hours || hours <= 0) {
      setError("Please enter valid hours per week.");
      setHourlyRate(null);
      return;
    }

    if (!billable || billable <= 0 || billable > 100) {
      setError("Billable percentage must be between 1 and 100.");
      setHourlyRate(null);
      return;
    }

    if (exp < 0) {
      setError("Business expenses cannot be negative.");
      setHourlyRate(null);
      return;
    }

    if (tax < 0 || tax > 100) {
      setError("Tax buffer must be between 0 and 100.");
      setHourlyRate(null);
      return;
    }

    setError("");

    const totalHours = weeks * hours;
    const billableHrs = totalHours * (billable / 100);

    const grossNeeded = (income + exp) / (1 - tax / 100);
    const rate = grossNeeded / billableHrs;

    setBillableHours(billableHrs);
    setHourlyRate(rate);
  };

  return (
    <>
      <div className="mt-10 space-y-6">
        <div>
          <label className="block mb-2 font-medium" htmlFor="desiredIncome">
            Desired Annual Income ($)
          </label>

          <input
            id="desiredIncome"
            type="number"
            min="0"
            value={desiredIncome}
            onChange={(e) => setDesiredIncome(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculateRate()}
            placeholder="60000"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="workWeeks">
            Work Weeks Per Year
          </label>

          <input
            id="workWeeks"
            type="number"
            min="1"
            max="52"
            value={workWeeks}
            onChange={(e) => setWorkWeeks(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculateRate()}
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            52 minus vacation, holidays, and sick time
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="hoursPerWeek">
            Hours Per Week
          </label>

          <input
            id="hoursPerWeek"
            type="number"
            min="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculateRate()}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="billablePercent">
            Billable Percentage (%)
          </label>

          <input
            id="billablePercent"
            type="number"
            min="1"
            max="100"
            value={billablePercent}
            onChange={(e) => setBillablePercent(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculateRate()}
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            Time you actually bill clients vs. admin, marketing, unpaid work.
            Most freelancers land between 60-80%.
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="expenses">
            Annual Business Expenses ($)
          </label>

          <input
            id="expenses"
            type="number"
            min="0"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculateRate()}
            placeholder="0"
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            Software, equipment, insurance, and other business costs
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="taxBuffer">
            Tax Buffer (%)
          </label>

          <input
            id="taxBuffer"
            type="number"
            min="0"
            max="100"
            value={taxBuffer}
            onChange={(e) => setTaxBuffer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculateRate()}
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            Rough estimate only — consult a tax professional for your exact
            rate
          </p>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={calculateRate}
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Calculate
        </button>
      </div>

      {hourlyRate !== null && billableHours !== null && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Your Freelance Hourly Rate</h2>

          <p className="text-4xl font-bold mt-4">
            $
            {hourlyRate.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            /hr
          </p>

          <div className="mt-6 space-y-2">
            <p>
              Billable Hours Per Year:{" "}
              <strong>
                {billableHours.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </strong>
            </p>

            <p>
              Day Rate (8hr day):{" "}
              <strong>
                $
                {(hourlyRate * 8).toLocaleString(undefined, {
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