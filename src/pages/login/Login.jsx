import "./login.css";
import React, { useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import LoginLogo from "./logo.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link } from "react-router-dom";

const signupSchema = yup.object().shape({
  email: yup
    .string()
    .required("Your Email is required")
    .email("Enter valid Email"),
  password: yup
    .string()
    .min(8, "Must contain atleast 8 characters")
    .required("Enter Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn't match")
    .required("Password Required"),
  fullname: yup.string().required("Your name is required"),
});
const signinSchema = yup.object().shape({
  email: yup
    .string()
    .required("Your Email is required")
    .email("Enter valid Email"),
  password: yup
    .string()
    .min(8, "Must contain atleast 8 characters")
    .required("Enter Password"),
});

export default function Login() {
  const [isSignup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: isSignup ? yupResolver(signupSchema) : yupResolver(signinSchema),
  });

  const loginSubmit = (data) => {
    console.log(data);
  };
  const handleShowPassword = () => setShowPassword((on) => !on);
  const handleChange = () => {};

  const inputProps = (name, type) => ({
    disableUnderline: true,
    style: {
      fontSize: "13px",
      fontFamily: "Roboto",
      padding: "7px 0",
    },
    endAdornment: name === "password" && (
      <InputAdornment>
        <IconButton disableRipple onClick={handleShowPassword}>
          {type === "password" ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    ),
  });

  return (
    <div className="login">
      <div className="loginContainer">
        {/* Login Image Div */}

        <div className="loginLeft">
          <img src={LoginLogo} className="loginImg" alt="" />
        </div>
        {/* Login Form Starts */}

        <div className="loginRight">
          <h3 className="loginTitle">
            {isSignup ? "Welcome !" : "Welcome Back !"}
          </h3>
          <form
            className="loginForm"
            autoComplete="off"
            onSubmit={handleSubmit(loginSubmit)}
          >
            {isSignup && (
              <>
                <TextField
                  className="loginInput"
                  name="fullname"
                  placeholder={`Enter Your First Name`}
                  {...register("fullname")}
                  InputProps={inputProps()}
                />
                {errors.fullname && (
                  <div className="loginError">{errors.fullname.message}</div>
                )}
              </>
            )}

            <TextField
              className="loginInput"
              name="email"
              {...register("email")}
              placeholder="Enter Your Email"
              InputProps={inputProps("email", "email")}
            />
            {errors.email && (
              <div className="loginError">{errors.email.message}</div>
            )}

            <TextField
              className="loginInput"
              name="password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              placeholder="Enter Your Password"
              {...register("password")}
              InputProps={inputProps(
                "password",
                showPassword ? "text" : "password"
              )}
            />
            {errors.password && (
              <div className="loginError">{errors.password.message}</div>
            )}
            {isSignup && (
              <>
                <TextField
                  className="loginInput"
                  name="confirmPassword"
                  handleChange={handleChange}
                  type="password"
                  placeholder="Confirm Your Password"
                  {...register("confirmPassword")}
                  InputProps={inputProps()}
                />
                {errors.confirmPassword && (
                  <div className="loginError">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </>
            )}

            <div
              style={{
                fontSize: "11px",
                margin: "10px  0 10px 10px",
                color: "grey",
                display: "inline-block",
                width: "300px",
              }}
            >
              {isSignup
                ? "Password must contain at least one uppercase, one number & one special characters"
                : "Forgort Password?"}
            </div>

            <Button type="submit" className="loginButton">
              {isSignup ? "Sign Up" : "Sign in"}
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
            {isSignup ? (
              <div
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  color: "grey",
                  padding: "10px 0",
                }}
              >
                Already have an account?
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    fontSize: "13px",
                    padding: " 0 10px",
                  }}
                  onClick={() => setSignup((on) => !on)}
                >
                  Sign In
                </Link>
              </div>
            ) : (
              <div
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  color: "grey",
                  padding: "10px 0",
                }}
              >
                Don't have an account?
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: 600,
                    fontSize: "13px",
                    padding: " 0 10px",
                  }}
                  onClick={() => setSignup((on) => !on)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
