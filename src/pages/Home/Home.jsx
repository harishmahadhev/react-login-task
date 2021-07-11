import "./home.css";
import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "./../../components/chart/Charts";
import WidgetSm from "./../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
