"use client";

import { useState } from "react";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatPercent(value: number): string {
  if (!isFinite(value)) return "—";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + "%";
}

const examples = [
  { label: "Salary Raise", original: "40000", updated: "44000" },
  { label: "Freelance Rate Increase", original: "50", updated: "60" },
  { label: "Revenue Growth", original: "100000", updated: "125000" },
];

export default function PercentageIncreaseForm() {
  const [originalValue, setOriginalValue] = useState("50000");
  const [newValue, setNewValue] = useState("55000");

  const original = parseFloat(originalValue) || 0;
  const updated = parseFloat(newValue) || 0;

  const difference = updated - original;
  const percentageIncrease = original !== 0 ? (difference / original) * 100 : 0;
  const growthMultiplier = original !== 0 ? updated / original : 0;
  const isDecrease = difference < 0;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Original Value
          </label>
          <input
            type="number"
            step="any"
            value={originalValue}
            onChange={(e) => setOriginalValue(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            New Value
          </label>
          <input
            type="number"
            step="any"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {examples.map((ex) => (
          <button
            key={ex.label}
            type="button"
            onClick={() => {
              setOriginalValue(ex.original);
              setNewValue(ex.updated);
            }}
            className="text-sm px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 transition"
          >
            {ex.label}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">
            {isDecrease ? "Percentage Decrease" : "Percentage Increase"}
            <span className="block text-xs text-gray-400">
              ({formatCurrency(updated)} − {formatCurrency(original)}) ÷{" "}
              {formatCurrency(original)} × 100
            </span>
          </span>
          <span
            className={`font-bold text-lg ${
              isDecrease ? "text-red-600" : "text-blue-600"
            }`}
          >
            {formatPercent(percentageIncrease)}
          </span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">
            {isDecrease ? "Decrease Amount" : "Increase Amount"}
          </span>
          <span className="font-medium">
            {formatCurrency(Math.abs(difference))}
          </span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">Original Value</span>
          <span className="font-medium">{formatCurrency(original)}</span>
        </div>

        <div className="flex justify-between pt-2">
          <span className="text-gray-600">New Value</span>
          <span className="font-medium">{formatCurrency(updated)}</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500">Growth Multiplier</p>
          <p className="mt-1 font-semibold">
            {isFinite(growthMultiplier) ? growthMultiplier.toFixed(2) : "—"}×
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500">Difference</p>
          <p className="mt-1 font-semibold">
            {difference >= 0 ? "+" : "−"}
            {formatCurrency(Math.abs(difference))}
          </p>
        </div>
      </div>
    </div>
  );
}