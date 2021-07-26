import "./login.css";
import React, { useContext, useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
// import { GoogleLogin } from "react-google-login";
import signInlogo from "./images/logo.png";
import signUplogo from "./images/logo2.png";
// import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { signupSchema, signinSchema } from "./signupSchema";
import { Link, useHistory } from "react-router-dom";
import { storeCtx } from "./reducer";
import * as api from "../../api/index";
// import Facebook from "./facebook/Facebook";

export default function Login() {
  const ClientId =
    "1043680528544-nje8p2g7e1sf2n7orpo5p7ki24ni0qkr.apps.googleusercontent.com";
  const [isSignup, setSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: isSignup ? yupResolver(signupSchema) : yupResolver(signinSchema),
  });

  const handleshowpassword = () => setShowPassword((on) => !on);
  const googleFailure = (err) => console.log(err, "Signin unsuccessfull");
  const inputProps = StyledTextField();
  const history = useHistory();
  const { dispatch } = useContext(storeCtx);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/app/home");
    } catch (error) {
      console.log(error);
    }
  };
  const signup = async (formdata) => {
    try {
      const { data } = await api.signUp(formdata);
      dispatch({ type: "AUTH", data });
      console.log(formdata, data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const signin = async (formdata) => {
    try {
      const { data } = await api.signIn(formdata);
      dispatch({ type: "AUTH", data });
      history.push("/app/home");
    } catch (error) {}
  };

  const loginSubmit = (data) => {
    if (isSignup) {
      signup(data);
    } else {
      signin(data);
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        {/* Login Image Div */}

        <div className="loginLeft">
          <img
            src={isSignup ? signUplogo : signInlogo}
            className="loginImg"
            alt=""
          />
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
              type={showPassword ? "text" : "password"}
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
                  name="confirmpassword"
                  type="password"
                  placeholder="Confirm Your Password"
                  {...register("confirmpassword")}
                  InputProps={inputProps()}
                />
                {errors.confirmpassword && (
                  <div className="loginError">
                    {errors.confirmpassword.message}
                  </div>
                )}
              </>
            )}

            <div className="loginHelperText">
              {isSignup ? (
                "Password must contain at least one uppercase, one number & one special characters"
              ) : (
                <Link className="link" to="/forgotpassword">
                  Forgort Password?
                </Link>
              )}
            </div>

            <Button type="submit" className="loginButton">
              {isSignup ? "Sign Up" : "Sign in"}
            </Button>

            <hr />

            <div className="loginOthers">
              {/* <div className="loginHelperText">Sign in with</div>

              <div className="signInIcons">
                <GoogleLogin
                  clientId={ClientId}
                  render={(renderProps) => (
                    <IconButton
                      className="signIn"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <FcGoogle />
                    </IconButton>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />

                <Facebook /> */}
              {/* <IconButton className="signIn">
                  <ImTwitter style={{ color: "skyblue" }} />
                </IconButton> */}
              {/* </div> */}

              <div className="loginHelperText">
                {isSignup
                  ? "Already have an account?"
                  : "Don't have an account?"}

                <span
                  className="loginRegister"
                  onClick={() => setSignup((on) => !on)}
                >
                  {isSignup ? "Sign Up" : "Sign in"}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  function StyledTextField() {
    return (name, type) => ({
      disableUnderline: true,
      style: {
        fontSize: "13px",
        fontFamily: "Roboto",
        padding: "7px 0",
      },
      endAdornment:
        name === "password" ? (
          <InputAdornment position="start">
            <IconButton disableRipple onClick={handleshowpassword}>
              {type === "password" ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) : null,
    });
  }
}
