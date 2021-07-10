import React from "react";
import "./charts.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Earnings: 0,
  },
  {
    name: "Feb",
    Earnings: 10000,
  },
  {
    name: "Mar",
    Earnings: 5000,
  },
  {
    name: "Apr",
    Earnings: 15000,
  },
  {
    name: "May",
    Earnings: 10000,
  },
  {
    name: "Jun",
    Earnings: 20000,
  },
  {
    name: "Jul",
    Earnings: 15000,
  },
  {
    name: "Aug",
    Earnings: 25000,
  },
  {
    name: "Sep",
    Earnings: 20000,
  },
  {
    name: "Oct",
    Earnings: 30000,
  },
  {
    name: "Nov",
    Earnings: 25000,
  },
  {
    name: "Dec",
    Earnings: 40000,
  },
];

export default function AreaCharts() {
  return (
    <div className="pieChart">
      <AreaChart
        width={800}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={1}
          tick={{ fontFamily: "sans-serif", fontSize: "12px" }}
        />
        <YAxis tick={{ fontFamily: "sans-serif", fontSize: "12px" }} />
        <Tooltip
          cursor={{ stroke: "black", strokeWidth: 2 }}
          contentStyle={{ borderRadius: "5px", border: "none" }}
          labelStyle={{ fontFamily: "sans-serif", fontWeight: 600 }}
          itemStyle={{
            color: "grey",
            fontFamily: "sans-serif",
            fontSize: "12px",
          }}
        />
        <Area
          activeDot={{ stroke: "white", strokeWidth: 2, r: 6 }}
          dot={{ fill: "black" }}
          type="monotone"
          dataKey="Earnings"
          fill="grey"
          stroke="black"
        />
      </AreaChart>
    </div>
  );
}
