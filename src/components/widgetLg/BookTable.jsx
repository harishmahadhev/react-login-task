import "./widgetlg.css";
import React from "react";
import {
  Button,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  withStyles,
} from "@material-ui/core";
import { rows } from "../../userContent";
const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "black",
    fontWeight: 600,
  },
  body: {
    fontSize: 12,
    fontFamily: "sans-serif",
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    backgroundColor: "whitesmoke",
    minWidth: 200,
  },
});

const CustomButton = ({ type }) => {
  return (
    <Button
      style={{
        fontSize: "10px",
        fontWeight: 600,
        fontFamily: "sans-serif",
        textTransform: "capitalize",
        width: "4rem",
      }}
      className={"widgetLgButton " + type}
    >
      {type}
    </Button>
  );
};

export default function BookTable() {
  const classes = useStyles();
  return (
    <div className="BookTable">
      <Button className="createButton">Add </Button>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">Users Details </h3>
        <TableContainer>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Book</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((input, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{input.userName}</StyledTableCell>
                  <StyledTableCell>{input.email}</StyledTableCell>
                  <StyledTableCell>{input.date}</StyledTableCell>
                  <StyledTableCell>{input.book}</StyledTableCell>
                  <StyledTableCell>
                    <CustomButton type={input.status} />
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
