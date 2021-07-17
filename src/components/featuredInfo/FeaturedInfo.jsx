import "./featuredInfo.css";
import React from "react";
import {
  Assignment,
  AttachMoney,
  CalendarToday,
  Forum,
} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <h3>Dashboard</h3>
      <div className="featuredCard">
        <div className="featuredItem">
          <div className="featuredMoneyContainter">
            <div className="featuredTitle">Earnings (Monthly)</div>
            <span className="featuredMoney">₹40,000</span>
          </div>
          <CalendarToday className="featuredIcon" />
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainter">
            <div className="featuredTitle">Earnings (Annual)</div>
            <span className="featuredMoney">₹80,00,000</span>
          </div>
          <AttachMoney className="featuredIcon" />
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainter">
            <div className="featuredTitle">Tasks</div>
            <span className="featuredMoney">50%</span>
            <span className="featuredProgressBar">
              <div className="featuredProgress"></div>
            </span>
          </div>

          <Assignment className="featuredIcon" />
        </div>
        <div className="featuredItem">
          <div className="featuredMoneyContainter">
            <div className="featuredTitle">Pending Requests</div>
            <span className="featuredMoney">18</span>
          </div>
          <Forum className="featuredIcon" />
        </div>
      </div>
    </div>
  );
}
