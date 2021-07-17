import "./login.css";
import React from "react";
import { Button, Checkbox, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook, ImTwitter } from "react-icons/im";
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
        <div className="loginLeft">
          <img src={logo} className="loginImg" alt="" />
        </div>
        <div className="loginRight">
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
            style={{ fontSize: "11px", margin: "0 0 10px 10px", color: "grey" }}
          >
            Forgort Password?
          </div>
          <Link
            to="/app/home"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button className="loginButton">Login</Button>
          </Link>
          <hr />
          <div className="loginOthers">
            <div
              style={{
                fontSize: "12px",
                margin: "10px 0",
                color: "grey",
                textAlign: "center",
              }}
            >
              Sign up with
            </div>
            <div className="signInIcons">
              <IconButton className="signIn">
                <FcGoogle />
              </IconButton>
              <IconButton className="signIn">
                <ImFacebook style={{ color: "blue" }} />
              </IconButton>
              <IconButton className="signIn">
                <ImTwitter style={{ color: "skyblue" }} />
              </IconButton>
            </div>
          </div>
          <div
            style={{
              fontSize: "12px",
              textAlign: "center",
              color: "grey",
              padding: "10px 0",
            }}
          >
            Don't have an account?
            <span
              style={{
                color: "black",
                fontWeight: 500,
                fontSize: "13px",
                padding: " 0 10px",
              }}
            >
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
