import "./sidebar.css";
import React from "react";
import {
  AccountBalance,
  Assessment,
  Home,
  Person,
  ShoppingCart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DASHBOARD</h3>
          <ul className="sidebarList">
            <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
              <li className="sidebarListItem active">
                <Home className="sidebarIcon" /> Home
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/users"
            >
              <li className="sidebarListItem">
                <Person className="sidebarIcon" /> User
              </li>
            </Link>
            <li className="sidebarListItem">
              <ShoppingCart className="sidebarIcon" /> Product
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <AccountBalance className="sidebarIcon" /> Accounts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
