import "./login.css";
import React from "react";
import { Button, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook, ImTwitter } from "react-icons/im";

export default function Login() {
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
