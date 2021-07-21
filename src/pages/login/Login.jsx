import "./login.css";
import React from "react";
import { Button, IconButton } from "@material-ui/core";
import logo from "./logo.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const loginSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login">
      <div className="loginContainer">
        {/* Login Image Div */}

        <div className="loginLeft">
          <img src={logo} className="loginImg" alt="" />
        </div>
        {/* Login Form Starts */}

        <div className="loginRight">
          <h3 className="loginTitle">Welcome Back!</h3>
          <form
            className="loginForm"
            autoComplete="off"
            onSubmit={handleSubmit(loginSubmit)}
          >
            <input
              autoComplete="off"
              className="loginInput"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              {...register("email")}
            />
            {errors.email && (
              <div className="loginError">{errors.email.message}</div>
            )}

            <input
              className="loginInput"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              {...register("password")}
            />
            {errors.password && (
              <div className="loginError">{errors.password.message}</div>
            )}

            <div
              style={{
                fontSize: "11px",
                margin: "10px  0 10px 10px",
                color: "grey",
              }}
            >
              Forgort Password?
            </div>
            <Button type="submit" className="loginButton">
              Login
            </Button> 
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
          </form>
        </div>
      </div>
    </div>
  );
}
