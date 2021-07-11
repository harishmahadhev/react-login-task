import "./userlist.css";
import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { rows } from "../../userContent";
import { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(rows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div
            style={{
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              src={params.row.avatar}
            />
            <span style={{ fontWeight: 500 }}>{params.row.userName}</span>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={"/users/" + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{
                  backgroundColor: "#3bb077",
                  color: "white",
                  fontSize: "10px",
                  textTransform: "capitalize",
                  margin: "0 10px",
                }}
              >
                Edit
              </Button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              style={{ color: "grey", cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        className="userListTable"
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
