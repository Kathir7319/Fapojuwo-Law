import React from 'react';
import { 
  ShieldAlert, 
  Scale, 
  CheckCircle2, 
  Phone, 
  FileText, 
  ArrowRight,
  Building
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FIRM_INFO } from '../data/firmData';

export default function CriminalDefense({ onOpenConsultation }) {
  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[
        { label: 'Practice Areas', to: '/practice-areas' },
        { label: 'Criminal Defense' }
      ]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0a182b] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Wake County Criminal Court Defense</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Criminal Defense Attorney in Raleigh, NC
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Facing criminal charges can jeopardize your freedom, career, and reputation. Attorney Josiah Fapojuwo provides strategic, relentless defense to protect your constitutional rights.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('criminal-defense')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Schedule Confidential Defense Review</span>
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

      {/* Main Content & Practice Details */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Client Content Callout */}
              <div className="p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl space-y-3">
                <h2 className="font-heading text-2xl font-bold text-slate-900">
                  Protecting Your Rights, Future, and Record
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  Facing criminal charges can be overwhelming. We handle a wide spectrum of criminal matters, tailoring our approach to the unique facts of your situation. Our goals are simple: <strong>protect your rights, minimize potential consequences, and fight for a dismissal or reduction of charges</strong>.
                </p>
              </div>

              {/* Core Areas */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Criminal Matters We Defend in Raleigh &amp; Wake County:
                </h3>

                {/* 1. Felonies & Misdemeanors */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900">
                      Felonies and Misdemeanors
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Under North Carolina General Statutes, criminal charges range from Class 3 misdemeanors to high-level Class A–I felonies. A conviction can result in active prison time, supervised probation, heavy fines, and a permanent criminal record that damages employment and housing opportunities.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Class 1, 2, and 3 Misdemeanors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Class A1 Serious Misdemeanors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Superior Court Felony Indictments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>First Offender Deferred Prosecution</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Drug Offenses & Assault */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900">
                      Drug Offenses and Assault Charges
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Drug allegations in Wake County often hinge on the legality of the police search and seizure. Attorney Josiah Fapojuwo examines 4th Amendment violations, search warrant validity, and lack of constructive possession. In assault cases, we present crucial evidence of self-defense, witness misidentification, and false accusations.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Drug Possession (Schedule I - VI)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Possession with Intent to Sell/Deliver (PWISD)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Simple Assault &amp; Assault on a Female</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Domestic Violence Protective Orders (50B)</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Theft & Property Crimes */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900">
                      Theft and Property Crimes
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Accusations of theft carry a severe stigma of dishonesty, creating immense obstacles for employment and background checks. We meticulously review video surveillance, accounting records, witness credibility, and value calculations to pursue complete dismissals or restitution agreements.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Misdemeanor Larceny &amp; Shoplifting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Felony Larceny (Over $1,000)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Breaking and Entering (B&amp;E)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Embezzlement &amp; Obtaining Property by False Pretenses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Wake County Court Process */}
              <div className="space-y-4 pt-4">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  The North Carolina Criminal Court Process
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      1
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">Arrest &amp; Bond Hearing</strong>
                      <span className="text-xs text-slate-600">
                        We represent you before the magistrate or judge to secure bond reductions or release on your own recognizance (unsecured bond).
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      2
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">First Appearance &amp; Discovery Analysis</strong>
                      <span className="text-xs text-slate-600">
                        We obtain all police reports, body camera footage, dashcam recordings, and witness statements from the Wake County District Attorney's office.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      3
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">Strategic Negotiation &amp; Pre-Trial Motions</strong>
                      <span className="text-xs text-slate-600">
                        Attorney Josiah Fapojuwo leverages over 20 years of courtroom relationships to argue for charge dismissals, deferred prosecution, or diversion programs.
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                      4
                    </div>
                    <div>
                      <strong className="text-slate-900 block text-sm">Trial Defense in District or Superior Court</strong>
                      <span className="text-xs text-slate-600">
                        If the state refuses a fair resolution, we fearlessly advocate your case before judge or jury to fight for a complete "Not Guilty" verdict.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Emergency Call Box */}
              <div className="bg-gradient-to-br from-slate-950 to-[#0e213b] text-white p-6 rounded-2xl border border-amber-500/30 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Arrested in Wake County?
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Do Not Talk to Police Without Counsel
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Anything you say will be used by prosecutors against you. Exercise your 5th Amendment right to remain silent and call Attorney Josiah Fapojuwo immediately.
                </p>
                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call (919) 521-8472</span>
                </a>
              </div>

              {/* Consultation Intake Trigger */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="font-heading text-lg font-bold text-slate-900">
                  Request Case Evaluation
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tell us about your charges or upcoming court date. Consultation is 100% confidential.
                </p>
                <button
                  onClick={() => onOpenConsultation('criminal-defense')}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow cursor-pointer"
                >
                  Schedule Case Review
                </button>
              </div>

              {/* Courthouse Info Card */}
              <div className="p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Building className="w-4 h-4 text-amber-600" />
                  <span>Wake County Justice Center</span>
                </div>
                <p>
                  300 S Salisbury St, Raleigh, NC 27601
                </p>
                <p className="text-slate-500">
                  Our office at 5 W Hargett St is situated just 2 blocks from the courthouse, allowing Attorney Fapojuwo quick, direct access to courtroom sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
