import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  ShieldAlert, 
  Car, 
  KeyRound, 
  Scale, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Clock, 
  ExternalLink
} from 'lucide-react';
import { FIRM_INFO, CORE_PRACTICE_AREAS, CLIENT_REVIEWS, WHY_CHOOSE_US } from '../data/firmData';
import ReviewCard from '../components/ReviewCard';
import TrafficCalculator from '../components/TrafficCalculator';
import LicenseRestorationChecker from '../components/LicenseRestorationChecker';

export default function Home({ onOpenConsultation }) {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=5+W+Hargett+St+Unit+415+Raleigh+NC+27601`;

  return (
    <div className="flex flex-col w-full text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#091526] via-[#0d1f38] to-[#0a182c] text-white pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        {/* Subtle architectural background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        {/* Ambient glow effects */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-400/30 text-amber-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Over 20 Years of Proven North Carolina Legal Experience</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold leading-[1.15] text-white tracking-tight">
                Strong Defense. Trusted Advocacy.{' '}
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent block mt-2">
                  Over 20 Years of Proven Legal Experience.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                Dedicated criminal defense and transportation law representation in Raleigh, North Carolina. When your freedom, license, or future is on the line, we stand by your side.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation()}
                  className="px-7 py-4 rounded-xl text-slate-950 font-bold text-sm sm:text-base bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Schedule a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="px-7 py-4 rounded-xl text-white font-bold text-sm sm:text-base bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 flex items-center justify-center gap-2.5 shadow"
                >
                  <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Call Now: {FIRM_INFO.phone}</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>NC Bar Licensed (2005)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Downtown Raleigh Office</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Direct Attorney Contact</span>
                </div>
              </div>
            </div>

            {/* Right Hero Card: Quick Case Evaluation Intake */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border border-amber-500/30 text-slate-900 relative">
                {/* Gold Crest watermark header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                      Confidential Case Review
                    </span>
                    <h3 className="font-heading text-xl font-bold text-slate-950">
                      Need Defense in Raleigh?
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span className="text-xs font-bold text-amber-900">4.6 Google</span>
                  </div>
                </div>

                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    onOpenConsultation();
                  }}
                  className="space-y-3.5"
                >
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Marcus Williams" 
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="(919) 000-0000" 
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-slate-50 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Select Legal Area
                    </label>
                    <select 
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-slate-50 focus:bg-white"
                    >
                      <option value="traffic">Traffic Violation / Speeding Ticket</option>
                      <option value="dwi">Driving While Impaired (DWI/DUI)</option>
                      <option value="criminal">Criminal Defense (Misdemeanor / Felony)</option>
                      <option value="license">Driver's License Restoration / DMV</option>
                      <option value="other">Other Legal Matter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Court Date or Ticket Details
                    </label>
                    <textarea 
                      rows="2" 
                      placeholder="Speed alleged, charge details, or court date if known..." 
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 bg-slate-50 focus:bg-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-slate-950 text-sm bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all duration-200 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Free Case Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Attorney reviews are prompt &amp; 100% confidential</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS & CREDIBILITY BAR */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            <div className="pt-3 lg:pt-0">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 block">
                20+
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1 block">
                Years Legal Experience
              </span>
              <span className="text-xs text-amber-700 font-medium">NC Bar Admitted 2005</span>
            </div>

            <div className="pt-3 lg:pt-0">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 block">
                4.6 ★
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1 block">
                Client Rating
              </span>
              <span className="text-xs text-amber-700 font-medium">Over 90+ Verified Reviews</span>
            </div>

            <div className="pt-3 lg:pt-0">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 block">
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1 block">
                Dedicated Attention
              </span>
              <span className="text-xs text-amber-700 font-medium">Direct Attorney Representation</span>
            </div>

            <div className="pt-3 lg:pt-0">
              <span className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 block">
                Wake Co.
              </span>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1 block">
                Downtown Raleigh Focus
              </span>
              <span className="text-xs text-amber-700 font-medium">5 W Hargett St, Unit 415</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE FIRM BRIEF SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image / Badge Presentation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
                  alt="Attorney Josiah Fapojuwo"
                  className="w-full h-96 object-cover object-top opacity-90 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    Founder &amp; Principal Attorney
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Olutosin O. "Josiah" Fapojuwo
                  </h3>
                  <p className="text-xs text-slate-300">
                    North Carolina State Bar • NCCU School of Law Graduate
                  </p>
                </div>
              </div>

              {/* Floating Award Seal */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-amber-500 text-slate-950 p-4 rounded-xl shadow-lg border-2 border-white flex items-center gap-3">
                <Scale className="w-8 h-8 flex-shrink-0" />
                <div className="text-left">
                  <span className="block font-black text-sm uppercase tracking-wide leading-tight">
                    20+ Years
                  </span>
                  <span className="block text-[11px] font-semibold opacity-90 leading-tight">
                    NC Court Defense
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                  About Fapojuwo Law, PLLC
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  Protecting Your Rights, Freedom &amp; License in North Carolina
                </h2>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                At <strong className="text-slate-950 font-semibold">Fapojuwo Law, PLLC</strong>, we believe that everyone deserves a robust and skilled legal defense. Based in the heart of downtown Raleigh, our firm has spent more than two decades protecting the rights of individuals facing criminal charges and complex traffic matters.
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                Led by attorney <strong className="text-slate-950 font-semibold">Olutosin O. "Josiah" Fapojuwo</strong>, we bring deep courtroom experience, legal precision, and a relentless commitment to every case. Licensed by the North Carolina State Bar since 2005, Josiah has dedicated his career to navigating the complexities of the state's legal system on behalf of his clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="font-semibold text-slate-900 text-sm block">
                    Individualized Attention
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Known for proactive communication, Josiah handles every case with the individualized attention it deserves—no assembly lines.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="font-semibold text-slate-900 text-sm block">
                    Deep North Carolina Law Insight
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whether negotiating with prosecutors or defending clients at trial, we combine strategic insight with deep knowledge of NC law.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow"
                >
                  <span>Read Attorney Josiah's Full Bio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${FIRM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-700 hover:text-amber-800 underline"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (919) 521-8472</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRACTICE AREAS SECTION */}
      <section className="py-16 sm:py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
              Areas of Legal Focus
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
              Core Practice Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Tailored, aggressive legal defense representation across Wake County, Durham, Johnston, and surrounding North Carolina courts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PRACTICE_AREAS.map((area) => {
              const IconComponent = area.id === 'criminal-defense' 
                ? ShieldAlert 
                : area.id === 'traffic-transportation' 
                  ? Car 
                  : KeyRound;

              return (
                <div 
                  key={area.id}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon and Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 group-hover:bg-amber-500 text-amber-400 group-hover:text-slate-950 transition-colors flex items-center justify-center shadow">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-full">
                        {area.highlight}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {area.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      {area.tagline}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>

                    {/* Subcategories list */}
                    <ul className="space-y-2 mb-6 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-700">
                      {area.subcategories.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={area.path}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white group-hover:bg-slate-900 text-slate-900 group-hover:text-white border border-slate-200 group-hover:border-slate-900 text-xs font-bold transition-all shadow-sm"
                  >
                    <span>Explore Practice Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TRAFFIC & POINTS ESTIMATOR TOOL */}
      <section className="py-16 sm:py-20 bg-slate-100 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              North Carolina Law Insights
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
              Why Paying Your Ticket Online Can Cost You Thousands
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              In North Carolina, paying a ticket directly waives your court hearing and enters a guilty plea. Test your citation below to see the impact.
            </p>
          </div>

          <TrafficCalculator onConsultClick={onOpenConsultation} />
        </div>
      </section>

      {/* LICENSE RESTORATION TOOL HIGHLIGHT */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <LicenseRestorationChecker onConsultClick={onOpenConsultation} />
        </div>
      </section>

      {/* WHY CHOOSE FAPOJUWO LAW */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                The Fapojuwo Law Advantage
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white leading-tight">
                Why Clients Across North Carolina Trust Attorney Josiah Fapojuwo
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When you are facing criminal prosecution or the loss of your driver's license, you do not need an impersonal legal mill. You need an advocate who knows the local courtrooms, knows the law, and treats you with dignity.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Request Strategic Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 p-6 rounded-2xl border border-white/10 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-slate-50 text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                Verified Client Reviews
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900">
                Proven Courtroom Results &amp; Gratitude
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-900">4.6 / 5.0</span>
              <span className="text-xs text-slate-500">Google Business Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REVIEWS.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* More reviews teaser */}
          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 underline"
            >
              <span>Learn more about Attorney Josiah's background &amp; trial record</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RALEIGH DOWNTOWN LOCATION & MAP */}
      <section className="py-16 sm:py-20 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Location Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
                  Downtown Raleigh Office
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  Conveniently Located in Downtown Raleigh
                </h2>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Our office is located at <strong>5 W Hargett St, Unit 415</strong> in the Capital Club Building, directly adjacent to Fayetteville Street and only 2 blocks from the Wake County Justice Center.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Address:</strong>
                    <span>5 W Hargett St, Unit 415, Raleigh, NC 27601</span>
                    <span className="text-xs text-slate-500 block mt-0.5">Capital Club Building (Unit 415)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Office Hours:</strong>
                    <span>Monday – Friday (By Appointment Only)</span>
                    <span className="text-xs text-amber-700 block mt-0.5 font-medium">
                      24/7 Telephone Intake for Urgent Arrests &amp; Citations
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                  <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Direct Telephone:</strong>
                    <a href={`tel:${FIRM_INFO.phoneRaw}`} className="text-amber-700 font-bold hover:underline">
                      {FIRM_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span>Get Driving Directions</span>
                </a>

                <Link
                  to="/contact"
                  className="text-xs sm:text-sm font-bold text-amber-700 hover:underline"
                >
                  View Parking &amp; Transit Info →
                </Link>
              </div>
            </div>

            {/* Live Google Maps Iframe */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 aspect-video sm:aspect-[16/10] relative">
                <iframe
                  title="Fapojuwo Law Office Location Map"
                  src="https://maps.google.com/maps?q=5+W+Hargett+St+Raleigh+NC+27601&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[360px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#0a192f] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-400/30 flex items-center justify-center mx-auto">
            <Scale className="w-6 h-6" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
            Get In Touch For a Strategic Consultation.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            When you're facing criminal charges, an expensive traffic violation, or driver's license suspension in North Carolina, time is critical. Let Attorney Josiah Fapojuwo protect your future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-base rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${FIRM_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-bold text-base rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now: (919) 521-8472</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
