import React from 'react';
import { 
  Car, 
  AlertTriangle, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  Scale,
  Award
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import TrafficCalculator from '../components/TrafficCalculator';
import { FIRM_INFO } from '../data/firmData';

export default function TrafficLaw({ onOpenConsultation }) {
  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[
        { label: 'Practice Areas', to: '/practice-areas' },
        { label: 'Transportation & Traffic Law' }
      ]} />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0d1e34] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>Wake County Traffic Court Defense</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Traffic Violations &amp; Transportation Law in Raleigh, NC
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Don't let a traffic ticket hike your auto insurance or revoke your driver's license. Attorney Josiah Fapojuwo resolves citations cleanly—in most cases without you ever stepping foot in court.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenConsultation('traffic-transportation')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Fight Your Traffic Ticket</span>
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
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Exact Copy Callout */}
              <div className="p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl space-y-3">
                <h2 className="font-heading text-2xl font-bold text-slate-900">
                  Protect Your License and Insurance Rates
                </h2>
                <p className="text-slate-700 text-base leading-relaxed">
                  A single traffic violation can lead to skyrocketing insurance premiums, points on your license, or even suspension. We regularly represent clients in traffic court to resolve violations cleanly.
                </p>
              </div>

              {/* Practice Subcategories */}
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Traffic Matters We Defend in Raleigh &amp; North Carolina:
                </h3>

                {/* 1. Speeding & Reckless Driving */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                      <Car className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900">
                      Speeding &amp; Reckless Driving Tickets
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    In North Carolina, speeding more than 15 mph over the limit where the speed is over 55 mph, or any speed over 80 mph, is classified as a misdemeanor that triggers mandatory court appearances and immediate 30-day driver's license revocation upon conviction!
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Attorney Josiah Fapojuwo regularly negotiates reductions down to non-moving violations such as <strong>Improper Equipment</strong> (which carries zero DMV points and zero insurance points) or seeks a <strong>Prayer for Judgment Continued (PJC)</strong> to protect your record.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Speeding 15+ mph over the limit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Speeds over 80 mph (Class 3 Misdemeanor)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Careless and Reckless Driving citations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Waiver of Appearance (We go to court for you)</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Driving While Impaired (DWI) */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900">
                      Driving While Impaired (DWI / DUI Defense)
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    North Carolina enforces some of the strictest DWI laws in the nation under N.C.G.S. § 20-138.1. A DWI conviction brings mandatory license suspension, steep fines, substance abuse assessments, continuous alcohol monitoring, community service, and potential jail time.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We meticulously challenge whether law enforcement had reasonable suspicion for the traffic stop, assess police compliance with standard field sobriety testing, and review chemical breath testing protocols (EC/IR II) or blood draw search warrants. We also fight to obtain <strong>Limited Driving Privileges (LDP)</strong> so you can commute to work and take care of your family.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>First-time &amp; Repeat DWI Defense</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>30-Day Civil Revocation Hearings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Pre-Trial Limited Driving Privileges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Ignition Interlock Relief Hearings</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Driving While License Revoked (DWLR) */}
                <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400">
                      <Scale className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900">
                      Driving While License Revoked (DWLR)
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    DWLR charges create an endless cycle for many North Carolina drivers. If convicted of DWLR, the NC DMV automatically tacks on an additional one-year, two-year, or permanent suspension to your driving record!
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We distinguish between <em>DWLR Impaired Revocation</em> (Class 1 Misdemeanor) and <em>DWLR Non-Impaired Revocation</em> (Class 3 Misdemeanor). Our approach is to halt the cycle, resolve your underlying suspensions, and dismiss the DWLR charge.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>DWLR Impaired vs Non-Impaired</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Avoiding mandatory suspension extensions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Commercial Driver (CDL) protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                      <span>Restoring valid driving privileges</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Waiver of Appearance Benefit */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-amber-900 font-bold font-heading text-lg">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span>The Benefit of a Waiver of Appearance in Wake County</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  In North Carolina, when you retain Attorney Josiah Fapojuwo for standard traffic citations, we provide you with a <strong>Waiver of Appearance</strong> form. This legal document authorizes Josiah to stand before the judge on your behalf.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-800">
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80">
                    ✓ No missing work or wages
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80">
                    ✓ No waiting hours in traffic court
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-amber-200/80">
                    ✓ Clean resolution with prompt notice
                  </div>
                </div>
              </div>

              {/* Embedded Calculator */}
              <div className="pt-4">
                <TrafficCalculator onConsultClick={onOpenConsultation} />
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Ticket Review Card */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-amber-500/30 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Got a Traffic Ticket?
                </span>
                <h3 className="font-heading text-xl font-bold">
                  Send Us Your Citation For Review
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never plead guilty or pay online before having our team inspect your citation. We can help save your license and prevent auto insurance surcharges.
                </p>
                <button
                  onClick={() => onOpenConsultation('traffic-transportation')}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow cursor-pointer"
                >
                  Request Ticket Review
                </button>
              </div>

              {/* Direct Call Box */}
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <h4 className="font-heading text-base font-bold text-slate-900">
                  Speak Directly With Attorney Josiah
                </h4>
                <p className="text-xs text-slate-600">
                  Have a question about an upcoming court date in Wake County? Call us during office hours or leave an urgent intake message:
                </p>
                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {FIRM_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
