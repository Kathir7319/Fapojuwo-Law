import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Car, 
  Bus, 
  Send,
  Building
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FIRM_INFO } from '../data/firmData';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    caseType: 'traffic',
    courtDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=5+W+Hargett+St+Unit+415+Raleigh+NC+27601`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full text-slate-800">
      <Breadcrumbs items={[{ label: 'Contact & Location' }]} />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-[#0a182c] to-slate-950 text-white py-14 sm:py-20 text-left border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/30">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Downtown Raleigh, North Carolina</span>
            </div>
            {/* User exact headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Get In Touch For a Strategic Consultation.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              When your freedom, driver's license, or future is on the line, Attorney Josiah Fapojuwo is ready to stand by your side. Reach out today for dedicated legal defense.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                  Contact Information &amp; Location
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  Fapojuwo Law, PLLC
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Led by Attorney Olutosin O. "Josiah" Fapojuwo
                </p>
              </div>

              {/* Exact user requirements listed clearly */}
              <div className="space-y-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm">Phone:</strong>
                    <a 
                      href={`tel:${FIRM_INFO.phoneRaw}`} 
                      className="text-lg font-bold text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      (919) 521-8472
                    </a>
                    <span className="text-xs text-slate-500 block mt-0.5">
                      Direct telephone line &amp; 24/7 urgent intake
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm">Address:</strong>
                    <span className="text-slate-800 font-medium block">
                      5 W Hargett St, Unit 415
                    </span>
                    <span className="text-slate-800 font-medium block">
                      Raleigh, NC 27601
                    </span>
                    <span className="text-xs text-slate-500 block mt-1">
                      Capital Club Building • Downtown Raleigh, steps from Wake County Justice Center
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 text-amber-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 text-sm">Office Hours:</strong>
                    <span className="text-slate-800 font-medium block">
                      Monday – Friday (By Appointment Only)
                    </span>
                    <span className="text-xs text-amber-700 font-semibold block mt-1">
                      Available for Urgent Criminal &amp; Traffic Consultations
                    </span>
                  </div>
                </div>
              </div>

              {/* Parking & Transit Information */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                  <Building className="w-4 h-4 text-amber-600" />
                  <span>Downtown Raleigh Parking &amp; Transit</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <Car className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Parking:</strong> On-street metered parking is available on Hargett St and Wilmington St. Covered parking decks located at Moore Square Deck and Salisbury Street Deck (1 block away).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bus className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Transit:</strong> Located 2 blocks from the GoRaleigh Moore Square Transit Station, served by all major city bus routes.</span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-lg relative">
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                    Free Consultation Form
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
                    Send Us Your Legal Matter
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Please provide details regarding your citation, court date, or charges. All inquiries are strictly confidential.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="font-heading text-2xl font-bold text-slate-900">
                      Thank You, {formData.fullName || 'Valued Client'}
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      We have received your case details. Attorney Josiah Fapojuwo will review your inquiry and follow up promptly at <strong>{formData.phone}</strong>.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 max-w-md mx-auto">
                      <strong>Immediate Hearing or Arrest?</strong> Call our direct telephone line at{' '}
                      <a href={`tel:${FIRM_INFO.phoneRaw}`} className="font-bold underline text-amber-800">
                        (919) 521-8472
                      </a>.
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Robert Davis"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(919) 000-0000"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="robert@example.com"
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Practice Area *
                        </label>
                        <select
                          name="caseType"
                          value={formData.caseType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                        >
                          <option value="traffic">Traffic Violations &amp; Speeding Tickets</option>
                          <option value="dwi">Driving While Impaired (DWI/DUI)</option>
                          <option value="dwlr">Driving While License Revoked (DWLR)</option>
                          <option value="criminal-misdemeanor">Criminal Defense - Misdemeanor</option>
                          <option value="criminal-felony">Criminal Defense - Felony</option>
                          <option value="license-restoration">Driver's License Restoration / DMV</option>
                          <option value="drug-assault">Drug Offenses &amp; Assault</option>
                          <option value="other">Other Legal Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Upcoming Court Date (If scheduled)
                      </label>
                      <input
                        type="date"
                        name="courtDate"
                        value={formData.courtDate}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Details of Citation or Charges *
                      </label>
                      <textarea
                        required
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe the charges, speed alleged on ticket, county where citation was issued, or your driver's license history..."
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-white resize-y"
                      ></textarea>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Protected by attorney-client confidentiality rules. No fee obligation.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Submitting...' : 'Submit for Free Evaluation'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Google Map Section */}
      <section className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-white h-[420px] relative">
            <iframe
              title="Fapojuwo Law Raleigh Office Map"
              src="https://maps.google.com/maps?q=5+W+Hargett+St+Raleigh+NC+27601&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
