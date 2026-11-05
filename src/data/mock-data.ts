import type {
  GoldTransaction,
  JobCard,
  MetricSummary,
  DailyActivityDataPoint,
} from "@/types/gold";

/**
 * High-level workshop key performance indicators.
 * NOTE: Clearly labelled as synthetic DEMO data.
 */
export const MOCK_METRICS: MetricSummary = {
  activeKarigars: 40,
  jobsInProgress: 18,
  issuedTodayGrams: 1250.0,
  receivedTodayGrams: 840.0,
};

/**
 * 7-day rolling workshop gold activity data.
 */
export const MOCK_ACTIVITY_DATA: DailyActivityDataPoint[] = [
  { date: "2026-10-30", dayLabel: "Fri", issuedGrams: 1100.0, receivedGrams: 980.5 },
  { date: "2026-10-31", dayLabel: "Sat", issuedGrams: 1450.25, receivedGrams: 1320.0 },
  { date: "2026-11-01", dayLabel: "Sun", issuedGrams: 620.0, receivedGrams: 450.0 },
  { date: "2026-11-02", dayLabel: "Mon", issuedGrams: 1380.0, receivedGrams: 1140.75 },
  { date: "2026-11-03", dayLabel: "Tue", issuedGrams: 1520.5, receivedGrams: 1290.2 },
  { date: "2026-11-04", dayLabel: "Wed", issuedGrams: 1180.0, receivedGrams: 1050.4 },
  { date: "2026-11-05", dayLabel: "Today", issuedGrams: 1250.0, receivedGrams: 840.0 },
];

/**
 * Exact sample transaction records specified in the system requirements.
 * Focus artisan: Murugesan S (Coimbatore Workshop Bench 4)
 */
export const MOCK_TRANSACTIONS: GoldTransaction[] = [
  {
    id: "tx-30411",
    txCode: "TX-30411",
    karigarId: "kg-01",
    karigarName: "Murugesan S",
    type: "ISSUE",
    typeLabel: "Issue (22K Ingot)",
    grossWeightG: 120.0,
    purityPct: 91.6,
    fineWeightG: 109.92,
    timestamp: "05 Nov 2026, 09:15 AM",
    jobReference: "JOB-7821",
    itemCategory: "Bridal Antique Necklace",
    notes: "Batch #410 issued from Vault Safe A",
  },
  {
    id: "tx-30437",
    txCode: "TX-30437",
    karigarId: "kg-01",
    karigarName: "Murugesan S",
    type: "RECEIPT_FINISHED",
    typeLabel: "Necklace Receipt",
    grossWeightG: 112.45,
    purityPct: 91.6,
    fineWeightG: 103.004,
    timestamp: "05 Nov 2026, 02:30 PM",
    jobReference: "JOB-7821",
    itemCategory: "Bridal Antique Necklace",
    notes: "Main piece completed, hallmarked 916",
  },
  {
    id: "tx-30438",
    txCode: "TX-30438",
    karigarId: "kg-01",
    karigarName: "Murugesan S",
    type: "RECEIPT_SCRAP",
    typeLabel: "Scrap Receipt",
    grossWeightG: 3.3,
    purityPct: 91.6,
    fineWeightG: 3.023,
    timestamp: "05 Nov 2026, 04:45 PM",
    jobReference: "JOB-7821",
    itemCategory: "Bridal Antique Necklace",
    notes: "Clean off-cuts from filigree assembly",
  },
  {
    id: "tx-30420",
    txCode: "TX-30420",
    karigarId: "kg-04",
    karigarName: "K. Rangarajan",
    type: "ISSUE",
    typeLabel: "Issue (22K Bar)",
    grossWeightG: 80.0,
    purityPct: 91.6,
    fineWeightG: 73.28,
    timestamp: "05 Nov 2026, 10:00 AM",
    jobReference: "JOB-7824",
    itemCategory: "Temple Kada Bangle",
    notes: "Casting raw stock issued",
  },
  {
    id: "tx-30425",
    txCode: "TX-30425",
    karigarId: "kg-07",
    karigarName: "Senthil Kumar P",
    type: "RECEIPT_FINISHED",
    typeLabel: "Earrings Receipt",
    grossWeightG: 45.2,
    purityPct: 91.6,
    fineWeightG: 41.403,
    timestamp: "05 Nov 2026, 11:30 AM",
    jobReference: "JOB-7819",
    itemCategory: "Jhumka Earring Pair",
    notes: "Pair polished and weighed with screw backs",
  },
];

/**
 * Jobs awaiting completion and reconciliation.
 */
