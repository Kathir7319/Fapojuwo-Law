import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function ReviewCard({ review }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col justify-between text-left relative group">
      {/* Top Stars & Badge */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <CheckCircle className="w-3 h-3 text-emerald-600" />
            Verified Case
          </span>
        </div>

        <p className="text-slate-700 text-sm leading-relaxed relative z-10 italic">
          "{review.text}"
        </p>
      </div>

      {/* Author & Practice Tag */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <div>
          <span className="font-bold text-slate-900 block font-heading text-sm">
            {review.author}
          </span>
          <span className="text-slate-500 text-[11px]">
            {review.city}
          </span>
        </div>
        <span className="text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg font-medium text-[11px] border border-amber-200/50">
          {review.service}
        </span>
      </div>
    </div>
  );
}
