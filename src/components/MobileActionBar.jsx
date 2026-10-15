import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export default function MobileActionBar({ onOpenConsultation }) {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=5+W+Hargett+St+Unit+415+Raleigh+NC+27601`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 text-center">
        {/* Call Now */}
        <a
          href={`tel:${FIRM_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-500 text-slate-950 font-bold active:bg-amber-400 transition-colors shadow"
        >
          <Phone className="w-4 h-4 mb-0.5 fill-current" />
          <span className="text-[11px] leading-tight">Call Now</span>
        </a>

        {/* Free Consultation */}
        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 active:bg-white/25 transition-colors border border-white/15"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[11px] leading-tight">Consultation</span>
        </button>

        {/* Directions */}
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 active:bg-white/25 transition-colors border border-white/15"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="text-[11px] leading-tight">Directions</span>
        </a>
      </div>
    </div>
  );
}
