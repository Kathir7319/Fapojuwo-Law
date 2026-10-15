import React, { useState } from 'react';
import { X, ShieldCheck, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';

export default function ConsultationModal({ isOpen, onClose, initialPractice = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: initialPractice || 'traffic-transportation',
    hasCourtDate: 'no',
    courtDate: '',
    caseDetails: '',
    preferredContact: 'phone'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate swift submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0f223d] to-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-amber-500/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-headline" className="font-serif-accent text-lg font-bold text-amber-100 tracking-wide">
                Schedule a Free Consultation
              </h2>
              <p className="text-xs text-slate-300">
                Confidential Case Review with Attorney Josiah Fapojuwo
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Consultation Request Received
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-slate-800">{formData.fullName || 'valued client'}</strong>. Attorney Josiah Fapojuwo and our legal team will review your case details and contact you shortly at <span className="font-semibold text-slate-800">{formData.phone}</span>.
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left max-w-md mx-auto space-y-2 text-xs text-amber-900">
                <div className="flex items-center gap-2 font-semibold text-amber-800">
                  <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>Immediate Need or Court Date Soon?</span>
                </div>
                <p>
                  If you have an urgent court appearance in Wake County within 48 hours or were recently arrested, please call us immediately:
                </p>
                <a 
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 underline mt-1"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: {FIRM_INFO.phone}
                </a>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl transition-colors shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>100% Confidential:</strong> Submitting this case intake is free and protected by attorney-client privilege inquiries.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Johnathan Smith"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number (Mobile) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(919) 000-0000"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Legal Matter / Practice Area *
                  </label>
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white"
                  >
                    <option value="traffic-transportation">Traffic Violation / Speeding Ticket</option>
                    <option value="dwi-defense">DWI / DUI Defense</option>
                    <option value="criminal-defense">Criminal Defense (Misdemeanor / Felony)</option>
                    <option value="license-restoration">Driver's License Restoration / DMV</option>
                    <option value="drug-assault">Drug Offense / Assault Charge</option>
                    <option value="other">Other Legal Consultation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Do you have an upcoming Court Date?
                  </label>
                  <select
                    name="hasCourtDate"
                    value={formData.hasCourtDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white"
                  >
                    <option value="no">No court date scheduled yet</option>
                    <option value="yes">Yes, in Wake County</option>
                    <option value="other-county">Yes, in another NC County</option>
                    <option value="warrant">Old failure to appear / missed date</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Court Date (If known)
                  </label>
                  <input
                    type="date"
                    name="courtDate"
                    value={formData.courtDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Overview of Charges or Citation
                </label>
                <textarea
                  name="caseDetails"
                  rows="3"
                  value={formData.caseDetails}
                  onChange={handleChange}
                  placeholder="Include ticket speed, charges filed, or summary of your situation..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-colors"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  No fees unless hired
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-sm text-slate-600 hover:text-slate-800 font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow transition-all duration-200 hover:shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Request Free Consultation'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
