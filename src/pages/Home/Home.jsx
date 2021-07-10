import "./home.css";
import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "./../../components/chart/Charts";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts />
    </div>
  );
}
