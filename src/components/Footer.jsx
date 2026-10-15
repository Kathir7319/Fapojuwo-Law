import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowUp, 
  Star, 
  Scale, 
  Award,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { FIRM_INFO } from '../data/firmData';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-500/20 text-left pt-16 pb-12 relative">
      {/* Top Pre-Footer Call to Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0c1c33] via-slate-900 to-[#0c1c33] border border-amber-500/30 p-8 sm:p-10 shadow-2xl overflow-hidden">
          {/* Subtle gold accent watermark */}
          <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 opacity-10 pointer-events-none">
            <Scale className="w-64 h-64 text-amber-400" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-400/20">
                <Award className="w-3.5 h-3.5" />
                Over 20 Years of Proven North Carolina Legal Experience
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                When Your Freedom, License, or Future Is on the Line
              </h3>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Do not face North Carolina prosecutors alone. Get strategic, personalized defense from Attorney Josiah Fapojuwo in downtown Raleigh.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${FIRM_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(919) 521-8472</span>
              </a>

              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Free Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Firm Overview */}
          <div className="space-y-4">
            <Logo theme="dark" />
            <p className="text-xs text-slate-400 leading-relaxed">
              At Fapojuwo Law, PLLC, we believe that everyone deserves a robust and skilled legal defense. Led by attorney Olutosin O. "Josiah" Fapojuwo, licensed by the North Carolina State Bar since 2005.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-200">
                4.6 / 5.0 Rating
              </span>
              <span className="text-[11px] text-slate-400">
                (90+ Reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div className="space-y-3">
            <h4 className="font-serif-accent text-sm font-bold text-amber-400 uppercase tracking-wider">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link 
                  to="/practice-areas/criminal-defense" 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/70" />
                  <span>Criminal Defense Overview</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas/criminal-defense" 
                  className="hover:text-amber-400 transition-colors text-slate-400 pl-4 block"
                >
                  • Felonies &amp; Misdemeanors
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas/criminal-defense" 
                  className="hover:text-amber-400 transition-colors text-slate-400 pl-4 block"
                >
                  • Drug Offenses &amp; Assault Charges
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas/traffic-transportation" 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/70" />
                  <span>Transportation &amp; Traffic Law</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas/traffic-transportation" 
                  className="hover:text-amber-400 transition-colors text-slate-400 pl-4 block"
                >
                  • Speeding &amp; Reckless Driving
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas/traffic-transportation" 
                  className="hover:text-amber-400 transition-colors text-slate-400 pl-4 block"
                >
                  • DWI / DUI Defense &amp; DWLR
                </Link>
              </li>
              <li>
                <Link 
                  to="/practice-areas/license-restoration" 
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500/70" />
                  <span>Driver's License Restoration</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-accent text-sm font-bold text-amber-400 uppercase tracking-wider">
              Law Firm &amp; Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Attorney Josiah Fapojuwo
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-amber-400 transition-colors">
                  All Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-amber-400 transition-colors">
                  Wake County Justice Center Guide
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-amber-400 transition-colors">
                  What to Do When Pulled Over in NC
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Office Location &amp; Directions
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => onOpenConsultation()} 
                  className="text-amber-400 hover:underline cursor-pointer font-semibold"
                >
                  Schedule Free Case Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3 text-xs">
            <h4 className="font-serif-accent text-sm font-bold text-amber-400 uppercase tracking-wider">
              Downtown Raleigh Office
            </h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">
                    {FIRM_INFO.name}
                  </span>
                  <span>{FIRM_INFO.address.street}</span>
                  <span className="block">{FIRM_INFO.address.city}, {FIRM_INFO.address.stateAbbr} {FIRM_INFO.address.zip}</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    ({FIRM_INFO.address.landmark})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
                  href={`tel:${FIRM_INFO.phoneRaw}`} 
                  className="text-white hover:text-amber-400 font-bold transition-colors"
                >
                  {FIRM_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Office Hours:</span>
                  <span>{FIRM_INFO.hours}</span>
                  <span className="text-[11px] text-amber-400/90 block mt-0.5">
                    {FIRM_INFO.urgentAvailability}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Disclosures */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-200">Legal Disclaimer:</strong> The information provided on this website is for general informational and educational purposes only and does not constitute formal legal advice. Neither visiting this website nor contacting Fapojuwo Law, PLLC through electronic forms or telephone creates an attorney-client relationship. An attorney-client relationship is only established through a signed representation agreement.
          </p>
          <p>
            Past case outcomes, dismissals, or charge reductions do not guarantee or predict a similar result in any future legal matter. Every case is uniquely evaluated based on its own merits, law enforcement procedures, and the specific facts under North Carolina law.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {currentYear} {FIRM_INFO.name}. All Rights Reserved. Principal Office: Raleigh, North Carolina.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-amber-400 font-medium">
              North Carolina State Bar Member (2005)
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
