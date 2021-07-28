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
import { useState } from "react";
export default function Sidebar() {
  const [classes, setClasses] = useState(1);
  const handleChange = (index) => {
    setClasses(index);
  };
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DASHBOARD</h3>
          <ul className="sidebarList">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/app/home"
            >
              <li
                className={
                  classes === 1 ? "sidebarListItem active" : "sidebarListItem"
                }
                onClick={() => handleChange(1)}
              >
                <Home className="sidebarIcon" /> Home
              </li>
            </Link>

            <li
              className={
                classes === 2 ? "sidebarListItem active" : "sidebarListItem"
              }
            >
              <Person className="sidebarIcon" /> User
            </li>

            <li className="sidebarListItem">
              <ShoppingCart className="sidebarIcon" /> Add Book
            </li>

            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" /> Edit
            </li>

            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/login"
            >
              <li className="sidebarListItem">
                <AccountBalance className="sidebarIcon" /> Login Page
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
