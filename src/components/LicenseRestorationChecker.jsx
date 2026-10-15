import React, { useState } from 'react';
import { KeyRound, CheckCircle2, ArrowRight, FileCheck } from 'lucide-react';

export default function LicenseRestorationChecker({ onConsultClick }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    reason: '',
    countyCount: '',
    hasDWI: '',
  });

  const handleSelect = (field, val) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => Math.max(1, prev - 1));

  return (
    <div className="bg-gradient-to-br from-slate-900 via-[#0a192f] to-slate-900 text-white rounded-2xl shadow-xl border border-amber-500/30 overflow-hidden text-left p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
          <KeyRound className="w-6 h-6" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
            Interactive Eligibility Tool
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            NC Driver's License Restoration Assessment
          </h3>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-sm text-slate-300 font-medium">
            Step 1 of 3: What is the primary reason your North Carolina driver's license was suspended or revoked?
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { id: 'fta', label: 'Unpaid tickets or Failure to Appear (FTA) in court' },
              { id: 'points', label: 'Accumulated too many DMV points (12+ points)' },
              { id: 'dwi', label: 'Driving While Impaired (DWI) conviction' },
              { id: 'dwlr', label: 'Caught driving while already revoked (DWLR)' },
              { id: 'out_of_state', label: 'Out-of-state violation / National Driver Register hold' },
              { id: 'not_sure', label: "I am not sure / Multiple old issues across years" }
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  handleSelect('reason', opt.id);
                  nextStep();
                }}
                className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  answers.reason === opt.id 
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md' 
                    : 'bg-white/5 border-white/10 text-slate-200 hover:bg-white/10 hover:border-amber-400/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-sm text-slate-300 font-medium">
            Step 2 of 3: Are your citations or suspensions in Wake County only, or spread across multiple North Carolina counties?
          </p>

          <div className="space-y-2.5 pt-2">
            {[
              { id: 'wake_only', label: 'Wake County only (Raleigh, Cary, Garner, Apex, etc.)' },
              { id: 'multiple_nc', label: 'Multiple NC counties (e.g., Wake, Durham, Johnston, Harnett, etc.)' },
              { id: 'out_state', label: 'Both North Carolina and another US state' },
              { id: 'unknown', label: 'I do not know all the counties where tickets exist' },
            ].map(opt => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  handleSelect('countyCount', opt.id);
                  nextStep();
                }}
                className="w-full p-3.5 rounded-xl border bg-white/5 border-white/10 text-left text-xs sm:text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-amber-400/50 transition-all cursor-pointer"
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={prevStep}
              className="text-xs text-amber-400 hover:underline cursor-pointer"
            >
              ← Back to previous question
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div className="bg-amber-500/10 border border-amber-400/30 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-200">
              <strong className="text-amber-300 font-bold block mb-1">
                Assessment Complete: Your License May Be Eligible for Restoration
              </strong>
              Attorney Josiah Fapojuwo has over 20 years of experience resolving complex DMV suspensions, recalling outstanding arrest warrants/FTAs, and representing drivers at North Carolina DMV hearings.
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2 text-xs text-slate-300">
            <span className="font-semibold text-white block">Next Recommended Steps:</span>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>We perform a certified NC DMV driving record audit to list every hold.</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>We file motions to strike old failures and re-open cases in court.</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>We represent you at your DMV restoration hearing to get your full license back.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setStep(1)}
              className="text-xs text-slate-400 hover:text-slate-200 underline cursor-pointer"
            >
              Restart Assessment
            </button>
            <button
              onClick={() => onConsultClick('license-restoration')}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request DMV Record Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
