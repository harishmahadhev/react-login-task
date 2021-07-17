import "./login.css";
import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "10px",
  },
  checkbox: {
    color: "black",
    "&$checked": {
      color: "black",
    },
  },
  checked: {},
}));
export default function Login() {
  const classes = useStyles();
  return (
    <div className="login">
      <div className="loginContainer">
        <h3 className="loginTitle">Welcome Back!</h3>
        <input
          autoComplete="off"
          className="loginInput"
          type="text"
          name="email"
          placeholder="Enter Your Email"
        />
        <input
          className="loginInput"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <div
          style={{ fontSize: "12px", margin: "0 0 10px 10px", color: "grey" }}
        >
          Forgort Password?
        </div>
        <div>
          <Checkbox
            icon={<CheckBoxOutlineBlank fontSize="small" />}
            checkedIcon={<CheckBox fontSize="small" />}
            classes={{ root: classes.checkbox, checked: classes.checked }}
            id="rememberme"
          />
          <label
            htmlFor="rememberme"
            style={{ userSelect: "none", fontSize: "13px" }}
          >
            Remember Me
          </label>
        </div>
        <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
          <Button className="loginButton">Login</Button>
        </Link>
        <hr />
        <Button className="loginButton Google">Login with Google</Button>
        <Button className="loginButton Facebook">Login with Facebook</Button>
      </div>
    </div>
  );
}
