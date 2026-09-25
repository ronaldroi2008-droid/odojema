"use client";

import { useState } from "react";

export default function DayRateForm() {
  const [mode, setMode] = useState<"toDay" | "toHourly">("toDay");
  const [hourlyRate, setHourlyRate] = useState("");
  const [dayRate, setDayRate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("8");

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const hours = Number(hoursPerDay);

    if (!hours || hours <= 0 || hours > 24) {
      setError("Hours per day must be between 1 and 24.");
      setResult(null);
      return;
    }

    if (mode === "toDay") {
      const hourly = Number(hourlyRate);

      if (!hourlyRate || hourly <= 0) {
        setError("Please enter a valid hourly rate.");
        setResult(null);
        return;
      }

      setError("");
      setResult(hourly * hours);
    } else {
      const day = Number(dayRate);

      if (!dayRate || day <= 0) {
        setError("Please enter a valid day rate.");
        setResult(null);
        return;
      }

      setError("");
      setResult(day / hours);
    }
  };

  return (
    <>
      <div className="mt-10 space-y-6">
        <div className="flex gap-2">
          <button
            onClick={() => {
              setMode("toDay");
              setResult(null);
              setError("");
            }}
            className={`px-4 py-2 rounded-lg border ${
              mode === "toDay" ? "bg-black text-white" : "bg-white"
            }`}
          >
            Hourly → Day Rate
          </button>

          <button
            onClick={() => {
              setMode("toHourly");
              setResult(null);
              setError("");
            }}
            className={`px-4 py-2 rounded-lg border ${
              mode === "toHourly" ? "bg-black text-white" : "bg-white"
            }`}
          >
            Day Rate → Hourly
          </button>
        </div>

        {mode === "toDay" ? (
          <div>
            <label className="block mb-2 font-medium" htmlFor="hourlyRate">
              Hourly Rate ($)
            </label>

            <input
              id="hourlyRate"
              type="number"
              min="0"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="50"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>
        ) : (
          <div>
            <label className="block mb-2 font-medium" htmlFor="dayRate">
              Day Rate ($)
            </label>

            <input
              id="dayRate"
              type="number"
              min="0"
              value={dayRate}
              onChange={(e) => setDayRate(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="400"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>
        )}

        <div>
          <label className="block mb-2 font-medium" htmlFor="hoursPerDay">
            Hours Per Day
          </label>

          <input
            id="hoursPerDay"
            type="number"
            min="1"
            max="24"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculate()}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={calculate}
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Calculate
        </button>
      </div>

      {result !== null && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">
            {mode === "toDay" ? "Day Rate" : "Hourly Rate"}
          </h2>

          <p className="text-4xl font-bold mt-4">
            $
            {result.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            {mode === "toHourly" ? "/hr" : ""}
          </p>
        </div>
      )}
    </>
  );
}