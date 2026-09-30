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

export default function OvertimeForm() {
  const [hourlyRate, setHourlyRate] = useState("25");
  const [regularHours, setRegularHours] = useState("40");
  const [overtimeHours, setOvertimeHours] = useState("10");
  const [multiplier, setMultiplier] = useState("1.5");

  const rate = parseFloat(hourlyRate) || 0;
  const regHours = parseFloat(regularHours) || 0;
  const otHours = parseFloat(overtimeHours) || 0;
  const mult = parseFloat(multiplier) || 1.5;

  const regularPay = rate * regHours;
  const overtimeRate = rate * mult;
  const overtimePay = overtimeRate * otHours;
  const totalPay = regularPay + overtimePay;
  const totalHours = regHours + otHours;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hourly rate ($)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Overtime multiplier
          </label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1.5">1.5x (Time and a half)</option>
            <option value="2.0">2.0x (Double time)</option>
            <option value="2.5">2.5x</option>
            <option value="3.0">3.0x</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Regular hours worked
          </label>
          <input
            type="number"
            min="0"
            step="0.25"
            value={regularHours}
            onChange={(e) => setRegularHours(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Overtime hours worked
          </label>
          <input
            type="number"
            min="0"
            step="0.25"
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">
            Regular pay
            <span className="block text-xs text-gray-400">
              {formatCurrency(rate)} × {regHours} hrs
            </span>
          </span>
          <span className="font-medium">{formatCurrency(regularPay)}</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="text-gray-600">
            Overtime pay
            <span className="block text-xs text-gray-400">
              {formatCurrency(rate)} × {mult} × {otHours} hrs
            </span>
          </span>
          <span className="font-medium">{formatCurrency(overtimePay)}</span>
        </div>

        <div className="flex justify-between pt-3">
          <span className="font-semibold">Total earnings</span>
          <span className="font-bold text-lg text-blue-600">
            {formatCurrency(totalPay)}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500">Overtime rate</p>
          <p className="mt-1 font-semibold">
            {formatCurrency(overtimeRate)}/hr
          </p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500">Extra earnings</p>
          <p className="mt-1 font-semibold">{formatCurrency(overtimePay)}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500">Total hours worked</p>
          <p className="mt-1 font-semibold">{totalHours}</p>
        </div>
      </div>
    </div>
  );
}