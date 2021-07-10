import React from "react";
import AreaCharts from "./AreaCharts";
import "./charts.css";
import PieCharts from "./PieCharts";
export default function Charts() {
  return (
    <div className="charts">
      <AreaCharts />
      <PieCharts />
    </div>
  );
}
