# AURUM LEDGER

**Jewellery Workshop Gold Accountability System**  
*Every gram accounted for.*

[![Repository](https://img.shields.io/badge/GitHub-aurum--ledger-gold.svg)](https://github.com/Mehul8864/aurum-ledger)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15_App_Router-black.svg)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](#)

---

## 1. Project Background & Problem Statement

Aurum Ledger is an enterprise gold-asset accountability platform designed specifically for high-volume retail and manufacturing jewellery chains in **Coimbatore, Tamil Nadu, India**.

### Operational Context
- **Enterprise Scale:** 5 retail showrooms, 1 centralized high-security manufacturing workshop, ~40 bench karigars, and 180 staff members.
- **Annual Turnover:** ₹220–₹260 Crore (INR), moving 250+ kg of pure gold annually.
- **Current Operational Pain:** The business currently relies on manual paper ledgers (*Chit/Khata books*) and Excel spreadsheets. In a high-value precious metal ecosystem where 1 gram of gold costs ₹7,500+, an unrecorded variance of even 0.1% equates to **₹24 Lakhs** in annual inventory leakage.

### The Aurum Ledger Solution
- **Strict 3-Decimal Precision:** Every gram of gold is tracked to $0.001\text{ g}$ ($1\text{ mg}$) using fixed-point `Decimal.js` calculations and PostgreSQL `NUMERIC` types.
- **Real-Time Karigar Liability:** Instant debit/credit reconciliation of issued bullion against finished jewellery, off-cut scrap, bench filings, and agreed wastage.
- **AI-Powered Hardware Capture (Roadmap):** Direct camera OCR integration reading digital weighing scales and XRF karatmeters to eliminate manual transcription fraud.
- **TallyPrime Compatibility:** Direct automated export of double-entry financial and inventory journal vouchers.

---

## 2. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components & Server Actions)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode Enabled)
- **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/) with a custom luxury champagne & warm-ivory design system
- **Icons:** [Lucide React](https://lucide.dev/)
- **Visualizations:** [Recharts](https://recharts.org/)
- **Financial Arithmetic:** [Decimal.js](https://mikemcl.github.io/decimal.js/)
- **Database & Auth (Future):** [Supabase](https://supabase.com/) PostgreSQL with Row Level Security (RLS)
- **Testing:** [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

---

## 3. Project Structure

```
aurum-ledger/
├── docs/                       # Architecture, PRD, and design documentation
│   ├── PRD.md                  # Comprehensive Product Requirements Document
│   ├── ASSUMPTIONS.md          # Fact, assumption, and confirmation matrix
│   ├── ARCHITECTURE.md         # Full technical architecture and DB schema
│   └── DESIGN_SYSTEM.md        # Luxury enterprise design system tokens
├── AGENTS.md                   # Immutable rules for future AI coding agents
├── src/
│   ├── app/                    # Next.js App Router routes & layouts
│   │   ├── (dashboard)/        # Workshop application shell & modules
│   │   │   ├── page.tsx        # Overview Dashboard (Prompt 1 Milestone)
│   │   │   ├── karigars/       # Karigar Master (Coming Soon)
│   │   │   ├── gold-issue/     # Gold Issue Workflow (Coming Soon)
│   │   │   ├── gold-receipt/   # Gold Receipt Workflow (Coming Soon)
│   │   │   ├── karigar-ledger/ # Account Statements (Coming Soon)
│   │   │   ├── loss-alerts/    # Loss & Variance Alerts (Coming Soon)
│   │   │   ├── daily-stock/    # Daily Stock Vault (Coming Soon)
│   │   │   └── old-gold/       # Old Gold Desk (Coming Soon)
│   │   ├── layout.tsx          # Root HTML layout and font loading
│   │   └── globals.css         # Custom luxury theme styles
│   ├── components/             # Reusable UI component library
│   │   ├── ui/                 # 18 accessible enterprise design tokens
│   │   └── layout/             # Sidebar, Header, Mobile Nav
│   ├── lib/                    # Calculation engine & formatters
│   │   ├── formatters.ts       # Tabular gram and INR formatters
│   │   └── calculations.ts     # Pure gold & variance engine
│   ├── types/                  # Global TypeScript contracts
│   └── data/                   # Centralized mock prototype state
├── tests/                      # Vitest test suite and smoke tests
├── .env.example                # Clean environment variable placeholder template
├── package.json                # Project scripts and dependencies
├── tsconfig.json               # TypeScript strict configuration
└── tailwind.config.ts          # Tailwind theme tokens & color definitions
```

---

## 4. Installation & Getting Started

### Prerequisites
- Node.js `v20.x` or `v22.x` (v22.12.0 verified)
- npm `v10.x` or `v11.x` (v11.4.1 verified)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Mehul8864/aurum-ledger.git
   cd aurum-ledger
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment template:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `next dev` | Starts local development server on port 3000 |
| `npm run build` | `next build` | Produces production build with type checking |
| `npm run lint` | `next lint` | Executes ESLint analysis |
| `npm run typecheck` | `tsc --noEmit` | Validates TypeScript strict type safety |
| `npm run test` | `vitest run` | Runs unit tests and component smoke tests |

---

## 6. Current Implementation Status (Prompt 1 of 10)

- [x] Complete PRD, Architectural Specs, and Business Assumptions documented.
- [x] Next.js 15 App Router scaffolded with strict TypeScript.
- [x] Aurum luxury enterprise design system established with 18 reusable components.
- [x] Responsive workshop overview dashboard with dual gold issuance chart.
- [x] Verified sample transactions rendered (`TX-30411`, `TX-30437`, `TX-30438`).
- [x] Vitest smoke tests configured and passing.
- [ ] *Prompt 2: Supabase Database Schema, Migrations & RLS.*
- [ ] *Prompt 3: Supabase Authentication & Multi-Role Permissions.*
- [ ] *Prompt 4: Karigar Directory & Wastage Contracts.*
- [ ] *Prompt 5: Gold Issue Workflow & Scale Capture.*
- [ ] *Prompt 6: Gold Receipt & Multi-component Returns.*
- [ ] *Prompt 7: Real-Time Karigar Ledger Engine.*
- [ ] *Prompt 8: Unexplained Loss Detection & Alerting Engine.*
- [ ] *Prompt 9: Old Gold Desk & Showroom Stock Integration.*
- [ ] *Prompt 10: Tally Prime Export, End-to-End Hardening & Launch.*

---

## 7. License & Ownership
Copyright © 2026 Aurum Ledger. Project Owner: [@Mehul8864](https://github.com/Mehul8864). All rights reserved.
