"use client";

import { useState } from "react";

export default function RaiseCalculatorForm() {
  const [currentSalary, setCurrentSalary] = useState("");
  const [raisePercent, setRaisePercent] = useState("");
  const [newSalary, setNewSalary] = useState<number | null>(null);
  const [raiseAmount, setRaiseAmount] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculateRaise = () => {
    const salary = Number(currentSalary);
    const percent = Number(raisePercent);

    if (!currentSalary || salary <= 0) {
      setError("Please enter a valid current salary.");
      setNewSalary(null);
      return;
    }

    if (!raisePercent || percent <= 0) {
      setError("Please enter a valid raise percentage.");
      setNewSalary(null);
      return;
    }

    setError("");

    const amount = salary * (percent / 100);

    setRaiseAmount(amount);
    setNewSalary(salary + amount);
  };

  return (
    <>
      <div className="mt-10 space-y-6">
        <div>
          <label className="block mb-2 font-medium" htmlFor="currentSalary">
            Current Annual Salary ($)
          </label>

          <input
            id="currentSalary"
            type="number"
            min="0"
            value={currentSalary}
            onChange={(e) => setCurrentSalary(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") calculateRaise();
            }}
            placeholder="50000"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="raisePercent">
            Raise Percentage (%)
          </label>

          <input
            id="raisePercent"
            type="number"
            min="0"
            step="0.1"
            value={raisePercent}
            onChange={(e) => setRaisePercent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") calculateRaise();
            }}
            placeholder="5"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={calculateRaise}
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Calculate
        </button>
      </div>

      {newSalary !== null && raiseAmount !== null && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">New Annual Salary</h2>

          <p className="text-4xl font-bold mt-4">
            ${newSalary.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
          </p>

          <div className="mt-6 space-y-2">
            <p>
              Raise Amount:{" "}
              <strong>
                $
                {raiseAmount.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </strong>
            </p>

            <p>
              New Monthly Salary:{" "}
              <strong>
                $
                {(newSalary / 12).toLocaleString(undefined, {
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