import "./home.css";
import React from "react";
import BookTable from "../../components/booktable/BookTable";

export default function Home() {
  return (
    <div className="home">
      <div className="homeWidgets">
        <BookTable />
      </div>
    </div>
  );
}
