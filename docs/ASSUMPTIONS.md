# Aurum Ledger — Business & Technical Assumptions

Every assumption in this document is strictly categorized into one of three enterprise categories:
1. `[CLIENT FACT]` — Confirmed fact provided directly by the client brief.
2. `[IMPLEMENTATION ASSUMPTION]` — Technical or architectural decision made by the engineering team to guarantee stability, security, and precision.
3. `[DECISION REQUIRING CLIENT CONFIRMATION]` — Business logic or operational rule requiring sign-off by the Managing Director / Workshop Manager before Prompt 2–10 implementation.

---

## 1. Client Scale & Financial Metrics

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Geographic Location** | `[CLIENT FACT]` | The jewellery chain and workshop are located in Coimbatore, Tamil Nadu, India. |
| **Network Scale** | `[CLIENT FACT]` | 5 retail showrooms and 1 centralized jewellery manufacturing workshop. |
| **Workforce** | `[CLIENT FACT]` | Approximately 40 karigars and 180 total staff across showrooms and workshop. |
| **Annual Revenue** | `[CLIENT FACT]` | ₹220–₹260 Crore (INR) annual jewellery revenue. |
| **Current Accounting Stack** | `[CLIENT FACT]` | Physical paper ledgers (*Chits/Khata*) and Microsoft Excel spreadsheets. |
| **Daily Gold Throughput** | `[IMPLEMENTATION ASSUMPTION]` | Estimated at 1.000 kg to 2.500 kg daily issue/receipt volume based on annual revenue of ~₹240 Crore. |
| **Gold Rate Fluctuations** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Does the client value karigar gold liabilities at daily market rate (M2M) or historical issue rate? (Default assumption: Physical weight is the primary liability ledger; INR valuation is derived dynamically via standard daily board rate). |

---

## 2. Weight, Purity & Mathematical Precision

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Gold Weight Unit** | `[CLIENT FACT]` | Metric grams ($g$). |
| **Weight Decimal Precision** | `[IMPLEMENTATION ASSUMPTION]` | **Exactly 3 decimal places** ($0.001\text{ g}$ or $1\text{ mg}$). Standard for certified precision analytical balances in Indian jewellery manufacturing. |
| **Purity Decimal Precision** | `[IMPLEMENTATION ASSUMPTION]` | **Exactly 2 decimal places** (e.g., $91.60\%$ for 22K, $75.00\%$ for 18K, $99.90\%$ for 24K). |
| **Calculation Engine** | `[IMPLEMENTATION ASSUMPTION]` | JavaScript native floating-point math (`IEEE 754`) is **strictly forbidden** for official ledger math. All calculations must utilize `Decimal.js` in frontend and `NUMERIC(12, 3)` / `NUMERIC(5, 2)` in PostgreSQL. |
| **Round-off Policy** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Whether fractional milligrams ($<0.0005\text{ g}$) are rounded half-up or truncated to the 3rd decimal place. (Default implementation: Half-up rounding at the 4th decimal place). |

---

## 3. Karigar Management & Wastage Policies

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Karigar Engagement Model** | `[IMPLEMENTATION ASSUMPTION]` | Karigars are divided into salaried bench artisans (in-house) and contracted piece-rate master artisans (job-workers). |
| **Agreed Wastage Tracking** | `[CLIENT FACT]` | The system must calculate and track agreed contractual wastage per jewellery category. |
| **Open Job Status vs. Gold Loss** | `[IMPLEMENTATION ASSUMPTION]` | An open job with an outstanding balance is **never classified as unexplained loss** while active. It remains a work-in-progress (WIP) asset until formal job closing and bench cleanup reconciliation. |
| **Wastage Recovery Timing** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Is bench filings (*Tumbara*) returned daily or aggregated over a weekly/monthly job cycle? (Default implementation: Supports both daily interim returns and final lot settlement). |
| **Karigar Credit Limits** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | What is the maximum fine-gold weight a single karigar can hold simultaneously? (Proposed: 250.000 g default limit per artisan without manager override). |

---

## 4. Hardware, AI & Physical Operations

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Scale & Karatmeter Photo Reading** | `[CLIENT FACT]` | AI camera integration must read weighing scales and karat meter displays. |
| **AI Operational Role** | `[IMPLEMENTATION ASSUMPTION]` | AI vision is strictly an **assistive data-entry accelerator**. Every AI reading must be explicitly reviewed and confirmed by a human custodian before committing to the database. |
| **Camera Hardware** | `[IMPLEMENTATION ASSUMPTION]` | Standard USB webcams on desktop workshop PCs and tablet/mobile cameras via WebRTC MediaDevices API. |
| **Scale Interfaces** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Are weighing scales equipped with RS-232 serial ports for direct hardware tethering in the future, or will camera OCR remain the primary capture mechanism? |

---

## 5. Showroom & Vault Operations

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Old Gold Buybacks** | `[CLIENT FACT]` | Showroom customer old-gold purchases must be accounted for from intake to melting. |
| **Showroom Vault Limits** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Do showrooms hold overnight inventory limits, requiring daily inter-branch transfer logging? |
| **Refining Loss Tolerances** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | What is the allowable melting loss threshold when converting customer 18K/22K old gold into 24K pure bars with external refiners? (Typical industry standard: 0.20% to 0.40%). |

---

## 6. Accounting & Tally Integration

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Tally Compatibility** | `[CLIENT FACT]` | Accounting exports must be fully compatible with Tally (TallyPrime). |
| **Export Mechanism** | `[IMPLEMENTATION ASSUMPTION]` | XML and CSV standard journal vouchers compatible with Tally XML Server Interface. |
| **Chart of Accounts Mapping** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Exact ledger names used in the client's current Tally company (e.g., `Gold Bullion 24K A/c`, `Karigar Job Work Charges A/c`, `Manufacturing Wastage A/c`). |

---

## 7. Security, Audit & Infrastructure

| Item | Classification | Description |
| :--- | :--- | :--- |
| **Audit Immutability** | `[IMPLEMENTATION ASSUMPTION]` | Ledger entries are append-only. Edits and deletions are forbidden; corrections require compensatory counter-transactions (*Storno*). |
| **Deployment Platform** | `[IMPLEMENTATION ASSUMPTION]` | Vercel Edge/Serverless hosting with Supabase Managed PostgreSQL (AWS Mumbai Region for low latency to Coimbatore). |
| **Offline Capability** | `[DECISION REQUIRING CLIENT CONFIRMATION]` | Does the workshop experience network outages requiring PWA offline data queuing, or is high-speed fiber internet guaranteed? (Default assumption: High-availability cloud-first with offline alert warning). |
