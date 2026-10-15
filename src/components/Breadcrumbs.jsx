import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-slate-100/80 border-b border-slate-200 text-xs sm:text-sm text-slate-600">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <Link 
          to="/" 
          className="flex items-center gap-1 hover:text-amber-600 font-medium transition-colors"
          title="Back to Homepage"
        >
          <Home className="w-3.5 h-3.5 text-slate-500" />
          <span>Home</span>
        </Link>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-semibold text-slate-900 truncate max-w-[240px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.to} 
                  className="hover:text-amber-600 font-medium transition-colors truncate max-w-[180px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
