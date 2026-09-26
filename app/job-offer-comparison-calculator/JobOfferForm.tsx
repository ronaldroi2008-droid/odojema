"use client";

import { useState } from "react";

interface OfferInputs {
  baseSalary: string;
  bonusPercent: string;
  healthInsuranceValue: string;
  retirementMatchPercent: string;
  ptoDays: string;
  commuteCost: string;
}

interface OfferResult {
  totalValue: number;
  bonusAmount: number;
  retirementAmount: number;
  ptoValue: number;
}

const emptyOffer: OfferInputs = {
  baseSalary: "",
  bonusPercent: "0",
  healthInsuranceValue: "0",
  retirementMatchPercent: "0",
  ptoDays: "10",
  commuteCost: "0",
};

function OfferColumn({
  label,
  offer,
  setOffer,
}: {
  label: string;
  offer: OfferInputs;
  setOffer: (o: OfferInputs) => void;
}) {
  const update = (field: keyof OfferInputs, value: string) => {
    setOffer({ ...offer, [field]: value });
  };

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold">{label}</h3>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Base Annual Salary ($)
        </label>
        <input
          type="number"
          min="0"
          value={offer.baseSalary}
          onChange={(e) => update("baseSalary", e.target.value)}
          placeholder="70000"
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Annual Bonus (%)
        </label>
        <input
          type="number"
          min="0"
          value={offer.bonusPercent}
          onChange={(e) => update("bonusPercent", e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Health Insurance Value ($/year)
        </label>
        <input
          type="number"
          min="0"
          value={offer.healthInsuranceValue}
          onChange={(e) => update("healthInsuranceValue", e.target.value)}
          placeholder="0"
          className="w-full border rounded-lg px-3 py-2"
        />
        <p className="mt-1 text-xs text-gray-500">
          Employer&apos;s contribution toward your premium
        </p>
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Retirement Match (%)
        </label>
        <input
          type="number"
          min="0"
          value={offer.retirementMatchPercent}
          onChange={(e) => update("retirementMatchPercent", e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          PTO Days Per Year
        </label>
        <input
          type="number"
          min="0"
          max="365"
          value={offer.ptoDays}
          onChange={(e) => update("ptoDays", e.target.value)}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Annual Commute/Relocation Cost ($)
        </label>
        <input
          type="number"
          min="0"
          value={offer.commuteCost}
          onChange={(e) => update("commuteCost", e.target.value)}
          placeholder="0"
          className="w-full border rounded-lg px-3 py-2"
        />
        <p className="mt-1 text-xs text-gray-500">
          Gas, transit, parking, or relocation costs this job adds
        </p>
      </div>
    </div>
  );
}

export default function JobOfferForm() {
  const [offerA, setOfferA] = useState<OfferInputs>({ ...emptyOffer });
  const [offerB, setOfferB] = useState<OfferInputs>({ ...emptyOffer });

  const [resultA, setResultA] = useState<OfferResult | null>(null);
  const [resultB, setResultB] = useState<OfferResult | null>(null);
  const [error, setError] = useState("");

  const computeOffer = (offer: OfferInputs): OfferResult | null => {
    const salary = Number(offer.baseSalary);
    const bonusPct = Number(offer.bonusPercent);
    const health = Number(offer.healthInsuranceValue);
    const retirementPct = Number(offer.retirementMatchPercent);
    const pto = Number(offer.ptoDays);
    const commute = Number(offer.commuteCost);

    if (!salary || salary <= 0) return null;

    const bonusAmount = salary * (bonusPct / 100);
    const retirementAmount = salary * (retirementPct / 100);
    const dailyRate = salary / (52 * 5);
    const ptoValue = dailyRate * pto;

    const totalValue =
      salary + bonusAmount + health + retirementAmount + ptoValue - commute;

    return { totalValue, bonusAmount, retirementAmount, ptoValue };
  };

  const calculate = () => {
    if (!offerA.baseSalary || Number(offerA.baseSalary) <= 0) {
      setError("Please enter a valid base salary for Offer A.");
      setResultA(null);
      setResultB(null);
      return;
    }

    if (!offerB.baseSalary || Number(offerB.baseSalary) <= 0) {
      setError("Please enter a valid base salary for Offer B.");
      setResultA(null);
      setResultB(null);
      return;
    }

    setError("");
    setResultA(computeOffer(offerA));
    setResultB(computeOffer(offerB));
  };

  const difference =
    resultA && resultB ? Math.abs(resultA.totalValue - resultB.totalValue) : null;

  const winner =
    resultA && resultB
      ? resultA.totalValue > resultB.totalValue
        ? "A"
        : resultB.totalValue > resultA.totalValue
        ? "B"
        : "tie"
      : null;

  return (
    <>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <OfferColumn label="Offer A" offer={offerA} setOffer={setOfferA} />
        <OfferColumn label="Offer B" offer={offerB} setOffer={setOfferB} />
      </div>

      {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}

      <button
        onClick={calculate}
        className="mt-6 px-6 py-3 rounded-lg bg-black text-white"
      >
        Compare Offers
      </button>

      {resultA && resultB && (
        <div className="mt-10 p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold">Comparison Result</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="font-medium">Offer A Total Value</p>
              <p className="text-3xl font-bold mt-1">
                $
                {resultA.totalValue.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>

            <div>
              <p className="font-medium">Offer B Total Value</p>
              <p className="text-3xl font-bold mt-1">
                $
                {resultB.totalValue.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            {winner === "tie" ? (
              <p className="text-lg font-semibold">
                Both offers are worth roughly the same.
              </p>
            ) : (
              <p className="text-lg font-semibold">
                Offer {winner} is worth $
                {difference?.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}{" "}
                more per year.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}