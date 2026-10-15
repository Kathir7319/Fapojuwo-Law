import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldAlert, 
  Car, 
  KeyRound, 
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';
import { FIRM_INFO } from '../data/firmData';

export default function Navbar({ onOpenConsultation }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeDropdownOpen, setIsPracticeDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
    setIsPracticeDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-300">
      {/* Top Notification / Emergency Bar */}
      <div className="bg-slate-950 text-white border-b border-amber-500/20 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          {/* Left: Location & Hours */}
          <div className="flex items-center flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-slate-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{FIRM_INFO.address.street}, Raleigh, NC 27601</span>
            </span>
            <span className="hidden lg:inline text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>{FIRM_INFO.hours}</span>
            </span>
          </div>

          {/* Right: Urgent Arrest & Phone Hotline */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs whitespace-nowrap">
            <span className="text-amber-400 font-medium hidden md:inline">
              Arrested or facing court in Wake County?
            </span>
            <a 
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors tracking-wide whitespace-nowrap"
              aria-label="Call Fapojuwo Law"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              <span>Call: {FIRM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-200 ${
        isScrolled ? 'py-2' : 'py-3'
      }`}>
        <div className="flex items-center justify-between gap-4">
          {/* Logo (Never wraps) */}
          <Logo />

          {/* Desktop Navigation Links (xl and above, with whitespace-nowrap on every item) */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7 text-sm font-semibold text-slate-700 whitespace-nowrap">
            <Link 
              to="/" 
              className={`transition-colors hover:text-amber-600 whitespace-nowrap py-1 ${
                isActive('/') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`transition-colors hover:text-amber-600 whitespace-nowrap py-1 ${
                isActive('/about') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              About Josiah
            </Link>

            {/* Practice Areas with Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsPracticeDropdownOpen(true)}
              onMouseLeave={() => setIsPracticeDropdownOpen(false)}
            >
              <Link 
                to="/practice-areas" 
                className={`inline-flex items-center gap-1 transition-colors hover:text-amber-600 whitespace-nowrap ${
                  isActive('/practice-areas') ? 'text-amber-600 font-bold' : ''
                }`}
              >
                <span>Practice Areas</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
              </Link>

              {/* Dropdown Menu */}
              {isPracticeDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-2 text-left z-50 animate-in fade-in duration-150">
                  <Link 
                    to="/practice-areas/criminal-defense"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-colors">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover/item:text-amber-700 text-sm">
                        Criminal Defense
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        Felonies, Misdemeanors, Drug &amp; Assault
                      </div>
                    </div>
                  </Link>

                  <Link 
                    to="/practice-areas/traffic-transportation"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-colors">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover/item:text-amber-700 text-sm">
                        Traffic &amp; Transportation
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        Speeding, DWI/DUI, DWLR, Reckless Tickets
                      </div>
                    </div>
                  </Link>

                  <Link 
                    to="/practice-areas/license-restoration"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 group-hover/item:bg-amber-500 group-hover/item:text-slate-950 transition-colors">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover/item:text-amber-700 text-sm">
                        Driver's License Restoration
                      </div>
                      <div className="text-xs text-slate-500 font-normal">
                        DMV Hearings, FTA Warrants, Old Suspensions
                      </div>
                    </div>
                  </Link>

                  <div className="pt-1 mt-1 border-t border-slate-100">
                    <Link
                      to="/practice-areas"
                      className="block px-3 py-2 text-xs font-semibold text-amber-600 hover:text-amber-700 text-center"
                    >
                      View All Practice Areas →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/resources" 
              className={`transition-colors hover:text-amber-600 whitespace-nowrap py-1 ${
                isActive('/resources') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Resources &amp; FAQ
            </Link>

            <Link 
              to="/contact" 
              className={`transition-colors hover:text-amber-600 whitespace-nowrap py-1 ${
                isActive('/contact') ? 'text-amber-600 font-bold border-b-2 border-amber-500' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Phone Button (Never wraps) */}
            <a 
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs xl:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 whitespace-nowrap flex-shrink-0"
              aria-label="Direct Phone Line"
            >
              <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="whitespace-nowrap">{FIRM_INFO.phone}</span>
            </a>

            {/* Free Consultation Button (Never wraps) */}
            <button
              onClick={() => onOpenConsultation()}
              className="whitespace-nowrap px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle (Visible on screens < xl) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none flex-shrink-0"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer (For screens < xl) */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3 pb-4 border-t border-slate-200 text-left animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2.5 pt-3">
              <Link 
                to="/" 
                className={`py-2 px-3 rounded-lg font-semibold text-sm ${
                  isActive('/') ? 'bg-amber-50 text-amber-700' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              <Link 
                to="/about" 
                className={`py-2 px-3 rounded-lg font-semibold text-sm ${
                  isActive('/about') ? 'bg-amber-50 text-amber-700' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                About Attorney Josiah
              </Link>

              <div className="bg-slate-50 rounded-xl p-3 space-y-2 border border-slate-200">
                <Link
                  to="/practice-areas"
                  className="font-bold text-xs uppercase tracking-wider text-slate-500 block mb-1 hover:text-amber-600"
                >
                  Practice Areas Overview →
                </Link>

                <Link
                  to="/practice-areas/criminal-defense"
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-amber-600 py-1"
                >
                  <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Criminal Defense</span>
                </Link>

                <Link
                  to="/practice-areas/traffic-transportation"
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-amber-600 py-1"
                >
                  <Car className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Transportation &amp; Traffic Law</span>
                </Link>

                <Link
                  to="/practice-areas/license-restoration"
                  className="flex items-center gap-2 text-sm text-slate-700 hover:text-amber-600 py-1"
                >
                  <KeyRound className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Driver's License Restoration</span>
                </Link>
              </div>

              <Link 
                to="/resources" 
                className={`py-2 px-3 rounded-lg font-semibold text-sm ${
                  isActive('/resources') ? 'bg-amber-50 text-amber-700' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Wake County Resources &amp; FAQ
              </Link>

              <Link 
                to="/contact" 
                className={`py-2 px-3 rounded-lg font-semibold text-sm ${
                  isActive('/contact') ? 'bg-amber-50 text-amber-700' : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                Contact &amp; Location
              </Link>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 text-center font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow cursor-pointer"
                >
                  Schedule a Free Consultation
                </button>
                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="w-full py-3 text-center font-bold text-sm text-slate-800 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call: {FIRM_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
