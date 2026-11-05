"use client";

import * as React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { formatGrams } from "@/lib/formatters";
import type { DailyActivityDataPoint } from "@/types/gold";

export interface ActivityChartProps {
  data: DailyActivityDataPoint[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-border bg-surface p-3 shadow-elevation text-xs space-y-1.5">
        <p className="font-semibold text-foreground border-b border-border/60 pb-1">
          {label} (Workshop Totals)
        </p>
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center justify-between space-x-4">
            <span className="flex items-center space-x-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-foreground-muted">{entry.name}:</span>
            </span>
            <span className="font-semibold text-foreground tabular-nums">
              {formatGrams(entry.value)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export function ActivityChart({ data }: ActivityChartProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-[280px] w-full flex items-center justify-center bg-surface-subtle/50 rounded-lg border border-border">
        <div className="h-5 w-5 border-2 border-gold-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          barGap={6}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E3DFD5"
          />
          <XAxis
            dataKey="dayLabel"
            tickLine={false}
            axisLine={{ stroke: "#E3DFD5" }}
            tick={{ fill: "#68645C", fontSize: 11 }}
          />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#E3DFD5" }}
            tick={{ fill: "#68645C", fontSize: 11 }}
            tickFormatter={(val) => `${val}g`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            wrapperStyle={{ paddingBottom: 12, fontSize: 11 }}
          />
          <Bar
            name="Gold Issued"
            dataKey="issuedGrams"
            fill="#9B783E"
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
          />
          <Bar
            name="Gold Received"
            dataKey="receivedGrams"
            fill="#C8C2B3"
            radius={[4, 4, 0, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
