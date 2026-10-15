import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Car, 
  KeyRound, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Scale, 
  Clock
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { CORE_PRACTICE_AREAS } from '../data/firmData';

export default function PracticeAreas({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredAreas = activeTab === 'all' 
    ? CORE_PRACTICE_AREAS 
    : CORE_PRACTICE_AREAS.filter(a => a.id === activeTab);

  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[{ label: 'Practice Areas' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0a1b30] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Scale className="w-3.5 h-3.5" />
              <span>Wake County &amp; North Carolina Legal Representation</span>
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Legal Defense Practice Areas
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When your freedom, driving privileges, or professional record are at risk, Attorney Josiah Fapojuwo provides aggressive, battle-tested advocacy across North Carolina courts.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-slate-100 border-b border-slate-200 py-4 sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            All Practice Areas
          </button>

          <button
            onClick={() => setActiveTab('criminal-defense')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'criminal-defense'
                ? 'bg-amber-500 text-slate-950 shadow font-bold'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Criminal Defense</span>
          </button>

          <button
            onClick={() => setActiveTab('traffic-transportation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'traffic-transportation'
                ? 'bg-amber-500 text-slate-950 shadow font-bold'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>Traffic &amp; Transportation</span>
          </button>

          <button
            onClick={() => setActiveTab('license-restoration')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'license-restoration'
                ? 'bg-amber-500 text-slate-950 shadow font-bold'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Driver's License Restoration</span>
          </button>
        </div>
      </section>

      {/* Detailed Practice Area Cards */}
      <section className="py-16 sm:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
          {filteredAreas.map((area) => {
            const Icon = area.id === 'criminal-defense' ? ShieldAlert : area.id === 'traffic-transportation' ? Car : KeyRound;

            return (
              <div 
                key={area.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                      North Carolina Defense
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                      {area.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {area.tagline}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={area.path}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow"
                    >
                      <span>Explore Dedicated Guide</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed bg-white p-5 rounded-xl border border-slate-200 shadow-inner">
                    {area.description}
                  </p>

                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                      Specific Cases &amp; Charges We Handle:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-700">
                      {area.subcategories.map((sub, i) => (
                        <div key={i} className="flex items-center gap-2.5 p-3 bg-white rounded-lg border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      Free Confidential Consultation Available
                    </span>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation(area.id)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 underline cursor-pointer"
                    >
                      Consult with Josiah on this matter →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY HIRE COUNSEL VS PAYING ONLINE */}
      <section className="py-16 bg-slate-100 border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Know Your Legal Rights
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              The True Cost of Unrepresented Legal Pleading
            </h2>
            <p className="text-slate-600 text-sm">
              In North Carolina, pleading guilty without legal advice can have long-lasting collateral consequences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without Counsel */}
            <div className="bg-rose-50/60 rounded-2xl p-6 sm:p-8 border border-rose-200 space-y-4">
              <div className="flex items-center gap-2 text-rose-800 font-bold font-heading text-lg">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                <span>Without Attorney Representation</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-rose-950">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Paying tickets online triggers an automatic guilty plea on your driving record.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Insurance rates spike up to 400% for 36 consecutive months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Risk of sudden driver's license suspension by the NC DMV.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Permanent criminal records that fail employer background checks.</span>
                </li>
              </ul>
            </div>

            {/* With Fapojuwo Law */}
            <div className="bg-emerald-50/60 rounded-2xl p-6 sm:p-8 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold font-heading text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>With Attorney Josiah Fapojuwo</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>We negotiate for dismissals, 0-point improper equipment, or charge reductions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Most traffic clients never have to take off work or physically appear in court.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Protection of commercial driver licenses (CDL) and professional credentials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Over 20 years of local Wake County prosecutor and courtroom relationships.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
