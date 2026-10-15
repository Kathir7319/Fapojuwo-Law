import React from 'react';
import { 
  Award, 
  Scale, 
  CheckCircle2, 
  BookOpen, 
  UserCheck, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  Gavel,
  Star
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FIRM_INFO, CLIENT_REVIEWS } from '../data/firmData';

export default function About({ onOpenConsultation }) {
  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[{ label: 'About Attorney Josiah Fapojuwo' }]} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0b1c33] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <Award className="w-3.5 h-3.5" />
              <span>NC State Bar Member Since 2005 • 20+ Years Experience</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              About Attorney Olutosin O. "Josiah" Fapojuwo
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Founder &amp; Principal Attorney of Fapojuwo Law, PLLC in downtown Raleigh, North Carolina. A steadfast defender of constitutional rights, driver licenses, and client futures.
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-16 sm:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Image & Credentials Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" 
                  alt="Attorney Josiah Fapojuwo"
                  className="w-full h-[450px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                    Principal Defense Counsel
                  </span>
                  <h3 className="font-heading text-2xl font-bold">
                    Olutosin O. "Josiah" Fapojuwo
                  </h3>
                  <p className="text-xs text-slate-300">
                    Fapojuwo Law, PLLC • Raleigh, NC
                  </p>
                </div>
              </div>

              {/* Verified Credentials Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                <h4 className="font-serif-accent text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                  Professional Credentials &amp; Admissions
                </h4>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">North Carolina State Bar</strong>
                      <span>Admitted &amp; in Good Standing since 2005 (Bar #33446)</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Juris Doctor (J.D.)</strong>
                      <span>North Carolina Central University School of Law (NCCU Law)</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <Gavel className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Jurisdictions Practiced</strong>
                      <span>Wake County District &amp; Superior Courts, Durham, Johnston, Harnett, &amp; NC DMV Hearings</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Firm Office</strong>
                      <span>5 W Hargett St, Unit 415, Raleigh, NC 27601 (Capital Club Building)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Biography Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                  Decades of Dedicated Practice
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Experienced, Relentless, and Client-Centered Advocacy
                </h2>
              </div>

              {/* Exact user requested copy verbatim */}
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 text-slate-900 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  <strong>Olutosin O. "Josiah" Fapojuwo</strong> is the founder and principal attorney of <strong>Fapojuwo Law, PLLC</strong>. Licensed by the North Carolina State Bar since 2005, Josiah has dedicated his career to navigating the complexities of the state's legal system on behalf of his clients.
                </p>
                <p>
                  Known for his proactive communication and relentless advocacy, he handles every case with the individualized attention it deserves. Whether negotiating with prosecutors or defending clients at trial, Attorney Fapojuwo combines strategic insight with a deep understanding of local North Carolina law to secure the best possible outcomes.
                </p>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <h3 className="font-heading text-xl font-bold text-slate-900 pt-2">
                  A Courtroom Philosophy Grounded in Respect and Strategic Defense
                </h3>
                <p>
                  In the North Carolina legal system, criminal charges and traffic citations are often treated as routine paperwork by large assembly-line firms. Attorney Josiah Fapojuwo rejects this impersonal approach. To Josiah, every case represents a human being's freedom, livelihood, driving privileges, and family peace of mind.
                </p>
                <p>
                  Over more than two decades, Josiah has developed comprehensive experience appearing before North Carolina judges and working with Wake County District Attorneys. He understands how police officers conduct stops, where procedural errors occur, and how to file motions to suppress evidence when constitutional rights have been infringed.
                </p>
              </div>

              {/* 4 Pillars of Advocacy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <UserCheck className="w-4 h-4 text-amber-600" />
                    <span>Direct Access to Josiah</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You speak directly with Attorney Fapojuwo. You are never passed off to a junior paralegal who doesn't know your file.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Scale className="w-4 h-4 text-amber-600" />
                    <span>Fierce Courtroom Negotiation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We relentlessly pursue dismissals, deferred prosecution, charge reductions, and 0-point outcomes whenever possible.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Honest, Transparent Advice</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    No false promises. We give you a clear, objective analysis of the state's evidence and realistic defense strategies.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Proactive Communication</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You are never kept in the dark. We keep you informed before, during, and after every court appearance.
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Schedule Consultation with Josiah</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call (919) 521-8472</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SPOTLIGHT */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Client Feedback
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              What Clients Say About Working with Josiah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_REVIEWS.slice(0, 2).map(r => (
              <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  "{r.text}"
                </p>
                <div className="text-xs font-bold text-slate-900 pt-2 border-t border-slate-100">
                  {r.author} — <span className="font-normal text-slate-500">{r.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
