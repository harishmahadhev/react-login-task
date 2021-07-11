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
    color: "#606060",
  },
  body: {
    fontSize: 14,
    fontFamily: "Roboto",
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    backgroundColor: "whitesmoke",
    minWidth: 500,
  },
});
const CustomButton = ({ type }) => {
  return (
    <Button
      style={{
        fontSize: "10px",
        fontWeight: 600,
        fontFamily: "Roboto",
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
              <StyledTableCell>₹4000.00</StyledTableCell>
              <StyledTableCell>
                <CustomButton type="Pending" />
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Harish</StyledTableCell>
              <StyledTableCell>2 Jun 2021</StyledTableCell>
              <StyledTableCell>₹4000.00</StyledTableCell>
              <StyledTableCell>
                <CustomButton type="Approved" />
              </StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Harish</StyledTableCell>
              <StyledTableCell>2 Jun 2021</StyledTableCell>
              <StyledTableCell>₹4000.00</StyledTableCell>
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
