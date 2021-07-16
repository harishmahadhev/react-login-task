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

export default function WidgetLg() {
  const classes = useStyles();
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <TableContainer>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>Rajesh</StyledTableCell>
              <StyledTableCell>2 Jun 2021</StyledTableCell>
              <StyledTableCell>₹4000.00</StyledTableCell>
              <StyledTableCell>
                <CustomButton type="Approved" />
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Kumar</StyledTableCell>
              <StyledTableCell>2 Jun 2021</StyledTableCell>
              <StyledTableCell>₹8000.00</StyledTableCell>
              <StyledTableCell>
                <CustomButton type="Pending" />
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Harish</StyledTableCell>
              <StyledTableCell>2 Jun 2021</StyledTableCell>
              <StyledTableCell>₹400.00</StyledTableCell>
              <StyledTableCell>
                <CustomButton type="Approved" />
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Harish</StyledTableCell>
              <StyledTableCell>2 Jun 2021</StyledTableCell>
              <StyledTableCell>₹900.00</StyledTableCell>
              <StyledTableCell>
                <CustomButton type="Declined" />
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
