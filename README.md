# Fapojuwo Law, PLLC — Official Website

> **Strong Defense. Trusted Advocacy. Over 20 Years of Proven Legal Experience.**  
> Dedicated Criminal Defense, Transportation & Traffic Law, and Driver's License Restoration in Raleigh, North Carolina. Led by Attorney Olutosin O. "Josiah" Fapojuwo (NC Bar admitted 2005).

---

## 🚀 Quick Start (Local Deployment)

### 1. Prerequisites
- **Node.js** v18+ (tested on Node v22)
- **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 4. Build for Production & Preview Locally
```bash
npm run build
npm run preview
```
This builds the optimized production bundle to the `dist/` directory and serves it locally.

---

## 📦 How to Push Code to Git / GitHub

Initialize git, add all files, and commit:

```bash
# 1. Initialize git repository
git init

# 2. Stage all files (node_modules and dist are ignored automatically)
git add .

# 3. Create initial commit
git commit -m "Initial commit: Fapojuwo Law PLLC multi-page React website"

# 4. Set main branch
git branch -M main

# 5. Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/fapojuwo-law.git

# 6. Push to GitHub
git push -u origin main
```

---

## ⚡ How to Deploy on Vercel

The repository already includes `vercel.json` configured with SPA rewrites so that React Router paths (`/about`, `/practice-areas`, `/contact`, etc.) work without 404 errors.

### Method 1: Deploy with Vercel Web Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
2. Click **"Add New Project"** -> **"Import Git Repository"**.
3. Select your `fapojuwo-law` repository.
4. Vercel will automatically detect:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your site will be live on a custom `.vercel.app` domain in seconds!

### Method 2: Deploy with Vercel CLI
```bash
# Deploy to preview
npx vercel

# Deploy directly to production
npx vercel --prod
```

---

## 🏛️ Project Architecture

```
├── public/
│   ├── favicon.svg             # Vector Scales of Justice icon
│   └── logo.svg                # High-res SVG Law Crest & Seal
├── src/
│   ├── components/
│   │   ├── Logo.jsx            # Dynamic vector logo with custom heraldic shield
│   │   ├── Navbar.jsx          # Sticky header with emergency hotline & mobile drawer
│   │   ├── Footer.jsx          # Legal footer, office hours, Raleigh address & disclaimer
│   │   ├── MobileActionBar.jsx # Mobile sticky bottom bar (Call, Consult, Directions)
│   │   ├── ConsultationModal.jsx# Interactive case review & consultation scheduler
│   │   ├── TrafficCalculator.jsx # NC Speeding & Insurance Points estimator tool
│   │   ├── LicenseRestorationChecker.jsx # Interactive 3-step license restoration quiz
│   │   ├── ReviewCard.jsx      # Google Business 4.6★ client reviews
│   │   ├── Breadcrumbs.jsx     # Navigation breadcrumb trails
│   │   └── ScrollToTop.jsx     # Smooth scroll reset on route changes
│   ├── pages/
│   │   ├── Home.jsx            # Full homepage with Hero, About brief, Practice Areas, Calculator, & Map
│   │   ├── About.jsx           # Attorney Olutosin "Josiah" Fapojuwo bio, NCCU Law, NC Bar 2005
│   │   ├── PracticeAreas.jsx   # Practice areas overview with category filter tabs
│   │   ├── CriminalDefense.jsx # Felonies, Misdemeanors, Drug & Assault, Theft & Property
│   │   ├── TrafficLaw.jsx      # Speeding, Reckless Driving, DWI, DWLR, CDL defense
│   │   ├── LicenseRestoration.jsx # NC DMV hearings, FTA warrant recalls, step-by-step roadmap
│   │   ├── Resources.jsx       # Wake County Justice Center guide, Rights, Legal FAQs
│   │   ├── Contact.jsx         # Contact details, Consultation intake form, & Google Maps
│   │   └── NotFound.jsx        # Custom 404 page
│   ├── data/
│   │   └── firmData.js         # Firm info, attorney details, Google reviews, and FAQs
│   ├── App.jsx                 # Routing configuration
│   └── index.css               # Tailwind CSS & legal styling
├── vercel.json                 # Vercel SPA rewrite & cache configuration
└── package.json                # Project dependencies and build scripts
```

---

## ⚖️ Firm Details
- **Firm Name:** Fapojuwo Law, PLLC
- **Lead Counsel:** Olutosin O. "Josiah" Fapojuwo, Esq.
- **Office Address:** 5 W Hargett St, Unit 415, Raleigh, NC 27601 (Capital Club Building)
- **Phone:** (919) 521-8472
- **Hours:** Monday – Friday (By Appointment Only) + 24/7 Telephone Intake
