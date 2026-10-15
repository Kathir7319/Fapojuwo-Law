import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ 
  _variant = 'header', 
  theme = 'light',
  className = '',
  showTagline = true 
}) {
  const isDarkBg = theme === 'dark';

  return (
    <Link 
      to="/" 
      className={`group inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 ${className}`}
      aria-label="Fapojuwo Law, PLLC Homepage"
    >
      {/* Crest Icon Badge */}
      <div className="relative flex-shrink-0">
        <svg 
          viewBox="0 0 100 100" 
          className="w-11 h-11 md:w-12 md:h-12 drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7e19e"/>
              <stop offset="45%" stopColor="#d4af37"/>
              <stop offset="100%" stopColor="#9b7c2a"/>
            </linearGradient>
            <linearGradient id="shieldNavy" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f223d"/>
              <stop offset="100%" stopColor="#071221"/>
            </linearGradient>
          </defs>

          {/* Outer Shield Boundary */}
          <path 
            d="M50 5 L88 18 C88 56 68 84 50 95 C32 84 12 56 12 18 Z" 
            fill="url(#shieldNavy)" 
            stroke="url(#logoGold)" 
            strokeWidth="2.5"
          />

          {/* Inner Golden Border */}
          <path 
            d="M50 11 L82 22 C82 53 65 77 50 87 C35 77 18 53 18 22 Z" 
            fill="none" 
            stroke="url(#logoGold)" 
            strokeWidth="1" 
            strokeDasharray="2,3" 
            opacity="0.8"
          />

          {/* Scales of Justice */}
          <line x1="50" y1="24" x2="50" y2="72" stroke="url(#logoGold)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="22" r="3" fill="url(#logoGold)" />
          {/* Balance Bar */}
          <line x1="28" y1="36" x2="72" y2="36" stroke="url(#logoGold)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="36" r="2.5" fill="url(#logoGold)" />
          
          {/* Left Pan */}
          <line x1="30" y1="36" x2="24" y2="50" stroke="url(#logoGold)" strokeWidth="1.2" />
          <line x1="30" y1="36" x2="36" y2="50" stroke="url(#logoGold)" strokeWidth="1.2" />
          <path d="M21 50 Q30 58 39 50 Z" fill="url(#logoGold)" />

          {/* Right Pan */}
          <line x1="70" y1="36" x2="64" y2="50" stroke="url(#logoGold)" strokeWidth="1.2" />
          <line x1="70" y1="36" x2="76" y2="50" stroke="url(#logoGold)" strokeWidth="1.2" />
          <path d="M61 50 Q70 58 79 50 Z" fill="url(#logoGold)" />

          {/* Monogram FL */}
          <text 
            x="50" 
            y="67" 
            fontFamily="'Cinzel', Georgia, serif" 
            fontSize="10" 
            fontWeight="bold" 
            textAnchor="middle" 
            fill="url(#logoGold)" 
            letterSpacing="1"
          >
            FL
          </text>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-serif-accent font-extrabold tracking-widest text-lg sm:text-xl uppercase transition-colors duration-200 ${
            isDarkBg ? 'text-white' : 'text-slate-900'
          }`}>
            Fapojuwo Law
          </span>
          <span className="font-serif-accent text-xs font-semibold tracking-wider text-amber-500">
            PLLC
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
            <span className={isDarkBg ? 'text-slate-400' : 'text-slate-600'}>
              Attorneys at Law
            </span>
            <span className="text-amber-500">•</span>
            <span className="text-amber-600 font-bold">
              Raleigh, NC
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
