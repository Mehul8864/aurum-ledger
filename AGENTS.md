# Permanent Engineering Rules for AI Agents

> **CRITICAL DIRECTIVE:** Any AI agent, developer, or automated process operating on this repository **MUST** strictly adhere to these immutable architectural, security, and mathematical rules.

---

## 1. Mathematical & Accounting Infallibility (Non-Negotiable)

1. **NEVER Use Native JavaScript Floating-Point Math for Official Accounting:**
   - Standard JavaScript `number` arithmetic suffers from IEEE 754 precision drift (e.g. `0.1 + 0.2 !== 0.3`). In a system processing ₹240+ Crore of gold annually, rounding drift leads to catastrophic financial ledger mismatches.
   - All gold calculations, financial figures, and weight balances must strictly utilize `Decimal.js` in application code and `NUMERIC(12, 3)` in PostgreSQL.
2. **Strict Decimal Precision Rules:**
   - **Fine & Gross Weights:** Exactly **3 decimal places** ($0.001\text{ g}$ or $1\text{ mg}$).
   - **Purity & Wastage Percentages:** Exactly **2 decimal places** (e.g. $91.60\%$, $3.00\%$).
   - **Monetary Figures (INR):** Exactly **2 decimal places** (e.g. ₹$12,450.50$).
3. **Open Jobs Are NOT Losses:**
   - An open job with an outstanding fine-gold balance is work-in-progress (WIP). **NEVER** classify or label an open job as "unexplained gold loss" until final job closure, bench cleanup, and formal supervisor reconciliation.
4. **Immutable Transaction History:**
   - The ledger is append-only. Never mutate or delete committed transaction rows in the database. Accounting corrections must be achieved via compensating counter-transactions (*Storno/Reversal*).

---

## 2. Code Quality, TypeScript & Architectural Integrity

5. **Preserve Existing Architecture:**
   - Respect the feature-oriented folder layout under `src/`. Do not reorganize or scatter utilities into ad-hoc folders.
6. **TypeScript Strict Mode:**
   - Strict mode is permanently enabled (`"strict": true` in `tsconfig.json`).
   - **No unnecessary `any` types:** Every function parameter, return value, database row, and component prop must have an explicit, well-defined TypeScript interface or type.
7. **Validate All External Inputs:**
   - Use `Zod` schemas for every Server Action, Route Handler, and form submission. Never trust client-submitted calculations; recompute all pure weights on the server.
8. **Never Overwrite Working Features:**
   - Do not delete or rewrite functional modules without explicit justification and architectural alignment.

---

## 3. Security, Auth & Credentials

9. **No Secrets in Git:**
   - Never commit API keys, database credentials, Supabase service keys, or private tokens to Git.
   - Always maintain `.env.example` with empty variable placeholders only.
10. **No Client-Only Security Checks:**
    - Role and permission validation must execute on the server (via Supabase RLS and Next.js Server Actions). Client-side checks are strictly UI conveniences, never security barriers.
11. **No Fake AI Responses in Production Flows:**
    - Scale and karatmeter OCR integrations must interact with real model endpoints or explicitly mock responses solely behind isolated test flags. Never simulate fake AI results to bypass hardware verification.

---

## 4. Testing & Git Hygiene

12. **Every Feature Requires Tests:**
    - Core calculation routines, data formatters, and critical UI workflows must have corresponding unit and smoke tests using Vitest and React Testing Library.
13. **Meaningful Git Commits:**
    - Commit messages must follow conventional commits (`feat:`, `chore:`, `docs:`, `test:`, `fix:`).
    - Commit frequently at clean, atomic milestones.
14. **Never Force Push:**
    - `git push --force` or `--force-with-lease` is strictly prohibited on shared branches (`main`).
15. **Verify Before Pushing:**
    - Always ensure `npm run lint`, `npm run typecheck`, and `npm run test` pass with zero errors before pushing commits.
