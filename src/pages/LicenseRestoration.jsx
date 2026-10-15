import React from 'react';
import { 
  KeyRound, 
  CheckCircle2, 
  Phone, 
  ArrowRight
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import LicenseRestorationChecker from '../components/LicenseRestorationChecker';
import { FIRM_INFO } from '../data/firmData';

export default function LicenseRestoration({ onOpenConsultation }) {
  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[
        { label: 'Practice Areas', to: '/practice-areas' },
        { label: "Driver's License Restoration" }
      ]} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0b1c31] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <KeyRound className="w-3.5 h-3.5 text-amber-400" />
              <span>North Carolina DMV &amp; Court Record Relief</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Driver's License Restoration in North Carolina
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Don't remain trapped without your driver's license. Attorney Josiah Fapojuwo resolves old tickets, strikes failure-to-appear warrants, and represents you at DMV restoration hearings.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('license-restoration')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Request DMV Record Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${FIRM_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call (919) 521-8472</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Exact Copy Callout */}
              <div className="p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl space-y-3">
                <h2 className="font-heading text-2xl font-bold text-slate-900">
                  Getting You Legally Back on the Road
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Losing your driver's license can cripple your independence and employment opportunities. We walk clients through DMV hearings, resolve old out-of-standing tickets, and fight to get you legally back on the road.
                </p>
              </div>

              {/* The Vicious Cycle */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Breaking the Cycle of License Suspensions in North Carolina
                </h3>
                <p>
                  Tens of thousands of North Carolinians are trapped in an unfair cycle: an old unpaid speeding ticket or missed court date leads to a DMV suspension. Because public transit is limited, they must still drive to work or take their children to school. They are inevitably pulled over and charged with <em>Driving While License Revoked (DWLR)</em>—which leads to even more suspensions, court costs, and potential jail time.
                </p>
                <p>
                  Attorney Josiah Fapojuwo has spent more than 20 years untangling these complex situations. Regardless of whether your tickets originated in Wake County, Durham, Johnston, or across multiple North Carolina jurisdictions, our firm creates a systematic roadmap to resolve every roadblock.
                </p>
              </div>

              {/* Common Issues We Clear */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-slate-900">
                  Common Obstacles We Resolve:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>Failure to Appear (FTA) Warrants</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We file legal motions to strike old FTAs, recall orders for arrest (OFAs), and restore cases to the active court docket for clean disposition.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>NC DMV Administrative Hearings</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If your license is suspended due to excessive points or DWI, we represent you at formal DMV hearings before hearing officers to win restoration.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>Ignition Interlock Relief</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      We represent clients seeking early removal or modification of mandatory Ignition Interlock Device (IID) restrictions.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>Out-of-State &amp; NDR Holds</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      If another state has blocked your license via the National Driver Register (NDR), we work to obtain clearance letters and resolve the hold.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Restoration Roadmap */}
              <div className="space-y-4 pt-2">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Our 4-Step License Restoration Roadmap
                </h3>

                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">Certified DMV Record Audit</strong>
                      <span className="text-xs text-slate-600">
                        We obtain your complete, certified driving record directly from the North Carolina DMV and identify every outstanding hold, suspension date, and pending case.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">Court Docket Motions &amp; Warrant Recall</strong>
                      <span className="text-xs text-slate-600">
                        Attorney Josiah Fapojuwo files motions with the courts to strike old failures, recall pending arrest warrants, and place cases back on the calendar for dismissal or reduction.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">DMV Fee &amp; Compliance Clearance</strong>
                      <span className="text-xs text-slate-600">
                        We guide you through the exact compliance payments and restoration fees required by the NC DMV so you do not waste money on unnecessary fees.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      4
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">DMV Restoration Hearing &amp; License Issuance</strong>
                      <span className="text-xs text-slate-600">
                        Josiah prepares you thoroughly, represents you at your DMV hearing, and ensures you walk away with valid North Carolina driving privileges.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Assessment Tool */}
              <div className="pt-4">
                <LicenseRestorationChecker onConsultClick={onOpenConsultation} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Record Audit Box */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-amber-500/30 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Regain Your Independence
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Start with a Driving Record Review
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every license restoration case is unique. Tell us your situation and let Attorney Josiah Fapojuwo analyze your options.
                </p>
                <button
                  onClick={() => onOpenConsultation('license-restoration')}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow cursor-pointer"
                >
                  Request License Consultation
                </button>
              </div>

              {/* Testimonial Highlight */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Client Success Story
                </span>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  "I went over 6 years without a valid driver's license because of old tickets across three different counties. Josiah pulled my record, cleared every single hold, and walked me through my hearing. I now have my license back!"
                </p>
                <span className="text-xs font-bold text-slate-900 block">
                  — Darnell W., Raleigh NC
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
