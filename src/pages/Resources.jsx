import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ChevronDown, 
  Scale
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FAQS, FIRM_INFO } from '../data/firmData';

export default function Resources({ onOpenConsultation }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[{ label: 'Resources & Wake County Court Guide' }]} />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0a1b30] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Raleigh Legal Information &amp; Courthouses</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Wake County Court Resources &amp; Legal FAQs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Navigating the North Carolina judicial system can be overwhelming. Here is essential guidance for individuals facing court dates, citations, or legal questions in Wake County.
            </p>
          </div>
        </div>
      </section>

      {/* Wake County Courthouse Directory */}
      <section className="py-16 bg-white text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Courthouse Directory
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Where to Go: Wake County Court Locations
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Wake County operates two primary legal complexes in downtown Raleigh, both within walking distance of our office at 5 W Hargett St.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wake County Justice Center */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 text-amber-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Wake County Justice Center
                  </h3>
                  <span className="text-xs text-amber-700 font-semibold">
                    Criminal District Court, Traffic Court, Clerk of Superior Court
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p>
                  <strong>Address:</strong> 300 S Salisbury St, Raleigh, NC 27601
                </p>
                <p>
                  <strong>Security Note:</strong> All visitors must pass through airport-style metal detectors. Weapons, pocket knives, and recording devices are prohibited.
                </p>
                <p className="text-slate-500">
                  Most traffic citations and misdemeanor criminal hearings occur in courtroom 1A, 2A, 3A, or 4A of the Justice Center.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Wake+County+Justice+Center+300+S+Salisbury+St+Raleigh+NC+27601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Justice Center on Google Maps →</span>
                </a>
              </div>
            </div>

            {/* Wake County Courthouse */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900 text-amber-400">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-slate-900">
                    Wake County Courthouse
                  </h3>
                  <span className="text-xs text-amber-700 font-semibold">
                    Civil Court, Family Court, Register of Deeds
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <p>
                  <strong>Address:</strong> 316 Fayetteville St, Raleigh, NC 27601
                </p>
                <p>
                  <strong>Proximity:</strong> Directly connects to the Justice Center via pedestrian walkways and underground security corridors.
                </p>
                <p className="text-slate-500">
                  Located right around the corner from Fapojuwo Law, PLLC at 5 W Hargett St.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=316+Fayetteville+St+Raleigh+NC+27601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Courthouse on Google Maps →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO DO IF PULLED OVER OR ARRESTED IN NC */}
      <section className="py-16 bg-slate-100 text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Constitutional Rights
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              What to Do If Pulled Over or Arrested in North Carolina
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Stay Calm and Polite
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pull over safely, keep both hands visible on the steering wheel, and avoid sudden movements. Do not argue or resist on the roadside.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Provide Credentials Only
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide your driver's license, registration, and proof of insurance upon request. You are required by NC law to identify yourself.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Exercise Your 5th Amendment Right
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You do not have to answer questions such as "Do you know how fast you were going?" or "Have you had anything to drink tonight?" State politely: <em>"I choose to remain silent."</em>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-amber-400 font-bold flex items-center justify-center text-sm">
                4
              </span>
              <h3 className="font-heading text-lg font-bold text-slate-900">
                Contact Defense Counsel
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Request to speak with an attorney immediately. Call Fapojuwo Law, PLLC at <strong>(919) 521-8472</strong> before agreeing to any questioning or signing statements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Common Questions
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Frequently Asked Legal Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers regarding North Carolina court appearances, traffic citations, and criminal defense.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-3 bg-white animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need help banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white text-center space-y-4 border border-amber-500/30">
            <h3 className="font-heading text-xl font-bold">
              Have a Specific Question About Your Case?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Every situation has unique details. Call Attorney Josiah Fapojuwo for an individualized, confidential consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                onClick={() => onOpenConsultation()}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm rounded-xl cursor-pointer shadow"
              >
                Schedule Free Consultation
              </button>
              <a
                href={`tel:${FIRM_INFO.phoneRaw}`}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20"
              >
                Call: {FIRM_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
