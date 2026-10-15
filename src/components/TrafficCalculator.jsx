import React, { useState } from 'react';
import { AlertTriangle, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';

const VIOLATIONS = [
  { id: 'speed_10_under', label: 'Speeding 10 mph or less over limit (under 55 mph zone)', dmvPoints: 2, sdipPoints: 0, insuranceHike: '0% - 25%', suspensionRisk: 'Low' },
  { id: 'speed_10_over', label: 'Speeding 10–14 mph over speed limit', dmvPoints: 3, sdipPoints: 1, insuranceHike: '30% - 45%', suspensionRisk: 'Moderate' },
  { id: 'speed_15_over', label: 'Speeding 15+ mph over limit (over 55 mph zone)', dmvPoints: 3, sdipPoints: 2, insuranceHike: '45% - 75%', suspensionRisk: 'HIGH - Automatic 30-day NC suspension upon conviction!' },
  { id: 'speed_over_80', label: 'Speeding in excess of 80 mph (Class 3 Misdemeanor)', dmvPoints: 4, sdipPoints: 4, insuranceHike: '90% - 130%', suspensionRisk: 'CRITICAL - Mandatory Court Appearance & Suspension' },
  { id: 'reckless', label: 'Reckless Driving (Careless & Heedless / Endangerment)', dmvPoints: 4, sdipPoints: 4, insuranceHike: '80% - 120%', suspensionRisk: 'HIGH - Criminal record misdemeanor' },
  { id: 'dwlr', label: 'Driving While License Revoked (DWLR)', dmvPoints: 3, sdipPoints: 8, insuranceHike: '190% - 250%', suspensionRisk: 'SEVERE - Extension of revocation & potential jail' },
  { id: 'dwi', label: 'Driving While Impaired (DWI / DUI in NC)', dmvPoints: 0, sdipPoints: 12, insuranceHike: '340% - 400%', suspensionRisk: 'IMMEDIATE 30-Day Civil Revocation + 1 Year Suspension' },
  { id: 'red_light', label: 'Running red light or stop sign', dmvPoints: 3, sdipPoints: 1, insuranceHike: '25% - 40%', suspensionRisk: 'Low' },
  { id: 'following_close', label: 'Following too closely (Tailgating)', dmvPoints: 4, sdipPoints: 2, insuranceHike: '35% - 50%', suspensionRisk: 'Low' },
];

export default function TrafficCalculator({ onConsultClick }) {
  const [selectedViolation, setSelectedViolation] = useState(VIOLATIONS[2].id);
  const current = VIOLATIONS.find(v => v.id === selectedViolation) || VIOLATIONS[0];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden text-left">
      <div className="bg-gradient-to-r from-slate-900 to-[#0f223d] p-6 text-white border-b border-amber-500/30">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-400/30">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Interactive NC Legal Tool
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              NC Speeding &amp; Insurance Point Estimator
            </h3>
          </div>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Find out what happens if you pay your North Carolina ticket online instead of hiring defense counsel.
        </p>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Select Your Citation or Alleged Offense:
          </label>
          <select
            value={selectedViolation}
            onChange={(e) => setSelectedViolation(e.target.value)}
            className="w-full p-3.5 bg-slate-50 border-2 border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:outline-none focus:border-amber-500 transition-colors"
          >
            {VIOLATIONS.map(v => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
            <span className="text-xs uppercase font-semibold text-slate-500 block mb-1">
              NC DMV Points
            </span>
            <span className="text-3xl font-extrabold text-slate-900 font-heading">
              {current.dmvPoints} <span className="text-sm font-normal text-slate-500">pts</span>
            </span>
            <span className="text-[11px] text-slate-500 block mt-1">
              12 points in 3 yrs = License Suspension
            </span>
          </div>

          <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-200 text-center">
            <span className="text-xs uppercase font-semibold text-amber-800 block mb-1">
              NC Insurance Points
            </span>
            <span className="text-3xl font-extrabold text-amber-700 font-heading">
              {current.sdipPoints} <span className="text-sm font-normal text-amber-900">pts</span>
            </span>
            <span className="text-[11px] text-amber-800 font-semibold block mt-1">
              Est. Rate Hike: {current.insuranceHike}
            </span>
          </div>

          <div className="bg-rose-50 rounded-xl p-4 border border-rose-200 text-center">
            <span className="text-xs uppercase font-semibold text-rose-800 block mb-1">
              License Suspension Risk
            </span>
            <span className="text-sm font-bold text-rose-700 block mt-1 leading-snug">
              {current.suspensionRisk}
            </span>
          </div>
        </div>

        {/* Lawyer Strategy Alert */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-emerald-950">
            <strong className="block font-bold text-emerald-900 mb-0.5">
              How Attorney Josiah Fapojuwo Protects You:
            </strong>
            Depending on your driving record and case specifics, our goal in Wake County court is to negotiate a reduction to a non-moving violation (e.g. <em>Improper Equipment</em>), secure a 0-point outcome, or petition for a Prayer for Judgment Continued (PJC), saving you thousands of dollars in insurance hikes.
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>Never pay a ticket without consulting a Wake County defense attorney.</span>
          </div>
          <button
            onClick={() => onConsultClick('traffic-transportation')}
            className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 font-semibold text-sm rounded-xl transition-all shadow flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Fight This Ticket Cleanly</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
