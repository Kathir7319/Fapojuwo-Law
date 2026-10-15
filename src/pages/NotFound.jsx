import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Home, Phone } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 bg-slate-50 text-slate-800 text-center">
      <div className="max-w-md w-full space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
          <Scale className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
            Error 404
          </span>
          <h1 className="font-heading text-3xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page you are looking for does not exist or has been moved. You can return to our homepage or contact our Raleigh office directly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <a
            href={`tel:${FIRM_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span>Call (919) 521-8472</span>
          </a>
        </div>
      </div>
    </div>
  );
}
