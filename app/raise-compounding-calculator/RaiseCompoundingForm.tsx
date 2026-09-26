"use client";

import { useState } from "react";

interface YearData {
  year: number;
  scenarioASalary: number;
  scenarioBSalary: number;
}

export default function RaiseCompoundingForm() {
  const [startingSalary, setStartingSalary] = useState("");
  const [years, setYears] = useState("5");
  const [annualRaisePercent, setAnnualRaisePercent] = useState("3");
  const [oneTimeJumpPercent, setOneTimeJumpPercent] = useState("15");

  const [yearData, setYearData] = useState<YearData[] | null>(null);
  const [totalA, setTotalA] = useState<number | null>(null);
  const [totalB, setTotalB] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const salary = Number(startingSalary);
    const numYears = Number(years);
    const raisePct = Number(annualRaisePercent);
    const jumpPct = Number(oneTimeJumpPercent);

    if (!salary || salary <= 0) {
      setError("Please enter a valid starting salary.");
      setYearData(null);
      return;
    }

    if (!numYears || numYears <= 0 || numYears > 40) {
      setError("Years must be between 1 and 40.");
      setYearData(null);
      return;
    }

    if (raisePct < 0 || raisePct > 100) {
      setError("Annual raise percentage must be between 0 and 100.");
      setYearData(null);
      return;
    }

    if (jumpPct < 0 || jumpPct > 100) {
      setError("One-time jump percentage must be between 0 and 100.");
      setYearData(null);
      return;
    }

    setError("");

    const data: YearData[] = [];
    let sumA = 0;
    let sumB = 0;

    // Scenario B: one-time jump applied at year 1, then flat
    const scenarioBFlatSalary = salary * (1 + jumpPct / 100);

    for (let year = 1; year <= numYears; year++) {
      const scenarioASalary = salary * Math.pow(1 + raisePct / 100, year);
      const scenarioBSalary = scenarioBFlatSalary;

      sumA += scenarioASalary;
      sumB += scenarioBSalary;

      data.push({ year, scenarioASalary, scenarioBSalary });
    }

    setYearData(data);
    setTotalA(sumA);
    setTotalB(sumB);
  };

  const finalA = yearData ? yearData[yearData.length - 1].scenarioASalary : null;
  const finalB = yearData ? yearData[yearData.length - 1].scenarioBSalary : null;

  return (
    <>
      <div className="mt-10 space-y-6">
        <div>
          <label className="block mb-2 font-medium" htmlFor="startingSalary">
            Starting Annual Salary ($)
          </label>
          <input
            id="startingSalary"
            type="number"
            min="0"
            value={startingSalary}
            onChange={(e) => setStartingSalary(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculate()}
            placeholder="60000"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="years">
            Number of Years
          </label>
          <input
            id="years"
            type="number"
            min="1"
            max="40"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculate()}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="annualRaisePercent">
            Scenario A: Annual Raise Every Year (%)
          </label>
          <input
            id="annualRaisePercent"
            type="number"
            min="0"
            step="0.1"
            value={annualRaisePercent}
            onChange={(e) => setAnnualRaisePercent(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculate()}
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            A smaller raise applied and compounded every year
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium" htmlFor="oneTimeJumpPercent">
            Scenario B: One-Time Jump, Then Flat (%)
          </label>
          <input
            id="oneTimeJumpPercent"
            type="number"
            min="0"
            step="0.1"
            value={oneTimeJumpPercent}
            onChange={(e) => setOneTimeJumpPercent(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && calculate()}
            className="w-full border rounded-lg px-4 py-3"
          />
          <p className="mt-1 text-sm text-gray-500">
            A bigger raise once (e.g. new job or promotion), no further raises
          </p>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={calculate}
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Calculate
        </button>
      </div>

      {yearData && finalA !== null && finalB !== null && totalA !== null && totalB !== null && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Results After {years} Years</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium">Scenario A: Final Salary</p>
              <p className="text-3xl font-bold mt-1">
                ${finalA.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Total earned over {years} years: $
                {totalA.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </div>

            <div>
              <p className="font-medium">Scenario B: Final Salary</p>
              <p className="text-3xl font-bold mt-1">
                ${finalB.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Total earned over {years} years: $
                {totalB.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <p className="text-lg font-semibold">
              {totalA > totalB
                ? `Scenario A earns $${(totalA - totalB).toLocaleString(undefined, { maximumFractionDigits: 0 })} more in total over ${years} years.`
                : totalB > totalA
                ? `Scenario B earns $${(totalB - totalA).toLocaleString(undefined, { maximumFractionDigits: 0 })} more in total over ${years} years.`
                : "Both scenarios earn roughly the same total over this period."}
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Year</th>
                  <th className="text-right py-2">Scenario A</th>
                  <th className="text-right py-2">Scenario B</th>
                </tr>
              </thead>
              <tbody>
                {yearData.map((row) => (
                  <tr key={row.year} className="border-b">
                    <td className="py-2">{row.year}</td>
                    <td className="text-right py-2">
                      $
                      {row.scenarioASalary.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                    <td className="text-right py-2">
                      $
                      {row.scenarioBSalary.toLocaleString(undefined, {
                        maximumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}