export const MOCK_JOBS_AWAITING: JobCard[] = [
  {
    id: "job-7821",
    jobReference: "JOB-7821",
    karigarId: "kg-01",
    karigarName: "Murugesan S",
    itemCategory: "Bridal Antique Necklace",
    issuedFineGrams: 109.92,
    returnedFineGrams: 106.027,
    runningFineBalanceGrams: 3.893,
    allowedWastagePct: 3.0,
    allowedWastageGrams: 3.298,
    status: "IN_PROGRESS",
    statusLabel: "In Progress (Bench Recovery Pending)",
    lastUpdated: "Today, 04:45 PM",
    notes: "Returned 103.004 g necklace + 3.023 g scrap. Outstanding balance: 3.893 g.",
  },
  {
    id: "job-7824",
    jobReference: "JOB-7824",
    karigarId: "kg-04",
    karigarName: "K. Rangarajan",
    itemCategory: "Temple Kada Bangle",
    issuedFineGrams: 73.28,
    returnedFineGrams: 0.0,
    runningFineBalanceGrams: 73.28,
    allowedWastagePct: 2.2,
    allowedWastageGrams: 1.612,
    status: "IN_PROGRESS",
    statusLabel: "In Progress (Bench Crafting)",
    lastUpdated: "Today, 10:00 AM",
    notes: "Currently at filigree chasing stage.",
  },
  {
    id: "job-7815",
    jobReference: "JOB-7815",
    karigarId: "kg-09",
    karigarName: "A. Chinnasamy",
    itemCategory: "Casting Men's Ring",
    issuedFineGrams: 55.0,
    returnedFineGrams: 53.65,
    runningFineBalanceGrams: 1.35,
    allowedWastagePct: 2.0,
    allowedWastageGrams: 1.1,
    status: "AWAITING_REVIEW",
    statusLabel: "Awaiting Final Vault Polish Audit",
    lastUpdated: "Yesterday, 06:15 PM",
    notes: "Scrap received, awaiting ultrasonic bath dust washings.",
  },
  {
    id: "job-7810",
    jobReference: "JOB-7810",
    karigarId: "kg-12",
    karigarName: "V. Thangavel",
    itemCategory: "Lightweight Mangalsutra",
    issuedFineGrams: 42.5,
    returnedFineGrams: 41.35,
    runningFineBalanceGrams: 1.15,
    allowedWastagePct: 2.5,
    allowedWastageGrams: 1.063,
    status: "IN_PROGRESS",
    statusLabel: "In Progress (Bead Stringing)",
    lastUpdated: "04 Nov 2026",
    notes: "Stringing with black beads in progress.",
  },
];

/**
 * Detailed Attention Required review item for outstanding fine-gold balance.
 * Strictly adheres to rule: NEVER describe an unclosed job as proven loss.
 */
export const MOCK_ATTENTION_REQUIRED = {
  jobReference: "JOB-7821",
  karigarName: "Murugesan S",
  itemCategory: "Bridal Antique Necklace",
  issuedFineGrams: 109.92,
  returnedFineGrams: 106.027,
  runningFineBalanceGrams: 3.893,
  allowedWastageGrams: 3.298,
  potentialVarianceGrams: 0.595,
  description:
    "Active job JOB-7821 has returned 103.004 g finished necklace and 3.023 g scrap, leaving an outstanding balance of 3.893 g fine gold against an agreed 3.00% wastage threshold (3.298 g).",
  operationalNote:
    "This job is currently active. The potential excess variance of 0.595 g is pending final bench filings (tumbara/powder) collection and ultrasonic wash recovery at formal job closing. This is not classified as gold loss.",
};

/**
 * Realistic synthetic Karigar roster for future modules.
 */
export const MOCK_KARIGARS = [
  {
    id: "kg-01",
    code: "KRG-001",
    name: "Murugesan S",
    bench: "Bench 04 (Bridal Antique)",
    phone: "+91 98421 77201",
    experienceYears: 18,
    activeJobsCount: 2,
    fineGoldHoldingGrams: 48.25,
    status: "Active",
  },
  {
    id: "kg-04",
    code: "KRG-004",
    name: "K. Rangarajan",
    bench: "Bench 09 (Kadas & Bangles)",
    phone: "+91 94432 88104",
    experienceYears: 14,
    activeJobsCount: 1,
    fineGoldHoldingGrams: 73.28,
    status: "Active",
  },
  {
    id: "kg-07",
    code: "KRG-007",
    name: "Senthil Kumar P",
    bench: "Bench 12 (Earrings & Tops)",
    phone: "+91 97890 12345",
    experienceYears: 11,
    activeJobsCount: 1,
    fineGoldHoldingGrams: 12.4,
    status: "Active",
  },
  {
    id: "kg-09",
    code: "KRG-009",
    name: "A. Chinnasamy",
    bench: "Bench 15 (Casting & Rings)",
    phone: "+91 98944 65432",
    experienceYears: 22,
    activeJobsCount: 2,
    fineGoldHoldingGrams: 28.6,
    status: "Active",
  },
];
