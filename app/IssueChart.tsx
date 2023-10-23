"use client";

import {
  AreaChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Card } from "@radix-ui/themes";

export type ChartValuesType = {
  open: number;
  inProgress: number;
  closed: number;
};

const IssueChart = ({ open, inProgress, closed }: ChartValuesType) => {
  const data = [
    { label: "Open", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="#82ca9d"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="#82ca9d"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            dataKey="value"
            type="monotone"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <XAxis dataKey="label" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} tickCount={4} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" opacity=".4" vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
