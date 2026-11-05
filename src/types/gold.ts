export type TransactionType =
  | "ISSUE"
  | "RECEIPT_FINISHED"
  | "RECEIPT_SCRAP"
  | "RECEIPT_FILINGS"
  | "REVERSAL";

export interface GoldTransaction {
  id: string;
  txCode: string;
  karigarId: string;
  karigarName: string;
  type: TransactionType;
  typeLabel: string;
  grossWeightG: number;
  purityPct: number;
  fineWeightG: number;
  timestamp: string;
  jobReference?: string;
  itemCategory?: string;
  notes?: string;
}

export type JobStatus =
  | "IN_PROGRESS"
  | "AWAITING_REVIEW"
  | "COMPLETED"
  | "AUDIT_REQUIRED";

export interface JobCard {
  id: string;
  jobReference: string;
  karigarId: string;
  karigarName: string;
  itemCategory: string;
  issuedFineGrams: number;
  returnedFineGrams: number;
  runningFineBalanceGrams: number;
  allowedWastagePct: number;
  allowedWastageGrams: number;
  status: JobStatus;
  statusLabel: string;
  lastUpdated: string;
  notes?: string;
}

export interface MetricSummary {
  activeKarigars: number;
  jobsInProgress: number;
  issuedTodayGrams: number;
  receivedTodayGrams: number;
}

export interface DailyActivityDataPoint {
  date: string;
  dayLabel: string;
  issuedGrams: number;
  receivedGrams: number;
}
